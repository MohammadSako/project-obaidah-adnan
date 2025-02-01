import React from "react";
import { getCustomers } from "@/lib/db/products";
import { DataTable } from "./orders-data-table";

async function OrdersList() {
  const { customers = [] } = await getCustomers();
  return (
    <div className="mt-6">
      <DataTable data={customers} />
    </div>
  );
}

export default OrdersList;
