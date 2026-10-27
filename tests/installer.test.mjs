import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { after, test } from 'node:test'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(fileURLToPath(import.meta.url), '../..')
const SKILLS = ['app-builder', 'app-idea', 'app-plan', 'app-design', 'app-build', 'app-change', 'app-fix', 'app-review', 'app-launch']
const temps = []
after(() => temps.forEach((t) => rmSync(t, { recursive: true, force: true })))

function fakeHome(...tools) {
  const home = mkdtempSync(join(tmpdir(), 'sb-home-'))
  temps.push(home)
  for (const t of tools) mkdirSync(join(home, t), { recursive: true })
  return home
}

function run(home, args, extraEnv = {}) {
  const env = { ...process.env, HOME: home, USERPROFILE: home }
  delete env.CLAUDE_CONFIG_DIR
  delete env.CODEX_HOME
  Object.assign(env, extraEnv)
  const r = spawnSync(process.execPath, [join(ROOT, 'scripts/cli.mjs'), ...args], { env, encoding: 'utf8' })
  return { code: r.status, out: r.stdout + r.stderr }
}

const installed = (dir) => SKILLS.every((s) => existsSync(join(dir, s, 'SKILL.md')))

test('installs into every detected tool, and Cursor reuses an existing copy', () => {
  const home = fakeHome('.claude', '.codex', '.cursor', '.gemini')
  const { code, out } = run(home, ['install'])
  assert.equal(code, 0, out)
  assert.ok(installed(join(home, '.claude/skills')))
  assert.ok(installed(join(home, '.codex/skills')))
  assert.ok(installed(join(home, '.gemini/skills')))
  assert.ok(!existsSync(join(home, '.cursor/skills')), 'Cursor already reads ~/.claude/skills; a second copy would duplicate every skill')
  assert.match(out, /Cursor\s+uses the copy in ~[\\/]\.claude[\\/]skills/)
})

test('Cursor alone gets its own folder', () => {
  const home = fakeHome('.cursor')
  assert.equal(run(home, ['install']).code, 0)
  assert.ok(installed(join(home, '.cursor/skills')))
})

test('no tools found: explains how to choose one and exits non-zero', () => {
  const home = fakeHome()
  const { code, out } = run(home, ['install'])
  assert.equal(code, 1)
  assert.match(out, /--agent/)
})

test('--dry-run changes nothing', () => {
  const home = fakeHome('.claude')
  const { code, out } = run(home, ['install', '--dry-run'])
  assert.equal(code, 0, out)
  assert.ok(!existsSync(join(home, '.claude/skills')))
})

test('never overwrites a different skill with the same name, and uninstall leaves it alone', () => {
  const home = fakeHome('.claude')
  const foreign = join(home, '.claude/skills/app-fix')
  mkdirSync(foreign, { recursive: true })
  writeFileSync(join(foreign, 'SKILL.md'), '---\nname: app-fix\ndescription: someone else\n---\nmine\n')
  const { out } = run(home, ['install'])
  assert.match(out, /Skipped .*app-fix/)
  assert.match(readFileSync(join(foreign, 'SKILL.md'), 'utf8'), /someone else/)
  assert.ok(existsSync(join(home, '.claude/skills/app-idea/SKILL.md')))

  const removed = run(home, ['uninstall'])
  assert.equal(removed.code, 0, removed.out)
  assert.ok(!existsSync(join(home, '.claude/skills/app-idea')))
  assert.ok(existsSync(join(foreign, 'SKILL.md')), 'uninstall removed a folder it did not install')
})

test('reinstall replaces an older copy of our own skills', () => {
  const home = fakeHome('.claude')
  run(home, ['install'])
  const file = join(home, '.claude/skills/app-idea/SKILL.md')
  writeFileSync(file, readFileSync(file, 'utf8').replace('version: "1.0.0"', 'version: "0.0.1"'))
  run(home, ['install'])
  assert.match(readFileSync(file, 'utf8'), /version: "1\.0\.0"/)
})

test('--project installs into the project for Claude, Codex and Cursor', () => {
  const home = fakeHome()
  const project = mkdtempSync(join(tmpdir(), 'sb-project-'))
  temps.push(project)
  const { code, out } = run(home, ['install', '--project', project])
  assert.equal(code, 0, out)
  assert.ok(installed(join(project, '.claude/skills')))
  assert.ok(installed(join(project, '.agents/skills')))
  assert.ok(!existsSync(join(project, '.cursor/skills')))
})

test('--agent picks tools even when they are not detected; unknown ids are refused', () => {
  const home = fakeHome()
  assert.equal(run(home, ['install', '--agent', 'windsurf']).code, 0)
  assert.ok(installed(join(home, '.codeium/windsurf/skills')))
  assert.equal(run(home, ['install', '--agent', 'nope']).code, 1)
})

test('honours CLAUDE_CONFIG_DIR', () => {
  const home = fakeHome('.claude')
  const config = join(home, 'custom-claude')
  const { code } = run(home, ['install', '--agent', 'claude'], { CLAUDE_CONFIG_DIR: config })
  assert.equal(code, 0)
  assert.ok(installed(join(config, 'skills')))
})

test('install.sh plain-shell fallback copies, shares for Cursor and uninstalls', { skip: process.platform === 'win32' }, () => {
  const home = fakeHome('.claude', '.cursor')
  const env = { ...process.env, HOME: home, SOFTWARE_BUILDER_NO_NODE: '1' }
  delete env.CLAUDE_CONFIG_DIR
  const r = spawnSync('bash', [join(ROOT, 'install.sh')], { env, encoding: 'utf8' })
  assert.equal(r.status, 0, r.stdout + r.stderr)
  assert.ok(installed(join(home, '.claude/skills')))
  assert.ok(!existsSync(join(home, '.cursor/skills')))
  assert.match(r.stdout, /uses the copy in ~\/\.claude\/skills/)
  const u = spawnSync('bash', [join(ROOT, 'install.sh'), '--uninstall'], { env, encoding: 'utf8' })
  assert.equal(u.status, 0, u.stdout + u.stderr)
  assert.ok(!existsSync(join(home, '.claude/skills/app-idea')))
})
