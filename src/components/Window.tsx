import React from 'react'
import type { Win, WMAction } from '../wm'
import { Icon, IconName } from './icons'

export const TASKBAR_H = 30

type Dir = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'
const DIRS: Dir[] = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw']
const MIN_W = 320
const MIN_H = 200

export function Window({
  win,
  active,
  title,
  icon,
  isMobile,
  dispatch,
  children,
}: {
  win: Win
  active: boolean
  title: string
  icon: IconName
  isMobile: boolean
  dispatch: (a: WMAction) => void
  children: React.ReactNode
}) {
  const maximized = win.maximized || isMobile

  const startDrag = (e: React.PointerEvent) => {
    if (maximized) return
    if ((e.target as HTMLElement).closest('button')) return
    e.preventDefault()
    const sx = e.clientX
    const sy = e.clientY
    const ox = win.x
    const oy = win.y
    const onMove = (ev: PointerEvent) => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const nx = Math.max(-(win.w - 64), Math.min(ox + ev.clientX - sx, vw - 64))
      const ny = Math.max(0, Math.min(oy + ev.clientY - sy, vh - TASKBAR_H - 26))
      dispatch({ type: 'move', id: win.id, x: nx, y: ny })
    }
    const onUp = () => window.removeEventListener('pointermove', onMove)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp, { once: true })
  }

  const startResize = (e: React.PointerEvent, dir: Dir) => {
    if (maximized) return
    e.preventDefault()
    e.stopPropagation()
    const sx = e.clientX
    const sy = e.clientY
    const o = { x: win.x, y: win.y, w: win.w, h: win.h }
    const onMove = (ev: PointerEvent) => {
      const dx = ev.clientX - sx
      const dy = ev.clientY - sy
      let { x, y, w, h } = o
      if (dir.includes('e')) w = Math.max(MIN_W, o.w + dx)
      if (dir.includes('s')) h = Math.max(MIN_H, o.h + dy)
      if (dir.includes('w')) {
        w = Math.max(MIN_W, o.w - dx)
        x = o.x + (o.w - w)
      }
      if (dir.includes('n')) {
        h = Math.max(MIN_H, o.h - dy)
        y = Math.max(0, o.y + (o.h - h))
        h = o.h + (o.y - y)
      }
      dispatch({ type: 'resize', id: win.id, x, y, w, h })
    }
    const onUp = () => window.removeEventListener('pointermove', onMove)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp, { once: true })
  }

  const style: React.CSSProperties = maximized
    ? { left: 0, top: 0, width: '100vw', height: `calc(100dvh - ${TASKBAR_H}px)`, zIndex: win.z }
    : { left: win.x, top: win.y, width: win.w, height: win.h, zIndex: win.z }

  return (
    <section
      className={
        'xpwin' +
        (active ? ' is-active' : ' is-inactive') +
        (maximized ? ' is-maximized' : '') +
        (win.minimized ? ' is-minimized' : '')
      }
      style={style}
      role="dialog"
      aria-label={title}
      onPointerDown={() => {
        if (!active) dispatch({ type: 'focus', id: win.id })
      }}
    >
      <header
        className="xpwin-titlebar"
        onPointerDown={startDrag}
        onDoubleClick={() => !isMobile && dispatch({ type: 'toggleMaximize', id: win.id })}
      >
        <span className="xpwin-titleicon">
          <Icon name={icon} size={16} />
        </span>
        <span className="xpwin-title">{title}</span>
        <span className="xpwin-caps">
          <button
            type="button"
            className="capbtn"
            aria-label="Minimize"
            onClick={() => dispatch({ type: 'minimize', id: win.id })}
          >
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <rect x="2" y="8.5" width="6" height="2" fill="#fff" />
            </svg>
          </button>
          {!isMobile && (
            <button
              type="button"
              className="capbtn"
              aria-label={win.maximized ? 'Restore' : 'Maximize'}
              onClick={() => dispatch({ type: 'toggleMaximize', id: win.id })}
            >
              {win.maximized ? (
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M4 2 h6 v6 h-2 V4 H4 Z" fill="#fff" />
                  <path d="M2 4.5 h6 v6 H2 Z M3 6.5 h4 v3 H3 Z" fill="#fff" fillRule="evenodd" />
                </svg>
              ) : (
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 2 h8 v8 H2 Z M3 4.5 h6 v4.5 H3 Z" fill="#fff" fillRule="evenodd" />
                </svg>
              )}
            </button>
          )}
          <button
            type="button"
            className="capbtn capbtn-close"
            aria-label="Close"
            onClick={() => dispatch({ type: 'close', id: win.id })}
          >
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M3 2 L6 5 L9 2 L10 3 L7 6 L10 9 L9 10 L6 7 L3 10 L2 9 L5 6 L2 3 Z"
                fill="#fff"
              />
            </svg>
          </button>
        </span>
      </header>
      <div className="xpwin-body">{children}</div>
      {!maximized &&
        DIRS.map((d) => (
          <div
            key={d}
            className={`xpwin-grip grip-${d}`}
            onPointerDown={(e) => startResize(e, d)}
            aria-hidden="true"
          />
        ))}
    </section>
  )
}
