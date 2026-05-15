"use client";

import { PRODUCTS, type Product } from "@maison/data";
import Link from "next/link";
import { useState } from "react";
import { CCY } from "../../../lib/currency";
import { ProductCard } from "../../_components/product-card";
import { localeHref, useLocale } from "../../providers";

type Filter = "all" | "vault" | "estimated";

export function CollectionClient() {
  const { ccy, locale, t } = useLocale();
  const [filter, setFilter] = useState<Filter>("all");
  const filterStock: Record<Filter, Product["stockType"] | null> = {
    all: null,
    vault: "in-vault",
    estimated: "estimated",
  };
  const targetStock = filterStock[filter];
  const filtered = targetStock
    ? PRODUCTS.filter((p) => p.stockType === targetStock)
    : PRODUCTS;

  const c = t.collectionPage;

  const filterRows: { id: Filter; label: string; n: number }[] = [
    { id: "all", label: c.filterAll, n: 82 },
    { id: "vault", label: c.filterVault, n: 41 },
    { id: "estimated", label: c.filterEstimated, n: 41 },
  ];

  return (
    <div className="fade-in">
      <div className="shell pt-12 pb-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="eyebrow">{c.eyebrow}</div>
            <h1 className="display mt-4 text-[64px] leading-none tracking-[-0.02em]">
              {c.headline1.split("\n").map((seg, i, arr) => (
                <span key={seg}>
                  {seg}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
              <span className="text-accent italic">{c.headlineEm}</span>
              {c.headline2}
            </h1>
          </div>
          <div className="max-w-[320px] text-[13.5px] text-ink-2">
            {c.rateLine} <span className="mono">{CCY[ccy].sym}</span> ·
            <span className="mono"> 1 USD = {CCY[ccy].rate}</span> ·
            <span className="muted"> {c.rateUpdated}</span>.
          </div>
        </div>
      </div>

      <div className="shell pb-6">
        <div className="hairline" />
        <div className="row-between flex-wrap gap-[14px] py-5">
          <div className="row flex-wrap gap-2">
            {filterRows.map(({ id, label, n }) => {
              const active = filter === id;
              return (
                <button
                  className={`tag cursor-pointer ${active ? "border-ink-2 bg-bg-card text-ink" : "border-line bg-paper text-ink-3"}`}
                  data-on={active ? "1" : "0"}
                  key={id}
                  onClick={() => setFilter(id)}
                  type="button"
                >
                  {active && <span className="dot" />}
                  {label} · <span className="text-ink-3">{n}</span>
                </button>
              );
            })}
            <span className="mono ml-[18px] text-[10px] text-ink-3 tracking-[0.14em]">
              {c.categoriesLabel}
            </span>
            {c.categories.map((cat) => (
              <span className="tag cursor-pointer" key={cat}>
                {cat}
              </span>
            ))}
          </div>
          <div className="row">
            <span className="mono text-[10px] text-ink-3 tracking-[0.14em]">
              {c.sortLabel}
            </span>
            <select
              aria-label={c.sortLabel}
              className="input-sm pr-7"
              defaultValue="newest"
            >
              <option value="newest">{c.sortNewest}</option>
              <option value="asc">{c.sortAsc}</option>
              <option value="desc">{c.sortDesc}</option>
              <option value="fav">{c.sortFav}</option>
            </select>
          </div>
        </div>
        <div className="hairline" />
      </div>

      <div className="shell pt-9 pb-20">
        <div className="grid-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 border-[0.5px] border-line bg-paper p-8">
          <div className="grid grid-cols-[1.4fr_1fr] items-center gap-8">
            <div>
              <div className="eyebrow">{c.nothingFits}</div>
              <h3 className="display mt-[14px] font-normal text-[32px] tracking-[-0.015em]">
                {c.sendUsA}
                <em className="text-accent italic">{c.sendUsEm}</em>
                {c.sendUsAfter}
              </h3>
              <p className="mt-3 mb-0 text-ink-2">{c.conciergeReply}</p>
            </div>
            <div className="text-right">
              <Link
                className="btn btn-primary"
                href={localeHref(locale, "/request")}
              >
                {t.cta.request} <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
