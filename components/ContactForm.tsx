"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { company } from "@/lib/translations";
import { CheckIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setErrorMsg(t.form.required);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      // API not configured (no SMTP) — fall back to the visitor's mail client.
      const subject = encodeURIComponent(
        `${company.name} — ${payload.service || t.form.servicePh}`
      );
      const body = encodeURIComponent(
        `${t.form.name}: ${payload.name}\n${t.form.phone}: ${payload.phone}\n${t.form.email}: ${payload.email}\n\n${payload.message}`
      );
      // Open the visitor's mail client with a pre-filled message.
      const mailto = document.createElement("a");
      mailto.href = `${company.emailHref}?subject=${subject}&body=${body}`;
      mailto.click();
      setStatus("success");
    } catch {
      setErrorMsg(t.form.error);
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

  return (
    <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
        {t.form.title}
      </h3>
      <p className="mt-1 text-sm text-ink-500">{t.form.subtitle}</p>

      {status === "success" ? (
        <div className="mt-6 rounded-2xl bg-green-50 p-6 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
            <CheckIcon className="h-6 w-6" />
          </span>
          <p className="mt-4 font-medium text-green-800">{t.form.success}</p>
          <p className="mt-2 text-sm text-green-700">
            {t.form.mailtoNote}{" "}
            <a href={company.emailHref} className="font-semibold underline">
              {company.email}
            </a>
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-5 rounded-full border border-green-300 px-5 py-2 text-sm font-medium text-green-800 transition hover:bg-green-100"
          >
            {t.form.back}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700">
                {t.form.name} *
              </label>
              <input id="name" name="name" required placeholder={t.form.namePh} className={inputCls} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-700">
                {t.form.phone}
              </label>
              <input id="phone" name="phone" type="tel" placeholder={t.form.phonePh} className={inputCls} />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700">
              {t.form.email} *
            </label>
            <input id="email" name="email" type="email" required placeholder={t.form.emailPh} className={inputCls} />
          </div>

          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-700">
              {t.form.service}
            </label>
            <select id="service" name="service" className={inputCls} defaultValue="">
              <option value="">{t.form.servicePh}</option>
              <option value="pressing">{t.form.servicePressing}</option>
              <option value="workshop">{t.form.serviceWorkshop}</option>
              <option value="other">{t.form.serviceOther}</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
              {t.form.message} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder={t.form.messagePh}
              className={inputCls}
            />
          </div>

          {errorMsg && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? t.form.submitting : t.form.submit}
          </button>

          <p className="text-center text-xs text-ink-400">
            {t.form.mailtoNote}{" "}
            <a href={company.emailHref} className="font-medium text-brand-600 underline">
              {company.email}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
