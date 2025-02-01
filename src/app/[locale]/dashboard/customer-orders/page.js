import { Suspense } from "react";
import OrdersList from "./components/orders-lists";
import { TableSkeleton } from "@/components/UI/skeletons";
export default async function CustomersOrders() {
  return (
    <>
      <main>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-blue-700">
            Orders List
          </h1>
        </div>
      </main>
      <Suspense fallback={<TableSkeleton />}>
        <OrdersList />
      </Suspense>
    </>
  );
}
