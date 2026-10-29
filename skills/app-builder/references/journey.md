# The whole journey, in short

Use this when a step's own skill isn't installed (for example, when only
this skill was uploaded to a chat app). Each step's full skill has more
detail; this is the minimum to do it well. Follow talking-rules.md
throughout.

## Idea (app-idea)
- Ask in rounds of 2–4 questions, with a recommendation on each, for at most
  5 rounds. Round 1: where they are now (new idea / people do this somehow /
  people pay me / for my own team), who it's for (one real person or role),
  the customers' language if unclear, and what that person does today.
- Then: what today costs them, the moment they reach for it, the smallest
  version someone would use next week, how we'll know it worked (something
  countable), and what waits for later. Push once on vague answers, then
  write a marked guess.
- Save `product/brief.md` and `product/people.md`. Finish with one
  sentence, "Is this what you're building?", and record their yes.

## Plan (app-plan)
- 3–8 stories ("Linh can … so that …"), with at most 5 Now and the rest
  Next/Later. Ask once: trim to the smallest (recommended) / keep / show
  more.
- Every Now story gets acceptance lines for: happy, first time (empty),
  wrong input (nothing typed is lost), slow or pressed twice, and where the
  owner sees what came in.
- Ask once: "A month after launch nobody uses it. Why?" Write the cheapest
  fix as an operations line.
- Say who counts "how we'll know it worked": the app (built with the
  story it serves, shown on the owner's page) or the owner by hand. Write
  the target and the check date in the plan.
- Save `stories.md`, `spec.md` (the first sentence is the confirmed idea,
  plus "I assumed…" lines) and `plan.md` (steps in the order they'll see
  them working, each serving a story, with one-way doors called out).
  Record their approval with the date.

## Look (app-design)
- At most two questions: how should the person feel, and one look to
  borrow or avoid. Show three different directions (clean utility,
  editorial, soft consumer, dark technical, high contrast), recommend one,
  and commit. Save `product/design.md` (colours, type, corners, voice).
  Put all values in one CSS custom-properties file; no hard-coded colours.

## Build (app-build)
- Only from an approved plan. Existing project: keep its stack. New
  project: plain HTML/CSS for pages-only sites; Next.js + PostgreSQL
  (Drizzle; PGlite locally, hosted Postgres online) for apps that save
  information.
- Build each step as a whole story (all four paths), with real content in
  the app language, phone-first at 375px, accessible, with forms that keep
  input on error and can't double-submit. Data stays private per owner,
  every id from the browser is checked, migrations only add, and secrets
  stay server-side. Email, payments and files run in test mode until going
  live.
- Run the type check, tests and build after each step. Never weaken a
  test. Then tell them how to open it and what to try.

## Change (app-change)
- Quick: small, visible and reversible. Say it back in one sentence, do
  only that, then check it. Anything touching data, access or money is not
  quick, so plan it.
- "This isn't it": restate their intent, split the note into parts, stay
  inside the complaint, flag contradictions with earlier approvals, then
  fix and report item by item.

## Fix (app-fix)
- Gather evidence, restate it, reproduce it, find the cause, make the
  smallest fix, prove it, and stop. Never swallow errors, skip checks or
  delete features. Explain what was wrong in one plain sentence.
- Two attempts at the same problem, at most. If both fail, undo them, say
  what is still broken and what you tried, and let them choose: another
  way, leave it for now, or go back to the last working version.

## Check (app-review)
- Engineer's read (the main journey traced end to end, named errors, the
  four paths, data safety, secrets, placeholders, copy, design tokens,
  checks passing). Then a first-time customer's walk at phone size (empty
  submit, one wrong field, a double press, Back), then the person's view
  ("Linh wouldn't know the grey text is a button").
- Findings are must-fix or should-fix, in plain words, with what actually
  happened. Keep "checked by running", "checked by reading" and "not
  checked" separate. Save them to `product/reviews/<date>.md`.

## Go live (app-launch)
- Only a version whose review is ready. Show the checklist: hosting
  (Netlify for pages-only sites; Railway, or Vercel + Neon, for apps with
  data), an address (the free one first, their domain later), and settings
  by purpose (names only). Then their explicit yes to the exact plan, cost
  and data effect.
- They create accounts and paste secrets into the host themselves. Back up
  before data changes, deploy, then open the real address and walk the main
  journey before saying it's live. Record everything in
  `product/launch.md`, including the target and the check date.
- On the check date, compare the number with the target in one line, ask
  whether to keep going, change one thing or rethink, and write one "What
  we learned" line.
