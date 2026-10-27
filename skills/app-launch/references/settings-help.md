# Settings: what each one is for, and where to find it

Show the owner names and purposes only. They paste values straight into the
hosting provider's settings page. While building, most features run in a
local test mode, so these are only needed when going live.

## Always

| Setting | What it's for | Where it comes from |
|---|---|---|
| `DATABASE_URL` | Where the online app keeps its saved information | Created with the database on the host. Link it with the host's reference feature rather than copying it. |
| `PUBLIC_APP_URL` | The app's real address, for links in emails, share cards and security checks | The host's free address at first (`https://….up.railway.app`), then their domain (`https://theirshop.com`) |

## Sign-in

| Setting | What it's for | Where it comes from |
|---|---|---|
| `AUTH_SECRET` | Signs sign-in links and sessions so nobody can forge them | Nothing to find: generate a long random value (a password manager's "generate password", at least 32 characters, or `openssl rand -base64 32`). Changing it later signs everyone out once, which is fine. |

## Payments (Stripe)

Stripe is the company that takes the card payments. **They** create a free
account at stripe.com.

| Setting | What it's for | Where it comes from |
|---|---|---|
| `STRIPE_SECRET_KEY` | Lets the app create checkouts | Stripe dashboard → **Developers → API keys** → **Secret key**. `sk_test_…` is for trying things; `sk_live_…` takes real money. Stripe asks them to finish activating the account (bank details, business name) before live keys work. The publishable key and their Stripe password are never needed. |
| `STRIPE_WEBHOOK_SECRET` | Proves "payment succeeded" messages really come from Stripe | **Developers → Webhooks → Add endpoint** → the app's address + `/api/webhooks/stripe` → event **checkout.session.completed** → open the endpoint → **Reveal** under "Signing secret" (`whsec_…`). |

## Email

| Setting | What it's for | Where it comes from |
|---|---|---|
| `RESEND_API_KEY` (or the chosen provider's key) | Lets the app send email on their behalf | Provider dashboard → **API Keys → Create API Key**, named after the app, with "Sending access". Copy it right away, because it's shown only once. |
| `EMAIL_FROM` | The sender address, like `hello@theirshop.com` | Their domain. The provider asks them to **verify the domain** by adding 2–3 records (SPF and DKIM) where the domain was bought. The provider's dashboard walks through it; you can guide them one field at a time. |

## File storage (uploads)

All four come from one S3-compatible storage provider (Cloudflare R2,
Amazon S3, DigitalOcean Spaces…). Keep the bucket private, because the app
serves files itself.

| Setting | What it's for | Where it comes from |
|---|---|---|
| `FILES_ENDPOINT` | The storage address | The provider's **endpoint** / **S3 endpoint** (`https://…`); region `auto` unless the provider says otherwise |
| `FILES_BUCKET` | The folder everything lives in | **Create bucket**, named after the app |
| `FILES_ACCESS_KEY`, `FILES_SECRET_KEY` | The app's username and password for storage | **API tokens / Access keys** → create one limited to this bucket, with read and write. The secret is shown once. |

## Spreadsheet data (Google Sheets)

| Setting | What it's for | Where it comes from |
|---|---|---|
| `SHEETS_API_KEY` | Reads a sheet shared "anyone with the link can view" | console.cloud.google.com → **APIs & Services** → enable **Google Sheets API** → **Credentials → Create credentials → API key** → restrict it to the Sheets API |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Reads a private sheet | Same console → **Service accounts** → create one → **Keys → Add key → JSON**. Share the sheet with the service account's email as **Viewer**. |
| `SHEET_ID` | Which sheet | The long id in the sheet's address, between `/d/` and the next `/` |

## Scheduled jobs and owner tools

| Setting | What it's for | Where it comes from |
|---|---|---|
| `JOBS_SECRET` | Lets only the host's scheduler start jobs | Generate a long random value, and paste the same value into the host's cron settings |
| `FOUNDER_TOKEN` | Protects owner-only tools such as feature switches | Generate a long random value, and keep it in their password manager |

## If a secret leaks

If a key was pasted somewhere public, committed to code, or shared by
mistake: create a new one at the provider, put the new one in the host's
settings, then delete the old one. Say this plainly, without alarm. It
takes five minutes.
