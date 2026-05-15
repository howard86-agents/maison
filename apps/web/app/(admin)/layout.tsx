import { UserRole } from "@maison/database";
import Link from "next/link";
import type { ReactNode } from "react";
import { requireRole } from "../../lib/require-role";

const NAV: [string, string][] = [
  ["/admin", "Dashboard"],
  ["/admin/orders", "Orders"],
  ["/admin/proxy-requests", "Proxy requests"],
  ["/admin/products", "Products"],
  ["/admin/members", "Members"],
];

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireRole([UserRole.STAFF, UserRole.ADMIN]);

  return (
    <div className="shell pt-12">
      <div className="eyebrow">Maison · Concierge ops</div>
      <h1 className="display mt-[14px] font-normal text-[40px] leading-none tracking-[-0.02em]">
        Internal portal
      </h1>
      <div className="acct mt-8">
        <aside className="acct-side">
          <nav className="flex flex-col gap-1">
            {NAV.map(([href, label]) => (
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
