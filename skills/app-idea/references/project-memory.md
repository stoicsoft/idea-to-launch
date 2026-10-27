<!-- Generated from shared/project-memory.md by scripts/build.mjs. Edit the source, then run npm run build. -->

# Project memory: the `product/` folder

Everything worth remembering about the project lives in plain Markdown
files in a `product/` folder at the top of the project. This folder is how
work survives a closed chat, a new day, or a switch to a different AI tool.
Any tool that reads files can pick up exactly where the last one stopped.

Write these files in the person's language, because they are for them.
Code names in the glossary stay English.

## The files

| File | Written by | What it holds |
|---|---|---|
| `progress.md` | every step | Where we are, the next step, what is waiting on them, a short log. **Read this first.** |
| `brief.md` | app-idea | The one-page idea: who it is for, their problem, the smallest useful version, how we'll know it worked |
| `people.md` | app-idea | The 1–5 real people (or roles) the app is for |
| `glossary.md` | any step | Their word ↔ the English code name, one row per business thing |
| `stories.md` | app-plan | What each person will be able to do, as Now / Next / Later, with acceptance lines |
| `spec.md` | app-plan | One page: what the app does, for whom, what it remembers, "I assumed…" lines |
| `plan.md` | app-plan | Build steps in the order they will see them working, risks, and approval |
| `design.md` | app-design | The look: feeling, colours, type, shape, voice |
| `decisions.md` | any step | One-way-door decisions, one line each, with the date and the reason |
| `reviews/YYYY-MM-DD.md` | app-review | Findings from a check, and what happened to each one |
| `launch.md` | app-launch | The go-live checklist, settings needed (names only), the address, and status |

Create a file only when its step happens. A quick fix never needs a brief.

## `progress.md`: the resume point

Keep it short and current. Rewrite the top sections, and add log lines at
the bottom. **Keep these headings and the five lines at the top exactly as
shown** (translate the words after each colon, not the structure), because
every step and every AI tool reads them to resume. The talk-language line is
how a language change gets noticed.

```markdown
# Progress

- Talk in: Tiếng Việt (vi)
- App language (customers): Tiếng Việt (vi) · Currency: VND
- Stage: idea | plan | design | build | review | launch | live
- Save versions with git: ask | yes | no
- Updated: 2026-10-27

## Where we are
One or two sentences in plain words.

## Next step
The single next concrete action, and who does it (you or me).

## Waiting on you
- Questions they still need to answer, or "Nothing right now."

## Log
- 2026-10-27: Idea confirmed: "A booking page for Mai's regulars to pick a time without messaging."
```

## `glossary.md`: their words and the code's words

One row per business thing. The person's word is what every screen shows,
and the code name is what the code uses.

```markdown
# Words we use

| Their word | Code name | What it means |
|---|---|---|
| lịch hẹn | `appointment` | A customer holds a time to come in for a service |
| khách quen | `regular` | A customer who has booked before |
```

The other files follow the templates that come with each step. Keep a
template's headings and their order, so the next step and the next tool
find things where they expect them.

## Rules

1. **Read before you write.** At the start of any step, read
   `product/progress.md` and any file that step depends on. If `product/`
   does not exist yet, create it the first time there is something worth
   keeping.
2. **Their edits win.** If they changed a line themselves, never overwrite
   it. Propose the change and let them decide. When you are unsure who wrote
   a line, treat it as theirs.
3. **No secrets, ever.** Never write passwords, API keys, tokens or
   connection strings into `product/`. Write only the setting's *name* and
   what it is for ("`STRIPE_SECRET_KEY`: lets the app take card payments").
4. **Absolute dates** (2026-10-27), never "yesterday" or "next week".
5. **Short pages.** Each file should read in one sitting on a phone. Move
   anything cut to "Not in this version" or to "Later", and never silently
   delete it.
6. **Approvals are recorded and expire.** When they approve the brief or the
   plan, write the date and their words. If the content changes in a way
   that matters, the approval is gone. Ask again and say what changed.
7. **Saving versions.** If the project uses git (or could), ask once whether
   to save a version at the end of each step: "Should I save a version after
   each step, so we can always go back?" Record the answer in
   `progress.md`, and follow it. Never push to the internet or publish
   without a separate yes.
8. **Nothing private in shared places.** `product/` may contain business
   plans. If the project is going to a public code host, point that out once
   and let them decide.

## When you can't write files

Some apps (chat apps such as Claude Desktop chat, claude.ai, or ChatGPT)
can't save into a project folder. In that case:

- Keep the same records in the conversation, using the same headings.
- At the end of each step, offer the updated files as downloads, or as one
  "project memory" block they can save and paste into a new chat to
  continue.
- When they paste a project memory block back, treat it as `product/` and
  carry on from its "Next step".
