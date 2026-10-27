# Sign-in for people using the app

**In the owner's words:** "People sign in with a link emailed to them, so
there's nothing to remember, or with a password if you prefer. You choose
who gets in: customers, staff, or both."

This is a one-way door: who can see what, and how people sign in, must be
the owner's explicit answer in the plan.

## Build it safely
- Prefer a well-known auth library for the stack (for Next.js: Auth.js /
  NextAuth or Better Auth) over hand-rolled sessions. Use email magic links
  first; passwords only if asked. Store passwords only as argon2id/bcrypt
  hashes via the library, and never compare hashes by hand.
- Roles: `owner`, `staff`, `customer`. **The first account created becomes
  `owner`** (the founder). The role is read from the database on every
  request. Never trust a role from the browser, a form field or a cookie you
  set yourself.
- Put private pages in one place (for example the `src/app/(private)/`
  route group) whose layout redirects signed-out visitors. **A layout does
  not protect API routes or server actions:** every one of them checks the
  user itself (`requireUser(request, roles?)` returning 401/403).
- Staff invites: the owner enters an email and a role, and the app emails a
  one-time link that expires (for example after 7 days).
- Magic links ride on the email feature. While building, they land in the
  on-screen outbox, so the whole sign-in works with no email account.
- Sign-out clears the session on the server, not just the cookie.

## Test it
- A signed-out request to every private page and route is refused.
- A customer can't reach staff or owner pages, or other customers' data.
- The first sign-in becomes owner; the second does not.
- A used or expired link doesn't work twice.

## Settings needed
| Setting | What it's for | Where it comes from |
|---|---|---|
| `AUTH_SECRET` | Signs sign-in links and sessions so nobody can forge them | Nothing to find: generate a long random value (`openssl rand -base64 32`, or a password manager's "generate"). Locally it's created for them. When going live, paste a fresh one. Changing it later signs everyone out once, which is fine. |
| (email settings) | Sending sign-in links for real | See email.md |
