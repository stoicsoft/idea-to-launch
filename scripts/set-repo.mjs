#!/usr/bin/env node
// Point every install command, manifest and doc at the published repository.
//
//   npm run set-repo -- your-org/your-repo
//
// Replaces the current "owner/repo" (read from package.json) in every text
// file outside node_modules, .git and dist.
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const next = process.argv[2]
if (!next || !/^[A-Za-z0-9-]+\/[A-Za-z0-9._-]+$/.test(next)) {
  console.error('usage: npm run set-repo -- owner/repo')
  process.exit(1)
}
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))
const current = /github\.com\/([^/]+\/[^/.#]+)/.exec(pkg.repository.url)?.[1]
if (!current) {
  console.error('Could not read the current repository from package.json')
  process.exit(1)
}
if (current === next) {
  console.log(`Already set to ${next}`)
  process.exit(0)
}

const SKIP = new Set(['node_modules', '.git', 'dist'])
const TEXT = /\.(md|mjs|js|json|sh|ps1|yml|yaml|txt)$/
let changed = 0
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue
    const full = join(dir, name)
    if (statSync(full).isDirectory()) walk(full)
    else if (TEXT.test(name)) {
      const text = readFileSync(full, 'utf8')
      if (!text.includes(current)) continue
      writeFileSync(full, text.split(current).join(next))
      changed++
    }
  }
}
walk(ROOT)
console.log(`set-repo: ${current} → ${next} in ${changed} file(s). Run "npm run check" next.`)
