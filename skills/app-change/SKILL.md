---
name: app-change
description: Make a small visible change to an app (wording, colour, order, hide or show) quickly, or turn "this isn't what I wanted" feedback into a precise fix list. Bigger changes go through a plan.
license: MIT
metadata:
  suite: software-builder
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
