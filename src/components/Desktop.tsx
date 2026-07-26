import { Icon, IconName } from './icons'

export interface DesktopIconDef {
  id: string
  label: string
  icon: IconName
}

export function Wallpaper() {
  // CSS homage to rolling hills — layered beziers, no photograph.
  return (
    <svg
      className="wallpaper-hills"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wp-hill-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7CB85C" />
          <stop offset="1" stopColor="#4E9440" />
        </linearGradient>
        <linearGradient id="wp-hill-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8CCB60" />
          <stop offset="0.6" stopColor="#5CA53E" />
          <stop offset="1" stopColor="#3E7E2F" />
        </linearGradient>
        <linearGradient id="wp-hill-shade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#63A94B" />
          <stop offset="1" stopColor="#356B28" />
        </linearGradient>
        <filter id="wp-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      <g filter="url(#wp-blur)" fill="#FFFFFF" opacity="0.85">
        <ellipse cx="320" cy="150" rx="150" ry="42" />
        <ellipse cx="430" cy="125" rx="110" ry="34" />
        <ellipse cx="1150" cy="230" rx="190" ry="46" />
        <ellipse cx="1290" cy="205" rx="120" ry="34" />
        <ellipse cx="800" cy="90" rx="130" ry="30" opacity="0.7" />
      </g>
      <path
        d="M0 640 C 260 520, 520 560, 780 620 C 1040 680, 1300 640, 1600 540 L1600 900 L0 900 Z"
        fill="url(#wp-hill-far)"
      />
      <path
        d="M0 760 C 300 620, 640 600, 950 690 C 1230 770, 1430 760, 1600 700 L1600 900 L0 900 Z"
        fill="url(#wp-hill-shade)"
      />
      <path
        d="M0 820 C 360 680, 760 700, 1090 790 C 1330 850, 1500 840, 1600 800 L1600 900 L0 900 Z"
        fill="url(#wp-hill-near)"
      />
    </svg>
  )
}

export function DesktopIcon({
  def,
  selected,
  onSelect,
  onOpen,
}: {
  def: DesktopIconDef
  selected: boolean
  onSelect: () => void
  onOpen: () => void
}) {
  return (
    <div
      className={'desk-icon' + (selected ? ' is-selected' : '')}
      role="button"
      tabIndex={0}
      aria-label={def.label}
      onClick={(e) => {
        e.stopPropagation()
        onSelect()
      }}
      onDoubleClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen()
      }}
      onFocus={onSelect}
    >
      <span className="desk-icon-art">
        <Icon name={def.icon} size={48} />
      </span>
      <span className="desk-icon-label">{def.label}</span>
    </div>
  )
}
