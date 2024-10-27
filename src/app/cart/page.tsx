"use client";

import React from "react";
import CartList from "@/components/cart/cartList";
import { useItemStore } from "../../lib/store";
import Link from "next/link";
import { RiSecurePaymentLine } from "react-icons/ri";

function CartPage() {
  const { totalAllPrice, totalQuantity } = useItemStore();

  return (
    <div className="min-h-screen px-6 sm:px-6 lg:px-20">
      {totalQuantity > 0 && (
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Your bag
        </h2>
      )}
      {totalQuantity === 0 && (
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Your bag is empty
        </h2>
      )}
      <div className="flex md:flex-row flex-col-reverse font-sans justify-center gap-10 ">
        <div className="basis-3/5">
          <CartList />
        </div>
        <div className="basis-2/5">
          <div className="space-y-4 font-sans">
            <p className="text-lg font-semibold my-2">Order summary</p>
            <div className="flex flex-row justify-between">
              <p className="">Products ({totalQuantity})</p>
              <p className="">JD{totalAllPrice}</p>
            </div>
            <div className="border-t-2 border-black py-2 space-y-3">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p className="font-bold">Subtotal incl. VAT</p>
                <p className="text-2xl font-bold">
                  <span className="text-sm">JD</span>
                  {totalAllPrice}
                </p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                By clicking &quot;check out&quot; you&apos;re agreeing to our{" "}
                <Link href="#">Privacy Policy</Link>
              </p>

              <div>
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Go to checkout
                </Link>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <RiSecurePaymentLine size={20} />
                <p className="underline">Secure shopping with SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
