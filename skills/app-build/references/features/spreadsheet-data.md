# Showing data from a spreadsheet

**In the owner's words:** "Your app reads a spreadsheet you own (a price
list, a catalogue, opening hours) and shows its rows to customers. It reads
the sheet each time someone looks, never writes to it, and keeps no copy of
it."

Before building this, consider whether the first version even needs an app.
A published sheet or form might already solve it.

## Build it safely
- Read through **one function**: `readRange(sheetId, range)` returns
  `{ values: string[][] }`, nothing more.
- **Fetch at request time**, in the page or route that shows the data, with
  a short timeout. Repeated reads within one request share one fetch, plus
  an optional short shared cache (about 60 seconds). No sync job and no
  mirror table.
- **Never store the rows** in the app's database. If a feature needs them
  saved, that is a different feature, so ask.
- **Read-only.** Nothing in the app writes to the spreadsheet service.
- The token is server-only: never logged, never sent anywhere except the
  spreadsheet service, never in client code.
- **Fail honestly.** If the sheet moved or can't be reached, show "This list
  isn't connected right now", never an error page or stale rows.
- Treat cell values as untrusted text: trim, validate and escape them.

## Settings needed
| Setting | What it's for | Where to find it |
|---|---|---|
| `SHEETS_API_KEY` or a service account (`GOOGLE_SERVICE_ACCOUNT_JSON`) | Lets the app read the sheet | For a sheet shared "anyone with the link can view", an API key from **console.cloud.google.com → APIs & Services → Credentials → Create credentials → API key** (enable the Google Sheets API, and restrict the key to it). For a private sheet, create a **service account**, download its key, and share the sheet with the service account's email as **Viewer**. |
| `SHEET_ID` | Which sheet | The long id in the sheet's address: `docs.google.com/spreadsheets/d/<SHEET_ID>/…` |
