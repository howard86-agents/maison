import { cookies, headers } from "next/headers";
import { cache } from "react";
import { type Locale, TRANSLATIONS } from "../translations";
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_COOKIE,
  matchLocaleFromTag,
} from "./config";

export const getLocale = cache(async (): Promise<Locale> => {
  const cookieValue = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieValue)) {
    return cookieValue;
  }

  const acceptLanguage = (await headers()).get("accept-language") ?? "";
  for (const tag of acceptLanguage.split(",")) {
    const matched = matchLocaleFromTag(tag);
    if (matched) {
      return matched;
    }
  }
  return DEFAULT_LOCALE;
});

export const getDictionary = cache(async (locale?: Locale) => {
  const resolved = locale ?? (await getLocale());
  return TRANSLATIONS[resolved];
});

export type { Locale } from "../translations";
