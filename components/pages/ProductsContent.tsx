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

export function ProductsContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Page hero */}
      <section className="bg-ink-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <SlideUp delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                {t.nav.products}
              </span>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {t.productsPage.title}
              </h1>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="mt-4 max-w-2xl text-lg text-ink-200">
                {t.productsPage.subtitle}
              </p>
            </SlideUp>
          </FadeIn>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <p className="mx-auto max-w-3xl text-center text-ink-600">
              {t.productsPage.intro}
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.productsPage.items.map((p) => (
              <StaggerItem key={p.name}>
                <HoverLift>
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

      {/* Request a part band */}
      <section className="bg-ink-900 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {t.productsPage.orderTitle}
            </h2>
            <p className="mt-2 max-w-xl text-ink-200">{t.productsPage.orderSubtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              {t.productsPage.orderButton}
            </Link>
            <a
              href={company.phoneHrefs[0]}
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-brand-400 hover:text-brand-400"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.productsPage.callButton}
            </a>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
