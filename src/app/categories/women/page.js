import React from "react";
import ProductList from "../../../components/categories/product-list";
import { getProducts } from "@/lib/db/products";

export default async function WomenPage() {
  const { products = [] } = await getProducts();
  return <ProductList products={products} />;
}
