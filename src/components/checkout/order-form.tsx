"use client";

import { useItemStore } from "@/lib/store";
import { Button } from "../UI/button";
import { FiUser } from "react-icons/fi";

export const OrderForm = () => {
  const { totalQuantity } = useItemStore();

  return (
    <>
      <h1 className="my-3 font-display font-semibold text-4xl">Checkout</h1>
      <p>There are {totalQuantity} products in your cart</p>
      <Button className="mt-8">
        <FiUser />
        Already have an account?
        <span className="font-semibold">Click here to login</span>
      </Button>

      <form className="my-8">
        <div className="">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Billing Details
          </h2>

          <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  placeholder="First name *"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  placeholder="Phone Number *"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  placeholder="Address line 1 *"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  placeholder="Address line 2 *"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  placeholder="Email *"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  placeholder="City / Town *"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 col-span-full">
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder="Additional Information"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
