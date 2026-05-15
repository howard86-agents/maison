import { LOCALES, type Locale } from "../translations";

export const DEFAULT_LOCALE: Locale = "zh-TW";

export const LOCALE_COOKIE = "maison_locale";

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (LOCALES as readonly string[]).includes(value)
  );
}

const LOCALE_PREFIX_MAP: { prefix: string; locale: Locale }[] = [
  { prefix: "zh-tw", locale: "zh-TW" },
  { prefix: "zh-hant", locale: "zh-TW" },
  { prefix: "zh-cn", locale: "zh-CN" },
  { prefix: "zh-hans", locale: "zh-CN" },
  { prefix: "ja", locale: "ja" },
  { prefix: "ko", locale: "ko" },
  { prefix: "en", locale: "en" },
  { prefix: "zh", locale: "zh-TW" },
];

export function matchLocaleFromTag(tag: string): Locale | null {
  const candidate = tag.trim().split(";")[0]?.trim().toLowerCase();
  if (!candidate) {
    return null;
  }
  for (const { prefix, locale } of LOCALE_PREFIX_MAP) {
    if (candidate === prefix || candidate.startsWith(`${prefix}-`)) {
      return locale;
    }
  }
  return null;
}
