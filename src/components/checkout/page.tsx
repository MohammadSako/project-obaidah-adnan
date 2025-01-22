import {
  CustomerAddress,
  OrderSummary,
  PaymentSelection,
  ProductAmount,
} from "@/components/checkout";
import { AddressSkeleton, SummarySkeleton } from "@/components/skeletons";
import { getI18n } from "@/locales/server";
import { getServerAuth } from "@/utils";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Checkout() {
  const session = await getServerAuth();
  const t = await getI18n();

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full gap-10 min-h-screen ">
      <div className="w-full lg:basis-3/5">
        <h1 className="my-3 ltr:font-display font-semibold text-5xl text-forest">
          {t("common.checkout")}
        </h1>
        <ProductAmount />
        <div className="flex flex-col my-8 gap-4">
          <h2 className="text-xl font-medium text-forest">
            {t("checkout.address.shipping")}
          </h2>
          <Suspense fallback={<AddressSkeleton />}>
            <CustomerAddress />
          </Suspense>
        </div>
        <PaymentSelection />
      </div>

      <div className="w-full lg:basis-2/5">
        <Suspense fallback={<SummarySkeleton />}>
          <OrderSummary />
        </Suspense>
      </div>
    </div>
  );
}
