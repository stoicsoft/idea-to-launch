# Review passes in detail

## 1. Engineer's read (never edit files during this pass)

Read the app like a senior engineer who has never seen it. Work through
these in order:

1. **Does the happy path complete?** Trace each Now story from the page, to
   the action or route, to the database, and back. A button that calls
   nothing, a form whose own route rejects its fields, or a list that never
   reads what the form saved: each is a must-fix.
2. **Every error has a name.** Each route or action names what it rejects,
   and the customer sees a readable message. An empty `catch`, an
   `alert(err)`, or logging a request body is a must-fix.
3. **The four paths.** An explicit empty state exists. Wrong input is
   rejected on the server with a readable message, and the typed input
   survives. Pressing the main button twice can't create two of anything.
   Going back doesn't show stale or broken state.
4. **Data safety.** Every query for private data is filtered by owner.
   Every id from the browser is checked for ownership. No migration drops or
   rewrites data. No unprotected route changes data. Sign-in checks happen
   on every private route and action, not just in layouts.
5. **Secrets.** No keys, passwords or connection strings in code that
   reaches the browser, or committed in the repository. `.env*` files with
   values are git-ignored.
6. **Placeholders.** No lorem ipsum, "TODO", "Your text here", "Test 1",
   `href="#"`, empty click handlers, or dead menu items.
7. **Copy.** Buttons are a verb plus an object, headings say what the thing
   is, the glossary nouns are used consistently, and every visible string is
   in the app language.
8. **Look.** Only design tokens are used (no stray hex colours or pixel font
   sizes), and the chosen direction is applied consistently.
9. **Checks.** The check script passes. Tests cover the main journeys, and
   no test was skipped or weakened.
10. **The success number.** If `plan.md` says the app counts "How we'll
    know it worked", doing that action once adds one to the number the
    owner sees. A missing or broken count is a must-fix: without it,
    nobody will know whether the app helped.

### The scanner

`scripts/quality-scan.mjs <project>` is a fast, dependency-free scan that
prints findings and exits non-zero if it finds something. It looks for:
- secret-looking strings (private keys, `sk_live_`/`sk_test_`, `sk-…`,
  GitHub and Slack tokens, AWS keys, database URLs with passwords, long
  secret assignments), in source and in the built client bundle;
- dangerous code (`dangerouslySetInnerHTML`, `eval(`, `new Function`);
- placeholder text (lorem ipsum, TODO and FIXME in visible strings, "Your
  text here", `href="#"`);
- hard-coded colours outside the design tokens file (advisory);
- the feature guides' safeguards: private routes and pages that never
  check who is signing in, a Stripe webhook that doesn't verify its
  signature on the raw body, card fields or card numbers in the app, an
  upload path with no size limit (or one checked only after writing), and
  job handlers that would do the work twice on a retry.

A scanner hit is a lead, not a verdict. Confirm each hit by reading the
code, and report false alarms as such.

## 2. First-time customer's walk

- Land on the start page knowing nothing. If the page doesn't say what it
  is or what to do first, that is finding #1.
- Walk each acceptance line exactly as written. The owner approved those
  words; they are the contract.
- On every form: submit it empty, then with one bad field. Write down what
  the screen said, verbatim. "It said nothing" and "it said Error" are both
  findings.
- Press the main button twice, fast. A double booking, a doubled row or a
  frozen button is a finding.
- Press Back once mid-flow, and refresh once. Watch whether anything
  disappears or doubles.
- Note the empty state on the first visit, which is the customer's first
  impression.
- Do it at 375px wide first, then at 1280px.
- Take a screenshot for each finding if your tools allow it.

## 3. The person's view

Use the questions in the skill, in the person's language and on their
device. Report each failure in their voice: "Linh wouldn't know the grey
text is a button." Use their name from `people.md`.

## Writing the verdict

- **Ready for real customers:** no must-fix items open, the checks pass on
  the current code, and the main journeys were walked (by you or by the
  owner).
- **Ready, with things to watch:** as above, but some should-fix items
  remain. List them.
- **Fix first:** at least one must-fix item is open, or the checks fail.
- **Couldn't fully check:** an important journey couldn't be walked. Say
  which one and why. This is never "ready".
