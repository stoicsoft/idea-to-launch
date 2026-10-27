# More than one language in the app

**In the owner's words:** "Your app speaks your customers' languages. Every
piece of text it shows lives in a list you can edit, and the app picks the
right language from the web address or the person's own setting. Missing
words fall back to your main language instead of breaking."

Read [languages.md](../languages.md) first (scripts, right-to-left,
plurals, formats).

## Build it safely
- **No hard-coded visible strings.** Every string is looked up by a dotted
  key: `t('booking.confirm', locale)`. Use the stack's standard library
  where there is one (`next-intl` for Next.js), or a small `t()` helper with
  one catalogue file per language (`messages/vi.json`, `messages/en.json`).
- **The fallback chain is the contract:** requested language → the main
  language → the key itself. `t()` never throws.
- **Choosing the language:** a URL prefix wins (`/vi/…`), then the
  signed-in person's saved setting, then the browser's
  `Accept-Language`, then the main language. Always set `<html lang>`, and
  `dir="rtl"` for right-to-left languages.
- Client components receive their language's whole catalogue once, and
  never fetch per string.
- Dates, numbers, money and plurals use `Intl.*` with the resolved locale.
- **Translations are reviewed before customers see them.** Write the main
  language natively, then draft other languages natively (not word for
  word). Tell the owner which languages had no fluent-speaker review, and
  only switch a language on once they accept it.

## Test it
- Every key used in code exists in the main catalogue, and a missing key in
  another language falls back without crashing.
- One page renders correctly in each enabled language, including
  right-to-left if present.
