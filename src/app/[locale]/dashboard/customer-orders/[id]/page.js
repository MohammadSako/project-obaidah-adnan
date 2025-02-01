"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import OrderDetails from "../components/order-details";
import { getOrdersById } from "@/lib/db/products";
import { FormSkeleton } from "@/components/UI/skeletons";
import { useI18n } from "@/locales/client";

function UpdateProduct() {
  const [newData, setNewData] = useState([]);
  const router = useRouter();
  const param = useParams();
  const t = useI18n();

  const id = parseInt(param.id);
  useEffect(() => {
    async function fetch() {
      try {
        const { orders } = await getOrdersById(id);
        setNewData(orders);
      } catch (error) {
        return { error };
      }
    }
    fetch();
  }, [id]);

  return (
    <>
      <header>
        <button
          onClick={() => router.push("/dashboard/customer-orders")}
          className="text-xl rtl:font-arabic text-blue-500 mt-4 hover:text-blue-400 sm:mx-0 mx-4"
        >
          Go back
        </button>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            {t("settings.orderslistfor")} {" "}
            <span className="font-light capitalize text-gray-600 border-2 py-2 px-4 border-fuchsia-400 rounded-lg">
              {newData.firstname} {newData.lastname}
            </span>
          </h1>
        </div>
      </header>
      <Suspense fallback={<FormSkeleton />}>
        <OrderDetails data={newData} />
      </Suspense>
    </>
  );
}
export default UpdateProduct;

// // https://supabase.com/docs/reference/javascript/storage-from-update
// // https://supabase.com/docs/reference/javascript/update
