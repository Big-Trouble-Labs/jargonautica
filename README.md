# Jargonautica

Jargon, explained twice. A plain English glossary with a technical version underneath every
entry, and every term linked to the ones it depends on.

Live at [jargonautica.com](https://jargonautica.com). The AI glossary is the first one.

## What Is Where

| Path | What it holds |
|---|---|
| `content/ai/` | The terms, one Markdown file each. Copied in from the Obsidian vault. |
| `scripts/sync.mjs` | Copies the notes in and builds the link map and alias redirects. |
| `scripts/graph.mjs` | Works out the graph layout once, at build time. |
| `scripts/check.mjs` | The checks that stop a broken glossary reaching the web. |
| `src/lib/terms.ts` | One place that decides what a term's web address is. |
| `src/plugins/` | Turns `[[wikilinks]]` into real links, collapses the technical view. |
| `src/pages/` | Landing, browse, term, graph, suggest, about, 404, plus the JSON and XML endpoints. |
| `worker/index.js` | The only server-side code: it files suggestions as GitHub issues. |
| `public/` | Favicon, app icon, social preview image. |

## Day To Day

```bash
npm install          # once
npm run dev          # sync the notes, then a live local site
npm run build        # sync, check, build into dist/
npm run worker:dev   # build, then serve through the real Worker on :8787
```

Set `VAULT_DIR` in a `.env` file (see `.env.example`) to point at the Obsidian folder holding the
term notes. Without it, whatever is already in `content/ai` is used, which is what the build server
needs.

The loop for adding a term: write it in Obsidian, `npm run sync`, look at it, commit, push.
Pushing to `main` deploys.

## The Checks

`npm run check` refuses to let four things through:

- a link pointing at a term that does not exist
- a term nothing links to, which would sit alone in the graph
- an alias that clashes with a real term's name, or with another alias
- two terms that would end up at the same web address

It also makes sure the Worker parses. `npm run worker:check` bundles the Worker and validates
`wrangler.jsonc` without deploying anything. All of this runs in CI on every push.

## Suggestions

`/suggest/` posts to `/api/suggest`, which is handled by the Worker. It files a GitHub issue on
this repository and returns the link. Nothing is stored on our side and no email address is
collected.

Two secrets make it work. Set them in the Cloudflare dashboard under the Worker's settings, or
locally in a `.dev.vars` file (see `.dev.vars.example`):

- `GITHUB_TOKEN`: a fine-grained token scoped to this repository only, with Issues set to read and
  write. Nothing else.
- `TURNSTILE_SECRET`: the secret half of a Cloudflare Turnstile widget. Leave it unset and the spam
  check is skipped, which is fine locally and is not fine in production.

The public half of the Turnstile key is a build-time variable, `PUBLIC_TURNSTILE_SITE_KEY`. Without
it the form still works, just without the widget.

For the issue links to mean anything to the people who submit them, this repository has to be
public.

## Licences

The writing in `content/` is [CC BY-SA 4.0](LICENSE-CONTENT.md). The code is [MIT](LICENSE).
