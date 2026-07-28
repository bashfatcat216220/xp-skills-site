---
name: km-privacy-contract-review
description: >-
  KM Privacy Contract Review is the team's checklist, standard positions, and carve-out extraction discipline for privacy and data protection terms — DPAs, privacy addenda, subprocessor regimes, transfer mechanisms, breach and DSR provisions. Use this skill whenever reviewing a DPA or privacy terms, whenever a vendor agreement involves personal data processing, whenever the user asks "is this DPA acceptable" or "what should we push back on" — and inside every km-dpvr vendor review. Apply it within km-review's three-pass method.
---

# KM Privacy Contract Review

*Version: July 17, 2026. First version — checklist skeleton is complete; the firm's standard positions and fallbacks are marked [POSITION] and get populated from live matters and Julie's sign-off edits rather than invented here.*

## Philosophy

A DPA review is an exercise in finding the exceptions: the processing restriction with the "improvement" carve-out, the breach notice with the qualifier that swallows the timeline, the audit right that is really a report-review right, the deletion obligation with the backup exception measured in years. The review extracts each commitment together with its qualifications, pin-cited, compares the package against the firm's standard positions, and states what was looked for and not found. Absence is a finding.

## Orient

Inventory the privacy stack with dates: DPA (and whether incorporated or standalone, and its precedence), privacy policy, subprocessor list with its update mechanism, transfer addenda/SCC modules, security exhibits, and any AI terms touching personal data (bridge to km-ai-contract-review). Establish the client's role the agreement assumes (processor terms where the client is really a controller is itself a finding) and the reliance mode — posted DPAs get the unilateral-amendment treatment.

## The extraction checklist

Each item with pin cite; each commitment with its carve-outs in the same entry.

**Processing discipline:**
- Processing scope and purpose limitation — documented-instructions-only, and the carve-outs (legal compulsion; the "improvement," "analytics," and aggregated/anonymized/de-identified rights that function as purpose expansions — extract the de-identification standard claimed). [POSITION: which improvement/aggregation rights are acceptable and in what form]
- Confidentiality commitments for processing personnel.
- Sensitive-data conditions (prior-written-consent requirements for PII categories, including religious data — a standing flag for this client base).

**Subprocessors:**
- Authorization model (general vs. specific consent), notice mechanism and **objection window (extract the day count)**, flow-down of DPA obligations to subprocessors, and liability for subprocessor acts. Recommend subscribing to change-notice lists where offered. [POSITION: acceptable objection window and flow-down standard]

**Transfers:**
- Every transfer mechanism invoked (adequacy, SCCs and which modules, alternative local mechanisms), onward-transfer handling, and support-access-from-abroad as a transfer. Bridge unsettled transfer questions to km-privacy-legal-analysis rather than resolving them as contract issues.

**Incidents and rights:**
- Breach notification: trigger ("becoming aware" vs. qualifiers like "confirmed"), **timeline (extract the hour/day count)**, content commitments, and cooperation. [POSITION: required timeline and trigger]
- DSR assistance: scope, timeline, and cost allocation.
- Audit rights: genuine audit vs. report-review (SOC 2 in lieu), frequency, notice, cost. [POSITION: minimum audit right]

**End of relationship and risk:**
- Deletion/return at termination: timeline, certification, and the backup exception (extract its duration and protections). Tag: DELETION_TIMELINE.
- Security measures: named standard or meaningless "reasonable measures"; certification commitments and their maintenance.
- Liability: whether privacy/data-protection breaches sit inside or outside the general cap; indemnity for privacy claims and its carve-outs. [POSITION: cap treatment for data claims]

## Compare and conclude

Check against the firm's standard positions and prior reviews of the same vendor (km-institutional-knowledge-retrieval); flag worse-than-precedent, better-than-precedent, and internal contradictions (DPA vs. privacy policy vs. AI terms conflicts are common — record which controls). Conclude in standard form: acceptable / acceptable with stated conditions / negotiate with the prioritized redline asks and fallbacks / escalate. Findings feed the km-dpvr deliverables (memo, cutoff chart, checklist) where the review is part of a full vendor review, and the index card in every case.

## To be populated on sign-off

Every [POSITION] slot above; the fallback ladder per position (ask → acceptable → walk-away); and the worked examples. These are the firm's negotiation playbook — captured from Julie's edits on live reviews, not drafted by inference.
