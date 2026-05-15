import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "../../../lib/i18n";
import { isLocale } from "../../../lib/i18n/config";
import { buildPageMetadata } from "../../../lib/seo/metadata";
import { SignInClient } from "./signin-client";

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
  return buildPageMetadata(t, "signin", {
    path: `/${locale}/signin`,
    locale,
    noIndex: true,
  });
}

export default async function SignInPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return <SignInClient />;
}
