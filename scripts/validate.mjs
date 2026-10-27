#!/usr/bin/env node
// Checks every skill against the rules the strictest host enforces, so one
// folder installs everywhere:
// - Agent Skills spec: name matches the folder, lowercase-hyphen, ≤ 64 chars.
// - Claude Desktop / claude.ai upload: description ≤ 200 chars, no angle brackets.
// - Self-contained: every relative link resolves inside the skill's own folder.
// - SKILL.md body stays under 500 lines; versions match package.json.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SKILLS, SUITE } from './agents.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const VERSION = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version
const errors = []
const err = (where, message) => errors.push(`${where}: ${message}`)

/** Minimal frontmatter reader: top-level `key: value` plus one nested map. */
export function parseFrontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text)
  if (!m) return null
  const data = {}
  let parent = null
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const nested = /^\s{2,}([\w-]+):\s*(.*)$/.exec(line)
    const top = /^([\w-]+):\s*(.*)$/.exec(line)
    const clean = (v) => v.trim().replace(/^["'](.*)["']$/, '$1')
    if (nested && parent) data[parent][nested[1]] = clean(nested[2])
    else if (top) {
      if (top[2].trim() === '') {
        parent = top[1]
        data[parent] = {}
      } else {
        parent = null
        data[top[1]] = clean(top[2])
      }
    }
  }
  return { data, body: text.slice(m[0].length) }
}

function* files(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* files(full)
    else yield full
  }
}

const present = readdirSync(join(ROOT, 'skills')).filter((n) => statSync(join(ROOT, 'skills', n)).isDirectory())
for (const name of present) if (!SKILLS.includes(name)) err(`skills/${name}`, 'not listed in scripts/agents.mjs SKILLS')

for (const skill of SKILLS) {
  const dir = join(ROOT, 'skills', skill)
  const where = `skills/${skill}`
  if (!existsSync(join(dir, 'SKILL.md'))) {
    err(where, 'missing SKILL.md')
    continue
  }
  const parsed = parseFrontmatter(readFileSync(join(dir, 'SKILL.md'), 'utf8'))
  if (!parsed) {
    err(where, 'SKILL.md has no frontmatter')
    continue
  }
  const { data, body } = parsed
  if (data.name !== skill) err(where, `name "${data.name}" must equal the folder name`)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(data.name ?? '') || data.name.length > 64) err(where, 'name must be lowercase letters, digits and single hyphens, ≤ 64 chars')
  if (/anthropic|claude/.test(data.name ?? '')) err(where, 'name may not contain reserved words')
  const desc = data.description ?? ''
  if (!desc) err(where, 'description is required')
  if (desc.length > 200) err(where, `description is ${desc.length} chars; Claude Desktop uploads allow 200`)
  if (/[<>]/.test(desc)) err(where, 'description may not contain < or >')
  // Strict YAML readers (Cursor's, for one) drop an unquoted description that holds ": ".
  if (!/^description: "[^"\\]*"\s*$/m.test(readFileSync(join(dir, 'SKILL.md'), 'utf8'))) err(where, 'description must be on one line in double quotes, with no " or \\ inside')
  if (data.metadata?.suite !== SUITE) err(where, `metadata.suite must be "${SUITE}" (uninstall relies on it)`)
  if (data.metadata?.version !== VERSION) err(where, `metadata.version "${data.metadata?.version}" must equal package.json "${VERSION}"`)
  const lines = body.split('\n').length
  if (lines > 500) err(where, `SKILL.md body is ${lines} lines; keep it under 500 and move detail to references/`)

  for (const file of files(dir)) {
    if (!file.endsWith('.md')) continue
    const text = readFileSync(file, 'utf8')
    for (const [, target] of text.matchAll(/\]\(([^)\s]+)\)/g)) {
      if (/^(https?:|mailto:|#)/.test(target)) continue
      const resolved = resolve(dirname(file), target.split('#')[0])
      const rel = relative(dir, resolved)
      if (rel.startsWith('..') || rel.includes(`..${sep}`)) err(relative(ROOT, file), `link "${target}" leaves the skill folder`)
      else if (!existsSync(resolved)) err(relative(ROOT, file), `link "${target}" does not exist`)
    }
  }
}

// Docs: every relative link resolves (catches broken links in translations).
const docs = ['README.md', 'CONTRIBUTING.md', ...readdirSync(join(ROOT, 'docs')).filter((f) => f.endsWith('.md')).map((f) => `docs/${f}`)]
if (existsSync(join(ROOT, 'docs/i18n'))) docs.push(...readdirSync(join(ROOT, 'docs/i18n')).filter((f) => f.endsWith('.md')).map((f) => `docs/i18n/${f}`))
for (const doc of docs) {
  const text = readFileSync(join(ROOT, doc), 'utf8').replace(/```[\s\S]*?```/g, '')
  for (const [, target] of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(target)) continue
    if (!existsSync(resolve(dirname(join(ROOT, doc)), decodeURI(target.split('#')[0])))) err(doc, `link "${target}" does not exist`)
  }
}

const manifests = [
  ['.claude-plugin/plugin.json', (j) => j.version],
  ['.claude-plugin/marketplace.json', (j) => j.plugins?.[0]?.version],
  ['.codex-plugin/plugin.json', (j) => j.version],
  ['gemini-extension.json', (j) => j.version],
]
for (const [file, pick] of manifests) {
  const v = pick(JSON.parse(readFileSync(join(ROOT, file), 'utf8')))
  if (v !== VERSION) err(file, `version "${v}" must equal package.json "${VERSION}"`)
}

if (errors.length) {
  console.error(`validate: ${errors.length} problem(s)\n  ${errors.join('\n  ')}`)
  process.exit(1)
}
console.log(`validate: ${SKILLS.length} skills OK (version ${VERSION})`)
