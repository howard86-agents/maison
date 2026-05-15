"use client";

import type { Tier } from "@maison/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { authClient } from "../../lib/auth-client";
import { CCY, CURRENCY_CODES } from "../../lib/currency";
import { LOCALE_LABEL, LOCALE_SHORT, LOCALES } from "../../lib/translations";
import { localeHref, useLocale, useTheme } from "../providers";
import { TierChip } from "./tier-chip";
import { UserChip } from "./user-chip";

export function Header({ tier = "Professional" as Tier }: { tier?: Tier }) {
  const { locale, ccy, setLocale, setCcy, t } = useLocale();
  const { dark, toggleDark } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const session = authClient.useSession();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const isLoggedIn = Boolean(session.data?.user);
  const accountHref = localeHref(locale, isLoggedIn ? "/account" : "/signin");
  const localePrefix = `/${locale}`;
  const isHome = pathname === localePrefix;
  const after = (segment: string) =>
    pathname.startsWith(`${localePrefix}${segment}`);

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

  const nav: { href: string; label: string; active: boolean }[] = [
    { href: localeHref(locale, "/"), label: t.nav.atelier, active: isHome },
    {
      href: localeHref(locale, "/collection"),
      label: t.nav.collection,
      active: after("/collection") || after("/product"),
    },
    {
      href: localeHref(locale, "/request"),
      label: t.nav.request,
      active: after("/request"),
    },
    {
      href: localeHref(locale, "/order"),
      label: t.nav.journal,
      active: after("/order") || after("/quote") || after("/checkout"),
    },
  ];

  return (
    <header className="hdr">
      <div className="shell hdr-top">
        <Link className="row no-underline" href={localeHref(locale, "/")}>
          <div className="hdr-mark">MAISON</div>
          <sup>{t.header.estTaipei}</sup>
        </Link>
        <nav className="hdr-nav">
          {nav.map((it) => (
            <button
              data-on={it.active ? "1" : "0"}
              key={it.href}
              onClick={() => router.push(it.href)}
              type="button"
            >
              {it.label}
            </button>
          ))}
        </nav>
        <div className="hdr-right">
          <div className="relative" data-menu ref={wrapRef}>
            <button
              aria-expanded={open}
              aria-haspopup="menu"
              className="pill"
              onClick={() => setOpen((o) => !o)}
              type="button"
            >
              <span className="dot" />
              <span className="mono">{LOCALE_SHORT[locale]}</span>
              <span className="text-ink-3">·</span>
              <span className="mono">{ccy}</span>
              <span className="ml-[2px] text-ink-3">▾</span>
            </button>
            {open && (
              <div className="dropdown" role="menu">
                <div className="group">{t.header.languageGroup}</div>
                {LOCALES.map((l) => (
                  <button
                    data-on={l === locale ? "1" : "0"}
                    key={l}
                    onClick={() => setLocale(l)}
                    type="button"
                  >
                    <span>{LOCALE_LABEL[l]}</span>
                    <span className="mono text-ink-3">{LOCALE_SHORT[l]}</span>
                  </button>
                ))}
                <div className="group">{t.header.currencyGroup}</div>
                {CURRENCY_CODES.map((c) => (
                  <button
                    data-on={c === ccy ? "1" : "0"}
                    key={c}
                    onClick={() => {
                      setCcy(c);
                      setOpen(false);
                    }}
                    type="button"
                  >
                    <span>{t.currencies[c]}</span>
                    <span className="mono text-ink-3">{CCY[c].sym}</span>
                  </button>
                ))}
                <div className="group flex items-center gap-2">
                  {t.header.updated}
                </div>
              </div>
            )}
          </div>

          <TierChip tier={tier} />

          <UserChip />

          <button
            aria-label={t.header.toggleDark}
            className="icon-btn"
            onClick={toggleDark}
            type="button"
          >
            {dark ? (
              <svg
                aria-hidden="true"
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <path
                  d="M8 1v2M8 13v2M1 8h2M13 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4M3.2 12.8l1.4-1.4M11.4 4.6l1.4-1.4"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
              >
                <path
                  d="M13 9.5A5.5 5.5 0 0 1 6.5 3a1 1 0 0 0-1.2-1.2A6.5 6.5 0 1 0 14.2 10.7 1 1 0 0 0 13 9.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              </svg>
            )}
          </button>
          <button
            aria-label={t.header.search}
            className="icon-btn"
            type="button"
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
            >
              <circle
                cx="7"
                cy="7"
                r="5"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <path d="M11 11 14 14" stroke="currentColor" strokeWidth="0.8" />
            </svg>
          </button>
          <button
            aria-label={isLoggedIn ? t.header.account : t.header.signIn}
            className="icon-btn"
            onClick={() => router.push(accountHref)}
            type="button"
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
            >
              <circle
                cx="8"
                cy="5.5"
                r="2.4"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <path
                d="M2.5 13.5c.7-2.5 2.9-4 5.5-4s4.8 1.5 5.5 4"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
