#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DELETE = process.argv.includes('--delete');
const OUT_DIR = path.join(ROOT, 'security-reports');
fs.mkdirSync(OUT_DIR, { recursive: true });

const candidates = [];
const patterns = [
  /(^|\/)preview(\/|$)/i,
  /(^|\/).*preview.*\.html$/i,
  /(^|\/)QA_.*\.(json|md)$/i,
  /(^|\/)LAUNCH_HANDOFF_.*\.md$/i,
  /(^|\/).*\.(zip|tar|tgz|gz|rar|7z)$/i,
  /(^|\/)debug(\/|$)/i,
  /(^|\/).*\.map$/i,
  /trust-security|v74t|security-trust|v74_1/i
];
const ignoreDirs = new Set(['node_modules', '.git', '.next', 'security-reports']);
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoreDirs.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    const rel = path.relative(ROOT, p).replaceAll('\\', '/');
    if (patterns.some(re => re.test(rel))) candidates.push({ path: p, rel, isDirectory: ent.isDirectory() });
    if (ent.isDirectory()) walk(p);
  }
}
walk(ROOT);

const unique = [...new Map(candidates.map(c => [c.rel, c])).values()]
  .sort((a, b) => b.rel.length - a.rel.length);

if (DELETE) {
  for (const c of unique) {
    if (!fs.existsSync(c.path)) continue;
    fs.rmSync(c.path, { recursive: true, force: true });
  }
}
const report = { audit: 'v75-production-cleanup-dry-run', generatedAt: new Date().toISOString(), mode: DELETE ? 'delete' : 'dry-run', candidates: unique.map(c => c.rel) };
fs.writeFileSync(path.join(OUT_DIR, 'v75-production-cleanup-report.json'), JSON.stringify(report, null, 2));
console.log(`v75 production cleanup ${DELETE ? 'deleted' : 'dry-run'}: ${unique.length} candidates`);
for (const c of unique.slice(0, 50)) console.log(`- ${c.rel}`);
if (!DELETE) console.log('Run with --delete to remove these candidates after review.');
