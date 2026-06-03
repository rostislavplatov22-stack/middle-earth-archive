#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'security-reports');
fs.mkdirSync(OUT_DIR, { recursive: true });
const files = ['public/_headers', 'netlify.toml', 'middleware.ts', 'next.config.js', 'next.config.mjs', 'next.config.ts'];
const text = files.map(f => fs.existsSync(path.join(ROOT, f)) ? `\n--- ${f} ---\n${fs.readFileSync(path.join(ROOT, f), 'utf8')}` : '').join('\n');
const checks = [
  ['Content-Security-Policy', /Content-Security-Policy/i],
  ['Frame protection', /X-Frame-Options|frame-ancestors/i],
  ['nosniff', /X-Content-Type-Options|nosniff/i],
  ['Referrer Policy', /Referrer-Policy/i],
  ['Permissions Policy', /Permissions-Policy/i],
  ['HSTS', /Strict-Transport-Security/i]
];
const findings = checks.filter(([_, re]) => !re.test(text)).map(([name]) => ({ severity: 'high', message: `Missing ${name}` }));
const report = { audit: 'v75-netlify-header-audit', generatedAt: new Date().toISOString(), pass: findings.length === 0, checkedFiles: files, findings };
fs.writeFileSync(path.join(OUT_DIR, 'v75-netlify-header-audit.json'), JSON.stringify(report, null, 2));
console.log(`v75 header audit: ${report.pass ? 'PASS' : 'FAIL'}`);
if (!report.pass) process.exitCode = 1;
