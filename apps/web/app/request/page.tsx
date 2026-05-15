import type { Metadata } from "next";
import { getDictionary, getLocale } from "../../lib/i18n";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { RequestClient } from "./request-client";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return buildPageMetadata(t, "request", { path: "/request", locale });
}

export default function RequestPage() {
  return <RequestClient />;
}
