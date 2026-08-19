"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";
import { translations, defaultLang } from "./translations";
import type { Lang } from "./translations";

const STORAGE_KEY = "klass-sarl-lang";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (typeof translations)["fr"];
};

const I18nContext = createContext<I18nValue | null>(null);

function readLang(): Lang {
  if (typeof window === "undefined") return defaultLang;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  const nav = window.navigator.language || "";
  if (nav.toLowerCase().startsWith("en")) return "en";
  return defaultLang;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function writeLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  // Notify the external store so subscribers re-read the snapshot.
  window.dispatchEvent(new Event("storage"));
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    subscribe,
    () => readLang(),
    () => defaultLang
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => writeLang(next), []);
  const toggleLang = useCallback(
    () => writeLang(lang === "fr" ? "en" : "fr"),
    [lang]
  );

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, toggleLang, t: translations[lang] }),
    [lang, setLang, toggleLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
