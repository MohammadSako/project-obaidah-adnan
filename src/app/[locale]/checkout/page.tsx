import { OrderForm, OrderSummary } from "../../../components/checkout";

export default function Checkout() {
  return (
    <div className="container mx-auto m-10 p-4 min-h-screen">
      <div className="flex lg:flex-row flex-col lg:gap-10">
        <div className="w-full basis-3/5 lg:shadow-lg lg:rounded-lg p-6">
          <OrderForm />
        </div>

        <div className="w-full basis-2/5 lg:shadow-lg lg:rounded-lg p-6">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
