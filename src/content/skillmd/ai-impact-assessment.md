---
name: ai-impact-assessment
description: Runs a full AI impact assessment (AIA) for a client's AI system — structured intake, risk analysis, per-regime regulatory classification with cited authority, policy consistency diff, and a recommendation with conditions. Written for outside counsel in a single-client, many-matter practice; reads the standing client profile from the client-ai-governance-profile skill. Use whenever someone says "run an AIA," "impact assessment for," "assess this AI use case," "AI risk assessment," "we need to document this AI system," "is this system high-risk," or brings a proposed or live AI system for review. Also use when a triage or gap analysis comes back conditional and a formal assessment is the next step.
---

# AI Impact Assessment

An AIA is a documented decision, not a form. It answers five questions: what does this system do, how does it reach its outputs, who is harmed if it's wrong, what oversight exists, and is it acceptable to deploy. This skill structures that inquiry and produces the record.

It is not a PIA. A PIA asks whether personal data is handled lawfully; an AIA asks whether the system is designed and deployed responsibly. They run in parallel and neither substitutes for the other.

## Setup

Read the **client-ai-governance-profile** skill before anything else. It carries the registry, red lines, governance tiers, house format, policy commitments, the structural features that recur across this client's matters, and the shared guardrails on source tagging, currency, privilege, and decision posture — all of which govern this skill.

Then establish **which matter** this is. One client, many matters: the profile is standing, the matter is not. If the conversation doesn't make the matter clear and the answer would differ by matter, ask once, and carry the reference into the deliverable's header.

If no profile is present, or it still contains `[PLACEHOLDER]` markers:

> The client profile isn't available or is still unfilled — that's what calibrates the assessment to the client's registry, footprint, and house format. Either enable or complete the client-ai-governance-profile skill, or say **provisional** and I'll run against generic defaults with every finding tagged `[PROVISIONAL]`.

In provisional mode, run normally but classify from first principles rather than against a registry, and tag the output.

**Check the registry for this system before assuming it's new.** With hundreds of matters against one client, the same systems recur under different matter names, and a system assessed eighteen months ago in another matter may already have a record, a classification, and a set of conditions. Re-assessing from scratch produces a second document that quietly contradicts the first. If a prior assessment exists, start from it and diff.

## Step 0 — Is an assessment needed?

Check the profile's trigger criteria, and independently check these:

- Does the system make or materially influence a decision about a person — employment, credit, access, eligibility, pricing, moderation?
- Does it process personal data? Whose?
- Is it member-, customer-, or public-facing rather than purely internal?
- Is a third-party model involved with the client as deployer?
- Does the use case sit in the elevated or high tier?

If none apply and the house trigger isn't met, don't run the full machinery. Produce a short record for the file explaining why an assessment wasn't required — the documented negative is worth having when someone asks in two years.

## Step 1 — Track

Full assessment by default. Fast track only where the profile defines the criteria and the system clearly meets them. A fast track that turns out to be wrong is worse than a thorough assessment of something low-risk.

## Step 2 — Intake

Conversational, not a questionnaire to send. Ask in batches, follow the answers, and stop asking once the picture is adequate.

**The system.** What does it do, in plain language rather than product copy? Which model or vendor, off-the-shelf or fine-tuned? Where does it sit in the workflow — assistive (a human reviews every output), augmentative (a human can override but usually doesn't), or automated? What is the output: text, a score, a classification, a recommendation, an action?

**Who's affected.** Who does the output act on? If it errs — false positive, false negative, fabrication — who bears the harm, and what is the realistic worst case rather than the theoretical one? Are vulnerable populations in scope: minors, applicants, people in financial distress, patients, people whose records are being handled without their involvement?

**Data.** What goes in, specifically — fields, not "user data"? Personal data, and whose? Does it leave the perimeter to a third-party API? Was anything trained or fine-tuned on client data?

**Oversight.** Does the output trigger action automatically? If there's human review, **how often does the reviewer actually change the output** — because if the answer is "rarely," that isn't review, it's a rubber stamp, and the distinction is where most Art. 22 and human-oversight analysis quietly goes wrong. Is there an appeal or correction route for affected people? Is there a named accountable owner?

**Accuracy.** Known or estimated error rate? What testing has been done? When it's wrong, is the error surfaced, logged, corrected? Has bias testing been done, against which groups?

**Stage and scale.** Proposed, pilot, in production, or scaled? How many people affected, how often, for how long? Has it been assessed before, and have its outputs ever been challenged or reversed?

Stage changes the assessment materially. A proposed system gets a design review. A pilot gets a design review plus a gate before scaling. A live system gets a retrospective harm check *and* a go-forward review. A scaled live system gets all of that plus a remediation plan, because it can't simply be switched off.

## Step 3 — Regulatory classification

**Check the footprint before using it.** The profile's regulatory footprint was derived at a point in time. If this system introduces an affected population or decision type the footprint doesn't contemplate — employees in a new state, minors, credit decisions, biometric identification, EU data subjects — re-derive the applicable regimes from the client's operating jurisdictions rather than iterating over a stale list. Say so:

> The profile's footprint was set for [captured populations and decision types]. This system affects [new element], which isn't in it. I'm re-deriving the applicable regimes rather than working from the stale list.

The standard failure here is concrete: the footprint says EU AI Act plus GDPR, the system is a hiring tool deploying into Illinois and Colorado, and iterating over the footprint silently misses IL AIVIA, Colorado's deployer obligations, and BIPA exposure from any biometric component.

For each applicable regime, research the currently operative position and cite it. Search rather than recalling — this is the part of the assessment most likely to be stale.

- What is the regime's own tier taxonomy, and what are the criteria for each tier?
- Where does this system land, given its function, affected population, and how consequential its decisions are?
- Does it touch any prohibited practice? Treat any possible match as critical and flag it immediately rather than reasoning toward comfort.
- What transparency obligations apply regardless of tier — disclosure that a person is interacting with AI, labeling of generated content, notice to people subject to automated decisions?
- If the client builds or provides a model rather than only deploying one, what provider-level obligations attach: technical documentation, training-data transparency, copyright compliance, systemic-risk testing?
- **Does any regime require a separate fundamental rights impact assessment?** EU AI Act Art. 27 requires an FRIA for certain deployers of high-risk systems, including public bodies, private entities providing public services, and certain creditworthiness and insurance use cases `[verify-pinpoint]`. An FRIA is a distinct deliverable. This AIA does not subsume it.

Do not assume internal-only systems are out of scope. Most regimes treat employee data as personal data and employee monitoring as consequential.

**Where the client is both provider and deployer** of different systems — or of the same system after substantial modification — produce a per-regime table splitting the obligations. Collapsing them loses obligations and conflates risks:

| Obligation | As provider | As deployer |
|---|---|---|

**If a high-risk classification applies:** flag it with the specific provision, and note that this assessment documents internal review but is not a conformity assessment. Recommend external review in the affected jurisdiction before deployment.

## Step 4 — Write it

Use the client's house format from the profile if one was captured — the point is that this assessment looks like the client's other assessments. Otherwise:

```markdown
PRIVILEGED & CONFIDENTIAL — ATTORNEY-CLIENT COMMUNICATION — PREPARED BY OUTSIDE COUNSEL

# AI Impact Assessment: [System]

**Prepared for:** [client] | **By:** [attorney] | **Date:** | **Status:** DRAFT
**System owner:** | **Governance tier:** | **Track:** Full / Fast

## Executive summary
Two sentences: what the system does, and whether it can be deployed.
**Overall risk:** 🟢 Low / 🟡 Medium / 🟠 High / 🔴 Very high

## 1. System description
What it does (plain English) · Model or vendor · Deployment mode · Output type · Stage

## 2. Affected parties
Who it acts on · Scale · Realistic worst case if wrong · Vulnerable groups in scope

## 3. Data inputs
Categories (specific fields) · Personal data and whose · Leaves the perimeter? · Training

## 4. Decision-making and oversight
Human in the loop: always / nominally (rubber-stamp risk) / no · Override mechanism ·
Appeal route for affected people · Named owner

## 5. Accuracy and bias
Error rate: known / estimated / untested · Failure mode · Bias testing and results

## 6. Regulatory classification
One subsection per applicable regime:
**Classification** with pinpoint cite · **Prohibited practices touched** ·
**Applicable obligations** · **FRIA required?** · **Effective / enforcement dates** ·
**Open interpretive questions**
[Provider-vs-deployer table where both roles are in play]

## 7. Policy consistency
| Client commitment | Consistent? | Note |
Any 🟡 or worse means either the policy changes or the design changes. Not both flagged and left open.

## 8. Risks and mitigations
| # | Risk | Likelihood | Impact | Mitigation | Status | Owner |
**Residual risk after mitigation:**

## 9. Recommendation
**APPROVED / APPROVED WITH CONDITIONS / CHANGES REQUIRED / NOT APPROVED**
Conditions, each with an owner and a date.
**Privacy assessment required?** [yes / no]
**Sign-off:** [attorney, date]

## Cite check
Which citations were retrieved from primary sources this session and which are model
knowledge requiring verification. Pinpoint cites first.
```

Produce it as a downloadable file when the assessment is substantial — this is a document the client keeps, not a chat message.

## Risk quality

Risks must be specific to this design. Generic risk is the tell of an assessment nobody read.

| Weak | Why | Strong |
|---|---|---|
| "AI hallucination" | True of every LLM; says nothing | "The model generates citations to authority that may not exist; support staff have no verification step before responses go to members" |
| "Bias" | Names a category, not a risk | "Scoring is trained on historical hires; if that cohort was demographically homogeneous, underrepresented applicants may be systematically scored lower, with no monitoring to detect it" |
| "Vendor risk" | Circular | "The vendor's terms permit training on API inputs by default; unless the opt-out is confirmed in writing, member correspondence may enter the training corpus" |

Two to five real risks beat twelve padded ones.

## Policy diff

Cross-check against the client's stated commitments. The recurring mismatches:

- The policy prohibits AI in a category, and this use case is that category. Stop.
- The policy requires human review; this deployment has no human step.
- The policy commits to disclosure; the disclosure mechanism was never built.
- An approved-vendor list exists and this vendor isn't on it.

Flag every mismatch. One side has to move before deployment.

## Handoffs

State these explicitly rather than assuming someone will infer them:

- **To engineering or product:** the conditions list with owners and dates. Not "add oversight" — "add a human review step before any automated message is sent to a member; owner: [name]; before launch."
- **To privacy:** if personal data is involved, a PIA/DPIA runs in parallel. Say so.
- **To vendor review:** if a new vendor is involved and its AI terms haven't been reviewed, that happens before production.
- **To gap analysis:** if the classification surfaced a regime the client isn't currently set up for, that's a gap analysis, not a footnote here.

## Close

End with options, not a decision:

> **What next?**
> 1. **Draft the conditions memo** for the system owner.
> 2. **Escalate** to [the approver in the profile] with the risk and the decision needed.
> 3. **Get more facts** — I'd want [the two or three open questions] before this is signable.
> 4. **Update the profile** — this run surfaced [a new registry entry / a footprint gap / a house-format detail].
> 5. **Something else.**

Before the options, one line: **"One question I'd ask that isn't in the checklist:"** — the second-order thing a thoughtful reviewer notices. Does the client's public policy contradict what this system does? Is "human review" a verified property or the product team's self-report? Who is going to be unhappy about this in six months? If nothing genuine comes to mind, omit the line rather than manufacturing one.

## What this doesn't do

It doesn't approve deployment — an attorney signs. It isn't a conformity assessment where a regime requires one. It doesn't design mitigations; it says what needs mitigating. It doesn't replace a PIA. And it doesn't substitute for sector-specific counsel where the domain demands it.
