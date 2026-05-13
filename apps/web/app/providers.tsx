"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { CurrencyCode } from "../lib/currency";
import type { Lang } from "../lib/translations";

type LocaleCtx = {
  lang: Lang;
  ccy: CurrencyCode;
  setLang: (l: Lang) => void;
  setCcy: (c: CurrencyCode) => void;
};

type ThemeCtx = {
  dark: boolean;
  toggleDark: () => void;
};

const LocaleContext = createContext<LocaleCtx | null>(null);
const ThemeContext = createContext<ThemeCtx | null>(null);

export function useLocale(): LocaleCtx {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within Providers");
  return ctx;
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within Providers");
  return ctx;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("EN");
  const [ccy, setCcyState] = useState<CurrencyCode>("USD");
  const [dark, setDark] = useState<boolean>(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedLang = window.localStorage.getItem("maison.lang");
      const storedCcy = window.localStorage.getItem("maison.ccy");
      const storedDark = window.localStorage.getItem("maison.dark");
      if (storedLang === "EN" || storedLang === "TC") setLangState(storedLang);
      if (storedCcy && ["USD", "TWD", "EUR", "JPY", "HKD"].includes(storedCcy)) {
        setCcyState(storedCcy as CurrencyCode);
      }
      if (storedDark === "1") setDark(true);
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      window.localStorage.setItem("maison.dark", dark ? "1" : "0");
    } catch {
      // ignore
    }
  }, [dark, hydrated]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem("maison.lang", next);
    } catch {
      // ignore
    }
  }, []);

  const setCcy = useCallback((next: CurrencyCode) => {
    setCcyState(next);
    try {
      window.localStorage.setItem("maison.ccy", next);
    } catch {
      // ignore
    }
  }, []);

  const toggleDark = useCallback(() => setDark((d) => !d), []);

  const localeValue = useMemo(() => ({ lang, ccy, setLang, setCcy }), [lang, ccy, setLang, setCcy]);
  const themeValue = useMemo(() => ({ dark, toggleDark }), [dark, toggleDark]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <LocaleContext.Provider value={localeValue}>{children}</LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

// Inline script content that runs before React hydration to set the initial
// theme attribute so we never flash the wrong palette on first paint.
export const THEME_INIT_SCRIPT = `
(function(){try{var d=localStorage.getItem('maison.dark');document.documentElement.dataset.theme=d==='1'?'dark':'light';}catch(e){document.documentElement.dataset.theme='light';}})();
`;
