import type { Skill } from '../types'

export const skills: Skill[] = [
  {
    id: "steelman-ladder",
    folder: "argument-stress-testing",
    title: "Steelman Ladder",
    oneLiner: "Builds progressively stronger versions of the opposing argument until one actually worries you.",
    whatItDoes: "Takes your position on a contested issue and constructs the other side's argument at four escalating rungs: the version opposing counsel filed, the version a better lawyer would file, the version a hostile judge would write, and the strongest version any competent advocate could assemble from the record. Each rung states its best authority type, its factual hook, and what it would take to answer it. The ladder stops at the first rung you cannot currently answer.",
    whenToUse: "Before drafting an opposition or reply, or when a brief feels finished and you want to know whether it survives contact with a stronger opponent than the one you actually have.",
    exampleOutput: `ISSUE: enforceability of the non-solicit in the Halvorsen employment agreement

RUNG 1 (as filed): "overbroad on its face" — answered by severability clause. HELD.
RUNG 2 (better lawyer): ties overbreadth to lack of consideration for the
  2023 amendment; cites the unsigned counterpart. HELD, but answer depends
  on the Marsh declaration surviving.
RUNG 3 (hostile judge): reads the amendment's integration clause to wipe
  the original consideration; your answer requires parol evidence.
  STATUS: NOT CURRENTLY ANSWERED.
RUNG 4: not built — resolve Rung 3 first.

WEAKEST LINK: Marsh declaration (single witness, adverse deposition set for Sep 9)`,
    status: "shipped",
  },
  {
    id: "bench-memo-against-you",
    folder: "argument-stress-testing",
    title: "Bench Memo Against You",
    oneLiner: "Drafts the internal memo a judge's clerk would write recommending against your motion.",
    whatItDoes: "Writes the bench memo for your pending motion from the chambers' side of the desk, assuming the clerk is inclined to recommend denial. It follows a standard bench memo structure — question presented, short answer, the record facts the clerk would foreground, and the reasoning path to a denial — using only material actually before the court. The memo flags which of your arguments the clerk would dispose of in a footnote versus which forced real work.",
    whenToUse: "After your motion is drafted but before it is filed, or before oral argument when you need to anticipate which questions come from a chambers memo you will never see.",
    exampleOutput: `BENCH MEMO — Def.'s Motion to Exclude Plaintiff's Damages Expert
RECOMMENDATION: DENY without prejudice to trial objections

QUESTION: Whether the lost-profits model's reliance on the pre-breach
run rate is methodology (excludable) or application (weight).

SHORT ANSWER: Application. Movant's own expert used a run-rate model
in the Crestline matter; the dispute is over inputs, not method.

DISPOSED IN A FOOTNOTE: movant's untimeliness argument (raised first
in reply).
REQUIRED REAL WORK: the double-counting point re: Section 4 mitigation
credits — this is the argument to lead with if the motion is denied.`,
    status: "shipped",
  },
  {
    id: "load-bearing-assumption-audit",
    folder: "argument-stress-testing",
    title: "Load-Bearing Assumption Audit",
    oneLiner: "Finds the unstated premises your argument collapses without and tells you which are actually verified.",
    whatItDoes: "Decomposes a brief, memo, or case theory into its chain of inferences and extracts every premise the conclusion depends on, including the ones never stated because everyone on the team stopped noticing them. Each assumption is classified as verified against the record, asserted but unverified, or inherited from an earlier draft with no current owner. The output is ranked by how much of the argument falls if the assumption fails.",
    whenToUse: "When a case theory has been stable for months, when a matter changes hands between associates, or before summary judgment when the cost of a silent bad premise is highest.",
    exampleOutput: `ARGUMENT: Halvorsen breached first, excusing our client's nonperformance

A1. The April 12 email was a repudiation, not a negotiation posture.
    status: ASSERTED — no deposition testimony either way. LOAD: total.
A2. Notice-and-cure under sec. 8.2 was satisfied by the April 30 letter.
    status: VERIFIED (letter + delivery receipt in production). LOAD: total.
A3. The cure period ran from receipt, not from mailing.
    status: INHERITED — appears first in a Feb outline, no analysis since.
    LOAD: partial (shifts breach date by 6 days; matters only if A1 holds).

PRIORITY: A1. Every downstream argument assumes it; nothing in the
record currently proves it.`,
    status: "shipped",
  },
  {
    id: "adverse-precedent-distinguisher",
    folder: "argument-stress-testing",
    title: "Adverse Precedent Distinguisher",
    oneLiner: "Works each bad authority you must confront and grades whether the distinction is real or cosmetic.",
    whatItDoes: "Takes the adverse authorities you have identified and, for each one, generates every plausible ground of distinction — facts, procedural posture, governing standard, subsequent treatment — then grades each ground as substantive, arguable, or cosmetic. Cosmetic distinctions are flagged with the response opposing counsel will make to them, so you do not spend a page of the brief on a distinction that dies in one reply sentence. Authorities with no substantive distinction are marked for confrontation rather than evasion.",
    whenToUse: "When your research has surfaced authority that cuts against you and you need to decide, case by case, whether to distinguish, confront, or concede.",
    exampleOutput: `ADVERSE AUTHORITY 3 of 5 — appellate decision enforcing a materially
similar liquidated damages clause

GROUNDS OF DISTINCTION
  procedural posture (post-trial vs. our MSJ)      grade: SUBSTANTIVE
    — that court had a damages record; here amount is undisputed
  clause context (sale of goods vs. services MSA)   grade: ARGUABLE
    — expect reply: "the clause language is nearly identical"
  sophistication of parties                          grade: COSMETIC
    — both sides counseled in both cases; do not brief this

RECOMMENDATION: distinguish on posture only; one paragraph. Do not
cite the sophistication point — it invites an unfavorable comparison.`,
    status: "shipped",
  },
  {
    id: "concession-economics",
    folder: "argument-stress-testing",
    title: "Concession Economics",
    oneLiner: "Prices each potential concession by what it buys, what it forecloses, and what it signals.",
    whatItDoes: "Inventories the points in your brief or negotiation posture that could be conceded, then models each concession's full cost: the argument space it closes off later in this matter, the credibility it purchases with the court or counterparty, and the positions it commits you to in related disputes. It distinguishes concessions that are cheap because the point was already lost from concessions that look cheap but quietly surrender a premise you need at trial. The output is a ranked buy list and a do-not-concede list with reasons.",
    whenToUse: "Before a meet-and-confer, a reply brief, or oral argument, when you know some ground must be given and want to choose it deliberately rather than under questioning.",
    exampleOutput: `CONCESSION CANDIDATES — opposition to motion to compel (Crestline MSA dispute)

CONCEDE: custodial scope for the three named sales custodians
  buys: credibility on the burden argument for the remaining 14
  forecloses: nothing — their relevance was never contestable
  price: LOW

CONCEDE WITH LANGUAGE: "the 2022 forecasts are relevant to damages"
  buys: narrows the fight to proportionality
  forecloses: CAUTION — phrasing must not concede forecasts are
  reliable; that premise reappears in their expert's model
  price: MEDIUM — use provided limiting language only

DO NOT CONCEDE: that the deal team used personal devices
  reason: unverified, and it is the predicate for their spoliation theory`,
    status: "draft",
  },
]
