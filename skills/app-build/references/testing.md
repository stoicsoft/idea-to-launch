# Testing what matters

Tests prove the promises in `stories.md` keep working, so the owner never
has to re-check everything by hand after each change.

## What to test

- **The main journey of each Now story, end to end.** Use the real seams:
  call the route handlers or server actions directly (build a `Request`,
  call the handler, check the status and the response body) against a fresh
  in-memory PGlite database with migrations applied.
- **The promises from the acceptance lines:**
  - something created appears in its owner's list, and not in a stranger's;
  - bad input is refused with a readable message (400);
  - a request from another origin is refused (403);
  - someone else's id answers "not found" (404);
  - a double submit creates only one item, where the story says so.
- **Migrations:** apply them twice to a fresh database. The second run
  changes nothing.

## What not to test

- No markup snapshots, which break on every wording change and prove
  nothing the owner cares about.
- Don't re-test the framework ("a button renders a button").
- Don't test every edge of every field. The main journey and its failure
  paths earn the coverage.

## Hygiene

- **Never delete, skip or loosen an existing test to get to green.** If a
  test that used to pass now fails, the code is wrong. Fix the code.
- Keep the suite fast: small fixtures, an in-memory database, no network.
  A slow suite gets skipped, and a fast one gets trusted.
- Tests never touch the owner's real data or real services. Use test mode
  or fakes.
- If a journey can't be tested through the routes or actions, that is a
  design smell. Rethink the seams before writing a browser test.

## Pages-only sites

There are no data tests. Instead, open every page, check that every link
works and has no `#` placeholders, and that images load. Check the page at
375px and 1280px wide, and with the keyboard only.

## Reporting

When you tell the owner about checks, say what was checked in plain words
("the booking can't be made twice", "a stranger can't see her bookings"),
not test names. Say which checks you could not run, and why.
