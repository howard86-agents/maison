import { prisma } from "@maison/database";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { user: { select: { email: true, name: true } } },
  });

  if (orders.length === 0) {
    return (
      <div className="border-[0.5px] border-line bg-paper p-[14px]">
        <div className="mono text-[10px] text-ink-3 uppercase tracking-[0.14em]">
          No orders yet
        </div>
        <div className="fine mt-2 leading-[1.6]">
          Orders appear here once members complete checkout.
        </div>
      </div>
    );
  }

  return (
    <table className="w-full border-collapse text-[12px]">
      <thead>
        <tr className="border-line border-b-[0.5px] text-left">
          <th className="py-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            Order
          </th>
          <th className="py-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            Member
          </th>
          <th className="py-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            Status
          </th>
          <th className="py-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr className="border-line border-b-[0.5px]" key={order.id}>
            <td className="py-2 font-mono text-[11px]">{order.id}</td>
            <td className="py-2">{order.user.email ?? order.user.name}</td>
            <td className="py-2">{order.status}</td>
            <td className="py-2 font-mono">
              {order.currency} {String(order.totalAmount)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
