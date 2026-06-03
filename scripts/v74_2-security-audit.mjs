#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const ignoreDirs = new Set(['.git', 'node_modules', '.next', 'out', 'dist', '.netlify'])
const allowedExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.md', '.env', '.local', '.toml', '.txt', '.css', '.html'])

const patterns = [
  [/NEXT_PUBLIC_.*(SECRET|TOKEN|KEY|PRIVATE|PASSWORD)/i, 'Potential public secret exposed through NEXT_PUBLIC_*'],
  [/(api[_-]?key|secret|token|private[_-]?key|password)\s*[:=]\s*["'][^"']{12,}["']/i, 'Hardcoded secret-like value'],
  [/-----BEGIN (RSA |OPENSSH |EC |DSA |)PRIVATE KEY-----/, 'Private key committed'],
  [/ghp_[a-zA-Z0-9]{30,}/, 'GitHub personal access token pattern'],
  [/sk-[a-zA-Z0-9]{20,}/, 'OpenAI-style secret key pattern'],
  [/dangerouslySetInnerHTML/i, 'dangerouslySetInnerHTML found; verify sanitization or remove it'],
  [/eval\s*\(/i, 'eval() found'],
  [/new Function\s*\(/i, 'new Function() found'],
  [/innerHTML\s*=/i, 'innerHTML assignment found'],
  [/document\.write\s*\(/i, 'document.write() found'],
  [/console\.log\(/, 'console.log() left in source'],
  [/TODO_SECURITY|FIXME_SECURITY/i, 'Security TODO/FIXME remains'],
]

const findings = []

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoreDirs.has(entry.name)) continue
    const file = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(file)
      continue
    }
    const ext = path.extname(entry.name)
    if (!allowedExtensions.has(ext)) continue
    let text = ''
    try { text = fs.readFileSync(file, 'utf8') } catch { continue }
    const rel = path.relative(root, file)
    for (const [re, message] of patterns) {
      if (re.test(text)) findings.push({ file: rel, message })
    }
  }
}

walk(root)

for (const file of ['public/_headers', 'netlify.toml']) {
  if (!fs.existsSync(path.join(root, file))) findings.push({ file, message: 'Required v74.2 security file is missing' })
}

const forbiddenVisualFiles = [
  'app/trust-security/page.tsx',
  'components/v74-trust-security.tsx',
  'components/v74-security-trust.tsx',
]
for (const file of forbiddenVisualFiles) {
  if (fs.existsSync(path.join(root, file))) findings.push({ file, message: 'v74.1 visual security layer is still present; remove it' })
}

const result = { ok: findings.length === 0, checkedAt: new Date().toISOString(), findings }
console.log(JSON.stringify(result, null, 2))
if (!result.ok) process.exitCode = 1
