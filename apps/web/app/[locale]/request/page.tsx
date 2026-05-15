import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "../../../lib/i18n";
import { isLocale } from "../../../lib/i18n/config";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { RequestClient } from "./request-client";

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
  return buildPageMetadata(t, "request", {
    path: `/${locale}/request`,
    locale,
  });
}

export default async function RequestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return <RequestClient />;
}
