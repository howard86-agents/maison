"use client";

import Link from "next/link";
import { useState } from "react";
import { CCY } from "../../lib/currency";
import { PRODUCTS, type Product } from "../../lib/maison-data";
import { TRANSLATIONS } from "../../lib/translations";
import { ProductCard } from "../_components/product-card";
import { useLocale } from "../providers";

type Filter = "all" | "vault" | "estimated";

const CATEGORIES = [
  "Leather",
  "Watches",
  "Jewellery",
  "Ready-to-wear",
  "Vintage",
];

export function CollectionClient() {
  const { ccy, lang } = useLocale();
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

  const t = TRANSLATIONS[lang];

  return (
    <div className="fade-in">
      <div className="shell" style={{ paddingTop: 48, paddingBottom: 24 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="eyebrow">The Collection · Spring 2026</div>
            <h1
              className="display"
              style={{
                fontSize: 64,
                marginTop: 16,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Eighty-two pieces
              <br />
              currently{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                open to file
              </span>
              .
            </h1>
          </div>
          <div style={{ maxWidth: 320, color: "var(--ink-2)", fontSize: 13.5 }}>
            Every figure converts at{" "}
            <span className="mono">{CCY[ccy].sym}</span> ·
            <span className="mono"> 1 USD = {CCY[ccy].rate}</span> ·
            <span className="muted"> updated 09:42 GMT+8</span>.
          </div>
        </div>
      </div>

      <div className="shell" style={{ paddingBottom: 24 }}>
        <div className="hairline" />
        <div
          className="row-between"
          style={{ padding: "20px 0", flexWrap: "wrap", gap: 14 }}
        >
          <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
            {(
              [
                ["all", "All pieces", 82],
                ["vault", "In vault", 41],
                ["estimated", "On quote", 41],
              ] as const
            ).map(([id, label, n]) => (
              <button
                className="tag"
                data-on={filter === id ? "1" : "0"}
                key={id}
                onClick={() => setFilter(id)}
                style={{
                  cursor: "pointer",
                  color: filter === id ? "var(--ink)" : "var(--ink-3)",
                  borderColor: filter === id ? "var(--ink-2)" : "var(--line)",
                  background: filter === id ? "var(--bg-card)" : "var(--paper)",
                }}
                type="button"
              >
                {filter === id && <span className="dot" />}
                {label} · <span style={{ color: "var(--ink-3)" }}>{n}</span>
              </button>
            ))}
            <span
              className="mono"
              style={{
                color: "var(--ink-3)",
                fontSize: 10,
                letterSpacing: "0.14em",
                marginLeft: 18,
              }}
            >
              CATEGORIES —
            </span>
            {CATEGORIES.map((c) => (
              <span className="tag" key={c} style={{ cursor: "pointer" }}>
                {c}
              </span>
            ))}
          </div>
          <div className="row">
            <span
              className="mono"
              style={{
                color: "var(--ink-3)",
                fontSize: 10,
                letterSpacing: "0.14em",
              }}
            >
              SORT
            </span>
            <select
              className="input-sm"
              defaultValue="newest"
              style={{ paddingRight: 28 }}
            >
              <option value="newest">Newest dossier</option>
              <option value="asc">Price ascending</option>
              <option value="desc">Price descending</option>
              <option value="fav">Concierge favourites</option>
            </select>
          </div>
        </div>
        <div className="hairline" />
      </div>

      <div className="shell" style={{ paddingTop: 36, paddingBottom: 80 }}>
        <div className="grid-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div
          style={{
            marginTop: 56,
            padding: 32,
            border: "0.5px solid var(--line)",
            background: "var(--paper)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 32,
              alignItems: "center",
            }}
          >
            <div>
              <div className="eyebrow">Nothing quite fits.</div>
              <h3
                className="display"
                style={{
                  fontSize: 32,
                  marginTop: 14,
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                }}
              >
                Send us a photo, a link, or simply{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  describe it.
                </em>
              </h3>
              <p
                style={{
                  color: "var(--ink-2)",
                  marginTop: 12,
                  marginBottom: 0,
                }}
              >
                One concierge will respond within 36 hours with sourcing options
                and a transparent quote.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <Link className="btn btn-primary" href="/request">
                {t.cta.request} <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
