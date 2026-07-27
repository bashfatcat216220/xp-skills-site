---
name: opposing-case
description: Builds the case against a position in three escalating tiers — the obvious objection, the sophisticated one, and the one that actually wins — using the position's own cited authority turned around. Use whenever someone says "poke holes in this," "what's the counterargument," "steelman the other side," "how would opposing counsel attack this," "what am I missing," "argue against me," or states a position and asks whether it holds. Works from a pasted paragraph or a spoken summary; no documents required.
---

# Opposing Case

Most counterargument stops at the first objection — the one already anticipated, already answered in a footnote. That's not the argument that loses the matter. This produces three, escalating, and says which one has no good answer.

Read the **client-ai-governance-profile** skill if it's available and the position concerns this client; the footprint and prior positions sharpen the attack. It isn't required — this works on any argument.

## What's needed

A position and its reasoning. A pasted paragraph is plenty; so is a verbal summary. If only a conclusion arrives with no reasoning, ask for the reasoning once — attacking a bare conclusion produces generic objections, which is the failure mode this exists to avoid.

Ask who the opponent actually is if it isn't obvious. Opposing counsel, a regulator, a skeptical GC, an internal engineering lead, and a court all attack differently, and a generic adversary yields a generic attack.

## The three tiers

**Tier 1 — The obvious objection.** What anyone in the field would raise first. State it fully and fairly, then say how the position answers it. If it doesn't answer it, stop there and say so; there's no point building tiers two and three on top of an unanswered first objection.

**Tier 2 — The sophisticated objection.** What a good opponent who has read carefully would raise. This is usually not a disagreement about the law but about characterization — that the facts don't fit the test the way the position assumes, that a distinction being relied on is doing more work than it can bear, that an authority is being read at its widest rather than its holding.

**Tier 3 — The one that wins.** The argument that, if the opponent found it, would change the outcome. This is the point of the exercise and the one people skip because it's uncomfortable to write.

It usually comes from one of a small number of places, and it's worth checking each:

- **A premise nobody argued about.** The most dangerous assumption is the one both sides accepted at the outset without noticing they were accepting it.
- **The framing.** How the question got stated determined most of the answer. Restate the question the way the opponent would and see what changes.
- **Their own authority, turned.** Go through what the position cites and ask what else each source says. Authority relied on for one proposition frequently contains language that cuts the other way, and the opponent will find it because they're reading it looking for exactly that.
- **A fact not yet in evidence.** What would the opponent go looking for, and what happens if they find it?
- **The remedy or consequence, not the merits.** Sometimes the position is right and it doesn't matter, because the practical outcome is the same or the cost of being right exceeds the benefit.

## Output

Three tiers, each as a short paragraph in the opponent's voice — argued, not described. "The processing isn't necessary to deliver the service; it's necessary to improve it, and the LIA never confronts that" beats "one could argue about necessity."

Then, three lines:

> **Weakest link:** [which tier the position doesn't answer]
> **Cheapest fix:** [what would close it — a fact, a concession, a reframing, more research]
> **If it can't be closed:** [what that means — narrow the advice, add a condition, flag the risk to the client, or change the position]

Where the position holds against all three, say so in a sentence and stop. Manufacturing a tier-three attack that isn't there wastes the attorney's afternoon and teaches them to discount the output.

## Register

Argue the other side properly. A weak steelman is worse than none, because it produces false confidence — the attorney walks away believing the position survived a test it never faced.

Don't hedge the tier-three argument with reassurance. If it's the argument that wins, say so plainly and let the attorney decide what to do about it. Softening it is the single way this skill fails.
