"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { posts } from "@/lib/posts";
import { Img } from "@/components/Img";
import { SectionHeading } from "@/components/SectionHeading";
import { Cta } from "@/components/Cta";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export function HomeContent() {
  const { t, lang } = useI18n();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0">
          <Img
            src="/images/hero-workshop.svg"
            alt={t.hero.imageLabel}
            aspect="auto"
            className="h-full w-full opacity-40"
            imgClassName=""
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-900/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
              {t.hero.badge}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {t.hero.titleA}{" "}
              <span className="text-brand-400">{t.hero.titleHighlight}</span>{" "}
              {t.hero.titleB}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-200">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-500"
              >
                {t.hero.ctaPrimary}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-brand-400 sm:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-ink-300 sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={t.intro.eyebrow}
              title={t.intro.title}
              className="mb-6"
            />
            <p className="mt-4 leading-7 text-ink-600">{t.intro.p1}</p>
            <p className="mt-4 leading-7 text-ink-600">{t.intro.p2}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.intro.featureList.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-700"
            >
              {t.intro.cta}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <Img
              src="/images/about.svg"
              alt={t.intro.imageLabel}
              aspect="4/3"
              className="rounded-3xl shadow-xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-brand-600 p-5 text-white shadow-lg sm:block">
              <p className="font-display text-3xl font-bold">+10</p>
              <p className="text-xs uppercase tracking-wider text-white/80">
                {t.hero.stats[1].label}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.services.items.map((s) => (
              <article
                key={s.key}
                id={s.key}
                className="group overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <Img
                    src={s.image}
                    alt={s.title}
                    aspect="16/9"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="transition duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-2xl shadow">
                    {s.icon}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-7 text-ink-600">{s.desc}</p>
                  <Link
                    href={`/services#${s.key}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:text-brand-500"
                  >
                    {t.blog.readMore}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORKSHOP SUB-SERVICES ===== */}
      <section className="bg-ink-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            light
            eyebrow={t.services.items[1].title}
            title={t.services.workshopSub.title}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.workshopSub.items.map((w) => (
              <div
                key={w.title}
                className="rounded-3xl border border-ink-700 bg-ink-800 p-6 transition hover:border-brand-500/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-2xl">
                  {w.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-300">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            subtitle={t.why.subtitle}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((w) => (
              <div
                key={w.title}
                className="rounded-3xl border border-ink-100 bg-ink-50 p-6 text-center"
              >
                <span className="text-4xl">{w.icon}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.items.map((p, i) => (
              <div key={p.title} className="relative rounded-3xl border border-ink-100 bg-white p-6">
                <span className="font-display text-4xl font-bold text-brand-200">{p.title}</span>
                <p className="mt-3 text-sm leading-6 text-ink-600">{p.desc}</p>
                {i < t.process.items.length - 1 && (
                  <ArrowRightIcon className="absolute right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-ink-200 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.testimonials.items.map((tm) => (
              <figure key={tm.name} className="rounded-3xl border border-ink-100 bg-ink-50 p-7">
                <div className="text-brand-500" aria-hidden>
                  {"★★★★★"}
                </div>
                <blockquote className="mt-4 text-ink-700">“{tm.quote}”</blockquote>
                <figcaption className="mt-5 border-t border-ink-100 pt-4">
                  <p className="font-semibold text-ink-900">{tm.name}</p>
                  <p className="text-sm text-ink-500">{tm.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow={t.blog.eyebrow}
              title={t.blog.title}
              subtitle={t.blog.subtitle}
            />
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-700"
            >
              {t.blog.viewAll}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => {
              const c = p[lang];
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Img
                    src={p.image}
                    alt={c.title}
                    aspect="16/10"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-400">
                      <span className="rounded-full bg-brand-100 px-3 py-1 font-medium text-brand-700">
                        {p.category}
                      </span>
                      <time dateTime={p.date}>{p.date}</time>
                      <span>· {c.readMinutes} {t.blog.minRead}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-600">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{c.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <Cta />
    </>
  );
}
