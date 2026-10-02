# bankruptcyuk

Marketing site for Bankruptcy UK, built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Setup

```bash
npm install
```

## Run

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Fonts

Google fonts (Playfair Display for display, Inter for body) are loaded through `next/font/google` in `src/lib/fonts.ts` and exposed as the CSS variables `--font-playfair` and `--font-inter`. No runtime font requests are made.

## Styling

Tailwind v4 is configured CSS-first in `src/app/globals.css`: the file imports `tailwindcss` and declares design tokens in a `@theme` block. Theme colours: `navy`, `navy-800`, `navy-900`, `gold`, `gold-light`, `cream`, `mist`, `ink`, `white`. Animations are CSS-based; the reduced-motion media query disables them.

## Project structure

```
src/
  app/        routes, layouts and global CSS
  components/ shared UI and section components
  lib/        utilities (fonts, class name helper)
```