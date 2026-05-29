"use client";

import { useEffect, useState } from "react";

type UserRole = "USER" | "STAFF" | "ADMIN";
type Provider = "google" | "facebook" | "line" | "guest";

export interface ClientAuthUser {
  email: string | null;
  id: string;
  image?: string | null;
  isAnonymous?: boolean | null;
  name: string | null;
  role: UserRole;
}

export interface ClientAuthSession {
  session: {
    id: string;
    token: string;
    userId: string;
    expiresAt: string;
    createdAt: string;
    updatedAt: string;
  };
  user: ClientAuthUser;
}

interface AuthResult<T = ClientAuthSession> {
  data: T | null;
  error: { message?: string } | null;
}

const STORAGE_KEY = "maison.clientAuth.session.v1";
const AUTH_EVENT = "maison-client-auth-change";

function nowIso() {
  return new Date().toISOString();
}

function expiresIso() {
  return new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString();
}

function makeSession(provider: Provider): ClientAuthSession {
  const id = `client-${provider}-${crypto.randomUUID()}`;
  const isAnonymous = provider === "guest";
  const providerLabel = provider.charAt(0).toUpperCase() + provider.slice(1);
  const createdAt = nowIso();

  return {
    user: {
      id,
      name: isAnonymous ? "Guest Concierge" : `${providerLabel} Member`,
      email: isAnonymous ? null : `${provider}@client.maison.local`,
      image: null,
      isAnonymous,
      role: "USER",
    },
    session: {
      id: `session-${crypto.randomUUID()}`,
      token: `client-token-${crypto.randomUUID()}`,
      userId: id,
      expiresAt: expiresIso(),
      createdAt,
      updatedAt: createdAt,
    },
  };
}

function readSession(): ClientAuthSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const session = JSON.parse(raw) as ClientAuthSession;
    if (new Date(session.session.expiresAt).getTime() <= Date.now()) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return session;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

function writeSession(session: ClientAuthSession | null) {
  if (typeof window === "undefined") {
    return;
  }

  if (session) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }
  window.dispatchEvent(new Event(AUTH_EVENT));
}

function useSession() {
  const [data, setData] = useState<ClientAuthSession | null>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const update = () => {
      setData(readSession());
      setIsPending(false);
    };

    update();
    window.addEventListener(AUTH_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(AUTH_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);

  return { data, error: null, isPending };
}

function signInWithProvider(provider: Provider): Promise<AuthResult> {
  const session = makeSession(provider);
  writeSession(session);
  return Promise.resolve({ data: session, error: null });
}

export const authClient = {
  useSession,
  signIn: {
    anonymous: () => signInWithProvider("guest"),
    social: ({ provider }: { provider: Exclude<Provider, "guest"> }) =>
      signInWithProvider(provider),
  },
  signOut: (): Promise<AuthResult<null>> => {
    writeSession(null);
    return Promise.resolve({ data: null, error: null });
  },
};

export const { signIn, signOut, useSession: useClientSession } = authClient;
