import { notFound } from "next/navigation";
import { PRODUCTS } from "../../../lib/maison-data";
import { ProductClient } from "./product-client";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    notFound();
  }
  return <ProductClient product={product} />;
}
