# How it works

Idea to Launch is the working method of 1FounderTool, a desktop app for
founders, rewritten as open skills that any AI assistant can follow. The
desktop app had its own screens, scheduler and checks. Here, your AI tool
provides the conversation, the editing and the running; the skills provide
the method, the judgement and the memory.

## The journey

![Six steps from idea to go live, each with the page it saves](images/journey.png)

```
 idea ──► plan ──► look ──► build ──► check ──► go live
  │        │        │        │         │          │
brief    stories  design   working   findings   address,
people   spec     choice   app       fixed      backups
         plan ✔                                 
                    anytime: change · fix · continue
```

| Step | The person gets | Saved in `product/` |
|---|---|---|
| **app-idea** | A short interview in rounds. Questions about the person and their problem come before anything about screens | `brief.md`, `people.md`, `glossary.md` |
| **app-plan** | What each person will be able to do, a one-page spec, and a plan they approve | `stories.md`, `spec.md`, `plan.md` |
| **app-design** | Three directions with reasons; one chosen and applied everywhere | `design.md` |
| **app-build** | The approved plan, built in the order they'll see it working, with tests on the main journeys | `progress.md` log |
| **app-change** | Quick, reversible changes, or "this isn't it" turned into a fix list | `progress.md` log |
| **app-fix** | The real cause found, fixed and proven, then one plain sentence on what was wrong | `progress.md` log |
| **app-review** | An engineer's read, a first-time customer's walk at phone size, and the person's own view | `reviews/<date>.md` |
| **app-launch** | Hosting, an address and settings, approved step by step, then proven live | `launch.md` |
| **app-builder** | The front door: routes each message, resumes saved projects, adapts to chat-only apps | `progress.md` |

For a filled-in example (a nail salon's booking page, part-way through
building), see [example/product](example/product/progress.md).

## Ideas that carry over from the desktop app

- **People, not categories.** "Small businesses" is a filter, not a
  person. The interview pushes once for someone the founder could message
  today.
- **The smallest useful version.** "If only one part worked next week,
  which part would someone use?" Everything else is saved for later on
  purpose.
- **One-way and two-way doors.** Reversible choices are made and stated in
  one sentence. Choices that are hard to undo (data, access, money, emails
  to customers, going live) always wait for an explicit answer.
- **Four paths for every journey:** the happy path, the first time
  (empty), wrong input (nothing typed is lost), and slow or pressed twice
  (nothing doubles). Plus where the owner sees what came in.
- **Their words.** The founder's nouns become the app's nouns, with an
  English twin in the code. Customers read the app in their own language.
- **Verify, then claim.** Nothing is called built, working or live until
  it has actually been tried. Unchecked things stay visibly unchecked.
- **Test mode first.** Email, payments and file storage work locally with
  no accounts, so the owner can try everything before signing up for
  anything.

## Why skills, not an app

- **Works where people already are.** One method, in Claude, Codex,
  Cursor, Gemini, Copilot and others.
- **Portable memory.** The `product/` folder is plain Markdown. Any tool,
  or any person, can read it and continue.
- **Open.** Anyone can read exactly what the assistant is told, suggest
  changes and translate it.

## What a skill is

A skill is a folder with a `SKILL.md` file: a short description (so the
assistant knows when it's useful) and instructions, plus optional reference
pages, templates and scripts. The assistant reads only the descriptions
until a skill is needed; then it reads the instructions and, step by step,
only the references it needs. The full set costs roughly 500 tokens per
session until a step is used. See the [Agent Skills](https://agentskills.io)
format.

## How the files are organised

```
skills/<step>/SKILL.md        the instructions for each step
skills/<step>/references/     detail read only when needed
skills/<step>/assets/         templates for the product/ pages
skills/app-review/scripts/    quality-scan.mjs (secrets, unsafe code, placeholders)
shared/                       rules every step follows (copied into each skill on build)
scripts/                      installer, build, validation, packaging
```

Every skill works on its own, which matters when one zip is uploaded to
Claude Desktop, so shared rules are copied into each skill by
`npm run build` instead of being linked.
