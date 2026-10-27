# Landing page

**In the owner's words:** "A front door for your app: a headline, what it
does, proof it works, prices, answers to common questions and a way to
reach you. The words come from your own description, and the look matches
your design."

## Build it safely
- **Structure plus content.** Section components (hero, how it works,
  proof, pricing, questions, contact) render one content object
  (`src/lib/marketing/content.ts`). Write the copy into that object from the
  spec, the brief and the people, in the app language. Never paste copy into
  the components.
- **Empty sections disappear, and nothing is invented.** No made-up
  testimonials, customer counts, logos or prices. An empty proof section is
  honest; a fabricated quote is not. Ask the owner for real ones, or leave
  the section out.
- Only one page can own `/`. If the app already uses `/`, merge the two, or
  mount the landing page elsewhere (for example `/welcome`) for a
  private-first app.
- Every colour, font size, space and corner comes from the design tokens.
- Sections are plain server components. A contact form needs a real route
  behind it (or the email feature), never a `mailto:` trick.
- Keep section ids stable (`#pricing`, `#faq`) so links keep working.
- Headline: what the person gets, in their words, under about 10 words.
  Then one sentence on how. One clear main button.
