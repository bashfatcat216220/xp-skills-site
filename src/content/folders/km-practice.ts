import type { Skill } from '../types'
import kmFullAiLegalReviewMd from '../skillmd/km-full-ai-legal-review.md?raw'
import kmAiLegalAnalysisMd from '../skillmd/km-ai-legal-analysis.md?raw'
import kmAiContractReviewMd from '../skillmd/km-ai-contract-review.md?raw'
import kmDpvrMd from '../skillmd/km-dpvr.md?raw'
import kmPrivacyLegalAnalysisMd from '../skillmd/km-privacy-legal-analysis.md?raw'
import kmPrivacyContractReviewMd from '../skillmd/km-privacy-contract-review.md?raw'
import kmKnowledgeGatheringMd from '../skillmd/km-institutional-knowledge-gathering.md?raw'
import kmKnowledgeRetrievalMd from '../skillmd/km-institutional-knowledge-retrieval.md?raw'

export const skills: Skill[] = [
  {
    id: "km-full-ai-legal-review",
    folder: "km-practice",
    title: "KM Full AI Legal Review",
    oneLiner: "The complete review path for an AI system — triage, precedent, terms, classification, cover sheet — chained into one workflow whose product is an operating envelope, not an opinion.",
    whatItDoes: "Chains the KM skills into an eight-step workflow: intake and track triage (light, full, bucket, or scope change), precedent pull, document gathering, terms review, classification, cover-sheet drafting in the firm's standard form, a named-checks review before ship, and filing with conditions logged by owner and reassessment date. The output is a scope, a tier, conditions with owners, and escalation lines, recorded identically across reviewers so the portfolio stays comparable. Scope changes review the delta, restate the full envelope, and supersede the prior sheet explicitly; internal builds always get the provider analysis and full-track treatment.",
    whenToUse: "Whenever an AI system, tool, or feature needs review or approval: review this AI tool, a new cover sheet request, a scope change to a previously approved system, or an internal AI build — and for triaging which review track a matter needs.",
    exampleOutput: `Risk classification:  Limited risk
Explanation:          appropriately classified as limited risk
                      because the system generates synthetic
                      content without making or materially
                      influencing decisions about individuals
Conditions:           agent features disabled - [Client] IT
                      admin - reassess Jan. 2027
[Client] operator type: deployer
Out-of-scope uses:    employee evaluation; any public-facing
                      deployment — without additional legal
                      review
Supersedes:           none`,
    status: "shipped",
    skillMd: kmFullAiLegalReviewMd,
  },
  {
    id: "km-ai-legal-analysis",
    folder: "km-practice",
    title: "KM AI Legal Analysis",
    oneLiner: "Classifies an AI system under the EU AI Act and analogous regimes by answering the pivot question explicitly and walking the tier ladder with the enumerated lists actually walked.",
    whatItDoes: "Starts every classification from the specific intended use, answers the pivot question — does the system make, support, or materially influence decisions about individuals — and works down the ladder from prohibited to minimal, checking the enumerated lists rather than eliminating by feel. Determines the operator role with a stated test applied identically every time; where provider status is colorable, the matter gets flagged and both characterizations analyzed, because that boundary is expressly unsettled in firm practice. Conditions are first-class obligations with owners and reassessment dates, and the deployer standard controls attach with their basis tags.",
    whenToUse: "Classifying any AI system, determining deployer versus provider status, or answering what risk tier is this or can the client use this AI tool — even where AI is incidental to the main product. Runs with the reasoning method and alongside the contract review.",
    exampleOutput: `Pivot question: does the system make, support, or materially
influence decisions about individuals? No — outputs are draft
summaries a human reviews before any use.

1. Prohibited practices: enumerated list walked; none apply.
2. High risk: no enumerated category applies (list walked).
3. Transparency: chatbot interface — disclosure duty applies;
   users must be informed they are interacting with AI.
4. Tier: appropriately classified as limited risk because the
   system generates synthetic content via a conversational
   interface without individual-decision effect.

Operator role: deployer — uses the system under its own
authority; no development, modification, or white-labeling.`,
    status: "shipped",
    skillMd: kmAiLegalAnalysisMd,
  },
  {
    id: "km-ai-contract-review",
    folder: "km-practice",
    title: "KM AI Contract Review",
    oneLiner: "Extracts every AI-terms commitment together with its carve-outs, pin-cited and tagged — because a commitment with a carve-out is a different commitment.",
    whatItDoes: "Runs the AI-specific extraction checklist: training-use restrictions with their carve-outs captured in the same entry, indemnities together with their AI exclusions, liability caps and warranty disclaimers, unilateral-amendment rights, subprocessor regimes with the objection window's day count, and IP in inputs, outputs, and feedback. Commitments are tagged to a controlled vocabulary so index cards stay comparable across matters. Reliance on posted terms triggers its own discipline — version and dates recorded, monitoring recommended, and the no-train commitment's durability treated as a named risk rather than a settled fact. What was looked for and not found is stated.",
    whenToUse: "Reviewing any agreement, terms of use, DPA, or AI addendum for a product with AI features, drafting a cover sheet's key-provisions sections, or answering are these AI terms acceptable and what does the vendor commit to.",
    exampleOutput: `NO_TRAIN_CLIENT_DATA: Will not use [Client] content, including
  inputs and outputs, to train models (AI Terms, § 2.4).
TRAIN_CARVEOUT: except content flagged for trust and safety
  and user-submitted feedback (AI Terms, § 2.5) — extracted
  with the commitment; the service-improvement opt-out is
  default-on and must be exercised by the account admin.
IP_INDEMNITY_CARVEOUT: the general IP indemnity excludes
  AI-generated content (MSA, § 9.3).
Not found: deletion timeline for outputs post-termination.
Asks: extend no-train to subprocessors; written confirmation
  of the opt-out default.`,
    status: "shipped",
    skillMd: kmAiContractReviewMd,
  },
  {
    id: "km-dpvr",
    folder: "km-practice",
    title: "KM DPVR",
    oneLiner: "The end-to-end data privacy vendor review, producing three deliverables for three readers: the memo, the cutoff chart, and the checklist.",
    whatItDoes: "Runs a vendor privacy review down the same eight-step path every time — intake, precedent pull, document gathering, terms review, legal analysis, synthesis, pre-ship review, filing — chaining the KM privacy and AI skills rather than replacing them. The memo tells the decision-maker whether and on what conditions to proceed; the cutoff chart turns the legal conclusion into per-data-category operational rules with every cell sourced; the checklist records what was checked and found for the next reviewer. The three deliverable templates are marked [TEMPLATE]: the workflow spine is complete, but the forms get locked to the firm's standard forms from a sample DPVR rather than invented.",
    whenToUse: "Run a DPVR, vendor privacy review, review this vendor — any vendor whose product processes personal data and needs the full treatment rather than a single-document review.",
    exampleOutput: `CUTOFF CHART (excerpt) — published Jul. 21, 2026

Data category      Permitted?    Condition / source
Employee HR data   No            no DPA coverage for HR
                                 processing (DPA, § 1.2)
Customer contact   Yes           EU-hosted only; transfer
                                 mechanism in place (Addendum)
Support tickets    Conditional   no sensitive data in free
                                 text (memo, § 4)

Refresh triggers: material DPA amendment; subprocessor change
touching the data; the Mar. 2027 condition reassessment date.`,
    status: "shipped",
    skillMd: kmDpvrMd,
  },
  {
    id: "km-privacy-legal-analysis",
    folder: "km-practice",
    title: "KM Privacy Legal Analysis",
    oneLiner: "Structured privacy analysis — regimes, roles, lawful basis, transfers, ADMT — with every conclusion labeled legally required, defensible position, or governance choice.",
    whatItDoes: "Works an eight-step sequence from the facts that drive everything (what data, about whom, stored where) through regime mapping, role determination with the regime's stated test, lawful basis and purpose limitation, sensitive-data flags, cross-border transfers with mechanisms mapped, the ADMT overlay, and rights, retention, and security. Where the law is genuinely unsettled it gives the client a decision architecture — options with risk levels and mitigations — instead of a fictional bright line. This is a structural v1: the firm's standard positions and jurisdiction overlays are deliberately not filled in and get calibrated against the first live matter run through it.",
    whenToUse: "Any privacy or data protection question: can we collect, use, or share X, cross-border transfer questions, GDPR or state-law applicability, DSR and retention questions — including AI matters where personal data is processed.",
    exampleOutput: `Roles: [Client] is a controller for this deployment (determines
purposes and means); the vendor is a processor — the alternative
characterization is not colorable here.

Transfers: support access from the vendor's US team is a
transfer; standard contractual clauses are available. Likely
permissible with the measures listed below.

Unsettled: whether the de-identified analytics feed leaves
scope. Decision architecture:
  Option A - contractual de-identification standard
             (lower risk; raise it in negotiation)
  Option B - accept the vendor's label (defensible, not
             required; document as a governance choice)`,
    status: "shipped",
    skillMd: kmPrivacyLegalAnalysisMd,
  },
  {
    id: "km-privacy-contract-review",
    folder: "km-practice",
    title: "KM Privacy Contract Review",
    oneLiner: "A DPA review as an exercise in finding the exceptions: every commitment extracted with its qualifications, pin-cited, and compared against the firm's standard positions.",
    whatItDoes: "Extracts the privacy stack against a fixed checklist: processing scope and its purpose-expanding carve-outs, subprocessor regimes with the objection window's day count, transfer mechanisms, breach notification triggers and timelines, audit rights (genuine audit versus report-review), deletion with its backup exception, and whether data claims sit inside or outside the liability cap. Absence is a finding. The firm's standard positions and fallback ladders are marked [POSITION] and are not yet populated — they get captured from live matters and sign-off edits rather than invented, so comparisons currently name the open slot instead of applying a filled position.",
    whenToUse: "Reviewing a DPA or privacy terms, any vendor agreement involving personal data processing, is this DPA acceptable, what should we push back on — and inside every KM DPVR vendor review.",
    exampleOutput: `Breach notification: triggered on "confirmed" incident, not
  "becoming aware" (DPA, § 7.1); 72 hours from confirmation —
  the qualifier moves the clock. [POSITION: required trigger
  and timeline — not yet populated]
Subprocessors: general authorization; 14-day objection window
  (DPA, § 5.2); flow-down of obligations confirmed (§ 5.3).
Audit: report-review only — SOC 2 in lieu of audit (DPA, § 9).
Deletion: 30 days post-termination; backup exception of 12
  months with no stated protections (DPA, § 11) — flagged
  for negotiation.
Not found: cost allocation for DSR assistance.`,
    status: "shipped",
    skillMd: kmPrivacyContractReviewMd,
  },
  {
    id: "km-institutional-knowledge-gathering",
    folder: "km-practice",
    title: "KM Knowledge Gathering",
    oneLiner: "Turns matter documents into institutional memory: a normalized index card for every document over a living master index, drafted by Claude and confirmed by a human.",
    whatItDoes: "Captures operative documents, memos, charts, approvals, and correspondence into a two-layer library: index cards (normalized, comparable, fast to read) over source documents (authoritative, never edited). Every card shares one core schema — parties, reliance mode, cited key terms, verb-first obligations, conditions with owners and reassessment dates, explicit supersession links — with domain extensions for AI reviews and privacy matters. Consistency checks run before filing: contradictions with existing cards, position changes needing supersession links, and conditions without owners are flagged, never resolved silently, and a human confirms each card before it enters the library.",
    whenToUse: "Whenever a document is added to a project — add this to the library, make an index card, update the master index — when a new matter project is stood up, or whenever work reveals a document with no card or a stale index entry.",
    exampleOutput: `matter: [Client] AI Practice      card_date: 2026-07-21
source_file: vendor-ai-terms-2026-06.pdf
parties: [Client] / [Vendor]
reliance: posted terms — unilateral-amendment flag set
key_terms:
  - NO_TRAIN_CLIENT_DATA (AI Terms, § 2.4) with
    TRAIN_CARVEOUT (§ 2.5) — captured together
conditions:
  - agent features disabled · owner: [Client] IT admin ·
    reassess Jan. 2027
supersedes: card of 2025-11-03 (same tool, prior scope)
status: current
confidence_notes: § 2.5 opt-out mechanism extracted
  heuristically — verify against source before relying`,
    status: "shipped",
    skillMd: kmKnowledgeGatheringMd,
  },
  {
    id: "km-institutional-knowledge-retrieval",
    folder: "km-practice",
    title: "KM Knowledge Retrieval",
    oneLiner: "Answers questions from the matter library by running a five-level research waterfall, every answer carrying its provenance, its date, and its currency.",
    whatItDoes: "Runs every substantive question down the same waterfall — core documents and index cards, later correspondence, OGC approval emails, the lead attorney's positions, other correspondence — and does not stop at the first hit, because later levels can supersede earlier ones. Every answer reports its source with pin cite and date, its currency after checking supersession links and the master index, and its confidence; conflicting sources are presented with dates rather than silently resolved, and an unsearchable level is reported as not available, never skipped. Questions the library cannot answer become pre-framed escalations: what was searched, what was found, the closest analogues, and the specific decision needed.",
    whenToUse: "Every substantive question inside a matter project — what did we say about X, do we have a position on Y, has this been reviewed before — and before answering anything from general knowledge, because the library may already hold the firm's answer.",
    exampleOutput: `Question: may support tickets containing EU personal data go
to the vendor's US support team?

Answer: yes, conditioned on no sensitive data in free text.
Source: cutoff chart, row 9, dated Mar. 3, 2026 (level 1).
Currency: an OGC approval email dated May 12, 2026 (level 3)
confirmed the approach; nothing later modifies it.
Supersession links checked — this is the current position.
Confidence: sources agree.
Consistency: the position predates the July escalation-trigger
update; no trigger is implicated — it still fits the framework.`,
    status: "shipped",
    skillMd: kmKnowledgeRetrievalMd,
  },
]
