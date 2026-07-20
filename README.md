# Javeria Zia — Portfolio

A pixel-faithful recreation of the Framer portfolio, rebuilt with **React + Vite + Tailwind CSS + Framer Motion**.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion (scroll-reveal + entrance animations)
- lucide-react (icon set matching the original outline icons)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Reusable UI primitives (Navbar, Card, Button, Pill, Marquee, IconRow, SectionHeading)
  sections/        Page sections (Hero, About, Skills, Projects, Contact, Footer)
  data/
    content.js     All copy/content extracted from the source screenshots — edit here to update text
  index.css        Tailwind directives + base theme
  App.jsx          Composes all sections
  main.jsx         React entry point
```

## Design tokens

Colors, radii, and the marquee animation are defined centrally in `tailwind.config.js`:

- Background: `#05070F`
- Card background: `#0E111C`
- Accent blue: `#2563EB`
- Borders: `rgba(255,255,255,0.08)`
- Muted text: `#8B93A7`

## Notes

- The source reference was a single continuous mobile-width screenshot (888px). The mobile breakpoint (`<640px`) mirrors that layout exactly (single column, stacked cards, full-width buttons). Tablet/desktop breakpoints extend the skills grid to 2–3 columns and the hero to a wider max-width — a reasonable, non-creative extension since no desktop screenshot was provided.
- The "Made in Framer" watermark badge from the original screenshot is a Framer platform artifact (not part of the actual portfolio design) and was intentionally omitted.
- All animations are scroll-triggered fade/slide-ins via Framer Motion's `whileInView`, plus a CSS keyframe marquee for the scrolling background text ribbon between Hero and About.
- Update `src/data/content.js` to change any text, links, or list items without touching component markup.
- Replace placeholder URLs in `content.js` (`githubUrl`, `linkedinUrl`, `resumeUrl`, individual project `githubUrl`s) with your real links.
