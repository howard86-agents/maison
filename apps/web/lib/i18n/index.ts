import { cache } from "react";
import { type Locale, TRANSLATIONS } from "../translations";

export const getDictionary = cache(
  async (locale: Locale) => TRANSLATIONS[locale]
);

export type { Locale } from "../translations";
