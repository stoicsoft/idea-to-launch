---
name: app-build
description: "Build an app, or add a feature, from an approved plan for a non-technical owner, with real content, their customers' language, phone-first screens, safe data and a tested main journey."
license: MIT
metadata:
  suite: idea-to-launch
  version: "1.0.0"
---

# Build it

Build exactly what was approved, as a real, working app, to a standard the
owner can trust with real customers. They judge it by using it, so every
screen, word and error message counts.

Before you start, read:
- [talking-rules.md](references/talking-rules.md), and follow it in every message.
- [project-memory.md](references/project-memory.md), then `product/plan.md`,
  `product/stories.md`, `product/spec.md`, `product/design.md` and
  `product/glossary.md`.
- [stack.md](references/stack.md) before choosing or touching technology.
- [quality-bar.md](references/quality-bar.md) and
  [data-and-safety.md](references/data-and-safety.md) before writing
  screens or saving anything.
- [testing.md](references/testing.md) before writing tests.
- Only the feature guides the plan needs, from `references/features/`:
  [sign-in](references/features/sign-in.md),
  [payments](references/features/payments.md),
  [email](references/features/email.md),
  [file uploads](references/features/file-uploads.md),
  [scheduled jobs](references/features/scheduled-jobs.md),
  [languages](references/features/languages.md),
  [landing page](references/features/landing-page.md),
  [search and sharing](references/features/search-and-sharing.md),
  [spreadsheet data](references/features/spreadsheet-data.md),
  [feature switches](references/features/feature-switches.md).

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

## 1. Check you may build

- **The plan must be approved** (`product/plan.md` shows "Approved" with a
  date). If it isn't, run the planning step first (app-plan). There are two
  exceptions: a small, fully specified task they asked for directly, or a
  quick change (app-change).
- **No look chosen yet?** Start with the Clean utility direction from
  [directions.md](references/directions.md), and tell them in one line that they can choose a different
  look any time. Don't block on it.
- If the code already in the folder disagrees with `product/` (for example,
  someone changed it outside this process), say so in one sentence before
  you build.

## 2. Check the computer, once

You need what the stack requires, usually Node.js (current LTS), a package
manager, and git. Check quietly. If something is missing, say what it is
for in one plain sentence and point to the official installer. Install
system software only after their yes. Never use `sudo`, and never change
system settings without asking.

## 3. Set up the foundations (new projects)

Follow stack.md. Create the project. Then, before the first story:
- Create the design tokens file from `product/design.md` (see
  [directions.md](references/directions.md), "In code"), and a small kit of screen pieces: button, field, input, card,
  table, empty state, dialog, toast, page header.
- Create one data module (the only place that talks to the database), a
  `.env.example` that lists setting names with one line each on what it is
  for, and a `.gitignore` covering secrets and local data.
- Set up a test runner, plus a script that runs type checks, tests and the
  build together.
- Write a short `README.md` for the app itself: what it is, and how to
  start it, in plain steps.
- If they agreed to save versions, set up git and save a first version.

## 4. Build in plan order

For each plan step, in order:
1. Build the whole story, not just the happy path: the empty first visit,
   wrong input, double presses, slow connections, and the owner's view (see
   the acceptance lines in `stories.md`).
2. Use their words: glossary nouns on screen and English names in code.
   Write all text in the app language, natively. Use real, believable
   content, never placeholders.
3. Run the checks (type check, tests, build). Fix anything that fails
   before moving on. Never skip, weaken or delete a test to get green.
4. Start the app and try the step yourself, in a browser if you have
   browser tools, or by calling the pages and actions directly if not.
5. Update `product/progress.md` (one log line), and save a version if
   agreed.

**Stop and ask** when you hit a one-way door the plan didn't settle, a
decision only they can make, or something that would change the approved
scope. Say what you found, the options, and your recommendation. Never
silently add or drop scope.

**No accounts needed while building.** Features that later need a paid
service (email, payments, file storage) run in a local test mode first:
emails land in an on-screen outbox, payments use the provider's test mode,
and files save to a local folder. The owner can try everything before
signing up for anything. See each feature guide.

## 5. Before you say it's done

- Run the full check script. It must pass.
- Walk every Now story's acceptance lines yourself.
- Go through the checklist at the end of quality-bar.md.
- Start the app and leave it running, or tell them the one command or
  click that starts it.

## 6. Hand it over

Tell them in a few short lines, in their language:
- what they can do now ("You can open the booking page and book a time");
- how to open it: the address, explained ("http://localhost:3000, which
  opens only on this computer for now");
- two or three specific things to try, including one "wrong" thing ("try
  booking without a phone number");
- what was left out or is still a guess;
- the next step: a proper check before real customers use it (app-review).

Update `progress.md` (stage `review`, next step "Check it like a real
customer"). Never say it's ready for customers until a review has passed.
