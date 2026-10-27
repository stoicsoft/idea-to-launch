# Reading the evidence

Every entry is a fact. Read all of them before you open a file.

| You see | It means | Look at |
|---|---|---|
| A request answered **4xx** | The app refused it: bad input (400), not allowed (401/403), not found (404), conflict (409) | Whether the page sends what the route expects. Compare the form fields with the route's validation. |
| A request answered **5xx** | The server crashed or gave up | The **server output**. The browser never sees the real cause. |
| A request that **never answered** | An await that never resolves, a handler that forgot to return a response, or a service that never started | The handler's return paths, and whether the database or service is running |
| A request that was **blocked** (CORS, mixed content, refused connection) | The app calls a hard-coded address or port that isn't itself | Hard-coded `http://localhost:XXXX` or another domain in client code |
| **Uncaught exception** with a stack | The frame that failed, and its values | The deepest frame in the app's own code with a bad value |
| The same error **repeating (×N)** | Usually one bug in something polled or retried | The poller and the call it makes |
| A **failing check** (type check, test, build) | The exact file and line, and what was expected | The first error only. Later ones are often consequences. |
| A **blank page** | A render crash, or a client error before first paint | The browser console, then the server output |
| A **loading state that never ends** | The fetch failed, and the code stored the error without showing it | The failing call. Also make the screen show errors with a retry. |

## Silent failures

When the evidence names a failing call but not a cause:
- **A catch-all that returns 500 without logging hides the cause.** Add
  `console.error` with the real error there, trigger it once, read what it
  printed, then fix that. Keep the log line afterwards; it isn't noise.
- **"Table or column does not exist"** means a migration wasn't applied, or
  the schema and migrations disagree. Fix the migration chain (add a new
  migration, and never edit an applied one). Don't work around it in the
  query.
- **Works locally, fails online** usually means a missing setting
  (environment variable), a different database, or a file path that only
  exists locally. Compare the setting names in `.env.example` with what the
  host has (names only).
- **"Module not found" after pulling changes** means dependencies weren't
  installed. Run the package manager's install, then retest.

## Proving it

- Repeat the exact reproduction. It must now succeed with the right result.
- Run the full check script, so nothing else broke.
- If you can, add a small test that would have caught this, so it can't
  silently come back.
- If the evidence was empty or misleading, say you reproduced the problem
  from your own run (type check, tests, or clicking through) instead.
