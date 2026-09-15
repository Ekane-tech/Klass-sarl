"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { company } from "@/lib/translations";
import { Logo, MenuIcon, CloseIcon, GlobeIcon, PhoneIcon, PinIcon } from "./icons";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const { lang, toggleLang, t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string; key: string }[] = [
    { href: "/", label: t.nav.home, key: "home" },
    { href: "/services", label: t.nav.services, key: "services" },
    { href: "/products", label: t.nav.products, key: "products" },
    { href: "/about", label: t.nav.about, key: "about" },
    { href: "/blog", label: t.nav.blog, key: "blog" },
    { href: "/contact", label: t.nav.contact, key: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-ink-900 text-ink-200 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <PinIcon className="h-3.5 w-3.5 text-brand-400" />
              {company.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={company.phoneHrefs[0]}
              className="inline-flex items-center gap-1.5 transition hover:text-brand-400"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-brand-400" />
              {company.phones[0]}
            </a>
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-600 px-3 py-1 font-semibold uppercase tracking-wide transition hover:border-brand-400 hover:text-brand-400"
              aria-label={`Switch language to ${lang === "fr" ? "English" : "French"}`}
            >
              <GlobeIcon className="h-3.5 w-3.5" />
              {lang === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b border-ink-100 bg-white/90 backdrop-blur transition-shadow ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Klass Sarl — Accueil">
            <Logo className="h-10 w-10" />
            <span className="font-display text-lg font-bold tracking-tight text-ink-900">
              Klass<span className="text-brand-600"> Sarl</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {links.map((l) => {
              const active = l.key === "home" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.key}
                  href={l.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-ink-900 text-white"
                      : "text-ink-600 hover:bg-ink-50 hover:text-ink-900"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-700 transition hover:border-brand-400 hover:text-brand-600 lg:hidden"
              aria-label={`Switch language to ${lang === "fr" ? "English" : "French"}`}
            >
              <GlobeIcon className="h-3.5 w-3.5" />
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <a
              href={company.phoneHrefs[0]}
              className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500 md:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.nav.callUs}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg p-2 text-ink-700 hover:bg-ink-50 lg:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-ink-100 bg-white overflow-hidden lg:hidden"
              aria-label="Menu mobile"
            >
              <ul className="flex flex-col gap-1 px-4 py-3">
                {links.map((l, index) => {
                  const active = l.key === "home" ? pathname === "/" : pathname.startsWith(l.href);
                  return (
                    <motion.li
                      key={l.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                          active
                            ? "bg-ink-900 text-white"
                            : "text-ink-700 hover:bg-ink-50"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </motion.li>
                  );
                })}
                <motion.li
                  className="mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.05 }}
                >
                  <a
                    href={company.phoneHrefs[0]}
                    className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {t.nav.callUs}
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
