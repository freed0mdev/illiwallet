# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Run Vite dev server (port 5173)
- `npm run build` - Type-check with `tsc` then production build to `build/`
- `npm run preview` - Preview production build locally
- `npm test` - Run tests once (Vitest)
- `npm run test:watch` - Run tests in watch mode

## Architecture

Vite + React 18 + TypeScript + Tailwind CSS project. Marketing/landing page site for ILLI Wallet, a cold storage crypto wallet product sold on Etsy.

### Routing

Uses `react-router-dom` v6 with `createBrowserRouter` defined in `src/router.tsx`. The `App` component is a layout shell that renders an `<Outlet />`.

Routes:
- `/` - Main landing page (`src/pages/Main/Main.tsx`)
- `/instructions` - Instructions page with Bitcoin balance checker (`src/pages/Instructions/Instructions.tsx`)
- Error fallback (`src/pages/Error/Error.tsx`)

### Page structure

Each page lives in `src/pages/<Name>/` with a barrel `index.ts` re-export. Pages are self-contained components with inline Tailwind classes.

### Styling

- Tailwind CSS v3 configured in `tailwind.config.js` with custom colors (`orange`, `gold`, `surface`, etc.), Montserrat font, custom animations, and container max-width of 1024px
- `src/index.css` contains Tailwind directives plus custom CSS classes for the design system (`.btn-gold`, `.glass-card`, `.hero-bg`, `.text-gradient-gold`, etc.)
- TypeScript strict mode is enabled

### External API

The Instructions page uses `axios` to query `blockchain.info/rawaddr/{address}` for Bitcoin address balance lookups.
