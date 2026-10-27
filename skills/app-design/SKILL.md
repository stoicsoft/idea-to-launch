---
name: app-design
description: Choose how an app looks and sounds for a non-technical owner. Shows three directions, commits to one, and saves colours, type and voice. Use to pick a look or make an app look better.
license: MIT
metadata:
  suite: software-builder
  version: "1.0.0"
---

# Choose the look

Give the app one clear, deliberate style that fits this business, chosen by
the person from real options, then applied consistently everywhere.

Before you start, read [talking-rules.md](references/talking-rules.md) and
[project-memory.md](references/project-memory.md). Read `product/brief.md`
and `product/people.md` if they exist. The five starting directions with
their exact values are in [directions.md](references/directions.md).

## 1. Two questions at most

Skip either one if the brief already answers it.
- **Feeling:** "When <person> opens this, what should they feel?" Give
  options from their world: calm and looked-after · quick and
  no-nonsense · warm, like the shop · serious, like a bank.
- **References** (optional): "One app, shop or website whose look you'd
  borrow, and one you'd never want."

## 2. Show three directions, not one

Propose three complete directions that differ in their **basis**, not just
in shade. Give each a name, its colours, type and voice, and one sentence
tying it to the feeling and the person:
> "Warm editorial, paper white and deep green, because Linh should feel
> looked after, not processed."

Start from the five bases in directions.md, and adjust the accent so it
belongs to this business. Recommend the one that best fits the idea (the
hints are in directions.md) and put it first.

**Let them see it.** If you can create files or artifacts, make one small
preview page that shows the three directions side by side, each with a
heading, a short paragraph, a button, a form field, a card and an error
message. Use a real line from their app ("Book Saturday 10:00"), never
lorem ipsum. If you can only write text, describe each direction in two
lines and give the colour swatches.

## 3. Commit

When they choose, write `product/design.md` from
[design-template.md](assets/design-template.md): the chosen basis, the full
palette, type, shape and voice rules. From then on, every screen follows it.
- Use one accent colour, sparingly. Get contrast from the type, not from
  decoration.
- Never use by habit: purple-blue gradients, glassmorphism, emoji as icons,
  cream-paper-and-serif as a default, or rust and terracotta accents (unless
  they asked for them).
- Text and background pairs must meet WCAG AA contrast (4.5:1 for body
  text). The bases in directions.md already do. Check any accent you change.

If the app already exists, also apply the look in code: put every colour,
font, spacing step and corner radius in one tokens file of CSS custom
properties (see directions.md, "In code"). Replace hard-coded colours with
the tokens. Check the app on a phone-sized screen and a laptop-sized screen
afterwards.

## 4. "Make it look better"

When they ask for a nicer look without a new direction:
1. Read `product/design.md`. If there isn't one, go to step 1 of this skill.
2. Find the three changes that matter most: usually hierarchy (what's
   biggest), spacing rhythm, and alignment. Then come copy tone and empty
   states. Fix those within the chosen direction. Don't redesign.
3. Show before and after if you can, and say in one line what changed.

## 5. Finish

Update `progress.md` (stage `build` if a plan is approved, otherwise
`plan`). Close with the chosen direction in one sentence and the next step.
