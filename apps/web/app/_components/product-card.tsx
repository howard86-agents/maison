"use client";

import Link from "next/link";
import { formatCcy } from "../../lib/currency";
import type { Product } from "../../lib/maison-data";
import { useLocale } from "../providers";
import { Placeholder } from "./placeholder";

export function ProductCard({ product }: { product: Product }) {
  const { ccy } = useLocale();
  return (
    <Link className="prod" href={`/product/${product.id}`}>
      <Placeholder
        aspect="4x5"
        caption={`${product.house.toLowerCase()} · ${product.id}`}
      />
      <div className="prod-meta">
        <div className="prod-house">{product.house}</div>
        <div className="prod-name">{product.name}</div>
        <div className="prod-foot">
          <div className="prod-price">{formatCcy(product.price, ccy)}</div>
          <div
            className={`prod-status ${product.stockType === "estimated" ? "estim" : ""}`}
          >
            <span className="dot" />
            {product.stockType === "estimated" ? "estimated" : "in vault"}
          </div>
        </div>
      </div>
    </Link>
  );
}
