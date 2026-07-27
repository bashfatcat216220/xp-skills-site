---
name: vendor-ai-terms-review
description: Reviews a vendor's AI terms — AI addendum, agreement AI provisions, or terms of service — against the client's governance positions, flagging training-on-inputs, liability for outputs, model change notice, upstream model-provider flow-down, and policy conflicts, with surgical redlines. Written for outside counsel in a single-client, many-matter practice; reads the standing client profile from the client-ai-governance-profile skill. Use whenever someone says "review this AI agreement," "check these vendor terms," "what did we agree to with [vendor]," "the vendor sent an AI addendum," "is this AI contract acceptable," or uploads vendor AI terms. Also use when an impact assessment surfaces a vendor whose terms haven't been reviewed.
---

# Vendor AI Terms Review

Governance positions get tested here. A client's policy says what it wants; the vendor agreement says what it actually has. This skill finds the delta and produces the redline.

The posture never flips. The client is the deployer or buyer, reviewing the vendor's paper. What varies is the input: a standalone AI addendum, AI provisions buried in a master agreement, a universal terms-of-service page, an acceptable use policy, or the enterprise combination of MSA plus DPA plus AI addendum.

Where a DPA already exists, this review complements it. The DPA governs data protection obligations; the AI terms govern model-specific rights and risks. Both need reading, and neither covers the other.

## Setup

Read the **client-ai-governance-profile** skill first. It carries the vendor positions table, the list of vendors already reviewed, the policy commitments, the governance tiers, the escalation path, and the shared guardrails on tagging, currency, privilege, and decision posture. Those guardrails govern here.

**Check whether this vendor has been reviewed before.** With one client across hundreds of matters, the same vendors recur constantly. A prior review is the fastest route to a consistent position — and inconsistency across matters with the same counterparty is the quiet risk in a long institutional relationship. If a prior review exists, start from it, note what's changed in the paper, and say whether the client's position has moved.

Establish which matter this is, and carry the reference into the deliverable's header.

If the profile is missing or still has `[PLACEHOLDER]` markers:

> The client profile isn't available or is still unfilled — that's what tells me the client's vendor positions: their standard, their acceptable fallback, and their automatic no. Either enable or complete the client-ai-governance-profile skill, or say **provisional** and I'll review from first principles against common AI-vendor risks, tagging every finding `[PROVISIONAL]`.

## Before reading anything

If the actual terms haven't been provided, ask for them. Be specific about what's useful:

> Can you share the actual contract language — the AI addendum if there is one, or the agreement with the AI provisions. An acceptable use policy on its own won't answer the questions that matter: it tells us what the client can't do with the vendor's AI, not what the vendor can do with the client's data.

If only an AUP arrives, say exactly that and ask for the service agreement. An AUP flips the frame, and a clean AUP review is not a substitute for reading the data use and liability terms.

## Map the stack first

Modern AI deployments are layered, and reviewing only the top layer is the most common way this work fails. Before the term-by-term, establish:

1. **The application** the client signs up for — the SaaS tool, the CRM with AI scoring, the document assistant.
2. **The gateway or orchestration layer** — Azure OpenAI, AWS Bedrock, Google Vertex. Often invisible in the sales conversation, always has its own terms.
3. **The model provider** — Anthropic, OpenAI, Google, Meta.
4. **Any hosted knowledge base or retrieval source** the system reads from.
5. **Other subprocessors** — logging, analytics, fine-tuning partners.

Ask directly: what does this tool run on underneath? Does it call a model provider directly or through a cloud gateway? Does it use a hosted vector store or third-party corpus?

Every handoff between layers is a flow-down risk. A commitment at layer one is worth nothing if layer three's terms say otherwise and layer one never passed the obligation down.

## Term-by-term

For each term: what the contract actually says, what the client's position is, the gap, and the fix.

| Term | What to look for |
|---|---|
| **Training on client inputs** | Does the vendor train, fine-tune, or "improve" models on inputs? Is there an explicit prohibition or opt-out, and is it opt-in or opt-out by default? |
| **Confidentiality of inputs** | Are prompts and uploaded documents confidential? Any quality-review or human-review carve-out that lets vendor staff read them? |
| **Model changes** | Notice obligation for material model changes? Version pinning available? |
| **Output ownership and IP** | Who owns generated content? Any licence back to the vendor? Any IP indemnity, and what does it exclude? |
| **Liability for outputs** | Does the vendor accept liability for harmful, wrong, or infringing output? Cap structure, carve-outs, and whether AI output is excluded from the general indemnity. |
| **Incident notification** | How and when is the client told when the system fails, is compromised, or produces systematic error? |
| **Human review rights** | Can the client require human review, or dispute an AI-driven decision? |
| **Use restrictions** | What is the client prohibited from doing, and does it match intended use? Watch definitional terms — "automated decision-making," "high-risk use" — that can sweep in the actual use case. |
| **Audit and auditability** | SOC 2, third-party audits, bias testing results, audit rights. |
| **Subprocessors and upstream providers** | Are model providers disclosed? Whose terms govern? |
| **Data residency** | Where is data processed, and where does inference happen? |
| **Term and deletion** | What happens to client data on termination, and on what timeline? |
| **Stacked accountability** | Is this vendor the model provider, a wrapper around someone else's model, or a reseller of an infrastructure-hosted model? If not the provider, there are two sets of terms in play. Identify who governs training and retention, who is liable for model behavior, and whether each upstream commitment actually flows down. Flag every clause where one party disclaims responsibility for the other's service, and check whether the counterparty's contract closes that gap. |

Where the profile has no position on a term, ask for one and note it for the profile: the value compounds only if the next review is consistent with this one.

## The flow-down test

Do not stop at "check upstream terms." That instruction is where compliance quietly dies. For each stacked-vendor issue — especially training, retention, subprocessor changes, and liability:

1. **Search the contract** for flow-down language: "no less protective than," "back-to-back," "shall ensure that its subprocessors are bound by," "equivalent obligations."
2. **If present:** quote it, confirm it actually covers the flagged term, and identify who can enforce it — the client, or only the intermediate vendor?
3. **If absent:** draft the specific addition, e.g. *"Provider shall ensure that any third-party model providers, infrastructure providers, and subprocessors used in delivering the Services are bound by obligations with respect to Customer Data, model training, retention, and confidentiality no less protective than those in this Agreement, and shall be responsible for any breach caused by such third parties."*
4. **Severity:** 🔴 where the term is training-on-inputs or liability and no flow-down exists; 🟡 where the term is less sensitive or flow-down is partial.

## Output per term

> **[Term]** 🟢 / 🟡 / 🟠 / 🔴
> **Vendor says:** [what the contract actually provides, with the section reference]
> **Client position:** [from the profile]
> **Gap:** [the specific delta, or "aligned"]
> **Fix:** [redline language, or "escalate — outside fallback"]

Severity, calibrated against the client's positions rather than a generic scale:

- 🟢 **Aligned** — at or better than the client's standard position.
- 🟡 **Note** — within fallback, worse than standard. Awareness, not a blocker.
- 🟠 **Significant** — outside standard, within fallback. Redline before signature.
- 🔴 **Critical** — outside fallback. Deployment shouldn't proceed unresolved; escalate per the profile.

## Redline granularity

Edit at the smallest granularity that reaches the client's position. A redline is a negotiation artifact, not a rewrite. Wholesale clause replacement reads as "we threw out your drafting," forces a full re-read, and discards the parts that were fine. Surgical edits read as "we have specific asks" and get accepted faster.

Word before phrase. Phrase before sentence. Restructure a subclause before replacing the sentence. Replace a whole clause only when surgical edits would be harder to read than a fresh draft — and when doing so, say why in the transmittal.

A counterparty receiving a surgical redline believes it was read carefully. A counterparty receiving a wholesale replacement wonders whether it was read at all.

## Gap checks

**DPA but no AI addendum.** Say what the DPA doesn't reach: training on inputs, model change notice, liability for AI output, incident notification for AI-specific failure. Whether that gap is tolerable depends on tier — usually acceptable at standard, a blocker at elevated or high.

**No AI terms at all.** The vendor is delivering an AI service under general terms, which means no contractual protection on the highest-risk items. That's 🔴 for anything above standard tier.

**Policy conflicts.** The recurring ones: the client's policy prohibits training on its data and the vendor's terms permit it by default; the policy requires human review and the vendor's terms treat outputs as final; the vendor is absent from the approved list or present on the blocked one; the policy commits to disclosing AI use and the vendor imposes confidentiality on system capabilities that would prevent it. Flag every mismatch — one side has to move.

## The deliverable

```markdown
PRIVILEGED & CONFIDENTIAL — ATTORNEY-CLIENT COMMUNICATION — PREPARED BY OUTSIDE COUNSEL

*Derived from vendor terms that are typically confidential under NDA; this review inherits
that confidentiality. Forwarding it to the vendor or circulating it broadly can waive
privilege and breach the NDA.*

# Vendor AI Review: [Vendor]

**Reviewed:** [document type and date] | **Use case:** | **Governance tier:**

## Bottom line
Two sentences: can the client deploy under these terms, and what has to change first.
**Issues:** [N]🔴 [N]🟠 [N]🟡 [N]🟢

## The stack
[Layers identified, and whose terms govern what.]

## Term-by-term
[Each term in the format above.]

## Flow-down
[Findings from the test, with the drafted language where absent.]

## Policy consistency
[Aligned, or the specific conflicts.]

## Recommended redlines
[Consolidated, surgical. For critical issues with no fallback, escalate rather than drafting.]

## If they won't move
[Per 🔴 and 🟠: the client's fallback, or "outside fallback — escalate to [per profile]."]
```

## Practical notes

**Training on inputs is the term most often missed.** Vendor positions vary widely and have changed repeatedly over time. Do not assume any particular vendor's current stance from reputation or from what was true at the last review. Confirm it in the agreement in front of you, in writing.

**Renewals are the leverage point.** Where the current agreement is unfavorable and the vendor won't reopen mid-term, document the gaps now and flag them to whoever owns the renewal: this renewal shouldn't close without an AI addendum addressing the listed items.

**If the client builds on the vendor's model,** the vendor's use restrictions also govern what the client can offer its own users. Check the restrictions against the roadmap, not just current internal workflows.

## Close

> **What next?**
> 1. **Draft the redline** as a markup ready to send.
> 2. **Draft the transmittal** explaining the asks in the order they matter.
> 3. **Escalate** the 🔴 items to [the approver in the profile].
> 4. **Add these positions to the profile** so the next review is consistent.
> 5. **Something else.**

Precede the options with **"One question I'd ask that isn't in the checklist:"** where a genuine one exists — often about what the contract silently permits rather than what it says, or about whether a commitment the client is relying on is contractual or just something a salesperson said.

## What this doesn't do

It doesn't review the DPA's data protection provisions — that's a separate review. It doesn't decide whether to accept terms outside the client's fallbacks; it routes those. It doesn't assess vendor security posture beyond what the paper says.
