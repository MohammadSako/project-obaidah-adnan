"use client";

import { useRouter } from "next/navigation";
import { addCustomerData, decrementCustomerData } from "@/lib/db/products";
import { OrderSummary } from "../../../components/checkout";
import { OrderCustomerForm } from "../../../components/checkout/order-customer-form";
import { useItemStore } from "@/lib/store";
import { useState } from "react";
import Loading from "../loading";

export default function Checkout() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { clearCart } = useItemStore();

  async function CustomerOrderHandler(customerData) {
    if (!customerData || typeof customerData !== "object") {
      console.error("Invalid customer data:", customerData);
      return;
    }
    setIsLoading(true);
    try {
      await addCustomerData(customerData);
      await decrementCustomerData(customerData);
      clearCart();
      router.push("/success");
    } catch (error) {
      console.error("Error during order handling:", error.message);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      <div className="container mx-auto m-10 p-4 min-h-screen">
        <div className="flex lg:flex-row flex-col lg:gap-10">
          <div className="w-full basis-3/5 lg:shadow-lg lg:rounded-lg p-6">
            <OrderCustomerForm onAddCustomerOrder={CustomerOrderHandler} />
          </div>
          <div className="w-full basis-2/5 lg:shadow-lg lg:rounded-lg p-6">
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
}
