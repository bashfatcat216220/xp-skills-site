// Window-manager state. One reducer owns every open window; components dispatch.

export type WindowKind = 'explorer' | 'skill' | 'computer' | 'ie' | 'display'

export interface Win {
  id: string
  kind: WindowKind
  folderId?: string
  skillId?: string
  x: number
  y: number
  w: number
  h: number
  minimized: boolean
  maximized: boolean
  z: number
  /** insertion order, keeps taskbar buttons stable */
  seq: number
}

export interface WMState {
  windows: Win[]
  zTop: number
  seq: number
  cascade: number
}

export const initialWM: WMState = { windows: [], zTop: 1, seq: 0, cascade: 0 }

export type OpenSpec = {
  kind: WindowKind
  folderId?: string
  skillId?: string
}

export type WMAction =
  | { type: 'open'; spec: OpenSpec; viewport: { w: number; h: number } }
  | { type: 'close'; id: string }
  | { type: 'closeTop' }
  | { type: 'closeAll' }
  | { type: 'focus'; id: string }
  | { type: 'minimize'; id: string }
  | { type: 'toggleMaximize'; id: string }
  | { type: 'taskbarClick'; id: string }
  | { type: 'move'; id: string; x: number; y: number }
  | { type: 'resize'; id: string; x: number; y: number; w: number; h: number }

const DEFAULT_SIZES: Record<WindowKind, { w: number; h: number }> = {
  explorer: { w: 760, h: 500 },
  skill: { w: 620, h: 540 },
  computer: { w: 440, h: 480 },
  ie: { w: 640, h: 480 },
  display: { w: 400, h: 460 },
}

export function windowKey(spec: OpenSpec): string {
  return [spec.kind, spec.folderId ?? '', spec.skillId ?? ''].join('|')
}

export function topWindow(state: WMState): Win | undefined {
  let top: Win | undefined
  for (const w of state.windows) {
    if (!w.minimized && (!top || w.z > top.z)) top = w
  }
  return top
}

export function wmReducer(state: WMState, action: WMAction): WMState {
  switch (action.type) {
    case 'open': {
      const key = windowKey(action.spec)
      const existing = state.windows.find((w) => windowKey(w) === key)
      if (existing) return wmReducer(state, { type: 'focus', id: existing.id })
      const size = DEFAULT_SIZES[action.spec.kind]
      const w = Math.min(size.w, action.viewport.w - 24)
      const h = Math.min(size.h, action.viewport.h - 60)
      const step = (state.cascade % 8) * 26
      const x = Math.max(8, Math.min(90 + step, action.viewport.w - w - 8))
      const y = Math.max(4, Math.min(48 + step, action.viewport.h - h - 40))
      const win: Win = {
        id: key,
        kind: action.spec.kind,
        folderId: action.spec.folderId,
        skillId: action.spec.skillId,
        x,
        y,
        w,
        h,
        minimized: false,
        maximized: false,
        z: state.zTop + 1,
        seq: state.seq + 1,
      }
      return {
        windows: [...state.windows, win],
        zTop: state.zTop + 1,
        seq: state.seq + 1,
        cascade: state.cascade + 1,
      }
    }
    case 'close':
      return { ...state, windows: state.windows.filter((w) => w.id !== action.id) }
    case 'closeTop': {
      const top = topWindow(state)
      return top ? wmReducer(state, { type: 'close', id: top.id }) : state
    }
    case 'closeAll':
      return { ...state, windows: [], cascade: 0 }
    case 'focus': {
      const win = state.windows.find((w) => w.id === action.id)
      if (!win) return state
      if (!win.minimized && win.z === state.zTop) return state
      return {
        ...state,
        zTop: state.zTop + 1,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, z: state.zTop + 1, minimized: false } : w,
        ),
      }
    }
    case 'minimize':
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, minimized: true } : w,
        ),
      }
    case 'toggleMaximize':
      return {
        ...state,
        zTop: state.zTop + 1,
        windows: state.windows.map((w) =>
          w.id === action.id
            ? { ...w, maximized: !w.maximized, minimized: false, z: state.zTop + 1 }
            : w,
        ),
      }
    case 'taskbarClick': {
      const win = state.windows.find((w) => w.id === action.id)
      if (!win) return state
      const top = topWindow(state)
      // XP behavior: click on the active window's button minimizes it;
      // click on anything else restores/raises it.
      if (!win.minimized && top && top.id === win.id) {
        return wmReducer(state, { type: 'minimize', id: win.id })
      }
      return wmReducer(state, { type: 'focus', id: win.id })
    }
    case 'move':
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, x: action.x, y: action.y } : w,
        ),
      }
    case 'resize':
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id
            ? { ...w, x: action.x, y: action.y, w: action.w, h: action.h }
            : w,
        ),
      }
    default:
      return state
  }
}

// Dedupe-aware open helper: components should dispatch through this.
export function openOrFocus(
  state: WMState,
  dispatch: (a: WMAction) => void,
  spec: OpenSpec,
  viewport: { w: number; h: number },
): void {
  const key = windowKey(spec)
  const existing = state.windows.find((w) => windowKey(w) === key)
  if (existing) dispatch({ type: 'focus', id: existing.id })
  else dispatch({ type: 'open', spec, viewport })
}
