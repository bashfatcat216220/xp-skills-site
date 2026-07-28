import type { FolderDef, Skill } from './types'
import { skills as aiGovernance } from './folders/ai-governance'
import { skills as generalPractice } from './folders/general-practice'
import { skills as aiGovernanceToolkit } from './folders/ai-governance-toolkit'

// ---- Site owner ----------------------------------------------------------
export const siteConfig = {
  userName: 'Bing',
  tagline: 'Claude skills for attorneys',
  email: 'merry.riddle@gmail.com',
  github: 'https://github.com/bashfatcat216220',
}

// ---- Folders -------------------------------------------------------------

export const folders: FolderDef[] = [
  {
    id: 'ai-governance',
    title: 'AI Governance',
    blurb:
      'Five skills for an outside-counsel AI governance practice with one main client, adapted from Anthropic\'s claude-for-legal toolkit. They all read the standing client profile first.',
  },
  {
    id: 'general-practice',
    title: 'General Practice',
    blurb:
      'Seven skills that work across any matter, any client: research memory, and six thinking tools that stress-test a position before it ships.',
  },
  {
    id: 'ai-governance-toolkit',
    title: 'AI Governance Toolkit',
    blurb:
      'The chat-ready adaptation of the ai-governance-legal plugin from Anthropic\'s claude-for-legal: onboarding, triage, policy work, monitoring, and the practice profile template the rest read. Four of these are the ancestors of the client-adapted skills in AI Governance.',
  },
]

export const allSkills: Skill[] = [
  ...aiGovernance,
  ...generalPractice,
  ...aiGovernanceToolkit,
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
  // When the real SKILL.md is embedded, that is the artifact worth copying.
  if (skill.skillMd) return skill.skillMd
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
