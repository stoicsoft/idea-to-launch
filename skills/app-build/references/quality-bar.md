# The quality bar

Customers judge the app by looking at it and touching it. Everything here
counts as part of "it works", not polish.

## Words on screen

Two audiences read your output, so keep them apart. Code is English and
technical. Everything a person reads is in the **app language** (see
[languages.md](languages.md)), written natively, with the glossary nouns exactly as given.

- **Buttons** are a verb plus its object: "Save booking", "Send invite".
  Never "Submit", "OK", "Click here" or "Go". A destructive button names
  what it destroys ("Remove this booking"), and its confirmation never
  says just "Yes/No".
- **Links go somewhere; buttons do something.** Never use a button that
  opens a page, or a link that changes data.
- **Headings** name the thing or the benefit ("Your bookings"), never the
  mechanism ("Booking management dashboard"). Don't open with "Welcome to",
  "Congratulations" or "Oops".
- **Error messages** say what happened and what to do, in one sentence:
  "That time was just taken. Pick another." Never a bare code, never
  "Something went wrong" with no next step.
- **Empty states** say what will appear here and how to add the first
  one.
- **Loading states** say what's coming ("Finding free times…"), not just
  "Loading…", and never spin forever.
- **Confirmations** say what was saved, where it went and what happens
  next, in one sentence.
- **Numbers and dates** read like a person wrote them: "3 bookings",
  "Today at 2 pm". Never raw ISO dates or "0003".
- Follow the Voice section of `product/design.md` exactly.
- Never ship lorem ipsum, "TODO", "Your text here", "Test 1", `#` links,
  dead menu items, or developer words ("record", "entity", "null",
  "undefined") in anything visible.

## Real content

Write copy as if their business went live today: plausible headlines,
believable names, realistic prices, real calls to action, all in the app
language. Sample data follows [data-and-safety.md](data-and-safety.md) ("Sample data").

## Phone first

Most of their visitors are on a phone, so design for 375px wide first.

- Use a single column and full-width content. Tap targets are at least
  44×44px.
- Don't use fixed pixel widths for layout. Use max-width with auto margins,
  flex or grid with `minmax()`, and the spacing tokens. Media gets
  `max-width: 100%`.
- Add one or two breakpoints only where a wider layout genuinely helps.
  Widths of 600px and 800px must look intentional too.
- Long names wrap. Wide tables scroll inside their own box, or turn into
  stacked cards on small screens. Navigation stays reachable by thumb.
- Hover is a bonus, never the only way to reach something.
- Check at 375px and at 1280px: no sideways scrolling, nothing clipped,
  nothing touching the screen edge.

## Works for everyone (accessibility)

- Anything clickable is a real `<button>` or `<a>`. Never a clickable
  `<div>`.
- Every form field has a visible label. A placeholder is never the label.
- Use one `<h1>` per page, headings in order, landmarks (`<main>`,
  `<nav>`), and real lists for lists.
- Keyboard: Tab reaches everything in visual order, Enter and Space
  activate, and Esc closes menus and dialogs. Dialogs trap focus, have a
  label, and return focus when they close. The focus ring is always
  visible (accent colour).
- Use only the token colour pairs, which meet contrast rules. Colour is
  never the only signal: an error also gets text or an icon.
- Results that appear without a page load are announced
  (`role="status"`, `role="alert"` or `aria-live="polite"`). Icon-only
  buttons get an `aria-label`. Meaningful images get alt text, and
  decorative images get `alt=""`.

## Forms (the riskiest place in the app)

- **Check on the server, always.** Browser checks are just for speed.
  Limit body size, check the shape before the values, trim strings, and
  bound their lengths. Reject anything else with a message that says what
  to fix ("Use a name between 1 and 80 characters").
- **Never lose what someone typed.** A failed save keeps every field
  filled and shows the problem next to the field. Move focus to the first
  problem and announce it.
- **Pressing twice does nothing extra.** Disable the button while the
  request runs (re-enable it in `finally`), and make the action idempotent
  where it matters (bookings, orders, payments).
- Required fields say so in words, not just with a red asterisk.
- Enter submits, Esc cancels, and Tab order follows what the eye sees.

## Every failure has a name

- Each action returns a distinct, readable error for each way it can fail:
  missing or invalid input, not found, not yours, already taken, and the
  service being down. Avoid one catch-all.
- Back and refresh are safe. The page re-reads its data, and a
  half-finished action either completes or cleanly doesn't.
- Quick, reversible actions (a toggle, a rename) can update the screen
  instantly, but must undo themselves if the server says no. Slow or
  important ones (payments, sending) show an honest "working" state, and
  never a fake success.

## Fast on a slow phone

- First paint comes from the server, with no chain of client-side fetches.
- Lists show 50 rows at a time, with "Show more" or pages, and never an
  unbounded query.
- Fetch only the fields the page shows. Never query in a loop; use one join
  or one grouped query.
- Images are sized and compressed, and thumbnails are real thumbnails.

## Finish checklist

Before saying a step is done, confirm each of these. Fix anything that
isn't true.
- [ ] Every Now story's acceptance lines work: happy, empty, wrong input,
      twice, and the owner's view.
- [ ] All visible text is in the app language, uses the glossary nouns, and
      has no placeholders.
- [ ] It looks right at 375px and at 1280px.
- [ ] Every form keeps input on error and can't double-submit.
- [ ] Keyboard-only use works, and the focus ring is visible.
- [ ] Only design tokens are used, with no hard-coded colours or font sizes.
- [ ] If the plan says the app counts "How we'll know it worked", the
      number shows on the owner's page and goes up by one per action.
- [ ] The check script passes (type check, tests, build).
- [ ] Nothing secret is in code that reaches the browser (see [data-and-safety.md](data-and-safety.md)).
