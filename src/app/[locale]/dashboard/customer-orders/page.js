import { Suspense } from "react";
import DashList from "../components/dash-list";
import { TableSkeleton } from "@/components/UI/skeletons";

export default function CustomersOrders() {
  return (
    <>
      <header>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Customers Orders
          </h1>
        </div>
      </header>
      <Suspense fallback={<TableSkeleton />}>
        <DashList />
      </Suspense>
    </>
  );
}
