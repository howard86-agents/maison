"use client";

import { usePathname, useRouter } from "next/navigation";
import { useT } from "../providers";

export function DevSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useT();
  const d = t.dev;
  const steps: {
    href: string;
    label: string;
    match: (p: string) => boolean;
  }[] = [
    { href: "/", label: d.home, match: (p) => p === "/" },
    {
      href: "/collection",
      label: d.collection,
      match: (p) => p.startsWith("/collection"),
    },
    {
      href: "/product/p1",
      label: d.detail,
      match: (p) => p.startsWith("/product"),
    },
    {
      href: "/request",
      label: d.request,
      match: (p) => p.startsWith("/request"),
    },
    { href: "/quote", label: d.quote, match: (p) => p.startsWith("/quote") },
    {
      href: "/checkout",
      label: d.checkout,
      match: (p) => p.startsWith("/checkout"),
    },
    { href: "/order", label: d.order, match: (p) => p.startsWith("/order") },
    {
      href: "/account",
      label: d.account,
      match: (p) => p.startsWith("/account"),
    },
  ];
  return (
    <div className="switcher">
      {steps.map((s) => (
        <button
          data-on={s.match(pathname) ? "1" : "0"}
          key={s.href}
          onClick={() => router.push(s.href)}
          type="button"
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
