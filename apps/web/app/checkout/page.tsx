import type { Metadata } from "next";
import { getDictionary, getLocale } from "../../lib/i18n";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { CheckoutClient } from "./checkout-client";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return buildPageMetadata(t, "checkout", {
    path: "/checkout",
    locale,
    noIndex: true,
  });
}

export default function CheckoutPage() {
  return <CheckoutClient />;
}
