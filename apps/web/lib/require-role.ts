import type { UserRole } from "@maison/database";
import { redirect } from "next/navigation";

export interface SessionUser {
  email: string | null;
  id: string;
  image?: string | null;
  isAnonymous?: boolean | null;
  name: string | null;
  role: UserRole;
}

export interface Session {
  session: {
    id: string;
    token: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
  };
  user: SessionUser;
}

const MOCK_USER_ID = "client-side-demo-user";

export function getSession(): Session {
  const now = new Date();
  return {
    user: {
      id: MOCK_USER_ID,
      name: "Maison Demo Admin",
      email: "demo@client.maison.local",
      image: null,
      isAnonymous: false,
      role: "ADMIN" as UserRole,
    },
    session: {
      id: "client-side-demo-session",
      token: "client-side-demo-token",
      userId: MOCK_USER_ID,
      expiresAt: new Date(now.getTime() + 1000 * 60 * 60 * 24 * 30),
      createdAt: now,
      updatedAt: now,
    },
  };
}

export function requireSession(): Session {
  return getSession();
}

export function requireRole(role: UserRole | readonly UserRole[]): SessionUser {
  const session = requireSession();
  const allowed = Array.isArray(role) ? role : [role];
  if (!allowed.includes(session.user.role)) {
    redirect("/");
  }
  return session.user;
}
