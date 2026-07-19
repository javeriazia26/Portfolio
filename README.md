# Javeria Zia — Portfolio (React + Tailwind)

A React + Tailwind CSS recreation of the Framer portfolio site, rebuilt as a clean,
production-ready Vite project.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3 (custom design tokens: `ink` palette, `signal` accent, Space Grotesk /
  Inter / JetBrains Mono type system)
- No UI kit — every component is hand-built and lives in `src/components`

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
portfolio/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              # Tailwind layers + base styles + reveal utility
    ├── hooks/
    │   └── useReveal.js        # IntersectionObserver-based scroll reveal
    ├── data/
    │   └── content.js          # all copy/content lives here, edit freely
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── GithubStats.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Editing content

All copy (roles, skills, projects, contact info) is centralized in
`src/data/content.js` — update it there rather than hunting through components.

## Deploying to GitHub Pages (javeriazia26/Portfolio)

This project is preconfigured for `https://javeriazia26.github.io/Portfolio/`:

- `vite.config.js` sets `base: '/Portfolio/'` so built asset paths resolve correctly
  under that subpath. If you ever rename the repo, move to a custom domain, or use a
  user/org page (`javeriazia26.github.io` with no subpath), change `base` back to `'/'`.
- `.github/workflows/deploy.yml` builds the app and publishes `dist/` to GitHub Pages
  automatically on every push to `main`.

### One-time setup

1. Push this project to the `javeriazia26/Portfolio` repo (see commands below).
2. On GitHub: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` (or re-run the workflow from the Actions tab) — the site builds and
   deploys automatically. Check the **Actions** tab for progress/errors.

### Pushing this project to your existing repo

Your repo currently has old static files (`index.html`, `About me.html`,
`Education.html`) — this replaces them entirely with the React project.

```bash
# from inside this portfolio/ folder
git init                                   # only if it isn't already a git repo
git remote add origin https://github.com/javeriazia26/Portfolio.git
git add -A
git commit -m "Replace static site with React + Tailwind portfolio"
git branch -M main
git push -f origin main
```

(`-f` force-pushes since this fully replaces the old static-site history's file tree —
skip `-f` if you'd rather merge/resolve conflicts manually.)

### Local testing before you push

```bash
npm install
npm run build
npm run preview   # serves the production build locally so you can sanity-check it
```

## Notes on the recreation

- Sections match the source site 1:1: sticky nav → hero → about → skills → featured
  projects → other projects → GitHub stats → contact → footer.
- Scroll-reveal animation (`data-reveal` + `useReveal` hook) fades/slides sections in as
  they enter the viewport, respecting `prefers-reduced-motion`.
- The hero role line cycles through the four roles listed on the source site with a
  blinking-cursor typewriter accent.
- Fully responsive: single-column mobile layout, 2–3 column grids from `sm`/`lg` breakpoints
  up, collapsible mobile nav menu.
