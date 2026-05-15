import { prisma } from "@maison/database";
import { notFound } from "next/navigation";
import { getDictionary } from "../../../../../lib/i18n";
import { isLocale } from "../../../../../lib/i18n/config";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const [t, products] = await Promise.all([
    getDictionary(locale),
    prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
  ]);
  const p = t.admin.products;

  if (products.length === 0) {
    return (
      <div className="border-[0.5px] border-line bg-paper p-[14px]">
        <div className="mono text-[10px] text-ink-3 uppercase tracking-[0.14em]">
          {p.noneTitle}
        </div>
        <div className="fine mt-2 leading-[1.6]">{p.noneCopy}</div>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-[14px]">
      {products.map((product) => (
        <li
          className="border-[0.5px] border-line bg-paper p-[14px]"
          key={product.id}
        >
          <div className="row-between">
            <div className="mono text-[10px] text-ink-3 uppercase tracking-[0.14em]">
              {product.brand ?? p.houseFallback}
            </div>
            <div className="fine">{product.isActive ? p.active : p.draft}</div>
          </div>
          <div className="display mt-2 text-[20px] leading-snug">
            {product.name}
          </div>
          <div className="fine mt-2 font-mono">
            {product.currency} {String(product.basePrice)}
          </div>
        </li>
      ))}
    </ul>
  );
}
