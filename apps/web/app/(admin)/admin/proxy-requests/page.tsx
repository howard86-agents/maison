import { prisma } from "@maison/database";

export const dynamic = "force-dynamic";

export default async function AdminProxyRequestsPage() {
  const requests = await prisma.proxyRequest.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { user: { select: { email: true, name: true } } },
  });

  if (requests.length === 0) {
    return (
      <div className="border-[0.5px] border-line bg-paper p-[14px]">
        <div className="mono text-[10px] text-ink-3 uppercase tracking-[0.14em]">
          No proxy requests yet
        </div>
        <div className="fine mt-2 leading-[1.6]">
          Submissions from members will appear here for staff review.
        </div>
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
            {req.targetBrand ?? "Unspecified brand"}{" "}
            {req.targetModel ? `· ${req.targetModel}` : null}
          </div>
          <p className="fine mt-2 leading-[1.6]">{req.description}</p>
        </li>
      ))}
    </ul>
  );
}
