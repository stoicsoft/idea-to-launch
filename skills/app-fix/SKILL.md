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

## Never

- Swallow an error to silence it, stub or skip a check to make it pass,
  comment out the broken thing, or "fix" it by deleting the feature.
- Edit an applied migration or drop data to fix a data error. Add a new
  migration that repairs it, and if data is at risk, stop and ask (one-way
  door).
- Claim it's fixed without proving it.

## 3. Report

In one plain sentence, say what was actually wrong ("The booking form sent
the date in a format the server didn't accept"). Then say what you changed,
what you tested to prove it, and anything still unverified. Add a log line
to `progress.md`.

If the same kind of problem keeps coming back, say so and suggest a proper
check (app-review).
