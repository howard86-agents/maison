import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "../../lib/i18n";
import { isLocale } from "../../lib/i18n/config";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { HomeClient } from "./home-client";

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
  return buildPageMetadata(t, "home", { path: `/${locale}`, locale });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return <HomeClient />;
}
