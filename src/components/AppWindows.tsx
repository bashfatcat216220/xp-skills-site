// Bodies for My Computer and Display Properties.
import { useState } from 'react'
import { allSkills, folders, siteConfig } from '../content/skills'
import type { OpenSpec } from '../wm'
import { ExplorerChrome, WebView } from './Explorer'
import { Icon } from './icons'

// ---- My Computer: About as a system properties sheet ---------------------

export function MyComputerBody({ open }: { open: (spec: OpenSpec) => void }) {
  const shipped = allSkills.filter((s) => s.status === 'shipped').length
  const sidebar = (
    <WebView
      icon="computer"
      title="My Computer"
      seeAlso={
        <>
          {folders.slice(0, 3).map((f) => (
            <button
              key={f.id}
              type="button"
              className="sp-link"
              onClick={() => open({ kind: 'explorer', folderId: f.id })}
            >
              {f.title}
            </button>
          ))}
          <a className="sp-link" href={`mailto:${siteConfig.email}`}>
            Contact
          </a>
        </>
      }
    >
      <p>What this collection is, who wrote it, and where the code lives.</p>
    </WebView>
  )
  return (
    <ExplorerChrome
      address="My Computer"
      addressIcon="computer"
      sidebar={sidebar}
      statusLeft="System properties"
      statusRight="Skills XP"
    >
      <div className="propsheet-wrap">
        <div className="propsheet">
          <div className="propsheet-tabs">
            <span className="propsheet-tab is-active">General</span>
            <span className="propsheet-tab is-disabled">Hardware</span>
            <span className="propsheet-tab is-disabled">Advanced</span>
          </div>
          <article className="propsheet-page">
            <div className="propsheet-row">
              <span className="propsheet-art">
                <Icon name="computer" size={48} />
              </span>
              <dl className="propsheet-dl">
                <dt>System:</dt>
                <dd>
                  Skills XP
                  <br />
                  Attorney Edition
                  <br />
                  Version 2026, Service Pack 1
                </dd>
              </dl>
            </div>
            <hr className="propsheet-hr" />
            <dl className="propsheet-dl">
              <dt>Registered to:</dt>
              <dd>
                {siteConfig.userName}
                <br />
                {siteConfig.tagline}
              </dd>
              <dt>GitHub:</dt>
              <dd>
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  {siteConfig.github.replace('https://', '')}
                </a>
              </dd>
              <dt>Email:</dt>
              <dd>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </dd>
            </dl>
            <hr className="propsheet-hr" />
            <dl className="propsheet-dl">
              <dt>Computer:</dt>
              <dd>
                One human, one Claude Code CLI
                <br />
                {allSkills.length} skills installed, {shipped} shipped
                <br />
                {folders.length} folders, 0 unread memos
              </dd>
            </dl>
            <hr className="propsheet-hr" />
            <div className="propsheet-about">
              <p>
                A Claude skill is a SKILL.md file: a written procedure that teaches Claude to
                do one job the same way every time. It says what to ask for, what to refuse,
                and what the output has to look like. Everything here is a working set for a
                practicing attorney, not samples.
              </p>
              <p>
                The three folders on the desktop are the real split. AI Governance holds five
                skills adapted for an outside-counsel practice with one main client, all
                reading a standing client profile. General Practice holds research memory
                plus six thinking tools that work on any matter. AI Governance Toolkit is
                the chat-ready adaptation of the ai-governance-legal plugin from
                Anthropic&rsquo;s claude-for-legal — onboarding, triage, policy work, and
                monitoring — including the practice profile template the rest of it reads.
              </p>
              <p>
                The interface is 2003. The tools are not. Every document window has a Copy
                skill markdown button, and the code lives at{' '}
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  {siteConfig.github.replace('https://', '')}
                </a>
                . Nothing on this site is legal advice; it is tooling for people licensed to
                give some.
              </p>
            </div>
          </article>
        </div>
      </div>
    </ExplorerChrome>
  )
}

// ---- Display Properties (theme switcher) ---------------------------------

export type ThemeId = 'classic' | 'luna' | 'olive' | 'silver'
export const THEMES: { id: ThemeId; label: string }[] = [
  { id: 'classic', label: 'Windows Classic' },
  { id: 'luna', label: 'Luna (blue)' },
  { id: 'olive', label: 'Olive Green' },
  { id: 'silver', label: 'Silver' },
]

export function DisplayPropertiesBody({
  theme,
  setTheme,
  close,
}: {
  theme: ThemeId
  setTheme: (t: ThemeId) => void
  close: () => void
}) {
  const [pending, setPending] = useState<ThemeId>(theme)
  return (
    <div className="display-props">
      <div className="propsheet-tabs">
        <span className="propsheet-tab is-disabled">Themes</span>
        <span className="propsheet-tab is-disabled">Desktop</span>
        <span className="propsheet-tab is-active">Appearance</span>
        <span className="propsheet-tab is-disabled">Settings</span>
      </div>
      <div className="propsheet-page">
        <div className={'display-preview theme-preview-' + pending} aria-hidden="true">
          <div className="dp-win dp-win-back">
            <div className="dp-title">Inactive Window</div>
          </div>
          <div className="dp-win">
            <div className="dp-title">Active Window</div>
            <div className="dp-body">
              <div className="dp-text">Window Text</div>
              <div className="dp-btn">OK</div>
            </div>
          </div>
        </div>
        <label className="display-label" htmlFor="scheme">
          Color scheme:
        </label>
        <select
          id="scheme"
          className="xpselect"
          value={pending}
          onChange={(e) => setPending(e.target.value as ThemeId)}
        >
          {THEMES.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
        <div className="display-buttons">
          <button
            type="button"
            className="xpbtn"
            onClick={() => {
              setTheme(pending)
              close()
            }}
          >
            OK
          </button>
          <button type="button" className="xpbtn" onClick={close}>
            Cancel
          </button>
          <button type="button" className="xpbtn" onClick={() => setTheme(pending)}>
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
