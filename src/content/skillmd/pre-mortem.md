---
name: pre-mortem
description: Assumes a decision or piece of advice went badly eighteen months out and works backward to find which specific recommendation was the fault line, what the early signal would have been, and what would have prevented it. Use whenever someone says "what could go wrong," "run a pre-mortem," "how does this blow up," "what would I regret," "am I sure about this," or is about to give advice, sign off on a position, or approve a deployment. Needs the decision and its reasoning; no documents required.
---

# Pre-Mortem

Asking "what could go wrong" produces a list of generic risks that nobody acts on. Asserting that it *did* go wrong and working backward produces a specific causal chain, because the mind is much better at explaining a fact than at forecasting one.

The frame is fixed and it matters: it is eighteen months from now, the advice went badly, and the question on the table is which decision was the fault line.

Read the **client-ai-governance-profile** skill if available and the decision concerns this client — the registry and prior positions make the chain concrete rather than hypothetical.

## What's needed

The decision or advice, and enough reasoning to know what it rests on. Ask what "badly" would mean here if it isn't obvious — a regulator inquiry, a member complaint that becomes public, a contract dispute, an internal loss of confidence, a system that has to be turned off. Different failures trace back to different decisions.

## The failure is probably boring

The instinct is to imagine the dramatic version: an enforcement action, a front-page story, a systemic breach. Those are rare, and reasoning about them produces defensive advice out of proportion to the risk.

Most bad outcomes in this practice are mundane. A condition was attached to an approval and nobody tracked whether it was met. A position was sound when written and the system changed underneath it. A commitment made in a call was never papered and both sides remember it differently. A document said "likely defensible" and the business heard "approved." The assessment was fine and there was no record that anyone reviewed it.

Weight the boring failures accordingly. They're where the losses actually come from.

## Working backward

Start from the failure and trace the chain in reverse:

1. **The failure.** State it as a fact, specifically. Not "regulatory risk materialized" but "the supervisory authority opened an inquiry after a member complained that a decision about their records had been made automatically, and the file had no record of human involvement."
2. **The proximate cause.** What immediately produced it.
3. **The decision.** Which specific recommendation, condition, or omission made the chain possible. This is the output — one decision, named, not a diffuse set of contributing factors.
4. **The reasoning behind that decision.** What made it look right at the time. If it looked obviously wrong in hindsight, the chain is probably wrong; nobody makes a decision that looked bad while they were making it.
5. **The signal.** What would have been visible at three months, or six, that nobody was watching for. This is the second most valuable output, because it converts a hypothetical into a monitoring task.

## Run it three ways

One chain is an anecdote. Produce three, from different origins, because they lead to different fixes:

- **The legal chain** — the analysis was wrong, or right and superseded.
- **The operational chain** — the advice was correct and wasn't followed, or was followed and drifted.
- **The relationship chain** — nobody's analysis was wrong; the client understood something different from what was said, or a decision was made by someone who never saw the advice.

The third is the one lawyers skip and it's frequently the one that happens.

## Output

Three short chains, then:

> **Most likely:** [which of the three, and why]
> **Cheapest prevention:** [usually a written condition, a named owner, or a review date — rarely a change to the legal analysis]
> **What to watch:** [the early signal, and who would see it]

Keep it under a page. A long pre-mortem is a pre-mortem that becomes a document instead of a decision.

## Discipline

**Name a decision, not a category.** "Insufficient oversight" is not a fault line. "The approval attached a human-review condition without naming who owned it or when it would be verified" is.

**The prevention is usually not more analysis.** The instinct is to recommend more research, another assessment, outside counsel. Occasionally right. Far more often the fix is that a condition needed an owner and a date, or that a conclusion needed to be stated in a way the business couldn't round up to "approved."

**Don't soften it.** The value of a pre-mortem is that it's uncomfortable. A version written to reassure has no function.
