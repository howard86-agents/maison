import { prisma } from "@maison/database";
import { notFound } from "next/navigation";
import { getDictionary } from "../../../../lib/i18n";
import { isLocale } from "../../../../lib/i18n/config";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const [t, orderCount, proxyRequestCount, productCount, memberCount] =
    await Promise.all([
      getDictionary(locale),
      prisma.order.count(),
      prisma.proxyRequest.count(),
      prisma.product.count(),
      prisma.user.count(),
    ]);

  const s = t.admin.stats;
  const stats = [
    [s.orders, orderCount],
    [s.proxyRequests, proxyRequestCount],
    [s.products, productCount],
    [s.members, memberCount],
  ] as const;

  return (
    <div className="grid grid-cols-2 gap-[14px]">
      {stats.map(([label, value]) => (
        <div
          className="border-[0.5px] border-line bg-paper p-[14px]"
          key={label}
        >
          <div className="mono text-[10px] text-ink-3 uppercase tracking-[0.14em]">
            {label}
          </div>
          <div className="display mt-2 text-[40px] leading-none">{value}</div>
        </div>
      ))}
    </div>
  );
}
