# Going live

> In the person's language. Names of settings only, never values. Delete this note.

**Status:** _not live yet_ / _live since 2026-10-27_
**Address:** _https://…_
**Host:** _Railway (app + database)_ · **Rough cost:** _~$5–10 a month_
**Approved:** _2026-10-27: "Yes, go ahead"_

## Checklist
- [ ] A checked version: _review 2026-10-27, ready; checks pass_
- [ ] A place to run it: _Railway account created by you_
- [ ] An address: _free Railway address for now; your own domain later_
- [ ] Settings:
  - [ ] `DATABASE_URL`: where saved information lives (linked by the host)
  - [ ] `PUBLIC_APP_URL`: the app's address
  - [ ] `AUTH_SECRET`: keeps sign-in links safe
- [ ] Your yes to the plan below

## The plan
- _Creates: one app service and one PostgreSQL database on Railway_
- _Data: a fresh, empty database online; nothing from your computer is copied_
- _To undo: delete the project in the Railway dashboard_

## After going live
- **Version:** _(git commit)_
- **Backups:** _daily automatic backups, checked 2026-10-27_
- **To go back:** _Railway → Deployments → previous one → Redeploy_
- **First thing to check:** _open it on your phone and place a test booking_

## How we'll know it worked
- **Target:** _10 bookings through the page in the first week_ (from the plan)
- **Counted by:** _the app, on your bookings list_ / _you, by hand_
- **Started:** _2026-10-27_ · **Check on:** _2026-11-03_
- **Result:** _(on the check date, e.g. "9 of 10")_
- **What we learned:** _(one line, and what we're doing about it)_
