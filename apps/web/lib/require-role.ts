import type { UserRole } from "@maison/database";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth, type Session } from "./auth";

export type SessionUser = Session["user"] & { role: UserRole };

export async function getSession() {
  return auth.api.getSession({ headers: await headers() });
}

export async function requireSession(): Promise<Session> {
  const session = await getSession();
  if (!session) {
    redirect("/signin");
  }
  return session;
}

export async function requireRole(
  role: UserRole | readonly UserRole[]
): Promise<SessionUser> {
  const session = await requireSession();
  const allowed = Array.isArray(role) ? role : [role];
  const user = session.user as SessionUser;
  if (!allowed.includes(user.role)) {
    redirect("/");
  }
  return user;
}
