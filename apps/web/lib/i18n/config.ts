export const LOCALES = ["en", "zh-TW"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "zh-TW";

const COOKIE_NAME = "maison_locale";
export const LOCALE_COOKIE = COOKIE_NAME;

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (LOCALES as readonly string[]).includes(value)
  );
}
