"use client";

import { addCustomerData } from "@/lib/db/products";
import { OrderSummary } from "../../../components/checkout";
import { OrderCustomerForm } from "../../../components/checkout/order-customer-form";
// import { useItemStore } from "@/lib/store";

export default function Checkout() {
  // const { clearCart } = useItemStore();
  async function CustomerOrderHendler(customerData) {
    console.log(customerData);

    try {
      await addCustomerData(customerData);
      // clearCart();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <div className="container mx-auto m-10 p-4 min-h-screen">
      <div className="flex lg:flex-row flex-col lg:gap-10">
        <div className="w-full basis-3/5 lg:shadow-lg lg:rounded-lg p-6">
          <OrderCustomerForm onAddCustomerOrder={CustomerOrderHendler} />
        </div>
        <div className="w-full basis-2/5 lg:shadow-lg lg:rounded-lg p-6">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
