# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Run Vite dev server (port 5173)
- `npm run build` - Type-check with `tsc` then production build to `build/`
- `npm run preview` - Preview production build locally
- `npm test` - Run tests once (Vitest)
- `npm run test:watch` - Run tests in watch mode

## Deployment

Hosted on Render, built with `npm run build`. Vite 8 needs Node 22.12 or newer; the version is pinned in `.node-version` (read by Render) and in `engines` in `package.json`. Do not lower it.

## Architecture

Vite 8 + React 19 + TypeScript + Tailwind CSS 4 + daisyUI 5 project. Marketing/landing page site for ILLI Wallet, a cold storage crypto wallet coin sold on Etsy (first edition currently sold out).

### Routing

Uses `react-router` v8 (import from `react-router`, not `react-router-dom`) with `createBrowserRouter` in `src/router.tsx`. `App` is the layout shell: fixed `Nav`, `<Outlet />`, `Footer`, and `<ScrollRestoration />` (which also handles `/#section` hash links from other pages).

Routes:
- `/` - Landing page (`src/pages/Main/Main.tsx`): hero, "Inside" dark band, bento feature tiles, four-step teaser, Bitcoin balance checker, EmailJS contact form
- `/instructions` - Step-by-step guide with Bitcoin balance checker (`src/pages/Instructions/Instructions.tsx`)
- Error fallback (`src/pages/Error/Error.tsx`)

### Page structure

Each page lives in `src/pages/<Name>/` with a barrel `index.ts`. Shared pieces live in `src/components/` (`Nav`, `Footer`, `Reveal`, `Chevron`, `BalanceChecker`). `BalanceChecker` is used on both the landing page (`#balance`) and the instructions page.

### Styling

- Tailwind CSS v4 via `@tailwindcss/vite`. There is no `tailwind.config.js` or PostCSS config; all theme setup lives in `src/index.css`.
- daisyUI 5 supplies components (`btn`, `card`, `input`, `fieldset`, `alert`, `stats`, `timeline`, `navbar`, `footer`, `badge`, `loading`). Two custom themes are defined in `src/index.css`: `illi` (light, default, set on `<html data-theme="illi">`) and `illi-dark` (used on the nav and the "Inside" section via nested `data-theme`). Built-in daisyUI themes are disabled.
- Custom utilities in `src/index.css`: `wrap` (980px centered column), `display-xl` / `display-lg` / `display-md` (headline scale), `lede`, `product-shadow`, `product-shadow-dark`. Buttons are globally pill-shaped through `@utility btn`.
- Typeface is Inter, self-hosted through `@fontsource-variable/inter` (imported in `src/index.tsx`, family name `Inter Variable`). Do not add Google Fonts tags back to `index.html`. Design language is Apple-style: white and `#f5f5f7` bands, one black band, ink-black primary buttons, gold (`secondary`) only for links and the edition figure.
- Motion uses the `motion` package in its lazy form: `App` wraps the tree in `LazyMotion` with `domAnimation` (strict), and components import `m` from `motion/react-m` instead of `motion`. This keeps the full feature set out of the bundle. `Reveal` fades section headers in once on scroll; the hero has a one-time entrance. Both are disabled under `prefers-reduced-motion`.
- TypeScript strict mode is enabled (TypeScript 7).

### Testing

Vitest 5 with jsdom. `src/setupTests.ts` loads jest-dom matchers and stubs `IntersectionObserver` (needed by Motion's `whileInView`).

### External services

- Contact form posts through EmailJS; keys come from `VITE_EMAILJS_*` env vars (see `.env.example`).
- Balance checker uses `fetch` against `blockchain.info/rawaddr/{address}` (no HTTP client dependency).
- Contact form loads `@emailjs/browser` with a dynamic `import()` on submit so it stays out of the initial bundle.

### Performance conventions

- Product images live in `src/assets/` as WebP (`cwebp -q 82 -m 6`), 800x800. Below-the-fold images get `loading="lazy"` and `decoding="async"`; the hero image gets `fetchPriority="high"`.
- The logo is a small PNG (`logo.png`, 76x80) rendered at 16 to 20px tall.
- The `/instructions` route is code-split through the router's `lazy` option; keep the landing page in the main chunk.
