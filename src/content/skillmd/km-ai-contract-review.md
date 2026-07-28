---
name: km-ai-contract-review
description: >-
  KM AI Contract Review is the team's checklist and extraction discipline for AI-specific contract and vendor terms — training-use restrictions and their carve-outs, posted-terms and unilateral-amendment handling, AI indemnity exclusions, model-provider pass-throughs. Use this skill whenever reviewing any agreement, terms of use, DPA, or AI addendum for a product with AI features, whenever drafting a cover sheet's key-provisions sections, or whenever the user asks "are these AI terms acceptable" or "what does the vendor commit to." Apply it inside km-review's three-pass method.
---

# KM AI Contract Review

*Version: July 17, 2026. First version; checklist and patterns extracted from 74 AI terms reviews, including the recurring carve-out structures the portfolio shows vendors actually use.*

## Philosophy

AI terms are ordinary contract terms with three aggravating features: the most important commitment (no training on client data) is routinely qualified by carve-outs that change its meaning; much of the operative language lives in posted terms the vendor can amend unilaterally; and obligations cascade through model providers and subprocessors the client never contracted with. The review's job is to extract each commitment *together with its exceptions*, pin-cited, and to state plainly what was not found — absence is a finding, never an assumption.

## Orient (before extracting)

Inventory every operative document with its date or last-updated date: main agreement, order forms, DPA, privacy policy, AI-specific terms/addendum, acceptable use policies, subprocessor lists, and **incorporated model-provider policies** (OpenAI/Anthropic/Google usage policies routinely form part of the vendor's AI terms — they bind the client and are reviewed too). Record precedence clauses (AI terms frequently prevail over the main agreement for AI features). Note reliance: signed contract, posted terms, or mixed — posted terms trigger the unilateral-amendment workstream below. Record "last accessed" dates for every URL-based document.

## The extraction checklist

Every item extracted with pin cite (Abbr., § or ¶); every commitment captured with its carve-outs in the same entry.

**Training and data use (the crown-jewel terms):**
- No training on client data — confirm it covers **inputs and outputs**, and whether it binds **subprocessors and affiliates**, not just the vendor. Tag: NO_TRAIN_CLIENT_DATA, NO_SUBPROCESSOR_TRAINING.
- The carve-outs — the recurring patterns: content flagged for trust & safety; user-submitted feedback; "service/UX improvement" uses; aggregated/anonymized/de-identified data rights; default-on settings requiring an **affirmative opt-out** (extract the opt-out mechanism and who must exercise it — an unexercised opt-out is not a protection). Tags: TRAIN_CARVEOUT, AGGREGATE_STATS_USE.
- Retention and deletion of inputs/outputs, including post-termination timelines and backup exceptions. Tag: DELETION_TIMELINE.

**Risk allocation, AI-adjusted:**
- Indemnification — and specifically whether the general IP indemnity **excludes AI features** (a recurring pattern: the vendor's indemnification obligations expressly do not apply to AI use or AI-generated content, paired with a disclaimer of the non-infringement warranty for AI outputs). Extract the indemnity and its AI exclusion together. Tags: IP_INDEMNITY, IP_INDEMNITY_CARVEOUT.
- Liability caps and exclusions; warranty disclaimers ("as is" AI features); trial/alpha/beta features excluded from warranties and indemnities entirely — flag beta features (MCP servers are a recurring example) as requiring additional review before use. Tags: LIABILITY_CAP, WARRANTY_DISCLAIMER.
- Output responsibility — vendors uniformly make the client solely responsible for reviewing outputs, compliance, and third-party interactions; extract the scope.

**Control and change:**
- Unilateral amendment of posted terms; feature modification/discontinuation rights; material-adverse-change notice and termination rights (extract the cure window). Tag: UNILATERAL_AMENDMENT.
- Subprocessor regime: notice mechanism, objection window (extract the day count), and subscription/mailing-list mechanics for change notice — the review's recommendations include actually subscribing.
- IP in inputs, outputs, and feedback (feedback is routinely vendor-owned — extract it); usage restrictions the client's users must follow (no competing-AI development, no representing AI content as human, sensitive-data consent requirements); API/developer terms where relevant.
- Confidentiality and security commitments with their conditions. Tag: CONFIDENTIALITY.

## Posted-terms discipline

Where reliance is on posted terms: record the version reviewed with its last-updated and last-accessed dates; extract the amendment mechanism and any notice commitment; recommend monitoring (subscription lists where offered; periodic re-review otherwise); and treat the no-train commitment's durability as a named risk ("if the vendor amends its posted terms — which it can do unilaterally — this protection could weaken") rather than a settled fact. A material terms change is a standing reassessment trigger for the matter.

## Compare and conclude

Check the extraction against the client's standard positions and prior reviews of the same vendor and deal shape (retrieve via km-institutional-knowledge-retrieval): worse-than-precedent terms, better-than-precedent terms worth citing in the next negotiation, and contradictions among the operative documents. Standard negotiation asks where terms fall short: AI-specific indemnification for IP and privacy infringement; extending no-train to subprocessors; written confirmation of opt-out defaults. Conclude in the standard form: acceptable / acceptable with stated conditions and use parameters / negotiate / escalate — conditions owned and dated.

## Output

Findings land in the cover-sheet structure: Key Provisions Applicable to Vendor (verb-first, cited, carve-outs inline), Client's Contractual Obligations, Recommended Use Parameters (including the opt-outs to exercise and lists to subscribe to), with commitments tagged to the controlled vocabulary for the index card. What was looked for and not found is stated. Run km-review's named checks — especially the hostile reading and durability checks — before delivery.
