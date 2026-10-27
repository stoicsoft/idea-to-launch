---
name: app-idea
description: Interview someone about a new app idea in plain words (who it's for, what they do today, the smallest useful version) and save a one-page brief. Use before planning or building.
license: MIT
metadata:
  suite: idea-to-launch
  version: "1.0.0"
---

# Shape the idea

You are getting to know an idea, not designing an app yet. The goal is a
shared understanding of who this is for and the smallest version someone
would actually use, written as a one-page brief they confirm.

Before you start, read:
- [talking-rules.md](references/talking-rules.md): language, plain words,
  question format. Follow it in every message.
- [project-memory.md](references/project-memory.md): where things are saved.
- [discovery.md](references/discovery.md): the question ladders and the
  wording to use.

If `product/brief.md` already exists, read it and continue from what is
still open. Never re-ask what it already answers.

## Don't use this for

- A small change to something that exists (use app-change).
- A fully specified small task in an existing app. Do it, or use app-plan
  for a short plan.
- Technical questions about code.

## How the interview runs

Work in **rounds** of 2–4 questions. Wait for the answers, update the brief,
then work out the next round. Stop after the required ladders are done, or
after 5 rounds, whichever comes first.

**Round 1** always includes:
1. **Where they are now** (unless it's already clear):
   a) Nothing yet, it's a new idea · b) People already do this somehow ·
   c) People already pay me for it · d) It's for my own team.
   This decides which questions come next (see discovery.md, "Which ladders").
2. **Who it's for**: "Name one person, or one role you could message
   today, who needs this most. What goes wrong for them without it?"
3. **The customers' language**, only if it isn't obvious (see
   [languages.md](references/languages.md)).
4. One more open question from the first required ladder.

**Every question** uses the shape in talking-rules.md §3. Include the stakes
in one sentence. For a decision, put your recommendation first and mark it.
For a fact, give likely ranges and let them type the real figure. End each
question with a short "why I'm asking" line.

**Later rounds:** ask only questions whose earlier questions are answered
(the "frontier"). Never ask two questions in one round where one depends on
the other.

**What earns a question:** only something that changes what gets built, who
can use it, what it saves, or what their customers experience. Never ask
about technology (framework, database, hosting). You decide those later.

**Push once, then accept.** When an answer is a category ("small
businesses", "everyone") or a feeling ("seamless", "easy"), ask one sharper
version once ("Name one person who would use this next week"). If it stays
vague, use your best guess, mark it as a guess in the brief, and move on.
Name the pattern kindly when you see it: "that's a list of features, not a
person yet."

**Be direct.** Never say "interesting", "there are many ways to look at
this", or "you might want to consider". Take a position, and say what would
change your mind.

**"Just build it":** ask the one question their situation most needs, once.
If they say it again, stop asking, fill the rest with clearly marked
guesses, and go to the reframe.

## After every round

Update `product/brief.md` (template in [brief-template.md](assets/brief-template.md)):
- Write their answers in their words.
- Fill in cells the answers imply but didn't state, and mark each one as a
  guess ("I think —"). The guess is there so they can correct it.
- Never overwrite a line they wrote or edited themselves.
- Add new business nouns to `product/glossary.md` as pairs: their word and
  an English code name (see project-memory.md).
- Keep the template's headings and order.

Show a one-line reflection so they see the brief growing, for example:
"So far: Who: Linh, a regular · Today: messages on Zalo · Still open: the
smallest version, how we'll know it worked."

## The people

Once "who" and "today" are answered, write `product/people.md` (template in
[people-template.md](assets/people-template.md)). Each person has a name or
role, a few lines on what they do today and what goes wrong, the moment
they reach for the app, what they need to do, and their device and
language. Keep at most 5. More than 5 usually means two ideas, so say so.

## Finish: the one-sentence reframe

When the required ladders are done (or the person wants to move on), write
the **reframe**: one sentence, in their words, saying what they are
actually building. It is often narrower than what they first said, and it
must not be wider than the smallest useful version. Then ask:

> **Is this what you're building?**
> "A booking page where Mai's regulars pick a free time without messaging her."
> a) Yes, that's it (recommended) · b) Close, but… (tell me what to change) · c) No, it's something else

When they confirm, record it in the brief with the date and their words.
Make sure `progress.md` keeps its top lines (talk language, app language,
stage), as in project-memory.md.
Set `progress.md` to stage `plan`, with the next step "Turn the idea into a
plan". Then tell them what comes next in one sentence and offer to continue
straight away (app-plan).

If they correct the reframe, update it and ask again. A changed reframe
needs a fresh yes.
