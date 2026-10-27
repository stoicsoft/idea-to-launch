# Sending email

**In the owner's words:** "Your app sends emails: receipts, sign-in links,
reminders. While we build, nothing goes out. Every email lands in an outbox
you can open and read in the app. When you go live, emails are sent for real
through your own email service."

Emails to real customers are a one-way door. Who gets what, and when, is
the owner's answer.

## Build it safely
- All sending goes through **one function**, `sendEmail(message, owner)`.
  Nothing else imports the provider or calls an email API.
- **Two modes, same code:** with no provider key, `sendEmail` writes to an
  `email_outbox` table and an owner-only "Outbox" page shows it. With a key,
  it sends through the provider. Calling code never branches on the mode.
- Templates live in `src/emails/` and return `{ to, subject, html, text }`.
  Always write the plain-text version. Escape any text a person typed.
  Use the app's look (tokens) in a simple layout.
- **Rate limit inside `sendEmail`** (for example 5 per recipient per hour).
  A refused send returns a readable error, and never retries in a loop.
- Transactional email only: receipts, sign-in links, confirmations, and
  owner notifications. Newsletters and marketing blasts need a dedicated
  tool (and consent rules), so say so.

## Test it
- In test mode, triggering the action creates exactly one outbox row with
  the right recipient and both versions.
- The rate limit refuses the 6th send within the hour.

## Settings needed
| Setting | What it's for | Where to find it |
|---|---|---|
| `RESEND_API_KEY` (or the chosen provider's key) | Lets the app send on the owner's behalf | Provider dashboard (Resend, for example) → **API Keys** → **Create API Key**, name it after the app, keep "Sending access", and copy it right away because it's shown only once. Only needed when going live. |
| `EMAIL_FROM` | The sender address, like `hello@theirdomain.com` | Their own domain. The provider asks them to **verify the domain** by adding 2–3 records (SPF and DKIM) where the domain was bought; the provider's dashboard walks them through it. |
