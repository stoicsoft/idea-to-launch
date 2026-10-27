// Where each AI tool looks for skills. This table is the single source of
// truth: `npm run build` copies it into install.sh, install.ps1 and
// docs/install.md, and `npm run check` fails when they drift.
//
// home     : the user-level skills folder ("~" is the home folder)
// detect   : any of these existing means the tool is installed
// project  : the folder inside a project, for `--project` installs
// covers   : other folders this tool also reads, so a copy there is enough
//            (prevents the same skill showing up twice)
//
// Order matters: tools listed earlier are installed first, and later tools
// whose `covers` already holds a copy are skipped. Claude Code and Codex come
// first because most other tools also read their folders; ~/.agents/skills
// is the shared one that Codex, Gemini, Copilot, OpenCode and Cursor all load.

export const AGENTS = [
  { id: 'claude', name: 'Claude Code (and the Code tab in Claude Desktop)', home: '~/.claude/skills', detect: ['~/.claude'], project: '.claude/skills' },
  { id: 'codex', name: 'Codex (CLI, IDE extension and Codex app)', home: '~/.agents/skills', detect: ['~/.codex'], project: '.agents/skills' },
  { id: 'gemini', name: 'Gemini CLI', home: '~/.gemini/skills', detect: ['~/.gemini'], project: '.gemini/skills', covers: ['~/.agents/skills'] },
  { id: 'copilot', name: 'GitHub Copilot (CLI and VS Code)', home: '~/.copilot/skills', detect: ['~/.copilot'], project: '.github/skills', covers: ['~/.agents/skills'] },
  { id: 'opencode', name: 'OpenCode', home: '~/.config/opencode/skills', detect: ['~/.config/opencode'], project: '.opencode/skills', covers: ['~/.claude/skills', '~/.agents/skills'] },
  { id: 'windsurf', name: 'Windsurf', home: '~/.codeium/windsurf/skills', detect: ['~/.codeium/windsurf'], project: '.windsurf/skills' },
  { id: 'cline', name: 'Cline', home: '~/.cline/skills', detect: ['~/.cline'], project: '.cline/skills' },
  { id: 'kiro', name: 'Kiro', home: '~/.kiro/skills', detect: ['~/.kiro'], project: '.kiro/skills' },
  { id: 'qwen', name: 'Qwen Code', home: '~/.qwen/skills', detect: ['~/.qwen'], project: '.qwen/skills' },
  { id: 'roo', name: 'Roo Code', home: '~/.roo/skills', detect: ['~/.roo'], project: '.roo/skills' },
  { id: 'kilo', name: 'Kilo Code', home: '~/.kilo/skills', detect: ['~/.kilo'], project: '.agents/skills' },
  { id: 'droid', name: 'Factory Droid', home: '~/.factory/skills', detect: ['~/.factory'], project: '.agents/skills' },
  { id: 'goose', name: 'Goose', home: '~/.config/goose/skills', detect: ['~/.config/goose'], project: '.goose/skills' },
  { id: 'amp', name: 'Amp', home: '~/.config/agents/skills', detect: ['~/.config/amp'], project: '.agents/skills' },
  { id: 'antigravity', name: 'Antigravity', home: '~/.gemini/antigravity/skills', detect: ['~/.gemini/antigravity'], project: '.agents/skills' },
  { id: 'trae', name: 'Trae', home: '~/.trae/skills', detect: ['~/.trae'], project: '.trae/skills' },
  { id: 'continue', name: 'Continue', home: '~/.continue/skills', detect: ['~/.continue'], project: '.continue/skills' },
  { id: 'augment', name: 'Augment', home: '~/.augment/skills', detect: ['~/.augment'], project: '.augment/skills' },
  { id: 'junie', name: 'Junie', home: '~/.junie/skills', detect: ['~/.junie'], project: '.junie/skills' },
  { id: 'cursor', name: 'Cursor', home: '~/.cursor/skills', detect: ['~/.cursor'], project: '.cursor/skills', covers: ['~/.claude/skills', '~/.agents/skills', '~/.codex/skills'] },
]

// The skills this project ships, in journey order.
export const SKILLS = ['app-builder', 'app-idea', 'app-plan', 'app-design', 'app-build', 'app-change', 'app-fix', 'app-review', 'app-launch']

// Every SKILL.md carries this in its metadata; uninstall only removes folders that do.
export const SUITE = 'idea-to-launch'
