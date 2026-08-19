"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Img } from "@/components/Img";
import { SectionHeading } from "@/components/SectionHeading";
import { Cta } from "@/components/Cta";
import { ArrowRightIcon, PinIcon } from "@/components/icons";
import { DynamicIcon } from "@/components/DynamicIcon";

export function AboutContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Page hero */}
      <section className="bg-ink-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            {t.nav.about}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.aboutPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-200">{t.aboutPage.subtitle}</p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={t.aboutPage.storyEyebrow}
              title={t.aboutPage.storyTitle}
              className="mb-6"
            />
            <p className="mt-4 leading-7 text-ink-600">{t.aboutPage.storyP1}</p>
            <p className="mt-4 leading-7 text-ink-600">{t.aboutPage.storyP2}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-700"
              >
                {t.nav.services}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 transition hover:bg-ink-50"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
          <Img
            src="/images/team.svg"
            alt={t.aboutPage.imageLabel}
            aspect="4/3"
            className="rounded-3xl shadow-xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* Mission / vision / values */}
      <section className="bg-ink-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t.aboutPage.missionEyebrow}
            title={t.aboutPage.missionTitle}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.aboutPage.missionItems.map((m) => (
              <div key={m.title} className="rounded-3xl border border-ink-100 bg-white p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                  <DynamicIcon name={m.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{m.title}</h3>
                <p className="mt-3 leading-7 text-ink-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Img
            src="/images/workshop-interior.svg"
            alt={t.aboutPage.locationsTitle}
            aspect="4/3"
            className="rounded-3xl shadow-xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow={t.aboutPage.locationsEyebrow}
              title={t.aboutPage.locationsTitle}
              className="mb-6"
            />
            <p className="mt-4 leading-7 text-ink-600">{t.aboutPage.locationsText}</p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-ink-100 bg-ink-50 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink-900">{t.aboutPage.locationsTitle}</p>
                <p className="text-sm text-ink-500">Edéa, Littoral — Cameroun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">{t.aboutPage.ctaTitle}</h2>
            <p className="mt-2 text-ink-200">{t.aboutPage.ctaSubtitle}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-500"
          >
            {t.aboutPage.ctaButton}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Cta />
    </>
  );
}
