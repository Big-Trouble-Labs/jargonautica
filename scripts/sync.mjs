// Copies notes from the Obsidian vault into content/, then builds the link map.
// Set VAULT_DIR to your vault's term folder. If unset, whatever is already in
// content/ai is used as-is, which is what happens on a build server.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';

const TOPIC = 'ai';
const DEST = path.join('content', TOPIC);
const VAULT = process.env.VAULT_DIR;
const INDEX_NOTE = 'AI Terminology Index';

if (VAULT) {
  if (!fs.existsSync(VAULT)) {
    console.error(`VAULT_DIR does not exist: ${VAULT}`);
    process.exit(1);
  }
  fs.rmSync(DEST, { recursive: true, force: true });
  fs.mkdirSync(DEST, { recursive: true });
  let copied = 0;
  for (const f of fs.readdirSync(VAULT)) {
    if (!f.endsWith('.md')) continue;
    fs.copyFileSync(path.join(VAULT, f), path.join(DEST, f));
    copied++;
  }
  console.log(`sync: copied ${copied} notes from ${VAULT}`);
} else {
  console.log('sync: VAULT_DIR not set, using content/ai as-is');
}

// ---- link map: every title and alias, lowercased, to its slug ----
const slugger = new GithubSlugger();
const map = {};
const terms = [];

for (const f of fs.readdirSync(DEST).filter((f) => f.endsWith('.md'))) {
  const raw = fs.readFileSync(path.join(DEST, f), 'utf8');
  const { data } = matter(raw);
  const title = data.title ?? path.basename(f, '.md');
  if (title === INDEX_NOTE) continue;
  slugger.reset();
  const slug = slugger.slug(title);
  terms.push({ title, slug, section: data.section ?? 'Unsorted', aliases: data.aliases ?? [] });
  map[title.toLowerCase()] = slug;
  for (const a of data.aliases ?? []) map[String(a).toLowerCase()] = slug;
}

// the index note and the source document both point at the browse page
map[INDEX_NOTE.toLowerCase()] = '';
map['ai-glossary'] = '';

fs.mkdirSync('src/generated', { recursive: true });
fs.writeFileSync('src/generated/linkmap.json', JSON.stringify({ topic: TOPIC, map }, null, 0));

// aliases that are not also titles become redirects
const titles = new Set(terms.map((t) => t.slug));
const redirects = {};
for (const t of terms) {
  for (const a of t.aliases) {
    slugger.reset();
    const s = slugger.slug(String(a));
    if (!titles.has(s) && !redirects[s]) redirects[s] = t.slug;
  }
}
fs.writeFileSync('src/generated/redirects.json', JSON.stringify(redirects, null, 0));

console.log(`sync: ${terms.length} terms, ${Object.keys(map).length} link targets, ${Object.keys(redirects).length} alias redirects`);
