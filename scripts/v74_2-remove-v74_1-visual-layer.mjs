#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const targets = [
  'app/trust-security/page.tsx',
  'components/v74-trust-security.tsx',
  'components/v74-security-trust.tsx',
  'public/v74',
  'public/v74_1',
]

const removed = []
const missing = []

for (const target of targets) {
  const full = path.join(root, target)
  if (!fs.existsSync(full)) {
    missing.push(target)
    continue
  }
  fs.rmSync(full, { recursive: true, force: true })
  removed.push(target)
}

console.log(JSON.stringify({ ok: true, removed, missing }, null, 2))
console.log('\nManual CSS step: remove any v74.1 / trust-security CSS blocks from app/globals.css if you pasted them there.')
