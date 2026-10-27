# Contributing

Thank you for helping more people build what they imagine. Contributions of
every size are welcome: a clearer sentence, a better question for the
interview, a new tool in the installer, or a translation.

## The one rule

**Every change should make life better for someone who doesn't code.**
If a change adds jargon, more questions, or more steps for the person,
explain in the pull request why it's worth it.

## Setup

You need Node.js 18 or newer. There are no dependencies to install.

```sh
npm run build      # copy shared/ rules into every skill, refresh the tool tables
npm run check      # everything in sync + every skill valid
npm test           # installers, packaging and the quality scan
npm run package    # dist/: Claude Desktop zips and the single-file prompt
```

To try your edits in your own AI tool while you work, link instead of
copying: `node scripts/cli.mjs install --agent claude --link`.

## Where things live

| You want to change… | Edit |
|---|---|
| How the assistant talks, asks questions, or handles decisions | `shared/talking-rules.md` |
| The `product/` folder format | `shared/project-memory.md` |
| Language guidance and tone per language | `shared/languages.md` |
| One step | `skills/<step>/SKILL.md` and its `references/` and `assets/` |
| Where a tool keeps its skills | `scripts/agents.mjs` (one table for every installer and the docs) |

Files in `shared/` are copied into each skill's `references/` by
`npm run build`. Edit the source, never the copies; `npm run check` fails
if they drift.

## Writing skills

- **Descriptions are at most 200 characters** (the Claude Desktop upload
  limit) and say what the step does and when to use it.
- Keep `SKILL.md` short: the steps and the non-negotiables. Move detail to
  `references/`, and link each reference from `SKILL.md` with a sentence on
  when to read it.
- **Each skill must work on its own.** Link only to files inside its own
  folder; `npm run check` enforces this.
- Write instructions the way you'd brief a thoughtful colleague: say why
  something matters, not just what to do. Avoid shouting (ALWAYS, NEVER in
  capitals) unless it's a real safety line.
- Founder-facing examples use plain words and the person's nouns, never
  technical ones.
- Bump the version in `package.json`, every `SKILL.md` `metadata.version`,
  and the plugin manifests together (`npm run check` will tell you if one
  is missed).

## Adding an AI tool

Add one line to `AGENTS` in `scripts/agents.mjs`: where the tool keeps
user-level skills, the folder that shows it's installed, and its
project-level folder. If the tool also reads another tool's folder, list it
in `covers` so people don't see the skills twice. Run `npm run build` and
`npm test`, and say in the pull request how you confirmed the paths (the
tool's documentation, or a real install).

## Translating

- **The README:** copy `README.md` to `docs/i18n/README.<code>.md`,
  translate it, and add the language to the language bar in every README.
  Keep commands, file names and skill names as they are.
- **The skills themselves** stay in English, because the assistant reads
  them, and it already talks to each person in their own language. To
  improve how it sounds in your language, add or correct a row in the tone
  table in `shared/languages.md`.
- Ask a second native speaker to review if you can, and say whether
  anyone did in the pull request.

## Testing a change for real

Automated tests cover the installers and packaging. They can't tell
whether the assistant behaves well, so for changes to the skills, also try
them in at least one AI tool with a realistic person:

1. Start a fresh project folder and say "I want to build something for my
   bakery's pre-orders."
2. Check: Did it ask about people before screens? Were the questions few,
   with a recommendation each? Did it save `product/brief.md`? Did it ask
   before anything hard to undo?
3. Repeat in another language.

Describe what you tried, and what happened, in the pull request.
