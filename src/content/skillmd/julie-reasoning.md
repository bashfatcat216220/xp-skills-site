---
name: julie-reasoning
description: >-
  Julie's method for approaching any legal question — framing, classification, scoping, and escalation. Use this skill whenever analyzing a legal issue, assessing risk, classifying a system or practice under a regulatory framework, deciding whether something is in or out of scope, advising on a new matter, or answering "can we do X." Apply it in every project before drafting conclusions, even when the user just asks a quick legal question, because it defines how conclusions are reached, not how they are written.
---

# Julie Reasoning

How to think through a legal question the way Julie does. This skill defines the analytical moves; project knowledge supplies the facts, precedent, and matter history. Always search project knowledge for prior matters, prior advice, and applicable frameworks before reasoning from scratch — institutional consistency is itself a goal of the analysis.

## Core stance

**Analyze the intended use, not the tool.** The same technology, vendor, or practice can carry different risk depending on what the client actually plans to do with it. Never classify or advise on "the product"; always establish and state the specific intended use first, then analyze that use. If intended use is unknown, say so plainly and analyze the plausible uses, flagging the ones that would change the answer.

**The default answer is "yes, for this, and only this."** Prefer a narrow approval with explicit boundaries over either a broad approval or a refusal. Risk is managed through the scope description and the out-of-scope carve-out, not by saying no. A well-drawn carve-out lets the client proceed today while confining exposure.

**Consistency with prior positions is a substantive requirement, not a nicety.** Before reaching a conclusion, check how the same or similar facts were treated in prior matters (search the project). If the current analysis diverges from precedent, either reconcile it or state expressly why this matter is different. Two matters with the same facts and opposite conclusions is a defect even if each analysis is individually defensible.

## The analytical sequence

Work through these steps in order. Skipping ahead to the conclusion is the most common failure mode.

1. **Frame the actual question.** What decision does the client need to make? Restate it in one sentence. If the request is really several questions, split them.
2. **Establish the facts that drive the analysis.** Identify the 3–5 facts the conclusion turns on (who decides, about whom, with what data, visible to whom, in which jurisdictions). Distinguish facts you have from facts you are assuming; assumptions get stated in the output.
3. **Identify the operative framework(s)** — statute, regulation, contract, internal governance framework, or firm precedent. Name them. Where a governance framework has enumerated categories (e.g., prohibited and high-risk categories under the EU AI Act), walk the enumeration explicitly rather than reasoning by vibe: elimination is a valid method only if the checklist is actually walked.
4. **Classify or conclude, with the driver named.** State the conclusion and the specific factor that drives it (e.g., "the system does not make or materially influence decisions about individuals"). One driver, clearly named, beats three vague ones. If the pivot question in the framework is known (for AI matters: does the system make, support, or materially influence decisions about individuals?), answer it explicitly.
5. **Scope the approval.** Define what is approved in concrete operational terms, then define what is out of scope. Out-of-scope items should include: foreseeable misuses, adjacent features not evaluated, and any use that would change the classification.
6. **Attach conditions where they earn their keep.** A conditional conclusion ("limited risk, provided that AI agents remain disabled") is a legitimate and often optimal instrument — but every condition creates an obligation. When using one: name the condition precisely, identify who owns keeping it true, and flag it for tracking. A condition without an owner is a classification with a lit fuse.
7. **Set the escalation lines.** State what future changes require coming back for further review. Default escalation triggers (from firm practice): decisions affecting employment or HR; decisions with legal or similarly significant effect on individuals; public-facing deployment; education/admissions decisions; enabling agentic or autonomous features; adding unapproved third-party models or subprocessors; publishing outputs externally; expansion into new jurisdictions with materially different law. Use the formula "without additional legal review" so the trigger is unambiguous.
8. **Calibrate the review depth.** Match effort to risk: a light-touch review for routine matters squarely within precedent; a full review or memorandum where the matter is genuinely hard, novel, or high-risk; a bucket/pattern analysis where the same deal shape recurs (analyze the pattern once, apply it to each instance). If a matter classifies as high-risk, it warrants the deeper track — a high-risk conclusion resting on a light review is an anomaly to fix, not a time savings.

## Reasoning hygiene

- **Negations are not findings.** "Does not fall within any high-risk category" supports a *lower* tier; never let discussion of a risk category be mistaken for presence of that risk. Conversely, when relying on elimination, confirm the enumerated list was actually checked.
- **Conditional and hypothetical language changes the conclusion's nature.** "Could be used for X" is not "is used for X." Analyze the intended use as the base case and the hypothetical misuse as an escalation trigger or carve-out.
- **Distinguish roles.** Where a framework assigns different obligations by role (deployer vs. provider; controller vs. processor), determine the role explicitly using a stated test, and apply the same test every time. If the role is arguable, say which characterization is primary and why, and note the obligations that would attach under the alternative.
- **Calibrated hedging.** Use "likely" when the conclusion is probable but not certain; state conclusions plainly when they are firm. Avoid "we believe" and "arguably" — either the analysis supports the conclusion or it doesn't.
- **Say what you don't know.** "We do not have detailed information about the intended uses" followed by conditional guidance is a complete and honest answer; a confident conclusion on unknown facts is not.

## Interaction with other skills

Run **pressure-testing** on any conclusion that is high-stakes, conditional, novel, or divergent from precedent, before it goes out. Use **julie-review** when the input is a document to be reviewed rather than a question to be analyzed. Draft with **julie-writing-editing**; convert for leadership with **executive-communications**.
