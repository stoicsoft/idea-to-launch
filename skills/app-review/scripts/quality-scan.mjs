#!/usr/bin/env node
/**
 * quality-scan: a fast, dependency-free pre-launch scan of an app folder.
 *
 *   node quality-scan.mjs <projectDir> [--json]
 *
 * Reports secret-looking strings (source and built client bundles), dangerous
 * code, placeholder text left in screens, .env files that git would commit,
 * and hard-coded colours outside a tokens/theme file. For the app-build
 * feature guides it also checks that private routes check who is signing
 * in, the Stripe webhook verifies its signature, no card fields exist,
 * uploads are size-capped before any write, and every job handler is safe
 * to run twice. A hit is a lead, not a verdict: confirm each one by reading
 * the code.
 *
 * Exit code: 1 when any must-fix finding exists, otherwise 0 (2 on bad usage).
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { basename, dirname, extname, join, relative, sep } from 'node:path'

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

// Feature contracts from app-build's feature guides. Each looks for the shape
// of the safeguard in the source, so a pass is not proof that it works.
const CODE_FILE = /\.(?:ts|tsx|js|jsx|mts|cts|mjs|cjs)$/
const ROUTE_FILE = /^route\.(?:ts|tsx|js|jsx|mts|cts)$/
const PAGE_FILE = /^page\.(?:ts|tsx|js|jsx|mts|cts|mdx)$/
const LAYOUT_FILE = /^layout\.(?:ts|tsx|js|jsx|mts|cts)$/
const PRIVATE_SEGMENTS = new Set(['account', 'admin', 'dashboard', 'settings', 'staff', 'billing', 'members', 'internal', 'portal', 'owner'])
const MODULE_SPECIFIER = /\b(?:import|export)\s[^;]*?\bfrom\s*['"]([^'"]+)['"]|\bimport\s*\(?\s*['"]([^'"]+)['"]|\brequire\(\s*['"]([^'"]+)['"]/g
const SESSION_CALL = /\b(?:requireUser|requireRole|requireOwner|requireStaff|getSession|getServerSession|getCurrentUser|currentUser)\s*\(|\bauth\.api\.getSession\b/
const WEBHOOK_VERIFY = /\.webhooks\.constructEvent|constructEventAsync|verif\w*Signature|signature\w*verif/i
const JSON_BODY = /(?:^|[^\w.])(?:request|req)\.json\s*\(/
const EVENT_USE = /(?:^|[^\w])(?:event|stripeEvent)\s*\./
const CARD_RULES = [
  { rule: 'card-field-name', re: /\bname\s*=\s*\{?\s*["'`]card/i },
  { rule: 'card-number-field', re: /\bcard[-_]?number\b/i },
  { rule: 'card-security-field', re: /\b(?:cvc|cvv|csc|security[-_]?code)\b/i },
  { rule: 'card-autocomplete', re: /\bautocomplete\s*=\s*\{?\s*["'`]cc-/i },
]
const DIGITS_LITERAL = /["'`](\d{13,19})["'`]/g
// Card networks' leading digits (Visa, Mastercard, Amex, Diners, Discover,
// JCB, UnionPay), so millisecond timestamps (17…) and most ids don't match.
const CARD_PREFIX = /^(?:4|5[1-5]|2[2-7]|3[0-9]|6)/
const UPLOAD_SEGMENT = /^(?:files?|uploads?|attachments?)$/i
const UPLOAD_BODY = /formData\s*\(|multipart/i
const REQUEST_FACING = /\bNextRequest\b|\bformData\s*\(|\bFile\b|\bacceptUpload\b/
const WRITE_CALL = /\bwriteFile\s*\(|\bappendFile\s*\(|\bcreateWriteStream\s*\(|\.put\s*\(|\bPutObjectCommand\b/
const SIZE_CAP = /MAX_\w*(?:BYTES|SIZE)|SIZE_\w*(?:CAP|LIMIT)|\b(?:size|length|bytes|byteLength|content-length)\b[^\n]{0,40}(?:>|>=|MAX|LIMIT|CAP)|status:\s*413/i
const RUN_ONCE = /idempot|ON\s+CONFLICT|onConflict|job_runs|jobRuns|dedupe|already\s*ran|beginRun|unique/i

/** Code files under a folder, as { rel, segments, name, dir, text }. */
function codeFilesIn(dir) {
  const full = join(root, dir)
  if (!existsSync(full)) return []
  const out = []
  for (const file of walk(full)) {
    const name = basename(file)
    if (!CODE_FILE.test(name) && !PAGE_FILE.test(name)) continue
    const text = readText(file)
    if (text === null) continue
    const rel = relative(root, file).split(sep).join('/')
    out.push({ rel, segments: rel.split('/'), name, dir: dirname(file), text })
  }
  return out
}

function readsSession(text) {
  for (const m of text.matchAll(MODULE_SPECIFIER)) {
    if (/session|auth/i.test(m[1] ?? m[2] ?? m[3])) return true
  }
  return SESSION_CALL.test(text)
}

const firstExportLine = (text) => Math.max(1, text.split('\n').findIndex((l) => /^\s*export\s/.test(l)) + 1)

function luhn(digits) {
  let sum = 0
  for (let i = 0; i < digits.length; i++) {
    let d = Number(digits[digits.length - 1 - i])
    if (i % 2 === 1) d = d * 2 > 9 ? d * 2 - 9 : d * 2
    sum += d
  }
  return sum % 10 === 0
}

function checkFeatures() {
  const appDir = ['src/app', 'app'].find((d) => existsSync(join(root, d)))
  const libDir = ['src/lib', 'lib'].find((d) => existsSync(join(root, d)))
  const appFiles = appDir ? codeFilesIn(appDir) : []

  // Sign-in: a layout doesn't protect API routes, so every private route
  // checks the user itself. A page is covered by its own check, a layout
  // above it, or a middleware/proxy file that reads the session.
  const gate = ['middleware', 'proxy']
    .flatMap((n) => ['ts', 'js', 'mts', 'mjs'].flatMap((e) => [`src/${n}.${e}`, `${n}.${e}`]))
    .map((f) => readText(join(root, f)))
    .some((text) => text !== null && readsSession(text))
  const appRoot = appDir ? join(root, appDir) : root
  const layoutGuards = (dir) => {
    for (let d = dir; d.startsWith(appRoot); d = dirname(d)) {
      const layout = readdirSync(d).find((n) => LAYOUT_FILE.test(n))
      if (layout && readsSession(readText(join(d, layout)) ?? '')) return true
      if (d === appRoot) break
    }
    return false
  }
  for (const f of appFiles) {
    const inside = f.segments.slice(appDir.split('/').length)
    if (!inside.some((s) => s === '(private)' || PRIVATE_SEGMENTS.has(s))) continue
    if (ROUTE_FILE.test(f.name) && !readsSession(f.text)) {
      add('must', f.rel, firstExportLine(f.text), 'private-route-without-sign-in-check', 'a private route that never checks who is asking (a layout does not protect API routes)')
    } else if (PAGE_FILE.test(f.name) && !readsSession(f.text) && !gate && !layoutGuards(f.dir)) {
      add('must', f.rel, firstExportLine(f.text), 'private-page-without-sign-in-check', 'a private page with no sign-in check in it, its layouts or middleware')
    }
  }

  // Payments: the Stripe webhook verifies the signature on the raw body
  // before reading the event.
  for (const f of appFiles) {
    if (!ROUTE_FILE.test(f.name) || !f.segments.some((s) => /webhook/i.test(s))) continue
    if (!/stripe/i.test(f.text) && !f.segments.some((s) => /stripe/i.test(s))) continue
    const lines = f.text.split('\n')
    lines.forEach((l, i) => {
      if (JSON_BODY.test(l)) add('must', f.rel, i + 1, 'webhook-json-body', 'request.json() cannot be signature-checked; read the raw body with request.text()')
    })
    const verifyAt = lines.findIndex((l) => WEBHOOK_VERIFY.test(l))
    if (verifyAt === -1) {
      add('must', f.rel, firstExportLine(f.text), 'webhook-not-verified', 'the Stripe webhook never verifies the stripe-signature header')
      continue
    }
    for (let i = 0; i < verifyAt; i++) {
      const m = EVENT_USE.exec(lines[i])
      if (m && !isCommentOnly(lines[i], m.index)) add('must', f.rel, i + 1, 'webhook-used-before-verify', 'event data is read before the signature is verified')
    }
  }

  // Payments: card details only ever exist on the provider's checkout page.
  for (const f of codeFilesIn('src')) {
    if (/(^|\/)(tests?|__tests__|e2e|fixtures?)\//.test(f.rel) || /\.(test|spec)\.[a-z]+$/.test(f.name)) continue
    f.text.split('\n').forEach((line, i) => {
      for (const { rule, re } of CARD_RULES) {
        const m = re.exec(line)
        if (m && !isCommentOnly(line, m.index)) add('must', f.rel, i + 1, rule, 'card details belong on the payment provider\'s checkout page, never in the app')
      }
      for (const m of line.matchAll(DIGITS_LITERAL)) {
        if (CARD_PREFIX.test(m[1]) && luhn(m[1])) add('must', f.rel, i + 1, 'card-number-literal', 'a card-number-shaped literal in the source')
      }
    })
  }

  // Uploads: the size cap is enforced before any bytes are written.
  const uploads = [
    ...appFiles.filter((f) => ROUTE_FILE.test(f.name) && (f.segments.some((s) => UPLOAD_SEGMENT.test(s)) || (UPLOAD_BODY.test(f.text) && /\bFile\b|upload/i.test(f.text)))),
    ...(libDir ? codeFilesIn(`${libDir}/files`) : []),
  ]
  if (uploads.some((f) => WRITE_CALL.test(f.text) || /\bFile\b/.test(f.text))) {
    if (!uploads.some((f) => SIZE_CAP.test(f.text))) {
      const anchor = uploads.find((f) => ROUTE_FILE.test(f.name)) ?? uploads[0]
      add('must', anchor.rel, firstExportLine(anchor.text), 'upload-without-size-cap', 'nothing on the upload path refuses a file that is too big')
    }
    for (const f of uploads) {
      if (!REQUEST_FACING.test(f.text) || !WRITE_CALL.test(f.text)) continue
      const lines = f.text.split('\n')
      const firstWrite = lines.findIndex((l) => WRITE_CALL.test(l))
      if (!lines.slice(0, firstWrite).some((l) => SIZE_CAP.test(l))) {
        add('must', f.rel, firstWrite + 1, 'upload-written-before-size-check', 'bytes are stored before the size limit is checked')
      }
    }
  }

  // Scheduled jobs: a retried run must not do the work twice.
  for (const f of libDir ? codeFilesIn(`${libDir}/jobs/handlers`) : []) {
    if (!RUN_ONCE.test(f.text)) {
      add('must', f.rel, firstExportLine(f.text), 'job-not-safe-to-run-twice', 'the handler claims no run key (beginRun, ON CONFLICT), so a retry would do the work again')
    }
  }
}

for (const file of walk(root)) scanSource(file)
for (const dir of BUNDLE_DIRS) {
  const full = join(root, dir)
  if (existsSync(full)) for (const file of walk(full, { bundle: true })) scanBundle(file)
}
checkEnvIgnored()
checkFeatures()

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
