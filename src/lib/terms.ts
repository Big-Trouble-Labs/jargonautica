// One place that decides what a term's address is, so every page agrees.
import { getCollection } from 'astro:content';
import GithubSlugger from 'github-slugger';
import SECTIONS from '../data/sections.json';

const slugger = new GithubSlugger();

export function slugify(title: string): string {
  slugger.reset();
  return slugger.slug(title);
}

export function sectionAnchor(section: string): string {
  return 'section-' + slugify(section);
}

export type Term = {
  slug: string;
  title: string;
  section: string;
  summary: string;
  aliases: string[];
  suggested_by?: string;
  suggested_by_url?: string;
};

export async function allTerms(): Promise<Term[]> {
  const entries = await getCollection('terms');
  return entries.map((e) => ({ slug: slugify(e.data.title), ...e.data }));
}

// Terms grouped by section, in the order the glossary itself uses.
export function groupBySection(terms: Term[]) {
  const groups = SECTIONS.map((name) => ({
    name,
    anchor: sectionAnchor(name),
    items: terms
      .filter((t) => t.section === name)
      .sort((a, b) => a.title.localeCompare(b.title, 'en-GB')),
  })).filter((g) => g.items.length);

  const stray = terms.filter((t) => !SECTIONS.includes(t.section));
  if (stray.length) {
    groups.push({
      name: 'Unsorted',
      anchor: 'section-unsorted',
      items: stray.sort((a, b) => a.title.localeCompare(b.title, 'en-GB')),
    });
  }
  return groups;
}

export { SECTIONS };
