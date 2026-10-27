# Feature switches

**In the owner's words:** "Turn parts of your app on or off without putting
out a new version: for everyone, just your staff, or a slice of visitors.
A flip takes effect at once."

Use this when the plan marks a change as risky, or the owner wants to try
something before everyone sees it.

## Build it safely
- Check switches on the server only: `await isOn('new-checkout', who)`.
  Unknown switches are **off**, so code can ship before the switch exists.
- Switch states: `off`, `staff`, `percent:N`, `on`. Percentages use a
  deterministic hash of the switch name and the visitor's id, so a visitor
  keeps seeing the same version. Never use `Math.random`.
- States live in the app's database (a `flags` table), not in memory or in
  environment variables, so they survive restarts and apply instantly.
- Only the owner can flip switches (an owner-only page, or a route
  protected by `FOUNDER_TOKEN`). Visitors never see the switchboard.
- A switch that has been fully on for weeks is clutter. When the owner
  agrees, delete it, keep only the new path, and remove the old code.

## Test it
- An unknown switch is off, and `isOn` never throws.
- The same visitor gets the same answer for a percentage switch every time.
