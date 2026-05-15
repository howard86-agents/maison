import { LOCALES, type Locale } from "../translations";

function stripLocaleSegment(path: string): string {
  for (const loc of LOCALES) {
    if (path === `/${loc}`) {
      return "/";
    }
    if (path.startsWith(`/${loc}/`)) {
      return path.slice(loc.length + 1);
    }
  }
  return path;
}

export function localeHref(locale: Locale, path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  const bare = stripLocaleSegment(normalised);
  return bare === "/" ? `/${locale}` : `/${locale}${bare}`;
}
