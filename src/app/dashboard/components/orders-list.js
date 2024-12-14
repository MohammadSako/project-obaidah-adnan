import React from "react";
import { getProducts } from "@/lib/db/products";
import { DataTable } from "./data-table";

async function OrdersList() {
  const { products = [] } = await getProducts();

  return (
    <div className="mt-6">
      <DataTable data={products} />
    </div>
  );
}

export default OrdersList;
