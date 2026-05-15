import type { Metadata } from "next";
import { getDictionary, getLocale } from "../../lib/i18n";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { AccountClient } from "./account-client";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return buildPageMetadata(t, "account", {
    path: "/account",
    locale,
    noIndex: true,
    noFollow: true,
  });
}

export default function AccountPage() {
  return <AccountClient />;
}
