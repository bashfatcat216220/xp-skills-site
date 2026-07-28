import type { Skill } from '../types'
import julieReasoningMd from '../skillmd/julie-reasoning.md?raw'
import julieReviewMd from '../skillmd/julie-review.md?raw'
import julieWritingEditingMd from '../skillmd/julie-writing-editing.md?raw'
import pressureTestingMd from '../skillmd/pressure-testing.md?raw'
import executiveCommunicationsMd from '../skillmd/executive-communications.md?raw'

export const skills: Skill[] = [
  {
    id: "julie-reasoning",
    folder: "julie-method",
    title: "Julie Reasoning",
    oneLiner: "How a legal question gets thought through: analyze the intended use, not the tool, and prefer a narrow yes with explicit boundaries over a broad approval or a refusal.",
    whatItDoes: "Works an eight-step sequence: frame the actual question, establish the three to five facts the conclusion turns on, name the operative frameworks, classify with the driver named, scope the approval, attach conditions with owners, set escalation lines, and calibrate review depth to risk. The default answer is a narrow approval — yes, for this, and only this — with exposure confined by the scope description and the out-of-scope carve-out rather than by saying no. Before concluding, it checks how the same facts were treated in prior matters; divergence from precedent is either reconciled or expressly distinguished, never silent.",
    whenToUse: "Any legal issue analysis, risk assessment, regulatory classification, scoping decision, or can-we-do-X question. It runs before drafting in every project, because it governs how conclusions are reached, not how they are written.",
    exampleOutput: `Question:  May [Client] deploy the vendor's meeting assistant
           for internal note-taking?
Driver:    the system does not make or materially influence
           decisions about individuals
Conclusion: approved for internal note-taking and summarization
           as outlined herein only
Out of scope: employee performance evaluation; any public-facing
           use — without additional legal review
Condition: transcript retention capped at 30 days
           (owner: [Client] IT operations; flagged for tracking)`,
    status: "shipped",
    skillMd: julieReasoningMd,
  },
  {
    id: "julie-review",
    folder: "julie-method",
    title: "Julie Review",
    oneLiner: "A three-pass document review — orient, extract against the checklist, compare to precedent — that ends in a decision, not commentary.",
    whatItDoes: "Reviews contracts, vendor terms, and internal drafts in three passes: orient on every operative document and the reliance mode, extract against a standard checklist with a pin cite for each term, then compare against the client's standard positions and prior reviews of the same vendor. Absence is a finding — a term that cannot be located is recorded as not found, never assumed to exist. Internal work product gets its own checklist: template completeness, conclusion-rationale match, condition ownership, precedent consistency, supersession, and cites that actually resolve.",
    whenToUse: "Any document handed over for review — an agreement, posted terms, a cover sheet, or a colleague's draft — even when the word review is never used: take a look at this agreement, anything concerning in these terms.",
    exampleOutput: `BOTTOM LINE: acceptable with conditions — two terms drive this.

1. No-train commitment covers inputs and outputs but not
   subprocessors (AI Terms, § 4.2) — negotiate the extension.
2. Unilateral amendment of posted terms (ToU, § 12) —
   subscribe to the change-notice list; reassess on amendment.

Not found: post-termination deletion timeline — recorded as
   absent, not assumed.
Condition: outputs verified before external use
   (owner: [Client] product team).`,
    status: "shipped",
    skillMd: julieReviewMd,
  },
  {
    id: "julie-writing-editing",
    folder: "julie-method",
    title: "Julie Writing & Editing",
    oneLiner: "House style for written work product: subject-first declaratives, the standard conclusion formulas reused verbatim, calibrated hedging, and a pin cite on every extracted term.",
    whatItDoes: "Governs how conclusions are expressed once the analysis is done: subject-first sentences with no throat-clearing, the firm's recognized formulas kept intact, likely for probable-but-not-certain and plain statement for firm conclusions — never we believe or arguably. Obligations render as parallel verb-first bullets grouped by obligor, each ending with its cite; a proposition that cannot be cited is labeled inference or recommendation, not term. Editing another draft runs a fixed order: bottom-line placement, one point per unit, formula compliance, a hedging audit, trimming, and a consistency sweep.",
    whenToUse: "Drafting or editing any written deliverable — memos, cover sheets, terms reviews, advice emails, policy language — including write up, clean this up, and make this sound right. It layers on top of the analysis skills; it changes expression, not conclusions.",
    exampleOutput: `Key Provisions Applicable to Vendor
- Will not use [Client] data, including user inputs and
  outputs, to train the underlying model (AI Terms, § 3).
- May use user-submitted feedback for service improvement
  (ToU, ¶ 8) — the carve-out extracted with the commitment.

This agreement permits the use of AI as outlined herein only.
Deployment in additional jurisdictions requires additional
legal review.`,
    status: "shipped",
    skillMd: julieWritingEditingMd,
  },
  {
    id: "pressure-testing",
    folder: "julie-method",
    title: "Pressure Testing",
    oneLiner: "Seven structured attacks on a conclusion before it ships, findings ranked by likelihood times consequence, each paired with a repair.",
    whatItDoes: "Attacks a finished conclusion in sequence: the facts (especially facts that are really promises about the future), the characterization, the scope boundary, the misuse steelman, the precedent fit, the durability, and a hostile reading of the operative language. The output is not a new conclusion but a ranked list of ways the existing one fails, each with a repair, ending in a verdict — ships as-is, ships with the listed repairs, or does not ship. A test that ends in looks-fine must show its work: the attacks attempted and why each failed.",
    whenToUse: "Any conclusion that is high-stakes, novel, conditional, or divergent from precedent — poke holes in this, is this right, steelman the other side — and mandatory in listed cases, including every conditional conclusion and every contested role characterization.",
    exampleOutput: `FINDING 1 (high likelihood x high consequence)
Attack:   scope boundary — "AI agents remain disabled"
Failure:  vendor roadmap ships agents default-on next quarter;
          ordinary use crosses the line within a year
Repair:   condition gets an owner ([Client] IT admin) and a
          reassessment date tied to the release

FINDING 2
Attack:   characterization — deployer label
Failure:  a colorable provider reading of the white-label
          configuration is nowhere addressed
Repair:   address the alternative expressly; state the
          obligations under both roles

VERDICT: ships with the listed repairs`,
    status: "shipped",
    skillMd: pressureTestingMd,
  },
  {
    id: "executive-communications",
    folder: "julie-method",
    title: "Executive Communications",
    oneLiner: "Converts legal analysis into what a decision-maker needs, in the order they need it, without diluting the substance underneath.",
    whatItDoes: "Restructures finished analysis for leadership in a fixed order: the ask, the answer in one sentence, the two or three considerations that would make a reasonable person hesitate, then next steps with owners. Terms of art are translated while the framework stays visible; conditions become responsibilities with names; risk statements are specific and bounded — named risk plus named mitigation — rather than vague. Four formats: decision email, one-pager, talking points, and status update, with privilege framing preserved and a live problem never buried below the first four lines.",
    whenToUse: "Whenever the audience is leadership or a non-lawyer decision-maker rather than another lawyer: for my boss, brief the committee, make this executive-ready, summarize for the business, or when a memo needs a decision from someone who will not read the underlying analysis.",
    exampleOutput: `Subject: Decision needed — [vendor] research assistant approval

Approved as configured; one requirement before rollout.
The tool falls in the low-regulation tier — standard controls
apply, no registration or heavy compliance obligations.
One requirement: the AI-agent features must stay off. [Client]
IT controls that setting, and turning them on requires coming
back to Legal first.
Known risk: the vendor can amend its posted terms unilaterally;
our no-training protection could weaken. We monitor for that.
Next step: IT confirms the setting by Friday; Legal logs it.`,
    status: "shipped",
    skillMd: executiveCommunicationsMd,
  },
]
