"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { authClient } from "../../lib/auth-client";
import { useT } from "../providers";

const WHITESPACE = /\s+/;

function firstName(
  name: string | null | undefined,
  email: string | null | undefined
) {
  if (name) {
    const trimmed = name.trim();
    if (trimmed) {
      return trimmed.split(WHITESPACE)[0];
    }
  }
  if (email) {
    return email.split("@")[0];
  }
  return null;
}

export function UserChip() {
  const router = useRouter();
  const t = useT();
  const session = authClient.useSession();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const user = session.data?.user;
  if (!user) {
    return (
      <button
        className="pill"
        disabled={session.isPending}
        onClick={() => router.push("/signin")}
        type="button"
      >
        <span className="dot" />
        <span className="mono">{t.user.signIn}</span>
      </button>
    );
  }

  const label = user.isAnonymous
    ? t.user.guest
    : (firstName(user.name, user.email) ?? t.user.member);

  const handleSignOut = async () => {
    setOpen(false);
    await authClient.signOut();
    router.refresh();
  };

  return (
    <div className="relative" data-menu ref={wrapRef}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className="pill"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <span className="dot" />
        <span className="mono">{label}</span>
        <span className="ml-[2px] text-ink-3">▾</span>
      </button>
      {open ? (
        <div className="dropdown" role="menu">
          <div className="group">{t.user.signedIn}</div>
          <button
            onClick={() => {
              setOpen(false);
              router.push("/account");
            }}
            type="button"
          >
            <span>{t.user.account}</span>
            <span className="mono text-ink-3">→</span>
          </button>
          <button onClick={handleSignOut} type="button">
            <span>{t.user.signOut}</span>
            <span className="mono text-ink-3">↶</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
