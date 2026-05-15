import { UserRole } from "@maison/database";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getDictionary } from "../../../lib/i18n";
import { isLocale } from "../../../lib/i18n/config";
import { requireRole } from "../../../lib/require-role";

export default async function AdminLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  await requireRole([UserRole.STAFF, UserRole.ADMIN]);
  const t = await getDictionary(locale);
  const a = t.admin;

  const nav: [string, string][] = [
    [`/${locale}/admin`, a.nav.dashboard],
    [`/${locale}/admin/orders`, a.nav.orders],
    [`/${locale}/admin/proxy-requests`, a.nav.proxyRequests],
    [`/${locale}/admin/products`, a.nav.products],
    [`/${locale}/admin/members`, a.nav.members],
  ];

  return (
    <div className="shell pt-12">
      <div className="eyebrow">{a.eyebrow}</div>
      <h1 className="display mt-[14px] font-normal text-[40px] leading-none tracking-[-0.02em]">
        {a.title}
      </h1>
      <div className="acct mt-8">
        <aside className="acct-side">
          <nav className="flex flex-col gap-1">
            {nav.map(([href, label]) => (
              <Link
                className="font-mono text-[11px] text-ink-3 uppercase tracking-[0.14em] hover:text-ink"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <section className="acct-main">{children}</section>
      </div>
    </div>
  );
}
