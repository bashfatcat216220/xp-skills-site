import { Icon } from './icons'
import { siteConfig } from '../content/skills'

export function BootScreen({ onSkip }: { onSkip: () => void }) {
  return (
    <div
      className="bootscreen"
      onClick={onSkip}
      role="status"
      aria-label="Starting up. Click or press any key to skip."
    >
      <div className="bootscreen-logo">
        <Icon name="flag" size={64} />
        <div className="bootscreen-name">
          <span className="bootscreen-brand">{siteConfig.userName}&rsquo;s Skills</span>
          <span className="bootscreen-edition">Attorney Edition</span>
        </div>
      </div>
      <div className="bootbar">
        <span className="bootbar-chip" />
        <span className="bootbar-chip" />
        <span className="bootbar-chip" />
      </div>
      <p className="bootscreen-hint">press any key</p>
    </div>
  )
}

export function ShutdownScreen({ onBoot }: { onBoot: () => void }) {
  return (
    <div className="shutdownscreen" role="status">
      <p className="shutdown-msg">It is now safe to close your browser.</p>
      <button type="button" className="xpbtn shutdown-btn" onClick={onBoot}>
        Turn the computer back on
      </button>
    </div>
  )
}
