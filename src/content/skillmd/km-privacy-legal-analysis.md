---
name: km-privacy-legal-analysis
description: >-
  KM Privacy Legal Analysis is the team's framework for structured privacy analysis — roles, lawful basis, cross-border transfers, sensitive data, profiling/ADMT, and jurisdiction overlays — with calibrated hedging. Use this skill whenever analyzing a privacy or data protection question: "can we collect/use/share X," cross-border transfer questions, GDPR/PIPA/state-law applicability, DSR and retention questions, or any matter touching personal data — including AI matters where personal data is processed. Apply it with km-reasoning; pair with km-privacy-contract-review when terms are involved.
---

# KM Privacy Legal Analysis

*Version: July 17, 2026. First version — structural v1. The analytical skeleton is stable; the firm's standard positions and jurisdiction-specific overlays get calibrated against the first privacy matter run through it (Korea is the natural candidate) and live in that matter's project knowledge, not here.*

## Philosophy

Privacy analysis fails in two characteristic ways: answering the statute instead of the client's decision, and false certainty in an area where regulators, DPAs, and courts genuinely disagree. This skill guards both flanks — every analysis starts from the decision being made and ends with calibrated conclusions that distinguish what the law requires, what is defensible, and what is the client's governance choice. Where the law is unsettled, the analysis says so and gives the client a decision architecture (options, risk levels, mitigations), not a fictional bright line.

## The analytical sequence

1. **Facts that drive everything:** what data, about whom (data subjects and their jurisdictions), collected how, used for what, shared with whom, stored where, retained how long. Distinguish personal data from de-identified/aggregated — and test the de-identification claim rather than accepting the label.
2. **Applicable regimes.** Map by data-subject location, establishment, and targeting: GDPR/UK GDPR, the deployment jurisdiction's law (e.g., Korea PIPA, Japan APPI), US state laws where applicable, and sectoral overlays. Name each regime that attaches and the trigger; where extraterritorial reach is arguable, say which reading is primary.
3. **Role determination.** Controller / processor / joint controller (or the local-law analogues; service-provider status under US state laws) — applied with the regime's test, stated. Role drives everything downstream: obligations, contracts required, transfer responsibilities. Where the client's role is colorable both ways, analyze the primary characterization and note the obligations under the alternative — the same discipline as the AI operator-role analysis, and the same rule: never resolve it silently.
4. **Lawful basis and purpose.** Basis for each processing purpose; purpose-limitation check against the originally stated purpose; consent quality where consent is the basis (and the local-law specifics — some regimes are consent-centric where GDPR would use legitimate interests).
5. **Special categories and heightened data.** Sensitive data (religious data is a standing consideration for this client base), children's data, biometric data — each with its heightened regime.
6. **Cross-border transfers.** Map every transfer (including onward transfers via subprocessors and support access): mechanism available (adequacy, SCCs/standard contracts, consent, local-law mechanisms), transfer-impact considerations, localization requirements. Transfers are where jurisdiction overlays bite hardest; local counsel positions get recorded in the matter library and cited, not remembered.
7. **ADMT and profiling.** Where processing informs decisions about individuals, run the automated-decision-making analysis (Art. 22 and analogues) — this is the standing bridge to km-ai-legal-analysis; run both where AI processes personal data.
8. **Rights, retention, security.** DSR handling obligations by role; retention against stated purposes; breach-notification exposure; security baseline.

## Calibration and output discipline

Conclusions in the house hedging: plain statement where the law is clear; "likely" where probable; explicit uncertainty with a decision architecture where genuinely unsettled — options, each with risk level, mitigation, and implementation guidance, so uncertainty becomes decidable rather than paralyzing. Separate throughout: **legally required** vs. **defensible position** vs. **governance choice** — the client must be able to tell which is which. Reusable positions (a transfer approach, a consent architecture, a de-identification standard) get captured into the matter library as governance rather than re-derived per question; building the framework is often the deliverable.

## Standing bridges

Personal data + AI features → run km-ai-legal-analysis in parallel. Terms or a DPA on the table → km-privacy-contract-review. A vendor review end-to-end → the km-dpvr workflow. Prior positions, local counsel advice, OGC approvals → km-institutional-knowledge-retrieval before analyzing from scratch; consistency with the matter's precedent is a substantive requirement.

## To be calibrated on first live use

The firm's standard positions (transfer mechanism preferences, consent architectures, de-identification standards), the per-jurisdiction overlay charts, and worked examples — these are deliberately not invented here. Run Korea through this skeleton, capture the positions it surfaces into the Korea project library, and promote the ones that generalize into this skill on its next version.
