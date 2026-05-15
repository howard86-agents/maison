import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/account",
          "/checkout",
          "/order",
          "/quote",
          "/signin",
        ],
      },
    ],
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
  };
}
