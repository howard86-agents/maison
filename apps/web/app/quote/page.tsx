import type { Metadata } from "next";
import { getDictionary, getLocale } from "../../lib/i18n";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { QuoteClient } from "./quote-client";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return buildPageMetadata(t, "quote", {
    path: "/quote",
    locale,
    noIndex: true,
  });
}

export default function QuotePage() {
  return <QuoteClient />;
}
