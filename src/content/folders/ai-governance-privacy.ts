import type { Skill } from '../types'

export const skills: Skill[] = [
  {
    id: "ai-act-tier-walker",
    folder: "ai-governance-privacy",
    title: "AI Act Tier Walker",
    oneLiner: "Walks a concrete AI system through the EU AI Act's classification decision points and records the reasoning at each fork.",
    whatItDoes: "Interrogates a described AI system through the Act's classification sequence in order: prohibited practices, Annex III high-risk categories and their carve-outs, transparency-tier triggers, and GPAI questions where relevant, together with the client's role for that system (provider, deployer, importer, distributor). At each decision point it records the answer, the facts it relied on, and the facts that would flip the answer. The output is a classification with a visible audit trail rather than a bare tier label, and it separates settled conclusions from ones that turn on unresolved facts.",
    whenToUse: "When a client asks whether the Act applies to a system and at what tier — at product design, at procurement, or when a vendor's self-classification needs checking.",
    exampleOutput: `SYSTEM: Novatek HR screening tool (deployer role — client licenses it)

STEP 1 — prohibited practices: NO
  no social scoring, no emotion recognition in workplace
  FLIP FACT: planned "engagement sentiment" module would change this

STEP 2 — Annex III high-risk: YES (preliminary)
  employment category — screening and filtering of applications
  carve-out (narrow procedural task): NOT AVAILABLE — tool ranks
  candidates, does not merely format applications

STEP 3 — role obligations: deployer set
  human oversight, input-data relevance, log retention,
  worker notification before deployment

CLASSIFICATION: HIGH-RISK, deployer obligations
OPEN FACT: whether vendor's fine-tuning on client data shifts the
client toward provider status — resolve before go-live.`,
    status: "shipped",
  },
  {
    id: "dpia-interrogator",
    folder: "ai-governance-privacy",
    title: "DPIA Interrogator",
    oneLiner: "Cross-examines a draft DPIA the way a supervisory authority would, before it leaves the building.",
    whatItDoes: "Reads a completed or draft DPIA and attacks it rather than summarizing it: unsupported necessity claims, risks described but never scored, mitigations that restate the risk, residual-risk conclusions that do not follow from the analysis, and processing described elsewhere in the project documents but missing from the assessment. Each finding cites the DPIA section it targets and states what an authority reviewing under Art. 35 and 36 GDPR would likely ask. It ends with a judgment on whether the residual risk as documented would trigger prior consultation.",
    whenToUse: "Before a DPIA is finalized and signed, or when inheriting a DPIA someone else wrote and deciding whether it can be relied on for a new deployment.",
    exampleOutput: `DPIA UNDER REVIEW: Corvantis fraud-scoring rollout, v0.9

FINDING 1 (s.3, necessity) — SEVERITY: high
  claim: "profiling is necessary to detect fraud"
  problem: no comparison against the rules-based system it
  replaces; necessity asserted, not demonstrated
  authority would ask: what does profiling add over the
  existing control, in measured terms

FINDING 2 (s.5, mitigations) — SEVERITY: medium
  "risk of inaccurate scores" mitigated by "regular review"
  problem: no owner, no cadence, no threshold — this is the
  risk restated as a plan

FINDING 3 (scope gap) — SEVERITY: high
  vendor architecture doc shows scores shared with the
  collections team; DPIA covers fraud team only

RESIDUAL RISK CALL: as drafted, s.6 concludes "low" without
support — a reviewer could not reproduce that conclusion.
Prior-consultation question cannot be answered until Finding 1
is fixed.`,
    status: "shipped",
  },
  {
    id: "lia-adversarial-balancer",
    folder: "ai-governance-privacy",
    title: "LIA Adversarial Balancer",
    oneLiner: "Runs the legitimate-interest balancing test with a genuinely adversarial data-subject side instead of a compliant one.",
    whatItDoes: "Structures the three-stage legitimate-interest assessment — purpose, necessity, balancing — but staffs the data-subject side of the balance as an opponent: it generates the strongest reasonable-expectations, intrusiveness, and less-intrusive-means arguments against the processing before weighing them. Where the controller side wins, the output says why the counterarguments fail; where it loses, the output says so plainly and identifies what safeguards or scope reductions would change the result. The finished LIA reads as a record of a contest, not a form filled in to a predetermined answer.",
    whenToUse: "Whenever Art. 6(1)(f) is the proposed basis for anything non-trivial — enrichment, monitoring, model training on customer data — and especially when the business has already decided it wants the answer to be yes.",
    exampleOutput: `LIA: Meridian Analytics — training churn model on customer support transcripts

STAGE 1 (purpose): legitimate — commercial interest in retention. PASS
STAGE 2 (necessity): transcripts vs. structured ticket metadata —
  metadata alone tested at materially similar accuracy in the
  vendor pilot. NECESSITY WEAK for full transcripts.

STAGE 3 (balance) — data-subject side, strongest form:
  A1: customers contacting support do not reasonably expect
      their complaints to train a model scoring them
  A2: transcripts contain unsolicited special-category
      disclosures (health, finances) with no filtering step
  A3: less intrusive means exist and were tested (see Stage 2)

CONTROLLER REBUTTALS: A1 partially met by notice update;
A2 unmet; A3 unmet.

RESULT: FAILS as scoped. Passes if restricted to ticket
metadata plus transcript-level special-category filtering,
with notice updated before training begins.`,
    status: "shipped",
  },
  {
    id: "solely-automated-threshold-test",
    folder: "ai-governance-privacy",
    title: "Solely-Automated Threshold Test",
    oneLiner: "Tests whether a claimed human-in-the-loop actually takes a decision out of Art. 22 GDPR, using the process as it runs rather than as it is drawn.",
    whatItDoes: "Examines a decision pipeline end to end and tests the human involvement against the factors that matter: authority to change the outcome, access to information beyond the model output, time per decision, override rates in practice, and what happens to a reviewer who overrides too often. It distinguishes meaningful review from rubber-stamping on the facts, then assesses legal or similarly significant effect for the decisions at issue. The output is a position on whether Art. 22 is engaged, the facts doing the work, and what would have to change operationally for the human involvement to count.",
    whenToUse: "When a client says \"there's always a human in the loop\" and the loop has never been inspected, or when designing review steps for a scoring, screening, or eligibility system before launch.",
    exampleOutput: `PIPELINE: Halewood Credit — small-business loan pre-screen

DECISION EFFECT: refusal of credit — similarly significant. YES
HUMAN INVOLVEMENT AUDIT
  authority to override:    formally yes
  information beyond score: application PDF available, but
                            reviewer UI shows score + top-3
                            factors only; PDF is two clicks away
  time per file:            median 40 seconds (queue metrics)
  override rate:            0.8% over last quarter
  consequence of override:  overrides flagged to team lead
                            for "consistency review"

ASSESSMENT: involvement is not meaningful as operated —
review functions as ratification. Art. 22 ENGAGED on
current facts.

TO CHANGE THE RESULT: surface full file by default, remove
override flagging, set a minimum review time, and track that
overrides occur and survive. Re-test 90 days after changes.`,
    status: "shipped",
  },
  {
    id: "vendor-ai-clause-auditor",
    folder: "ai-governance-privacy",
    title: "Vendor AI Clause Auditor",
    oneLiner: "Audits a vendor's AI terms for the clauses that quietly matter — training rights, model changes, output ownership, regulatory pass-through.",
    whatItDoes: "Reads a vendor agreement, AI addendum, or incorporated ToS and extracts every provision touching AI-specific risk: rights to train on customer data and whether opt-outs actually reach fine-tuning and retention, unilateral model-change rights, output ownership and indemnity scope, accuracy disclaimers, and whether EU AI Act and GDPR obligations are passed through or stranded with the customer. Each clause is quoted, located, and marked against a stated baseline position, with silence treated as a finding — the audit lists the protections the document never mentions.",
    whenToUse: "Before signing or renewing any agreement with an AI component, or when a vendor pushes an updated AI addendum and asks for signature by Friday.",
    exampleOutput: `AUDIT: Brightgate Labs MSA + AI Addendum v3 (baseline: standard buy-side positions)

TRAINING ON CUSTOMER DATA — s.4.2, addendum
  quoted: "may use Customer Content to improve the Services"
  gap: "improve" undefined; opt-out (s.4.3) covers foundation
  training but is silent on fine-tuning and eval sets
  position: RED — narrow to exclude all model training absent
  written consent

MODEL CHANGES — s.7.1
  vendor may "modify or substitute underlying models" without
  notice. RED for a system feeding a regulated workflow —
  require notice + right to test before substitution

OUTPUT OWNERSHIP — s.5: assigned to customer. GREEN
IP INDEMNITY — s.11: excludes claims arising from model outputs.
  AMBER — carve-back for infringing outputs

SILENT ON: AI Act role allocation, incident notification for
model faults, audit rights over training-data representations.
3 RED / 1 AMBER / 1 GREEN / 3 ABSENT — do not sign as drafted.`,
    status: "draft",
  },
]
