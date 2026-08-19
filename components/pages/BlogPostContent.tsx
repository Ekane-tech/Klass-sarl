"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import type { Post } from "@/lib/posts";
import { posts } from "@/lib/posts";
import { Img } from "@/components/Img";
import { ArrowRightIcon } from "@/components/icons";
import { Cta } from "@/components/Cta";

export function BlogPostContent({ post }: { post: Post }) {
  const { t, lang } = useI18n();
  const c = post[lang];
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        {/* Hero */}
        <header className="bg-ink-900 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="flex items-center gap-3 text-xs text-ink-300">
              <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-brand-400">
                ← {t.nav.blog}
              </Link>
            </div>
            <span className="mt-6 inline-block rounded-full bg-brand-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-400">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {c.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-ink-300">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  K
                </span>
                Klass Sarl
              </span>
              <time dateTime={post.date}>{post.date}</time>
              <span>·</span>
              <span>
                {c.readMinutes} {t.blog.minRead}
              </span>
            </div>
          </div>
        </header>

        {/* Cover */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Img
            src={post.image}
            alt={c.title}
            aspect="16/9"
            className="-mt-0 rounded-b-3xl shadow-xl"
            sizes="(min-width: 1024px) 66vw, 100vw"
            priority
          />
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-5 text-lg leading-8 text-ink-700">
            {c.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Share / contact strip */}
          <div className="mt-10 rounded-3xl border border-ink-100 bg-ink-50 p-6">
            <p className="font-display text-lg font-bold text-ink-900">{t.cta.title}</p>
            <p className="mt-1 text-sm text-ink-500">{t.cta.subtitle}</p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              {t.nav.contact}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="bg-ink-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              {t.blog.title}
            </h2>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-500">
              {t.blog.viewAll}
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => {
              const pc = p[lang];
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Img
                    src={p.image}
                    alt={pc.title}
                    aspect="16/10"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-400">
                      <span className="rounded-full bg-brand-100 px-3 py-1 font-medium text-brand-700">
                        {p.category}
                      </span>
                      <time dateTime={p.date}>{p.date}</time>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-600">
                      {pc.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
