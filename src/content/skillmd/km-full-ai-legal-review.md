---
name: km-full-ai-legal-review
description: >-
  KM Full AI Legal Review is the team's complete review path for an AI system, chaining the framework and contract skills into one workflow and producing the cover sheet in the firm's standard form. Use this skill whenever an AI system, tool, or feature needs review or approval: "review this AI tool," "we want to use X," a new cover sheet request, a scope change to a previously approved system, or an internal AI build — and for triaging whether a matter needs the light, full, or bucket track.
---

# KM Full AI Legal Review

*Version: July 17, 2026. First version; the workflow as practiced across 74 reviews, with the two template upgrades the portfolio analysis established: a conditions-of-classification field (owner + reassessment date) and a supersedes line.*

## Philosophy

The review exists so the client can say yes safely and quickly: "yes, for this, and only this." Its product is not an opinion but an operating envelope — a scope, a tier, conditions with owners, and escalation lines — recorded in a form identical across reviewers so the portfolio stays comparable and the library stays queryable. Every review is also a precedent: it will be retrieved, compared, and relied on, so consistency with prior matters is part of the work, not an afterthought.

## The workflow

1. **Intake and triage** (km-reasoning step zero). What is the system, who is requesting, and what is the *specific intended use* — the unit of analysis. Establish the buyer entity (normalized code) and requesting organization. Triage the track:
   - **Light review** — squarely within precedent and convention (the workhorse; it has never legitimately produced a high-risk finding, so a high-risk signal at intake routes to full).
   - **Full review/memorandum** — novel, hard, prohibited-adjacent, high-risk drivers present (worker evaluation, emotion recognition, biometric ID), or internal builds raising provider questions.
   - **Bucket coverage** — the deal shape is pre-analyzed (e.g., vendor-indexing pattern); apply the bucket memo and record the instance.
   - **Scope change** — a prior review exists; this review analyzes the delta and supersedes the prior sheet explicitly.
2. **Precedent pull** (km-institutional-knowledge-retrieval). Prior reviews of this vendor; comparable matters by use pattern and risk driver; the current position if any sheet already covers this tool. Divergence from precedent must be express.
3. **Document gathering** (km-institutional-knowledge-gathering). The full stack with dates: agreement, order forms, DPA, AI terms, AUPs, incorporated model-provider policies, subprocessor lists. Card each; record reliance mode; note precedence clauses.
4. **Terms review** (km-ai-contract-review; km-privacy-contract-review where personal data is processed). Extraction checklist; commitments with carve-outs, tagged to the controlled vocabulary; opt-outs identified with who must exercise them; negotiation asks where terms fall short of standard positions.
5. **Classification** (km-ai-legal-analysis; km-privacy-legal-analysis where personal data is processed). Pivot question answered explicitly; tiers walked down the ladder with enumerated lists actually walked; operator role with the test stated (provider-colorable matters flagged, never silently resolved); transparency rationale in one line; ADMT overlay where individuals are affected.
6. **Draft the cover sheet** (km-writing-editing; format below).
7. **Review before ship** (km-review). Named checks with emphasis on: facts-as-promises (any "will be disabled"), boundary drift on every condition, characterization (operator role), precedent fit, and durability (posted-terms amendment).
8. **File and track.** Card confirmed; master index updated; **conditions logged with owners and reassessment dates**; supersession links set on both sheets for scope changes; monitoring subscriptions initiated; worklist items opened for anything unresolved.

## The cover sheet (standard form)

Field table first — Title of Agreement (every document, defined abbreviation, date/last-updated, last-accessed for URLs); Parties (buyer entity code; vendor); Service(s)/Product(s); Category of AI use (the standard seven options with the selection unambiguous in text, not formatting); Description of scope of approval; Out-of-scope uses (foreseeable misuses, adjacent unevaluated features, tier-changing uses, phrased with "without additional legal review"); Risk classification; **Conditions of classification (condition · owner · reassessment date)**; [Client]'s operator type; Explanation of risk classification (the standard formula: "appropriately classified as [tier] because [driver]," conditions as "provided that," transparency rationale included); Previous AI legal review (every prior review with track and date); **Supersedes** (or "none").

Then: the standard permission sentence ("This agreement permits the use of AI as outlined herein only…"); **Key Provisions Applicable to [Vendor]** (verb-first bullets, cited, carve-outs inline); **Client's Contractual Obligations** (same discipline); **Recommended Use Parameters** (the standard stack — verify outputs; data-input restrictions pending privacy/IP review; user-facing transparency and labeling by default for anything user-facing; disable/restrict risky features with the owner named; audit and log; approved-use confinement; periodic terms/subprocessor review; Russia/China restriction); **Appendix A: Deployer Standard Controls** with [RISK]/[LAW]/[GOV] tags (provider-side controls attach where provider status is found or colorable). Privilege legend on everything.

## Scope changes and internal builds

A scope change reviews the delta against the prior sheet, restates the full current envelope (so the new sheet stands alone), and supersedes explicitly — two live sheets on one tool is a defect. Internal builds (RAG over client content, custom assistants) always get the provider analysis, the flag while the provider test remains unsettled, and full-track treatment.
