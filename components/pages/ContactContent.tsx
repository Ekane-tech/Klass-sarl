"use client";

import { useI18n } from "@/lib/i18n";
import { company } from "@/lib/translations";
import { ContactForm } from "@/components/ContactForm";
import { Img } from "@/components/Img";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/icons";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverLift } from "@/components/animations";

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
            src="/images/Contact-hero.jpg"
            alt={t.contactPage.title}
            aspect="auto"
            className="h-full w-full opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink-950/90 to-ink-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <SlideUp delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                {t.nav.contact}
              </span>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {t.contactPage.title}
              </h1>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="mt-4 max-w-2xl text-lg text-ink-200">{t.contactPage.subtitle}</p>
            </SlideUp>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Info cards */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((c) => {
              const Icon = c.icon;
              const content = (
                <HoverLift>
                  <div className="flex h-full flex-col items-start rounded-3xl border border-ink-100 bg-white p-6 transition hover:border-brand-300 hover:shadow-sm">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {c.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink-900">{c.value}</p>
                  </div>
                </HoverLift>
              );
              return c.href ? (
                <StaggerItem key={c.label}>
                  <a href={c.href} className="h-full">
                    {content}
                  </a>
                </StaggerItem>
              ) : (
                <StaggerItem key={c.label}>
                  <div className="h-full">
                    {content}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Form + map */}
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <FadeIn>
                <ContactForm />
              </FadeIn>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <FadeIn>
                <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
                  <div className="relative">
                    <Img
                      src="/images/quartier-damour.jpg"
                      alt={t.contactPage.mapLabel}
                      aspect="4/3"
                      className="border-b border-ink-100"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                      {t.contactPage.mapLocation}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      {t.contactPage.mapLabel}
                    </h3>
                    <p className="mt-2 text-sm text-ink-600">{t.contactPage.mapDescription}</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=rond+point+quartier+damour"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-700"
                    >
                      <PinIcon className="h-4 w-4" />
                      Google Maps
                    </a>
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
                  <div className="relative">
                    <Img
                      src="/images/workshop-siege.png"
                      alt={t.contactPage.lyceeLabel}
                      aspect="4/3"
                      className="border-b border-ink-100"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                      {t.contactPage.lyceeLocation}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      {t.contactPage.lyceeLabel}
                    </h3>
                    <p className="mt-2 text-sm text-ink-600">{t.contactPage.lyceeDescription}</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=lycee+classique+edea"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-700"
                    >
                      <PinIcon className="h-4 w-4" />
                      Google Maps
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
