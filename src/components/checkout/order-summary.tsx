"use client";

import { useItemStore } from "@/lib/store";
// import { Button } from "../UI/button";
import Image from "next/image";

export type Item = {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  color: string;
  quantity: number;
  totalPrice: number;
};

export const OrderSummary = () => {
  const { items, totalAllPrice } = useItemStore();

  return (
    <form>
      <h2 className="font-display font-semibold text-3xl py-5">Your Orders</h2>
      {items.map((product: Item) => (
        <div key={product.id} className="border-b border-gray">
          <li className="flex py-6">
            <div className="h-25 w-25 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <Image
                width={50}
                height={50}
                alt={product.image}
                src={product.image}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col gap-6">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>{product.title}</h3>
                  <p className="ml-4">{product.price} JD</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {product.description}
                </p>
              </div>
            </div>
          </li>
        </div>
      ))}

      {/* Discount */}
      {/* <div className="sm:col-span-4 mt-8">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="block flex-1  px-3 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Discount code"
          />
          <span>
            <Button
              variant="default"
              className="px-9 py-6 font-sans font-medium z-10 cursor-pointer rounded-l-none"
            >
              Apply
            </Button>
          </span>
        </div>
      </div> */}
      <div className="flex flex-col mt-5">
        <div className="flex justify-between">
          <p className="text-md text-slate-600">Subtotal</p>
          <p className="text-md text-slate-600">JD{totalAllPrice}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-md text-slate-600">Shipping</p>
          <p className="text-md text-slate-600">JD0</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-md font-semibold">Total</p>
          <p className="text-md font-semibold">JD{totalAllPrice}</p>
        </div>
      </div>
    </form>
  );
};
