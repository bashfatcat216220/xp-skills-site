// Bodies for My Computer, Recycle Bin, Internet Explorer, Display Properties.
import { useState } from 'react'
import { allSkills, folders, recycledIdeas, siteConfig } from '../content/skills'
import type { OpenSpec } from '../wm'
import { ExplorerChrome, FileItem, SidePanel } from './Explorer'
import { Icon } from './icons'

// ---- My Computer: About as a system properties sheet ---------------------

export function MyComputerBody({ open }: { open: (spec: OpenSpec) => void }) {
  const shipped = allSkills.filter((s) => s.status === 'shipped').length
  const sidebar = (
    <SidePanel title="Other Places">
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
      <button type="button" className="sp-link" onClick={() => open({ kind: 'ie' })}>
        Contact
      </button>
    </SidePanel>
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
            </dl>
            <hr className="propsheet-hr" />
            <dl className="propsheet-dl">
              <dt>Computer:</dt>
              <dd>
                One human, one Claude Code CLI
                <br />
                {allSkills.length} skills installed ({shipped} shipped,{' '}
                {allSkills.length - shipped} draft)
                <br />
                {folders.length} folders, 0 unread memos
              </dd>
            </dl>
            <hr className="propsheet-hr" />
            <div className="propsheet-about">
              <p>
                A Claude Code skill is a SKILL.md file: a written procedure that teaches Claude
                to do one job the same way every time — what to ask for, what to refuse, what
                the output has to look like. These forty were written for practicing attorneys,
                mostly litigation and counseling work.
              </p>
              <p>
                The categories on the desktop are the actual taxonomy: skills that stress-test
                an argument before opposing counsel does, skills that keep judgment calls
                honest, skills that audit how a conclusion was reached, and skills that make
                Claude behave like a careful junior associate rather than a confident one.
              </p>
              <p>
                The interface is 2003. The tools are not. Every document window has a Copy
                skill markdown button — that is the working part of this site.
              </p>
            </div>
          </article>
        </div>
      </div>
    </ExplorerChrome>
  )
}

// ---- Recycle Bin ---------------------------------------------------------

export function RecycleBinBody() {
  const [selected, setSelected] = useState<string | null>(null)
  const item = recycledIdeas.find((r) => r.id === selected)
  const sidebar = (
    <>
      <SidePanel title="Recycle Bin Tasks">
        <span className="sp-link is-disabled">Empty the Recycle Bin</span>
        <span className="sp-link is-disabled">Restore all items</span>
      </SidePanel>
      <SidePanel title="Details">
        {item ? (
          <>
            <p className="sp-detail-title">{item.title}</p>
            <p>{item.cutNote}</p>
          </>
        ) : (
          <>
            <p className="sp-detail-title">Recycle Bin</p>
            <p className="sp-detail-dim">{recycledIdeas.length} objects</p>
            <p>Skill ideas that did not survive contact with practice. Select one for the reason.</p>
          </>
        )}
      </SidePanel>
    </>
  )
  return (
    <ExplorerChrome
      address="Recycle Bin"
      addressIcon="recycle"
      sidebar={sidebar}
      statusLeft={`${recycledIdeas.length} objects`}
      statusRight="Not restorable"
    >
      <div className="exp-files exp-files-list" role="list" onClick={() => setSelected(null)}>
        {recycledIdeas.map((r) => (
          <div key={r.id} className="recycle-row" role="listitem">
            <FileItem
              icon="trashdoc"
              label={r.title}
              selected={selected === r.id}
              onSelect={() => setSelected(r.id)}
              onOpen={() => setSelected(r.id)}
            />
            <p className="recycle-note">{r.cutNote}</p>
          </div>
        ))}
      </div>
    </ExplorerChrome>
  )
}

// ---- Internet Explorer: contact page -------------------------------------

export function IEBody() {
  return (
    <ExplorerChrome
      address="about:contact"
      addressIcon="ie"
      statusLeft="Done"
      statusRight="Internet"
    >
      <div className="iepage">
        <article className="iepage-inner">
          <h1>Contact</h1>
          <p>
            I write Claude Code skills for lawyers and run them on their behalf. If one of the
            documents on this desktop would be useful in your practice, the markdown is one
            click away and the rest is conversation.
          </p>
          <ul className="iepage-links">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> — email, read daily
            </li>
            <li>
              <a href={siteConfig.github} target="_blank" rel="noreferrer">
                GitHub
              </a>{' '}
              — code and skill repositories
            </li>
            <li>
              <a href={siteConfig.resumeUrl}>Résumé</a> — TODO: attach the current one
            </li>
          </ul>
          <p className="iepage-fine">
            Nothing on this site is legal advice. It is tooling for people licensed to give
            some.
          </p>
        </article>
      </div>
    </ExplorerChrome>
  )
}

// ---- Display Properties (theme switcher) ---------------------------------

export type ThemeId = 'luna' | 'olive' | 'silver'
export const THEMES: { id: ThemeId; label: string }[] = [
  { id: 'luna', label: 'Default (blue)' },
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
