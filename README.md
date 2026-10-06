# Deep Multispeciality Hospital — Website

A premium, mobile-first, SEO-friendly website for **Deep Multispeciality Hospital**, Gurdaspur.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — lint
- `npm run typecheck` — TypeScript check

## Environment

Copy `.env.example` to `.env.local` and populate values.

## Content

All hospital data lives in `src/data/`:

- `hospital.ts` — hospital name, address, phone
- `specialities.ts` — medical specialities
- `doctors.ts` — doctor directory (empty until verified)
- `services.ts` — clinical & non-clinical services
- `faqs.ts` — frequently asked questions
- `navigation.ts` — main and footer navigation
- `contact-config.ts` — phone, email, WhatsApp, maps URL

Edit these files to update the website — no component changes required.

## Deployment

Deploy to [Vercel](https://vercel.com):

```bash
vercel
```

The site is static / server-rendered and has no database dependency.
