# Install Idea to Launch

![Install in one minute: on a Mac, open Terminal and paste one line; on Windows, open PowerShell and paste one line; then restart your AI tool and say what you want to build](images/install.png)

Idea to Launch is a folder of nine skills: plain-text instructions your AI
assistant reads when they're useful. Installing means copying that folder
to where your AI tool looks for skills. Nothing runs in the background,
nothing is sent anywhere, and you can remove it at any time.

## Start here: one line in the terminal

The terminal is the window where you type commands to your computer. You
only need it once, for this one line. It finds every AI tool on your
computer and adds the skills to all of them.

**On a Mac** (or Linux):

1. Open **Terminal**: press ⌘ Space, type `Terminal`, and press Enter.
2. Paste this line and press Enter:

   ```sh
   curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh | bash
   ```

**On Windows:**

1. Open **PowerShell**: press the Windows key, type `PowerShell`, and
   press Enter.
2. Paste this line and press Enter:

   ```powershell
   irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1 | iex
   ```

You'll see a ✓ (or + on Windows) next to each AI tool it found. Then
**restart your AI tool** (or start a new chat) and say: "I want to build an
app for my business. Can you help?"

If it says **"No AI tools found"**, you haven't used a coding tool on this
computer yet. Install one (Claude Code, Codex, Cursor or Gemini CLI), open
it once, and run the line again. If you only use Claude Desktop's chat or
claude.ai, use [the zips](#claude-desktop-and-claudeai) instead.

If you already use [Node.js](https://nodejs.org), this does the same thing
on any system:

```sh
npx github:stoicsoft/idea-to-launch
```

The sections below cover other ways to install for each tool, and how to
choose tools, update or remove.

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
  [one-line install](#start-here-one-line-in-the-terminal) for Mac, Linux or Windows. The steps appear as `/app-idea` and so on.

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

## Mac and Linux: choose tools or remove

The [one-line install](#start-here-one-line-in-the-terminal) takes options
after `bash -s --`:

```sh
# Only some tools
curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh | bash -s -- --agent claude,cursor
# Remove
curl -fsSL https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.sh | bash -s -- --uninstall
```

It uses Node.js when it's there and plain shell otherwise, so it works on a
fresh Mac.

## Windows: choose tools or remove

The [one-line install](#start-here-one-line-in-the-terminal) takes options
this way:

```powershell
# Only some tools
& ([scriptblock]::Create((irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1))) -Agent claude,cursor
# Remove
& ([scriptblock]::Create((irm https://raw.githubusercontent.com/stoicsoft/idea-to-launch/main/install.ps1))) -Uninstall
```

It works in PowerShell 7 and in the Windows PowerShell 5.1 that comes with
Windows, uses Node.js when it's there, and needs no admin rights.

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
| Update | Run the same install line again. It replaces the old copy. |
| Remove | Mac and Linux: the line [with `--uninstall`](#mac-and-linux-choose-tools-or-remove). Windows: the line [with `-Uninstall`](#windows-choose-tools-or-remove). With Node.js: `npx github:stoicsoft/idea-to-launch uninstall`. Only folders this project installed are removed. |
| See where it's installed | `npx github:stoicsoft/idea-to-launch list` (needs Node.js) |
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

- **"No AI tools found"**: open your AI coding tool once so it creates its
  settings folder, then run the line again. If it still isn't found, name
  it: [`--agent cursor`](#mac-and-linux-choose-tools-or-remove) on Mac and
  Linux, [`-Agent cursor`](#windows-choose-tools-or-remove) on Windows.
- **"command not found: npx"**: use the [one-line
  install](#start-here-one-line-in-the-terminal) instead, which doesn't
  need Node.js.
- **Windows says running scripts is disabled**: the one-line install
  doesn't need script permission, so paste it exactly as shown. If you
  downloaded `install.ps1` and ran it as a file, run
  `powershell -ExecutionPolicy Bypass -File install.ps1` instead.
- **The skills don't show up**: restart the tool completely, or start a
  new chat or session. Then ask "What skills do you have?"
- **"Skipped … a different skill with this name is already there"**: you
  have another skill with the same name. Rename or remove it, or add
  `--force` to replace it.
