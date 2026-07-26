export type SkillStatus = 'shipped' | 'draft'

export interface Skill {
  id: string
  /** folder id, e.g. 'argument-stress-testing' */
  folder: string
  title: string
  /** one sentence, shown in Explorer details and under the doc title */
  oneLiner: string
  /** 2–4 plain sentences */
  whatItDoes: string
  /** 1–3 plain sentences */
  whenToUse: string
  /** short worked example of the skill's output, multiline */
  exampleOutput: string
  status: SkillStatus
  /** TODO: drop the actual SKILL.md body here when ready */
  skillMd?: string
}

export interface FolderDef {
  id: string
  title: string
  /** shown in the Explorer "Details" sidebar panel */
  blurb: string
}
