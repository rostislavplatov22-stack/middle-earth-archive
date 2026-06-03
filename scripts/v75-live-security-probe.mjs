#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const base = process.argv[2];
if (!base) {
  console.error('Usage: node scripts/v75-live-security-probe.mjs http://localhost:3000');
  process.exit(2);
}
const BASE = base.replace(/\/$/, '');
const OUT_DIR = path.join(process.cwd(), 'security-reports');
fs.mkdirSync(OUT_DIR, { recursive: true });

const payloads = [
  '<script>alert(1)</script>',
  '"><img src=x onerror=alert(1)>',
  'javascript:alert(1)',
  'a'.repeat(1000)
];

function header(headers, name) { return headers.get(name) || headers.get(name.toLowerCase()) || ''; }
function hasAnyHeader(headers, names) { return names.some(n => !!header(headers, n)); }

const findings = [];
function add(severity, path, message, advice = '') { findings.push({ severity, path, message, advice }); }

async function probePath(p) {
  const url = `${BASE}${p}`;
  try {
    const res = await fetch(url, { redirect: 'manual' });
    const text = await res.text().catch(() => '');
    return { ok: true, path: p, status: res.status, headers: Object.fromEntries(res.headers.entries()), textSample: text.slice(0, 5000) };
  } catch (err) {
    return { ok: false, path: p, error: String(err) };
  }
}

const pages = ['/', '/catalog', '/characters/galadriel', '/artifacts/the-one-ring'];
const pageResults = [];
for (const p of pages) {
  const r = await probePath(p);
  pageResults.push(r);
  if (!r.ok) { add('medium', p, `Could not fetch route: ${r.error}`, 'If the route does not exist, ignore. Otherwise fix deploy routing.'); continue; }
  const h = new Headers(r.headers);
  if (!hasAnyHeader(h, ['content-security-policy'])) add('high', p, 'Missing Content-Security-Policy header', 'Add CSP in Netlify/Next/middleware and verify on deployed URL.');
  if (!hasAnyHeader(h, ['x-frame-options']) && !/frame-ancestors/i.test(header(h, 'content-security-policy'))) add('high', p, 'Missing frame protection', 'Use X-Frame-Options: DENY or CSP frame-ancestors none.');
  if (!/nosniff/i.test(header(h, 'x-content-type-options'))) add('medium', p, 'Missing X-Content-Type-Options: nosniff', 'Add nosniff.');
  if (!hasAnyHeader(h, ['referrer-policy'])) add('medium', p, 'Missing Referrer-Policy', 'Use strict-origin-when-cross-origin or stricter.');
  if (!hasAnyHeader(h, ['permissions-policy'])) add('medium', p, 'Missing Permissions-Policy', 'Disable camera/microphone/geolocation/payment unless needed.');
  if (BASE.startsWith('https://') && !hasAnyHeader(h, ['strict-transport-security'])) add('high', p, 'Missing HSTS on HTTPS route', 'Add Strict-Transport-Security after confirming HTTPS is stable.');
}

const searchResults = [];
for (const payload of payloads) {
  const q = encodeURIComponent(payload);
  const p = `/api/search?q=${q}`;
  const r = await probePath(p);
  searchResults.push(r);
  if (!r.ok) { add('medium', '/api/search', `Could not fetch search route: ${r.error}`, 'If search API does not exist, ignore. Otherwise fix it.'); continue; }
  const body = r.textSample || '';
  if (/text\/html/i.test(r.headers['content-type'] || '')) add('high', '/api/search', 'Search route returns HTML content type', 'Return application/json only.');
  if (body.includes('<script') || body.includes('onerror=') || body.includes('javascript:alert')) {
    add('critical', '/api/search', `Payload appears reflected in search response: ${payload.slice(0, 60)}`, 'Sanitize query, return JSON only, and never render user data as HTML.');
  }
  if (payload.length > 200 && r.status < 400) {
    add('medium', '/api/search', 'Very long query was accepted with non-error response', 'Enforce server-side max query length.');
  }
}

const pass = !findings.some(f => ['critical', 'high'].includes(f.severity));
const report = { audit: 'v75-live-security-probe', generatedAt: new Date().toISOString(), base: BASE, pass, findings, pageResults, searchResults };
fs.writeFileSync(path.join(OUT_DIR, 'v75-live-security-probe.json'), JSON.stringify(report, null, 2));
console.log(`v75 live probe: ${pass ? 'PASS' : 'FAIL'}`);
console.log(`Report: ${path.join(OUT_DIR, 'v75-live-security-probe.json')}`);
if (!pass) process.exitCode = 1;
