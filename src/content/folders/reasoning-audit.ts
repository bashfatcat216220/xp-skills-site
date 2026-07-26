import type { Skill } from '../types'

export const skills: Skill[] = [
  {
    id: "anchor-trace",
    folder: "reasoning-audit",
    title: "Anchor Trace",
    oneLiner: "Finds the first number or framing that entered an analysis and shows everything downstream that still leans on it.",
    whatItDoes: "Claude reads a memo, valuation, or negotiation plan and identifies the earliest quantitative or framing commitment — an opening demand, an early damages estimate, opposing counsel's characterization. It then traces every later judgment that moved toward that anchor and marks each one with the distance it would need to travel if the anchor were removed. The output is a dependency chain, not a rewrite.",
    whenToUse: "Before a mediation or settlement discussion where the first number on the table was not yours, or when reviewing an analysis that has been through several drafts and you suspect the original framing never got re-examined.",
    exampleOutput: `ANCHOR TRACE — Halvorsen settlement memo (draft 4)
anchor identified: "$2.1M exposure" (draft 1, para 2, source: client's initial estimate)
downstream dependencies:
  para 6   reserve recommendation ($1.6M)      distance from anchor: -24%
  para 9   "reasonable range" ($1.4M–$1.9M)    both bounds below anchor, neither derived independently
  para 12  mediator brief demand ($1.95M)      stated as "slight discount to exposure"
independent derivations found: 0 of 3
note: no draft re-computes exposure from the damages model in Ex. C ($1.1M–$2.8M).
recommendation: re-derive para 6 from Ex. C before the reserve goes to the client.`,
    status: "shipped",
  },
  {
    id: "conclusion-first-detector",
    folder: "reasoning-audit",
    title: "Conclusion-First Detector",
    oneLiner: "Detects when a memo's reasoning was written backward from a predetermined conclusion.",
    whatItDoes: "Claude examines the structure of an analysis for the signatures of backward reasoning: counterarguments introduced only to be dismissed in one sentence, evidence weighted by which side it supports rather than its reliability, and qualifiers that thin out as the memo approaches its recommendation. It reports each signature with the specific passage, and states whether the conclusion could survive if the weakest supporting step were removed.",
    whenToUse: "When reviewing an opinion letter or internal memo where the requesting party had an obvious preferred answer, including your own drafts written under client pressure.",
    exampleOutput: `CONCLUSION-FIRST SIGNATURES — Crestline indemnity opinion
1. asymmetric treatment (para 8)
   pro-coverage authority: 3 paragraphs of analysis
   contra authority: "distinguishable on its facts" — no facts given
2. vanishing qualifiers
   para 3: "may arguably support"  ->  para 11: "clearly supports"
   nothing between para 3 and 11 adds new support
3. load-bearing weak step (para 9)
   conclusion requires reading "arising from" broadly; memo assumes it, does not argue it
   if para 9 removed: conclusion does not follow
verdict: structure consistent with conclusion-first drafting. 3 signatures, 1 load-bearing.`,
    status: "shipped",
  },
  {
    id: "analogy-integrity-check",
    folder: "reasoning-audit",
    title: "Analogy Integrity Check",
    oneLiner: "Tests whether an analogy in your argument actually holds on the features doing the work.",
    whatItDoes: "Claude isolates each analogy in a brief or memo, identifies which features of the source situation the argument actually depends on, and checks whether the target situation shares them. Surface similarities that carry no logical weight are separated from the load-bearing ones, and each load-bearing feature gets a holds / breaks / unverified rating.",
    whenToUse: "Before relying on an analogy in a brief, or when opposing counsel's argument turns on a comparison that feels wrong but you cannot yet say why.",
    exampleOutput: `ANALOGY — "the Meridian escrow is like a construction retainage"
load-bearing features:
  funds held by third party until condition met     HOLDS
  condition is objective completion milestone       BREAKS — release here requires
                                                    mutual written instruction, not milestone
  holder owes duties to both sides                  UNVERIFIED — escrow agreement
                                                    silent on agent's duties to buyer
surface-only features (no logical weight): both involve staged payments; both common in the industry
assessment: analogy fails on the feature the argument needs most (objective trigger).
salvage: reframe around the third-party-custody feature only; drop the release mechanics.`,
    status: "shipped",
  },
  {
    id: "intuition-excavation",
    folder: "reasoning-audit",
    title: "Intuition Excavation",
    oneLiner: "Digs articulable reasons out of a gut reaction so you can test them instead of trusting them.",
    whatItDoes: "You tell Claude what your instinct says — this deal will blow up, this witness is lying, this clause is a trap — and Claude interviews you in short rounds to surface the observations feeding the instinct. Each excavated reason is written down as a checkable claim, sorted into verifiable now, verifiable with discovery, or not verifiable. The instinct itself is never treated as evidence.",
    whenToUse: "When your gut disagrees with your written analysis and you need to know which one to trust, or before escalating a concern to a client on the strength of a feeling.",
    exampleOutput: `INSTINCT: "Something is off about the Halvorsen inventory numbers."
excavated reasons (3 rounds):
  R1  Q3 write-down timing coincides with audit-firm change
      -> checkable now: engagement letters, board minutes           [VERIFIABLE NOW]
  R2  CFO answered inventory questions with revenue answers, twice
      -> checkable now: re-read 30(b)(6) transcript at 141:8, 203:2 [VERIFIABLE NOW]
  R3  "warehouse felt too empty on the site visit"
      -> no record support; would need count records                [DISCOVERY]
residue not excavated: general distrust of CFO (demeanor). Logged, not weighted.
next step: R1 and R2 are cheap to check. Instinct stands or falls on them.`,
    status: "draft",
  },
  {
    id: "certainty-gradient",
    folder: "reasoning-audit",
    title: "Certainty Gradient",
    oneLiner: "Maps every claim in a memo to its actual confidence level and flags where the prose overstates it.",
    whatItDoes: "Claude walks through an analysis claim by claim and assigns each one a confidence tier — settled, probable, contested, or assumed — based on the support actually cited, not the language used. It then diffs the assigned tier against the rhetorical register of the sentence and flags every place the prose is more certain than the support. The result is a gradient map you can use to soften, bolster, or caveat before the document leaves the building.",
    whenToUse: "Before an opinion letter, board presentation, or anything the client may later quote back to you as a guarantee.",
    exampleOutput: `CERTAINTY GRADIENT — Crestline MSA termination memo
claim                                      support tier   prose register   gap
notice was untimely under s.14.2           SETTLED        "clearly"        ok
untimeliness excuses our performance       CONTESTED      "therefore"      OVERSTATED
counterparty waived strict compliance      ASSUMED        "as they have    OVERSTATED
                                                          waived"
damages capped at fees paid                PROBABLE       "likely"         ok
2 of 4 claims overstated. Both overstatements sit in the paragraph the client
will forward to their board. Suggested edits attached inline.`,
    status: "shipped",
  },
  {
    id: "expertise-boundary-marker",
    folder: "reasoning-audit",
    title: "Expertise Boundary Marker",
    oneLiner: "Marks the exact sentences where an analysis crosses out of legal judgment into someone else's discipline.",
    whatItDoes: "Claude scans a work product for claims that are actually accounting, engineering, medical, actuarial, or industry-practice judgments wearing legal clothing. Each crossing is marked with the discipline it belongs to, whether the record contains a qualified source for it, and whether the legal conclusion survives if the borrowed claim is struck. It does the same audit on its own output.",
    whenToUse: "Before signing an expert-adjacent brief section, and whenever a memo asserts how an industry, technology, or financial instrument \"works\" without a cited source.",
    exampleOutput: `BOUNDARY CROSSINGS — Meridian summary judgment draft
1. p.4: "standard industry practice is to reconcile daily"
   discipline: securities operations   record source: none   survives if struck: NO
   fix: cite the Okafor expert report s.6, or cut and rely on the contract term alone
2. p.7: "the software could not have produced this log without manual edits"
   discipline: forensic computing      record source: Vance decl. para 12   survives: YES
3. p.11: "a reasonable reserve would have been 4-6%"
   discipline: accounting              record source: none   survives if struck: NO
2 unsupported crossings, both load-bearing. Do not file without expert cover for 1 and 3.`,
    status: "shipped",
  },
  {
    id: "advice-vs-preference",
    folder: "reasoning-audit",
    title: "Advice vs. Preference",
    oneLiner: "Separates what the law requires from what the advising lawyer happens to prefer.",
    whatItDoes: "Claude re-reads a recommendation and sorts each directive into three bins: compelled by law or the contract, prudent risk management with a stated basis, and drafter's taste. Taste items are not deleted — they are relabeled so the client can see which parts of the advice they are free to reject cheaply. Where a preference has been dressed up in mandatory language, both versions are shown side by side.",
    whenToUse: "Before sending advice to a sophisticated client who will push back on cost, or when reviewing a predecessor's advice to see how much of it was actually binding.",
    exampleOutput: `SORTED — recommendations in the Wexford vendor memo
COMPELLED (law/contract):
  - notice to insurer within 30 days (policy s.8; deadline is real)
ADVISED (basis stated):
  - suspend the integration until the audit closes (basis: s.12 termination
    trigger reads on continued use; risk is concrete but the client may accept it)
PREFERENCE (drafter's taste, relabeled):
  original: "The parties must execute a full amendment."
  relabeled: "A side letter would also work; drafter prefers amendments for the file."
  original: "Escalation to the board is required."
  relabeled: "No provision requires board escalation; this is a comfort measure."
client-facing takeaway: 1 hard deadline, 1 real risk decision, 2 optional formalities.`,
    status: "shipped",
  },
  {
    id: "motivated-reasoning-surface",
    folder: "reasoning-audit",
    title: "Motivated Reasoning Surface",
    oneLiner: "Surfaces the places where wanting a particular answer shaped how the evidence got read.",
    whatItDoes: "Claude first asks what outcome the author or client wanted, then re-reads the analysis looking for motivated patterns: favorable evidence accepted at face value while unfavorable evidence gets forensic scrutiny, alternative explanations that were never generated, and standards of proof that shift between sections. Each finding is paired with the neutral reading — what the same passage looks like to someone with no stake in the answer.",
    whenToUse: "On your own analysis before a major recommendation, or on an adversary's expert report where the retention itself supplies the motive.",
    exampleOutput: `MOTIVATED PATTERNS — plaintiff damages analysis (Halvorsen)
desired outcome (stated): losses attributable to the disclosure, not the market
1. asymmetric scrutiny
   comparable-company decline: dismissed via 3 methodological objections
   client's own projections: adopted without any of those objections applied
   neutral reading: the objections cut against both datasets or neither
2. ungenerated alternative
   supply disruption in the same quarter never modeled; appears in the
   client's own 10-Q risk factors
3. shifting standard
   s.2 requires "sole cause" from defendant; s.5 accepts "a substantial factor" for client
findings: 3 patterns. None is fatal alone; together they predict the rebuttal report.`,
    status: "shipped",
  },
]
