import type { Product } from "@maison/data";
import type { Metadata } from "next";
import {
  type Dictionary,
  formatTemplate,
  HTML_LANG,
  LOCALES,
  type Locale,
} from "../translations";
import { OG_IMAGE, SITE_URL, TWITTER_HANDLE } from "./site";

type PageKey = keyof Dictionary["meta"]["pages"];

interface BuildOptions {
  locale: Locale;
  noFollow?: boolean;
  noIndex?: boolean;
  path: string;
}

function languageAlternates(path: string): Record<string, string> {
  const url = new URL(path, SITE_URL).toString();
  const entries: Record<string, string> = {};
  for (const locale of LOCALES) {
    entries[HTML_LANG[locale]] = url;
  }
  return entries;
}

function robotsFor(opts: BuildOptions): Metadata["robots"] {
  if (!(opts.noIndex || opts.noFollow)) {
    return;
  }
  return {
    index: !opts.noIndex,
    follow: !opts.noFollow,
    googleBot: {
      index: !opts.noIndex,
      follow: !opts.noFollow,
    },
  };
}

export function buildPageMetadata(
  t: Dictionary,
  page: PageKey,
  opts: BuildOptions
): Metadata {
  const entry = t.meta.pages[page];
  const url = new URL(opts.path, SITE_URL).toString();
  const ogImage = new URL(OG_IMAGE, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: url,
      languages: languageAlternates(opts.path),
    },
    openGraph: {
      type: "website",
      url,
      siteName: t.meta.siteName,
      title: entry.title,
      description: entry.description,
      locale: HTML_LANG[opts.locale],
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      title: entry.title,
      description: entry.description,
      images: [ogImage],
    },
    robots: robotsFor(opts),
  };
}

export function buildProductMetadata(
  t: Dictionary,
  product: Product,
  opts: { path: string; locale: Locale }
): Metadata {
  const vars = {
    name: product.name,
    house: product.house,
    condition: product.condition ?? "",
  };
  const title = formatTemplate(t.meta.product.titleTemplate, vars);
  const description = formatTemplate(t.meta.product.descriptionTemplate, vars);
  const url = new URL(opts.path, SITE_URL).toString();
  const ogImage = new URL(OG_IMAGE, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(opts.path),
    },
    openGraph: {
      type: "website",
      url,
      siteName: t.meta.siteName,
      title,
      description,
      locale: HTML_LANG[opts.locale],
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      title,
      description,
      images: [ogImage],
    },
  };
}
