// Turns [[Term]] and [[Term|label]] into real links using the generated map.
import { visit } from 'unist-util-visit';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

function load() {
  try {
    delete require.cache[require.resolve('../generated/linkmap.json')];
    return require('../generated/linkmap.json');
  } catch {
    return { topic: 'ai', map: {} };
  }
}

const PATTERN = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

export function remarkWikilinks() {
  return (tree) => {
    const { topic, map } = load();
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || !node.value.includes('[[')) return;
      const out = [];
      let last = 0;
      let m;
      PATTERN.lastIndex = 0;
      while ((m = PATTERN.exec(node.value)) !== null) {
        const [full, target, label] = m;
        if (m.index > last) out.push({ type: 'text', value: node.value.slice(last, m.index) });
        const slug = map[target.trim().toLowerCase()];
        const text = (label ?? target).trim();
        if (slug === undefined) {
          out.push({ type: 'text', value: text });
        } else {
          out.push({
            type: 'link',
            url: slug === '' ? `/${topic}/` : `/${topic}/${slug}/`,
            data: { hProperties: { class: 'wikilink' } },
            children: [{ type: 'text', value: text }],
          });
        }
        last = m.index + full.length;
      }
      if (!out.length) return;
      if (last < node.value.length) out.push({ type: 'text', value: node.value.slice(last) });
      parent.children.splice(index, 1, ...out);
      return index + out.length;
    });
  };
}
