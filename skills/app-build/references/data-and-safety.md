# Data and safety

After launch, the app holds real customers' information. Build every change
as if it already does, because soon it will. A change that loses data or
leaks it is worse than a missing feature.

## Model the business

- One table per thing the spec names, with fields named in business words
  (`startsAt`, `phone`, `serviceName`, never `col1` or `data2`).
- Every table gets an `id` (a random UUID, generated on the server) and a
  `createdAt` timestamp with a time zone. Private data also gets an `owner`
  column.
- Fields the spec implies but the owner didn't confirm are optional
  (nullable). Never invent required fields.
- Store money as whole minor units (cents), and format it only when
  displaying.

## Who can see what

Decide this in the plan (it's a one-way door), then enforce it on every
read and write.

- **Private by default.** Every query for private data filters by the
  current owner: the signed-in user, or an anonymous browser session when
  there is no sign-in. One unfiltered query is a leak.
- **Never trust an id from the browser for permission.** If someone opens
  `/bookings/123`, still check that booking 123 belongs to them before
  reading or changing it. Answer "not found", not "forbidden", so ids don't
  leak.
- Never return another person's data, not even fields such as `owner`. Use
  explicit field lists in queries and responses.
- A public form (booking, contact, order) is where strangers and spam
  arrive. Keep it small and validated, rate-limit it, and never echo other
  people's data back.

## Changes that never lose data (migrations)

- **Migrations only add:** create a table, add a column, add an index, or
  backfill with an update.
- **Never:** drop a table or column, rename by delete-and-recreate, or edit
  a migration that has already run. To rename, add the new column, copy the
  data over, and keep the old one. Removing it later is a separate decision
  for the owner (a one-way door).
- Every migration must run both on an empty database and on one full of
  real rows.
- Take a backup before applying migrations to a live database (see
  app-launch).

## Requests from the browser

- Every action that changes data checks that the request comes from the
  app's own pages: check the `Origin` header in route handlers (Next.js
  server actions check it already). For cookies, use `HttpOnly`,
  `SameSite=Lax`, and `Secure` when served over HTTPS.
- Read request bodies with a size limit. Parse and validate before use.
- What people type never becomes raw HTML. Using
  `dangerouslySetInnerHTML`, `innerHTML`, `eval` or `new Function` on user
  data is a must-fix.

## Secrets

- Secrets (API keys, passwords, connection strings) live only in
  environment variables on the server. They never go in code, the browser
  bundle, the database, logs, or `product/` files.
- Never log request bodies, cookies, auth headers, or addresses that
  contain tokens. Log event names and counts.
- If you ever see a real secret in the code or chat, say so plainly, move
  it into an environment variable, and recommend they replace it with a
  fresh one at the provider. A secret that leaked once stays leaked.

## Reading from outside sources

When the app shows data from somewhere else (a spreadsheet, a feed, another
service):
- Fetch it when the page is requested, with a short timeout, and keep at
  most one copy for that request. Don't copy it into your database, and
  don't run a sync job.
- Read-only by default. Write back only if the source's own rules allow it
  and the owner asked for it.
- If it fails, show an honest empty state ("This list isn't connected right
  now"), never an error page and never stale rows.

## Sample data

Sample data is the first thing the owner and their customers see, so make
it look like their business, in the app language:
- Use local first names and surnames and plausible business names, but
  never real people, real businesses or real contact details.
- Use prices in their currency at local levels (a nail salon in Ho Chi
  Minh City charges hundreds of thousands of dong, not $199.99).
- Use dates around today, some past and some upcoming.
- Include variety that tests the screens: a long name, a small price, a
  full day and an almost-empty one. Leave one list or category empty so the
  empty state shows.
- Never use "Test 1", "Foo", "Item", or three identical rows.
