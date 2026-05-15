import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "../../lib/i18n";
import { isLocale } from "../../lib/i18n/config";
import { buildOrganizationLd, jsonLdScriptProps } from "../../lib/seo/jsonld";
import { buildPageMetadata } from "../../lib/seo/metadata";
import { HTML_LANG, LOCALES } from "../../lib/translations";
import { DevSwitcher } from "../_components/dev-switcher";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import { Providers } from "../providers";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--ff-display",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--ff-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--ff-mono",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const isDev = process.env.NODE_ENV !== "production";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const t = await getDictionary(locale);
  const organizationLd = buildOrganizationLd(t, locale);
  return (
    <html
      className={`${cormorant.variable} ${geist.variable} ${mono.variable}`}
      lang={HTML_LANG[locale]}
      suppressHydrationWarning
    >
      <head>
        <script src="/theme-init.js" />
        <script {...jsonLdScriptProps(organizationLd)} />
      </head>
      <body>
        <Providers locale={locale}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            {isDev && <DevSwitcher />}
          </div>
        </Providers>
      </body>
    </html>
  );
}
