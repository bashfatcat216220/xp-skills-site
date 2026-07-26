import type { IconArrange } from '../App'

export function ContextMenu({
  x,
  y,
  onArrange,
  onRefresh,
  onProperties,
}: {
  x: number
  y: number
  onArrange: (mode: IconArrange) => void
  onRefresh: () => void
  onProperties: () => void
}) {
  return (
    <div className="ctxmenu" style={{ left: x, top: y }} role="menu">
      <div className="ctx-item has-sub" role="menuitem" aria-haspopup="true" tabIndex={0}>
        Arrange Icons By
        <span className="ctx-arrow" aria-hidden="true">
          ▸
        </span>
        <div className="ctxmenu ctx-sub" role="menu">
          <button type="button" className="ctx-item" role="menuitem" onClick={() => onArrange('name')}>
            Name
          </button>
          <button type="button" className="ctx-item" role="menuitem" onClick={() => onArrange('default')}>
            Type
          </button>
        </div>
      </div>
      <button type="button" className="ctx-item" role="menuitem" onClick={onRefresh}>
        Refresh
      </button>
      <div className="ctx-sep" />
      <button type="button" className="ctx-item" role="menuitem" onClick={onProperties}>
        Properties
      </button>
    </div>
  )
}
