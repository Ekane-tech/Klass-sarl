# Klass Sarl — Website

Professional website for **Klass Sarl**, a company based in **Edéa (Littoral, Cameroon)** that brings together several small businesses:

- **Klass Pressing** — laundry washing, ironing and garment care
- **Metalwork Workshop** — welding, metal fabrication, gates, window bars, railings and metal structures

Built with **Next.js (App Router)**, **React 19** and **Tailwind CSS v4**. Fully responsive and SEO-optimized (metadata, Open Graph, JSON-LD, sitemap, robots).

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

## 🖼️ Replacing placeholder images

Every photo is a placeholder located in **`public/images/`** (SVG files that look like the photo slot). To use real photos, simply drop your images into `public/images/` **with the same file name** (or edit the `src` in the code — the `Img` component is used everywhere, see `components/Img.tsx`).

Main placeholders:

| File | Where it appears |
| ---- | ---------------- |
| `hero-workshop.svg` | Home hero background |
| `hero-pressing.svg` | Contact page (map slot) |
| `about.svg`, `team.svg` | Home intro, About page |
| `service-*.svg` | Service cards |
| `pressing-interior.svg` | Services page (pressing) |
| `workshop-interior.svg` | Services / About pages |
| `blog-*.svg` | Blog article covers |
| `og.svg` | Social share / Open Graph image |

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
