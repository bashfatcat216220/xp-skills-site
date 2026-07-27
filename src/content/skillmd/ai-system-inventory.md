---
name: ai-system-inventory
description: Maintains a per-system AI inventory for a client under the EU AI Act — one record per system with its role (provider, deployer, importer, distributor, authorized representative, product manufacturer), risk tier (prohibited, high-risk, limited, minimal, GPAI, GPAI with systemic risk), EU nexus, and the stated basis for each. Role and tier are assessed per system, never per company. Written for outside counsel in a single-client, many-matter practice; reads the standing client profile from the client-ai-governance-profile skill and keeps one register for the whole client. Use whenever someone says "AI inventory," "add an AI system," "what systems does the client have," "classify this system," "AI Act register," "are we a provider or a deployer," or needs to know which tier a system falls into.
---

# AI System Inventory

One record per AI system, holding what role the client occupies for that system and what risk tier it falls into.

The idea this exists to enforce: **role and tier are per system, not per organization.** A client can be a provider of one system, a deployer of a second, and an importer of a third, and each combination triggers a different set of obligations. A single organization-level label — "we're a deployer" — produces confidently wrong answers, and it is the most common mistake in early AI Act work.

The register is a lawyer's index, not an obligations engine. See the last section for why that distinction is deliberate.

## Setup

Read the **client-ai-governance-profile** skill first — it carries the footprint, the tiers, the structural features that recur across this client's matters, and the shared guardrails on tagging, currency, and privilege.

**Where the register lives.** There is **one register for the whole client**, not one per matter. Systems outlive the matters that surface them, and a per-matter register produces the same system classified three ways under three matter numbers.

Chat has no persistent filesystem, so the register is a document in the designated inventory project's knowledge (named in the profile). Inventory work happens in that project; other projects reference it. Each record notes the matter that surfaced the system, which is how the register stays connected to the work without fragmenting.

The working cycle:

1. Read the current register from project knowledge.
2. Make the change in conversation.
3. **Output the complete updated register** as a downloadable markdown file — not a diff, not just the changed row.
4. Tell the attorney to replace the copy in project knowledge with the new file.

Always emit the whole register. A partial update that gets saved over a full one loses records silently, and nobody notices until the system that went missing is the one a regulator asks about. If no register exists yet, create one on the first add.

## What to do

Dispatch on what's being asked:

- **List** (or no specific ask) — render the table, then the counts by tier and the review-due line.
- **Add** — run the intake below.
- **Classify** — run the classification walk-through on an existing record.
- **Edit** — show the current record, change the one field, confirm, re-emit the register.
- **Show** — the full record for one system.

## Register format

| ID | System | Owner | Status | EU nexus | Role | Tier | Next review |
|---|---|---|---|---|---|---|---|
| sys-001 | Résumé screening | HR / [name] | in production | yes | deployer | high risk | 2026-08-01 |

Below the table: counts by tier, and *"[N] systems due for review within 30 days."*

Each record carries, in full:

```markdown
### sys-001 — [System name]
**Owner:** [person or team accountable day to day]
**Description:** [one or two sentences: what it does, against what data]
**Status:** planned / in development / in production / deprecated
**EU nexus:** [yes/no] — deployed in the EU/EEA, offered to people there, or producing
  outputs that affect people there
**Role:** [provider / deployer / importer / distributor / authorized representative /
  product manufacturer]
**Role basis:** [one sentence] `[verify against current AI Act text]`
**Tier:** [prohibited / high risk / limited / minimal / GPAI / GPAI with systemic risk]
**Tier basis:** [the Article 5 practice or Annex III area that matched] `[verify-pinpoint]`
**Obligations assessed:** [yes/no — and where the assessment lives]
**Surfaced by:** [the matter that brought this system in, so the record stays traceable]
**Obligations note:** [short note on what to assess; not a derived table]
**Next review:** [date] — **trigger:** [on substantial modification, or annually]
**Added / updated:** [dates]
```

## Add flow

Ask one field at a time, or accept a paste. Required: name, owner, description, status, EU nexus. Classification can be deferred — say so explicitly rather than forcing it in the same sitting.

1. **Name** — a short label the client's own people would recognize.
2. **Owner** — who is accountable for it day to day, not who approved it.
3. **Description** — what it does, and against what data.
4. **Status** — planned, in development, in production, deprecated.
5. **EU nexus** — deployed in the EU/EEA, offered to people there, or producing outputs affecting people there. Any yes brings AI Act analysis into play.
6. Offer to classify now or later.

Assign the next sequential `sys-NNN`.

## Classification walk-through

This produces role, role basis, tier, and tier basis. Both bases carry verification tags — not as hedging, but because the article mapping is genuinely complex and the Act is still phasing in. The attorney owns verification.

**Never classify silently.** The walk-through has to be visible. Do not infer a role and tier from a one-line system description and write them into the register.

### Role

The distinguishing tests:

- **Provider** — the client develops it, or has it developed, and places it on the EU market or puts it into service under its own name or trademark.
- **Deployer** — the client uses it under its own authority, other than for personal non-professional use. The common case inside an organization.
- **Importer** — the client brings a system into the EU from a provider established outside it.
- **Distributor** — the client makes a system available on the EU market without being provider or importer.
- **Authorized representative** — the client is established in the EU and acts for a non-EU provider.
- **Product manufacturer** — the client puts an AI system into a product under its own name or trademark; treated as provider for that product.

**The substantial modification trap.** A client that fine-tunes a vendor system on its own data, changes its intended purpose, or rebrands it may become a **provider** of the modified system even though it started as a deployer — which pulls in a materially heavier obligation set. Raise this whenever any modification beyond configuration is described `[verify-pinpoint — Art. 25 and the substantial-modification provisions]`. Product teams describe fine-tuning casually, so it usually has to be asked about directly rather than waited for.

Write the role and a one-sentence basis.

### Tier

Check in order — the order matters, because a prohibited-practice match ends the inquiry.

**A. Prohibited practices** `[verify-pinpoint — Art. 5]`. Summaries, not operative text: subliminal or deceptive techniques materially distorting behavior; exploiting vulnerabilities of age, disability, or socio-economic situation; social scoring — evaluating or classifying people based on social behavior or personal characteristics, leading to detrimental treatment in an unrelated context or treatment disproportionate to the behavior — by public or private actors; real-time remote biometric identification in public spaces for law enforcement, subject to narrow exceptions; biometric categorization inferring race, political opinion, union membership, religious or philosophical belief, sex life, or sexual orientation; emotion recognition in workplaces or education, with medical and safety exceptions; untargeted scraping of facial images from the internet or CCTV; predictive policing based solely on personality traits.

Any possible match is critical. Flag it immediately and route it to the client's prohibited-practice path rather than reasoning toward a comfortable reading.

**B. High-risk areas** `[verify-pinpoint — Annex III]`. Biometric identification and categorization; critical infrastructure; education and vocational training, including access, evaluation, proctoring, and behavior monitoring; employment and worker management, covering recruitment, selection, promotion, termination, task allocation, and monitoring; access to essential public and private services, including public benefits, individual credit scoring, life and health insurance risk assessment and pricing, and emergency dispatch; law enforcement; migration, asylum, and border control; administration of justice and democratic processes.

Note the specific area and subsection when one matches.

**C. GPAI** `[verify-pinpoint — Art. 51 and surrounding]`. A model trained on broad data at scale, designed for generality, competently performing a wide range of distinct tasks. Systemic risk attaches above the compute threshold or on Commission designation.

**D. Limited risk.** Chatbots interacting with people, deepfakes, and emotion recognition or biometric categorization outside Art. 5 scope — transparency obligations apply.

**E. Minimal risk.** Everything else.

Write the tier and a one-sentence basis citing what matched.

### After classifying

Offer three moves: work through the obligations for this system in conversation; run a full impact assessment; or set a review date and trigger.

## Guardrails

**Verification tags stay.** They are not decoration and not hedging. Do not strip them when the register is exported or pasted into a client deliverable.

**Flag substantial modification every time.** Any change beyond configuration means the classification is re-run, because modification can change the role.

**Don't derive obligations from a table.** When asked what a system's obligations are, work it out in conversation, tag it, and route anything that needs a formal record to a full impact assessment.

**Re-emit the whole register on every write.** Stated above; repeated because it's the one mechanical step that loses data when skipped.

## Why obligations aren't auto-derived

The register holds role, tier, and the basis for each. It deliberately contains no role × tier → obligations lookup.

The article mapping is complex, the Act phases in through 2027, and a hardcoded table produces exactly the artifact that does the most damage: a confident, wrong obligation list that reads as authoritative and ends up in a board memo or a client alert. The register is an index for the lawyer. The lawyer owns the obligation analysis.
