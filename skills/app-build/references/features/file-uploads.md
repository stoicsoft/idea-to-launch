# File and photo uploads

**In the owner's words:** "People can upload photos and documents, up to
10 MB, safe types only, checked by what the file really is rather than its
name. Files stay on this computer while we build, and move to your own file
storage when you go live."

## Build it safely
- Uploads enter through **one function** (`acceptUpload`) behind one route,
  `POST /api/files` (multipart, a single `file` field).
- **Check the content, not the name.** An allowlist by magic bytes: PNG,
  JPEG, WebP, GIF and PDF. Never trust the extension or the browser's
  declared type. To allow a new type, add its signature.
- **Enforce the 10 MB cap before storing any bytes.**
- Files belong to the uploader's owner id. Serve them only through
  `/api/files/[id]`, which checks ownership and sends the sniffed type.
  Never write uploads into `public/`, and never build paths or URLs from the
  original filename.
- Images get a small thumbnail (for example `.thumb.webp`). Lists show
  thumbnails, and links open the original.
- **Two modes, same code:** `fileStore()` writes to a local `.data/files/`
  folder while building, and to S3-compatible storage when the storage
  settings are present.

## Test it
- A renamed `.exe` called `photo.jpg` is refused.
- An 11 MB file is refused before anything is written.
- Another person's file id answers "not found".

## Settings needed (only when going live)
All four come from the storage service they choose (Cloudflare R2, Amazon
S3, DigitalOcean Spaces, or any "S3-compatible" storage):
| Setting | What it's for | Where to find it |
|---|---|---|
| `FILES_ENDPOINT` | The storage address | The provider's dashboard calls it the **endpoint** or **S3 endpoint** (`https://…`). The region is usually shown next to it; use `auto` if they don't ask for one. |
| `FILES_BUCKET` | The folder everything lives in | **Create bucket**, named after the app. Keep the default **private** setting, because the app serves files itself. |
| `FILES_ACCESS_KEY` / `FILES_SECRET_KEY` | The app's username and password for storage | **API tokens / Access keys / S3 credentials** → create one that can read and write this bucket only. The secret is shown once. |
