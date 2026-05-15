import { prisma } from "@maison/database";
import { getDictionary } from "../../../../lib/i18n";

export const dynamic = "force-dynamic";

export default async function AdminMembersPage() {
  const [t, members] = await Promise.all([
    getDictionary(),
    prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    }),
  ]);
  const m = t.admin.members;

  return (
    <table className="w-full border-collapse text-[12px]">
      <thead>
        <tr className="border-line border-b-[0.5px] text-left">
          <th className="py-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            {m.member}
          </th>
          <th className="py-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            {m.email}
          </th>
          <th className="py-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            {m.role}
          </th>
          <th className="py-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            {m.joined}
          </th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr className="border-line border-b-[0.5px]" key={member.id}>
            <td className="py-2">{member.name ?? "—"}</td>
            <td className="py-2">{member.email ?? "—"}</td>
            <td className="py-2 font-mono">{member.role}</td>
            <td className="py-2 font-mono">
              {member.createdAt.toISOString().slice(0, 10)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
