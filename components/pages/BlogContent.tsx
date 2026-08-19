"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { posts, allCategories } from "@/lib/posts";
import { Img } from "@/components/Img";

export function BlogContent() {
  const { t, lang } = useI18n();
  const [category, setCategory] = useState<string>("all");

  const filtered = category === "all" ? posts : posts.filter((p) => p.category === category);

  return (
    <>
      <section className="bg-ink-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
            {t.nav.blog}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.blogPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-200">{t.blogPage.subtitle}</p>
        </div>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("all")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                category === "all"
                  ? "bg-ink-900 text-white"
                  : "border border-ink-200 bg-white text-ink-600 hover:bg-ink-50"
              }`}
            >
              {t.blogPage.title}
            </button>
            {allCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  category === c
                    ? "bg-brand-600 text-white"
                    : "border border-ink-200 bg-white text-ink-600 hover:bg-ink-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const c = p[lang];
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Img
                    src={p.image}
                    alt={c.title}
                    aspect="16/10"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-400">
                      <span className="rounded-full bg-brand-100 px-3 py-1 font-medium text-brand-700">
                        {p.category}
                      </span>
                      <time dateTime={p.date}>{p.date}</time>
                      <span>· {c.readMinutes} {t.blog.minRead}</span>
                    </div>
                    <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-600">
                      {c.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{c.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                      {t.blog.readMore} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-ink-500">{t.blogPage.subtitle}</p>
          )}
        </div>
      </section>
    </>
  );
}
