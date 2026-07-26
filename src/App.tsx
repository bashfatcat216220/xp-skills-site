import { useEffect, useReducer, useRef, useState } from 'react'
import { initialWM, topWindow, wmReducer, type OpenSpec, type Win } from './wm'
import { folders, getFolder, getSkill } from './content/skills'
import { Window } from './components/Window'
import { DesktopIcon, type DesktopIconDef } from './components/Desktop'
import { Taskbar } from './components/Taskbar'
import { StartMenu } from './components/StartMenu'
import { ContextMenu } from './components/ContextMenu'
import { BootScreen, ShutdownScreen } from './components/PowerScreens'
import { FolderExplorer } from './components/Explorer'
import { SkillDoc } from './components/SkillWindow'
import {
  DisplayPropertiesBody,
  IEBody,
  MyComputerBody,
  THEMES,
  type ThemeId,
} from './components/AppWindows'
import type { IconName } from './components/icons'

export type IconArrange = 'default' | 'name'

const BOOT_FLAG = 'xp-booted'
const THEME_KEY = 'xp-theme'

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const DESKTOP_ICONS: DesktopIconDef[] = [
  { id: 'computer', label: 'My Computer', icon: 'computer' },
  ...folders.map((f): DesktopIconDef => ({ id: `folder:${f.id}`, label: f.title, icon: 'folder' })),
  { id: 'ie', label: 'Internet Explorer', icon: 'ie' },
]

function titleFor(win: Win): string {
  switch (win.kind) {
    case 'explorer':
      return getFolder(win.folderId ?? '')?.title ?? 'My Skills'
    case 'skill':
      return `${getSkill(win.skillId ?? '')?.title ?? 'Skill'} — SkillPad`
    case 'computer':
      return 'My Computer'
    case 'ie':
      return 'Contact — Internet Explorer'
    case 'display':
      return 'Display Properties'
  }
}

function iconFor(win: Win): IconName {
  switch (win.kind) {
    case 'explorer':
      return 'folderOpen'
    case 'skill':
      return 'document'
    case 'computer':
      return 'computer'
    case 'ie':
      return 'ie'
    case 'display':
      return 'computer'
  }
}

export default function App() {
  const [wm, dispatch] = useReducer(wmReducer, initialWM)
  const [power, setPower] = useState<'boot' | 'on' | 'off'>(() =>
    localStorage.getItem(BOOT_FLAG) || prefersReducedMotion() ? 'on' : 'boot',
  )
  const [theme, setTheme] = useState<ThemeId>(() => {
    const t = localStorage.getItem(THEME_KEY)
    return THEMES.some((x) => x.id === t) ? (t as ThemeId) : 'classic'
  })
  const [startOpen, setStartOpen] = useState(false)
  const [ctx, setCtx] = useState<{ x: number; y: number } | null>(null)
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null)
  const [arrange, setArrange] = useState<IconArrange>('default')
  const [refreshTick, setRefreshTick] = useState(0)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches)
  const bootTimer = useRef<number | null>(null)

  const top = topWindow(wm)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Boot: ~1.8s, skippable, first load only.
  useEffect(() => {
    if (power !== 'boot') return
    const finish = () => {
      localStorage.setItem(BOOT_FLAG, '1')
      setPower('on')
    }
    bootTimer.current = window.setTimeout(finish, 1800)
    const onKey = () => finish()
    window.addEventListener('keydown', onKey)
    return () => {
      if (bootTimer.current) window.clearTimeout(bootTimer.current)
      window.removeEventListener('keydown', onKey)
    }
  }, [power])

  // Deep links: #folder=<id>, #skill=<id>, #start — open on first load.
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1))
    const folderId = params.get('folder')
    const skillId = params.get('skill')
    const viewport = { w: window.innerWidth, h: window.innerHeight }
    if (folderId && getFolder(folderId))
      dispatch({ type: 'open', spec: { kind: 'explorer', folderId }, viewport })
    if (skillId && getSkill(skillId))
      dispatch({ type: 'open', spec: { kind: 'skill', skillId }, viewport })
    if (params.has('about')) dispatch({ type: 'open', spec: { kind: 'computer' }, viewport })
    if (params.has('start')) setStartOpen(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Global keyboard: Escape / Alt+F4 close things.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (power !== 'on') return
      const closeKey = e.key === 'Escape' || (e.key === 'F4' && e.altKey)
      if (!closeKey) return
      if (e.key === 'F4') e.preventDefault()
      if (ctx) return setCtx(null)
      if (startOpen) return setStartOpen(false)
      dispatch({ type: 'closeTop' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [power, ctx, startOpen])

  const open = (spec: OpenSpec) => {
    dispatch({ type: 'open', spec, viewport: { w: window.innerWidth, h: window.innerHeight } })
  }

  const openIcon = (id: string) => {
    if (id === 'computer') open({ kind: 'computer' })
    else if (id === 'ie') open({ kind: 'ie' })
    else if (id.startsWith('folder:')) open({ kind: 'explorer', folderId: id.slice(7) })
  }

  if (power === 'off') {
    return (
      <ShutdownScreen
        onBoot={() => setPower(prefersReducedMotion() ? 'on' : 'boot')}
      />
    )
  }

  const icons =
    arrange === 'name'
      ? [...DESKTOP_ICONS].sort((a, b) => a.label.localeCompare(b.label))
      : DESKTOP_ICONS

  const body = (win: Win) => {
    switch (win.kind) {
      case 'explorer':
        return (
          <FolderExplorer
            initialFolderId={win.folderId ?? folders[0].id}
            open={open}
            minimizeSelf={() => dispatch({ type: 'minimize', id: win.id })}
          />
        )
      case 'skill': {
        const skill = getSkill(win.skillId ?? '')
        return skill ? <SkillDoc skill={skill} /> : null
      }
      case 'computer':
        return <MyComputerBody open={open} />
      case 'ie':
        return <IEBody />
      case 'display':
        return (
          <DisplayPropertiesBody
            theme={theme}
            setTheme={setTheme}
            close={() => dispatch({ type: 'close', id: win.id })}
          />
        )
    }
  }

  return (
    <div
      className={'desktop' + (isMobile ? ' is-mobile' : '')}
      onClick={() => {
        setCtx(null)
        if (startOpen) setStartOpen(false)
      }}
    >
      <main
        className="desktop-surface"
        onClick={() => setSelectedIcon(null)}
        onContextMenu={(e) => {
          if (isMobile) return
          e.preventDefault()
          setStartOpen(false)
          setCtx({ x: Math.min(e.clientX, window.innerWidth - 190), y: Math.min(e.clientY, window.innerHeight - 160) })
        }}
      >
        <div className="desk-icons" key={refreshTick}>
          {icons.map((d) => (
            <DesktopIcon
              key={d.id}
              def={d}
              selected={selectedIcon === d.id}
              onSelect={() => setSelectedIcon(d.id)}
              onOpen={() => {
                openIcon(d.id)
                setSelectedIcon(null)
              }}
            />
          ))}
        </div>

        {wm.windows.map((w) => (
          <Window
            key={w.id}
            win={w}
            active={top?.id === w.id}
            title={titleFor(w)}
            icon={iconFor(w)}
            isMobile={isMobile}
            dispatch={dispatch}
          >
            {body(w)}
          </Window>
        ))}

        {ctx && (
          <ContextMenu
            x={ctx.x}
            y={ctx.y}
            onArrange={(m) => {
              setArrange(m)
              setCtx(null)
            }}
            onRefresh={() => {
              setSelectedIcon(null)
              setRefreshTick((t) => t + 1)
              setCtx(null)
            }}
            onProperties={() => {
              open({ kind: 'display' })
              setCtx(null)
            }}
          />
        )}
      </main>

      {startOpen && (
        <div className="startmenu-anchor" onClick={(e) => e.stopPropagation()}>
          <StartMenu
            isMobile={isMobile}
            open={open}
            onLogOff={() => {
              dispatch({ type: 'closeAll' })
              setStartOpen(false)
            }}
            onShutdown={() => {
              dispatch({ type: 'closeAll' })
              setStartOpen(false)
              setPower('off')
            }}
            close={() => setStartOpen(false)}
          />
        </div>
      )}

      <Taskbar
        windows={wm.windows}
        activeId={top?.id ?? null}
        startOpen={startOpen}
        onStart={() => setStartOpen((s) => !s)}
        onWindowButton={(id) => dispatch({ type: 'taskbarClick', id })}
        titleFor={titleFor}
        iconFor={iconFor}
      />

      {power === 'boot' && (
        <BootScreen
          onSkip={() => {
            localStorage.setItem(BOOT_FLAG, '1')
            setPower('on')
          }}
        />
      )}
    </div>
  )
}
