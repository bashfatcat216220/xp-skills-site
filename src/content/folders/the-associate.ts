import type { Skill } from '../types'

export const skills: Skill[] = [
  {
    id: "assignment-clarification",
    folder: "the-associate",
    title: "Assignment Clarification",
    oneLiner: "Turns a hallway-quality assignment into a written scope before any work starts.",
    whatItDoes: "Claude takes the assignment as given and drafts back a one-screen restatement: the question as understood, the deliverable format, the audience, what is explicitly out of scope, and the two or three ambiguities that would change the answer. It refuses to begin substantive work until the restatement is confirmed or corrected. Vague verbs like \"look into\" get converted into a concrete deliverable or flagged as undecidable.",
    whenToUse: "At the start of any assignment received verbally, by short email, or third-hand — especially when the assigning partner is unavailable for follow-up questions.",
    exampleOutput: `ASSIGNMENT RESTATEMENT — from R. Okafor's email, 7/24
question as understood: can Crestline terminate the MSA for the Q2 SLA misses
                        without triggering the wind-down payment in s.9.4
deliverable: 2-page memo, partner audience, needed before Thursday client call
out of scope (assumed): damages quantification; the separate SOW-3 dispute
ambiguities that change the answer:
  A1  "terminate" — for cause (s.9.2) or for convenience (s.9.3)? Different math.
  A2  do the March cure emails count as formal cure notice? Memo hinges on this.
  A3  audience for the memo — internal only, or forwardable to the client?
awaiting confirmation on A1-A3 before drafting.`,
    status: "shipped",
  },
  {
    id: "flagged-first-draft",
    folder: "the-associate",
    title: "Flagged First Draft",
    oneLiner: "Produces a first draft in which every uncertain assertion carries an inline flag stating exactly what would resolve it.",
    whatItDoes: "Claude drafts the document, but any sentence resting on an unverified fact, an unread source, or an inference gets an inline bracketed flag naming the uncertainty and the specific step that would clear it. Flags are typed — [FACT?], [SOURCE?], [INFERENCE], [ASSUMED] — and indexed in a closing table so the reviewer can clear them in one pass. Nothing uncertain is silently smoothed into confident prose.",
    whenToUse: "For any first draft going up to a reviewing attorney, and especially for drafts produced fast under deadline where the temptation to sound finished is highest.",
    exampleOutput: `...Halvorsen received the reconciliation report on March 3 [FACT? — date is from
the complaint; confirm against the transmittal email in the Vance production] and
took no action for six weeks [INFERENCE — no responsive documents in that window;
absence of documents is not absence of action]. Under the indemnity clause, notice
was due within 30 days [SOURCE? — quoting client summary; pull executed MSA, s.11].

FLAG INDEX (draft carries 9)
  FACT?      3   all clearable from the Vance production
  SOURCE?    2   both clear once the executed MSA is in the file
  INFERENCE  3   reviewer judgment needed
  ASSUMED    1   choice-of-law assumed from term sheet; confirm`,
    status: "shipped",
  },
  {
    id: "redline-rationale",
    folder: "the-associate",
    title: "Redline Rationale",
    oneLiner: "Attaches a stated reason and a fallback position to every edit in a redline.",
    whatItDoes: "When Claude marks up a contract, each change carries a compact rationale: what risk the original language created, why this wording fixes it, and the fallback the negotiator can retreat to without calling back for instructions. Edits are tagged must-have or trade-away so the redline doubles as a negotiation plan. Cosmetic edits are batched separately so they never dilute the substantive asks.",
    whenToUse: "Any markup that someone else will negotiate from, or any redline sent to a counterparty who will ask \"why do you need this change\" on every line.",
    exampleOutput: `s.7.2 LIMITATION OF LIABILITY
  edit: carve indemnification obligations out of the cap
  risk in original: cap swallows the IP indemnity; a third-party claim
                    could exceed 12 months of fees on day one
  fallback: super-cap of 3x fees for indemnity claims only
  tag: MUST-HAVE

s.13.1 NOTICE
  edit: add email notice with confirmation of receipt
  risk in original: certified mail only; misses their stated ops practice
  fallback: accept original; operational annoyance, not risk
  tag: TRADE-AWAY (pair with s.7.2 if they resist the carve-out)

cosmetic batch: 6 edits (defined-term consistency), listed separately on p.4`,
    status: "shipped",
  },
  {
    id: "self-critique-first",
    folder: "the-associate",
    title: "Self-Critique First",
    oneLiner: "Makes Claude attack its own work product and fix what it can before you ever see the draft.",
    whatItDoes: "After producing any work product, Claude runs a critique pass in the reviewing attorney's voice — hunting for the unsupported step, the missed counterargument, the buried lede — before showing you anything. Defects it can fix, it fixes and logs. Defects requiring judgment are surfaced at the top of the deliverable rather than left for you to discover. You receive the corrected draft plus the critique log, never the raw first pass.",
    whenToUse: "As a default wrapper on drafting tasks; particularly valuable when you are the only reviewer and there is no second set of eyes before the document goes out.",
    exampleOutput: `SELF-CRITIQUE LOG — opposition outline, Meridian motion to compel
found and fixed (4):
  - s.II led with the weakest ground (undue burden); reordered, proportionality first
  - "clearly irrelevant" appeared 3x with no analysis; each now argued or cut
  - missing response to their cost-shifting request; section added
  - date error: meet-and-confer was 6/12, not 6/2
surfaced for your judgment (2):
  J1  our best proportionality fact (2TB estimate) comes from the client's IT
      contractor, not a declaration — use it thin, or get the declaration?
  J2  the outline concedes custodian #4; is that concession authorized?
draft follows. Raw first pass discarded.`,
    status: "shipped",
  },
  {
    id: "second-chair",
    folder: "the-associate",
    title: "Second Chair",
    oneLiner: "Runs alongside a live deposition or negotiation feed, tracking commitments, contradictions, and openings you are too busy to catch.",
    whatItDoes: "Fed a running transcript or your intermittent notes, Claude maintains three live lists: commitments the other side has made on the record, contradictions against documents already in the file, and open threads you started but never closed. On request it produces the next three questions to ask, each tied to a specific exhibit and the answer it is designed to pin down. It never speaks for you; it hands you ammunition between questions.",
    whenToUse: "During a deposition, arbitration session, or negotiation where you are first chair with no second, or when reviewing a same-day rough transcript before the next session.",
    exampleOutput: `SECOND CHAIR — Halvorsen 30(b)(6), session 2, 2:40 pm
commitments (new since break):
  - "no one outside finance saw the reconciliation" (141:12)
contradictions (1 new):
  - 141:12 vs. Ex. 14 (email forwarding the reconciliation to ops director)
    confidence: HIGH — same document, dated two days after the report
open threads:
  - witness never answered who ordered the write-down (you moved on at 128:4)
suggested next 3:
  Q1  re-ask 128:4 verbatim; the deflection was to timing, not to the order itself
  Q2  show Ex. 14; lock in "outside finance" definition before he sees the cc line
  Q3  "was Ex. 14 the only time it left finance?" — sets up Ex. 17 for session 3`,
    status: "draft",
  },
  {
    id: "loose-ends-register",
    folder: "the-associate",
    title: "Loose Ends Register",
    oneLiner: "Keeps a running register of every open item, unverified assumption, and promised follow-up across a matter.",
    whatItDoes: "As work proceeds, Claude logs everything left open — the fact nobody confirmed, the clause nobody pulled, the follow-up promised in a call — each with its origin, owner, and what it blocks. The register survives across sessions and is re-presented at the start of each one, with items that have quietly become urgent moved to the top. Items can only leave the register by being resolved with a stated basis, not by going stale.",
    whenToUse: "On any matter running longer than a week or involving more than two people, and before any status call where \"what are we waiting on\" will be asked.",
    exampleOutput: `LOOSE ENDS — Crestline matter, 14 open (2 aging into urgent)
URGENT (deadline-adjacent):
  LE-07  insurer notice sent? promised by client 7/18, unconfirmed
         blocks: coverage position in Thursday memo   owner: client (chase today)
  LE-11  executed MSA still not in file; all cites are to the draft
         blocks: every s.-number in the memo          owner: us
OPEN (9):     LE-03 vendor org chart · LE-05 Okafor conflicts check ·
              LE-09 damages backup xlsx ...
RESOLVED THIS WEEK (3):
  LE-02  choice of law confirmed (executed term sheet, s.19)   basis logged
  LE-08  duplicate of LE-11, merged
resolution rate last 7 days: 3 closed, 4 added. Register is growing.`,
    status: "shipped",
  },
  {
    id: "cite-runner",
    folder: "the-associate",
    title: "Cite Runner",
    oneLiner: "Checks every citation in a draft against the actual source and reports what the source really says.",
    whatItDoes: "Claude takes a draft and its cited sources — record documents, transcripts, contracts, produced files — and verifies each cite three ways: the pincite lands where claimed, the quotation is exact, and the proposition is actually supported at that location rather than nearby or not at all. Each cite gets a verdict of clean, drifted, or unsupported, with the source's actual language quoted for anything short of clean. Sources it has not been given are marked unverifiable, never assumed good.",
    whenToUse: "Before filing or sending anything with citations, and always on drafts inherited from someone else or assembled from older briefs.",
    exampleOutput: `CITE CHECK — reply brief draft, 31 cites against provided record
clean:        24
drifted:       4
  p.6  "admitted the schedule was aspirational" cites Tr. 88:14
       actual at 88:14: "the schedule was a target" — admission is at 91:2
  p.9  quote drops "materially" from s.4.2; word does real work here
unsupported:   2
  p.11 cites Ex. 22 for pre-2024 knowledge; Ex. 22 is dated 3/2025
unverifiable:  1
  p.14 cites "Hale dep. vol. 2" — volume 2 not in the provided record
no cite passes by proximity. 24/31 clean; fixes drafted inline for the 4 drifts.`,
    status: "shipped",
  },
  {
    id: "meeting-prep",
    folder: "the-associate",
    title: "Meeting Prep",
    oneLiner: "Builds a one-page prep sheet for a meeting from the file: goals, likely questions, and the answers you actually have.",
    whatItDoes: "Given the meeting's purpose and the matter file, Claude produces a tight prep packet: what you need to walk out with, the questions each attendee is likely to ask, your best current answer to each with its source, and the questions you cannot yet answer paired with an honest holding line. It also lists the two or three documents worth having open during the call. The packet is built from the file as it stands, so gaps in the file show up as gaps in the prep — before the meeting instead of during it.",
    whenToUse: "The evening before any client call, partner check-in, or opposing-counsel conference where you will be asked questions rather than just reporting.",
    exampleOutput: `PREP — Crestline client call, Thu 10:00, attendees: GC (Marden), CFO
walk out with: authority to send the s.9.2 cure notice this week
likely questions:
  GC:  "what does terminating actually cost us?"
       answer: wind-down payment s.9.4, ~2 months fees; workings at tab 3
  CFO: "can we withhold the Q3 payment meanwhile?"
       answer: no setoff right in the MSA; withholding risks our own breach
       (this will disappoint him — lead with the cure-notice leverage instead)
cannot answer yet:
  "will they sue?" — holding line: litigation posture memo due Monday, LE-04
have open during call: executed MSA s.9; 7/12 SLA report; wind-down math
file gap surfaced: no signed engagement amendment covering the dispute work.`,
    status: "shipped",
  },
  {
    id: "handoff-memo",
    folder: "the-associate",
    title: "Handoff Memo",
    oneLiner: "Writes the memo that lets someone else pick up your matter without calling you.",
    whatItDoes: "Claude assembles a transfer memo from the matter's files, correspondence, and loose-ends register: current posture, near-term deadlines, where every key document lives, the decisions already made with their reasons, and the traps — the things that look fine but are not. It is written for a competent stranger, so anything the memo cannot source from the file is listed as resident only in the departing lawyer's head, which becomes the exit-interview checklist.",
    whenToUse: "Before a vacation, a matter transfer, a departure, or any handoff where the receiving lawyer's first week would otherwise be archaeology.",
    exampleOutput: `HANDOFF — Halvorsen matter, from associate desk, effective 8/1
posture: fact discovery closes 9/15; their motion to compel fully briefed, undecided
next 30 days:  8/8 expert disclosure (ours) · 8/22 Hale dep vol. 3 · 9/2 mediation stmt
key documents:  chronology (live, /Halvorsen/chron.md) · hot docs binder (Ex. 14, 17, 22
                are the case) · privilege log (final through vol. 4 only)
decisions made, with reasons:
  - conceded custodian #4 (7/19): burden math at tab 6; client approved by email
  - NOT deposing the auditor: strategy call 6/30 — we want them neutral at trial
traps:
  - Ex. 22's date reads 3/2024 in the OCR; the original is 3/2025. OCR is wrong.
  - opposing counsel treats "we'll get back to you" as agreement. Confirm in writing.
in-my-head-only (exit interview list): mediator's off-record range comment, 6/30`,
    status: "shipped",
  },
  {
    id: "standing-objection",
    folder: "the-associate",
    title: "Standing Objection",
    oneLiner: "A persistent instruction set of things Claude must always push back on, no matter what today's prompt says.",
    whatItDoes: "You maintain a short list of standing objections — practices Claude must challenge every time they appear in a request or a draft, such as citing documents it has not been given, uncapped indemnities in your paper, or advice emails without a privilege legend. When triggered, Claude states the objection, does the work the compliant way if one exists, and requires an explicit on-the-record override to proceed otherwise. Overrides are logged with who gave them and when.",
    whenToUse: "Set it up once per practice area and let it run; review the log monthly to see which objections keep firing and which have gone stale.",
    exampleOutput: `STANDING OBJECTION TRIGGERED — SO-3 (no cites to unprovided sources)
request: "add the standard cases on trade-secret inevitable disclosure"
objection: SO-3 forbids citing authority not in the provided file. I have no
           file of authority for this proposition and will not invent one.
compliant path taken: drafted the section with bracketed [AUTHORITY NEEDED]
slots describing the proposition each cite must support, for you to fill.
override: available with "override SO-3" — will be logged.
---
SO log, July: SO-3 fired 6x (5 complied, 1 override by RJO 7/9, logged)
              SO-1 (uncapped indemnity) fired 2x · SO-5 stale, 0 fires in 90 days
              suggest retiring SO-5 or tightening its trigger`,
    status: "shipped",
  },
]
