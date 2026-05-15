import { prisma } from "@maison/database";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [orderCount, proxyRequestCount, productCount, memberCount] =
    await Promise.all([
      prisma.order.count(),
      prisma.proxyRequest.count(),
      prisma.product.count(),
      prisma.user.count(),
    ]);

  const stats = [
    ["Orders", orderCount],
    ["Proxy requests", proxyRequestCount],
    ["Products", productCount],
    ["Members", memberCount],
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
