# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` - Run dev server (port 3000)
- `npm run build` - Production build to `build/`
- `npm test` - Run tests (Jest, interactive watch mode)
- `npm test -- --watchAll=false` - Run tests once (CI mode)
- `npm test -- --testPathPattern=<pattern>` - Run a single test file

## Architecture

This is a Create React App (CRA) project using React 18, TypeScript, and Tailwind CSS. It's a marketing/landing page site for ILLI Wallet, a cold storage crypto wallet product.

### Routing

Uses `react-router-dom` v6 with `createBrowserRouter` defined in `src/router.tsx`. The `App` component is a layout shell that renders an `<Outlet />`.

Routes:
- `/` - Main landing page (`src/pages/Main/Main.tsx`)
- `/instructions` - Instructions page with Bitcoin balance checker (`src/pages/Instructions/Instructions.tsx`)
- Error fallback (`src/pages/Error/Error.tsx`)

### Page structure

Each page lives in `src/pages/<Name>/` with a barrel `index.ts` re-export. Pages are self-contained components with inline Tailwind classes.

### Styling

- Tailwind CSS v3 configured in `tailwind.config.js` with custom colors (`orange`, `gray-dark`, `gray`, `gray-light`), Montserrat font family, and container max-width of 900px
- `src/index.css` imports Tailwind directives
- `src/assets/bootstrap.min.css` is present but only partially used
- TypeScript strict mode is enabled

### External API

The Instructions page uses `axios` to query `blockchain.info/rawaddr/{address}` for Bitcoin address balance lookups.
