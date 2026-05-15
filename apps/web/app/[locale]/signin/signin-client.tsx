"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../../../lib/auth-client";
import { localeHref, useLocale } from "../../providers";

type Provider = "google" | "facebook" | "line" | "guest";

export function SignInClient() {
  const router = useRouter();
  const { locale, t } = useLocale();
  const s = t.signin;
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
          throw new Error(result.error.message ?? s.errorSignIn);
        }
        router.push(localeHref(locale, "/"));
        router.refresh();
        return;
      }
      await authClient.signIn.social({
        provider,
        callbackURL: localeHref(locale, "/"),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : s.errorGeneric);
      setPending(null);
    }
  };

  const user = session.data?.user;

  return (
    <div className="fade-in shell">
      <div className="mx-auto max-w-[440px] py-20 max-mid:py-12">
        <div className="eyebrow">{s.eyebrow}</div>
        <h1 className="display mt-[14px] font-normal text-[44px] leading-[1.05] tracking-[-0.02em] max-mid:text-[34px]">
          {s.title}
        </h1>
        <p className="mt-5 text-[13.5px] text-ink-2 leading-[1.65]">
          {s.subtitle}
        </p>

        {user ? (
          <div className="mt-10 border-line-2 border-y py-5 text-[13px] text-ink-2">
            {s.alreadySigned}
            <span className="text-ink">{user.name ?? user.email ?? s.you}</span>
            .{" "}
            <button
              className="btn-link"
              onClick={() => router.push(localeHref(locale, "/account"))}
              type="button"
            >
              {s.goAccount}
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
              <span>{s.providerLabels[p]}</span>
              <span className="eyebrow">
                {pending === p ? s.redirecting : s.providerHints[p]}
              </span>
            </button>
          ))}

          <div className="my-2 flex items-center gap-3">
            <span className="h-px flex-1 bg-line-2" />
            <span className="eyebrow">{s.or}</span>
            <span className="h-px flex-1 bg-line-2" />
          </div>

          <button
            className="btn btn-primary justify-between"
            disabled={pending !== null}
            onClick={() => handle("guest")}
            type="button"
          >
            <span>{s.providerLabels.guest}</span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] opacity-70">
              {pending === "guest" ? s.signingIn : s.providerHints.guest}
            </span>
          </button>
        </div>

        {error ? (
          <p className="mt-6 font-mono text-[11.5px] text-rose-500 uppercase tracking-[0.12em]">
            {error}
          </p>
        ) : null}

        <p className="mt-10 text-[11.5px] text-ink-3 leading-[1.6]">
          {s.demoNote}
        </p>
      </div>
    </div>
  );
}
