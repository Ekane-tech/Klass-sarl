"use client";

import { useI18n } from "@/lib/i18n";
import { company } from "@/lib/translations";
import { PhoneIcon, MailIcon, ArrowRightIcon } from "./icons";

export function Cta() {
  const { t } = useI18n();
  return (
    <section className="bg-ink-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-black/10" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.cta.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-white/90">{t.cta.subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={company.phoneHrefs[0]}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow transition hover:bg-ink-50"
              >
                <PhoneIcon className="h-4 w-4" />
                {t.cta.button}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MailIcon className="h-4 w-4" />
                {t.cta.emailUs}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
