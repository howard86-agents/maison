import { UserRole } from "@maison/database";
import Link from "next/link";
import type { ReactNode } from "react";
import { getDictionary } from "../../lib/i18n";
import { requireRole } from "../../lib/require-role";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireRole([UserRole.STAFF, UserRole.ADMIN]);
  const t = await getDictionary();
  const a = t.admin;

  const nav: [string, string][] = [
    ["/admin", a.nav.dashboard],
    ["/admin/orders", a.nav.orders],
    ["/admin/proxy-requests", a.nav.proxyRequests],
    ["/admin/products", a.nav.products],
    ["/admin/members", a.nav.members],
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
