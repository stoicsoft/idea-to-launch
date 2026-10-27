#!/usr/bin/env node
// Idea to Launch installer. No dependencies; Node 18 or newer.
//
//   npx github:OWNER/idea-to-launch                 install into every AI tool found
//   node scripts/cli.mjs install [options]
//   node scripts/cli.mjs uninstall [options]
//   node scripts/cli.mjs list
//   node scripts/cli.mjs package          build dist/ (zips for Claude Desktop, single-file prompt)
import { cpSync, existsSync, lstatSync, mkdirSync, readFileSync, realpathSync, rmSync, symlinkSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { AGENTS, SKILLS, SUITE } from './agents.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SKILLS_DIR = join(ROOT, 'skills')
const VERSION = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version

const HELP = `Idea to Launch ${VERSION}: skills that help anyone build software with their AI tool

Usage
  idea-to-launch [install] [options]   Copy the skills into your AI tools
  idea-to-launch uninstall [options]   Remove them again (only folders this project installed)
  idea-to-launch list                  Show where they are installed
  idea-to-launch agents                Show every supported tool and its folder
  idea-to-launch package               Build dist/ (Claude Desktop zips, single-file prompt)

Options
  --agent <ids>     Only these tools, comma-separated (see "agents"). Default: every tool found
  --all             Every supported tool, even ones not found on this computer
  --project [dir]   Install into a project folder instead of your user folder
  --skills <names>  Only these skills, comma-separated (default: all ${SKILLS.length})
  --link            Link instead of copy (for contributors editing the skills)
  --force           Replace same-named folders that this project didn't install
  --dry-run         Show what would happen without changing anything
  -h, --help        Show this help
`

function parseArgs(argv) {
  const opts = { command: 'install', agents: null, all: false, project: null, skills: SKILLS, link: false, force: false, dryRun: false }
  const rest = [...argv]
  if (rest[0] && !rest[0].startsWith('-')) opts.command = rest.shift()
  while (rest.length) {
    const arg = rest.shift()
    const value = () => {
      const v = rest.shift()
      if (!v || v.startsWith('--')) fail(`${arg} needs a value`)
      return v
    }
    if (arg === '--agent' || arg === '--agents') opts.agents = value().split(',').map((s) => s.trim()).filter(Boolean)
    else if (arg === '--all') opts.all = true
    else if (arg === '--project') opts.project = rest[0] && !rest[0].startsWith('-') ? resolve(rest.shift()) : process.cwd()
    else if (arg === '--skills') opts.skills = value().split(',').map((s) => s.trim()).filter(Boolean)
    else if (arg === '--link') opts.link = true
    else if (arg === '--force') opts.force = true
    else if (arg === '--dry-run') opts.dryRun = true
    else if (arg === '-h' || arg === '--help') opts.command = 'help'
    else fail(`Unknown option: ${arg}`)
  }
  for (const id of opts.agents ?? []) if (!AGENTS.some((a) => a.id === id)) fail(`Unknown tool "${id}". Run "agents" to see the list.`)
  for (const s of opts.skills) if (!SKILLS.includes(s)) fail(`Unknown skill "${s}". Skills: ${SKILLS.join(', ')}`)
  return opts
}

function fail(message) {
  console.error(`idea-to-launch: ${message}`)
  process.exit(1)
}

/** "~/.claude/skills" → absolute path, honouring CLAUDE_CONFIG_DIR and CODEX_HOME. */
export function expandHome(p, env = process.env, home = homedir()) {
  if (p === '~/.claude/skills' && env.CLAUDE_CONFIG_DIR) return join(env.CLAUDE_CONFIG_DIR, 'skills')
  if (p === '~/.codex/skills' && env.CODEX_HOME) return join(env.CODEX_HOME, 'skills')
  return p.startsWith('~/') ? join(home, p.slice(2)) : p
}

const pretty = (abs, home = homedir()) => (abs.startsWith(home) ? `~${abs.slice(home.length)}` : abs)

export function detectAgents(home = homedir()) {
  return AGENTS.filter((a) => a.detect.some((d) => existsSync(expandHome(d, process.env, home))))
}

/**
 * Work out which folders to write to. A tool whose `covers` list already
 * contains a target folder reuses that copy, so it never sees duplicates.
 */
export function planTargets(agents, { project = null, home = homedir(), env = process.env } = {}) {
  const targets = new Map() // absolute dir → agent names
  const plan = []
  for (const agent of AGENTS.filter((a) => agents.includes(a))) {
    const resolveDir = (p) => (project ? join(project, p) : expandHome(p, env, home))
    const own = resolveDir(project ? agent.project : agent.home)
    const covered = (project ? (agent.covers ?? []).map((c) => c.replace(/^~\//, '')) : agent.covers ?? []).map(resolveDir).find((d) => targets.has(d))
    if (targets.has(own) || covered) {
      const dir = targets.has(own) ? own : covered
      targets.get(dir).push(agent.name)
      plan.push({ agent, dir, shared: true })
    } else {
      targets.set(own, [agent.name])
      plan.push({ agent, dir: own, shared: false })
    }
  }
  return { targets, plan }
}

export function isOurs(skillDir) {
  try {
    return new RegExp(`suite:\\s*["']?${SUITE}["']?`).test(readFileSync(join(skillDir, 'SKILL.md'), 'utf8'))
  } catch {
    return false
  }
}

function installedVersion(skillDir) {
  try {
    return readFileSync(join(skillDir, 'SKILL.md'), 'utf8').match(/version:\s*["']?([\w.-]+)/)?.[1] ?? '?'
  } catch {
    return null
  }
}

function selectAgents(opts) {
  if (opts.agents) return AGENTS.filter((a) => opts.agents.includes(a.id))
  if (opts.all) return AGENTS
  if (opts.project) return AGENTS.filter((a) => ['claude', 'codex', 'cursor'].includes(a.id))
  return detectAgents()
}

function install(opts) {
  const agents = selectAgents(opts)
  if (agents.length === 0) {
    console.log('No AI tools found on this computer.')
    console.log('Pick one with --agent (for example: --agent claude), or use --all. Run "agents" to see the list.')
    process.exit(1)
  }
  const { targets, plan } = planTargets(agents, { project: opts.project })
  const verb = opts.dryRun ? 'Would install' : 'Installing'
  console.log(`${verb} Idea to Launch ${VERSION} (${opts.skills.length} skills)${opts.project ? ` into ${opts.project}` : ''}\n`)

  const skipped = []
  for (const dir of targets.keys()) {
    for (const skill of opts.skills) {
      const dest = join(dir, skill)
      if (existsSync(dest) || isBrokenLink(dest)) {
        if (!isOurs(dest) && !isBrokenLink(dest) && !opts.force) {
          skipped.push(dest)
          continue
        }
        if (!opts.dryRun) rmSync(dest, { recursive: true, force: true })
      }
      if (opts.dryRun) continue
      mkdirSync(dir, { recursive: true })
      if (opts.link) symlinkSync(join(SKILLS_DIR, skill), dest, process.platform === 'win32' ? 'junction' : 'dir')
      else cpSync(join(SKILLS_DIR, skill), dest, { recursive: true })
    }
  }
  for (const { agent, dir, shared } of plan) {
    console.log(`  ✓ ${agent.name}\n      ${shared ? 'uses the copy in ' : ''}${pretty(dir)}`)
  }
  for (const dest of skipped) console.log(`\n  ! Skipped ${pretty(dest)}: a different skill with this name is already there (use --force to replace it).`)
  if (!opts.dryRun) {
    console.log(`\nDone. Restart your AI tool (or start a new chat), then say something like:`)
    console.log(`  "I want to build an app for my business. Can you help?"`)
    console.log(`For Claude Desktop chat or claude.ai, upload the zips instead (see docs/install.md).`)
  }
}

function isBrokenLink(p) {
  try {
    return lstatSync(p).isSymbolicLink() && !existsSync(p)
  } catch {
    return false
  }
}

function uninstall(opts) {
  const agents = opts.agents ? AGENTS.filter((a) => opts.agents.includes(a.id)) : AGENTS
  const dirs = new Set()
  for (const a of agents) {
    if (opts.project) dirs.add(join(opts.project, a.project))
    else dirs.add(expandHome(a.home))
  }
  let removed = 0
  for (const dir of dirs) {
    for (const skill of opts.skills) {
      const dest = join(dir, skill)
      if ((existsSync(dest) && isOurs(dest)) || isBrokenLink(dest)) {
        console.log(`  ${opts.dryRun ? 'would remove' : 'removed'} ${pretty(dest)}`)
        if (!opts.dryRun) rmSync(dest, { recursive: true, force: true })
        removed++
      }
    }
  }
  console.log(removed ? `\n${removed} skill folder(s) ${opts.dryRun ? 'would be ' : ''}removed. Your projects' product/ folders are untouched.` : 'Nothing to remove.')
}

function list() {
  const seen = new Set()
  let any = false
  for (const a of AGENTS) {
    const dir = expandHome(a.home)
    if (seen.has(dir)) continue
    seen.add(dir)
    const found = SKILLS.filter((s) => isOurs(join(dir, s)))
    if (!found.length) continue
    any = true
    const versions = [...new Set(found.map((s) => installedVersion(join(dir, s))))].join(', ')
    console.log(`${pretty(dir)}: ${found.length}/${SKILLS.length} skills (version ${versions})`)
  }
  if (!any) console.log('Idea to Launch is not installed in any user folder yet.')
}

function agentsTable() {
  const found = new Set(detectAgents().map((a) => a.id))
  for (const a of AGENTS) console.log(`${found.has(a.id) ? '●' : '○'} ${a.id.padEnd(12)} ${a.name}\n    ${a.home}   (project: ${a.project})`)
  console.log('\n● found on this computer   ○ not found')
}

function isMain() {
  try {
    // npx runs the bin through a symlink, so compare real paths.
    return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url))
  } catch {
    return false
  }
}

if (isMain()) {
  const opts = parseArgs(process.argv.slice(2))
  if (opts.command === 'help') console.log(HELP)
  else if (opts.command === 'install') install(opts)
  else if (opts.command === 'uninstall') uninstall(opts)
  else if (opts.command === 'list') list()
  else if (opts.command === 'agents') agentsTable()
  else if (opts.command === 'package') await import('./package.mjs').then((m) => m.packageAll())
  else fail(`Unknown command "${opts.command}". Try --help.`)
}
