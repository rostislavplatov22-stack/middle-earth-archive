#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'security-reports');
fs.mkdirSync(OUT_DIR, { recursive: true });
const ignore = new Set(['node_modules', '.git', '.next', 'out', 'dist', 'build', 'security-reports']);
const patterns = [
  ['critical', 'Private key', /-----BEGIN (RSA |EC |OPENSSH |DSA |)?PRIVATE KEY-----/i],
  ['critical', 'GitHub token', /gh[pousr]_[A-Za-z0-9_]{20,}/],
  ['critical', 'OpenAI-like key', /sk-[A-Za-z0-9_-]{20,}/],
  ['critical', 'AWS access key', /AKIA[0-9A-Z]{16}/],
  ['high', 'Google API key', /AIza[0-9A-Za-z\-_]{35}/],
  ['critical', 'NEXT_PUBLIC secret-like env name', /NEXT_PUBLIC_[A-Z0-9_]*(SECRET|TOKEN|KEY|PASSWORD)[A-Z0-9_]*\s*=/i],
  ['high', 'Generic secret assignment', /(secret|token|password|private_key|api_key)\s*[:=]\s*['\"][^'\"]{12,}['\"]/i]
];
const textExt = /\.(js|jsx|ts|tsx|mjs|cjs|json|md|txt|toml|yml|yaml|env|html|css|scss)$/i;
function walk(dir, arr=[]) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignore.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, arr); else arr.push(p);
  }
  return arr;
}
const findings = [];
for (const f of walk(ROOT)) {
  if (!textExt.test(f) && !path.basename(f).startsWith('.env')) continue;
  let s = '';
  try { s = fs.readFileSync(f, 'utf8'); } catch { continue; }
  const rel = path.relative(ROOT, f).replaceAll('\\', '/');
  for (const [severity, name, re] of patterns) if (re.test(s)) findings.push({ severity, file: rel, message: name, advice: 'Remove from source, rotate if real, store in Netlify env variables.' });
}
const pass = !findings.some(f => ['critical','high'].includes(f.severity));
const report = { audit: 'v75-secret-scan', generatedAt: new Date().toISOString(), pass, findings };
fs.writeFileSync(path.join(OUT_DIR, 'v75-secret-scan.json'), JSON.stringify(report, null, 2));
console.log(`v75 secret scan: ${pass ? 'PASS' : 'FAIL'}`);
if (!pass) process.exitCode = 1;
