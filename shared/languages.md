# Languages

Three languages are in play on every project. Keep them apart.

| Language | Used for | Decided by |
|---|---|---|
| **Talk language** | Everything you say to the person, and the `product/` files | Their latest message (see talking-rules.md §1) |
| **App language** | Everything their customers read: screens, buttons, emails, error messages, sample data | Asked once, when it matters |
| **Code language** | Identifiers, file names, routes, tables, comments | Always English |

The talk language and the app language are often different. A Vietnamese
founder may build an English app for tourists, and an English-speaking
founder may build a Spanish app for their customers in Mexico.

## Asking for the app language

Ask once, in the first interview round, unless it is already obvious. If
the app is for their own team, it is their language. Phrase it as a
question about their customers:

> **Your customers' language**: Which language will your customers read the app in?
> a) Same as ours (recommended) · b) English · c) More than one: tell me which

Save the answer in `product/progress.md` ("App language"). If the app
handles money, also ask for the currency once. If they choose more than one
language, the app is built multi-language from the start (see app-build's
`features/languages.md`).

## Writing in the app language

- Write it natively, not translated from English. Buttons are a verb plus
  its object in that language ("Lưu lịch hẹn", not "Save").
- Use the glossary pairs exactly: their word on screen, the English name in
  code.
- Format dates, times, numbers and money with the platform's locale tools
  (`Intl.DateTimeFormat`, `Intl.NumberFormat` and `Intl.PluralRules` in
  JavaScript). Never hand-format, and never assume `$` or month-first dates.
- Write sample data in that language and place: local first names and
  surnames, plausible local prices, and dates around today.
- An English "No items yet" inside a non-English app is a defect.

## Scripts that need care

- **Right-to-left** (Arabic, Hebrew, Persian, Urdu): set `dir="rtl"` and
  `lang` on `<html>`. Use logical CSS (`margin-inline-start`,
  `padding-inline-end`, `text-align: start`), not left/right. Mirror arrows
  and "back/next" icons, but not logos or media controls. Numbers and Latin
  words inside RTL text stay left-to-right.
- **Plural forms:** Polish, Russian, Ukrainian and Arabic have several
  plural forms. Use `Intl.PluralRules` or ICU messages, never
  `count === 1 ? a : b`.
- **Fonts:** Chinese, Japanese, Korean, Thai, Devanagari (Hindi), Arabic and
  Cyrillic need fonts that cover the script. Use a system font stack, or
  check that the web font includes the script before choosing it.
- **Length:** German, French and Russian run about 30% longer than English,
  so buttons and tabs must wrap or grow, not clip. Chinese and Japanese are
  shorter but need more line height.
- **Thai** has no spaces between words, so allow line breaks with
  `word-break: keep-all` plus `overflow-wrap: anywhere` where needed. Thai
  UI text has no full stop at the end of a sentence.

## Tone in the languages we test

Any language works. These twenty are the ones Idea to Launch is tested
in, with the form of address that reads naturally in a friendly product.
Use it for both the talk language and the app language, unless the person
or their brand clearly uses another.

| Code | Language | How to address the person |
|---|---|---|
| en | English | "you"; plain, short, warm |
| zh-CN | 简体中文 | 你 (not 您); the assistant speaks as 我; short and plain |
| zh-TW | 繁體中文 | 你 (not 您); 「」 quotes; full-width punctuation |
| es | Español | tú; neutral international Spanish |
| hi | हिन्दी | आप; everyday Hindi in Devanagari; polite imperative (खोलें) |
| ar | العربية | gender-neutral where possible; the assistant speaks in first person; right-to-left |
| pt-BR | Português (Brasil) | você; informal-friendly |
| fr | Français | vous |
| ru | Русский | вы (lower case); «ёлочки» quotes; avoid gendered first-person past tense |
| ja | 日本語 | です・ます; full-width 、。「」 |
| de | Deutsch | du |
| id | Bahasa Indonesia | kamu (-mu); the assistant says saya |
| vi | Tiếng Việt | the assistant says "tôi", the person is "bạn"; short, warm, everyday words |
| ko | 한국어 | 해요체; no pronoun for the person; honorific -시- on their actions; the assistant says 저/제가 |
| tr | Türkçe | sen |
| it | Italiano | tu; informal and warm |
| th | ไทย | คุณ; polite and neutral; no ครับ/ค่ะ in app text |
| pl | Polski | ty (lower case); „…” quotes |
| nl | Nederlands | je/jij; informal and warm |
| uk | Українська | ви by default, or match the person's own register |

If the person writes formally or informally in a way that differs from this
table, match them.
