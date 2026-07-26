import { useState } from 'react'
import type { Skill } from '../content/types'
import { getFolder, skillToMarkdown } from '../content/skills'
import { Icon } from './icons'

const MENUS = ['File', 'Edit', 'View', 'Insert', 'Format', 'Help']

export function SkillDoc({ skill }: { skill: Skill }) {
  const [copied, setCopied] = useState(false)
  const folder = getFolder(skill.folder)

  const copyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(skillToMarkdown(skill))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      // clipboard blocked; nothing sensible to do
    }
  }

  return (
    <div className="skilldoc">
      <div className="exp-menubar" role="menubar" aria-label="Menu (decorative)">
        {MENUS.map((m) => (
          <span key={m} className="exp-menu-item" role="menuitem" aria-disabled="true">
            {m}
          </span>
        ))}
      </div>
      <div className="skilldoc-toolbar">
        <button type="button" className="xpbtn skilldoc-copy" onClick={copyMarkdown}>
          <Icon name="document" size={16} />
          <span>{copied ? 'Copied to clipboard' : 'Copy skill markdown'}</span>
        </button>
        <span className={'skilldoc-badge' + (skill.status === 'draft' ? ' is-draft' : '')}>
          {skill.status === 'shipped' ? 'shipped' : 'draft'}
        </span>
      </div>
      <div className="skilldoc-page">
        <article className="skilldoc-article">
          <p className="skilldoc-crumb">
            My Skills \ {folder?.title} \ {skill.id}.md
          </p>
          <h1>{skill.title}</h1>
          <p className="skilldoc-oneliner">{skill.oneLiner}</p>

          <h2>What it does</h2>
          <p>{skill.whatItDoes}</p>

          <h2>When to use it</h2>
          <p>{skill.whenToUse}</p>

          <h2>Example output</h2>
          <pre className="skilldoc-example">{skill.exampleOutput}</pre>

          {skill.skillMd ? (
            <>
              <h2>SKILL.md</h2>
              <pre className="skilldoc-example">{skill.skillMd}</pre>
            </>
          ) : (
            <p className="skilldoc-todo">
              TODO: full SKILL.md body goes here. The copy button ships the frontmatter and
              sections above in the meantime.
            </p>
          )}
        </article>
      </div>
      <div className="exp-statusbar">
        <span className="status-cell status-grow">
          {copied ? 'Skill markdown copied to clipboard' : 'For Help, press F1 (it will not help)'}
        </span>
        <span className="status-cell">{skill.status}</span>
        <span className="status-cell">{skill.exampleOutput.length + skill.whatItDoes.length} chars</span>
      </div>
    </div>
  )
}
