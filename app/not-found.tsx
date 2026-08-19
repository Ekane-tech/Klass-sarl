"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-ink-50 px-4 py-24 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-brand-500">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink-900">
          {t.notFound.title}
        </h1>
        <p className="mt-3 text-ink-500">{t.notFound.text}</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
        >
          {t.notFound.back}
        </Link>
      </div>
    </section>
  );
}
