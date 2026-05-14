"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../../lib/auth-client";

type Provider = "google" | "facebook" | "line" | "guest";

const PROVIDER_LABELS: Record<Provider, string> = {
  google: "Continue with Google",
  facebook: "Continue with Facebook",
  line: "Continue with LINE",
  guest: "Continue as guest",
};

const PROVIDER_HINTS: Record<Provider, string> = {
  google: "Google account",
  facebook: "Meta account",
  line: "LINE account",
  guest: "Anonymous demo session",
};

export function SignInClient() {
  const router = useRouter();
  const session = authClient.useSession();
  const [pending, setPending] = useState<Provider | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handle = async (provider: Provider) => {
    setError(null);
    setPending(provider);
    try {
      if (provider === "guest") {
        const result = await authClient.signIn.anonymous();
        if (result.error) {
          throw new Error(result.error.message ?? "Sign-in failed");
        }
        router.push("/");
        router.refresh();
        return;
      }
      await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
      setPending(null);
    }
  };

  const user = session.data?.user;

  return (
    <div className="fade-in shell">
      <div className="mx-auto max-w-[440px] py-20 max-mid:py-12">
        <div className="eyebrow">Members · Sign in</div>
        <h1 className="display mt-[14px] font-normal text-[44px] leading-[1.05] tracking-[-0.02em] max-mid:text-[34px]">
          Step into the atelier.
        </h1>
        <p className="mt-5 text-[13.5px] text-ink-2 leading-[1.65]">
          Continue with a social account, or browse as a guest to preview the
          concierge experience without commitment.
        </p>

        {user ? (
          <div className="mt-10 border-line-2 border-y py-5 text-[13px] text-ink-2">
            Already signed in as{" "}
            <span className="text-ink">{user.name ?? user.email ?? "you"}</span>
            .{" "}
            <button
              className="btn-link"
              onClick={() => router.push("/account")}
              type="button"
            >
              Go to account →
            </button>
          </div>
        ) : null}

        <div className="mt-10 flex flex-col gap-3">
          {(["google", "facebook", "line"] as const).map((p) => (
            <button
              className="btn btn-ghost justify-between"
              disabled={pending !== null}
              key={p}
              onClick={() => handle(p)}
              type="button"
            >
              <span>{PROVIDER_LABELS[p]}</span>
              <span className="eyebrow">
                {pending === p ? "Redirecting…" : PROVIDER_HINTS[p]}
              </span>
            </button>
          ))}

          <div className="my-2 flex items-center gap-3">
            <span className="h-px flex-1 bg-line-2" />
            <span className="eyebrow">or</span>
            <span className="h-px flex-1 bg-line-2" />
          </div>

          <button
            className="btn btn-primary justify-between"
            disabled={pending !== null}
            onClick={() => handle("guest")}
            type="button"
          >
            <span>{PROVIDER_LABELS.guest}</span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] opacity-70">
              {pending === "guest" ? "Signing in…" : PROVIDER_HINTS.guest}
            </span>
          </button>
        </div>

        {error ? (
          <p className="mt-6 font-mono text-[11.5px] text-rose-500 uppercase tracking-[0.12em]">
            {error}
          </p>
        ) : null}

        <p className="mt-10 text-[11.5px] text-ink-3 leading-[1.6]">
          Demo build — accounts are scoped to this preview environment. Guest
          sessions persist until you sign out.
        </p>
      </div>
    </div>
  );
}
