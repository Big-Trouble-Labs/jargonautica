import type { APIRoute } from 'astro';
import { allTerms } from '../lib/terms';

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://jargonautica.com')).href.replace(/\/$/, '');
  const terms = await allTerms();
  const urls = [
    { loc: '/', pri: '1.0' },
    { loc: '/ai/', pri: '0.9' },
    { loc: '/ai/graph/', pri: '0.7' },
    { loc: '/about/', pri: '0.4' },
    { loc: '/suggest/', pri: '0.4' },
    { loc: '/suggest/fix/', pri: '0.3' },
    { loc: '/suggest/glossary/', pri: '0.3' },
    ...terms.map((t) => ({ loc: `/ai/${t.slug}/`, pri: '0.6' })),
  ];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${base}${u.loc}</loc><priority>${u.pri}</priority></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(xml, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
};
