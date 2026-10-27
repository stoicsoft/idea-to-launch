---
name: app-plan
description: Turn a confirmed idea into what each person can do, a one-page spec and a build plan the person approves. Use after the idea is clear and before building anything big.
license: MIT
metadata:
  suite: idea-to-launch
  version: "1.0.0"
---

# Plan the first version

Turn the confirmed idea into a page they can check in one read and a plan
they approve. Nothing big gets built before this approval.

Before you start, read:
- [talking-rules.md](references/talking-rules.md), and follow it in every message.
- [project-memory.md](references/project-memory.md).
- [planning.md](references/planning.md): stories, the four paths, scope,
  spec and plan rules.
- `product/brief.md`, `product/people.md` and `product/glossary.md`.

**No confirmed brief?** For a new idea, run the idea interview first
(app-idea). For a feature in an existing app, or a small, clearly specified
task, use a short intake instead: confirm in one sentence who it is for and
what they will be able to do, then go to step 1.

## 1. Stories: what each person will be able to do

Propose 3–8 stories from the smallest useful version, the people's needs
and "Not in this version". A story reads "**<person>** can **<do a thing>**
so that **<what they get>**", in their words, with no technical nouns.
Sort them into **Now** (first version, at most 5), **Next** and **Later**.

Every Now story gets 2–4 acceptance lines that someone could watch happen,
covering the four paths that matter (see planning.md): happy, first time
(empty), wrong input, and slow or pressed twice. Add one line for where the
owner sees what came in.

## 2. Scope: keep, trim, or see more

Ask once, as a question:
> **How big should the first version be?**
> a) Trim to the smallest (recommended for a first version): "If only one of these worked this week, which would <person> use?"
> b) Keep these stories as they are
> c) Show me what else is possible

- **Trim:** keep their pick as Now, move the rest to Next marked "trimmed
  for the first version", and say what the smaller version still does well.
- **Show more:** propose 2–4 extra stories, each written as "what the person
  gets · one honest risk". They go to Next unless the person promotes one.
  Be vivid, not salesy: "the booking pings her phone the second it lands" is
  fine, but "this could double your revenue" is banned.

Once they choose, commit. Never re-argue it, and never add or drop scope
without their explicit answer.

## 3. Remaining product questions

Ask any decisions the stories exposed that you can't safely assume, in the
question shape from talking-rules.md §3 (stakes, a marked recommendation, and
a "why I'm asking" line). Use the same rounds rules as the interview: 2–4 at a time, a recommendation each,
and never technical. Typical ones are who can see what, whether people sign
in, whether money is involved, and what the owner needs to see.
One-way doors always get an explicit answer (see talking-rules.md §4).
Settle reversible things yourself and list them as "I assumed…" lines.

## 4. Signal and the "what could go wrong" check

- Make sure the brief has a countable signal. If not, offer three and let
  them choose.
- Ask once: "Imagine a month after going live nobody uses it. What's the
  most likely reason?" Offer options based on the alternatives and the
  people's habits. Turn the answer into a risk with the cheapest fix,
  usually not code ("put the booking link in your Zalo auto-reply for two
  weeks"). That becomes an **operations line** in the plan. Never call a
  risk a blocker; only they decide that.

## 5. Write the spec and the plan

Write `product/stories.md`, `product/spec.md` and `product/plan.md` from
the templates in `assets/`. Rules:
- The spec's first sentence is the confirmed reframe. Its people, happy
  path, acceptance lines and "Not in this version" come straight from the
  stories and the brief. Never contradict them.
- "What it remembers" uses their nouns ("bookings", "regulars"), never
  "records", "fields" or "tables".
- Every build step serves at least one Now story and says which one. Drop a
  step that serves none.
- Order steps by what they'll see working first. Keep the plan short enough
  to read on a phone.
- Call out each one-way door in one line ("This changes how signing in
  works, which is hard to undo").
- If everything is small, reversible and safe, say so. It can be built in
  one go without stopping.
- Choose the technology yourself, following the stack guide in app-build. In
  the plan, describe only what they'll get ("it runs on your computer
  first; going online comes later"). Don't list tools unless they ask.

## 6. Approval

Show a short summary: the reframe, the Now stories, what's not in this
version, the "I assumed…" lines, one-way doors, and the plan steps. Then
ask:
> **Ready to build this?**
> a) Yes, build it (recommended) · b) Change something first · c) Not yet

On yes, record the approval in `plan.md` with the date and their words.
Set `progress.md` to stage `design` if no look has been chosen yet,
otherwise `build`. Offer to continue straight away.

If anything material changes later (a new story, a different person, a
changed one-way door), the approval is void. Say what changed and ask
again.
