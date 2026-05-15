import { PRODUCTS } from "@maison/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, getLocale } from "../../../lib/i18n";
import {
  buildBreadcrumbLd,
  buildProductLd,
  jsonLdScriptProps,
} from "../../../lib/seo/jsonld";
import { buildProductMetadata } from "../../../lib/seo/metadata";
import { ProductClient } from "./product-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return {};
  }
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return buildProductMetadata(t, product, {
    path: `/product/${id}`,
    locale,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    notFound();
  }
  const locale = await getLocale();
  const t = await getDictionary(locale);
  const path = `/product/${id}`;
  const productLd = buildProductLd(t, product, { path, locale });
  const breadcrumbLd = buildBreadcrumbLd([
    { name: t.meta.siteName, path: "/" },
    { name: t.nav.collection, path: "/collection" },
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
