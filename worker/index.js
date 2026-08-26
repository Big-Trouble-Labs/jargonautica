// Everything on this site is a static file except one address. A submission
// posted to /api/suggest is checked here, filed as a GitHub issue, and emailed
// on. Nothing is stored on our side and no address is collected from the sender.

const LIMITS = {
  term: 80, notes: 1200, source: 200, credit: 60, link: 200,
  problem: 1200, fix: 1200, audience: 200, help: 20,
};

const KINDS = {
  term: { label: 'new-term', prefix: 'Term', required: ['term'] },
  fix: { label: 'correction', prefix: 'Fix', required: ['term', 'problem'] },
  glossary: { label: 'new-glossary', prefix: 'Glossary', required: ['term'] },
};

const HELP = {
  yes: 'Yes, knows the field',
  some: 'Would review drafts',
  no: 'No, just thinks it should exist',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

// Trim to length and drop invisible characters, keeping newlines and tabs.
function clean(value, max) {
  if (typeof value !== 'string') return '';
  let out = '';
  for (const ch of value) {
    const code = ch.codePointAt(0);
    if (code === 10 || code === 9) { out += ch; continue; }
    if (code < 32 || code === 127) continue;
    out += ch;
  }
  return out.replace(/\n{3,}/g, '\n\n').trim().slice(0, max);
}

// A passing token is not enough on its own. A token is minted for one action on
// one hostname, so check both: otherwise somebody can lift the public site key,
// solve a challenge on their own page, and post the token here.
async function passesTurnstile(env, token, ip, expectedAction) {
  if (!env.TURNSTILE_SECRET) return true; // not configured yet, so not enforced
  if (!token) {
    console.log('turnstile: no token was sent with the request');
    return false;
  }

  const body = new FormData();
  body.append('secret', env.TURNSTILE_SECRET);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const out = await res.json().catch(() => ({ success: false }));

  // Say which of the three checks failed. Never log the token or the secret:
  // error codes, hostname and action are all safe to see.
  if (out.success !== true) {
    console.log('turnstile: verify said no. codes=' + JSON.stringify(out['error-codes'] || []));
    return false;
  }
  if (expectedAction && out.action && out.action !== expectedAction) {
    console.log(`turnstile: action mismatch. got=${out.action} expected=${expectedAction}`);
    return false;
  }

  // set TURNSTILE_HOSTNAMES to "" in .dev.vars to switch this off locally,
  // because the dummy testing keys report a hostname of their own
  const allowed = String(env.TURNSTILE_HOSTNAMES || '').split(',').map((h) => h.trim()).filter(Boolean);
  if (allowed.length && out.hostname && !allowed.includes(out.hostname)) {
    console.log(`turnstile: hostname not on the allowlist. got=${out.hostname} allowed=${allowed.join(',')}`);
    return false;
  }

  console.log(`turnstile: passed. hostname=${out.hostname} action=${out.action || 'none'}`);
  return true;
}

function issueBody(kind, f, meta) {
  const bar = (s) => String(s).replace(/\|/g, '\\|');
  const rows = [];
  const lines = [];

  if (kind === 'fix') {
    lines.push('**What is wrong**', '', f.problem, '');
    if (f.fix) lines.push('**What it should say**', '', f.fix, '');
    rows.push(['Entry', bar(f.term)]);
    if (f.source) rows.push(['Backed up by', bar(f.source)]);
  } else if (kind === 'glossary') {
    lines.push(f.notes || '_No reason given._', '');
    rows.push(['Subject', bar(f.term)]);
    if (f.audience) rows.push(['Readers', bar(f.audience)]);
    rows.push(['Would help', HELP[f.help] || 'not said']);
  } else {
    lines.push(f.notes || '_No description given._', '');
    rows.push(['Term', bar(f.term)]);
    if (f.source) rows.push(['Seen at', bar(f.source)]);
  }

  rows.push(['Credit', f.credit ? (f.link ? `[${bar(f.credit)}](${f.link})` : bar(f.credit)) : 'anonymous']);
  rows.push(['Country', meta.country || 'unknown']);

  lines.push('| | |', '|---|---|');
  for (const [k, v] of rows) lines.push(`| ${k} | ${v} |`);
  lines.push('', '---');
  lines.push('Filed automatically from the form on jargonautica.com. The sender agreed to');
  lines.push('publication under CC BY-SA 4.0. No email address was collected.');
  return lines.join('\n');
}

function plainSummary(kind, f, url) {
  const bits = [];
  if (kind === 'fix') {
    bits.push(`Entry: ${f.term}`, '', 'What is wrong:', f.problem);
    if (f.fix) bits.push('', 'Suggested wording:', f.fix);
  } else if (kind === 'glossary') {
    bits.push(`Subject: ${f.term}`);
    if (f.audience) bits.push(`Readers: ${f.audience}`);
    bits.push(`Would help: ${HELP[f.help] || 'not said'}`);
    if (f.notes) bits.push('', f.notes);
  } else {
    bits.push(`Term: ${f.term}`);
    if (f.source) bits.push(`Seen at: ${f.source}`);
    if (f.notes) bits.push('', f.notes);
  }
  bits.push('', `Credit: ${f.credit || 'anonymous'}${f.link ? ' ' + f.link : ''}`);
  if (url) bits.push('', url);
  return bits.join('\n');
}

// Best effort. A submission is never failed because the email did not go.
// Every exit says something, because a silent skip is indistinguishable from
// a silent success and we have already wasted an evening on that once.
async function notify(env, kind, f, url) {
  const missing = ['RESEND_API_KEY', 'NOTIFY_EMAIL', 'NOTIFY_FROM'].filter((k) => !env[k]);
  if (missing.length) {
    console.log('notify skipped, not configured: ' + missing.join(', '));
    return;
  }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: env.NOTIFY_FROM,
        to: [env.NOTIFY_EMAIL],
        subject: `${KINDS[kind].prefix}: ${f.term}`,
        text: plainSummary(kind, f, url),
      }),
    });
    if (!res.ok) {
      console.log('notify failed', res.status, await res.text());
      return;
    }
    const sent = await res.json().catch(() => ({}));
    console.log(`notify sent. to=${env.NOTIFY_EMAIL} from=${env.NOTIFY_FROM} id=${sent.id || 'unknown'}`);
  } catch (err) {
    console.log('notify threw', String(err));
  }
}

async function handleSuggest(request, env, ctx) {
  if (request.method !== 'POST') return json({ ok: false, error: 'Send this as a POST.' }, 405);

  let raw;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: 'That was not readable.' }, 400);
  }

  const kind = KINDS[raw.kind] ? raw.kind : 'term';

  // the honeypot: a real person never fills this in, because they never see it
  if (clean(raw.website, 40)) return json({ ok: true });

  const f = {};
  for (const key of Object.keys(LIMITS)) f[key] = clean(raw[key], LIMITS[key]);
  if (!HELP[f.help]) f.help = '';

  for (const key of KINDS[kind].required) {
    if (f[key].length < 2) return json({ ok: false, error: 'Something required was left empty.' }, 400);
  }
  if (f.link && !/^https:\/\/\S+$/i.test(f.link)) {
    return json({ ok: false, error: 'A credit link has to start with https://' }, 400);
  }

  const ip = request.headers.get('cf-connecting-ip') || '';
  if (!(await passesTurnstile(env, raw['cf-turnstile-response'], ip, 'suggest-' + kind))) {
    return json({ ok: false, error: 'The spam check did not pass.' }, 403);
  }

  if (!env.GITHUB_TOKEN || !env.GITHUB_REPO) {
    return json({ ok: false, error: 'Submissions are not connected up yet.' }, 503);
  }

  const meta = { country: request.headers.get('cf-ipcountry') || '' };
  const res = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/issues`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.GITHUB_TOKEN}`,
      accept: 'application/vnd.github+json',
      'x-github-api-version': '2022-11-28',
      'content-type': 'application/json',
      'user-agent': 'jargonautica-submission-form',
    },
    body: JSON.stringify({
      title: `${KINDS[kind].prefix}: ${f.term}`,
      body: issueBody(kind, f, meta),
      labels: ['suggestion', KINDS[kind].label],
    }),
  });

  if (!res.ok) {
    console.log('github issue failed', res.status, await res.text());
    return json({ ok: false, error: 'That did not go through.' }, 502);
  }

  const issue = await res.json();
  // the sender never sees the issue, so the email must not hold up the reply
  ctx.waitUntil(notify(env, kind, f, issue.html_url));
  return json({ ok: true });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/suggest') return handleSuggest(request, env, ctx);
    // everything else is a file that was built ahead of time
    return env.ASSETS.fetch(request);
  },
};
