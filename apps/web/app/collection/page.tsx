import type { Metadata } from "next";
import { getDictionary, getLocale } from "../../lib/i18n";
import { buildBreadcrumbLd, jsonLdScriptProps } from "../../lib/seo/jsonld";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { CollectionClient } from "./collection-client";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return buildPageMetadata(t, "collection", { path: "/collection", locale });
}

export default async function CollectionPage() {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  const breadcrumbLd = buildBreadcrumbLd([
    { name: t.meta.siteName, path: "/" },
    { name: t.nav.collection, path: "/collection" },
  ]);
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbLd)} />
      <CollectionClient />
    </>
  );
}
