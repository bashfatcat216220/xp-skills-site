---
name: pressure-testing
description: >-
  Adversarial stress-testing of legal conclusions, classifications, and advice before they go out. Use this skill whenever a conclusion is high-stakes, novel, conditional, or divergent from precedent; whenever the user asks "poke holes in this," "is this right," "what am I missing," "steelman the other side," or "pressure test"; and proactively after julie-reasoning produces a conclusion that rests on assumptions, disabled features, or untested characterizations. Also use it when reviewing an opposing party's position to find its weak points.
---

# Pressure Testing

A structured attack on a conclusion, run before the conclusion ships. The output is not a new conclusion — it is a list of ways the existing one fails, ranked by likelihood and consequence, each with a repair. Pressure testing that ends in "looks fine" must show its work: name the attacks attempted and why each failed.

## The attack sequence

Run every applicable attack; most conclusions warrant five to ten minutes on each of the first four.

**1. Attack the facts.** List the facts the conclusion depends on and, for each, ask: how do we know it, who told us, and what happens if it's wrong? Special attention to facts that are really *promises about the future* — "the feature will be disabled," "outputs will not be published," "users will be instructed not to." A conclusion resting on operational discipline is only as strong as the owner of that discipline; if no owner exists, the fact is unstable.

**2. Attack the characterization.** Take each label the analysis applies (deployer, processor, limited-risk, internal-only, pass-through) and argue the opposite characterization in good faith. What would a regulator, plaintiff, or counterparty say? If the alternative characterization is colorable, the analysis must address it expressly — silence on a colorable alternative is the most common defect in otherwise sound work. Check especially: does the same characterization test, applied to a prior matter in the project, produce the conclusion that matter reached? Same facts with opposite labels across matters means one of them is wrong.

**3. Attack the scope boundary.** For each out-of-scope carve-out and condition, ask: what is the most natural way this boundary gets crossed in ordinary operations? (Feature gets enabled in an update; a team repurposes the tool; usage volume outgrows the human-review step; a "temporary" pilot goes to production.) Rank boundaries by drift likelihood. A boundary that ordinary, well-intentioned use will cross within a year is not a boundary; it is a scheduled re-review nobody scheduled.

**4. Attack by misuse steelman.** Assume a motivated internal user, an ambitious vendor, and a careless administrator. What is the worst realistic use of the approved thing that stays technically inside the approval's words? If the worst realistic in-scope use is unacceptable, the scope language — not the conclusion — needs repair.

**5. Attack the precedent fit.** Search the project for the closest prior matters. Does this conclusion sit consistently among them? If it is more permissive than precedent, what changed? If more restrictive, is the client being whipsawed? Divergence is permitted but must be express.

**6. Attack the durability.** What foreseeable change breaks the conclusion — a law taking effect, a vendor terms update (especially where reliance is on posted terms with unilateral amendment rights), a product roadmap item, a jurisdiction expansion? Anything within a 12–18 month horizon gets named as a reassessment trigger.

**7. Attack the reading.** Reread the operative language as a hostile reader: ambiguous antecedents, negations whose scope is unclear, "including" lists that could be read as exhaustive, defined terms used before definition, cites that don't support the proposition. One sentence read two ways by two reasonable readers is a drafting defect regardless of which reading was intended.

## Output form

Rank findings by (likelihood the attack lands) × (consequence if it does). For each finding: the attack, the failure mode in one sentence, and the repair — a fact to verify, a condition to add with an owner, a scope line to redraw, a characterization to address expressly, or a reassessment trigger to schedule. Cap the list at the findings that would actually change what ships; pressure testing that produces twenty equal-weight quibbles has failed at its own job. End with a verdict: **ships as-is / ships with the listed repairs / does not ship — rework the analysis**.

## When pressure testing is mandatory

- The conclusion is conditional ("provided that…") — attack 3 at minimum.
- The matter is high-risk or prohibited-adjacent under the applicable framework — full sequence.
- The conclusion diverges from a prior matter — attacks 2 and 5 at minimum.
- The analysis characterizes the client's regulatory role where the alternative role carries heavier obligations — attack 2 at minimum.
- The advice will be relied on by non-lawyers operating the boundary — attacks 3 and 4 at minimum.
