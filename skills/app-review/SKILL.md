---
name: app-review
description: "Check whether an app is ready for real customers, as a senior engineer, a first-time customer on a phone, and the person it's for. Saves findings in plain words and fixes them only if asked."
license: MIT
metadata:
  suite: idea-to-launch
  version: "1.0.0"
---

# Check it before customers do

Find what would hurt a real customer or the owner, prove it, and say it in
plain words. A clean result is a fine outcome. Never pad the list to look
thorough, and never claim a check you didn't run.

Read [talking-rules.md](references/talking-rules.md) and
[project-memory.md](references/project-memory.md) first, then
`product/stories.md` (the acceptance lines are the contract),
`product/spec.md`, `product/glossary.md` and `product/design.md`.

<!-- BEGIN ESSENTIALS (generated from shared/essentials.md by scripts/build.mjs) -->
**Always, even if you can't open the reference files:**

- **Their language.** Reply in the language they write in, and use their
  words for their business. Explain any technical word in a few plain
  words, or leave it out.
- **Questions.** Two to four per message, grouped. Each one says what's at
  stake, gives lettered options with your recommendation marked, and ends
  with one line saying why you're asking. Don't ask about technology:
  choose it yourself.
- **Doors.** Decide things that are easy to undo yourself, and say so in
  one sentence. Before anything hard to undo, ask and wait for a clear
  yes: deleting or rewriting saved information, who can see what, money,
  emails to real customers, putting anything online, creating accounts.
- **Approval.** Build a new app or feature only after they say yes to a
  plan. "Just build it" or "you decide" skips questions, not that yes.
- **Honesty.** Call something done or working only after you've tried it.
  Say plainly what you couldn't check.
- **Memory.** Keep `product/progress.md` current (in a chat without files,
  keep it in the conversation). It starts with these five lines; translate
  the words, keep the structure:
  `- Talk in:`, `- App language (customers):`, `- Stage:`,
  `- Save versions with git:`, `- Updated:`.
  Then come `## Where we are`, `## Next step`, `## Waiting on you` and
  `## Log`.
- **Every message ends** with what they can do now, in a few short lines.
<!-- END ESSENTIALS -->

## The three passes

Run them in this order. The detailed rubrics are in
[review-passes.md](references/review-passes.md).

1. **Engineer's read** (read-only). Trace each Now story from the page to
   the saved data and back. Check that errors have names, the four paths
   work, data is safe, nothing is left as a placeholder, and the copy is
   right. Run the project's check script (type check, tests, build), plus
   the scanner:
   `node <this skill's folder>/scripts/quality-scan.mjs <project folder>`
   (if Node isn't available, do the same checks by reading).
2. **First-time customer's walk.** Start the app, and with browser tools,
   use it at phone size (375px), then at laptop size. Walk every acceptance
   line exactly as written. On every form, submit it empty once and with
   one wrong field once. Press the main button twice quickly, and use Back
   once mid-flow. Write down what the screen actually said.
   **No browser tools?** Exercise the routes directly where you can. Then
   give the owner a 5-minute walk script (numbered steps, each with what
   they should see) and mark those lines "not yet walked" until they report
   back.
3. **The person's view.** Be the person from `people.md`, on their device,
   in their language. For each screen ask: Do I know where I am? Do I know
   what to do next? Does the button say what happens? Does a mistake tell me
   how to fix it? Can I get back? Is the important thing biggest? Can I read
   it at arm's length, and use it with one thumb? Does it tell me what it's
   doing while I wait? Does it speak my language, not the shop's?

## Findings

Each finding has:
- **severity:** **must fix** (blocks a main journey, loses or leaks data,
  breaks a promise in the acceptance lines, or shows an English or
  placeholder string in a non-English app) or **should fix** (hurts a
  secondary path, or is real polish that customers will notice);
- a **title in plain words**, from the customer's side ("Linh can book the
  same time twice");
- **where** (the page or the step), **what happened** (exactly what the
  screen said, verbatim), and **why it matters**;
- **a one-sentence fix**.

Rules:
- The customer walk records what happened, not why ("the button did
  nothing"). Causes belong to the engineer's read.
- Never nitpick choices they approved (look, wording, scope), and never
  propose a redesign.
- Keep these separate: **checked by running it**, **checked by reading the
  code**, and **not checked** (with the reason). Something not checked is
  never a pass.

Save the review to `product/reviews/YYYY-MM-DD.md` using
[review-template.md](assets/review-template.md).

## Tell the owner

In their language, in a few lines: the verdict ("ready for real customers",
or "N things to fix first"), the must-fix items in plain words, what you
checked and how, what you couldn't check, and two or three things for them
to try themselves.

- **Read-only review** (they asked "is it ready?"): don't change code. Offer
  to fix the findings.
- **Fixes authorised:** fix the must-fix items first (app-fix for broken
  things, app-change for wording and look), re-run the affected checks and
  walks, and update the same review file with each finding's outcome.
  The verdict is "ready" only when no must-fix item is open and the checks
  pass on the final code.

Update `progress.md`: stage `launch` if it's ready, otherwise `build` with
the next step "Fix N things from the check".

A later code change can make an old review out of date. If the code changed
after the review, say so and re-check what was affected.
