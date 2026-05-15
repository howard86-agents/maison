import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, JetBrains_Mono } from "next/font/google";
import { getDictionary, getLocale } from "../lib/i18n";
import { buildOrganizationLd, jsonLdScriptProps } from "../lib/seo/jsonld";
import { buildPageMetadata } from "../lib/seo/metadata";
import { HTML_LANG } from "../lib/translations";
import { DevSwitcher } from "./_components/dev-switcher";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Providers } from "./providers";

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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return buildPageMetadata(t, "home", { path: "/", locale });
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const isDev = process.env.NODE_ENV !== "production";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
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
        <Providers>
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
