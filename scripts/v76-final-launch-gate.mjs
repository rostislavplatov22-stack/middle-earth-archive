#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'

const run = (label, cmd, args = []) => {
  console.log(`\n▶ ${label}`)
  const result = spawnSync(cmd, args, { stdio: 'inherit', shell: process.platform === 'win32' })
  if (result.status !== 0) {
    console.error(`\n✖ Failed: ${label}`)
    process.exit(result.status || 1)
  }
}

console.log('v76 Final Netlify Launch Gate')
if (!existsSync('app/page.tsx')) throw new Error('Missing app/page.tsx')
if (!existsSync('app/catalog/page.tsx')) throw new Error('Missing app/catalog/page.tsx')
if (!existsSync('app/api/search/route.ts')) throw new Error('Missing app/api/search/route.ts')
if (!existsSync('public/_headers')) throw new Error('Missing public/_headers')
if (!existsSync('netlify.toml')) throw new Error('Missing netlify.toml')

run('Next.js production build', 'npm', ['run', 'build'])
run('v75.1 master security audit', 'node', ['scripts/v75_1-master-security-audit.mjs'])
run('v75.1 search route audit', 'node', ['scripts/v75_1-search-route-audit.mjs'])
run('v75 dependency gate', 'node', ['scripts/v75-dependency-gate.mjs'])
run('v75 public assets audit', 'node', ['scripts/v75-public-assets-audit.mjs'])
run('v75 secret scan', 'node', ['scripts/v75-secret-scan.mjs'])
run('v75 Netlify header audit', 'node', ['scripts/v75-netlify-header-audit.mjs'])
console.log('\n✓ v76 static launch gate passed. Run the live probe after npm run dev or after Netlify deploy.')
