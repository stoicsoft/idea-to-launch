// Builds dist/ for places that can't read a skills folder directly:
//   dist/claude-desktop/<skill>.zip       one upload per skill (Claude Desktop chat, claude.ai)
//   dist/idea-to-launch-skills.zip      all skills, for copying into any tool by hand
//   dist/idea-to-launch-prompt.md       one file for tools without skills support
//                                          (ChatGPT projects or GPTs, AGENTS.md, custom instructions)
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SKILLS } from './agents.mjs'
import { createZip } from './zip.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')

function* files(dir) {
  for (const name of readdirSync(dir).sort()) {
    if (name === '.DS_Store') continue
    const full = join(dir, name)
    if (statSync(full).isDirectory()) yield* files(full)
    else yield full
  }
}

function skillEntries(skill) {
  const base = join(ROOT, 'skills')
  return [...files(join(base, skill))].map((full) => ({ name: relative(base, full).split(sep).join('/'), data: readFileSync(full) }))
}

const stripFrontmatter = (text) => text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '').trim()
const stripGeneratedNote = (text) => text.replace(/^<!-- Generated from [^>]*-->\s*/, '').trim()
// Inside the single file, links to sibling references become plain names.
const unlink = (text) => text.replace(/\[([^\]]+)\]\((?!https?:)[^)]+\)/g, '$1')

export function buildPrompt() {
  const version = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version
  const read = (p) => readFileSync(join(ROOT, p), 'utf8')
  const parts = [
    `# Idea to Launch ${version}: instructions for your AI assistant`,
    'Use these instructions when helping someone who may not code turn an idea into working software. ' +
      'Where they mention another step by name (app-idea, app-plan, app-design, app-build, app-change, app-fix, app-review, app-launch), ' +
      'follow the matching section of "The whole journey" below.',
    unlink(stripFrontmatter(read('skills/app-builder/SKILL.md'))),
    unlink(stripGeneratedNote(read('skills/app-builder/references/journey.md'))),
    unlink(read('shared/talking-rules.md')),
    unlink(read('shared/project-memory.md')),
    unlink(read('shared/languages.md')),
  ]
  return parts.join('\n\n---\n\n') + '\n'
}

export function packageAll() {
  rmSync(DIST, { recursive: true, force: true })
  mkdirSync(join(DIST, 'claude-desktop'), { recursive: true })
  for (const skill of SKILLS) {
    writeFileSync(join(DIST, 'claude-desktop', `${skill}.zip`), createZip(skillEntries(skill)))
  }
  writeFileSync(join(DIST, 'idea-to-launch-skills.zip'), createZip(SKILLS.flatMap(skillEntries)))
  writeFileSync(join(DIST, 'idea-to-launch-prompt.md'), buildPrompt())
  console.log(`package: wrote dist/claude-desktop/ (${SKILLS.length} zips), dist/idea-to-launch-skills.zip and dist/idea-to-launch-prompt.md`)
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) packageAll()
