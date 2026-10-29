---
name: app-change
description: "Make a small visible change to an app (wording, colour, order, hide or show) quickly, or turn “this isn't what I wanted” feedback into a precise fix list. Bigger changes go through a plan."
license: MIT
metadata:
  suite: idea-to-launch
  version: "1.0.0"
---

# Change something

Two kinds of request land here: a **quick change** ("make the button
green", "say 'Book now' instead") and **feedback on something built**
("this isn't it"). Both should feel like a single message to the owner.

Read [talking-rules.md](references/talking-rules.md) and
[project-memory.md](references/project-memory.md) first, then
`product/glossary.md`, `product/design.md` and `product/spec.md` if they
exist.

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

## 1. Is it really quick?

A **quick change** is small, visible and reversible: wording, colours,
spacing, a label, hiding or reordering something, or an image swap. It
changes no saved data, nobody's access, and no money.

It is **not** quick if it adds a feature, a page, a saved field, a
connection to another service, or sign-in, or if it touches anything in the
one-way-door list (talking-rules.md §4). In that case, say so in one
sentence ("That's a new feature, not a tweak; let me plan it with you
quickly first") and plan it (app-plan, short path).

When in doubt, treat it as bigger. A failed quick change costs more than a
short plan.

## 2. Quick change

1. **Say it back in one sentence**, in their words: "I'll change the main
   button to say 'Book now' on every page." If the request could mean two
   things, ask one question with your two best readings as options.
2. Make the change, and only that change. Follow the look in
   `product/design.md` (use tokens, not new colours) and the glossary words.
   If it's wording, change it everywhere that wording appears, in every app
   language.
3. Run the checks (type check, tests, build) and look at the result on a
   phone-sized screen.
4. Tell them what changed and where to see it, in one or two lines. Add a
   log line to `progress.md`, and save a version if they agreed to that.

## 3. "This isn't what I wanted"

Their note is the most valuable thing they will give you. Turn it into a
fix list the build can follow without guessing:

1. **Restate their intent** in one sentence before anything else: "You want
   the newest bookings at the top, not the oldest." If you can't restate it,
   the note is ambiguous, so ask one question with your two best readings as
   options. Never ask three questions, and never guess silently.
2. **Split the note into parts** (the page, the words, the behaviour, the
   saved information) and rank them their way: what they complained about
   first comes first.
3. **Stay inside the complaint.** "Make it pop more" means stronger
   hierarchy in the approved look, not a redesign, new colours or new
   features.
4. **Flag contradictions.** If the note conflicts with something they
   approved earlier, say so plainly and ask which wins. Don't reconcile it
   silently.
5. Show the fix list in their words, where each item says what they'll see
   differently ("The newest booking appears at the top of your list"), not
   which file changes. Then fix it: small reversible items right away; if an
   item is a scope change or a one-way door, take it through planning or
   ask.
6. After fixing, check each item and report back item by item.

## 4. Finish

Each change ends with what changed, where to look, and anything you didn't
change and why. If several quick changes have piled up into a different
product, suggest a short look at the plan.
