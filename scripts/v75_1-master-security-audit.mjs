#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'security-reports')
fs.mkdirSync(OUT_DIR, { recursive: true })

const IGNORE_DIRS = new Set([
  'node_modules', '.next', '.git', 'out', 'dist', 'build', '.vercel', '.netlify',
  'security-reports', 'coverage', '.cache'
])

const SOURCE_DIRS_FOR_DANGEROUS_CODE = new Set([
  'app', 'pages', 'components', 'lib', 'src', 'middleware.ts',
  'next.config.js', 'next.config.mjs', 'next.config.ts'
])

const TEXT_EXTS = new Set(['.js','.jsx','.ts','.tsx','.mjs','.cjs','.json','.md','.txt','.toml','.yml','.yaml','.env','.html','.css','.scss','.svg'])

const SECRET_PATTERNS = [
  ['critical', 'Private key block', /-----BEGIN (RSA |EC |OPENSSH |DSA |)?PRIVATE KEY-----/i],
  ['critical', 'GitHub token', /gh[pousr]_[A-Za-z0-9_]{20,}/],
  ['critical', 'OpenAI-style API key', /sk-[A-Za-z0-9_-]{20,}/],
  ['critical', 'AWS access key', /AKIA[0-9A-Z]{16}/],
  ['high', 'Google API key', /AIza[0-9A-Za-z\-_]{35}/],
  ['critical', 'NEXT_PUBLIC secret-looking name', /NEXT_PUBLIC_[A-Z0-9_]*(SECRET|TOKEN|KEY|PASSWORD)[A-Z0-9_]*\s*=/i],
]

const DANGEROUS_PATTERNS = [
  ['high', 'dangerouslySetInnerHTML', /dangerouslySetInnerHTML\s*=\s*\{/],
  ['high', 'eval usage', /\beval\s*\(/],
  ['high', 'new Function usage', /new\s+Function\s*\(/],
  ['high', 'innerHTML assignment', /\.innerHTML\s*=/],
  ['medium', 'document.write', /document\.write\s*\(/],
  ['medium', 'unsafe inline script', /<script[^>]*>[^<]+<\/script>/i],
]

const PUBLIC_DANGEROUS = [
  [/\.env/i, 'Environment file in public folder'],
  [/\.(pem|key|p12|pfx)$/i, 'Private key/certificate-like file in public folder'],
  [/\.(zip|tar|tgz|gz|rar|7z)$/i, 'Archive file in public folder'],
  [/preview/i, 'Preview/debug file in public folder'],
  [/QA_.*\.(json|md)$/i, 'QA report in public folder'],
  [/LAUNCH_HANDOFF_.*\.md$/i, 'Launch handoff file in public folder'],
  [/\.map$/i, 'Source map in public folder'],
]

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(ent.name)) continue
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, files)
    else files.push(p)
  }
  return files
}

function isTextFile(file) { return TEXT_EXTS.has(path.extname(file).toLowerCase()) }
function rel(file) { return path.relative(ROOT, file).replaceAll('\\', '/') }
function isSourceCodeFile(relative) {
  const first = relative.split('/')[0]
  return SOURCE_DIRS_FOR_DANGEROUS_CODE.has(first) || SOURCE_DIRS_FOR_DANGEROUS_CODE.has(relative)
}

const findings = []
function add(severity, category, file, message, advice = '') { findings.push({ severity, category, file, message, advice }) }

const files = walk(ROOT).filter(isTextFile)
for (const f of files) {
  let text = ''
  try { text = fs.readFileSync(f, 'utf8') } catch { continue }
  const r = rel(f)

  // Secret scan should cover the whole repository, including docs/scripts.
  for (const [severity, name, re] of SECRET_PATTERNS) {
    if (re.test(text)) add(severity, 'secret', r, name, 'Remove the secret and rotate it if it was real.')
  }

  // Dangerous-code scan should only fail production source code, not docs/audit scripts that intentionally mention patterns.
  if (isSourceCodeFile(r)) {
    for (const [severity, name, re] of DANGEROUS_PATTERNS) {
      if (re.test(text)) add(severity, 'dangerous-code', r, name, 'Remove or isolate this before production.')
    }
  }
}

for (const f of walk(path.join(ROOT, 'public'))) {
  const r = rel(f)
  for (const [re, message] of PUBLIC_DANGEROUS) {
    if (re.test(r)) add('high', 'public-assets', r, message, 'Remove it before production deploy.')
  }
}

const headerText = ['public/_headers','netlify.toml','middleware.ts','next.config.js','next.config.mjs','next.config.ts']
  .map(f => fs.existsSync(path.join(ROOT, f)) ? fs.readFileSync(path.join(ROOT, f), 'utf8') : '')
  .join('\n')
for (const [name, re] of [
  ['Content-Security-Policy', /Content-Security-Policy/i],
  ['Frame protection', /X-Frame-Options|frame-ancestors/i],
  ['nosniff', /X-Content-Type-Options|nosniff/i],
  ['Referrer Policy', /Referrer-Policy/i],
  ['Permissions Policy', /Permissions-Policy/i],
  ['HSTS', /Strict-Transport-Security/i],
]) if (!re.test(headerText)) add('high', 'headers', 'public/_headers|netlify.toml|middleware.ts', `Missing ${name}`)

const searchRouteExists = ['app/api/search/route.ts','app/api/search/route.js','pages/api/search.ts','pages/api/search.js'].some(f => fs.existsSync(path.join(ROOT, f)))
if (!searchRouteExists) add('medium', 'api-search', 'app/api/search/route.ts', 'Search API route not found by common paths', 'Install v75.1 hardened route or audit your real route manually.')

if (fs.existsSync(path.join(ROOT, 'package.json'))) {
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'))
  if (!pkg.scripts?.build) add('medium', 'project-health', 'package.json', 'No build script found', 'Add or confirm build command before deploy.')
  try {
    const raw = execSync('npm audit --omit=dev --json', { cwd: ROOT, encoding: 'utf8', stdio: ['ignore','pipe','pipe'], timeout: 120000 })
    const audit = JSON.parse(raw)
    const vulns = audit.metadata?.vulnerabilities || {}
    if ((vulns.critical || 0) > 0 || (vulns.high || 0) > 0) add('high', 'dependencies', 'package-lock.json', `npm audit found critical/high vulnerabilities: ${JSON.stringify(vulns)}`)
  } catch (err) {
    const stdout = err.stdout?.toString() || ''
    try {
      const audit = JSON.parse(stdout)
      const vulns = audit.metadata?.vulnerabilities || {}
      if ((vulns.critical || 0) > 0 || (vulns.high || 0) > 0) add('high', 'dependencies', 'package-lock.json', `npm audit found critical/high vulnerabilities: ${JSON.stringify(vulns)}`)
      else add('medium', 'dependencies', 'package-lock.json', 'npm audit could not complete cleanly', 'Run npm audit locally and review.')
    } catch {
      add('medium', 'dependencies', 'package-lock.json', 'npm audit could not run', 'Run npm install/package-lock generation, then npm audit --omit=dev.')
    }
  }
}

const counts = findings.reduce((acc, f) => { acc[f.severity] = (acc[f.severity] || 0) + 1; return acc }, {})
const pass = !findings.some(f => ['critical','high'].includes(f.severity))
const report = { audit: 'v75.1-real-code-security-audit', generatedAt: new Date().toISOString(), projectRoot: ROOT, pass, counts, scannedTextFiles: files.length, findings }
fs.writeFileSync(path.join(OUT_DIR, 'v75_1-master-security-report.json'), JSON.stringify(report, null, 2))
console.log(`v75.1 master security audit: ${pass ? 'PASS' : 'FAIL'}`)
console.log(`Report: ${path.join(OUT_DIR, 'v75_1-master-security-report.json')}`)
if (!pass) process.exitCode = 1
