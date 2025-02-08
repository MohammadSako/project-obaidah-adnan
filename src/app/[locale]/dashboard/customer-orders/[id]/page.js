"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import OrderDetails from "../components/order-details";
import { getOrdersById } from "@/lib/db/products";
import { FormSkeleton } from "@/components/UI/skeletons";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/UI/button";
import { useOrderStore } from "@/lib/orderStore";

function UpdateProduct() {
  const [newData, setNewData] = useState([]);
  const router = useRouter();
  const param = useParams();
  const t = useI18n();
  const id = parseInt(param.id);
  const { setIsDeliverdBackdrop, setIsCancelBackdrop, setId } = useOrderStore();

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

  function deliveredHandle() {
    setId(id);
    setIsDeliverdBackdrop(true);
  }
  function canceldeliveryHandle() {
    setId(id);
    setIsCancelBackdrop(true);
  }

  return (
    <>
      <Suspense fallback={<FormSkeleton />}>
        <header>
          <button
            onClick={() => router.push("/dashboard/customer-orders")}
            className="text-xl rtl:font-arabic text-blue-500 mt-4 hover:text-blue-400 sm:mx-0 mx-4"
          >
            Go back
          </button>
          <div className="flex sm:flex-row flex-col justify-between mx-auto py-6 gap-8">
            <h1 className="flex sm:flex-row flex-col text-xl sm:text-3xl font-bold tracking-tight text-slate-800 gap-4">
              <p>{t("settings.orderslistfor")}: </p>
              <p>
                <span className="font-medium capitalize text-gray-600 border-2 py-2 px-4 border-blue-600 rounded-lg">
                  {newData.firstname} {newData.lastname}
                </span>
              </p>
            </h1>
            {!newData.delivered && (
              <div className="flex flex-col gap-2">
                <div className="text-gray-500">
                  {t("checkout.confirmdelivery")}
                </div>
                <Button
                  onClick={deliveredHandle}
                  className="bg-blue-600 hover:bg-blue-400 text-lg shadow-md hover:shadow-inner"
                >
                  {t("checkout.confirmdelivery")}
                </Button>
                <p className="text-center">{t("checkout.or")}</p>
                <Button
                  onClick={canceldeliveryHandle}
                  className="bg-white text-red-600  border-red-600 border hover:bg-red-600 hover:text-white text-lg shadow-md hover:shadow-inner"
                >
                  {t("checkout.orders.cancel")}
                </Button>
              </div>
            )}
          </div>
        </header>
        <Suspense fallback={<FormSkeleton />}>
          <OrderDetails data={newData} />
        </Suspense>
      </Suspense>
    </>
  );
}
export default UpdateProduct;
