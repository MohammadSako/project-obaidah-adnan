"use client";

import { useItemStore } from "@/lib/store";
import Link from "next/link";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Checkout({
  allPrice,
  totalQuantity,
  pagePath,
  onClick,
}) {
  const { addItem, favorite } = useItemStore();

  return (
    <div className="space-y-4 font-sans">
      <p className="text-lg font-semibold my-2">Order summary</p>
      <div className="flex flex-row justify-between">
        <p>Products ({totalQuantity})</p>
        <p>JD{allPrice}</p>
      </div>
      <div className="border-t-2 border-black py-6 space-y-4">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p className="font-bold">Subtotal incl. VAT</p>
          <p className="text-2xl font-bold">
            <span className="text-sm">JD</span>
            {allPrice}
          </p>
        </div>
        <div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <p className="mt-0.5 text-sm text-gray-500">
            By clicking &quot;check out&quot; you&apos;re agreeing to our{" "}
            <Link href="#">Privacy Policy</Link>
          </p>
        </div>

        {pagePath === "/favorite" && (
          <div
            onClick={() => favorite.forEach((item) => addItem(item))}
            style={{ cursor: "pointer" }}
            className="flex items-center justify-center rounded-full border border-[#014F93] px-6 py-3 text-base font-medium text-[#014F93] hover:text-white shadow-sm hover:bg-[#014780]"
          >
            Add all Items to bag
          </div>
        )}

        {pagePath === "/drawer" && (
          <div>
            <Link
              onClick={onClick}
              href="/cart"
              className="flex items-center justify-center rounded-full border border-[#014F93] px-6 py-3 text-base font-medium text-[#014F93] hover:text-white shadow-sm hover:bg-[#014780]"
            >
              Your bag
            </Link>
          </div>
        )}

        {(pagePath === "/drawer" || pagePath === "/cart") && (
          <div className="space-y-6">
            <div>
              <Link
                onClick={onClick}
                href="/checkout"
                className="flex items-center justify-center rounded-full border border-transparent bg-[#014F93] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#014780]"
              >
                Go to checkout
              </Link>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <RiSecurePaymentLine size={20} />
              <p className="underline">Secure shopping with SSL encryption</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
