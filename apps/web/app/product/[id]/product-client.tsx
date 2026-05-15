"use client";

import type { Product } from "@maison/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatCcy } from "../../../lib/currency";
import { formatTemplate } from "../../../lib/translations";
import { ImageOrPlaceholder } from "../../_components/product-image";
import { useLocale } from "../../providers";

export function ProductClient({ product }: { product: Product }) {
  const { ccy, t } = useLocale();
  const router = useRouter();
  const [thumb, setThumb] = useState(0);

  const houseTitle =
    product.house.charAt(0) + product.house.slice(1).toLowerCase();

  const p = t.product;
  const specRows: [string, string][] = [
    [p.specs.maison, houseTitle],
    [
      p.specs.reference,
      formatTemplate(p.specs.referenceValue, { id: product.id.toUpperCase() }),
    ],
    [p.specs.materials, p.specs.materialsValue],
    [p.specs.dimensions, p.specs.dimensionsValue],
    [p.specs.provenance, p.specs.provenanceValue],
    [p.specs.authentication, p.specs.authenticationValue],
    [p.specs.shipsFrom, p.specs.shipsFromValue],
  ];

  return (
    <div className="fade-in shell">
      <div className="py-6 font-mono text-[10.5px] text-ink-3 uppercase tracking-[0.14em]">
        <Link className="text-inherit" href="/">
          {p.breadcrumbAtelier}
        </Link>
        <span className="mx-[10px]">/</span>
        <Link className="text-inherit" href="/collection">
          {p.breadcrumbCollection}
        </Link>
        <span className="mx-[10px]">/</span>
        <span className="text-ink">
          {product.house} · {product.name}
        </span>
      </div>

      <div className="pdp">
        <div className="pdp-gallery">
          <div className="pdp-thumbs">
            {[0, 1, 2, 3].map((i) => (
              <button
                aria-label={`${p.viewLabel} ${i + 1}`}
                aria-pressed={thumb === i}
                className="ph cursor-pointer"
                data-on={thumb === i ? "1" : "0"}
                data-ph={`v${i + 1}`}
                key={i}
                onClick={() => setThumb(i)}
                type="button"
              />
            ))}
          </div>
          <ImageOrPlaceholder
            alt={`${product.house} ${product.name} · ${p.viewLabel} ${thumb + 1}`}
            aspect="4x5"
            brackets
            caption={`${product.house.toLowerCase()} · ${p.viewLabel.toLowerCase()} ${thumb + 1}`}
            className="pdp-hero"
            id={product.id}
            kind="products"
            priority
            sizes="(min-width: 1280px) 50vw, 100vw"
            style={{ minHeight: 620 }}
          />
        </div>
        <div>
          <div className="house">{product.house}</div>
          <h1 className="mt-[10px]">{product.name}</h1>
          <div className="muted text-[13px]">
            {formatTemplate(p.sourcedFrom, { house: houseTitle })}
          </div>

          <div className="price-row">
            <span>{formatCcy(product.price, ccy)}</span>
            <span className="alt mono">
              ≈ {formatCcy(product.price, "USD")} · live FX 09:42
            </span>
          </div>

          <div className="row mt-[18px] flex-wrap gap-[10px]">
            <span
              className={`tag ${product.stockType === "in-vault" ? "border-positive text-positive" : ""}`}
            >
              <span
                className={`dot ${product.stockType === "in-vault" ? "bg-positive" : "bg-accent"}`}
              />
              {product.stockType === "in-vault" ? p.inVault : p.onQuote}
            </span>
            <span className="tag">
              {formatTemplate(p.authenticated, {
                ref: product.id.toUpperCase(),
              })}
            </span>
          </div>

          <div className="specs">
            {specRows.map(([k, v]) => (
              <div className="row" key={k}>
                <div className="k">{k}</div>
                <div>{v}</div>
              </div>
            ))}
          </div>

          <div className="actions">
            <button
              className="btn btn-primary"
              onClick={() => router.push("/checkout")}
              type="button"
            >
              {t.cta.addToBag} <span>→</span>
            </button>
            <Link className="btn btn-ghost" href={`/request?ref=${product.id}`}>
              {t.cta.requestPiece}
            </Link>
          </div>

          <div className="assurance">
            <div className="item">
              <div className="seal">✦</div>
              <div className="copy">
                <strong>{p.assurance.authTitle}</strong>
                <span>{p.assurance.authSub}</span>
              </div>
            </div>
            <div className="item">
              <div className="seal">⌖</div>
              <div className="copy">
                <strong>{p.assurance.escrowTitle}</strong>
                <span>{p.assurance.escrowSub}</span>
              </div>
            </div>
            <div className="item">
              <div className="seal">○</div>
              <div className="copy">
                <strong>{p.assurance.carriageTitle}</strong>
                <span>{p.assurance.carriageSub}</span>
              </div>
            </div>
            <div className="item">
              <div className="seal">↺</div>
              <div className="copy">
                <strong>{p.assurance.resaleTitle}</strong>
                <span>{p.assurance.resaleSub}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
