import type { APIRoute } from 'astro';
import { allTerms } from '../lib/terms';

// One small file, fetched the first time somebody opens search.
export const GET: APIRoute = async () => {
  const terms = await allTerms();
  const body = terms.map((t) => ({
    t: t.title,
    s: t.slug,
    c: t.section,
    d: t.summary,
    a: t.aliases ?? [],
  }));
  return new Response(JSON.stringify(body), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
