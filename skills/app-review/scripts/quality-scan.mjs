#!/usr/bin/env node
/**
 * quality-scan: a fast, dependency-free pre-launch scan of an app folder.
 *
 *   node quality-scan.mjs <projectDir> [--json]
 *
 * Reports secret-looking strings (source and built client bundles), dangerous
 * code, placeholder text left in screens, .env files that git would commit,
 * and hard-coded colours outside a tokens/theme file. A hit is a lead, not a
 * verdict: confirm each one by reading the code.
 *
 * Exit code: 1 when any must-fix finding exists, otherwise 0 (2 on bad usage).
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { basename, extname, join, relative, sep } from 'node:path'

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const root = args.find((a) => !a.startsWith('--'))
if (!root || !existsSync(root) || !statSync(root).isDirectory()) {
  console.error('usage: node quality-scan.mjs <projectDir> [--json]')
  process.exit(2)
}

const MAX_FILE_BYTES = 2 * 1024 * 1024
const MAX_FINDINGS = 300
const SKIP_DIRS = new Set(['node_modules', '.git', '.data', 'coverage', '.turbo', '.vercel', '.cache', 'vendor', '.pnpm-store'])
// Build output scanned for secrets only: what actually ships to browsers.
const BUNDLE_DIRS = [join('.next', 'static'), 'dist', 'build', 'out']
const TEXT_EXT = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.mts', '.cts', '.vue', '.svelte', '.astro',
  '.json', '.css', '.scss', '.sass', '.less', '.html', '.htm', '.md', '.mdx', '.svg', '.sql',
  '.prisma', '.yml', '.yaml', '.toml', '.txt', '.xml', '.py', '.rb', '.go', '.php',
])
const UI_EXT = new Set(['.tsx', '.jsx', '.vue', '.svelte', '.astro', '.html', '.htm'])
const STYLE_EXT = new Set(['.css', '.scss', '.sass', '.less', ...UI_EXT])
const LOCKFILES = new Set(['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'bun.lockb', 'Cargo.lock', 'poetry.lock'])

const SECRET_RULES = [
  { rule: 'private-key-block', re: /-----BEGIN [A-Z0-9 ]*PRIVATE KEY-----/ },
  {
    rule: 'secret-token',
    re: /\b(?:sk-(?:proj-|ant-)?[A-Za-z0-9_-]{20,}|sk_(?:live|test)_[A-Za-z0-9]{8,}|rk_(?:live|test)_[A-Za-z0-9]{8,}|whsec_[A-Za-z0-9]{16,}|re_[A-Za-z0-9]{16,}_[A-Za-z0-9]{8,}|xox[baprs]-[A-Za-z0-9-]{8,}|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[A-Z0-9]{16}|AIza[0-9A-Za-z_-]{35})\b/,
  },
  { rule: 'database-url-with-password', re: /(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis|rediss):\/\/[^\s:/'"`]+:[^\s@/'"`]+@/i },
  { rule: 'secret-assignment', re: /(?:api[-_]?key|secret|token|passwd|password|private[-_]?key|client[-_]?secret)[\w$-]*\s*[:=]\s*['"`][^'"`\s]{20,}['"`]/i },
]
const DANGER_RULES = [
  { rule: 'raw-html-injection', re: /\bdangerouslySetInnerHTML\b|\.innerHTML\s*=(?!=)/ },
  { rule: 'eval-call', re: /(?<![\w.])eval\s*\(/ },
  { rule: 'new-function', re: /\bnew\s+Function\s*\(/ },
]
const PLACEHOLDER_RULES = [
  { rule: 'lorem-ipsum', re: /lorem ipsum/i },
  { rule: 'placeholder-copy', re: /\b(?:your text here|placeholder text|insert (?:text|copy) here|coming soon\.\.\.)\b/i },
  { rule: 'dead-link', re: /\bhref\s*=\s*\{?\s*["']#["']/ },
  { rule: 'test-sample-data', re: /["'>]\s*(?:Test|Foo|Bar|Item|User)\s*\d+\s*["'<]/ },
]
const COLOUR_RE = /(?:^|[\s:'"`(,])(#[0-9a-fA-F]{3,8})\b|\b(?:rgb|rgba|hsl|hsla)\(\s*\d/g

const findings = []
let filesScanned = 0

function add(severity, file, line, rule, detail) {
  if (findings.length < MAX_FINDINGS) findings.push({ severity, file, line, rule, detail })
}

function redact(text) {
  return text.replace(/([A-Za-z0-9_+\-/=]{6})[A-Za-z0-9_+\-/=]{6,}/g, '$1…').slice(0, 140)
}

function* walk(dir, { bundle = false } = {}) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      // Build output is walked separately (secrets only) so it isn't double-reported.
      const rel = relative(root, full)
      if (!bundle && (entry.name === '.next' || BUNDLE_DIRS.includes(rel))) continue
      if (!bundle && entry.name.startsWith('.') && entry.name !== '.github') continue
      yield* walk(full, { bundle })
    } else if (entry.isFile()) {
      yield full
    }
  }
}

function readText(file) {
  try {
    if (statSync(file).size > MAX_FILE_BYTES) return null
    return readFileSync(file, 'utf8')
  } catch {
    return null
  }
}

function isCommentOnly(line, index) {
  const before = line.slice(0, index)
  return /(?:\/\/|\/\*|^\s*\*|^\s*#|<!--)/.test(before)
}

function scanSource(file) {
  const rel = relative(root, file).split(sep).join('/')
  const name = basename(file)
  const ext = extname(file)
  if (LOCKFILES.has(name) || /^\.env/.test(name)) return
  if (!TEXT_EXT.has(ext)) return
  const text = readText(file)
  if (text === null) return
  filesScanned += 1
  const isTest = /(^|\/)(tests?|__tests__|e2e|fixtures?)\//.test(rel) || /\.(test|spec)\.[a-z]+$/.test(name)
  const isDoc = ext === '.md' || ext === '.mdx' || rel.startsWith('product/')
  const isTokens = /token|theme|tailwind\.config|palette/i.test(name)
  const lines = text.split('\n')
  let colourCount = 0
  let firstColourLine = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    for (const { rule, re } of SECRET_RULES) {
      if (re.test(line) && !/example|placeholder|xxxx|your[-_ ]?(?:key|secret|token)/i.test(line)) {
        add('must', rel, i + 1, rule, redact(line.trim()))
      }
    }
    if (isDoc || isTest) continue
    for (const { rule, re } of DANGER_RULES) {
      const m = re.exec(line)
      if (m && !isCommentOnly(line, m.index)) add('must', rel, i + 1, rule, line.trim().slice(0, 140))
    }
    if (UI_EXT.has(ext) || ext === '.json') {
      for (const { rule, re } of PLACEHOLDER_RULES) {
        if (re.test(line)) add('should', rel, i + 1, rule, line.trim().slice(0, 140))
      }
      const todo = /\b(?:TODO|FIXME|TBD)\b/.exec(line)
      if (todo && !isCommentOnly(line, todo.index)) add('should', rel, i + 1, 'todo-in-visible-text', line.trim().slice(0, 140))
    }
    if (STYLE_EXT.has(ext) && !isTokens) {
      COLOUR_RE.lastIndex = 0
      const hits = line.match(COLOUR_RE)
      if (hits && !/^\s*(?:\/\/|\*|\/\*)/.test(line) && !/<svg|fill=|stroke=|stop-color/.test(line)) {
        colourCount += hits.length
        if (!firstColourLine) firstColourLine = i + 1
      }
    }
  }
  if (colourCount > 0) {
    add('advisory', rel, firstColourLine, 'hard-coded-colour', `${colourCount} colour value(s) outside the design tokens`)
  }
}

function scanBundle(file) {
  const ext = extname(file)
  if (!['.js', '.mjs', '.cjs', '.html', '.css', '.json', '.map'].includes(ext)) return
  const text = readText(file)
  if (text === null) return
  filesScanned += 1
  const rel = relative(root, file).split(sep).join('/')
  for (const { rule, re } of SECRET_RULES) {
    const m = re.exec(text)
    if (m) {
      const line = text.slice(0, m.index).split('\n').length
      add('must', rel, line, `${rule}-in-browser-bundle`, redact(m[0]))
    }
  }
}

function checkEnvIgnored() {
  const envFiles = readdirSync(root).filter((n) => /^\.env(\..+)?$/.test(n) && !/example|sample|template/i.test(n))
  if (envFiles.length === 0) return
  const gitignore = existsSync(join(root, '.gitignore')) ? readFileSync(join(root, '.gitignore'), 'utf8') : ''
  const ignored = gitignore.split('\n').some((l) => /^\s*\/?\.env(\*|\.\*|\.local|\b)/.test(l.trim()))
  if (!ignored) {
    add('must', '.gitignore', 0, 'env-file-not-ignored', `${envFiles.join(', ')} would be committed; add ".env*" (and "!.env.example") to .gitignore`)
  }
}

for (const file of walk(root)) scanSource(file)
for (const dir of BUNDLE_DIRS) {
  const full = join(root, dir)
  if (existsSync(full)) for (const file of walk(full, { bundle: true })) scanBundle(file)
}
checkEnvIgnored()

const count = (s) => findings.filter((f) => f.severity === s).length
const summary = { filesScanned, must: count('must'), should: count('should'), advisory: count('advisory'), truncated: findings.length >= MAX_FINDINGS }

if (asJson) {
  console.log(JSON.stringify({ ...summary, findings }, null, 2))
} else {
  const label = { must: 'MUST  ', should: 'SHOULD', advisory: 'NOTE  ' }
  for (const f of findings) {
    console.log(`${label[f.severity]} ${f.file}${f.line ? `:${f.line}` : ''}  ${f.rule}  ${f.detail}`)
  }
  console.log(
    `quality-scan: ${summary.must} must-fix, ${summary.should} should-fix, ${summary.advisory} note(s) in ${filesScanned} files` +
      (summary.truncated ? ' (truncated)' : ''),
  )
}
process.exit(summary.must > 0 ? 1 : 0)
