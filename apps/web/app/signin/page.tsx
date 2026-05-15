import type { Metadata } from "next";
import { getDictionary, getLocale } from "../../lib/i18n";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { SignInClient } from "./signin-client";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return buildPageMetadata(t, "signin", {
    path: "/signin",
    locale,
    noIndex: true,
  });
}

export default function SignInPage() {
  return <SignInClient />;
}
