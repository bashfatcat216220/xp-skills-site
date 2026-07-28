import { folders, siteConfig } from '../content/skills'
import type { OpenSpec } from '../wm'
import { Icon } from './icons'

export function StartMenu({
  isMobile,
  open,
  onLogOff,
  onShutdown,
  close,
}: {
  isMobile: boolean
  open: (spec: OpenSpec) => void
  onLogOff: () => void
  onShutdown: () => void
  close: () => void
}) {
  const go = (spec: OpenSpec) => {
    open(spec)
    close()
  }
  return (
    <div
      className={'startmenu' + (isMobile ? ' is-mobile' : '')}
      role="menu"
      aria-label="Start menu"
    >
      <header className="startmenu-header">
        <span className="startmenu-avatar">
          <Icon name="avatar" size={34} />
        </span>
        <span className="startmenu-user">{siteConfig.userName}</span>
      </header>
      <div className="startmenu-columns">
        <div className="startmenu-left">
          <button type="button" role="menuitem" className="sm-item" onClick={() => go({ kind: 'computer' })}>
            <Icon name="computer" size={24} />
            <span>
              <b>About</b>
              <small>Who wrote these</small>
            </span>
          </button>
          <a className="sm-item" role="menuitem" href={`mailto:${siteConfig.email}`}>
            <Icon name="mail" size={24} />
            <span>
              <b>Contact</b>
              <small>{siteConfig.email}</small>
            </span>
          </a>
          <a
            className="sm-item"
            role="menuitem"
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="documentDraft" size={24} />
            <span>
              <b>GitHub</b>
              <small>Repositories</small>
            </span>
          </a>
          {isMobile && (
            <>
              <div className="sm-sep" />
              {folders.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  role="menuitem"
                  className="sm-item"
                  onClick={() => go({ kind: 'explorer', folderId: f.id })}
                >
                  <Icon name="folder" size={24} />
                  <span>
                    <b>{f.title}</b>
                  </span>
                </button>
              ))}
            </>
          )}
        </div>
        <div className="startmenu-right">
          {!isMobile &&
            folders.map((f) => (
              <button
                key={f.id}
                type="button"
                role="menuitem"
                className="sm-item sm-item-right"
                onClick={() => go({ kind: 'explorer', folderId: f.id })}
              >
                <Icon name="folder" size={20} />
                <span>{f.title}</span>
              </button>
            ))}
          <div className="sm-sep" />
          <button type="button" role="menuitem" className="sm-item sm-item-right" onClick={() => go({ kind: 'display' })}>
            <Icon name="computer" size={20} />
            <span>Display Properties</span>
          </button>
        </div>
      </div>
      <footer className="startmenu-footer">
        <button type="button" className="sm-power" onClick={onLogOff}>
          <Icon name="logoff" size={22} />
          <span>Log Off</span>
        </button>
        <button type="button" className="sm-power" onClick={onShutdown}>
          <Icon name="shutdown" size={22} />
          <span>Turn Off Computer</span>
        </button>
      </footer>
    </div>
  )
}
