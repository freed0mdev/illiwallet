# ILLI Wallet

Marketing site for ILLI Wallet, a handcrafted cold storage coin for Bitcoin.

Built with Vite, React 19, TypeScript, Tailwind CSS 4, daisyUI 5, react-router 8 and Motion.

## Scripts

| Command               | What it does                                  |
| --------------------- | --------------------------------------------- |
| `npm run dev`         | Start the dev server on http://localhost:5173 |
| `npm run build`       | Type-check and build to `build/`              |
| `npm run preview`     | Serve the production build locally            |
| `npm test`            | Run the test suite once                       |
| `npm run test:watch`  | Run tests in watch mode                       |

## Configuration

Copy `.env.example` to `.env.local` and fill in the EmailJS keys used by the contact form:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Requirements

Node 22.22 or newer (required by react-router 8 and jsdom 30).
