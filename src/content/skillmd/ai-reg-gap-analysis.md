---
name: ai-reg-gap-analysis
description: Diffs a new or newly-relevant AI regulation, guidance, or enforcement development against a client's current governance posture, producing scoped applicability, extracted requirements, a gap list, and a prioritized remediation plan with owners and dates. Written for outside counsel in a single-client, many-matter practice; reads the standing client profile from the client-ai-governance-profile skill. Use whenever someone says "does [regulation] affect us," "new reg just dropped," "gap analysis for the EU AI Act," "are we compliant with [X]," "what do we need to change because of [guidance]," or pastes or uploads regulatory text. Also use when an impact assessment surfaces a regime the client isn't currently set up for.
---

# AI Regulatory Gap Analysis

Something moves — an act phases in, a state passes a statute, a regulator issues guidance, an enforcement action clarifies a threshold — and the question is what, if anything, the client has to change.

This skill answers that by diffing the requirement against what the client actually does, not against what a compliance framework says a company should do. The output is a gap list with a remediation plan, or an honest "this doesn't apply, here's why."

This area moves faster than anything else in law right now. Where a regulation is genuinely ambiguous, say so and give the conservative read. Papering over uncertainty is the failure mode that costs a client the most, because it hides the places where they're making a judgment call rather than following a rule.

## Setup

Read the **client-ai-governance-profile** skill first. It carries the regulatory footprint, the use case registry, the policy commitments, the vendor positions, the assessment practices, the structural features that recur across this client's matters, and the shared guardrails on source tagging, currency, privilege, and decision posture — which govern this skill.

A gap analysis is client-wide, not matter-specific: the regulation reaches every system in the registry, not just the one that prompted the question. Scope the analysis to the client and note which matters it touches, rather than answering only for the matter in front of you.

If the profile is missing or still has `[PLACEHOLDER]` markers:

> The client profile isn't available or is still unfilled, and a gap analysis is a diff — without the "current state" side I can only summarize the regulation. Either enable or complete the client-ai-governance-profile skill, or say **provisional** and I'll produce the requirement extraction and generic gap questions, tagged `[PROVISIONAL]`, for you to diff against what you know.

## Step 1 — Scope it

Before diffing anything, establish whether the regulation applies. Most of the value of this step is in the cases where it doesn't.

- **Does it apply?** Jurisdiction, applicability thresholds (revenue, headcount, user count, compute, model category, affected-population size), sectoral carve-outs, and — decisively — the role distinction. Most AI regimes impose materially different obligations on the entity that develops or provides a system than on the entity that deploys it. Research which role the client occupies under each regime's own definitions rather than assuming.
- **When?** Effective date, enforcement date (frequently different), and phase-in schedule. Many AI laws stage obligations across two to four years, and the answer to "are we exposed" often depends on which tranche is live.
- **What's actually new?** Some AI statutes largely restate existing principles — consumer protection, anti-discrimination, sectoral risk management — applied to AI. Others create genuinely new obligations. The client needs the delta from what they already do, not a summary of the full text.

If it doesn't apply, say so in a line and stop: *"Doesn't apply — [reason]. No action."* Write it down anyway; a documented negative is useful when the statute is amended or when someone asks the same question next year.

**Search before answering.** Effective dates, phase-ins, delegated and implementing acts, pending challenges, and enforcement posture are exactly the facts that go stale. Do not rely on recall for any of them. Where a challenge, delay, or rescission proposal may exist but can't be confirmed, surface it as a flagged caveat and proceed on the published position — that's the third option under the profile's no-silent-supplement rule.

## Step 2 — Extract the requirements

Work from the regulatory text, not from commentary about it. Where only secondary sources are available, say so and tag accordingly; a firm alert paraphrases, hedges, and often writes for one sector.

| # | Requirement | Citation | Category |
|---|---|---|---|

Categories, which drive the remediation grouping later:

**Transparency** — disclosure to users, workers, or affected people that AI is in use. **Impact assessment** — documentation required before deployment. **Human oversight** — mandatory review, override, or appeal. **Accuracy and testing** — bias testing, validation, accuracy documentation. **Governance** — registration, record-keeping, designated responsible persons. **Vendor flow-down** — obligations to push down to AI vendors or extract from them. **Prohibited practices** — outright bans. **Rights** — what affected people can invoke.

Pinpoint citations carry the highest fabrication risk and are the ones most likely to be wrong. EU AI Act article numbering shifted during consolidation; every pinpoint cite to it needs verification against the Official Journal text. Tag accordingly and put them first in the cite check.

## Step 3 — Diff

For each requirement:

> **Requirement:** [what it obliges, quoted or closely paraphrased with its cite]
> **Client currently:** [what the profile, policy, registry, or assessment practice actually shows — not what would be nice]
> **Gap:** None / Partial / Full
> **What's missing:** specific. Not "more documentation" but "no human review step is documented for any use case in the member-services category."
> **Effort to close:** policy language only / process change / product or system change / new assessment / vendor renegotiation / registration or filing
> **Exposure:** penalty range, realistic enforcement likelihood, and non-regulatory consequence

Where the client's current state genuinely isn't known — the profile is silent and nobody has asked — say that rather than inferring. An unknown recorded as an unknown is a task; an unknown inferred as compliance is a liability.

## Step 4 — Prioritize

Not every gap is equal, and a flat list is a list nobody acts on. Sort by:

1. **Prohibited practice.** If the gap is a prohibition rather than a process requirement, it's first regardless of enforcement date.
2. **Hard deadline with teeth** — live effective date, active enforcement, real penalties.
3. **Effort-to-impact.** Updating policy language is cheap. Retrofitting human oversight into a deployed system is not, and it needs the longest runway.
4. **Registry overlap.** A gap touching several use cases outranks one touching a single system.

## Step 5 — The remediation plan

```markdown
PRIVILEGED & CONFIDENTIAL — ATTORNEY-CLIENT COMMUNICATION — PREPARED BY OUTSIDE COUNSEL

# Gap Analysis: [Regulation] — [Client]

**Effective:** [date] | **Enforcement begins:** [date] | **Client's role:** [provider / deployer / both]
**Applies because:** [the scoping conclusion in one line]

## Bottom line
Two sentences: how exposed is the client, and what's the first thing to do.
**Gaps:** [N] must-do · [N] should-do · [N] already compliant · [N] accepted

## Must-do before enforcement
| Gap | Fix | Owner | Due | Status |

## Should-do
[same shape]

## Already compliant
[Worth stating. It's the baseline when the rule is amended, and it's what the client's
executives actually want to hear first.]

## Accepted gaps
[Where the client is knowingly not remediating — with the rationale and who accepted it.
Documented accepted risk is better governance than silence.]

## Open interpretive questions
[Where the regulation is genuinely unsettled: the question, the conservative read, and
whether it's material enough to warrant specialist or local counsel.]

## Cite check
[Which citations were retrieved from primary sources this session, which are model
knowledge, pinpoints first.]
```

Produce it as a downloadable file. The remediation table becomes a tracker the client updates, so it needs to leave the chat.

Write the document even when the conclusion is "no gaps." It's evidence that the question was asked, and it's the baseline for the next amendment.

## Close

> **What next?**
> 1. **Draft the client alert** — the two-page version for [the GC / the board].
> 2. **Turn the must-do table into a tracker** with owners and dates.
> 3. **Run an impact assessment** on [the system this most affects].
> 4. **Update the profile** — this run surfaced [a footprint change / a registry gap].
> 5. **Something else.**

Precede the options with **"One question I'd ask that isn't in the checklist:"** where one exists. Often it's whether a public commitment the client has already made is stricter than the regulation, or whether closing a gap here reopens one somewhere else.

## What this doesn't do

It doesn't resolve ambiguous regulatory language authoritatively — the EU AI Act in particular has significant open interpretive questions, and where the issue is material, that's a flag for specialist or local counsel rather than a confident read. It doesn't monitor proactively; it runs when pointed at a change. It doesn't implement fixes, it plans them. And it doesn't substitute for sector-specific expertise where the domain requires it.
