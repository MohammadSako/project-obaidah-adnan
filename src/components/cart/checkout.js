"use client";

import { useItemStore } from "../../lib/store";
import Link from "next/link";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Checkout() {
  const { totalAllPrice, totalQuantity } = useItemStore();

  return (
    <div className="space-y-4 font-sans">
      <p className="text-lg font-semibold my-2">Order summary</p>
      <div className="flex flex-row justify-between">
        <p className="">Products ({totalQuantity})</p>
        <p className="">JD{totalAllPrice}</p>
      </div>
      <div className="border-t-2 border-black py-6 space-y-4">
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
  );
}
