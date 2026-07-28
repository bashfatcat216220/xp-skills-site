---
name: km-ai-legal-analysis
description: >-
  KM AI Legal Analysis is the team's framework for analyzing an AI system under the EU AI Act and analogous regimes — role determination, risk tiering, transparency analysis, ADMT overlay, and the standard controls. Use this skill whenever classifying an AI system, determining deployer vs. provider status, answering "what risk tier is this," "can the client use this AI tool," or analyzing any system with AI features, even where AI is incidental to the main product. Apply it together with km-reasoning (method) and km-ai-contract-review (terms).
---

# KM AI Legal Analysis

*Version: July 17, 2026. First version; the framework as actually practiced, extracted from 74 AI terms reviews (Sept. 2025 – July 2026) and the Decision-Making Patterns Memo. Where practice is unsettled (the provider test), this skill says so rather than inventing a resolution.*

## Philosophy

The unit of analysis is never the tool; it is the intended use of the tool. The same technology lands at different tiers depending on what the client plans to do with it, so classification begins with a concrete statement of intended use and ends with a scope that confines the approval to that use. The framework exists to make sixty reviewers reach the same conclusion on the same facts — apply the stated tests, walk the enumerated lists, and name the driver, so the classification is reproducible rather than felt.

## The pivot question

**Does the system make, support, or materially influence decisions about individuals?** Answer it explicitly in every analysis — it is the single strongest predictor of tier. The portfolio's high-risk drivers are all species of it: evaluating workers (employment profiling, task allocation), emotion recognition, and biometric identification.

## Tiering

Work down the ladder; do not skip levels.

1. **Prohibited practices.** Walk the enumerated list explicitly (social scoring; exploitation of vulnerabilities; untargeted facial-image scraping; emotion recognition in workplace/education except safety/medical; biometric categorization from sensitive attributes; real-time remote biometric identification in public spaces for law enforcement; predictive policing of individuals). Elimination by checklist, never by vibe. Where a prohibited-adjacent use is *possible* but not intended, it goes into the out-of-scope carve-out — and the analysis notes the carve-out is what keeps the matter out of this tier.
2. **High risk.** Walk the Annex III-style enumerated categories (employment and worker management; education/vocational access and evaluation; essential services and credit; biometrics; law enforcement; migration; justice; critical infrastructure; safety components). State which category applies or that none does. "Does not fall within any enumerated high-risk category" is a valid conclusion only when the list was actually walked.
3. **Transparency-tier obligations.** Systems interacting directly with people (chatbots), generating synthetic content, or performing permitted emotion recognition/biometric categorization carry disclosure duties. **Every chatbot-adjacent analysis includes a one-line transparency rationale** — applies or doesn't, and why — because unexplained transparency calls were the portfolio's most inconsistent field.
4. **Limited risk** — the working default (82% of the portfolio): synthetic-content generation plus a conversational interface, without individual-decision effect. Standard formula: "appropriately classified as limited risk because [driver]."
5. **Minimal risk** — even the synthetic-content and interaction hooks absent or trivial.

Recognized conventions carrying analysis weight: translation/transcription is treated as limited risk absent decision effects (monitor for bias; human oversight for consequential outputs). Cite the convention; don't re-derive it.

## Role determination

Determine the client's operator role with a stated test, applied identically every time: **provider** status turns on developing the system or having it developed and placing it on the market or putting it into service under one's own name or trademark; **deployer** on using it under one's own authority. Substantial modification, white-labeling, or fine-tuning pushes toward provider; configuration, RAG over one's own content on an unmodified vendor stack, and prompt engineering generally do not — **but this boundary is currently unsettled in firm practice** (two near-identical internal RAG builds reached opposite conclusions). Until a written provider test is adopted: flag every matter where provider status is colorable, state the primary characterization and the obligations under the alternative, and do not resolve the question silently in either direction. Where the client both deploys and may provide, say "deployer and may also be characterized as a provider" and analyze both.

## Overlays

Run the **ADMT analysis** alongside the EU AI Act wherever the system touches decisions about individuals — automated decision-making rules (GDPR Art. 22 and analogues) attach independently of tier. Note jurisdiction-specific analogues where deployment scope warrants; deployment in Russia or China requires additional legal review as a standing rule.

## Conditions and scope

A conditional classification ("limited risk, provided that [guardrail]") is legitimate and often optimal, but the condition is a first-class obligation: name it, name its owner, set a reassessment date, and record it in the conditions field of the cover sheet and the index card. State the inverse explicitly where it applies ("high risk unless [feature] is disabled"). Out-of-scope carve-outs list foreseeable misuses, adjacent unevaluated features, and any use that would change the tier — using the standing escalation triggers (employment/HR decisions; legal or similarly significant effect; public-facing deployment; education decisions; agentic features and MCP servers; unapproved third-party models or subprocessors; external publication; new jurisdictions), phrased "without additional legal review."

## Standard controls

Attach the **Deployer Standard Controls (Appendix A)** to every deployer matter, applied proportionally to tier and lifecycle stage. Controls carry their basis tag: **[RISK]** (required for EU AI Act high-risk systems; applied globally as the client's baseline), **[LAW]** (required by law independent of tier), **[GOV]** (client policy). The recurring recommended-use-parameters stack: verify/human-review outputs; restrict confidential/sensitive/personal data input pending privacy/IP review; inform users they are interacting with AI and label AI-generated content (under-used in the portfolio — include by default for anything user-facing); disable or restrict risky features; audit and log AI actions; confine use to the approved case; periodic review of updated terms and subprocessors.

## Review depth

Triage to the three-rung ladder: light review for matters squarely within precedent and convention; full review/memorandum for novel, hard, or high-risk matters (a high-risk conclusion on a light review is an anomaly — escalate the depth); bucket memo where a deal shape recurs (analyze the pattern once, apply per instance; candidate buckets: translation vendors, internal RAG builds).

## Output

The analysis lands in the cover-sheet fields: tier with driver sentence in the standard formula; operator role with the test applied; transparency rationale; conditions with owners and dates; out-of-scope list; controls reference; supersedes line where applicable. Run km-review before it ships.
