import type { Skill } from '../types'

export const skills: Skill[] = [
  {
    id: "pre-mortem",
    folder: "decision-quality",
    title: "Pre-Mortem",
    oneLiner: "Assumes the matter strategy failed and works backward to the most likely causes before you commit.",
    whatItDoes: "Takes a strategy you are about to commit to — a motion, a settlement posture, a trial theme — and writes the post-mortem as if it is eighteen months later and the strategy failed. It generates the distinct failure narratives, ranks them by plausibility given the current record, and converts the top narratives into checkable conditions you can monitor now. The output separates failures you could detect early from failures that are only visible after the commitment is irreversible.",
    whenToUse: "At the commitment point of any consequential call: before filing rather than answering, before rejecting a settlement bracket, before building a case theory around a single witness.",
    exampleOutput: `STRATEGY: try the Halvorsen matter on a willfulness theory, decline the bracket

FAILURE NARRATIVES (ranked)
1. The Dietrich emails read as sloppy, not willful, to a lay jury.
   plausibility: HIGH — no witness yet ties intent to the emails
   early signal: mock exercise or focus review of the email set
2. Willfulness opens character/pattern discovery we lose more from
   than we gain.
   plausibility: MEDIUM — their Rule 30(b)(6) notice already probes this
   early signal: scope of their next document requests
3. Fee exposure changes client's risk math late.
   plausibility: MEDIUM — client has not seen a fee model past trial
   early signal: run the model now, not at the pretrial conference

DETECTABLE BEFORE COMMITMENT: 1, 3.   ONLY VISIBLE AFTER: 2.`,
    status: "shipped",
  },
  {
    id: "calibration-ledger",
    folder: "decision-quality",
    title: "Calibration Ledger",
    oneLiner: "Records your litigation predictions with confidence levels and scores them when the results come in.",
    whatItDoes: "Maintains a running ledger of the predictions you actually make in practice — motion outcomes, ruling timing, settlement values, witness performance — each logged with a stated probability and a resolution date. When outcomes land, it scores the entries and reports where your stated confidence diverges from your hit rate, broken out by prediction type. Over time it tells you the specific domains where your 80 percent means 80 percent and the ones where it means 55.",
    whenToUse: "Continuously: log at the moment you give a client or partner an odds estimate, and review quarterly or before giving the next high-stakes assessment.",
    exampleOutput: `LEDGER ENTRY #47
  prediction: MSJ granted at least in part in the Crestline matter
  stated confidence: 70%    logged: 2026-03-02    resolved: 2026-06-19
  outcome: denied in full    score: MISS

CALIBRATION REPORT (last 24 resolved)
  motion outcomes:     stated avg 72% -> hit rate 58%   OVERCONFIDENT
  ruling timing:       stated avg 60% -> hit rate 63%   calibrated
  settlement brackets: stated avg 65% -> hit rate 67%   calibrated

NOTE: overconfidence concentrated in dispositive motions where you
drafted the brief. Predictions on motions you did not draft: calibrated.`,
    status: "shipped",
  },
  {
    id: "base-rate-corrective",
    folder: "decision-quality",
    title: "Base Rate Corrective",
    oneLiner: "Forces the outside view: what happens to cases like this one, before what happens in this one.",
    whatItDoes: "Before you finalize an estimate, it makes you define the reference class — motion type, forum, posture, claim type — and state the base rate for that class from whatever data you have, flagging when you have none and are guessing. It then requires you to justify each departure from the base rate with a fact specific to your matter, and shows you the gap between the outside view and your inside view. The point is not that the base rate is right; it is that departures from it get named and owned.",
    whenToUse: "When your case-specific analysis has produced a number that feels right, and especially when the matter is one you have lived inside for months and every fact feels distinctive.",
    exampleOutput: `ESTIMATE UNDER REVIEW: 75% chance the arbitrator awards fees

REFERENCE CLASS: fee awards to prevailing party under a contractual
fee-shifting clause, commercial arbitration
BASE RATE: no internal data; provider statistics unavailable.
Proxy: outcomes in your own last 9 fee applications -> 5 of 9 (56%)

INSIDE VIEW: 75%    OUTSIDE VIEW: ~56%    GAP: +19

CLAIMED DEPARTURES
  "clause is mandatory, not discretionary"     specific fact: YES — sec. 11.4 "shall"
  "arbitrator signaled sympathy at hearing"    specific fact: WEAK — one comment
  "their conduct was unusually obstructive"    specific fact: felt in every matter

ADJUSTED ESTIMATE: 65% supported. The last 10 points are the hearing
comment; decide if you want to stake them on it.`,
    status: "shipped",
  },
  {
    id: "reasoning-provenance-audit",
    folder: "decision-quality",
    title: "Reasoning Provenance Audit",
    oneLiner: "Traces where each belief driving a decision actually came from, and whether the source still holds.",
    whatItDoes: "Takes the key beliefs behind a pending decision and traces each to its origin: a document in the record, a witness statement, a colleague's remark, an early-matter impression, or an inference stacked on another inference. It dates each source, checks whether anything since has confirmed or undercut it, and flags beliefs whose provenance is a single conversation or a first impression that hardened into fact. The output is a provenance table you can re-verify point by point.",
    whenToUse: "On matters that have run long enough for team lore to accumulate, or when a decision rests on things everyone knows that no one can currently cite.",
    exampleOutput: `DECISION: do not depose the Halvorsen CFO

BELIEF                          ORIGIN                       SINCE THEN
"CFO knows nothing on pricing"  partner remark, kickoff call  UNDERCUT — CFO
                                (May 2025, no source doc)     cc'd on 3 pricing
                                                              threads in rolling
                                                              production (Jun 2026)
"deposition would provoke a     inference from their conduct  no new evidence
 counter-notice for our CEO"    in a prior matter             either way
"budget will not cover it"      Feb budget                    STALE — revised
                                                              budget added deps

VERDICT: two of three supporting beliefs are undercut or stale.
Re-decide with the June production in front of you.`,
    status: "shipped",
  },
  {
    id: "risk-appetite-trifurcation",
    folder: "decision-quality",
    title: "Risk Appetite Trifurcation",
    oneLiner: "Splits every recommendation into three risk postures so the client chooses the appetite, not you.",
    whatItDoes: "Restructures a single-track recommendation into three internally consistent postures — protective, balanced, and aggressive — each with its own concrete actions, cost range, downside exposure, and the client profile it fits. It checks each posture for coherence, catching the common failure of an aggressive strategy carrying a protective budget, and states what new information would justify moving between postures. The lawyer's own recommendation is stated separately, after the client can see the full menu.",
    whenToUse: "When advising a client on a consequential fork — settle versus fight, notice versus wait, cure versus contest — and you notice the draft advice quietly embeds your risk tolerance instead of theirs.",
    exampleOutput: `DECISION: response to the indemnification demand under the Crestline MSA

PROTECTIVE   tender defense under reservation; open coverage dialogue
  cost: low near-term / caps at policy retention
  exposure: precedent for future tenders on sister contracts
  fits: client prioritizing the ongoing commercial relationship

BALANCED     reject demand, offer capped cost-sharing without admission
  cost: moderate; one negotiation cycle
  exposure: demand escalates to suit (~1 in 3 by your ledger history)
  fits: client with leverage and appetite for one round of friction

AGGRESSIVE   reject; file declaratory action in the contract forum first
  cost: high; committed litigation spend
  exposure: relationship ends; counterclaim risk
  fits: client already planning to exit the relationship

MOVE TRIGGER: if their Q3 audit letter names the dispute, protective
and balanced converge — revisit then.
COUNSEL'S VIEW (stated last): balanced.`,
    status: "draft",
  },
  {
    id: "stopping-point-audit",
    folder: "decision-quality",
    title: "Stopping-Point Audit",
    oneLiner: "Tells you whether more research, drafting, or discovery is still buying anything.",
    whatItDoes: "Examines a workstream you suspect has passed its point of diminishing returns and measures what the recent effort actually changed: new authorities that altered the analysis, documents that shifted the theory, edits that changed meaning rather than wording. It compares the trailing yield against the cost of continuing and the deadline pressure of everything else in the queue, then gives a stop, continue, or redirect call with the specific evidence for it. A stop call comes with a one-paragraph record of why stopping was defensible, written for the file.",
    whenToUse: "When research keeps finding variations of the same holding, when a brief is on its ninth revision, or when a document review's hit rate has fallen but no one wants to be the person who called it.",
    exampleOutput: `WORKSTREAM: research on enforceability of the Wasatch SPA earnout clause
  hours 1-6:   4 authorities changed the draft analysis
  hours 7-12:  1 authority added (footnote-level); 3 duplicative
  hours 13-16: 0 changes to analysis; 2 duplicative

TRAILING YIELD: ~0 analysis-changing finds per hour over last 4 hours
QUEUE PRESSURE: opposition due in 9 days; damages section unstarted

CALL: STOP. Redirect remaining research budget to the damages section.
FILE NOTE: research concluded after three consecutive hours produced
no authority altering the analysis; coverage included the governing
jurisdiction and both adjacent ones. Reopen only if opposing brief
cites outside that set.`,
    status: "shipped",
  },
  {
    id: "disconfirming-standard",
    folder: "decision-quality",
    title: "Disconfirming Standard",
    oneLiner: "Makes you state in advance what evidence would change your mind, then checks whether it showed up.",
    whatItDoes: "At the moment you adopt a position — a case theory, a witness credibility read, a valuation — it requires you to write the disconfirmation standard: the specific evidence that, if it appeared, would obligate you to revise. The standard is logged with a date, and at each review interval the skill checks incoming material against it and reports matches, near-misses, and whether the standard has been quietly weakened since it was written. Positions with no statable disconfirmation standard get flagged as beliefs held for reasons other than evidence.",
    whenToUse: "When adopting any position you expect to defend for months, and at review points when new discovery has arrived and you want an honest check on whether it should have moved you.",
    exampleOutput: `POSITION (logged 2026-04-10): Reyes is a credible narrator of the
March negotiation and will hold up at deposition.

DISCONFIRMATION STANDARD (as written 2026-04-10):
  D1. any contemporaneous document contradicting her timeline
  D2. a second witness placing her outside the March 14 meeting
  D3. inconsistency between her interview memo and sworn testimony

CHECK — rolling production through 2026-07-20:
  D1: NEAR-MISS. Calendar invite shows the meeting moved to Mar 15;
      her timeline says Mar 14. She may simply misremember the date —
      but the standard says "contradicting her timeline." It does.
  D2: no match.   D3: not yet testable.

DRIFT CHECK: no edits to the standard since logging. OK.
OBLIGATION: revise position or document why the D1 hit is immaterial.
Silence is not an option the standard allows.`,
    status: "shipped",
  },
]
