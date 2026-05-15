import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "../../../lib/i18n";
import { isLocale } from "../../../lib/i18n/config";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { OrderClient } from "./order-client";

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
  return buildPageMetadata(t, "order", {
    path: `/${locale}/order`,
    locale,
    noIndex: true,
  });
}

export default async function OrderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return <OrderClient />;
}
