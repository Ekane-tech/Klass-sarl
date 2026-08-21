# Klass Sarl — Website

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-pink?logo=framer)

Professional website for **Klass Sarl**, a company based in **Edéa (Littoral, Cameroon)** that brings together several small businesses:

- **Klass Pressing** — laundry washing, ironing and garment care
- **Metalwork Workshop** — welding, metal fabrication, gates, window bars, railings and metal structures

## 🛠️ Tech Stack

- **Framework**: Next.js 16.3 (App Router)
- **UI Library**: React 19.2
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 13
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Fonts**: @fontsource-variable (Inter, Space Grotesk)

## 🚀 Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## 🗺️ Pages

| Route                | Description                          |
| -------------------- | ------------------------------------ |
| `/`                  | Home page                            |
| `/services`          | Pressing + metalwork services        |
| `/about`             | About the company                    |
| `/blog`              | Blog listing (filter by category)    |
| `/blog/[slug]`       | Individual blog article              |
| `/contact`           | Contact form + details               |

The site is **bilingual (French / English)** — use the **FR / EN** toggle in the header. The choice is remembered in the browser.

## 🖼️ Images

Real, relevant photos are stored in **`public/images/`** as `.jpg` files, referenced through the `Img` component (a `next/image` wrapper — see `components/Img.tsx`). The brand logo is `public/images/klass-sarl-logo.png`.

To use the company's own photos later, just replace the matching file in `public/images/` (keep the same name) or change the `src` in the code.

| File | Where it appears | Content |
| ---- | ---------------- | ------- |
| `hero-workshop.jpg` | Home hero background | Man welding steel construction |
| `contact-hero.jpg` | Contact page hero | Welding sparks |
| `hero-pressing.jpg` | Contact page (map slot) | Neat laundry after pressing |
| `about.jpg`, `team.jpg` | Home intro, About page | Craftsmen in the workshop |
| `service-pressing.jpg` | Services / home cards | Bright laundry |
| `service-welding.jpg` | Services card | Arc welder at work |
| `service-gates.jpg` | Services card | Wrought-iron gate |
| `service-window-bars.jpg` | Services card | Window security grille |
| `pressing-interior.jpg` | Services page (pressing) | Professional ironing |
| `workshop-interior.jpg` | Services / About pages | Metalwork workshop |
| `blog-*.jpg` | Blog article covers | Laundry, welding, gates, steel care |

> Note: these are suitable stock-style photos chosen as fillers. Swap in real photos of Klass Sarl's pressing shop and workshop before public launch.

## ✉️ Contact form (making it actually send email)

The contact form posts to `/api/contact` (Next.js route handler). It sends the message by email using **Nodemailer**.

To make submissions actually arrive in your inbox:

1. Copy `.env.example` to `.env.local`.
2. Fill in your SMTP credentials (Gmail, Yahoo, Zoho, Hostinger, Infomaniak, …).
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
   - Optionally `CONTACT_TO` (delivery address, defaults to `Klasssarl@yahoo.com`)
3. Restart the dev server.

> ⚠️ Without SMTP configured, the form **gracefully falls back** to opening the visitor's email app (a pre-filled `mailto:` to `Klasssarl@yahoo.com`), so the site still works even before email is set up.

## 🔎 SEO notes

- Server-rendered pages with per-page `metadata`.
- Open Graph + Twitter cards, JSON-LD `LocalBusiness` structured data in `app/layout.tsx`.
- `app/robots.ts` and `app/sitemap.ts`.
- Set `NEXT_PUBLIC_SITE_URL` to your real domain for correct canonical URLs.

## 📞 Contact

- 📞 +237 699 84 84 50 · +237 690 76 08 85 · +237 682 34 80 87
- ✉️ Klasssarl@yahoo.com
- 📍 BP 713 Edéa — Littoral, Cameroun
