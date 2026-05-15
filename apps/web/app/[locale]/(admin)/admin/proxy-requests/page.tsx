import { prisma } from "@maison/database";
import { notFound } from "next/navigation";
import { getDictionary } from "../../../../../lib/i18n";
import { isLocale } from "../../../../../lib/i18n/config";

export const dynamic = "force-dynamic";

export default async function AdminProxyRequestsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const [t, requests] = await Promise.all([
    getDictionary(locale),
    prisma.proxyRequest.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      include: { user: { select: { email: true, name: true } } },
    }),
  ]);
  const r = t.admin.proxyRequests;

  if (requests.length === 0) {
    return (
      <div className="border-[0.5px] border-line bg-paper p-[14px]">
        <div className="mono text-[10px] text-ink-3 uppercase tracking-[0.14em]">
          {r.noneTitle}
        </div>
        <div className="fine mt-2 leading-[1.6]">{r.noneCopy}</div>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-[14px]">
      {requests.map((req) => (
        <li
          className="border-[0.5px] border-line bg-paper p-[14px]"
          key={req.id}
        >
          <div className="row-between">
            <div className="mono text-[10px] text-ink-3 uppercase tracking-[0.14em]">
              {req.status}
            </div>
            <div className="fine">{req.user.email ?? req.user.name}</div>
          </div>
          <div className="display mt-2 text-[20px] leading-snug">
            {req.targetBrand ?? r.unspecifiedBrand}{" "}
            {req.targetModel ? `· ${req.targetModel}` : null}
          </div>
          <p className="fine mt-2 leading-[1.6]">{req.description}</p>
        </li>
      ))}
    </ul>
  );
}
