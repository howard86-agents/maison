import { PRODUCTS } from "@maison/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "../../../../lib/i18n";
import { isLocale } from "../../../../lib/i18n/config";
import {
  buildBreadcrumbLd,
  buildProductLd,
  jsonLdScriptProps,
} from "../../../../lib/seo/jsonld";
import { buildProductMetadata } from "../../../../lib/seo/metadata";
import { ProductClient } from "./product-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return {};
  }
  const t = await getDictionary(locale);
  return buildProductMetadata(t, product, {
    path: `/${locale}/product/${id}`,
    locale,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    notFound();
  }
  const t = await getDictionary(locale);
  const path = `/${locale}/product/${id}`;
  const productLd = buildProductLd(t, product, { path, locale });
  const breadcrumbLd = buildBreadcrumbLd([
    { name: t.meta.siteName, path: `/${locale}` },
    { name: t.nav.collection, path: `/${locale}/collection` },
    { name: product.name, path },
  ]);
  return (
    <>
      <script {...jsonLdScriptProps(productLd)} />
      <script {...jsonLdScriptProps(breadcrumbLd)} />
      <ProductClient product={product} />
    </>
  );
}
