---
name: load-bearing-assumptions
description: Extracts the unstated premises an argument rests on and sorts them by what happens if each is false — whether the conclusion collapses or merely weakens. Surfaces the assumptions nobody argued about, which are the ones that fail. Use whenever someone says "what am I assuming here," "check my assumptions," "what does this rest on," "why does this feel shaky," "stress test this analysis," or presents reasoning and wants to know where it's fragile. Works from a pasted memo, a paragraph, or a verbal summary.
---

# Load-Bearing Assumptions

Every argument rests on things it never says. Most are harmless. A few are carrying the conclusion, and nobody has looked at them — precisely because they were never stated, so they were never argued about.

This finds those and rates them by consequence.

Read the **client-ai-governance-profile** skill if available and the reasoning concerns this client. Not required.

## What's needed

The reasoning — pasted, uploaded, or described. A conclusion alone won't work; assumptions live in the connective tissue between facts and conclusion, so that tissue has to be present.

## Extract

Go through the reasoning and list every proposition that has to be true for the conclusion to hold but is never argued for. Look in the places they hide:

- **Definitional.** A term is being used in a particular sense, and the argument works only in that sense. "Human review," "necessary," "publicly available," "anonymized," "automated decision" — each carries a contested reading that the argument silently picks.
- **Factual.** Something about the client's systems, the counterparty's behavior, or the world is taken as given. Often it's a product team's self-report treated as a verified property.
- **Legal.** A rule is assumed to apply, to be in force, to mean what it appears to mean, or to not have been superseded.
- **Counterfactual.** What the alternative would have been, or what would happen if the position weren't taken.
- **About people.** That the regulator will behave a certain way, that the client will follow the condition, that the reviewer will actually review.
- **Continuity.** That something true when the system was designed is still true now. These are the ones that rot silently.

## Sort

Three buckets. Only two matter.

**Uncontroversial.** True, and nobody would contest them. Name them briefly and move on — the point of listing them is to show they were considered, not to discuss them.

**Load-bearing and unexamined.** True as far as anyone knows, but the conclusion depends on them and nobody has checked. This is the productive bucket and usually the largest.

**Load-bearing and contestable.** An opponent would dispute these, and has material to work with.

## Test each of the last two

For each, answer two questions:

> **If false, what happens?** — *collapses* (the conclusion fails), *weakens* (the conclusion survives with less confidence or narrower scope), or *no effect* (it wasn't actually load-bearing; move it).
>
> **How would you find out?** — verifiable from a document, needs a question put to the client, needs research, or unknowable in advance.

The pairing is what makes this useful. An assumption that collapses the conclusion and is verifiable in ten minutes is a task. One that collapses the conclusion and is unknowable is a risk to disclose to the client, not a task. Those get treated identically in most memos and shouldn't be.

## Output

Short. A list, not an essay.

> **Collapses if false** — [assumption] · [how to check]
> **Weakens if false** — [assumption] · [how to check]
> **Assumed, uncontroversial** — [one line naming them together]

Then one sentence: **the assumption most worth ten minutes of checking**, and why.

## The two things this should catch

**The premise that arrived with the question.** When a client or a product team frames the question, the framing usually contains an assumption. "Can we use legitimate interests for the analytics processing" has already assumed the processing happens, that it's analytics, and that a lawful basis is the operative question. Say when the inherited framing is doing work.

**The assumption that used to be true.** Systems change and memos don't. If the reasoning depends on a property of a system, a vendor's terms, or a regulatory position that could have moved since it was established, flag it as continuity risk even when it looks settled. This is the one that produces the eighteen-month surprise.

## What this doesn't do

It doesn't decide whether the assumptions are true — it says which ones matter and how to find out. And it doesn't rewrite the argument. If most of the load-bearing assumptions turn out contestable, that's a signal the position needs rebuilding rather than annotating, and saying so is more useful than a longer list.
