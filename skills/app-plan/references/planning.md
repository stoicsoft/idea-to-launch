# Planning rules

## Stories

- Write "**Linh** can **book a free time from her phone** so that **she
  doesn't wait for a reply**." Use their nouns from the glossary, and a
  person from `people.md`, never "the user".
- Propose 3–8. More than 8 means two ideas. Five Now stories at most; a
  sixth means asking them to rank.
- "Not in this version" items from the brief go to Later with their reason
  already written. Don't re-propose them as Now.

## The four paths (acceptance lines)

For the main journey, write lines someone could watch happen. Use
"given / when / then" in plain words, but you don't need those exact words:

1. **Happy:** the person does the thing and sees it worked.
   "Linh picks Saturday 10:00, presses *Book*, and sees *Booked: Saturday
   10:00* with a way to cancel."
2. **First time (empty):** the very first visit, with nothing in it yet.
   What does the page say? Never a blank table or an empty chart with no
   words. "Before any bookings exist, the owner's list says where bookings
   will appear and how to share the booking link."
3. **Wrong input:** they leave something out or type it wrong. They see
   what to fix, in their language, and nothing they typed is lost.
4. **Slow or twice:** a slow connection, a double press, the back button.
   Nothing doubles, nothing disappears, and the screen shows it's working.

Plus **the owner's view:** where the owner sees what came in (the
bookings, orders, sign-ups). If the spec has no answer, that is a question
for the next round, not a guess.

Pick the paths that matter for each Now story, with 2–4 lines each. Don't
write "the empty state component renders". Write what a person would see.

## Scope

- Trimming isn't a demotion. Say what the smaller version still does well,
  so the person feels the core of the idea, not the cut.
- Expansion never enters the first build unless the person promotes it.
- Every scope change is their explicit answer. Never slip a different scope
  in through an option.

## Spec

- One page, one idea, one person (or a few), one first version. A line that
  belongs to a different idea goes to Later.
- "What it remembers" lists the things the app saves, in their nouns, with
  the details that matter ("a booking: who, which service, what time,
  phone number").
- "I assumed…" lists every guessed or delegated decision as one sentence
  they can reverse ("I assumed bookings are 1 hour; tell me if some
  services are longer"). An interview that guessed nothing has an empty
  list. Never pad it.
- No architecture, no file names, no list of tools.

## Plan

- Steps in business order: what they'll see working first. Each step names
  the stories it serves (N1, N2…).
- **Operations lines** are things to do outside the software that reduce a
  risk. They are shown apart from build steps and cost nothing to build.
- **How we'll know it worked:** the target from the brief, who or what
  counts it, and when to check. When the app can count it, the count is
  part of the step that serves its story, never left for later.
- **One-way doors** each get one line saying why they're hard to undo.
- **Settings needed later**: list by purpose only, for example "To take
  real payments: a Stripe account (we'll set it up when going live)".
  Never ask for keys during planning.
- Mark the plan "small and safe" when every step is reversible.
