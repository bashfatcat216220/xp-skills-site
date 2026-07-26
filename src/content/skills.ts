import type { FolderDef, Skill } from './types'
import { skills as argumentStressTesting } from './folders/argument-stress-testing'
import { skills as decisionQuality } from './folders/decision-quality'
import { skills as reasoningAudit } from './folders/reasoning-audit'
import { skills as theAssociate } from './folders/the-associate'
import { skills as regulatoryIntelligence } from './folders/regulatory-intelligence'
import { skills as aiGovernancePrivacy } from './folders/ai-governance-privacy'

// ---- Site owner ----------------------------------------------------------
// TODO: adjust these before deploying.
export const siteConfig = {
  userName: 'Bing',
  tagline: 'Claude Code skills for attorneys',
  email: 'merry.riddle@gmail.com',
  github: 'https://github.com/bashfatcat216220',
  resumeUrl: '#', // TODO: link a real résumé (or remove the Start-menu item)
}

// ---- Folders -------------------------------------------------------------

export const folders: FolderDef[] = [
  {
    id: 'argument-stress-testing',
    title: 'Argument Stress-Testing',
    blurb: 'Skills that attack your position before opposing counsel does.',
  },
  {
    id: 'decision-quality',
    title: 'Decision Quality',
    blurb: 'Skills for making judgment calls you can defend six months later.',
  },
  {
    id: 'reasoning-audit',
    title: 'Reasoning Audit',
    blurb: 'Skills that examine how a conclusion was reached, not whether it sounds right.',
  },
  {
    id: 'the-associate',
    title: 'The Associate',
    blurb: 'Skills that make Claude work like a disciplined junior associate.',
  },
  {
    id: 'regulatory-intelligence',
    title: 'Regulatory Intelligence',
    blurb: 'Skills for reading regulators as moving systems, not static texts.',
  },
  {
    id: 'ai-governance-privacy',
    title: 'AI Governance & Privacy',
    blurb: 'Skills for AI Act, DPIA, and automated-decision counseling work.',
  },
]

export const allSkills: Skill[] = [
  ...argumentStressTesting,
  ...decisionQuality,
  ...reasoningAudit,
  ...theAssociate,
  ...regulatoryIntelligence,
  ...aiGovernancePrivacy,
]

export function skillsInFolder(folderId: string): Skill[] {
  return allSkills.filter((s) => s.folder === folderId)
}

export function getSkill(id: string): Skill | undefined {
  return allSkills.find((s) => s.id === id)
}

export function getFolder(id: string): FolderDef | undefined {
  return folders.find((f) => f.id === id)
}

// ---- Skill markdown export ----------------------------------------------

export function skillToMarkdown(skill: Skill): string {
  return [
    '---',
    `name: ${skill.id}`,
    `description: ${skill.oneLiner}`,
    '---',
    '',
    `# ${skill.title}`,
    '',
    '## What it does',
    '',
    skill.whatItDoes,
    '',
    '## When to use it',
    '',
    skill.whenToUse,
    '',
    '## Example output',
    '',
    '```',
    skill.exampleOutput,
    '```',
    '',
    skill.skillMd ?? '<!-- TODO: full SKILL.md body goes here -->',
    '',
  ].join('\n')
}
