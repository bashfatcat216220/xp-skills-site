---
name: km-institutional-knowledge-retrieval
description: >-
  KM Institutional Knowledge Retrieval is the team's method for answering questions from the matter library before they reach anyone's inbox — running the research waterfall, citing what was found and where, dating its currency, and pre-framing genuine escalations. Use this skill for every substantive question asked inside a matter project: "what did we say about X," "do we have a position on Y," "is Z allowed," "has this been reviewed before," "what's our current approach" — and before answering any question from general knowledge, because the library may already hold the firm's answer.
---

# KM Institutional Knowledge Retrieval

*Version: July 17, 2026. First version; encodes the research waterfall from the approved proposal and the supersession discipline from the AI Practice portfolio analysis.*

## Philosophy

Most questions in a mature matter have already been answered — in a memo, a chart, an approval, or an email. The failure mode is not missing knowledge; it is answers that exist but aren't found, or are found without knowing whether something later changed them. This skill makes every question run the same path, makes every answer carry its provenance and its date, and ensures the only questions that reach an attorney are the ones the library genuinely cannot answer — and those arrive pre-researched. An answer's value depends on knowing where it came from and how current it is: a memo answer superseded by a later approval email is a different animal from a memo answer standing alone, and the output must say so.

## The research waterfall

Run the levels in order. Do not stop at the first hit — later levels can supersede earlier ones, so continue until confident nothing downstream changed the answer.

1. **The matter's core documents** — memos, cutoff charts, cover sheets, index cards, the master index. (Check the index card first; verify against the source before relying on it.)
2. **Correspondence after the core document's date** — anything postdating the memo/chart that may have moved the answer.
3. **OGC approval emails** — approaches the client's counsel has approved.
4. **The lead attorney's emails to OGC** — positions proposed or taken.
5. **Other attorneys' emails, then local counsel correspondence.**

In a Claude project, each level is one or more project-knowledge searches scoped by document type and date; where a level's sources are not in the project (e.g., email archives not yet imported), say so explicitly — an unsearchable level is reported as "not available in this library," never silently skipped.

## Answer discipline

Every answer reports:
- **The answer**, in the firm's standard formulations where they exist.
- **The level it came from** and the specific source with pin cite and date ("Cutoff chart, row 14, dated Mar. 3, 2026" / "OGC email, Apr. 22, 2026").
- **Currency**: the most recent source touching the question, and whether anything at a later waterfall level modified, superseded, or cast doubt on the primary answer. Check the card's `supersedes`/`superseded_by` links and the master index status before treating any position as current.
- **Confidence**: whether the sources agree; where they conflict, present both with dates and flag for resolution rather than picking silently.
- **A consistency check** against the foundation skills — does the retrieved position still fit the current reasoning framework (e.g., today's escalation triggers, the current provider test)? A retrieved answer that predates a framework change gets flagged, not just repeated.

When the library does not contain the answer, say so plainly — "the library does not answer this" is a complete, honest, and useful result. Never fill the gap from general knowledge without labeling it as such and distinguishing it sharply from library-sourced content.

## Cross-matter retrieval

When the question is comparative — "how did we handle this before," "is this consistent with our other matters," "what's our current position on X across the portfolio" — run the standard plays against the index cards:

- **Comparable matters**: same deal shape, vendor, use pattern, or risk driver; report each with its conclusion and date.
- **Current position**: the most recent unsuperseded card on the subject; state explicitly which earlier positions it replaced.
- **Contradictions and tensions**: same facts with different conclusions, or the same commitment tagged differently across matters — report as findings needing reconciliation, not as options to choose from.
- **Historical evolution**: how the position moved over time, with the document trail.

Cards make matters comparable; sources make conclusions verifiable. Comparative answers cite cards but spot-check the source for anything load-bearing.

## Escalation, pre-framed

A question that falls through every level becomes an escalation — never a bare forward. The escalation states: the question as understood (reframed if the asked question isn't the real one, per KM Reasoning); what each waterfall level was searched for and what was found or not found; the closest analogous positions from cross-matter retrieval; and the specific decision needed, with the relevant documents attached or cited. The attorney should be able to decide from the escalation alone.

## Quality bars

No uncited answers from the library. No currency claims without checking supersession. No silent gaps — unsearchable levels and missing documents are named. No general-knowledge filler dressed as institutional knowledge. And retrieval feeds gathering: any question the library *should* have answered but couldn't is reported as a capture gap so the library improves.

## Version 2 (future)

The answered-question bank (questions asked, answers given, indexed so the same question is never emailed twice); email-archive levels imported per matter so waterfall levels 2–5 become searchable in-project; the practice-wide card collection enabling true cross-project retrieval.
