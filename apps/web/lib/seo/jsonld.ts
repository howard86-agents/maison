import type { Product } from "@maison/data";
import {
  type Dictionary,
  formatTemplate,
  HTML_LANG,
  type Locale,
} from "../translations";
import { OG_IMAGE, SITE_URL } from "./site";

type JsonLd = Record<string, unknown>;

export function buildOrganizationLd(t: Dictionary, locale: Locale): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t.meta.siteName,
    legalName: t.meta.title,
    url: SITE_URL,
    logo: new URL(OG_IMAGE, SITE_URL).toString(),
    description: t.meta.pages.home.description,
    inLanguage: HTML_LANG[locale],
    foundingDate: "2019",
    foundingLocation: "Taipei",
  };
}

function availabilityFor(stockType: Product["stockType"]): string {
  return stockType === "in-vault"
    ? "https://schema.org/InStock"
    : "https://schema.org/PreOrder";
}

export function buildProductLd(
  t: Dictionary,
  product: Product,
  opts: { path: string; locale: Locale }
): JsonLd {
  const vars = {
    name: product.name,
    house: product.house,
    condition: product.condition ?? "",
  };
  const description = formatTemplate(t.meta.product.descriptionTemplate, vars);
  const url = new URL(opts.path, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: {
      "@type": "Brand",
      name: product.house,
    },
    description,
    sku: product.id,
    inLanguage: HTML_LANG[opts.locale],
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: product.ccy,
      price: product.price,
      availability: availabilityFor(product.stockType),
      seller: {
        "@type": "Organization",
        name: t.meta.siteName,
      },
    },
  };
}

export function buildBreadcrumbLd(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function jsonLdScriptProps(data: JsonLd): {
  type: "application/ld+json";
  dangerouslySetInnerHTML: { __html: string };
} {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
