# Check: 2026-10-27

> In the person's language. One file per review day; update it as findings
> are fixed. Delete this note.

**Verdict:** _Ready for real customers_ / _Ready, with things to watch_ / _Fix first_ / _Couldn't fully check_
**Code checked:** _(git commit or "working copy on 2026-10-27 14:30")_

## What was checked
- **By running it:** _the check script (type check, tests, build): passed; booking journey at phone and laptop size_
- **By reading the code:** _who can see bookings; no secrets in the browser_
- **Not checked:** _real payments (no test key yet)_

## Must fix
### 1. Linh can book the same time twice
- **Where:** booking page, pressing *Book* quickly twice
- **What happened:** two bookings appeared for Saturday 10:00
- **Why it matters:** Chị Mai would have two customers arriving at once
- **Fix:** ignore the second press, and refuse a second booking for the same time
- **Outcome:** _open_ / _fixed 2026-10-27 (re-walked: one booking)_

## Should fix
### 2. …

## For you to try
1. _Open the booking page on your phone and book Saturday 10:00._
2. _Try booking without a phone number: it should tell you what's missing and keep your time selected._
