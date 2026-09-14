"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { company } from "@/lib/translations";
import { Img } from "@/components/Img";
import { Cta } from "@/components/Cta";
import { PhoneIcon } from "@/components/icons";
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  StaggerItem,
  HoverLift,
} from "@/components/animations";

export function FabricationContent() {
  const { t } = useI18n();
  const f = t.fabricationPage;

  return (
    <>
      {/* Page hero with before/after photo */}
      <section className="bg-ink-900 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <FadeIn>
            <SlideUp delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                {t.nav.products}
              </span>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {f.title}
              </h1>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="mt-4 max-w-xl text-lg text-ink-200">{f.subtitle}</p>
            </SlideUp>
            <SlideUp delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-500"
                >
                  {f.ctaButton}
                </Link>
                <a
                  href={company.phoneHrefs[0]}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-400"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {f.callButton}
                </a>
                <a
                  href="#pieces-de-rechange"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-500 px-7 py-3.5 text-sm font-semibold text-brand-400 transition hover:bg-brand-600 hover:text-white"
                >
                  {f.partsButton}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </SlideUp>
          </FadeIn>
          <FadeIn delay={0.2}>
            <figure>
              <Img
                src={f.heroImage}
                alt={f.heroImageAlt}
                aspect="4/3"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="rounded-3xl bg-ink-800"
                imgClassName="object-contain"
                priority
              />
              <figcaption className="mt-3 text-center text-xs text-ink-400">
                {f.heroCaption}
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-center font-display text-3xl font-bold text-ink-900">
              {f.pillarsTitle}
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            {f.pillars.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <HoverLift className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
                    <Img
                      src={p.image}
                      alt={p.imageAlt}
                      aspect="4/3"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="bg-ink-100"
                      imgClassName="object-contain"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-bold text-ink-900">
                        {p.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-ink-500">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery by family */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-center font-display text-3xl font-bold text-ink-900">
              {f.galleryTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-ink-600">
              {f.gallerySubtitle}
            </p>
          </FadeIn>

          {f.families.map((family) => (
            <div key={family.name} className="mt-12">
              <FadeIn>
                <h3 className="flex items-center gap-3 font-display text-xl font-bold text-ink-900">
                  <span className="h-1 w-8 rounded-full bg-brand-600" />
                  {family.name}
                </h3>
              </FadeIn>
              <StaggerContainer className="mt-5 grid grid-cols-2 items-stretch gap-4 sm:gap-6 lg:grid-cols-4">
                {family.items.map((item) => (
                  <StaggerItem key={item.image || item.images?.[0]} className="h-full">
                    <HoverLift className="h-full">
                      <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm">
                        {item.images ? (
                          <div className="grid grid-rows-2 h-full">
                            <Img
                              src={item.images[0]}
                              alt={`${item.name} - image 1`}
                              aspect="2/1"
                              sizes="(min-width: 1024px) 12.5vw, 25vw"
                              className="bg-ink-100"
                              imgClassName="object-cover"
                            />
                            <Img
                              src={item.images[1]}
                              alt={`${item.name} - image 2`}
                              aspect="2/1"
                              sizes="(min-width: 1024px) 12.5vw, 25vw"
                              className="bg-ink-100"
                              imgClassName="object-cover"
                            />
                          </div>
                        ) : (
                          <Img
                            src={item.image}
                            alt={item.name}
                            aspect="1/1"
                            sizes="(min-width: 1024px) 25vw, 50vw"
                            className="bg-ink-100"
                            imgClassName="object-contain"
                          />
                        )}
                        <figcaption className="flex flex-1 items-center p-3 text-xs font-medium leading-5 text-ink-700 sm:p-4 sm:text-sm">
                          {item.name}
                        </figcaption>
                      </figure>
                    </HoverLift>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-center font-display text-3xl font-bold text-ink-900">
              {f.processTitle}
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid grid-cols-2 items-stretch gap-4 sm:gap-6 lg:grid-cols-4">
            {f.processSteps.map((step) => (
              <StaggerItem key={step.title} className="h-full">
                <div className="h-full rounded-2xl border border-ink-100 bg-ink-50 p-5 sm:p-6">
                  <h3 className="font-display text-base font-bold text-brand-700 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-ink-600 sm:text-sm sm:leading-6">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Spare parts & consumables */}
      <section id="pieces-de-rechange" className="scroll-mt-24 bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-center font-display text-3xl font-bold text-ink-900">
              {f.partsTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-ink-600">
              {f.partsSubtitle}
            </p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.productsPage.items.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <HoverLift className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
                    <Img
                      src={p.image}
                      alt={p.name}
                      aspect="4/3"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      imgClassName={p.image.includes("lame-scie") ? "object-contain" : ""}
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <span className="inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                        {p.category}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-bold text-ink-900">
                        {p.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-ink-500">
                        {p.desc}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-4 text-xs">
                        <span className="font-medium text-brand-700">
                          {t.productsPage.availability}
                        </span>
                        <span className="text-ink-400">{t.productsPage.askPrice}</span>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn>
            <p className="mt-8 text-center text-xs text-ink-400">
              {t.productsPage.note}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Request band */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {f.ctaTitle}
            </h2>
            <p className="mt-2 max-w-xl text-ink-200">{f.ctaSubtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              {f.ctaButton}
            </Link>
            <a
              href={company.phoneHrefs[0]}
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-400"
            >
              <PhoneIcon className="h-4 w-4" />
              {f.callButton}
            </a>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
