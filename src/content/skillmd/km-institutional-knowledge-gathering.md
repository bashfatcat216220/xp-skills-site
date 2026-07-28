---
name: km-institutional-knowledge-gathering
description: >-
  KM Institutional Knowledge Gathering is the team's method for building and maintaining a matter's living library — capturing operative documents, memos, cutoff charts, approvals, and correspondence, drafting a standard index card for each, and keeping the master index current. Use this skill whenever a document is added to a project, whenever the user says "add this to the library," "make an index card," "index this," "update the master index," or when a new matter project is being stood up, and proactively whenever work in a project reveals a document that has no card or an index entry that is stale.
---

# KM Institutional Knowledge Gathering

*Version: July 17, 2026. First version; card schema generalized from the AI Practice matter (78 cover sheets), with the two structural fields the portfolio analysis showed were missing: conditions-of-classification and supersession.*

## Philosophy

A matter's value compounds only if what the team learns is captured where the next person will find it. This skill turns documents into institutional memory using a two-layer model: **index cards** (normalized, comparable, fast to read) over **source documents** (authoritative, verified against). The card is read first; the primary source controls. A library where every matter's cards share one schema is what makes cross-matter intelligence — comparable matters, contradictions, current positions — possible at all. Maintenance is deliberately an assistant-level task: Claude drafts, a human confirms, and the library stays current without consuming attorney time.

## What gets captured

Original documents (operative agreements, addenda, posted terms with their last-updated dates, memos, cutoff charts, approvals, key correspondence) enter the project library as-is — they are the evidence layer and are never edited. Each receives an index card. The matter also maintains one **living master index** listing every document, its status (current / superseded / under negotiation / interim), and its last-verified date, so "am I looking at the current version?" has a one-glance answer.

## The index card schema

Every card, every matter, same core fields. Domain extensions add fields; they never replace the core.

**Core (all matters):**
- `matter` · `card_date` · `source_file` (exact filename) · `author/reviewer` if known
- `parties` — client entity (normalized to the standard short code) and counterparty
- `subject` — what the document governs, in one sentence
- `documents` — every operative agreement/policy with defined abbreviation and date or last-updated date
- `reliance` — signed contract / posted terms / mixed (posted terms automatically flag the unilateral-amendment concern)
- `key_terms[]` — each with a pin cite (Abbr., § or ¶); a term that cannot be cited is recorded as inference, not term
- `client_obligations[]` — verb-first, cited, grouped by owner where known
- `conditions[]` — **every "provided that" as a first-class record: the condition, its owner, and a reassessment date.** A condition without an owner gets flagged, not silently recorded
- `supersedes` / `superseded_by` — explicit links; when a card is added that updates a prior matter position, both cards and the master index are updated in the same pass
- `status` — current / superseded / under negotiation / interim
- `open_questions[]` · `escalations[]` — anything requiring "additional legal review," verbatim
- `confidence_notes` — anything extracted heuristically or uncertainly, so the reader knows what to verify

**AI review extension** (for AI terms reviews and cover sheets): `products` · `ai_use_categories[]` · `risk_tier` with the driver sentence · `transparency_obligation` · `operator_role` (deployer/provider/both, with the test applied) · `vendor_commitments[]` tagged to the controlled vocabulary (NO_TRAIN_CLIENT_DATA, NO_SUBPROCESSOR_TRAINING, TRAIN_CARVEOUT, IP_INDEMNITY, IP_INDEMNITY_CARVEOUT, DELETION_TIMELINE, LIABILITY_CAP, WARRANTY_DISCLAIMER, UNILATERAL_AMENDMENT, AGGREGATE_STATS_USE, CONFIDENTIALITY) — **always capture a commitment together with its carve-out**; a commitment with a carve-out is a different commitment.

**Privacy/DPA extension** (to be finalized with the first privacy matter): processing roles, transfer mechanisms, subprocessor regime, breach notification timelines, retention, DSR handling.

**Judgment section** (optional, for significant matters — per Julie's direction, capturing judgment, not just information): What decision was the client actually trying to make? · What initially appeared to be the problem? · What ultimately became the real problem? · What assumptions changed during the analysis? · What governance principle or framework emerged? · What reusable lesson should influence future matters? Draft this only at matter milestones, and only for the attorney to confirm — judgment capture is theirs to ratify.

## The gathering workflow

1. **Intake.** Confirm what the document is, its date/version, and whether it replaces something already in the library. Check the master index for an existing card on the same subject before creating a new one.
2. **Draft the card** from the source with pin cites. Extract, don't summarize: the card records what the document says and where, not an interpretation. Absence is a finding — if a standard term (e.g., a no-training commitment) cannot be located, the card says "not found," never assumes.
3. **Run the consistency checks** before filing: Does this card contradict an existing card (same facts, different conclusion)? Does it change the matter's current position (supersession links needed)? Does it carry conditions that need owners? Flag each; do not resolve silently.
4. **Human confirmation.** Present the draft card with anything flagged. The confirmed card enters the library; the master index is updated in the same pass (status, dates, supersession).
5. **Duplicates and hygiene.** Exact-content duplicates are marked and excluded from counts; near-duplicates (two versions of one matter) get supersession links; naming follows one convention per matter.

## Quality bars

Every extracted term cited or labeled inference. Every condition owned or flagged. Every version linked. Nothing enters the intelligence layer that would surprise someone reading the source — and where card and source diverge, the source controls and the divergence gets reported and fixed. Privilege legends carry onto every card derived from privileged material.

## Version 2 (future)

Cross-matter card collection (cards only — not privileged sources — so access stays clean) maintained as a practice-wide library for retrieval across projects; automated card refresh when a posted-terms URL changes; the draft-to-final learning loop feeding deviation patterns back into the framework skills.
