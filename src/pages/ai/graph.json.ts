import type { APIRoute } from 'astro';
import fs from 'node:fs';

// The layout is worked out at build time by scripts/graph.mjs. This just serves it.
export const GET: APIRoute = () => {
  const body = fs.readFileSync('src/generated/graph.json', 'utf8');
  return new Response(body, {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
