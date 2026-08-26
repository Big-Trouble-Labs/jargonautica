// Builds the graph: nodes, edges, and a fixed layout worked out once at build
// time so the browser never has to run a simulation. The layout is seeded, so
// the same notes always produce the same picture.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';

const DIR = path.join('content', 'ai');
const INDEX_NOTE = 'AI Terminology Index';
const OUT = 'src/generated/graph.json';

// ---- read the notes ----
const slugger = new GithubSlugger();
const nodes = [];
const bySlug = new Map();
const lookup = new Map(); // lowercased title or alias -> slug
const rawLinks = [];

for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.md')).sort()) {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'));
  const title = data.title ?? path.basename(f, '.md');
  if (title === INDEX_NOTE) continue;
  slugger.reset();
  const slug = slugger.slug(title);
  const i = nodes.length;
  nodes.push({ t: title, s: slug, c: data.section ?? 'Unsorted', d: 0, x: 0, y: 0 });
  bySlug.set(slug, i);
  lookup.set(title.toLowerCase(), slug);
  for (const a of data.aliases ?? []) lookup.set(String(a).toLowerCase(), slug);
  rawLinks.push({ from: slug, content });
}

// ---- sections, in the order the glossary itself uses ----
const canonical = JSON.parse(fs.readFileSync('src/data/sections.json', 'utf8'));
const sections = canonical.filter((s) => nodes.some((n) => n.c === s));
for (const n of nodes) if (!sections.includes(n.c)) sections.push(n.c);
for (const n of nodes) n.c = sections.indexOf(n.c);

// ---- edges, undirected and deduplicated ----
const seen = new Set();
const edges = [];
for (const { from, content } of rawLinks) {
  const a = bySlug.get(from);
  for (const m of content.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    const target = lookup.get(m[1].trim().toLowerCase());
    if (!target) continue;
    const b = bySlug.get(target);
    if (b === undefined || b === a) continue;
    const key = a < b ? `${a}:${b}` : `${b}:${a}`;
    if (seen.has(key)) continue;
    seen.add(key);
    edges.push([a, b]);
    nodes[a].d++;
    nodes[b].d++;
  }
}

// ---- neighbours, for the local graph on each term page ----
const neighbours = nodes.map(() => []);
for (const [a, b] of edges) { neighbours[a].push(b); neighbours[b].push(a); }

// ---- layout ----
// A plain force simulation. Nodes push each other apart, links pull their two
// ends together, and every node feels a gentle tug toward the middle of its own
// section so the sections read as clusters rather than one even mist.
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rnd = mulberry32(20260825);
const N = nodes.length;
const x = new Float64Array(N);
const y = new Float64Array(N);
const vx = new Float64Array(N);
const vy = new Float64Array(N);

// start each section on its own spoke, which gives the simulation a sane
// starting point and stops it untangling for hundreds of steps
const R0 = 900;
for (let i = 0; i < N; i++) {
  const a = (nodes[i].c / sections.length) * Math.PI * 2;
  const jitter = 260;
  x[i] = Math.cos(a) * R0 + (rnd() - 0.5) * jitter;
  y[i] = Math.sin(a) * R0 + (rnd() - 0.5) * jitter;
}

const ITER = 600;
const REPEL = 9000;
const SPRING = 0.005;
const REST = 90;
const CLUSTER = 0.060;
const CENTRE = 0.0006;
const DAMP = 0.86;
const MAXSTEP = 42;

const cx = new Float64Array(sections.length);
const cy = new Float64Array(sections.length);
const cn = new Float64Array(sections.length);

for (let step = 0; step < ITER; step++) {
  const cool = 1 - step / ITER;

  cx.fill(0); cy.fill(0); cn.fill(0);
  for (let i = 0; i < N; i++) { const c = nodes[i].c; cx[c] += x[i]; cy[c] += y[i]; cn[c]++; }
  for (let c = 0; c < sections.length; c++) { if (cn[c]) { cx[c] /= cn[c]; cy[c] /= cn[c]; } }

  const fx = new Float64Array(N);
  const fy = new Float64Array(N);

  // repulsion, every pair
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      let dx = x[i] - x[j];
      let dy = y[i] - y[j];
      let d2 = dx * dx + dy * dy;
      if (d2 < 0.01) { dx = (rnd() - 0.5) * 0.1; dy = (rnd() - 0.5) * 0.1; d2 = 0.01; }
      const d = Math.sqrt(d2);
      const f = REPEL / d2;
      const ux = dx / d;
      const uy = dy / d;
      fx[i] += ux * f; fy[i] += uy * f;
      fx[j] -= ux * f; fy[j] -= uy * f;
    }
  }

  // springs along the links
  for (const [a, b] of edges) {
    const dx = x[b] - x[a];
    const dy = y[b] - y[a];
    const d = Math.hypot(dx, dy) || 0.01;
    const f = (d - REST) * SPRING;
    const ux = (dx / d) * f;
    const uy = (dy / d) * f;
    fx[a] += ux; fy[a] += uy;
    fx[b] -= ux; fy[b] -= uy;
  }

  // pull toward the section centre, and weakly toward the middle of everything
  for (let i = 0; i < N; i++) {
    const c = nodes[i].c;
    fx[i] += (cx[c] - x[i]) * CLUSTER;
    fy[i] += (cy[c] - y[i]) * CLUSTER;
    fx[i] += -x[i] * CENTRE;
    fy[i] += -y[i] * CENTRE;
  }

  for (let i = 0; i < N; i++) {
    vx[i] = (vx[i] + fx[i]) * DAMP;
    vy[i] = (vy[i] + fy[i]) * DAMP;
    const s = Math.hypot(vx[i], vy[i]);
    const cap = MAXSTEP * cool + 2;
    if (s > cap) { vx[i] = (vx[i] / s) * cap; vy[i] = (vy[i] / s) * cap; }
    x[i] += vx[i];
    y[i] += vy[i];
  }
}

// ---- normalise into a tidy box ----
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
for (let i = 0; i < N; i++) {
  if (x[i] < minX) minX = x[i];
  if (x[i] > maxX) maxX = x[i];
  if (y[i] < minY) minY = y[i];
  if (y[i] > maxY) maxY = y[i];
}
const SIZE = 2000;
const scale = SIZE / Math.max(maxX - minX, maxY - minY);
for (let i = 0; i < N; i++) {
  nodes[i].x = Math.round((x[i] - (minX + maxX) / 2) * scale * 10) / 10;
  nodes[i].y = Math.round((y[i] - (minY + maxY) / 2) * scale * 10) / 10;
}

fs.mkdirSync('src/generated', { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ sections, nodes, edges, neighbours }));

const isolated = nodes.filter((n) => n.d === 0).length;
const kb = Math.round(fs.statSync(OUT).size / 1024);
console.log(`graph: ${N} nodes, ${edges.length} links, ${sections.length} sections, ${isolated} isolated, ${kb}KB`);
