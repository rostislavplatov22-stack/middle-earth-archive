#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const removableGlobs = [
  /^preview$/i,
  /^QA_.*\.(md|json)$/i,
  /^LAUNCH_HANDOFF_.*\.md$/i,
  /^.*\.zip$/i,
]

const removed = []

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules', '.next', 'dist', 'out'].includes(entry.name)) continue
    const file = path.join(dir, entry.name)
    const rel = path.relative(root, file)
    if (entry.isDirectory()) {
      if (removableGlobs.some((re) => re.test(entry.name))) {
        fs.rmSync(file, { recursive: true, force: true })
        removed.push(rel)
      } else {
        walk(file)
      }
      continue
    }
    if (removableGlobs.some((re) => re.test(entry.name))) {
      fs.rmSync(file, { force: true })
      removed.push(rel)
    }
  }
}

walk(root)
console.log(JSON.stringify({ ok: true, removed }, null, 2))
