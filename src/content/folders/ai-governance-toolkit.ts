import type { Skill } from '../types'
import templateMd from '../skillmd/ai-governance-practice-profile-template.md?raw'
import coldStartMd from '../skillmd/cold-start-interview.md?raw'
import customizeMd from '../skillmd/customize.md?raw'
import triageMd from '../skillmd/use-case-triage.md?raw'
import aiaGenMd from '../skillmd/aia-generation.md?raw'
import vendorReviewMd from '../skillmd/vendor-ai-review.md?raw'
import regGapMd from '../skillmd/reg-gap-analysis.md?raw'
import inventoryMd from '../skillmd/ai-inventory.md?raw'
import policyStarterMd from '../skillmd/policy-starter.md?raw'
import policyMonitorMd from '../skillmd/policy-monitor.md?raw'

export const skills: Skill[] = [
  {
    id: "ai-governance-practice-profile-template",
    folder: "ai-governance-toolkit",
    title: "Practice Profile (template)",
    oneLiner: "The knowledge document every skill in this toolkit reads before doing substantive work, shown with its blanks.",
    whatItDoes: "The configuration for the whole toolkit: company profile, use-case registry with red lines and governance tiers, per-system inventory pointers, impact-assessment house style, vendor requirements, policy commitments, escalation paths, and shared guardrails on citations and decision posture. Skills stop and ask for setup rather than proceed on placeholder configuration; the cold-start interview writes the filled-in version that replaces this template in the Project's knowledge.",
    whenToUse: "It lives in Project knowledge rather than being invoked. Read it to see what the toolkit knows about a practice and what the cold-start interview will ask for.",
    exampleOutput: `## Use case registry
[PLACEHOLDER — approved / conditional / not approved, per use case]

### Red lines
[PLACEHOLDER — the uses this practice will not approve, stated plainly]

Rule 2: if this document still contains [PLACEHOLDER] markers, STOP
before doing substantive work and offer the cold-start interview.
Do NOT proceed on placeholder or default configuration.`,
    status: "shipped",
    skillMd: templateMd,
  },
  {
    id: "cold-start-interview",
    folder: "ai-governance-toolkit",
    title: "Cold-Start Interview",
    oneLiner: "A 10–15 minute interview that learns the practice and writes the profile every other skill depends on.",
    whatItDoes: "Walks through the practice (company profile, AI footprint, use-case registry, red lines, governance tiers, house style, vendor positions, escalation), reading seed documents where they exist — the AI policy, a past impact assessment, key vendor agreements — and interviewing only for the gaps. It writes the completed AI Governance Practice Profile for the Project's knowledge, replacing the template. Quick and full modes, and it can be re-run when the practice changes shape.",
    whenToUse: "First use of the toolkit, whenever the profile still contains placeholder markers, or when enough has changed that single-field edits no longer fit.",
    exampleOutput: `Setup check: "AI Governance Practice Profile" contains
[PLACEHOLDER] markers -> running cold-start.

Quick mode (seed docs do the work) or full interview?
> quick
Reading: AI-Usage-Policy.pdf, AIA-2025-hiring.docx, vendor DPA ...
Extracted: 7 registry entries, 3 red lines, escalation chain.
Still needed from you: risk posture; the one automatic-no
vendor term.
-> writes the filled profile; replace the template in Project
   knowledge with this version.`,
    status: "shipped",
    skillMd: coldStartMd,
  },
  {
    id: "customize",
    folder: "ai-governance-toolkit",
    title: "Customize",
    oneLiner: "Change one thing in the practice profile without re-running the whole interview.",
    whatItDoes: "Guided single-field edits to the Practice Profile: risk posture, escalation contacts, registry entries, vendor positions, policy commitments, house style. It shows the current value, takes the new one, and outputs the updated section to save back. It never silently rewrites sections that weren't asked about.",
    whenToUse: "Any time one standing fact moves: update my profile, add this to the registry, our GC changed.",
    exampleOutput: `> add a red line: no AI-generated performance reviews

Current red lines (3): [listed]
Proposed entry: "AI-generated content in performance evaluations —
not approved; no exceptions without GC sign-off."

Updated section follows — replace "### Red lines" in the Practice
Profile document with this text. Nothing else changed.`,
    status: "shipped",
    skillMd: customizeMd,
  },
  {
    id: "use-case-triage",
    folder: "ai-governance-toolkit",
    title: "Use-Case Triage",
    oneLiner: "Classifies a proposed AI use case against the registry — approved, conditional, or not approved — with conditions and next steps.",
    whatItDoes: "Pins the use case down first (what the AI actually does, who it acts on, whether a human reviews output, which vendor), then checks the registry: direct matches apply, near matches get flagged, and anything unregistered defaults to conditional pending an impact assessment instead of a guess. Verdicts carry the required conditions and a next-steps decision tree; batch mode triages a list at once.",
    whenToUse: "The front door for new AI use, before anything is built or bought: can we use AI for X, is this approved.",
    exampleOutput: `USE CASE: AI-drafted replies to customer support tickets
Registry:  near match — "AI-assisted internal drafting" (approved)
Verdict:   CONDITIONAL — external-facing output is outside the
           registered scope
Conditions: a human sends every message; disclosure line in the
            signature; vendor from the approved list
Next step: run the impact assessment; a registry entry will be
           proposed from the result.`,
    status: "shipped",
    skillMd: triageMd,
  },
  {
    id: "aia-generation",
    folder: "ai-governance-toolkit",
    title: "AIA Generation",
    oneLiner: "Runs an AI impact assessment in the practice's own house style, learned from the seed assessment.",
    whatItDoes: "Structured intake, risk analysis, regulatory classification per regime in scope, a consistency diff against the firm's own AI policy, and a recommendation with owned, dated conditions. The document follows the house-style structure learned from the seed assessment in the profile, so output looks like the practice's assessments rather than a generic form.",
    whenToUse: "Run an AIA, assess this AI use case, or the follow-on when triage comes back conditional.",
    exampleOutput: `AIA-2026-014 — resume screening assistant   (house style: seed v2)

RECOMMENDATION: APPROVED WITH CONDITIONS
  C1  named human reviewer for adverse outcomes  owner: HR   due: Sep 15
  C2  quarterly accuracy report                  owner: eng  due: Nov 30

Policy diff: policy s4 implies human oversight — C1 aligns.
No policy line covers vendor model changes -> flagged for the
policy monitor.`,
    status: "shipped",
    skillMd: aiaGenMd,
  },
  {
    id: "vendor-ai-review",
    folder: "ai-governance-toolkit",
    title: "Vendor AI Review",
    oneLiner: "Reviews vendor AI terms against the profile's governance positions and drafts the redlines.",
    whatItDoes: "Reads an AI addendum, agreement, or terms-of-service AI provisions against the vendor requirements in the Practice Profile — training on data, liability for outputs, model change notice, policy consistency — and flags each term with the specific gap and proposed redline language. This is the general-purpose ancestor of the client-adapted Vendor AI Terms Review in the AI Governance folder.",
    whenToUse: "The vendor sent an AI addendum, check these terms, what did we actually agree to with this vendor.",
    exampleOutput: `MODEL CHANGES                                      [SIGNIFICANT]
Vendor says:   may substitute underlying models without notice (s7)
Profile says:  30 days written notice for material model changes
Redline:       s7, add: "Provider shall give thirty (30) days'
               written notice before any change of underlying
               model that materially affects outputs."`,
    status: "shipped",
    skillMd: vendorReviewMd,
  },
  {
    id: "reg-gap-analysis",
    folder: "ai-governance-toolkit",
    title: "Reg Gap Analysis",
    oneLiner: "Diffs a new AI regulation or guidance against the practice's posture: gaps, priorities, remediation with owners and deadlines.",
    whatItDoes: "Scopes whether the regulation reaches the practice at all, extracts its requirements, and diffs them against the profile and the saved assessments. The output is a prioritized gap list and a remediation plan with owners and deadlines, alongside what is already covered. The general version of the client-adapted AI Regulatory Gap Analysis.",
    whenToUse: "Does the Colorado AI Act reach us, new reg just dropped, or pasted regulatory text after an enforcement action clarifies a threshold.",
    exampleOutput: `Colorado AI Act — applicability: YES (deployer; consequential
decisions in hiring)

Gaps: 2 required · 1 advisable · 4 already covered
REQUIRED  impact assessment per system in scope    owner: legal
          pre-use notice to affected consumers     owner: product
ADVISABLE appeal-path language in the AI policy    owner: legal
Deadline anchor: enforcement date [verify]`,
    status: "shipped",
    skillMd: regGapMd,
  },
  {
    id: "ai-inventory",
    folder: "ai-governance-toolkit",
    title: "AI Inventory",
    oneLiner: "Per-system EU AI Act register: role and risk tier assessed per system, never per company.",
    whatItDoes: "One record per AI system with the role occupied for that system (provider, deployer, importer, distributor, authorized representative, product manufacturer) and its risk tier (prohibited through minimal, GPAI, GPAI with systemic risk), each carrying a stated basis. A single organization can be provider of one system and deployer of another; a company-level label produces wrong answers, which is why this register exists.",
    whenToUse: "Add an AI system, what systems do we have, are we a provider or a deployer for this one, which tier does it fall into.",
    exampleOutput: `| sys-004 | Meeting summarizer | deployer | minimal | 2026-11-01 |
Role basis: procured SaaS, no substantial modification [verify]
Tier basis: no Annex III category reached; transparency duty only

Register: 6 systems · 1 high-risk · 2 due for review this quarter`,
    status: "shipped",
    skillMd: inventoryMd,
  },
  {
    id: "policy-starter",
    folder: "ai-governance-toolkit",
    title: "Policy Starter",
    oneLiner: "Drafts a first-cut firm AI usage policy from published model policies, adapted to the practice profile.",
    whatItDoes: "Runs a scope interview, sources published model policies, and synthesizes a draft AI usage policy adapted to the practice's actual footprint, tools, and red lines. The output is explicitly a draft for attorney review and adoption: it cites its sources and marks the judgment calls for the attorney instead of deciding them.",
    whenToUse: "The firm has no AI policy yet and needs a defensible starting point: we need an AI policy, draft a GenAI policy.",
    exampleOutput: `DRAFT — AI Usage Policy v0.1   (for attorney review, not adoption)
Sourced from: 3 published model policies [each cited]
Adapted to profile: red lines (s3); approved-tools table from the
registry; escalation per profile

Marked for your call:
[J1] disclosure threshold for client-facing AI output
[J2] personal AI accounts: banned or discouraged`,
    status: "shipped",
    skillMd: policyStarterMd,
  },
  {
    id: "policy-monitor",
    folder: "ai-governance-toolkit",
    title: "Policy Monitor",
    oneLiner: "Sweeps saved assessments and reviews for drift between what the AI policy says and what practice now does.",
    whatItDoes: "Reads the saved AIAs, triage results, and vendor reviews in Project knowledge and flags where practice has moved past the policy: unregistered use cases, conditions that imply policy commitments the policy never made, vendors the policy doesn't cover. Gaps come back as required or advisable proposed updates, and the sweep stamp only rolls forward after a human acknowledges the results, so an unreviewed sweep can't silently suppress the next one.",
    whenToUse: "On a recurring reminder as the standing sweep, or directly: does our policy cover this before starting a new AI practice.",
    exampleOutput: `Sweep: 4 saved documents found in Project knowledge; all 4 swept
(new since last sweep 2026-06-01)

REQUIRED   policy is silent on automated external messages —
           AIA-012 approved one with conditions; needs a section
ADVISABLE  two vendor reviews accepted 14-day model-change notice;
           policy says 30 — align or document the fallback

Awaiting acknowledgment before the sweep stamp updates.`,
    status: "shipped",
    skillMd: policyMonitorMd,
  },
]
