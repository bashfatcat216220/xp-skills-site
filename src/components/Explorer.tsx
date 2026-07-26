import React, { useState } from 'react'
import { folders, getFolder, skillsInFolder, skillToMarkdown } from '../content/skills'
import type { Skill } from '../content/types'
import type { OpenSpec } from '../wm'
import { Icon, IconName } from './icons'

const MENUS = ['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help']

// ---- Shared Explorer chrome ---------------------------------------------

export function ExplorerChrome({
  address,
  addressIcon,
  canBack = false,
  canForward = false,
  canUp = false,
  onBack,
  onForward,
  onUp,
  sidebar,
  statusLeft,
  statusRight,
  children,
}: {
  address: string
  addressIcon: IconName
  canBack?: boolean
  canForward?: boolean
  canUp?: boolean
  onBack?: () => void
  onForward?: () => void
  onUp?: () => void
  sidebar?: React.ReactNode
  statusLeft: string
  statusRight?: string
  children: React.ReactNode
}) {
  return (
    <div className="explorer">
      <div className="exp-menubar" role="menubar" aria-label="Menu (decorative)">
        {MENUS.map((m) => (
          <span key={m} className="exp-menu-item" role="menuitem" aria-disabled="true">
            {m}
          </span>
        ))}
      </div>
      <div className="exp-toolbar">
        <button type="button" className="toolbtn" disabled={!canBack} onClick={onBack}>
          <Icon name="back" size={22} />
          <span>Back</span>
        </button>
        <button
          type="button"
          className="toolbtn toolbtn-noword"
          disabled={!canForward}
          onClick={onForward}
          aria-label="Forward"
        >
          <Icon name="forward" size={22} />
        </button>
        <span className="toolbar-sep" />
        <button
          type="button"
          className="toolbtn toolbtn-noword"
          disabled={!canUp}
          onClick={onUp}
          aria-label="Up one level"
        >
          <Icon name="up" size={22} />
        </button>
      </div>
      <div className="exp-addressbar">
        <span className="addr-label">Address</span>
        <span className="addr-box">
          <Icon name={addressIcon} size={14} />
          <span className="addr-text">{address}</span>
          <span className="addr-drop" aria-hidden="true">
            ▾
          </span>
        </span>
        <span className="addr-go" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 16 16">
            <path
              d="M2 8 L10 8 M7 4.5 L10.5 8 L7 11.5"
              fill="none"
              stroke="#3d5e93"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Go
        </span>
      </div>
      <div className="exp-main">
        {sidebar && <div className="exp-sidebar">{sidebar}</div>}
        <div className="exp-files-wrap">{children}</div>
      </div>
      <div className="exp-statusbar">
        <span className="status-cell status-grow">{statusLeft}</span>
        {statusRight && <span className="status-cell">{statusRight}</span>}
      </div>
    </div>
  )
}

// ---- Win2000-style "web view" sidebar ------------------------------------

export function WebView({
  icon,
  title,
  children,
  seeAlso,
}: {
  icon: IconName
  title: string
  children: React.ReactNode
  seeAlso?: React.ReactNode
}) {
  return (
    <div className="webview">
      <span className="webview-icon">
        <Icon name={icon} size={44} />
      </span>
      <h2 className="webview-title">{title}</h2>
      <div className="webview-rule" />
      <div className="webview-desc">{children}</div>
      {seeAlso && (
        <div className="webview-seealso">
          <p className="webview-seealso-label">See also:</p>
          {seeAlso}
        </div>
      )}
    </div>
  )
}

// ---- Folder browser (My Skills) -----------------------------------------

export function FolderExplorer({
  initialFolderId,
  open,
  minimizeSelf,
}: {
  initialFolderId: string
  open: (spec: OpenSpec) => void
  minimizeSelf: () => void
}) {
  const [history, setHistory] = useState<string[]>([initialFolderId])
  const [pos, setPos] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [flash, setFlash] = useState<string | null>(null)

  const current = history[pos]
  const isRoot = current === 'root'
  const folder = isRoot ? undefined : getFolder(current)
  const items: Skill[] = isRoot ? [] : skillsInFolder(current)

  const navigate = (to: string) => {
    setHistory((h) => [...h.slice(0, pos + 1), to])
    setPos((p) => p + 1)
    setSelected(null)
  }

  const copyFolder = async () => {
    const md = items.map(skillToMarkdown).join('\n\n---\n\n')
    try {
      await navigator.clipboard.writeText(md)
      setFlash(`Copied ${items.length} skills as markdown`)
    } catch {
      setFlash('Clipboard unavailable')
    }
    window.setTimeout(() => setFlash(null), 2500)
  }

  const selectedSkill = items.find((s) => s.id === selected)

  const sidebar = (
    <WebView
      icon={isRoot ? 'folderOpen' : 'folder'}
      title={isRoot ? 'My Skills' : folder?.title ?? ''}
      seeAlso={
        <>
          {!isRoot && (
            <button type="button" className="sp-link" onClick={copyFolder}>
              Copy all skills (markdown)
            </button>
          )}
          <button type="button" className="sp-link" onClick={minimizeSelf}>
            Desktop
          </button>
          <button type="button" className="sp-link" onClick={() => open({ kind: 'computer' })}>
            My Computer
          </button>
          {folders
            .filter((f) => f.id !== current)
            .slice(0, 3)
            .map((f) => (
              <button key={f.id} type="button" className="sp-link" onClick={() => navigate(f.id)}>
                {f.title}
              </button>
            ))}
        </>
      }
    >
      {selectedSkill ? (
        <>
          <p className="webview-item">{selectedSkill.title}</p>
          <p className="webview-dim">
            Claude Code skill · {selectedSkill.status === 'shipped' ? 'Shipped' : 'Draft'}
          </p>
          <p>{selectedSkill.oneLiner}</p>
          <button
            type="button"
            className="sp-link"
            onClick={() => open({ kind: 'skill', skillId: selectedSkill.id })}
          >
            Open {selectedSkill.title}
          </button>
        </>
      ) : (
        <>
          <p className="webview-dim">Select an item to view its description.</p>
          <p>
            {isRoot
              ? 'Claude Code skills for practicing attorneys, filed by category.'
              : folder?.blurb}
          </p>
        </>
      )}
    </WebView>
  )

  return (
    <ExplorerChrome
      address={isRoot ? 'My Skills' : `My Skills\\${folder?.title ?? ''}`}
      addressIcon={isRoot ? 'folderOpen' : 'folder'}
      canBack={pos > 0}
      canForward={pos < history.length - 1}
      canUp={!isRoot}
      onBack={() => {
        setPos((p) => Math.max(0, p - 1))
        setSelected(null)
      }}
      onForward={() => {
        setPos((p) => Math.min(history.length - 1, p + 1))
        setSelected(null)
      }}
      onUp={() => navigate('root')}
      sidebar={sidebar}
      statusLeft={
        flash ??
        (isRoot
          ? `${folders.length} objects`
          : `${items.length} objects (${items.filter((s) => s.status === 'draft').length} draft)`)
      }
      statusRight={isRoot ? 'My Skills' : folder?.title}
    >
      <div className="exp-files" role="list" onClick={() => setSelected(null)}>
        {isRoot
          ? folders.map((f) => (
              <FileItem
                key={f.id}
                icon="folder"
                label={f.title}
                selected={selected === f.id}
                onSelect={() => setSelected(f.id)}
                onOpen={() => navigate(f.id)}
              />
            ))
          : items.map((s) => (
              <FileItem
                key={s.id}
                icon={s.status === 'draft' ? 'documentDraft' : 'document'}
                label={s.title}
                sub={s.status === 'draft' ? 'draft' : undefined}
                selected={selected === s.id}
                onSelect={() => setSelected(s.id)}
                onOpen={() => open({ kind: 'skill', skillId: s.id })}
              />
            ))}
      </div>
    </ExplorerChrome>
  )
}

export function FileItem({
  icon,
  label,
  sub,
  selected,
  onSelect,
  onOpen,
}: {
  icon: IconName
  label: string
  sub?: string
  selected: boolean
  onSelect: () => void
  onOpen: () => void
}) {
  return (
    <div
      className={'file-item' + (selected ? ' is-selected' : '')}
      role="listitem"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation()
        onSelect()
      }}
      onDoubleClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen()
        if (e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      onFocus={onSelect}
    >
      <span className="file-icon">
        <Icon name={icon} size={32} />
      </span>
      <span className="file-label">{label}</span>
      {sub && <span className="file-sub">{sub}</span>}
    </div>
  )
}
