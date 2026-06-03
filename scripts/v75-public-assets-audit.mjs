#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'security-reports');
fs.mkdirSync(OUT_DIR, { recursive: true });
const publicDir = path.join(ROOT, 'public');
const findings = [];
const patterns = [
  [/\.env/i, 'Environment file in public folder'],
  [/\.(pem|key|p12|pfx)$/i, 'Private key/certificate-like file in public folder'],
  [/\.(zip|tar|tgz|gz|rar|7z)$/i, 'Archive file in public folder'],
  [/preview/i, 'Preview/debug file in public folder'],
  [/QA_.*\.(json|md)$/i, 'QA report in public folder'],
  [/LAUNCH_HANDOFF_.*\.md$/i, 'Launch handoff file in public folder'],
  [/\.map$/i, 'Source map in public folder']
];
function walk(dir, arr = []) {
  if (!fs.existsSync(dir)) return arr;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, arr); else arr.push(p);
  }
  return arr;
}
for (const f of walk(publicDir)) {
  const rel = path.relative(ROOT, f).replaceAll('\\', '/');
  for (const [re, msg] of patterns) if (re.test(rel)) findings.push({ severity: 'high', file: rel, message: msg, advice: 'Remove it before production deploy.' });
}
const report = { audit: 'v75-public-assets-audit', generatedAt: new Date().toISOString(), pass: findings.length === 0, findings };
fs.writeFileSync(path.join(OUT_DIR, 'v75-public-assets-audit.json'), JSON.stringify(report, null, 2));
console.log(`v75 public assets audit: ${report.pass ? 'PASS' : 'FAIL'}`);
if (!report.pass) process.exitCode = 1;
