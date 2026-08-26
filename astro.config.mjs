import { defineConfig } from 'astro/config';
import { remarkWikilinks } from './src/plugins/wikilinks.mjs';
import { remarkTwoLevel } from './src/plugins/twolevel.mjs';
import fs from 'node:fs';

let redirects = {};
try {
  const raw = JSON.parse(fs.readFileSync('./src/generated/redirects.json', 'utf8'));
  redirects = Object.fromEntries(
    Object.entries(raw).map(([from, to]) => [`/ai/${from}`, `/ai/${to}`])
  );
} catch {}

export default defineConfig({
  site: 'https://jargonautica.com',
  markdown: { remarkPlugins: [remarkWikilinks, remarkTwoLevel] },
  redirects,
});
