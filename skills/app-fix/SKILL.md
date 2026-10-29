---
name: app-fix
description: "Fix something broken in an app (an error, a blank page, a button that does nothing, a failing check) by finding the real cause first, fixing only that, and proving it works."
license: MIT
metadata:
  suite: idea-to-launch
  version: "1.0.0"
---

# Fix what's broken

A repair exists to fix the reported problem and nothing else. Don't fix
anything you haven't reproduced. If you can't reproduce it, say so
instead of changing code.

Read [talking-rules.md](references/talking-rules.md) first. Tell the owner
up front, in their words: "Something broke. I'll find out exactly why and
fix only that."

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
  Say plainly what you couldn't check. If two attempts to fix the same
  problem fail, stop and tell them what is still broken; never call it
  fixed.
- **Memory.** Keep `product/progress.md` current (in a chat without files,
  keep it in the conversation). It starts with these five lines; translate
  the words, keep the structure:
  `- Talk in:`, `- App language (customers):`, `- Stage:`,
  `- Save versions with git:`, `- Updated:`.
  Then come `## Where we are`, `## Next step`, `## Waiting on you` and
  `## Log`.
- **Every message ends** with what they can do now, in a few short lines.
<!-- END ESSENTIALS -->

## 1. Gather what happened

- Ask for what they saw, if you don't have it: which page, what they
  pressed, and what appeared. A screenshot or the exact words on screen
  help most. Ask once, in one message, and offer to look yourself.
- Collect evidence yourself: the server output, the browser console and
  network requests (with browser tools), the failing check's output, and
  recent changes (`git diff`, or the `progress.md` log).
- Read all the evidence before opening any file. See
  [repair-guide.md](references/repair-guide.md) for how to read each kind.

## 2. The ladder, in order

1. **Restate it in one line:** which page or action, what failed, and what
   the customer saw.
2. **Reproduce it.** Call the failing route, run the failing check, or
   repeat their steps until it fails the same way. A "500" with no cause is
   not a diagnosis; find the cause (repair-guide.md, "Silent failures").
3. **Find the line that broke and the line that fed it the bad value.** The
   fix goes at the cause. A null check where it crashed, hiding a missing
   value, just swallows the error.
4. **Fix the cause with the smallest change** that resolves it.
5. **Prove it.** The same request now succeeds with the right result, or
   the failing check passes, and the other checks still pass. "It should
   work now" is not proof.
6. **Stop.** No restyling, renaming, restructuring or new features "while
   you're here". Note anything else you noticed as a suggestion instead.

## Two tries, then stop

You get **two attempts** at the same problem. An attempt is a code change
followed by the reproduction or the check. If the second one still fails
the same way, stop changing code. A third guess on your own is how a small
bug becomes a broken app.

1. Undo the changes that didn't help, so no half-finished attempt stays in
   the code. If git is in use, go back to the last saved version of the
   files you touched.
2. Tell them plainly, in a few lines: what is still broken (in the
   customer's words), what you tried and what each attempt showed, what you
   now think the cause is and how sure you are.
3. Ask what to do, with your recommendation first:
   > **This one needs a different approach**
   > a) Try another way: _(one line on what you'd do differently)_ · b) Leave it for now and carry on with the rest · c) Go back to the last version that worked
4. Write it under "Waiting on you" in `progress.md`, and keep the problem
   open in the review file if there is one. It is not fixed until a fix
   passes the reproduction.

A new attempt after their answer starts a fresh count. A different
problem found along the way is a different problem: note it, and don't
count it here.

## Never

- Swallow an error to silence it, stub or skip a check to make it pass,
  comment out the broken thing, or "fix" it by deleting the feature.
- Edit an applied migration or drop data to fix a data error. Add a new
  migration that repairs it, and if data is at risk, stop and ask (one-way
  door).
- Claim it's fixed without proving it.
- Keep trying past two failed attempts without asking.

## 3. Report

In one plain sentence, say what was actually wrong ("The booking form sent
the date in a format the server didn't accept"). Then say what you changed,
what you tested to prove it, and anything still unverified. Add a log line
to `progress.md`.

If the same kind of problem keeps coming back, say so and suggest a proper
check (app-review).
