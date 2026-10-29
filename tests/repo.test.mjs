import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { inflateRawSync } from 'node:zlib'
import { after, test } from 'node:test'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(fileURLToPath(import.meta.url), '../..')
const SKILLS = ['app-builder', 'app-idea', 'app-plan', 'app-design', 'app-build', 'app-change', 'app-fix', 'app-review', 'app-launch']
const temps = []
after(() => temps.forEach((t) => rmSync(t, { recursive: true, force: true })))

const node = (args, opts = {}) => spawnSync(process.execPath, args, { cwd: ROOT, encoding: 'utf8', ...opts })

test('generated copies are in sync and every skill passes validation', () => {
  const build = node(['scripts/build.mjs', '--check'])
  assert.equal(build.status, 0, build.stdout + build.stderr)
  const validate = node(['scripts/validate.mjs'])
  assert.equal(validate.status, 0, validate.stdout + validate.stderr)
})

/** Read a zip's entries with the central directory (enough for our own archives). */
function readZip(buf) {
  const end = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]))
  const count = buf.readUInt16LE(end + 10)
  let p = buf.readUInt32LE(end + 16)
  const entries = new Map()
  for (let i = 0; i < count; i++) {
    const method = buf.readUInt16LE(p + 10)
    const size = buf.readUInt32LE(p + 20)
    const nameLen = buf.readUInt16LE(p + 28)
    const extra = buf.readUInt16LE(p + 30)
    const comment = buf.readUInt16LE(p + 32)
    const local = buf.readUInt32LE(p + 42)
    const name = buf.toString('utf8', p + 46, p + 46 + nameLen)
    const dataStart = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28)
    const raw = buf.subarray(dataStart, dataStart + size)
    entries.set(name, method === 8 ? inflateRawSync(raw) : raw)
    p += 46 + nameLen + extra + comment
  }
  return entries
}

test('package builds one upload per skill with the skill folder at the top', () => {
  const r = node(['scripts/cli.mjs', 'package'])
  assert.equal(r.status, 0, r.stdout + r.stderr)
  for (const skill of SKILLS) {
    const entries = readZip(readFileSync(join(ROOT, 'dist/claude-desktop', `${skill}.zip`)))
    assert.ok(entries.has(`${skill}/SKILL.md`), `${skill}.zip lacks ${skill}/SKILL.md`)
    assert.ok([...entries.keys()].every((n) => n.startsWith(`${skill}/`)))
    assert.equal(entries.get(`${skill}/SKILL.md`).toString('utf8'), readFileSync(join(ROOT, 'skills', skill, 'SKILL.md'), 'utf8'))
  }
  const all = readZip(readFileSync(join(ROOT, 'dist/idea-to-launch-skills.zip')))
  for (const skill of SKILLS) assert.ok(all.has(`${skill}/SKILL.md`))
  const prompt = readFileSync(join(ROOT, 'dist/idea-to-launch-prompt.md'), 'utf8')
  for (const heading of ['# Idea to Launch: start here', '# The whole journey, in short', '# How to talk to the person', '# Project memory', '# Languages']) {
    assert.ok(prompt.includes(heading), `prompt lacks "${heading}"`)
  }
  assert.ok(!/\]\((?!https?:)[^)]+\.md\)/.test(prompt), 'single-file prompt still links to files it does not include')
})

function project(files) {
  const dir = mkdtempSync(join(tmpdir(), 'sb-scan-'))
  temps.push(dir)
  for (const [name, content] of Object.entries(files)) {
    mkdirSync(join(dir, name, '..'), { recursive: true })
    writeFileSync(join(dir, name), content)
  }
  return dir
}
const scan = (dir) => node([join(ROOT, 'skills/app-review/scripts/quality-scan.mjs'), dir, '--json'])

// Key-shaped fixtures are assembled at runtime so secret scanners on the
// public repository don't mistake this file for a leak.
const STRIPE = 'sk_'

test('quality scan flags secrets, unsafe HTML, placeholders and a committed .env', () => {
  const dir = project({
    'src/lib/pay.ts': `const key = '${STRIPE}live_4eC39HqLyjWDarjtT1zdp7dc'\n`,
    'src/app/page.tsx': '<div dangerouslySetInnerHTML={{ __html: note }} />\n<p>Lorem ipsum dolor</p>\n<a href="#">More</a>\n',
    'src/app/card.css': '.card { color: #ff00aa; }\n',
    '.env.local': 'DATABASE_URL=postgres://u:p@h/db\n',
    '.next/static/chunk.js': `var k="${STRIPE}test_abcdefghijklmnop";`,
  })
  const r = scan(dir)
  assert.equal(r.status, 1)
  const rules = JSON.parse(r.stdout).findings.map((f) => f.rule)
  for (const rule of ['secret-token', 'raw-html-injection', 'lorem-ipsum', 'dead-link', 'hard-coded-colour', 'env-file-not-ignored', 'secret-token-in-browser-bundle']) {
    assert.ok(rules.includes(rule), `missing ${rule} in ${rules.join(', ')}`)
  }
  assert.ok(!r.stdout.includes('4eC39HqLyjWDarjtT1zdp7dc'), 'the scanner printed a full secret')
})

test('quality scan passes a clean project and ignores tokens files, comments and tests', () => {
  const dir = project({
    '.gitignore': '.env*\n!.env.example\n',
    '.env.local': 'AUTH_SECRET=whatever\n',
    'src/app/design-tokens.css': ':root { --app-accent: #2f5fd0; }\n',
    'src/app/page.tsx': '// TODO: later\nexport default function Page() { return <h1>Your bookings</h1> }\n',
    'tests/app.test.ts': "const fake = 'sk_test_' // eval(\n",
  })
  const r = scan(dir)
  assert.equal(r.status, 0, r.stdout + r.stderr)
  assert.equal(JSON.parse(r.stdout).must, 0)
})

test('quality scan holds the feature guides to their safeguards', () => {
  const dir = project({
    'src/app/api/admin/bookings/route.ts': 'export async function GET() {\n  return Response.json(await listAll())\n}\n',
    'src/app/(private)/dashboard/page.tsx': 'export default function Page() { return <h1>Bookings</h1> }\n',
    'src/app/api/webhooks/stripe/route.ts': "import Stripe from 'stripe'\nexport async function POST(request: Request) {\n  const event = await request.json()\n  await markPaid(event.data.object.id)\n  return new Response('ok')\n}\n",
    'src/components/pay-form.tsx': 'export const PayForm = () => <input name="cardNumber" autoComplete="cc-number" />\nconst sample = "4242424242424242"\n',
    'src/app/api/files/route.ts': "import { writeFile } from 'node:fs/promises'\nexport async function POST(request: Request) {\n  const file = (await request.formData()).get('file') as File\n  await writeFile(path, Buffer.from(await file.arrayBuffer()))\n  return Response.json({ ok: true })\n}\n",
    'src/lib/jobs/handlers/reminders.ts': 'export async function run() {\n  for (const b of await tomorrow()) await sendEmail(b.phone)\n}\n',
  })
  const r = scan(dir)
  assert.equal(r.status, 1)
  const rules = JSON.parse(r.stdout).findings.map((f) => f.rule)
  for (const rule of [
    'private-route-without-sign-in-check',
    'private-page-without-sign-in-check',
    'webhook-json-body',
    'webhook-not-verified',
    'card-number-field',
    'card-autocomplete',
    'card-number-literal',
    'upload-without-size-cap',
    'upload-written-before-size-check',
    'job-not-safe-to-run-twice',
  ]) {
    assert.ok(rules.includes(rule), `missing ${rule} in ${rules.join(', ')}`)
  }
})

test('quality scan passes features built the way the guides say', () => {
  const dir = project({
    '.gitignore': '.env*\n!.env.example\n',
    'src/app/(private)/layout.tsx': "import { requireUser } from '@/lib/auth'\nexport default async function Layout({ children }) {\n  await requireUser()\n  return children\n}\n",
    'src/app/(private)/dashboard/page.tsx': 'export default function Page() { return <h1>Your bookings</h1> }\n',
    'src/app/api/admin/bookings/route.ts': "import {\n  requireUser,\n} from '@/lib/auth'\nexport async function GET(request: Request) {\n  const user = await requireUser(request, ['owner'])\n  return Response.json(await listFor(user))\n}\n",
    'src/app/api/webhooks/stripe/route.ts': "import Stripe from 'stripe'\nexport async function POST(request: Request) {\n  const body = await request.text()\n  const event = stripe.webhooks.constructEvent(body, request.headers.get('stripe-signature'), secret)\n  await markPaid(event.data.object.id)\n  return new Response('ok')\n}\n",
    'src/lib/ids.ts': "export const STARTED_AT_MS = '1730000000001'\n",
    'src/app/api/files/route.ts': "import { writeFile } from 'node:fs/promises'\nconst MAX_UPLOAD_BYTES = 10 * 1024 * 1024\nexport async function POST(request: Request) {\n  const file = (await request.formData()).get('file') as File\n  if (file.size > MAX_UPLOAD_BYTES) return Response.json({ error: 'too_big' }, { status: 413 })\n  await writeFile(path, Buffer.from(await file.arrayBuffer()))\n  return Response.json({ ok: true })\n}\n",
    'src/lib/jobs/handlers/reminders.ts': 'export async function run(key: string) {\n  if (!(await beginRun("reminders", key))) return\n}\n',
  })
  const r = scan(dir)
  assert.equal(r.status, 0, r.stdout + r.stderr)
  assert.equal(JSON.parse(r.stdout).must, 0)
})

test('every manifest names the same plugin and the skills folder exists for each host', () => {
  const claude = JSON.parse(readFileSync(join(ROOT, '.claude-plugin/plugin.json'), 'utf8'))
  const codex = JSON.parse(readFileSync(join(ROOT, '.codex-plugin/plugin.json'), 'utf8'))
  const gemini = JSON.parse(readFileSync(join(ROOT, 'gemini-extension.json'), 'utf8'))
  const market = JSON.parse(readFileSync(join(ROOT, '.agents/plugins/marketplace.json'), 'utf8'))
  assert.equal(claude.name, 'idea-to-launch')
  assert.equal(codex.name, claude.name)
  assert.equal(gemini.name, claude.name)
  assert.equal(market.plugins[0].name, claude.name)
  assert.equal(codex.skills, './skills/')
  assert.ok(existsSync(join(ROOT, 'skills/app-builder/SKILL.md')))
})
