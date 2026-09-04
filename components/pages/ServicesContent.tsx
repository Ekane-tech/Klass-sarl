"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Img } from "@/components/Img";
import { SectionHeading } from "@/components/SectionHeading";
import { Cta } from "@/components/Cta";
import { CheckIcon } from "@/components/icons";
import { DynamicIcon } from "@/components/DynamicIcon";
import { FadeIn, SlideUp, SlideIn, StaggerContainer, StaggerItem, HoverLift } from "@/components/animations";

export function ServicesContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Page hero */}
      <section className="bg-ink-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <SlideUp delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                {t.nav.services}
              </span>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {t.services.title}
              </h1>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="mt-4 max-w-2xl text-lg text-ink-200">{t.services.subtitle}</p>
            </SlideUp>
          </FadeIn>
        </div>
      </section>

      {/* Workshop */}
      <section id="workshop" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t.services.items[0].title}
            title={t.services.workshopSub.title}
            subtitle={t.services.items[0].desc}
          />
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.workshopSub.items.map((w) => (
              <StaggerItem key={w.title}>
                <HoverLift>
                  <div className="rounded-3xl border border-ink-100 bg-white p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                      <DynamicIcon name={w.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{w.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{w.desc}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Welding techniques */}
          <div className="mt-16">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              {t.services.weldingTypes.eyebrow}
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink-900">
              {t.services.weldingTypes.title}
            </h3>
            <p className="mt-2 text-sm text-ink-500">{t.services.weldingTypes.subtitle}</p>
            <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-3">
              {t.services.weldingTypes.items.map((w) => (
                <StaggerItem key={w.title}>
                  <HoverLift>
                    <div className="rounded-3xl border border-ink-100 bg-white p-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                        <DynamicIcon name={w.icon} className="h-6 w-6" />
                      </span>
                      <h4 className="mt-4 font-display text-lg font-bold text-ink-900">{w.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-ink-500">{w.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {w.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </HoverLift>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <StaggerContainer className="mt-10 grid gap-6 lg:grid-cols-2">
            <StaggerItem>
              <div className="flex items-start gap-4 rounded-3xl border border-ink-100 bg-white p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-display font-bold text-ink-900">
                    {t.services.workshopSub.items[0].title}
                  </h4>
                  <p className="mt-1 text-sm text-ink-500">
                    {t.services.workshopSub.items[0].desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-start gap-4 rounded-3xl border border-ink-100 bg-white p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-display font-bold text-ink-900">
                    {t.services.workshopSub.items[3].title}
                  </h4>
                  <p className="mt-1 text-sm text-ink-500">
                    {t.services.workshopSub.items[3].desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-3">
            {["/images/service-welding2.png", "/images/service-gates.jpg", "/images/workshop3.jpg"].map(
              (src, i) => (
                <StaggerItem key={src}>
                  <Img
                    src={src}
                    alt={[t.services.workshopSub.items[0].title, t.services.workshopSub.items[1].title, t.services.workshopSub.items[2].title][i]}
                    aspect="4/3"
                    className="rounded-3xl shadow-sm"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </StaggerItem>
              )
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Spare parts teaser */}
      <section className="bg-brand-600 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-100">
              {t.services.productsTeaser.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              {t.services.productsTeaser.title}
            </h2>
            <p className="mt-2 max-w-xl text-brand-50">{t.services.productsTeaser.subtitle}</p>
          </div>
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            {t.services.productsTeaser.cta}
          </Link>
        </div>
      </section>

      {/* Pressing */}
      <section id="pressing" className="scroll-mt-24 bg-ink-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <SlideIn direction="left">
            <Img
              src="/images/siege.png"
              alt={t.services.items[1].title}
              aspect="4/3"
              className="rounded-3xl shadow-xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </SlideIn>
          <SlideIn direction="right">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                <DynamicIcon name={t.services.items[1].icon} className="h-4 w-4" />
                {t.services.items[1].title}
              </span>
              <h2 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                {t.services.items[1].title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-ink-600">{t.services.items[1].desc}</p>
              <StaggerContainer className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.services.pressingPoints.map((p) => (
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
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Request quote band */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">{t.services.ctaTitle}</h2>
            <p className="mt-2 text-ink-200">{t.services.ctaSubtitle}</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-500"
          >
            {t.services.ctaButton}
          </a>
        </div>
      </section>

      <Cta />
    </>
  );
}
