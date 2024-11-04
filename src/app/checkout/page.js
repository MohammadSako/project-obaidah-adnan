import { Button } from "@/components/ui/button";
import { FiUser } from "react-icons/fi";
import { OrderForm, OrderSummary } from "@/components/checkout";

export default function Checkout() {
  return (
    <div className="container mx-auto m-10">
      <div className="flex flex-row">
        <div className="w-full basis-3/5">
          <h1 className="my-3 font-display font-semibold text-5xl">Checkout</h1>
          <p>There are 3 products in your cart</p>
          <Button className="mt-8">
            <FiUser />
            Already have an account?
            <span className="font-semibold">Click here to login</span>
          </Button>
          {/* <OrderForm /> */}
        </div>

        <div className="w-full basis-2/5">
          {/* <OrderSummary /> */}
        </div>
      </div>
    </div>
  );
}
