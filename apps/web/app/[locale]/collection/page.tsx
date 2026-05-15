import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "../../../lib/i18n";
import { isLocale } from "../../../lib/i18n/config";
import { buildBreadcrumbLd, jsonLdScriptProps } from "../../../lib/seo/jsonld";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { CollectionClient } from "./collection-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const t = await getDictionary(locale);
  return buildPageMetadata(t, "collection", {
    path: `/${locale}/collection`,
    locale,
  });
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const t = await getDictionary(locale);
  const breadcrumbLd = buildBreadcrumbLd([
    { name: t.meta.siteName, path: `/${locale}` },
    { name: t.nav.collection, path: `/${locale}/collection` },
  ]);
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbLd)} />
      <CollectionClient />
    </>
  );
}
