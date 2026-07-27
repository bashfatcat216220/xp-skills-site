import type { Skill } from '../types'
import clientProfileMd from '../skillmd/client-ai-governance-profile.md?raw'
import aiaMd from '../skillmd/ai-impact-assessment.md?raw'
import vendorMd from '../skillmd/vendor-ai-terms-review.md?raw'
import gapMd from '../skillmd/ai-reg-gap-analysis.md?raw'
import inventoryMd from '../skillmd/ai-system-inventory.md?raw'

export const skills: Skill[] = [
  {
    id: "client-ai-governance-profile",
    folder: "ai-governance",
    title: "Client AI Governance Profile",
    oneLiner: "The standing client brief every other skill reads first: footprint, red lines, vendor positions, escalation path.",
    whatItDoes: "Holds the stable facts of the client relationship: regulatory footprint, use-case registry, red lines, governance tiers, vendor negotiating positions, policy commitments, and escalation contacts, plus shared guardrails on citation provenance, currency, and privilege. The other four AI-governance skills load it before doing anything, so every answer is calibrated to this client instead of a generic one.",
    whenToUse: "It runs in the background: any question touching the client's AI, data, vendors, or regulatory exposure reads this first. It gets updated when a standing fact changes, such as a new red line, a new jurisdiction, or a position the client has now taken.",
    exampleOutput: `## 7. Vendor AI positions
Training on client data:  standard NO; fallback: de-identified,
                          aggregate only, opt-out honored
Liability for AI outputs: standard: vendor indemnifies IP claims;
                          automatic NO: unbounded client indemnity
Model change notice:      standard: 30 days written; fallback: 14

Escalation: outside standard, inside fallback -> flag in the memo;
            outside fallback -> [GC] before signature`,
    status: "shipped",
    skillMd: clientProfileMd,
  },
  {
    id: "ai-impact-assessment",
    folder: "ai-governance",
    title: "AI Impact Assessment",
    oneLiner: "Runs a full AIA: structured intake, risk analysis, per-regime classification, policy diff, recommendation with conditions.",
    whatItDoes: "Walks an AI system through a structured assessment: what it does, how it reaches outputs, who is harmed if it is wrong, and what oversight exists. Then it classifies the system under each regime in the client's footprint with cited authority, diffs it against the client's own policy, and closes with a recommendation. Every condition gets an owner and a date, and every citation carries a verify tag instead of false confidence.",
    whenToUse: "When a proposed or live AI system needs a documented decision: run an AIA, is this system high-risk, or when triage or a gap analysis comes back conditional and a formal assessment is the next step.",
    exampleOutput: `9. RECOMMENDATION: APPROVED WITH CONDITIONS
   C1  Named human reviewer for adverse outcomes   owner: HR ops    due: Sep 15
   C2  Vendor terms re-reviewed before renewal     owner: counsel   due: Oct 1
   C3  Accuracy monitoring reported quarterly      owner: eng lead  due: Nov 30

   Privacy assessment required? YES [verify threshold]
   Sign-off: [attorney], [date]`,
    status: "shipped",
    skillMd: aiaMd,
  },
  {
    id: "vendor-ai-terms-review",
    folder: "ai-governance",
    title: "Vendor AI Terms Review",
    oneLiner: "Reviews vendor AI terms against the client's positions and produces surgical redlines, term by term.",
    whatItDoes: "Maps the vendor stack first, including the upstream model provider, then reads the terms against the client's standard positions and fallbacks: training on inputs, liability for outputs, model change notice, flow-down. Each term gets a severity calibrated to the client's own scale, the specific gap, and redline language at the smallest granularity that reaches the position. Word before phrase, phrase before sentence.",
    whenToUse: "When a vendor sends an AI addendum or updated terms, when the client asks what it actually agreed to, or when an impact assessment surfaces a vendor whose terms nobody has read.",
    exampleOutput: `TRAINING ON CLIENT INPUTS                              [CRITICAL]
Vendor says:     s4.2 — may use Customer Content to "improve
                 the services"
Client position: no training on client data; fallback:
                 de-identified only, opt-in
Gap:             "improve" covers model training; no opt-out
Fix:             s4.2, add: "excluding training or fine-tuning of
                 any machine-learning model, except on de-identified
                 data with Customer's written opt-in"`,
    status: "shipped",
    skillMd: vendorMd,
  },
  {
    id: "ai-reg-gap-analysis",
    folder: "ai-governance",
    title: "AI Regulatory Gap Analysis",
    oneLiner: "Diffs a new AI regulation against the client's current posture: applicability, gaps, and a remediation plan with owners and dates.",
    whatItDoes: "Takes regulatory text or guidance, scopes whether and how it reaches the client, extracts the requirements, and diffs them against what the client already does. The output is a prioritized plan: must-do before enforcement, should-do, already compliant, and accepted gaps with the rationale documented, plus the open interpretive questions worth specialist counsel.",
    whenToUse: "When something moves: an act phases in, a state statute passes, guidance drops, or an enforcement action clarifies a threshold, and the question is what, if anything, the client has to change.",
    exampleOutput: `GAP ANALYSIS: [State] AI Act — [Client]
Applies because: deployer of an in-scope consequential-decision system
Bottom line: exposure is real but narrow; notice obligations first.
Gaps: 3 must-do · 2 should-do · 6 already compliant · 1 accepted

MUST-DO BEFORE ENFORCEMENT
  Pre-use notice to affected individuals   owner: product  due: Jan 2
  Impact assessment on file per system     owner: counsel  due: Dec 1
  Appeal path for adverse decisions        owner: HR ops   due: Jan 2`,
    status: "shipped",
    skillMd: gapMd,
  },
  {
    id: "ai-system-inventory",
    folder: "ai-governance",
    title: "AI System Inventory",
    oneLiner: "One register for the client's AI systems: role and risk tier per system under the EU AI Act, with the stated basis for each.",
    whatItDoes: "Maintains one record per AI system with the client's role (provider, deployer, importer, distributor) and risk tier, each with a one-sentence basis and a verify tag. Role and tier are assessed per system, never per company. The register carries owners, EU nexus, status, and review dates, and the skill walks new systems through the classification decision points.",
    whenToUse: "Add a system to the inventory, are we a provider or a deployer for this one, which tier does this fall into, or the periodic look at what is due for review.",
    exampleOutput: `| ID      | System           | Role     | Tier      | Next review |
| sys-001 | Resume screening | deployer | high risk | 2026-08-01  |
| sys-002 | Support chatbot  | deployer | limited   | 2026-09-15  |
| sys-003 | Fraud scoring    | provider | high risk | 2026-08-20  |

Counts: 2 high risk · 1 limited · 0 GPAI
1 system due for review within 30 days`,
    status: "shipped",
    skillMd: inventoryMd,
  },
]
