import type { Skill } from '../types'
import researchMemoryMd from '../skillmd/research-memory.md?raw'
import opposingCaseMd from '../skillmd/opposing-case.md?raw'
import preMortemMd from '../skillmd/pre-mortem.md?raw'
import loadBearingMd from '../skillmd/load-bearing-assumptions.md?raw'
import concessionMapMd from '../skillmd/concession-map.md?raw'
import registerShiftMd from '../skillmd/register-shift.md?raw'
import regulatorReadMd from '../skillmd/regulator-read.md?raw'

export const skills: Skill[] = [
  {
    id: "research-memory",
    folder: "general-practice",
    title: "Research Memory",
    oneLiner: "Memory first, research second, log always: the same issue never gets two quietly different answers years apart.",
    whatItDoes: "Before answering a legal research question, checks the Project's Research Log and past conversations for prior treatment, then builds on or explicitly reconciles with what it finds. Every substantive answer ends with a proposed log entry (issue, jurisdiction, posture, short answer, key authority with provenance) and the complete updated log as a replaceable document. Supersession is recorded as a chain, never a silent overwrite.",
    whenToUse: "Any research question in a Project, or asking whether an issue has come up before. Best kept in a standing research Project all matters share, because doctrine recurs across matters even when facts don't.",
    exampleOutput: `### R-014 — Inevitable disclosure at the TRO stage
Jurisdiction / posture: Utah — TRO
Short answer:  Not adopted; hire-plus-bad-acts framing survives.
               Reconciled with R-003 (2025): narrowed, not superseded.
Key authority: [2 cites, each tagged verify-pinpoint]
Status: current — logged 2026-07-26

-> Replace "Research Log" in this Project's knowledge with the
   attached updated version.`,
    status: "shipped",
    skillMd: researchMemoryMd,
  },
  {
    id: "opposing-case",
    folder: "general-practice",
    title: "Opposing Case",
    oneLiner: "Builds the case against your position in three escalating tiers, ending with the argument that actually wins.",
    whatItDoes: "Constructs the opposition properly: the obvious objection anyone would raise, the sophisticated one a careful reader would, and the tier-three argument that would change the outcome if the opponent found it. That one usually hides in an unargued premise, the framing itself, or your own cited authority turned around. Each tier is argued in the opponent's voice, not described, and the output closes with the weakest link and the cheapest fix.",
    whenToUse: "Poke holes in this, how would opposing counsel attack this, what am I missing. Best run before a position ships, while there is still time to close the hole it finds.",
    exampleOutput: `TIER 3 — the one that wins (in their voice):
"The processing isn't necessary to deliver the service; it's
necessary to improve it, and the LIA never confronts that
distinction. Their own cited guidance draws it in terms."

Weakest link:  Tier 3 — currently unanswered
Cheapest fix:  narrow the purpose language before this ships
If it can't be closed: flag the risk to the client, don't paper it`,
    status: "shipped",
    skillMd: opposingCaseMd,
  },
  {
    id: "pre-mortem",
    folder: "general-practice",
    title: "Pre-Mortem",
    oneLiner: "Assumes the advice already failed eighteen months out and traces back to the decision that was the fault line.",
    whatItDoes: "Instead of listing generic risks, asserts the failure as a fact and works the chain backward: the failure, the proximate cause, the one named decision that made it possible, and the early signal nobody was watching for. It runs the chain three ways (legal, operational, relationship) because they lead to different fixes, and weights the boring failures, which is where the losses actually come from. The prevention is usually an owner and a date, not more analysis.",
    whenToUse: "Before advice ships, a position is signed off, or a deployment is approved: run a pre-mortem, how does this blow up, what would I regret.",
    exampleOutput: `OPERATIONAL CHAIN (most likely):
Failure:  inquiry opened after a complaint; the file shows no
          record of human involvement in the contested decision
Decision: the approval attached a human-review condition without
          naming an owner or a verification date
Signal at 3 months: no review log existed; nobody asked for one

Cheapest prevention: name the owner in the approval itself
What to watch: the review log, monthly, by the matter owner`,
    status: "shipped",
    skillMd: preMortemMd,
  },
  {
    id: "load-bearing-assumptions",
    folder: "general-practice",
    title: "Load-Bearing Assumptions",
    oneLiner: "Finds the unstated premises a conclusion rests on and sorts them by what happens if each one is false.",
    whatItDoes: "Extracts every proposition the reasoning needs but never argues for (definitional, factual, legal, continuity) and tests each one: does the conclusion collapse or merely weaken if it is false, and how would you find out. The pairing is the point: a collapse-if-false assumption verifiable in ten minutes is a task; one that is unknowable in advance is a risk to disclose to the client. Most memos treat those identically and shouldn't.",
    whenToUse: "What am I assuming here, why does this feel shaky, or when a case theory has been stable long enough that nobody remembers what it rests on.",
    exampleOutput: `COLLAPSES IF FALSE
  "Human review" as practiced meets the meaningful-involvement bar
     -> check: ask for the reviewer's actual override rate
  The vendor still doesn't train on client inputs (2024 terms
  assumed) -> check: current ToS, ten minutes

WEAKENS IF FALSE
  The regulator keeps prioritizing documentation failures
     -> monitor enforcement; not verifiable in advance

Most worth ten minutes: the override rate — it decides the
automated-decision question [verify]`,
    status: "shipped",
    skillMd: loadBearingMd,
  },
  {
    id: "concession-map",
    folder: "general-practice",
    title: "Concession Map",
    oneLiner: "Sorts negotiation give-ups into free, priced, and fatal before the call, with what each trade should buy back.",
    whatItDoes: "Maps what can be conceded at no cost (which buys credibility), what costs something and should be traded for something named in advance, and the three or four things that genuinely cannot move. It distinguishes can't from won't so neither gets spent by accident, tracks where a concession travels beyond the clause it sits in, and predicts the other side's fatal item so nobody pushes on a locked door all afternoon.",
    whenToUse: "Heading into a contract negotiation, a regulator engagement, or an internal disagreement over a position: what can I give on, prepare me for this call.",
    exampleOutput: `GIVE FREELY  logo use in customer list      give early; buys goodwill
TRADE        30 -> 14 day model-change      ask: audit right on
             notice                         material changes
CANNOT MOVE  training on client data        legal bar (client policy +
                                            upstream DPA) — a "can't,"
                                            said early, with the reason

Their likely fatal item: unlimited liability — don't spend the
afternoon there. Expected-but-refused: exclusivity; decline it in
the first call, not at 6pm on Friday.`,
    status: "shipped",
    skillMd: concessionMapMd,
  },
  {
    id: "register-shift",
    folder: "general-practice",
    title: "Register Shift",
    oneLiner: "One legal conclusion rendered for the GC, the engineers, the board, or a lay reader, without the substance drifting.",
    whatItDoes: "Rewrites a conclusion for each audience it has to reach, changing what is foregrounded and what is assumed but never what is true: no hedge upgraded, no condition dropped, even in the four-sentence board version. The test is that two readers of two versions, in a room together, would believe they had been told the same thing. It ends by stating exactly what the short versions leave out and whether that loss matters.",
    whenToUse: "When a conclusion has to travel to a room that won't read the memo: I need a board version, put this in plain English, the engineers won't follow this.",
    exampleOutput: `ENGINEERING VERSION (requirements, not reasoning):
- No automated message may send without a named human approving it
  (regulatory condition; stops applying if the feature is EU-gated)

BOARD VERSION (four sentences): ... "likely defensible" stays
"likely defensible" — it does not become "compliant."

What the short versions leave out: the appeal-path condition and
the rejected full-automation alternative. It matters: the board
should see condition C2 before approving budget.`,
    status: "shipped",
    skillMd: registerShiftMd,
  },
  {
    id: "regulator-read",
    folder: "general-practice",
    title: "Regulator Read",
    oneLiner: "What a named authority will actually do with a position, kept strictly separate from what the law says.",
    whatItDoes: "Searches the authority's recent enforcement activity and characterizes its posture: current priorities, the gap between published text and decisional practice, what draws its attention, what it punishes versus tolerates, and what tone lands in correspondence. The output is two labeled halves, the legal read and the predicted read, because a client told the regulator probably won't look who hears this is fine has been badly served.",
    whenToUse: "How would the ICO see this, would this survive the FTC, or before correspondence or a filing to a named authority. It depends on web search for currency; without it, treat the prediction as reputation, not analysis.",
    exampleOutput: `LEGAL READ:     disclosure timing is defensible under the
                statute's "without undue delay" standard
PREDICTED READ: this authority opened 3 inquiries in 14 months on
                this pattern — all complaint-triggered, all resolved
                on documentation quality (decisions cited with dates)
DIVERGENCE:     the paper record matters more than the timing

Attention risk: complaint-driven; low absent an unhappy counterparty
Cheapest mitigation: contemporaneous decision memo, filed same day`,
    status: "shipped",
    skillMd: regulatorReadMd,
  },
]
