import React from "react";
import { getProducts } from "@/lib/db/products";
import { DataTable } from "@/components/dashboard/data-table";

async function DashList() {
  const { products = [] } = await getProducts();
  return (
    <div className="mt-6">
      <DataTable data={products} />
    </div>
  );
}

export default DashList;
