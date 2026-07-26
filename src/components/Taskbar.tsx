import { useEffect, useState } from 'react'
import type { Win } from '../wm'
import { Icon, IconName } from './icons'

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 10_000)
    return () => window.clearInterval(t)
  }, [])
  let h = now.getHours()
  const ampm = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  const m = String(now.getMinutes()).padStart(2, '0')
  return (
    <time className="tray-clock" dateTime={now.toISOString()}>
      {h}:{m} {ampm}
    </time>
  )
}

export function Taskbar({
  windows,
  activeId,
  startOpen,
  onStart,
  onWindowButton,
  titleFor,
  iconFor,
}: {
  windows: Win[]
  activeId: string | null
  startOpen: boolean
  onStart: () => void
  onWindowButton: (id: string) => void
  titleFor: (w: Win) => string
  iconFor: (w: Win) => IconName
}) {
  const ordered = [...windows].sort((a, b) => a.seq - b.seq)
  return (
    <nav className="taskbar" aria-label="Taskbar">
      <button
        type="button"
        className={'startbtn' + (startOpen ? ' is-open' : '')}
        onClick={onStart}
        aria-expanded={startOpen}
        aria-haspopup="menu"
      >
        <Icon name="flag" size={22} />
        <span className="startbtn-word">start</span>
      </button>
      <div className="taskbar-buttons">
        {ordered.map((w) => (
          <button
            key={w.id}
            type="button"
            className={
              'taskbtn' + (w.id === activeId && !w.minimized ? ' is-active' : '')
            }
            onClick={() => onWindowButton(w.id)}
          >
            <Icon name={iconFor(w)} size={16} />
            <span className="taskbtn-label">{titleFor(w)}</span>
          </button>
        ))}
      </div>
      <div className="tray">
        <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
          <rect x="1" y="4" width="9" height="7" rx="1" fill="#3B79C8" stroke="#1B4C96" />
          <path d="M10 6 L14 3.5 L14 11.5 L10 9 Z" fill="#5CB444" stroke="#2E7D26" strokeWidth="0.8" />
        </svg>
        <Clock />
      </div>
    </nav>
  )
}
