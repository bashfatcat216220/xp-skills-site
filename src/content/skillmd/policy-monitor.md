---
name: policy-monitor
description: >
  Keep the AI policy current with practice — sweep of saved AIAs, triage
  results, and vendor reviews in this Project's knowledge to find policy drift,
  or direct query for a proposed new AI practice. Use when user says "policy
  sweep", "does our AI policy cover this", "we want to start doing X — does the
  policy need updating", or "run the policy monitor".
---

# policy-monitor

**Sweep mode** (user asks to run the sweep without describing a proposed practice):
1. Read the **AI Governance Practice Profile** document in this Project's knowledge (or attached to the conversation) → AI policy document location, last sweep date.
2. Use the framework below. Read the saved AIAs, triage results, and vendor reviews in this Project's knowledge dated since the last sweep.
3. For each saved output: extract approved practices → diff against current policy commitments and use case registry.
4. Classify gaps: REQUIRED (policy misrepresents current practice) vs ADVISABLE (policy silent).
5. For each gap: quote current policy, describe gap, draft suggested language.
6. Flag any use cases in saved outputs not yet added to the registry in the **AI Governance Practice Profile** document.
7. Present results to the human. Only after acknowledgment, output the proposed updated values for `Last policy sweep` and `gaps_found` and tell the user to update the **AI Governance Practice Profile** document — never claim to have saved or updated anything.

**Direct query mode** (user describes a proposed new AI practice):
1. Read the **AI Governance Practice Profile** document in this Project's knowledge (or attached to the conversation) → current policy commitments, use case registry, actual policy document.
2. Parse proposed practice. Diff against policy: use case coverage, automation level, affected parties, disclosure, vendor data use, oversight.
3. Output: covered / missing / conflicting + suggested language for each gap + registry entry if needed + timing recommendation.

**Recurring runs:**
This runtime has no scheduler — the sweep runs on demand when you ask for it. Set a recurring calendar reminder (e.g., weekly or monthly, matching how fast your AI practice moves) to come back and say "run the policy sweep."

Example invocations:

> "Run the policy sweep."
> "We want to use AI to automatically flag expense reports for review — does the policy need updating?"

---

## Purpose

AI policies drift from practice faster than almost any other policy document — the
field moves quickly, use cases multiply, and each approved AIA or triage result
represents a new commitment the policy may not have caught up with. An AIA approves
a new AI use case with a human-oversight condition. A vendor AI agreement permits
data processing the policy doesn't mention. A triage result marks a new category
of deployment as conditional with a disclosure requirement. The policy sits there
unchanged.

This skill catches the drift — either by sweeping the saved assessments in this
Project's knowledge whenever you invoke it, or by answering the direct question:
"we're about to start doing X, what does that mean for our AI policy?"

The output is always the same: here's the gap, here's the suggested language.

---

## Load current state

Read the **AI Governance Practice Profile** document in this Project's knowledge (or attached to the conversation):
- `## AI policy commitments` — commitments extracted from the published policy
- `## Use case registry` — approved, conditional, and never use cases
- `## Outputs` — AI policy document location, last sweep date

If the **AI Governance Practice Profile** document is missing or still contains `[PLACEHOLDER]` markers, ask the user to attach it to the conversation or add it to Project knowledge — or offer to run the cold-start interview skill to build it.

If `## Outputs` contains `[PLACEHOLDER]`:
> "The Outputs section of your AI Governance Practice Profile isn't configured yet. I can
> still run a direct-query check — describe what you're planning to do and I'll diff it
> against your current AI policy. To enable the sweep bookkeeping, run the cold-start
> interview skill and record the AI policy location and sweep fields in the profile
> document."

Read the actual AI or acceptable use policy document from this Project's knowledge (its
location is noted in `## Outputs`) → **AI policy document**. The commitments in the **AI
Governance Practice Profile** document are a summary; the actual document is authoritative
for suggesting edits. If the policy document isn't in Project knowledge or attached, ask
the user to attach it.

---

## Mode detection

**Sweep mode:** User asks to run the sweep ("run the policy sweep", "policy sweep", "run the policy monitor") without describing a proposed practice.
→ Read the saved assessments, triage results, and vendor reviews in this Project's knowledge. Diff all saved outputs since last sweep against current policy.

**Direct query mode:** User provides a description of a proposed new AI practice.
→ Diff that practice against current policy and use case registry. Suggest updates.

---

## Mode 1: Sweep

### Determine scope

Read `## Outputs` → **Last policy sweep** date. Look through this Project's knowledge for
saved AIAs, triage results, and vendor reviews dated after that date. If no date is
recorded, sweep all saved documents and note: "First sweep — sweeping all saved outputs."

**Honest scope caveat:** the sweep can only see what has been saved back into this
Project's knowledge. If a completed AIA, triage result, or vendor review was never saved
to the Project, it is invisible to the sweep — the sweep cannot prove practice hasn't
drifted, only that the saved record hasn't. The reviewer note's **Read:** line must state
how many saved documents were found and swept (e.g., `Read: 4 saved assessment documents
found in Project knowledge; all 4 swept`).

If Project knowledge contains no saved outputs, or none new since the last sweep:
> "No new saved outputs since [last sweep date]. AI policy appears current with the saved
> record of recent practice. Run the next sweep at your next recurring reminder."

**Do not treat `Last policy sweep` or `gaps_found` as updated automatically.** After the sweep results are presented, wait for the human to acknowledge them ("sweep acknowledged," "results reviewed," or equivalent). Only then output the proposed updated field values and tell the user to update the **AI Governance Practice Profile** document themselves — this skill cannot edit the document and must never claim to have saved:

- `Last policy sweep: [date of acknowledgment]`
- `gaps_found: [N]` (number of REQUIRED + ADVISABLE gaps found in that sweep)

Updating the stamp before acknowledgment would let an unreviewed sweep silently roll forward and suppress the next sweep's attention to the same gaps.

### What to read in each output type

**AIAs (AI Impact Assessments):**
- Extract: use case approved, AI system description, deployment mode (assistive /
  augmentative / automated), conditions imposed, affected parties, vendor used,
  any disclosure requirements to affected individuals
- Flag: use cases not in the registry, use cases approved with conditions not
  reflected in policy, vendor added that policy doesn't cover, automated decision
  deployed where policy implies human oversight

**Triage results (CONDITIONAL / APPROVED outcomes):**
- Extract: use case classified, tier assigned, conditions imposed
- Flag: new use case categories not in registry, conditions that imply policy
  commitments (e.g., "must disclose to affected parties" — does the policy say you
  do this?), newly approved practices that expand policy scope

**Vendor AI reviews (signed / approved):**
- Extract: vendor added, data use terms agreed to, any AI-specific provisions
  accepted that differ from standard positions in the **AI Governance Practice Profile** document
- Flag: vendors added whose data use terms the policy should reference (e.g., "we
  use third-party AI services and ensure they do not train on our data"), approved
  deviations from standard positions that the policy implies you hold

**Use case registry updates:**
- If new entries were added to the registry since the last sweep (directly, not
  through an AIA), check whether the policy reflects those approved categories.

### Gap identification

For each flagged item, assess:

**REQUIRED update** — the policy makes a commitment that an output contradicts, or
an approved use case has no policy coverage and affects external parties. Not
updating creates a material misrepresentation.

> Example: AI policy says "we do not use AI in employment decisions." An AIA
> approved an AI-assisted hiring screening tool with human review required. Policy
> needs updating — even with human review, AI is now involved in employment
> decisions. "We do not use AI" is no longer accurate.

**ADVISABLE update** — policy is silent but not in conflict. The practice is
defensible without updating, but cleaner with it. Important when the practice
affects external parties or creates a reasonable expectation.

> Example: Policy says "we use AI to improve our products and services." An AIA
> approved an AI feature for customer support drafts. Policy technically covers it
> but is vague. Advisable to be more specific so customers know what they're
> interacting with.

### Sweep output format

```markdown
[WORK-PRODUCT HEADER — per the AI Governance Practice Profile ## Outputs — differs by role; see `## Who's using this`]

*This sweep is derived from AIAs, triage results, and vendor AI reviews that carry the practice profile's privilege/confidentiality marking. The sweep inherits that status. Distribute deliberately — forwarding gap findings outside the privilege circle can waive privilege on the underlying assessments.*

# AI Policy Monitor — Sweep Report

**Date:** [date]
**Read:** [N] saved assessment documents found in Project knowledge; [N] swept | **New since last sweep:** [N]
**Gaps found:** [N] REQUIRED | [N] ADVISABLE

---

## REQUIRED updates

### [Gap 1 short name]

**Source:** [saved document title / output type that triggered this]
**What's happening:** [plain description of the new practice]
**Current policy:** [quote the relevant section — or "No coverage"]
**Gap:** [what's missing or inconsistent]

**Suggested language:**
> *Add to / update [section name]:*
> "[Drafted policy text — specific, consistent with house style of the actual policy]"

---

[repeat for each REQUIRED gap]

---

## ADVISABLE updates

### [Gap name]

**Source:** [saved document title]
**What's happening:** [description]
**Current policy:** [quote or "Silent"]
**Suggested language:**
> *Add to / update [section]:*
> "[Drafted text]"

---

## No action needed

[List saved outputs swept where no gaps were found]

---

## Use case registry sync

[Any use cases approved since the last sweep that aren't yet in the **AI Governance
Practice Profile** document's registry — suggest registry entries for the user to add
to the profile document]

---

## Next steps

- [ ] Review REQUIRED updates — decisions needed before the associated use cases
  go live (or immediately if already live)
- [ ] Review ADVISABLE updates — lower urgency, address at next policy refresh
- [ ] Add new use cases to the registry in the profile document (if any flagged above)
- [ ] After acknowledging these results, update `Last policy sweep` and `gaps_found`
  in the AI Governance Practice Profile document (proposed values presented on
  acknowledgment), and save this sweep report to Project knowledge
- [ ] Run the next sweep at your next recurring calendar reminder
```

---

## Mode 2: Direct query

### Parse the proposed practice

Extract from the user's description:
- What AI system or capability is being introduced?
- What does it do — assistive, automated decisions, content generation?
- Who does it affect — employees, customers, third parties?
- Which vendor or model is involved?
- Is there human review, or is it fully automated?
- Are affected parties told the AI is involved?
- Any data flowing to a vendor that wouldn't be expected?

If the description is vague, ask one clarifying question. Don't run a long intake
— direct query mode should be fast.

### Policy diff

Check the proposed practice against the current policy and use case registry:

| Check | Current policy / registry | Proposed practice | Verdict |
|---|---|---|---|
| Use case category | [registry — approved / conditional / never / not present] | [new use case] | 🟢 Covered / 🟡 Gap / 🔴 Conflict |
| Scope of AI use | [what policy says AI is used for] | [new use] | |
| Automated decisions | [policy position on automation] | [is this automated?] | |
| Disclosure to affected parties | [what policy commits to] | [what this requires] | |
| Vendor data use | [policy position on vendor AI] | [this vendor's terms] | |
| Human oversight | [policy statement if any] | [what's actually in place] | |

### Direct query output format

```markdown
# AI Policy Check: [Proposed practice in one line]

**Bottom line:** [POLICY UPDATE REQUIRED / ADVISABLE / NO UPDATE NEEDED]

---

## What's covered

[Aspects of the proposed practice already addressed — brief, confirms no change needed]

## What's missing

### [Gap 1]

**Current policy:** [quote or "Silent"]
**What's needed:** [why this gap matters — legal, reputational, or expectation reason]

**Suggested language:**
> *Add to [section]:*
> "[Drafted text]"

### [Gap 2]
[same format]

## What conflicts

### [Conflict 1 — if any]

**Current policy says:** [quote]
**Proposed practice does:** [what conflicts]
**Resolution:** [which one needs to change — usually practice adjusts to match policy,
or policy is updated to a defensible new position; never silently accept both]

---

## Use case registry

[If this use case isn't in the registry: "Add to the **AI Governance Practice Profile**
document → Use case registry (update the profile document in Project knowledge):"]
```
| [use case] | [Approved/Conditional] | [conditions] | — |
```

---

## Timing

[REQUIRED: "Policy update should happen before this practice goes live — or
immediately if it's already running."
ADVISABLE: "Can proceed; update at next policy refresh."]
```

---

## Suggested language quality standards

AI policy language is unusually prone to becoming outdated — the field moves fast
and vague language ages better than specific commitments. When drafting:

- Match the voice and style of the existing policy (read the actual document)
- Prefer durable language: "AI-assisted" rather than naming specific models that
  will change; "automated or AI-assisted decisions" rather than technical descriptions
- Don't draft commitments the team can't keep — "we always have a human review
  AI outputs" is broken the moment one automated workflow ships
- When a policy position is genuinely changing (not just extending), say so
  explicitly: "This update reflects that we now use AI in [new category] — the
  previous language did not cover this."
- For disclosure language: draft it to be readable by the affected party (employee,
  customer), not just legally accurate

Always say which section to add to. If the right section doesn't exist, suggest
creating it and draft the header. Drafted policy updates are output in chat for the
user to carry into their policy document — never claim to have applied or saved them.

---

## Running on a cadence

The sweep is designed to run on a recurring cadence, but this runtime has no scheduler —
it runs on demand when you say "run the policy sweep." Recommend the user set a
recurring calendar reminder (e.g., weekly or monthly) to invoke it.

After each sweep, the **Last policy sweep** and **gaps_found** fields in the **AI
Governance Practice Profile** document's `## Outputs` section are updated by the user, in
the profile document, only once the human has acknowledged the sweep results (see
"Determine scope" above) — this skill proposes the values; it cannot edit the document.

---

## Close with the next-steps decision tree

End with the next-steps decision tree per the **AI Governance Practice Profile** document's `## Outputs`. Customize the options to what this skill just produced — the five default branches (draft the X, escalate, get more facts, watch and wait, something else) are a starting point, not a lock-in. The tree is the output; the lawyer picks.

## What this skill does not do

- It doesn't update the policy itself — it drafts suggested language and flags
  decisions, but a human reviews and approves every change.
- It doesn't catch incoming regulations — that's the reg-gap-analysis skill. This
  skill monitors internal practice drift, not external legal changes.
- It doesn't enforce that outputs are saved — if completed AIAs, triage results,
  and vendor reviews aren't saved back into this Project's knowledge, the sweep
  won't find them. Direct-query mode works without saved outputs.
- It doesn't read email, Slack, or informal decisions — only structured outputs
  saved to this Project's knowledge.
- It doesn't update the use case registry automatically — it flags registry gaps
  and drafts entries for human review before the user adds them to the profile
  document.
- It doesn't edit the AI Governance Practice Profile document or save anything to
  Project knowledge — it outputs proposed text and field values in chat, and the
  user saves them.
