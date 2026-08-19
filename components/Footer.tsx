"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { company } from "@/lib/translations";
import { Logo, PhoneIcon, MailIcon, PinIcon, ClockIcon, ArrowRightIcon, SparklesIcon } from "./icons";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const quick = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  const services = [
    { href: "/services#pressing", label: t.services.items[0].title },
    { href: "/services#workshop", label: t.services.items[1].title },
    { href: "/services#workshop", label: t.services.workshopSub.items[1].title },
    { href: "/services#workshop", label: t.services.workshopSub.items[2].title },
  ];

  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logo className="h-10 w-10" />
              <span className="font-display text-lg font-bold text-white">
                Klass<span className="text-brand-400"> Sarl</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6">{t.footer.about}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-ink-400">
              <SparklesIcon className="h-3.5 w-3.5 text-brand-500" />
              {t.footer.madeIn}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quick.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-1.5 transition hover:text-brand-400"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5 text-brand-500" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-1.5 transition hover:text-brand-400"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5 text-brand-500" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{company.address}</span>
              </li>
              <li className="flex flex-col gap-1.5">
                {company.phones.map((p, i) => (
                  <a
                    key={p}
                    href={company.phoneHrefs[i]}
                    className="inline-flex items-center gap-3 transition hover:text-brand-400"
                  >
                    <PhoneIcon className="h-4 w-4 shrink-0 text-brand-400" />
                    {p}
                  </a>
                ))}
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="inline-flex items-center gap-3 transition hover:text-brand-400"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-brand-400" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-700 pt-6 text-xs text-ink-400 sm:flex-row">
          <p>
            © {year} {company.name}. {t.footer.rights}
          </p>
          <p>{t.footer.designed}</p>
        </div>
      </div>
    </footer>
  );
}
