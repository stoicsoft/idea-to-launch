# Taking payments

**In the owner's words:** "Customers pay by card on Stripe's own secure
checkout page, so card details never touch your app. Free test mode while we
build; real payments when you go live. Stripe's fees apply."

Prices, charging cards and refunds are one-way doors. They need the owner's
explicit answer, and the exact prices come from them.

## Build it safely
- **Card details never touch the app.** Use the provider's hosted checkout
  (Stripe Checkout). No card fields anywhere: no `cardNumber`, no `cvc`, and
  no inputs named `card…`. If the spec says "collect card details", the
  answer is Checkout.
- Start a payment in one function (`createCheckoutSession(priceId, user,
  origin)`). It writes a `pending` payment row first, then returns the URL
  to send the customer to.
- **The webhook decides what got paid, not the redirect.** The webhook route
  has no session or origin check, because the signature is its identity.
  Verify the `stripe-signature` header against the **raw** body before
  reading anything. Deduplicate by event id (a `webhook_events` table).
  Mark the payment paid, then answer 200 quickly. The success page only
  *shows* the status the webhook recorded.
- Money is integer minor units (cents) everywhere in the database, formatted
  with `Intl.NumberFormat` and the owner's currency only when displayed.
- Products and prices are rows seeded from the spec. A price that charges
  real money needs its Stripe price id filled in.

## While building
Use Stripe **test mode** keys (`sk_test_…`) and test cards (4242 4242 4242
4242, any future date, any CVC). With no key at all, show a clearly marked
local "test checkout" page so the flow can still be tried.

## Test it
- The webhook refuses a bad signature, and handles the same event twice
  only once.
- The success page doesn't mark anything paid by itself.
- A scan of `src/` finds no card-number fields or 13–19 digit literals.

## Settings needed
| Setting | What it's for | Where to find it |
|---|---|---|
| `STRIPE_SECRET_KEY` | Lets the app create checkouts | Stripe dashboard → **Developers → API keys** → **Secret key**. It starts `sk_test_` for trying things and `sk_live_` for real money. Use the test key while building, and the live key when going live (Stripe asks them to finish activating the account first: bank details, business name). The app never needs their Stripe password or the publishable key. |
| `STRIPE_WEBHOOK_SECRET` | Proves "payment succeeded" messages really come from Stripe | Stripe dashboard → **Developers → Webhooks** → **Add endpoint** → the app's address + `/api/webhooks/stripe` → event **checkout.session.completed** → open it and press **Reveal** under "Signing secret" (starts `whsec_`). Only needed when going live. Locally, the Stripe CLI's `stripe listen` prints one. |
