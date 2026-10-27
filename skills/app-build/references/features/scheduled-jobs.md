# Scheduled jobs and reminders

**In the owner's words:** "Your app does things on a schedule: remind
customers before a booking, send you a daily summary, cancel unpaid
reservations. Everything it does is safe to run twice, and you can run any
job by hand to try it."

## Build it safely
- Each job is a handler file in `src/lib/jobs/handlers/`, registered by name
  in one registry, with `jobs` and `job_runs` tables.
- **Every handler must be safe to run twice.** Claim the run with an
  idempotency key (`beginRun(jobId, key)`, where null means "already ran" and
  the handler returns early). Key any writes it makes by the same key
  (`INSERT … ON CONFLICT DO NOTHING`).
- Schedules are simple: "every N minutes" or "daily at HH:MM" in UTC, shown
  to the owner in their own time zone. Translate their words: "a day before"
  becomes an hourly job that scans tomorrow's bookings, and "daily summary"
  becomes daily at 08:00 in their time zone.
- Work in small batches (for example 25 items per run), never a whole table.
- **Jobs run only while the app is running.** Online, the host's cron (or a
  scheduler service) calls `POST /api/jobs/run` with a secret
  (`JOBS_SECRET`). While building, an owner-only "Run now" button runs any
  job. Missed jobs catch up on the next run.
- Emailing from a job goes through the email feature's `sendEmail` (owner
  `system`), so its rate limit applies.

## Test it
- Running the same job twice with the same key does the work once.
- The run endpoint refuses a request without the secret.

## Settings needed
| Setting | What it's for | Where it comes from |
|---|---|---|
| `JOBS_SECRET` | Lets only the scheduler start jobs | Generate a long random value. Paste the same value into the hosting provider's cron/scheduler settings when going live. |
