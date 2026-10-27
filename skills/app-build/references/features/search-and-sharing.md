# Search and sharing details

**In the owner's words:** "Each page gets its own title and description:
the words Google shows, and the preview card chat apps build when a link is
shared. The app keeps its sitemap up to date on its own."

## Build it safely
- **Every public page has its own title and description** (Next.js:
  `generateMetadata()` per page, or per segment layout for client pages).
  Open Graph and Twitter cards reuse the same words, so there's no separate
  plumbing and no hand-written `<meta>` tags in JSX.
- Optional: an owner-editable `page_meta` table so they can change the words
  without a rebuild. Seeding never overwrites their edits.
- Canonical and share URLs come from `PUBLIC_APP_URL`. Never hard-code the
  domain. When it's unset, use relative URLs and an empty sitemap.
- `sitemap.xml` and `robots.txt` are generated routes listing every public
  page. Private pages are excluded and marked `noindex`.
- Titles are under about 60 characters and descriptions under about 155, in
  the app language. Add a share image (1200×630) that uses the brand
  colours.

## Settings needed
| Setting | What it's for | Where it comes from |
|---|---|---|
| `PUBLIC_APP_URL` | The app's real address, for share links and the sitemap | Their domain, set when going live (see app-launch) |
