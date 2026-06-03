#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const OUT_DIR = path.join(process.cwd(), 'security-reports');
fs.mkdirSync(OUT_DIR, { recursive: true });

let audit;
let error = null;
try {
  const raw = execSync('npm audit --omit=dev --json', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 120000 });
  audit = JSON.parse(raw);
} catch (err) {
  const out = err.stdout?.toString() || '';
  try { audit = JSON.parse(out); } catch { error = err.message; audit = null; }
}

const vulns = audit?.metadata?.vulnerabilities || {};
const critical = vulns.critical || 0;
const high = vulns.high || 0;
const pass = !error && critical === 0 && high === 0;
const report = { audit: 'v75-dependency-gate', generatedAt: new Date().toISOString(), pass, error, vulnerabilities: vulns, raw: audit };
fs.writeFileSync(path.join(OUT_DIR, 'v75-dependency-gate.json'), JSON.stringify(report, null, 2));
console.log(`v75 dependency gate: ${pass ? 'PASS' : 'FAIL'}`);
if (critical || high) console.log(`Critical: ${critical}, High: ${high}`);
if (error) console.log(error);
if (!pass) process.exitCode = 1;
