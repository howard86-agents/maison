import { PRODUCTS } from "@maison/data";
import type { MetadataRoute } from "next";
import { localeHref } from "../lib/i18n/path";
import { languageAlternates } from "../lib/seo/metadata";
import { SITE_URL } from "../lib/seo/site";
import { LOCALES } from "../lib/translations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/collection", priority: 0.9, changeFrequency: "weekly" },
    { path: "/request", priority: 0.8, changeFrequency: "monthly" },
  ];

  const productPaths = PRODUCTS.map((product) => ({
    path: `/product/${product.id}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  const entries: MetadataRoute.Sitemap = [];
  for (const { path, priority, changeFrequency } of [
    ...staticPaths,
    ...productPaths,
  ]) {
    const languages = languageAlternates(path);
    for (const locale of LOCALES) {
      entries.push({
        url: new URL(localeHref(locale, path), SITE_URL).toString(),
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages },
      });
    }
  }
  return entries;
}
