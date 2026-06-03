#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'security-reports')
fs.mkdirSync(OUT_DIR, { recursive: true })
const candidates = ['app/api/search/route.ts','app/api/search/route.js','pages/api/search.ts','pages/api/search.js']
const findings = []
function add(severity, file, message, advice = '') { findings.push({ severity, file, message, advice }) }
let found = false
for (const file of candidates) {
  const abs = path.join(ROOT, file)
  if (!fs.existsSync(abs)) continue
  found = true
  const s = fs.readFileSync(abs, 'utf8')
  if (!/MAX_SEARCH|MAX_QUERY|SEARCH_LIMITS|validateSearchQuery|query\.length|q\.length|length\s*[<>]=?/i.test(s)) add('high', file, 'No obvious server-side max query length', 'Reject queries longer than 80–120 chars.')
  if (!/sanitize|normalize|replace\(|safeText|validateSearchQuery|v75/i.test(s)) add('high', file, 'No obvious normalization/sanitization', 'Normalize input and strip control characters / angle brackets.')
  if (!/NextResponse\.json|Response\.json|application\/json/i.test(s)) add('medium', file, 'No obvious JSON-only response', 'Return JSON only.')
  if (/dangerouslySetInnerHTML|innerHTML|text\/html/i.test(s)) add('critical', file, 'HTML-related dangerous pattern inside search route', 'Do not return/render HTML from search API.')
  if (!/slice\(|MAX_RESULTS|limit|take/i.test(s)) add('medium', file, 'No obvious max results limit', 'Limit number of returned results.')
  if (!/title|type|slug|excerpt|image/i.test(s)) add('low', file, 'No obvious response whitelist fields', 'Return only safe fields: title/type/slug/excerpt/image.')
}
if (!found) add('high', 'app/api/search/route.ts', 'No search route found in common paths', 'Install v75.1 hardened route or audit your real route manually.')
const pass = !findings.some(f => ['critical','high'].includes(f.severity))
const report = { audit: 'v75.1-search-route-audit', generatedAt: new Date().toISOString(), pass, findings }
fs.writeFileSync(path.join(OUT_DIR, 'v75_1-search-route-audit.json'), JSON.stringify(report, null, 2))
console.log(`v75.1 search route audit: ${pass ? 'PASS' : 'FAIL'}`)
if (!pass) process.exitCode = 1
