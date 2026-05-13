"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CCY, CURRENCY_CODES } from "../../lib/currency";
import { TRANSLATIONS, type Lang } from "../../lib/translations";
import { useLocale, useTheme } from "../providers";
import { TierChip } from "./TierChip";
import type { Tier } from "../../lib/maison-data";

const LANGS: Lang[] = ["EN", "TC"];

export function Header({ tier = "Professional" as Tier }: { tier?: Tier }) {
  const { lang, ccy, setLang, setCcy } = useLocale();
  const { dark, toggleDark } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const t = TRANSLATIONS[lang];

  const nav: { href: string; label: string; match: (p: string) => boolean }[] = [
    { href: "/", label: t.nav.atelier, match: (p) => p === "/" },
    { href: "/collection", label: t.nav.collection, match: (p) => p.startsWith("/collection") || p.startsWith("/product") },
    { href: "/request", label: t.nav.request, match: (p) => p.startsWith("/request") },
    { href: "/order", label: t.nav.journal, match: (p) => p.startsWith("/order") || p.startsWith("/quote") || p.startsWith("/checkout") },
  ];

  return (
    <header className="hdr">
      <div className="shell hdr-top">
        <Link href="/" className="row" style={{ gap: 14, textDecoration: "none" }}>
          <div className="hdr-mark">MAISON</div>
          <sup>EST · 2019 · TAIPEI</sup>
        </Link>
        <nav className="hdr-nav">
          {nav.map((it) => (
            <button key={it.href} data-on={it.match(pathname) ? "1" : "0"} onClick={() => router.push(it.href)}>
              {it.label}
            </button>
          ))}
        </nav>
        <div className="hdr-right">
          <div ref={wrapRef} data-menu style={{ position: "relative" }}>
            <button className="pill" onClick={() => setOpen((o) => !o)} aria-haspopup="menu" aria-expanded={open}>
              <span className="dot" />
              <span className="mono">{lang}</span>
              <span style={{ color: "var(--ink-3)" }}>·</span>
              <span className="mono">{ccy}</span>
              <span style={{ color: "var(--ink-3)", marginLeft: 2 }}>▾</span>
            </button>
            {open && (
              <div className="dropdown" role="menu">
                <div className="group">Language</div>
                {LANGS.map((l) => (
                  <button key={l} data-on={l === lang ? "1" : "0"} onClick={() => setLang(l)}>
                    <span>{l === "EN" ? "English" : "繁體中文"}</span>
                    <span className="mono" style={{ color: "var(--ink-3)" }}>{l}</span>
                  </button>
                ))}
                <div className="group">Currency · reference</div>
                {CURRENCY_CODES.map((c) => (
                  <button key={c} data-on={c === ccy ? "1" : "0"} onClick={() => { setCcy(c); setOpen(false); }}>
                    <span>{CCY[c].label}</span>
                    <span className="mono" style={{ color: "var(--ink-3)" }}>{CCY[c].sym}</span>
                  </button>
                ))}
                <div className="group" style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  Updated 13·05·26 09:42 GMT+8
                </div>
              </div>
            )}
          </div>

          <TierChip tier={tier} />

          <button className="icon-btn" aria-label="Toggle dark mode" onClick={toggleDark}>
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="0.8" />
                <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4M3.2 12.8l1.4-1.4M11.4 4.6l1.4-1.4" stroke="currentColor" strokeWidth="0.8" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 9.5A5.5 5.5 0 0 1 6.5 3a1 1 0 0 0-1.2-1.2A6.5 6.5 0 1 0 14.2 10.7 1 1 0 0 0 13 9.5z" stroke="currentColor" strokeWidth="0.8" fill="none" />
              </svg>
            )}
          </button>
          <button className="icon-btn" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="0.8" />
              <path d="M11 11 14 14" stroke="currentColor" strokeWidth="0.8" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Account" onClick={() => router.push("/account")}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="5.5" r="2.4" stroke="currentColor" strokeWidth="0.8" />
              <path d="M2.5 13.5c.7-2.5 2.9-4 5.5-4s4.8 1.5 5.5 4" stroke="currentColor" strokeWidth="0.8" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
