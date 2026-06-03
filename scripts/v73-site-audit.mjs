#!/usr/bin/env node
/**
 * v73 local launch audit.
 * Run from your project root after installing v71 + v72 + v70.1 + v73:
 *   node scripts/v73-site-audit.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'app/page.tsx',
  'app/catalog/page.tsx',
  'components/palantir-search.tsx',
  'app/globals.css',
  'public/v71/assets',
  'public/v72/assets',
  'public/v70/assets'
];
const recommended = [
  'components/v71-premium-preview-environment.tsx',
  'components/v72-catalog.tsx',
  'components/v72-palantir-search.tsx',
  'components/v70-detail-page.tsx',
  'lib/v70-detail-data.ts'
];

function exists(p) { return fs.existsSync(path.join(root, p)); }
function marker(css, text) { return css.includes(text); }

let failed = false;
const lines = [];
lines.push('V73 FINAL QA AUDIT');
lines.push('===================');
lines.push('');
for (const p of required) {
  const ok = exists(p);
  failed ||= !ok;
  lines.push(`${ok ? '✓' : '✕'} required: ${p}`);
}
lines.push('');
for (const p of recommended) {
  lines.push(`${exists(p) ? '✓' : '⚠'} recommended: ${p}`);
}

const cssPath = path.join(root, 'app/globals.css');
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8');
  const checks = [
    ['v71 home CSS', 'v71'],
    ['v72 consistency CSS', 'v72'],
    ['v70 detail CSS', 'v70'],
    ['v73 cleanup CSS LAST', 'v73-final-polish']
  ];
  lines.push('');
  lines.push('CSS markers:');
  for (const [name, text] of checks) {
    const ok = marker(css, text);
    failed ||= name.includes('LAST') && !ok;
    lines.push(`${ok ? '✓' : '✕'} ${name}`);
  }
  const lastV73 = css.lastIndexOf('v73-final-polish');
  const lastV72 = css.lastIndexOf('v72');
  const lastV71 = css.lastIndexOf('v71');
  const lastV70 = css.lastIndexOf('v70');
  const isLast = lastV73 > Math.max(lastV72, lastV71, lastV70);
  lines.push(`${isLast ? '✓' : '✕'} v73 CSS appears after v70/v71/v72 markers`);
  failed ||= !isLast;
}

lines.push('');
lines.push('Manual checks still required:');
lines.push('- Run npm run build');
lines.push('- Open /, /catalog, /characters/galadriel, /artifacts/the-one-ring');
lines.push('- Test Cmd/Ctrl+K, Esc, and a real search query');
lines.push('- Check iPhone width 390px and desktop 1440px for horizontal overflow');
lines.push('- Verify CSS v73 was pasted at the very end of app/globals.css');

console.log(lines.join('\n'));
process.exit(failed ? 1 : 0);
