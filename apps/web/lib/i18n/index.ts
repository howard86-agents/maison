import { cookies, headers } from "next/headers";
import { type Lang, TRANSLATIONS } from "../translations";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, type Locale } from "./config";

const LEGACY_LANG: Record<Locale, Lang> = {
  en: "EN",
  "zh-TW": "TC",
};

export async function getLocale(): Promise<Locale> {
  const cookieValue = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieValue)) {
    return cookieValue;
  }

  const acceptLanguage = (await headers()).get("accept-language") ?? "";
  for (const tag of acceptLanguage.split(",")) {
    const candidate = tag.trim().split(";")[0]?.trim();
    if (isLocale(candidate)) {
      return candidate;
    }
    if (candidate?.startsWith("zh")) {
      return "zh-TW";
    }
    if (candidate?.startsWith("en")) {
      return "en";
    }
  }
  return DEFAULT_LOCALE;
}

export async function getDictionary(locale?: Locale) {
  const resolved = locale ?? (await getLocale());
  return TRANSLATIONS[LEGACY_LANG[resolved]];
}

export type { Locale } from "./config";
