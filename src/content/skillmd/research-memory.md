---
name: research-memory
description: Institutional memory for legal research in this Project. Before answering any legal research question, checks whether the issue has been researched before — first in the Research Log document in Project knowledge, then in this Project's past conversations — and either builds on the prior answer or reconciles with it explicitly. Every substantive answer gets a log entry. Use whenever a legal research question is asked here ("what's the standard for," "is there authority for," "can a party," "does [jurisdiction] recognize"), or when someone says "have we researched this," "didn't we look at this already," "what have we researched on [topic]," "show the research log," or "add this to the research log."
---

# Research Memory

The risk this exists to kill: the same issue, researched twice, years apart,
answered differently — with both answers relied on. In a practice where the
same doctrines recur across matters, the second, quietly contradictory answer
is worse than no answer, because nobody knows there are two until opposing
counsel does.

So the rule is: **memory first, research second, log always.** No research
question gets answered from scratch until memory has been checked, and no
substantive answer leaves the conversation without a log entry proposed.

## Where memory lives

Two sources, consulted in order:

1. **The Research Log** — a document named `Research Log` in this Project's
   knowledge. One entry per researched issue. When it exists, it is
   authoritative: a log entry outranks a half-remembered chat.
2. **This Project's past conversations** — when there is no log, or the log
   has no match, search the Project's previous chats for the issue (where
   past-conversation search is available). Chats are the fallback and the
   seed: when a prior treatment turns up in an old conversation but not in
   the log, that's a missing entry — draft it as part of the answer.

If neither source is available — no log, no searchable history — ask once:
"Has this issue come up in this practice before? If you can point me at the
conversation or memo, I'll reconcile with it; otherwise I'll research fresh
and start the log with this answer."

This works at either scope. In a matter Project, the log is that matter's
research file. In a standing research Project that all matters share, it
becomes the practice's memory — broader reach, and the better default,
because doctrine recurs across matters even when facts don't. Facts and
strategy stay in the matter; only the legal research travels.

## Step 1 — Pin the question

Before anything else, fix four things: the **issue** (in doctrine terms, not
the client's phrasing), the **jurisdiction**, the **procedural posture** if
it matters (motion to dismiss vs. summary judgment changes the answer more
often than people expect), and the **matter** asking. A research answer
without a jurisdiction attached is not reusable — it's a trivia answer.
If the jurisdiction isn't stated and would change the answer, ask.

## Step 2 — Check memory

Look for the pinned issue in the log, then in past conversations.

- **Direct match** — same issue, same jurisdiction. Use it as the starting
  point.
- **Near match** — same issue, different jurisdiction or posture, or a
  materially different fact pattern. Say so: "We researched this for
  [jurisdiction/posture] on [date] — I'm starting from that answer, but the
  difference in [what differs] may change the result, so I'm re-checking
  that piece rather than assuming."
- **No match** — research fresh, and say the log was checked. "Nothing in
  the log or past conversations on this" is information the attorney wants,
  not filler.

Never skip this step because the question seems small. Small questions are
the ones that get re-asked.

## Step 3 — Report what memory holds

When a prior answer exists, lead with it before doing anything new:

> **We've looked at this before.** [Date], for [matter], in [jurisdiction]:
> [the prior short answer]. Verification status then: [what was checked
> against what]. Full treatment: [where — conversation title and date, or
> saved memo name].
>
> [Then one of:] That answer looks current — here it is applied to today's
> question. / That answer is [N months/years] old and touches
> [currency-sensitive area], so I'm re-verifying [the specific piece] before
> relying on it. / Today's facts differ in [way that matters] — the prior
> answer frames the issue but doesn't resolve this one.

The attorney decides whether the prior answer stands. The skill's job is to
put both the prior answer and its age on the table, not to silently reuse or
silently redo.

## Step 4 — Research, where needed

Fresh or supplemental research follows the standing guardrails:

- **Provenance tags on every citation.** `[Westlaw]` / `[CourtListener]` /
  a named connected research tool — only when the cite appeared in that
  tool's results this session. `[user provided]` when pasted. Everything
  else is `[model knowledge — verify]`, no matter how confident it feels.
  Pinpoint cites carry the highest fabrication risk; tag them
  `[verify-pinpoint]` and list them first in the cite check.
- **Currency check.** If the answer depends on anything that moves — recent
  decisions, amended rules, effective dates, circuit splits in motion —
  search before relying on recall. The test: would a firm alert on this
  topic have a "recent developments" section?
- **Quote-to-proposition.** Before citing a passage for a proposition,
  confirm it's a holding that supports the proposition as stated — not
  dicta, not the dissent, not the argument the court rejected.
- **Say what wasn't done.** If no research tool is connected and web search
  couldn't reach the primary source, the answer says so plainly rather than
  dressing model knowledge up as research.

## Step 5 — Reconcile, never silently contradict

When today's answer diverges from a logged one, the divergence is the
headline, not a footnote. State which of the three cases it is:

1. **The law moved.** New decision, amendment, or rule change. The old
   entry gets superseded — explicitly, with the reason and the new
   authority.
2. **The facts or posture differ.** Both answers are right in their lanes.
   The log records the distinction so the next reader knows which lane
   they're in.
3. **The prior answer was wrong.** It happens. Say so, correct the entry,
   and flag any matter that may have relied on it — that flag is for the
   attorney, and it's the most important sentence in the conversation.

What is never acceptable: a second entry that contradicts the first with no
acknowledgment. One issue, one current answer, with its history visible.

## Step 6 — Log it

Every substantive answer ends with a proposed log entry, and — when a log
exists — the **complete updated Research Log** produced as a downloadable
document, not a diff. A partial update saved over a full log loses entries
silently, and the lost one is the issue that comes back in two years.

Then: "Replace the `Research Log` document in this Project's knowledge with
this version." The skill cannot save anything itself; the attorney is the
write mechanism. If no log exists yet, create it with this first entry and
say where to save it.

## Log format

The table up top, for scanning:

| ID | Issue | Jurisdiction | Short answer | Matter | Date | Checked against | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Inevitable disclosure — TRO stage | Utah | Not adopted; hire-plus-bad-acts framing survives | [matter] | 2026-03-11 | Westlaw, that session | current |

One full entry per issue below it:

```markdown
### R-001 — [Issue, stated in doctrine terms]
**Jurisdiction / posture:** [state or circuit; motion posture if it mattered]
**Question as asked:** [the practical question, one sentence]
**Short answer:** [2–4 sentences. A pointer, not a memo.]
**Key authority:** [the 1–3 load-bearing cites, each with its provenance tag]
**Verification:** [what was checked against what, that session]
**Full treatment:** [conversation title + date, or saved memo name]
**Matter surfaced by:** [matter ref]
**Status:** current / superseded by R-0NN ([date], [reason]) / narrowed ([how])
**Logged / last confirmed:** [dates]
```

Supersession is an edit to the old entry plus a new entry — never a silent
overwrite. The chain is the point: it shows why the answer changed.

## Staleness

Research ages at different rates. Entries touching anything
currency-sensitive — recent splits, new statutes, areas with active
rulemaking — get re-verified before reuse regardless of age, and every
reused entry's "last confirmed" date updates only when something was
actually checked, not when the entry was merely read. An old date on a
reused entry is a signal to the attorney, not an embarrassment to hide.

## What the log is not

- **Not citable work product.** The short answer is a pointer for the
  attorney who wrote it. Nothing goes from log to brief without re-reading
  the full treatment and re-verifying the cites — the log tells you where
  you landed, not that it's safe to file.
- **Not a brief bank.** It stores answers and locations, not drafts.
- **Not client-facing.** It's an internal privileged file; it stays in the
  Project. If a client asks what's been researched, that answer gets
  written fresh, for that audience.
- **Not a substitute for judgment on reuse.** A logged answer from another
  matter may carry conflict or confidentiality weight the log can't see.
  When an entry's matter and the asking matter are adverse or awkward, flag
  it and let the attorney decide.
