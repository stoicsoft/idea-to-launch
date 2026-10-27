# Install Idea to Launch

Idea to Launch is a folder of nine skills: plain-text instructions your AI
assistant reads when they're useful. Installing means copying that folder
to where your AI tool looks for skills. Nothing runs in the background,
nothing is sent anywhere, and you can remove it at any time.

**Fastest:** if you have [Node.js](https://nodejs.org), run this in a
terminal. It finds every AI tool on your computer and installs into all of
them:

```sh
npx github:stoicsoft/idea-to-launch
```

Not sure what a terminal is? On a Mac, open **Terminal** (press ⌘ Space
and type "Terminal"). On Windows, open **PowerShell** from the Start menu.
Paste the line, then press Enter.

After installing, **restart your AI tool** (or start a new chat) and say:
"I want to build an app for my business. Can you help?"

---

## Claude Code

Pick one:

- **As a plugin** (easy updates), inside Claude Code:
  ```
  /plugin marketplace add stoicsoft/idea-to-launch
  /plugin install idea-to-launch@idea-to-launch
  ```
  The steps then appear as `/idea-to-launch:app-idea` and so on. You can
  also just describe what you want.
- **As plain skills:** `npx github:stoicsoft/idea-to-launch --agent claude`, or the
  [Mac/Linux](#mac-and-linux-without-nodejs) or [Windows](#windows)
  installer. The steps appear as `/app-idea` and so on.

The first time a step opens its own reference pages, Claude Code asks
whether it may read them, because they sit outside your project folder.
Allow it for the session. The rules that matter most are written into each
step, so the method still holds if you say no. To stop the question for
good, open `/permissions` in Claude Code and allow
`Read(~/.claude/skills/**)` (for the plugin: `Read(~/.claude/plugins/**)`).
A [project install](#one-project-only-share-with-your-team) never asks,
because the pages live inside the project.

## Claude Desktop and claude.ai

Claude Desktop has two places where skills live:

- **The Code tab** uses Claude Code, so install exactly as in
  [Claude Code](#claude-code) above.
- **Chat** (and claude.ai in the browser) uses uploaded skills:
  1. Download the zips from the project's
     [Releases](https://github.com/stoicsoft/idea-to-launch/releases) page (the
     `claude-desktop` files), or build them yourself with `npm run package`
     (they appear in `dist/claude-desktop/`).
  2. In Claude, open **Settings → Capabilities**, and make sure **Code
     execution and file creation** is on.
  3. Under **Skills**, choose **Upload skill** and pick `app-builder.zip`.
     Repeat for the other eight. `app-builder` alone also works, because it
     contains a short version of every step, but the full set is better.
  4. Start a new chat and describe your idea.

  In chat, Claude can do the interview, the plan, the look and a clickable
  prototype. Building the real app needs a tool that works with files on
  your computer, such as the Code tab.

  On Team and Enterprise plans, an owner can add the skills for everyone in
  the organisation's settings.

## Codex (app, CLI and IDE extension)

The Codex app, the CLI and the IDE extension share the same settings, so
install once:

- **As a plugin:**
  ```sh
  codex plugin marketplace add stoicsoft/idea-to-launch
  codex plugin add idea-to-launch@idea-to-launch
  ```
- **As plain skills:** `npx github:stoicsoft/idea-to-launch --agent codex` (installs into
  `~/.agents/skills`, the shared folder Codex reads).

Restart the Codex app, or start a new session.

## Cursor

`npx github:stoicsoft/idea-to-launch --agent cursor`, or any installer below. Cursor also
reads the Claude and Codex skill folders, so if you already installed for
either of those, Cursor uses that copy and won't show the skills twice.
In the Agent chat, type `/` to see the steps, or just describe your idea.

## Gemini CLI

- **As an extension:** `gemini extensions install https://github.com/stoicsoft/idea-to-launch`
  (it asks you to trust the folder first).
- **As plain skills:** `npx github:stoicsoft/idea-to-launch --agent gemini`.

Check with `gemini skills list`.

## GitHub Copilot, Windsurf, OpenCode, Kiro and others

`npx github:stoicsoft/idea-to-launch --agent <id>`, using the id from the
[table below](#every-supported-tool), for example
`npx github:stoicsoft/idea-to-launch --agent copilot,windsurf`. Without `--agent`, it
installs into every tool it finds.

You can also use the community `skills` installer, which knows even more
tools: `npx skills add stoicsoft/idea-to-launch`.

## Mac and Linux without Node.js

```sh
curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh | bash
```

To pick tools: `… | bash -s -- --agent claude,cursor`. To remove:
`… | bash -s -- --uninstall`.

## Windows

In PowerShell:

```powershell
irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1 | iex
```

To pick tools or remove, download `install.ps1` and run
`.\install.ps1 -Agent claude,cursor` or `.\install.ps1 -Uninstall`.

## ChatGPT and other chat assistants

Assistants without skills support can still use the whole method from one
file:

1. Download `idea-to-launch-prompt.md` from
   [Releases](https://github.com/stoicsoft/idea-to-launch/releases) (or run
   `npm run package` and take it from `dist/`).
2. **ChatGPT:** create a **Project** (or a custom GPT) and add the file
   under **Files** / **Knowledge**. In the instructions, write: "Follow
   idea-to-launch-prompt.md for everything in this project."
3. **Other tools that read an `AGENTS.md` file** (for example Aider, or
   older tools without skills): save the file in your project as `AGENTS.md`.

## One project only (share with your team)

To put the skills inside a project, so everyone who opens it gets them,
run this from the project folder:

```sh
npx github:stoicsoft/idea-to-launch install --project
```

This writes `.claude/skills/` (Claude Code) and `.agents/skills/` (Codex,
Cursor, Gemini, Copilot and most others). Save those folders with the
project.

## Update, check, remove

| | Command |
|---|---|
| Update | Run the same install command again. It replaces the old copy. |
| See where it's installed | `npx github:stoicsoft/idea-to-launch list` |
| Remove | `npx github:stoicsoft/idea-to-launch uninstall` (only removes folders this project installed) |
| Plugin installs | Claude Code: `/plugin uninstall idea-to-launch@idea-to-launch`; Codex: `codex plugin remove idea-to-launch@idea-to-launch` |

Removing the skills never touches your projects or their `product/` notes.

## Every supported tool

The installer knows these folders. "Your user folder" applies to every
project; "inside a project" applies only to that project.

<!-- BEGIN AGENTS (generated by scripts/build.mjs) -->
| Tool | `--agent` | Your user folder | Inside a project (`--project`) |
|---|---|---|---|
| Claude Code (and the Code tab in Claude Desktop) | `claude` | `~/.claude/skills` | `.claude/skills` |
| Codex (CLI, IDE extension and Codex app) | `codex` | `~/.agents/skills` | `.agents/skills` |
| Gemini CLI | `gemini` | `~/.gemini/skills` | `.gemini/skills` |
| GitHub Copilot (CLI and VS Code) | `copilot` | `~/.copilot/skills` | `.github/skills` |
| OpenCode | `opencode` | `~/.config/opencode/skills` | `.opencode/skills` |
| Windsurf | `windsurf` | `~/.codeium/windsurf/skills` | `.windsurf/skills` |
| Cline | `cline` | `~/.cline/skills` | `.cline/skills` |
| Kiro | `kiro` | `~/.kiro/skills` | `.kiro/skills` |
| Qwen Code | `qwen` | `~/.qwen/skills` | `.qwen/skills` |
| Roo Code | `roo` | `~/.roo/skills` | `.roo/skills` |
| Kilo Code | `kilo` | `~/.kilo/skills` | `.agents/skills` |
| Factory Droid | `droid` | `~/.factory/skills` | `.agents/skills` |
| Goose | `goose` | `~/.config/goose/skills` | `.goose/skills` |
| Amp | `amp` | `~/.config/agents/skills` | `.agents/skills` |
| Antigravity | `antigravity` | `~/.gemini/antigravity/skills` | `.agents/skills` |
| Trae | `trae` | `~/.trae/skills` | `.trae/skills` |
| Continue | `continue` | `~/.continue/skills` | `.continue/skills` |
| Augment | `augment` | `~/.augment/skills` | `.augment/skills` |
| Junie | `junie` | `~/.junie/skills` | `.junie/skills` |
| Cursor | `cursor` | `~/.cursor/skills` | `.cursor/skills` |
<!-- END AGENTS -->

`~` means your home folder (`C:\Users\<you>` on Windows). If you set
`CLAUDE_CONFIG_DIR`, the installer uses it instead of `~/.claude`.

Several tools read more than their own folder: Codex, Gemini, Copilot,
OpenCode and Cursor all load `~/.agents/skills`, and OpenCode and Cursor
also load `~/.claude/skills`. The installer writes one copy where these
overlap, so a tool doesn't list every skill twice. Cursor and OpenCode
still see two copies when Claude Code is installed too, because Claude Code
reads only its own folder.

Missing your tool? If it supports Agent Skills (a folder of `SKILL.md`
files), copy the nine folders from `skills/` into its skills folder, and
please [open an issue](https://github.com/stoicsoft/idea-to-launch/issues) so we can add
it.

## Something went wrong?

- **"command not found: npx"**: install Node.js (the LTS version) from
  [nodejs.org](https://nodejs.org), or use the Mac/Linux or Windows
  installer, which doesn't need it.
- **"No AI tools found"**: your tool keeps its settings somewhere
  unexpected. Name it with `--agent`, for example `--agent cursor`.
- **The skills don't show up**: restart the tool completely, or start a
  new chat or session. Then ask "What skills do you have?"
- **"Skipped … a different skill with this name is already there"**: you
  have another skill with the same name. Rename or remove it, or add
  `--force` to replace it.
