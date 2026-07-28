// Hand-drawn inline SVG icons in the XP visual language.
// Chunky forms, warm manila folders, thin dark outlines, soft ground shadows.
// Gradient ids repeat across instances; identical defs resolve identically.

export type IconName =
  | 'folder'
  | 'folderOpen'
  | 'document'
  | 'documentDraft'
  | 'computer'
  | 'recycle'
  | 'ie'
  | 'mail'
  | 'avatar'
  | 'flag'
  | 'back'
  | 'forward'
  | 'up'
  | 'logoff'
  | 'shutdown'
  | 'trashdoc'

export function Icon({
  name,
  size = 32,
  className,
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const art = ART[name]
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      style={{ display: 'block' }}
    >
      {art}
    </svg>
  )
}

const shadow = <ellipse cx="16" cy="29" rx="12" ry="2" fill="rgba(10,30,60,0.22)" />

const folderDefs = (
  <defs>
    <linearGradient id="xg-fold-back" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#FFE9A8" />
      <stop offset="1" stopColor="#EDB13F" />
    </linearGradient>
    <linearGradient id="xg-fold-front" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#FFD97E" />
      <stop offset="0.55" stopColor="#FCC66D" />
      <stop offset="1" stopColor="#E8A33D" />
    </linearGradient>
  </defs>
)

const ART: Record<IconName, JSX.Element> = {
  folder: (
    <g>
      {folderDefs}
      {shadow}
      <path
        d="M3 9.5 L3 8 Q3 6.5 4.5 6.5 L11 6.5 Q12 6.5 12.6 7.4 L14 9.5 Z"
        fill="#E8A33D"
        stroke="#8C6119"
        strokeWidth="1"
      />
      <rect x="3" y="9" width="26" height="18" rx="1.2" fill="url(#xg-fold-back)" stroke="#8C6119" strokeWidth="1" />
      <path
        d="M3.4 26.6 L6.6 13.6 Q6.85 12.7 7.8 12.7 L30.2 12.7 Q31.3 12.7 31 13.8 L27.9 26.2 Q27.7 27 26.8 27 L4.3 27 Q3.3 27 3.4 26.6 Z"
        fill="url(#xg-fold-front)"
        stroke="#8C6119"
        strokeWidth="1"
      />
      <path d="M7 14.2 L29.8 14.2" stroke="#FFE9B0" strokeWidth="1" fill="none" opacity="0.8" />
    </g>
  ),

  folderOpen: (
    <g>
      {folderDefs}
      {shadow}
      <rect x="4" y="8" width="24" height="17" rx="1.2" fill="url(#xg-fold-back)" stroke="#8C6119" strokeWidth="1" />
      <rect x="6.5" y="10.5" width="19" height="13" fill="#FFFFFF" stroke="#9DB0C8" strokeWidth="0.8" />
      <path
        d="M2.6 26.6 L7.4 15.4 Q7.8 14.5 8.8 14.5 L30.6 14.5 Q31.7 14.5 31.2 15.6 L26.6 26 Q26.2 26.9 25.2 26.9 L3.4 26.9 Q2.3 26.9 2.6 26.6 Z"
        fill="url(#xg-fold-front)"
        stroke="#8C6119"
        strokeWidth="1"
      />
    </g>
  ),

  document: (
    <g>
      <defs>
        <linearGradient id="xg-doc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E4E9F2" />
        </linearGradient>
      </defs>
      <ellipse cx="16" cy="29.4" rx="9" ry="1.6" fill="rgba(10,30,60,0.2)" />
      <path
        d="M8 3 L20.5 3 L25 7.5 L25 28 L8 28 Z"
        fill="url(#xg-doc)"
        stroke="#4A5D82"
        strokeWidth="1"
      />
      <path d="M20.5 3 L20.5 7.5 L25 7.5 Z" fill="#C9D4E6" stroke="#4A5D82" strokeWidth="1" />
      <g stroke="#7A96DF" strokeWidth="1.2">
        <path d="M10.5 11 h12" />
        <path d="M10.5 14 h12" />
        <path d="M10.5 17 h12" />
        <path d="M10.5 20 h8.5" />
        <path d="M10.5 23 h11" />
      </g>
    </g>
  ),

  documentDraft: (
    <g>
      <defs>
        <linearGradient id="xg-doc2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E4E9F2" />
        </linearGradient>
        <linearGradient id="xg-pencil" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFCF5C" />
          <stop offset="1" stopColor="#E8A33D" />
        </linearGradient>
      </defs>
      <ellipse cx="16" cy="29.4" rx="9" ry="1.6" fill="rgba(10,30,60,0.2)" />
      <path d="M8 3 L20.5 3 L25 7.5 L25 28 L8 28 Z" fill="url(#xg-doc2)" stroke="#4A5D82" strokeWidth="1" />
      <path d="M20.5 3 L20.5 7.5 L25 7.5 Z" fill="#C9D4E6" stroke="#4A5D82" strokeWidth="1" />
      <g stroke="#AEBBD4" strokeWidth="1.2">
        <path d="M10.5 11 h12" />
        <path d="M10.5 14 h12" />
        <path d="M10.5 17 h9" />
      </g>
      <g transform="rotate(45 21 21)">
        <rect x="17.5" y="12.5" width="5" height="13" fill="url(#xg-pencil)" stroke="#8C6119" strokeWidth="0.9" />
        <path d="M17.5 25.5 L22.5 25.5 L20 30 Z" fill="#F3D9A6" stroke="#8C6119" strokeWidth="0.9" />
        <path d="M19.2 28.4 L20.8 28.4 L20 30 Z" fill="#4A4A4A" />
        <rect x="17.5" y="10.8" width="5" height="1.9" fill="#DF7B8E" stroke="#8C6119" strokeWidth="0.9" />
      </g>
    </g>
  ),

  computer: (
    <g>
      <defs>
        <linearGradient id="xg-mon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7F6F1" />
          <stop offset="1" stopColor="#C4C1B2" />
        </linearGradient>
        <linearGradient id="xg-scr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4B8ECF" />
          <stop offset="0.7" stopColor="#8FC2EE" />
          <stop offset="1" stopColor="#5CA53E" />
        </linearGradient>
      </defs>
      {shadow}
      <rect x="4" y="4" width="24" height="18" rx="2" fill="url(#xg-mon)" stroke="#5C5B52" strokeWidth="1" />
      <rect x="6.5" y="6.5" width="19" height="13" fill="url(#xg-scr)" stroke="#33506B" strokeWidth="1" />
      <path d="M13 22 L19 22 L20 25 L12 25 Z" fill="#B7B4A5" stroke="#5C5B52" strokeWidth="1" />
      <rect x="9" y="25" width="14" height="2.6" rx="1" fill="url(#xg-mon)" stroke="#5C5B52" strokeWidth="1" />
      <circle cx="25.2" cy="21" r="0.8" fill="#5CB444" />
    </g>
  ),

  recycle: (
    <g>
      <defs>
        <linearGradient id="xg-bin" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#DCEBFA" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#B9D4F2" stopOpacity="0.85" />
          <stop offset="1" stopColor="#9CBEE8" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {shadow}
      <path
        d="M7 8 L25 8 L23 27 Q22.9 28 21.9 28 L10.1 28 Q9.1 28 9 27 Z"
        fill="url(#xg-bin)"
        stroke="#4E6FA3"
        strokeWidth="1"
      />
      <g stroke="#7FA3D4" strokeWidth="0.9" opacity="0.8">
        <path d="M11 9.5 L12 26.5" />
        <path d="M16 9.5 L16 26.5" />
        <path d="M21 9.5 L20 26.5" />
      </g>
      <ellipse cx="16" cy="8" rx="9" ry="2.4" fill="#EAF3FC" stroke="#4E6FA3" strokeWidth="1" />
      <g fill="none" stroke="#2E6FBF" strokeWidth="1.6" strokeLinecap="round">
        <path d="M13.2 20.2 A3.4 3.4 0 0 1 14.4 14.9" />
        <path d="M17.2 14.2 A3.4 3.4 0 0 1 19.3 18.3" />
        <path d="M17.8 21.4 L13.9 21.4" />
      </g>
      <g fill="#2E6FBF">
        <path d="M14.4 12.9 L15.6 15.6 L12.7 15.5 Z" />
        <path d="M20.4 19.4 L17.6 20.3 L19 17.6 Z" />
        <path d="M13.6 19.4 L13.5 22.9 L11.3 21 Z" />
      </g>
    </g>
  ),

  trashdoc: (
    <g opacity="0.85">
      <path d="M9 4 L20 4 L24 8 L24 27 L9 27 Z" fill="#EDF0F5" stroke="#7C8CA6" strokeWidth="1" strokeDasharray="2.5 1.5" />
      <path d="M20 4 L20 8 L24 8 Z" fill="#D4DBE6" stroke="#7C8CA6" strokeWidth="1" />
      <g stroke="#A9B6CC" strokeWidth="1.2">
        <path d="M11.5 12 h10" />
        <path d="M11.5 15 h10" />
        <path d="M11.5 18 h7" />
      </g>
      <path d="M11 21.5 L21.5 24.5 M21.5 21.5 L11 24.5" stroke="#B34A4A" strokeWidth="1.4" />
    </g>
  ),

  ie: (
    <g>
      {shadow}
      <defs>
        <linearGradient id="xg-e" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6FA8EE" />
          <stop offset="1" stopColor="#1B54B8" />
        </linearGradient>
      </defs>
      <path
        d="M16 4.5 A10.5 10.5 0 1 0 26.5 15 L20.5 15 A5.5 5.5 0 1 1 20 12 L26 12 A10.5 10.5 0 0 0 16 4.5 Z"
        fill="url(#xg-e)"
        stroke="#123C86"
        strokeWidth="1"
      />
      <path d="M10.5 17.5 L26.5 17.5 L26.5 15 L10.6 15 Z" fill="url(#xg-e)" stroke="#123C86" strokeWidth="0.8" />
      <path
        d="M4.2 12.2 Q10 6.8 20 8.2 Q28.5 9.4 30.2 12.6 Q31.2 14.6 28.4 15.4"
        fill="none"
        stroke="#F0B23C"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </g>
  ),

  mail: (
    <g>
      <defs>
        <linearGradient id="xg-mail" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#D9E2F0" />
        </linearGradient>
      </defs>
      <ellipse cx="16" cy="27.4" rx="11" ry="1.8" fill="rgba(10,30,60,0.2)" />
      <rect x="4" y="8" width="24" height="18" rx="1.5" fill="url(#xg-mail)" stroke="#4A5D82" strokeWidth="1" />
      <path d="M4.5 9 L16 18.5 L27.5 9" fill="none" stroke="#4A5D82" strokeWidth="1.1" />
      <path d="M4.5 25.5 L12.5 17.5 M27.5 25.5 L19.5 17.5" fill="none" stroke="#8FA3C2" strokeWidth="0.9" />
    </g>
  ),

  avatar: (
    <g>
      <defs>
        <linearGradient id="xg-av" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8FC2EE" />
          <stop offset="1" stopColor="#3B79C8" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="3" fill="url(#xg-av)" stroke="#1B4C96" strokeWidth="1" />
      <circle cx="16" cy="12.5" r="5.2" fill="#F4F7FB" />
      <path d="M6.5 28 Q7.5 19.5 16 19.5 Q24.5 19.5 25.5 28 Z" fill="#F4F7FB" />
    </g>
  ),

  flag: (
    <g>
      <path d="M4.5 12.5 Q9 9.5 13.5 11.2 L13.5 17.5 Q9 15.8 4.5 18.8 Z" fill="#DE4A32" />
      <path d="M15.5 11.9 Q20.5 13.5 27.5 11 L27.5 17.2 Q20.5 19.7 15.5 18.1 Z" fill="#71B84B" />
      <path d="M4.5 20.8 Q9 17.8 13.5 19.5 L13.5 25.8 Q9 24.1 4.5 27.1 Z" fill="#3B79C8" />
      <path d="M15.5 20.2 Q20.5 21.8 27.5 19.3 L27.5 25.5 Q20.5 28 15.5 26.4 Z" fill="#EFC53A" />
    </g>
  ),

  back: (
    <g>
      <path
        d="M28 12.5 L14.5 12.5 L14.5 6.5 L4 16 L14.5 25.5 L14.5 19.5 L28 19.5 Z"
        fill="#3D5E93"
        stroke="#16294A"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M14.5 12.5 L14.5 8.5 M14.5 19.5 L27 19.2" stroke="#8FA8CE" strokeWidth="0.8" fill="none" opacity="0.7" />
    </g>
  ),

  forward: (
    <g>
      <path
        d="M4 12.5 L17.5 12.5 L17.5 6.5 L28 16 L17.5 25.5 L17.5 19.5 L4 19.5 Z"
        fill="#3D5E93"
        stroke="#16294A"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </g>
  ),

  up: (
    <g>
      <rect x="4" y="10" width="24" height="16" rx="1.2" fill="url(#xg-fold-front)" stroke="#8C6119" strokeWidth="1" />
      {folderDefs}
      <path d="M4 10 L4 8.4 Q4 7 5.4 7 L10.6 7 Q11.6 7 12.2 7.9 L13.6 10 Z" fill="#E8A33D" stroke="#8C6119" strokeWidth="1" />
      <path
        d="M20 24 L20 17 L16.5 17 L22 10.5 L27.5 17 L24 17 L24 24 Z"
        fill="#3D5E93"
        stroke="#16294A"
        strokeWidth="1"
      />
    </g>
  ),

  logoff: (
    <g>
      <defs>
        <linearGradient id="xg-off1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FDCF67" />
          <stop offset="1" stopColor="#E8952F" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="24" height="24" rx="4" fill="url(#xg-off1)" stroke="#9C6414" strokeWidth="1" />
      <rect x="9" y="9" width="9" height="14" rx="1" fill="#FFF6E3" stroke="#9C6414" strokeWidth="1" />
      <path d="M14 16 L25 16 M21.5 12.5 L25 16 L21.5 19.5" fill="none" stroke="#2E7D26" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),

  shutdown: (
    <g>
      <defs>
        <radialGradient id="xg-off2" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#F08A7E" />
          <stop offset="1" stopColor="#B22B1E" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="12.5" fill="url(#xg-off2)" stroke="#7C170D" strokeWidth="1" />
      <path d="M16 8 L16 16" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M11 11.5 A7 7 0 1 0 21 11.5" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" />
    </g>
  ),
}
