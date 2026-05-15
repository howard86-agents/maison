import { PRODUCTS } from "@maison/data";
import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/seo/site";
import { HTML_LANG, LOCALES } from "../lib/translations";

function languageAlternates(path: string): Record<string, string> {
  const url = new URL(path, SITE_URL).toString();
  const entries: Record<string, string> = {};
  for (const locale of LOCALES) {
    entries[HTML_LANG[locale]] = url;
  }
  return entries;
}

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

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: new URL(path, SITE_URL).toString(),
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    })
  );

  const productEntries: MetadataRoute.Sitemap = PRODUCTS.map((product) => {
    const path = `/product/${product.id}`;
    return {
      url: new URL(path, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: languageAlternates(path) },
    };
  });

  return [...staticEntries, ...productEntries];
}
