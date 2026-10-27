---
name: app-launch
description: Put an app on the internet safely for a non-technical owner: what going live needs, hosting and domain choices, settings by purpose, explicit approval before anything goes live, and checks after.
license: MIT
metadata:
  suite: idea-to-launch
  version: "1.0.0"
---

# Go live

Going live means the app leaves this computer for a server the owner
controls, on a real internet address, with the padlock (HTTPS). Explain it
that way. Don't mention SSH, containers, build pipelines or DNS records
unless they ask, or unless they have to do a step themselves; then give
exact steps.

Read [talking-rules.md](references/talking-rules.md) and
[project-memory.md](references/project-memory.md) first, then
[hosting.md](references/hosting.md) and
[settings-help.md](references/settings-help.md).

## The non-negotiables

- **Nothing goes live without their explicit yes to the exact plan**: where
  it goes, what it costs, what gets created, and what happens to data. If
  the plan changes, ask again.
- **They create accounts and enter payment details themselves.** You never
  sign up for services, buy domains or add billing on their behalf. Once
  they're signed in, you can do the technical steps with their permission.
- **Secrets go straight into the host's settings page**, typed or pasted by
  them. Don't ask them to paste secrets into the chat. If they do anyway,
  use the value only to set it on the host, never write it into a file, and
  suggest replacing it at the provider later.
- **Never skip a failing check to get online.** Fix it first.
- **Never say it's live until you've opened the real address and seen it
  work.**

## 1. Is it ready?

Check `product/reviews/`. The latest review must say "ready" (or "ready,
with things to watch"), and the checks must pass on the current code. If
the code changed since the review, re-check what changed (app-review). If
it isn't ready, say what's missing in one line and offer to fix it first.

## 2. Show what going live needs, in order

Write `product/launch.md` from [launch-template.md](assets/launch-template.md)
and show it as a short checklist in their words:
1. **A checked version.** The app passes its checks (from step 1).
2. **A place to run it (hosting).** Recommend one option from hosting.md,
   chosen by what the app needs, with a rough monthly cost and why.
3. **An address (domain).** They can start on the host's free address and
   add their own domain later. A `.com` usually costs about $10–15 a year.
4. **Settings by purpose.** List each setting the app needs (from
   `.env.example`), what it's for, and whether it's done. Show names and
   purposes only, never values. Link each one to its "where to find it"
   steps in settings-help.md.
5. **Their yes** to the exact plan.

Ask about hosting and the domain as questions with recommendations (see
talking-rules.md). Each item that is waiting on them is one clear action:
"Create a free Railway account and tell me when you're signed in."

## 3. The publish plan, and approval

Before doing anything, show in a few lines: what will be created (an app
service, a database), where, the expected cost, what happens to data
("a fresh, empty database online; nothing on your computer is copied
unless you ask"), and how to undo it. Then ask:
> **Put it online now?** a) Yes, go ahead · b) Not yet

Record their yes in `launch.md` with the date.

## 4. Do it

Follow hosting.md for the chosen host:
- Create the service and the database; set the settings (they paste the
  secrets); point the app at the online database through `DATABASE_URL`.
- **Back up before any data change** on an existing live database, and
  confirm the backup exists before migrating.
- Apply migrations (they only add), then deploy the checked version.
- Set up whatever the features need: scheduled jobs (the host's cron calling
  the jobs route), the payment webhook, and email domain verification.
- Connect the domain when they have one. The host shows the DNS records;
  walk them through adding them where they bought the domain, step by step.

## 5. Prove it's live

- Open the real address over HTTPS. The home page loads with the padlock.
- Walk the main journey once on the live app, at phone size. Use test data
  you then remove, or test mode for payments. A real payment needs their
  yes.
- Check that the settings are in effect: a sign-in email actually arrives,
  and the webhook shows as delivered.
- Record the address, host, date, version (git commit), and how to roll
  back in `launch.md`. Set `progress.md` to stage `live`.

## 6. Tell them

In one sentence, say what changed. Give the address, and the one thing to
check first ("Open it on your phone and place a test booking"). Then give
any operations lines from the plan ("Put the booking link in your Zalo
auto-reply").

## When something fails

Translate it plainly and give the next step. Never hide it:
- "The server didn't answer": check the service is running and the
  address is right.
- "The address doesn't point there yet": the domain settings still need
  the records from the host. Changes can take a few minutes, occasionally
  hours.
- "The checks failed on this version": fix the app first; never skip the
  check.
- "It stopped partway": say exactly what state things are in (what was
  created, whether data changed, whether the old version is still serving)
  and the honest next step. Offer to undo what was created if they want.

## Updates after launch

Every update follows the same path: check (app-review), back up the
database if data changes, deploy, then prove it's live. To go back, use the
host's "redeploy previous version". Restoring a database backup overwrites
newer data, so it's a one-way door and needs their explicit yes.
