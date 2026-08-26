// The four checks that should fail a build rather than reach the web.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const DIR = path.join('content', 'ai');
const INDEX_NOTE = 'AI Terminology Index';
const REQUIRED = ['title', 'section', 'summary'];
const problems = [];

const notes = [];
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.md'))) {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, f), 'utf8'));
  notes.push({ file: f, data, content });
}

const titles = new Map();
const aliases = new Map();

for (const n of notes) {
  const isIndex = n.data.title === INDEX_NOTE;
  if (!isIndex) {
    for (const key of REQUIRED) {
      if (!n.data[key]) problems.push(`${n.file}: missing frontmatter field '${key}'`);
    }
  }
  if (/[/:]/.test(n.data.title ?? '')) problems.push(`${n.file}: title contains a character that cannot be a filename`);
  const t = (n.data.title ?? '').toLowerCase();
  if (titles.has(t)) problems.push(`duplicate title '${n.data.title}' in ${n.file} and ${titles.get(t)}`);
  titles.set(t, n.file);
}

for (const n of notes) {
  for (const a of n.data.aliases ?? []) {
    const k = String(a).toLowerCase();
    if (titles.has(k)) problems.push(`${n.file}: alias '${a}' collides with the note titled '${a}'`);
    if (aliases.has(k)) problems.push(`alias '${a}' used by both ${n.file} and ${aliases.get(k)}`);
    aliases.set(k, n.file);
  }
}

// two different titles that would end up at the same web address
const slugs = new Map();
for (const n of notes) {
  const t = n.data.title ?? '';
  if (!t || t === INDEX_NOTE) continue;
  const s = t.toLowerCase().replace(/[^a-z0-9 -]/g, '').trim().replace(/\s+/g, '-');
  if (slugs.has(s)) problems.push(`'${t}' and '${slugs.get(s)}' would share the web address /ai/${s}/`);
  slugs.set(s, t);
}

const known = new Set([...titles.keys(), ...aliases.keys(), 'ai-glossary']);
const incoming = new Map();

for (const n of notes) {
  const seen = new Set();
  for (const m of n.content.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    const target = m[1].trim();
    const k = target.toLowerCase();
    if (!known.has(k)) problems.push(`${n.file}: link to '${target}', which does not exist`);
    if (!seen.has(k)) { seen.add(k); incoming.set(k, (incoming.get(k) ?? 0) + 1); }
  }
}

for (const n of notes) {
  const t = (n.data.title ?? '').toLowerCase();
  if (t === INDEX_NOTE.toLowerCase()) continue;
  const from = incoming.get(t) ?? 0;
  const viaAlias = (n.data.aliases ?? []).reduce((a, x) => a + (incoming.get(String(x).toLowerCase()) ?? 0), 0);
  if (from + viaAlias < 2) problems.push(`${n.file}: only the index links to it, so it would sit alone in the graph`);
}

if (problems.length) {
  console.error(`\ncheck: ${problems.length} problem(s)\n`);
  for (const p of problems.slice(0, 40)) console.error('  ' + p);
  if (problems.length > 40) console.error(`  ...and ${problems.length - 40} more`);
  process.exit(1);
}
console.log(`check: ${notes.length} notes, all links resolve, no orphans, no alias or address collisions`);
