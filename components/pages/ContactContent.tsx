"use client";

import { useI18n } from "@/lib/i18n";
import { company } from "@/lib/translations";
import { ContactForm } from "@/components/ContactForm";
import { Img } from "@/components/Img";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/icons";

export function ContactContent() {
  const { t } = useI18n();

  const infoCards = [
    {
      icon: PinIcon,
      label: t.contactPage.addressLabel,
      value: company.address,
      href: undefined as string | undefined,
    },
    {
      icon: PhoneIcon,
      label: t.contactPage.phoneLabel,
      value: company.phones.join("  ·  "),
      href: company.phoneHrefs[0],
    },
    {
      icon: MailIcon,
      label: t.contactPage.emailLabel,
      value: company.email,
      href: company.emailHref,
    },
    {
      icon: ClockIcon,
      label: t.contactPage.hoursLabel,
      value: t.contactPage.hours,
      href: undefined as string | undefined,
    },
  ];

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-ink-900 py-16 text-white sm:py-20">
        <div className="absolute inset-0">
          <Img
            src="/images/contact-hero.svg"
            alt={t.contactPage.title}
            aspect="auto"
            className="h-full w-full opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 to-ink-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            {t.nav.contact}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.contactPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-200">{t.contactPage.subtitle}</p>
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Info cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((c) => {
              const Icon = c.icon;
              const content = (
                <div className="flex h-full flex-col items-start rounded-3xl border border-ink-100 bg-white p-6 transition hover:border-brand-300 hover:shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-900">{c.value}</p>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="h-full">
                  {content}
                </a>
              ) : (
                <div key={c.label} className="h-full">
                  {content}
                </div>
              );
            })}
          </div>

          {/* Form + map */}
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
                <Img
                  src="/images/hero-pressing.svg"
                  alt={t.contactPage.mapLabel}
                  aspect="4/3"
                  className="border-b border-ink-100"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {t.contactPage.mapLabel}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500">
                    {t.contactPage.mapNote}
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Edea%2C+Cameroun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-700"
                  >
                    <PinIcon className="h-4 w-4" />
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
