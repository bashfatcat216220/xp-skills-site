---
name: customize
description: >
  Guided customization of your AI governance practice profile — change one thing
  without re-running the whole cold-start interview. Adjust risk posture,
  escalation contacts, use-case registry entries, vendor AI positions,
  AI policy commitments, or impact-assessment house style. Use when the user
  says "change my [thing]", "update my profile", "edit my config", "tune my
  playbook", or "customize".
---

# customize

## When this runs

The user asked to customize their setup — e.g. "customize", "update my
profile", "change my risk posture". They want to change something in their
practice profile — a risk posture, an escalation contact, a playbook
position, a jurisdiction, an output format — without re-running the whole
cold-start interview and without hand-editing the document themselves.

## What to do

1. **Read the profile.** Read the **AI Governance Practice Profile** document
   in this Project's knowledge. If it isn't in the Project knowledge, ask the
   user to attach it to this conversation. If it does not exist or still
   contains `[PLACEHOLDER]` values, say:

   > You haven't run setup yet. Run the cold-start interview first —
   > customize is for adjusting a profile you already have.

2. **Show the customizable map.** List what's in the profile, grouped, with a
   one-line summary of the current value:

   - **Company / who you are** — name, industry, jurisdictions, stage, practice
     setting *(company-level fields — if you keep similar practice profile
     documents in other claude.ai Projects, changes here need to be mirrored
     there too)*
   - **Regulatory footprint** — EU AI Act, state AI laws, sector regulators in
     scope
   - **Risk posture** — conservative / middle / aggressive, what each means for
     triage and AIA output
   - **People** — governance team, AI risk owner, escalation chain, approvers
   - **Use case registry** — approved / conditional / never entries, and
     conditions attached to each
   - **AI system inventory** — per-system role (provider / deployer / etc.) and
     tier under the EU AI Act. Ask for the AI inventory skill ("ai inventory")
     for the dedicated editor.
   - **Vendor AI governance** — training-on-data, liability, model-change
     notice, and other positions in your vendor AI playbook
   - **AI policy commitments** — the public or internal commitments your AI
     policy has made, that these skills cross-check against
   - **Impact assessment house style** — AIA section order, risk scoring
     format, stakeholder framing
   - **Workflow** — intake preferences, output format, review cadence for the
     policy monitor
   - **Integrations** — what's connected (Slack, document storage), what falls
     back

3. **Ask what they want to change.**

   > What would you like to adjust? Pick a section, or describe the change in
   > your own words.

4. **Make the change.** Show the current value, ask for the new value, explain
   what changes downstream, confirm, apply it to your working copy of the
   profile.

   Examples of downstream explanation:
   - *Risk posture middle → conservative:* "I'll flag more use cases as
     conditional rather than approved, surface more AIA follow-ups, and
     recommend more conservative vendor AI redlines."
   - *Adding an escalation contact:* "Every skill that routes escalations
     (use-case triage, vendor AI review, reg gap analysis) will now include
     this contact on the relevant risk bands."
   - *New use case registry entry:* "Use-case triage will match against this
     entry on its next run. Existing AIAs aren't rewritten — re-run them if
     you want the new posture reflected."

5. **For company-level changes** (company name, industry, jurisdictions,
   practice setting, stage): update the corresponding fields in the
   **AI Governance Practice Profile** document and note:

   > This affects everything that reads your company profile — anything that
   > reads your jurisdiction footprint now sees [new value]. If you keep
   > similar practice profile documents in other claude.ai Projects, update
   > them there too — this Project's knowledge doesn't flow to other Projects.

6. **Output the full revised profile.** Once the change is confirmed, output
   the complete revised **AI Governance Practice Profile** document in the
   chat — the whole document with the change applied, not just the changed
   section. Then instruct:

   > I can't edit Project knowledge directly, so nothing is saved yet. To make
   > this change stick: replace the **AI Governance Practice Profile**
   > document in this Project's knowledge with the version above (remove the
   > old document, add this as the new one). If you copied any sections of
   > the profile into this Project's custom instructions, refresh those too.
   > Until you do, this conversation reflects the change but future
   > conversations won't.

7. **Close.**

   > Done. Once you've replaced the document, your next output will reflect
   > the change. Anything else? You can ask to customize anytime.

## Guardrails

- **Never delete a section.** If the user wants to "remove" something, set it
  to `[Not configured]` and explain what that means for behavior going
  forward. ("Removing your escalation chain means use-case triage will flag
  escalation-worthy items but won't route them to a specific person.")
- **Flag internal inconsistency.** If the change would make the profile
  inconsistent (e.g., risk posture aggressive + escalation "everything goes to
  the GC"; or "EU AI Act in scope" + "no systems flagged for the EU"), flag
  the tension and ask which one they want.
- **Flag guardrail degradation.** If the user asks to turn off a guardrail
  ("stop adding the `[review]` flag," "drop the citations warning," "skip the
  privilege header"), explain what the guardrail protects against and confirm
  they understand the trade-off. Most guardrails are adjustable — a few are
  structural:
  - The `[review]` flag mechanism (tells the user when legal judgment is
    needed rather than a confident wrong answer) — load-bearing, don't
    remove.
  - Source attribution tags on retrieved content — load-bearing, don't remove.
  - `[verify]` tags on cited statutes/regulations — load-bearing, don't
    remove.
- **One change at a time.** Don't re-ask the whole interview. If the user
  wants multiple changes, handle them sequentially and confirm each before
  moving on. Output the full revised document once at the end, with all
  confirmed changes applied — not once per change.
- **Never claim to have saved.** You cannot write to Project knowledge. Every
  change lands only when the user replaces the document. Say so; don't imply
  otherwise.
