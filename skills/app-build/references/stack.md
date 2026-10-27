# Choosing and using the technology

The owner never chooses the technology. You do, and you only explain it if
they ask. Choose boring, well-documented tools that are easy to run on
their computer and easy to put online later.

## An existing project keeps its stack

If the folder already has an app, use its framework, language, package
manager, styling system, database and migration practice. Read its README,
`package.json` (or equivalent) and scripts before changing anything. Don't
convert it to a different stack, and don't add a second way of doing
something it already does.

## A new project: choose by what it needs

| What the app needs | Build it with | Why |
|---|---|---|
| Pages only: nothing saved, no signing in (a menu, an event page, a portfolio, a landing page) | Plain HTML and CSS, with a little JavaScript where needed; Astro if it has more than a few pages that share a header | Opens by double-clicking a file, and can go online for free |
| Saves information, signs people in, takes payments, sends email (bookings, orders, sign-ups, an internal tool) | **Next.js** (App Router, TypeScript), with **PostgreSQL** through **Drizzle ORM**. Use **PGlite** while building, so the database runs inside the app with nothing to install, and a hosted PostgreSQL when going live | One app holds the pages and the logic; the same database language runs locally and online |
| "An app on people's phones" | Start with a phone-friendly web app people can add to their home screen. Treat a native app-store app as a separate, later decision | Real people can try it this week, with no store review, no developer fees and one codebase |
| A tool that reads or fills a spreadsheet for a small team | Often the honest first version is a form plus a shared spreadsheet, with no code at all. Say so. If they still want an app, use the saves-information stack with the spreadsheet feature guide | The cheapest thing that solves the problem wins |

A native app means Apple charges $99 a year and Google $25 once, there is
app review, and there are two stores to maintain. That is a one-way door;
ask before going down that path.

## Conventions for the saves-information stack

These keep the app safe and easy to move online. Follow them without being
asked.

**Layout**
- Pages go in `src/app/<route>/page.tsx` and API routes in
  `src/app/api/<route>/route.ts`. Screen pieces go in
  `src/components/ui/`, the design tokens in `src/app/design-tokens.css`,
  and shared logic in `src/lib/`.
- Pages are server components that read data directly. Use `'use client'`
  only on the smallest piece that needs interaction. Never fetch your own
  API from a server component; read the data instead.
- Every API route that changes data sets `export const dynamic =
  'force-dynamic'`.

**Data**
- One module, `src/lib/db.ts`, is the only place that connects to the
  database. When `DATABASE_URL` is set it uses PostgreSQL
  (`drizzle-orm/node-postgres`); otherwise it uses PGlite in a local
  `.data/` folder (`drizzle-orm/pglite`). Nothing else reads
  `DATABASE_URL` or holds a connection string.
- The schema lives in `src/lib/schema.ts`. Migrations are generated SQL
  files in `drizzle/`, committed, and applied by one `db:migrate` script
  that runs the same way locally and online. Migrations only add; see
  data-and-safety.md.
- Store money as whole minor units (cents) and dates as timestamps with a
  time zone.

**Settings and secrets**
- Settings come from environment variables, read in one place
  (`src/lib/config.ts`). Local values go in `.env.local`, which is never
  committed. `.env.example` lists every name with a one-line purpose and no
  values.
- A setting that starts with `NEXT_PUBLIC_` is visible to everyone, so it
  is never a secret.

**Checks**
- `package.json` scripts: `dev`, `build`, `start`, `typecheck`
  (`tsc --noEmit`), `test`, `db:migrate`, and `check` (type check, tests
  and build in one go). Run `check` before you say anything is done.

**Dependencies**
- Prefer what the framework already gives you. Add a package only when it
  saves real work, is widely used and maintained, and is not heavy for a
  cosmetic job. A date picker isn't worth 300 KB. Tell the owner about a
  dependency only if it costs money or needs an account.

**Running it for the owner**
- Start the development server and give them the address. Explain that
  `localhost` means "only on this computer". If a port is busy, use the next
  free one and tell them the new address.
- Leave a "how to start it" section in the app's README, in plain steps:
  open the folder, run one command, and open the address.

## Conventions for the pages-only stack

- Use `index.html` plus one `styles.css` that starts with the design tokens,
  plus `script.js` only if needed. Use semantic HTML, phone-first CSS, and
  no build step.
- Images get `width`, `height` and `alt`, and are compressed. Use a system
  font stack, or self-host one web font.
- Forms (a contact form or sign-up) need somewhere to send to. Use the
  hosting provider's form feature, or link to an email address. Never put a
  secret key in a page.
