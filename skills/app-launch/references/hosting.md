# Where to put it

Recommend one option, say why in one sentence, and give a rough cost.
Prices and free tiers change, so tell them to confirm the current price on
the provider's pricing page before they sign up. Never pick a provider
because you're used to it; pick the simplest one that fits what the app
needs.

## Pages only (nothing saved, no sign-in)

| Option | Why | Rough cost |
|---|---|---|
| **Netlify** (recommended) | Drag the site folder onto the web page (Netlify Drop), or connect the code host; HTTPS and a free address included | Free for small sites |
| Cloudflare Pages | Very fast worldwide, with direct upload or a code-host connection | Free for small sites |
| GitHub Pages | Free if the code is already on GitHub | Free (public repositories) |
| Vercel | Good when the site might grow into an app later | Free for personal use; paid plan for business use |

Steps: build the site (if it has a build step), upload or connect, open the
free address, then add their domain in the provider's "Domains" settings.

## Saves information, signs people in, takes payments

| Option | Why | Rough cost |
|---|---|---|
| **Railway** (recommended for most) | App and PostgreSQL database in one project and one bill; deploys from the code host or from the CLI; built-in cron for scheduled jobs | Usage-based, typically a few dollars to ~$20 a month for a small app |
| Render | Similar: a web service plus Render PostgreSQL, with simple dashboards | Small monthly fee per service and database; free tiers sleep or expire |
| Vercel + Neon (or Supabase) | Generous free starts and very fast pages, but two accounts (app host and database host) | Free to start; paid plans as usage grows |
| Their own server (VPS) | Cheapest at scale and fully theirs, but they must keep it updated, backed up and secure | ~$5–20 a month, plus upkeep |

Recommend the VPS only if they already have one, or someone to look after
it.

### The general shape (every host)

1. **They** create the account (and add billing if needed), then sign in to
   the provider's CLI if you'll use it (`railway login`, `vercel login`,
   `render` dashboard). Wait for them to confirm.
2. Create the database (PostgreSQL 16 or newer) and copy its connection
   address into the app service's `DATABASE_URL` setting. Use the
   provider's built-in "reference" or "link" feature where it exists, so
   the password never passes through chat.
3. Set every other setting from `.env.example` in the service's
   **Variables / Environment** page. They paste secrets themselves.
   Also set `PUBLIC_APP_URL` to the public address, and the production
   flags the app uses (for example `NODE_ENV=production`).
4. Build and start commands come from `package.json` (`build`, `start`).
   Run `db:migrate` before starting: as a pre-deploy or release command
   where the host supports it, otherwise as the first step of `start`.
5. Health check: the home page, or a `/api/health` route that answers 200
   when the database is reachable.
6. Deploy. Watch the build log, then open the public address.
7. Scheduled jobs: add a cron in the host that calls
   `POST <address>/api/jobs/run` with the `JOBS_SECRET` header, at the
   interval the app needs.

### Railway specifically

- New project → **Deploy from GitHub repo** (or `railway up` from the
  folder) → add **PostgreSQL** → in the app service, set `DATABASE_URL` to
  the database's reference variable → **Settings → Networking → Generate
  Domain** for a free address → **Custom Domain** for theirs.
- Use the **pre-deploy command** for `npm run db:migrate`.
- Backups: turn on the database's backups and confirm one exists before the
  first migration on real data.

### Vercel + Neon specifically

- Create the Neon project and copy the **pooled** connection string into
  Vercel's `DATABASE_URL`.
- Import the repository in Vercel. Run migrations as part of the build
  (`npm run db:migrate && npm run build`), or from your computer against the
  production database once, with their yes.
- Scheduled jobs use **Vercel Cron** (in `vercel.json`) pointing at the
  jobs route.
- Uploaded files can't live on Vercel's disk, so use the S3-compatible
  storage settings from the file uploads feature.

## The domain (their own address)

- Buy it from a registrar (Cloudflare Registrar, Namecheap, Porkbun and
  others). A `.com` is about $10–15 a year; some endings cost much more.
  **They buy it themselves.**
- In the host, add the custom domain. The host shows one or two records
  (usually a CNAME, or A records). Walk them through adding those records
  in the registrar's **DNS** settings, one field at a time.
- HTTPS (the padlock) is automatic on all the hosts above once the records
  point correctly. It can take a few minutes, occasionally a few hours.
- Use the same domain for email sending (see settings-help.md, email).

## Backups and going back

- Before the first real customers arrive, confirm the database has
  automatic backups, and that one backup has actually been taken. Write the
  schedule in `launch.md`.
- **Going back to an older version** of the app: use the host's
  "redeploy"/"rollback" for a previous deployment. This is safe for data,
  because migrations only add.
- **Restoring a database backup** throws away everything saved since that
  backup. It's a one-way door, so always ask first, and say exactly what
  would be lost.
