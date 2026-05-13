"use client";

import { useRouter } from "next/navigation";
import type { Product } from "../../lib/maison-data";
import { formatCcy } from "../../lib/currency";
import { useLocale } from "../providers";
import { Placeholder } from "./Placeholder";

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const { ccy } = useLocale();
  return (
    <div className="prod" onClick={() => router.push(`/product/${product.id}`)} role="button" tabIndex={0}>
      <Placeholder aspect="4x5" caption={`${product.house.toLowerCase()} · ${product.id}`} />
      <div className="prod-meta">
        <div className="prod-house">{product.house}</div>
        <div className="prod-name">{product.name}</div>
        <div className="prod-foot">
          <div className="prod-price">{formatCcy(product.price, ccy)}</div>
          <div className={`prod-status ${product.stockType === "estimated" ? "estim" : ""}`}>
            <span className="dot" />
            {product.stockType === "estimated" ? "estimated" : "in vault"}
          </div>
        </div>
      </div>
    </div>
  );
}
