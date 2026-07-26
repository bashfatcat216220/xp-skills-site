import type { Skill } from '../types'

export const skills: Skill[] = [
  {
    id: "multi-regime-conflict-diff",
    folder: "regulatory-intelligence",
    title: "Multi-Regime Conflict Diff",
    oneLiner: "Diffs what two or more regulatory regimes actually require of the same conduct, and isolates the points where compliance with one breaches another.",
    whatItDoes: "Takes a described practice or product and maps each regime's operative requirements onto it side by side, obligation by obligation, rather than summarizing each regime in isolation. It then classifies each pairing as aligned, additive, or conflicting, and for genuine conflicts it identifies which regime's requirement is stricter and whether a single compliance posture can satisfy both. Output is a diff table plus a short list of decisions that cannot be deferred.",
    whenToUse: "When a client operates the same product or data flow across regimes — GDPR and CCPA, EU AI Act and sectoral rules, home and host state banking requirements — and someone has asked the falsely simple question of what the compliance position is.",
    exampleOutput: `CONDUCT: retention of applicant CVs after rejection (Novatek HR tool, EU + CA applicants)

OBLIGATION            GDPR                       CCPA
lawful basis          required (Art. 6)          not required as such
retention limit       storage limitation —       no fixed limit; disclosure
                      justify the period          of period required
deletion on request   Art. 17, with exceptions   right to delete, broader
                                                 employer exceptions

CONFLICTS: 0 hard, 2 additive
  additive-1: GDPR retention-justification memo also satisfies CCPA
              disclosure if surfaced in the notice at collection
  additive-2: deletion workflow must implement the NARROWER
              exception set (GDPR) to satisfy both

DECISION REQUIRED: single global retention period, or per-regime split.
A single 12-month period survives both regimes; a 36-month period
requires a GDPR justification that does not currently exist.`,
    status: "shipped",
  },
  {
    id: "regulator-behavior-profile",
    folder: "regulatory-intelligence",
    title: "Regulator Behavior Profile",
    oneLiner: "Builds a working profile of how a specific regulator actually behaves — priorities, escalation habits, settlement posture — from its public output.",
    whatItDoes: "Assembles the regulator's public record — enforcement announcements, guidance, speeches, consultation responses, annual reports — and extracts behavioral patterns: what it opens cases about, what it warns about but does not pursue, how it responds to self-reporting, and how its stated priorities compare to where its actions land. The result is a profile written for counsel deciding how to engage, with each claim tied to the public material it came from and gaps in the record flagged as gaps.",
    whenToUse: "Before first contact with an unfamiliar regulator — a voluntary disclosure, a consultation response, a dawn-raid follow-up — or when advising a client on how a filing or remediation plan is likely to be received.",
    exampleOutput: `REGULATOR PROFILE: [national data protection authority]
period reviewed: last 36 months of public output

STATED PRIORITIES (from annual plan): children's data, adtech, AI
OBSERVED ACTIVITY: enforcement volume concentrated in breach-
  notification failures and access-request non-compliance;
  adtech appears in guidance but rarely in enforcement

ESCALATION HABIT: warning letter precedes formal action in the
  clear majority of published matters; direct-to-fine reserved
  for repeat conduct and non-cooperation
SELF-REPORT POSTURE: cooperation cited as mitigating in most
  published penalty notices; no published case punishing a
  voluntary report on its face

GAPS: no public record on how it treats DPIA quality disputes.
CONFIDENCE: moderate — profile rests on published output only;
  informal practice may differ.`,
    status: "shipped",
  },
  {
    id: "enforcement-pattern-exposure",
    folder: "regulatory-intelligence",
    title: "Enforcement Pattern Exposure",
    oneLiner: "Scores a client's actual practices against the fact patterns regulators have historically acted on, not against the rule text.",
    whatItDoes: "Works from the observation that enforcement clusters around recurring fact patterns — the conduct regulators actually move on — which is a narrower and differently shaped set than everything the rules prohibit. It compares the client's described practices against those recurring patterns and ranks exposure by resemblance: which of the client's practices look like the ones that draw action, which are technically non-compliant but historically ignored, and which are in the zone where guidance is hardening into enforcement. Each finding states the pattern it matched and why.",
    whenToUse: "Prioritizing a remediation backlog, scoping a compliance audit, or answering the client who asks which of forty open gaps actually matter.",
    exampleOutput: `EXPOSURE RANKING: Corvantis Ltd. — 12 open compliance gaps assessed

HIGH RESEMBLANCE TO ENFORCED PATTERNS
  1. dark-pattern consent flow on cancellation
     matches: recurring consent-design pattern in published
     EU DPA and FTC actions; consumer-facing, screenshot-able
  2. indefinite retention of churned-customer data
     matches: retention cases typically follow a breach; this
     gap converts any incident into a multiplier

LOW HISTORICAL ENFORCEMENT DESPITE NONCOMPLIANCE
  9. records-of-processing register 8 months stale
     pattern: cited as aggravator in wider cases, rarely the
     lead violation — fix opportunistically

HARDENING ZONE (guidance dense, enforcement starting)
  4. AI-assisted pricing without disclosure
     recommend treating as high within 12 months

NOTE: ranking reflects observed enforcement behavior, not legality.
Items ranked low remain violations.`,
    status: "shipped",
  },
  {
    id: "soft-law-crosswalk",
    folder: "regulatory-intelligence",
    title: "Soft-Law Crosswalk",
    oneLiner: "Maps the non-binding layer — guidance, FAQs, codes of practice, standards — onto the binding rules it interprets, and shows where the two have drifted apart.",
    whatItDoes: "Collects the soft-law instruments sitting on top of a binding regime and crosswalks each guidance position to the statutory or regulatory provision it purports to interpret. It flags three things: guidance that adds obligations with no textual anchor, binding provisions with no interpretive coverage at all, and points where two soft-law sources from the same regulator disagree. Each entry carries a weight assessment — how much deference the instrument realistically commands.",
    whenToUse: "When a client wants to depart from guidance and needs to know how exposed that position is, or when building a compliance program and deciding which of the informal layer to treat as effectively mandatory.",
    exampleOutput: `CROSSWALK: transparency obligations, EU AI Act limited-risk tier

BINDING PROVISION          SOFT-LAW COVERAGE           DRIFT
disclosure that user is    Commission FAQ + draft      FAQ adds a
interacting with AI        code of practice            "prominence"
                                                       standard not
                                                       in the text
deepfake labeling          draft code only             code proposes
                                                       machine-readable
                                                       marking — anchor
                                                       is thin
emotion-recognition        NO GUIDANCE FOUND           uncovered;
notice at workplace                                    reasonable-
                                                       interpretation
                                                       memo advised

INTERNAL CONFLICT: FAQ says disclosure "at first interaction";
draft code says "before any processing." Departing from the code
here is defensible; departing from the FAQ is not recommended.`,
    status: "shipped",
  },
  {
    id: "authority-half-life",
    folder: "regulatory-intelligence",
    title: "Authority Half-Life",
    oneLiner: "Estimates how much of a piece of guidance or precedent is still good law given everything the regime has done since it issued.",
    whatItDoes: "Takes a specific authority — a guidance document, an opinion, a settled interpretation — and audits it section by section against subsequent regime activity: amendments, superseding guidance, reorganizations of the issuing body, and shifts in enforcement posture. Each section gets a status of intact, eroded, or superseded, with the eroding event named, plus an overall judgment on whether the document can still be cited as a whole or only in fragments. It refuses to score sections where the record is too thin, and says so.",
    whenToUse: "Before relying on guidance more than a few years old in a fast-moving regime, or when opposing counsel or a client memo cites an authority you suspect has quietly rotted.",
    exampleOutput: `AUTHORITY: regulator working-party opinion on employee monitoring
issued: 9 years ago    regime events since: 14 relevant

SECTION-BY-SECTION
  s.2 (proportionality framework)   INTACT — restated in two
                                    successor guidance documents
  s.4 (email monitoring)            ERODED — successor guidance
                                    narrows the permissible scope;
                                    cite only with the update
  s.5 (covert monitoring)           ERODED — issuing body replaced;
                                    successor has not adopted this
                                    section
  s.7 (biometric attendance)        SUPERSEDED — subject matter now
                                    governed by AI Act provisions
  s.8 (works-council consultation)  NOT SCORED — record too thin

ESTIMATED HALF-LIFE: ~40% of the opinion remains safely citable.
RECOMMENDATION: cite s.2 freely; s.4 with the successor guidance
alongside; do not cite s.5 or s.7.`,
    status: "draft",
  },
]
