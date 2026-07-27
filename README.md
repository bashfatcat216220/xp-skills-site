# xp-skills-site

A portfolio of Claude Code skills for attorneys, presented as a faithful
Windows XP (Luna Blue) desktop. React + Vite + TypeScript, plain CSS, no
canvas — everything is DOM so text stays selectable.

## Run it

```bash
npm install
npm run dev        # dev server
npm run build      # static build in dist/
npm run preview    # serve the build locally
```

## Deploy

The build is fully static (`base: './'`), so either works as-is:

- **Vercel:** import the repo, framework preset "Vite". Done.
- **GitHub Pages:** push `dist/` to a `gh-pages` branch, or use an action
  that runs `npm run build` and publishes `dist/`.

## Editing content

All skill copy lives in `src/content/folders/*.ts` — one file per desktop
folder, typed as `Skill[]` (see `src/content/types.ts`). The real SKILL.md
bodies live in `src/content/skillmd/*.md` and are embedded via Vite `?raw`
imports; `skillMd` is what the "Copy skill markdown" button copies. To update
a skill, replace its `.md` file and rebuild.

Owner details (name, email, GitHub) are in `siteConfig` at the top of
`src/content/skills.ts`.

## Deep links

- `#folder=<folder-id>` opens that folder's Explorer window on load
- `#skill=<skill-id>` opens that skill's document window
- `#start` opens the Start menu

## Notes

- Boot screen shows on first visit only (localStorage `xp-booted`); skipped
  entirely under `prefers-reduced-motion`.
- Theme (Luna / Olive / Silver) is in Display Properties (right-click the
  desktop → Properties) and persists in localStorage.
- Below 768px the site drops to a single maximized window with the taskbar
  as navigation — no dragging, chrome kept.
