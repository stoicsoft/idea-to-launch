# The five starting directions

Each direction is a complete basis. Adjust the accent to fit the business,
and keep everything else together.

| | Clean utility | Editorial | Soft consumer | Dark technical | High contrast |
|---|---|---|---|---|---|
| Summary | Neutral greys, a crisp sans, plain direct language | Paper white, serif headings, deep green accent, a considered voice | Rounded corners, lifted cards, a playful light voice | Dark workbench palette, compact spacing, confident terse copy | Maximum legibility: strong contrast, visible borders, plain words |
| Fits | Tools, back-office, booking, admin; the default when nothing stands out | Blogs, news, menus, restaurants, cafés, portfolios, reading | Family, friends, pets, habits, recipes, fitness, community, fun | Dashboards, metrics, monitoring, trading, developer tools | Older people, clinics, health care, government, accessibility needs |
| ground | `#f4f5f7` | `#f6f6f3` | `#fbf7f8` | `#14171c` | `#ffffff` |
| surface | `#ffffff` | `#ffffff` | `#ffffff` | `#1b1f26` | `#ffffff` |
| ink | `#1d2433` | `#1f2421` | `#33272e` | `#e8e6e1` | `#111111` |
| ink-soft | `#5a6274` | `#5d6660` | `#7a6873` | `#9aa0ab` | `#3d3d3d` |
| line | `#d9dee7` | `#dcdfd9` | `#ecdde4` | `#2c313a` | `#767676` |
| accent | `#2f5fd0` | `#2f5d4f` | `#b34a66` | `#e2a04c` | `#0b5bd3` |
| accent-ink | `#ffffff` | `#ffffff` | `#ffffff` | `#1a1409` | `#ffffff` |
| positive | `#2e7d4f` | `#2f7a4a` | `#3d8a5f` | `#5fb87f` | `#146c2e` |
| caution | `#a0660a` | `#946200` | `#b07c1f` | `#d9a13b` | `#7a5200` |
| danger | `#c0392b` | `#b3362b` | `#c04a52` | `#e06c5c` | `#b3261e` |
| Headings | Public Sans 600 | Source Serif 4 600 | Public Sans 600 | Public Sans 600 | System sans 700 |
| Body | Public Sans | Public Sans | Public Sans | Public Sans | System sans |
| Base size | 15px | 15px | 15px | 14px | 16px |
| Type scale | regular | expressive | regular | compact | regular |
| Corners | 8px | 6px | 14px | 6px | 4px |
| Borders | 1px | 1px | 1px | 1px | 2px |
| Spacing | regular | regular | airy | tight | regular |
| Shadow | soft | soft | lifted | none | none |
| Voice | plain, short sentences | warm, medium sentences | playful, medium sentences | confident, short; buttons can be one verb | plain, short sentences |

Code and numbers use a monospace font (JetBrains Mono, or the system
monospace).

**Which to recommend first:** match words in the idea, checking from top
to bottom.
1. Accessibility, elderly, clinic, patients, health care, government →
   **High contrast**
2. Dashboard, metrics, analytics, monitoring, trading, admin, developers →
   **Dark technical**
3. Kids, family, friends, pets, wedding, habits, recipes, fitness,
   community, games → **Soft consumer**
4. Blog, news, articles, writing, newsletter, books, portfolio,
   restaurant, café, menu → **Editorial**
5. Anything else → **Clean utility**

**Script coverage:** Public Sans and Source Serif 4 cover Latin and
Vietnamese. For Chinese, Japanese, Korean, Thai, Hindi, Arabic or Cyrillic
app text, use a system font stack, or a web font that covers the script
(for example the Noto family).

## Type and spacing steps

- Type steps (regular scale): 12 · 13 · 15 (base) · 17 · 20 · 24 · 30 · 36
  px. Expressive moves the headings one step larger; compact moves
  everything one step smaller.
- Spacing steps: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 px. Airy uses the
  larger half, and tight uses the smaller half.
- Line height: 1.5 for body text, 1.2 for headings. Reading width: at most
  about 70 characters.

## In code

Put every visual value in one file of CSS custom properties, declared once
on `:root`, and use only these variables everywhere else. Never hard-code
a hex colour, a pixel font size or a corner radius in a component.

```css
/* design-tokens.css, generated from product/design.md */
:root {
  --app-ground: #f4f5f7;
  --app-surface: #ffffff;
  --app-ink: #1d2433;
  --app-ink-soft: #5a6274;
  --app-line: #d9dee7;
  --app-accent: #2f5fd0;
  --app-accent-ink: #ffffff;
  --app-positive: #2e7d4f;
  --app-caution: #a0660a;
  --app-danger: #c0392b;

  --app-font-heading: "Public Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  --app-font-body: "Public Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  --app-font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  --app-text-sm: 13px;
  --app-text-base: 15px;
  --app-text-lg: 17px;
  --app-text-xl: 20px;
  --app-text-2xl: 24px;
  --app-text-3xl: 30px;

  --app-space-1: 4px;
  --app-space-2: 8px;
  --app-space-3: 12px;
  --app-space-4: 16px;
  --app-space-5: 24px;
  --app-space-6: 32px;
  --app-space-7: 48px;

  --app-radius-sm: 4px;
  --app-radius: 8px;
  --app-radius-lg: 12px;
  --app-border: 1px;
  --app-shadow: 0 1px 2px rgb(16 24 40 / 0.06), 0 1px 3px rgb(16 24 40 / 0.10);
}
```

If the project uses Tailwind or another styling system, map its theme to
these same variables instead of creating a second set of colours.

Allowed pairs: `--app-ink` on `--app-ground` or `--app-surface`;
`--app-ink-soft` on `--app-surface` for secondary text; `--app-accent-ink`
on `--app-accent`. Focus rings use `--app-accent`. Never invent another
pair without checking its contrast.
