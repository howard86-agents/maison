import type { Metadata } from "next";
import { getDictionary, getLocale } from "../lib/i18n";
import { buildPageMetadata } from "../lib/seo/metadata";
import { HomeClient } from "./home-client";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return buildPageMetadata(t, "home", { path: "/", locale });
}

export default function HomePage() {
  return <HomeClient />;
}
