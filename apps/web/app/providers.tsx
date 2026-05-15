"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CURRENCY_CODES, type CurrencyCode } from "../lib/currency";
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_COOKIE,
  matchLocaleFromTag,
} from "../lib/i18n/config";
import {
  type Dictionary,
  HTML_LANG,
  type Locale,
  TRANSLATIONS,
} from "../lib/translations";

interface LocaleCtx {
  ccy: CurrencyCode;
  locale: Locale;
  setCcy: (c: CurrencyCode) => void;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}

interface ThemeCtx {
  dark: boolean;
  toggleDark: () => void;
}

const LocaleContext = createContext<LocaleCtx | null>(null);
const ThemeContext = createContext<ThemeCtx | null>(null);

export function useLocale(): LocaleCtx {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within Providers");
  }
  return ctx;
}

export function useT(): Dictionary {
  return useLocale().t;
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within Providers");
  }
  return ctx;
}

function detectBrowserLocale(): Locale | null {
  return matchLocaleFromTag(window.navigator.language ?? "");
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ccy, setCcyState] = useState<CurrencyCode>("USD");
  const [dark, setDark] = useState<boolean>(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedLocale = window.localStorage.getItem("maison.locale");
      const storedCcy = window.localStorage.getItem("maison.ccy");
      const storedDark = window.localStorage.getItem("maison.dark");
      if (isLocale(storedLocale)) {
        setLocaleState(storedLocale);
      } else {
        const detected = detectBrowserLocale();
        if (detected) {
          setLocaleState(detected);
        }
      }
      if (
        storedCcy &&
        (CURRENCY_CODES as readonly string[]).includes(storedCcy)
      ) {
        setCcyState(storedCcy as CurrencyCode);
      }
      if (storedDark === "1") {
        setDark(true);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      window.localStorage.setItem("maison.dark", dark ? "1" : "0");
    } catch {
      // ignore
    }
  }, [dark, hydrated]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    document.documentElement.lang = HTML_LANG[locale];
  }, [locale, hydrated]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState((prev) => {
      if (prev === next) {
        return prev;
      }
      try {
        window.localStorage.setItem("maison.locale", next);
        // biome-ignore lint/suspicious/noDocumentCookie: server reads `accept-language` fallback when cookie absent; one-line write is simplest.
        document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
      } catch {
        // ignore
      }
      return next;
    });
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

  const localeValue = useMemo(
    () => ({
      locale,
      ccy,
      t: TRANSLATIONS[locale],
      setLocale,
      setCcy,
    }),
    [locale, ccy, setLocale, setCcy]
  );
  const themeValue = useMemo(() => ({ dark, toggleDark }), [dark, toggleDark]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <LocaleContext.Provider value={localeValue}>
        {children}
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}
