"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { posts } from "@/lib/posts";
import { Img } from "@/components/Img";
import { SectionHeading } from "@/components/SectionHeading";
import { Cta } from "@/components/Cta";
import { ArrowRightIcon, CheckIcon, StarIcon } from "@/components/icons";
import { DynamicIcon } from "@/components/DynamicIcon";
import { FadeIn, SlideUp, SlideIn, StaggerContainer, StaggerItem, HoverLift } from "@/components/animations";

export function HomeContent() {
  const { t, lang } = useI18n();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0">
          <Img
            src="/images/hero-workshop.png"
            alt={t.hero.imageLabel}
            aspect="auto"
            className="h-full w-full opacity-40"
            imgClassName=""
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/60 to-ink-900/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-6">
          <FadeIn>
            <div className="max-w-2xl">
              <SlideUp delay={0.1}>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
                  {t.hero.badge}
                </span>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                  {t.hero.titleA}{" "}
                  <span className="text-brand-400">{t.hero.titleHighlight}</span>{" "}
                  {t.hero.titleB}
                </h1>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="mt-6 max-w-xl text-lg leading-8 text-ink-200">{t.hero.subtitle}</p>
              </SlideUp>
              <SlideUp delay={0.4}>
                <div className="mt-6 flex flex-wrap gap-3">
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
              </SlideUp>

              <StaggerContainer className="mt-12 grid max-w-lg grid-cols-3 gap-6">
                {t.hero.stats.map((s) => (
                  <StaggerItem key={s.label}>
                    <div>
                      <dt className="font-display text-3xl font-bold text-brand-400 sm:text-4xl">
                        {s.value}
                      </dt>
                      <dd className="mt-1 text-xs uppercase tracking-wider text-ink-300 sm:text-sm">
                        {s.label}
                      </dd>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <SlideIn direction="left">
            <div>
              <SectionHeading
                align="left"
                eyebrow={t.intro.eyebrow}
                title={t.intro.title}
                className="mb-6"
              />
              <p className="mt-4 leading-7 text-ink-600">{t.intro.p1}</p>
              <p className="mt-4 leading-7 text-ink-600">{t.intro.p2}</p>
              <StaggerContainer className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.intro.featureList.map((f) => (
                  <StaggerItem key={f}>
                    <li className="flex items-start gap-2.5 text-sm text-ink-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-700"
              >
                {t.intro.cta}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div className="relative">
              <Img
                src="/images/about.jpg"
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
          </SlideIn>
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
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2">
            {t.services.items.map((s) => (
              <StaggerItem key={s.key}>
                <HoverLift>
                  <article
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
                      <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-brand-600 shadow">
                        <DynamicIcon name={s.icon} className="h-6 w-6" />
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
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.workshopSub.items.map((w) => (
              <StaggerItem key={w.title}>
                <HoverLift>
                  <div className="rounded-3xl border border-ink-700 bg-ink-800 p-6 transition hover:border-brand-500/60">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                      <DynamicIcon name={w.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-300">{w.desc}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((w) => (
              <StaggerItem key={w.title}>
                <HoverLift>
                  <div className="rounded-3xl border border-ink-100 bg-ink-50 p-6 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                      <DynamicIcon name={w.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{w.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{w.desc}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.items.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="relative rounded-3xl border border-ink-100 bg-white p-6">
                  <span className="font-display text-4xl font-bold text-brand-200">{p.title}</span>
                  <p className="mt-3 text-sm leading-6 text-ink-600">{p.desc}</p>
                  {i < t.process.items.length - 1 && (
                    <ArrowRightIcon className="absolute right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-ink-200 lg:block" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      {/* <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
            {t.testimonials.items.map((tm) => (
              <StaggerItem key={tm.name}>
                <HoverLift>
                  <figure className="flex h-full flex-col rounded-3xl border border-ink-100 bg-ink-50 p-7">
                    <div className="flex gap-1 text-brand-500" aria-label="5 sur 5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-ink-700">"{tm.quote}"</blockquote>
                    <figcaption className="mt-5 border-t border-ink-100 pt-4">
                      <p className="font-semibold text-ink-900">{tm.name}</p>
                      <p className="text-sm text-ink-500">{tm.role}</p>
                    </figcaption>
                  </figure>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* ===== PARTNERSHIP ===== */}
      <section className="bg-brand-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t.partnership.eyebrow}
            title={t.partnership.title}
            subtitle={t.partnership.subtitle}
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <SlideIn direction="left">
              <p className="text-lg leading-7 text-ink-700">{t.partnership.description}</p>
              <StaggerContainer className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.partnership.points.map((p) => (
                  <StaggerItem key={p}>
                    <li className="flex items-start gap-2.5 text-sm text-ink-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {p}
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SlideIn>
            <SlideIn direction="right">
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="font-display text-2xl font-bold text-ink-900">{t.partnership.partnerName}</h3>
                <p className="mt-2 text-sm text-ink-500">{t.partnership.partnerSubtitle}</p>
                <p className="mt-4 text-ink-600">
                  {t.partnership.partnerDescription}
                </p>
              </div>
            </SlideIn>
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
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => {
              const c = p[lang];
              return (
                <StaggerItem key={p.slug}>
                  <HoverLift>
                    <Link
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
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <Cta />
    </>
  );
}
