#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const publicDir = path.join(root, 'public')
const findings = []

const forbidden = [
  /preview/i,
  /QA_/i,
  /LAUNCH_HANDOFF/i,
  /trust-security/i,
  /v74_1/i,
  /\.zip$/i,
  /\.psd$/i,
  /\.fig$/i,
]

function walk(dir) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name)
    const rel = path.relative(root, file)
    if (entry.isDirectory()) {
      walk(file)
      continue
    }
    if (forbidden.some((re) => re.test(rel))) findings.push({ file: rel, message: 'Forbidden production asset/debug artifact' })
  }
}

walk(publicDir)

const result = { ok: findings.length === 0, checkedAt: new Date().toISOString(), findings }
console.log(JSON.stringify(result, null, 2))
if (!result.ok) process.exitCode = 1
