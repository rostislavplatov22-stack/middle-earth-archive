#!/usr/bin/env node
/**
 * v73 route smoke test. Start the site first, then run:
 *   npm run dev
 *   node scripts/v73-route-smoke.mjs http://localhost:3000
 */
const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const routes = ['/', '/catalog', '/characters/galadriel', '/characters/gandalf', '/realms/gondor', '/artifacts/the-one-ring', '/ages/third-age'];
let failed = false;
for (const route of routes) {
  const url = base + route;
  try {
    const res = await fetch(url, { redirect: 'manual' });
    const ok = res.status >= 200 && res.status < 400;
    console.log(`${ok ? '✓' : '✕'} ${res.status} ${route}`);
    if (!ok) failed = true;
  } catch (err) {
    console.log(`✕ ERROR ${route}: ${err.message}`);
    failed = true;
  }
}
process.exit(failed ? 1 : 0);
