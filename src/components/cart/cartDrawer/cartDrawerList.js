"use client";

import Image from "next/image";
import { useItemStore } from "../../../lib/store";
import Link from "next/link";
import { MdOutlineDelete } from "react-icons/md";
import CartButton from "@/components/UI/cartButton";

export default function CartDrawerList({ onClick }) {
  const { items, removeItem, totalAllPrice } = useItemStore();

  return (
    <>
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      width={500}
                      height={500}
                      alt={product.image}
                      src={product.image}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.title}</a>
                        </h3>
                        <p className="ml-4 ">
                          JD
                          <span>
                            {product.price}
                          </span>
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      {/* <p className="text-gray-500">
                        Qty{" "}
                        <span className="font-bold text-lg">
                          {product.quantity}
                        </span>
                      </p> */}

                      <div className="flex">
                        {/* <button
                          onClick={() => removeItem(product.id)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button> */}
                        {/* <MdOutlineDelete
                          size={30}
                          style={{ cursor: "pointer" }}
                          onClick={() => removeItem(product.id)}
                          className="text-gray-400 hover:text-red-600"
                        /> */}
                        <CartButton quantity={product.quantity} id={product.id} />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-bold text-gray-900">
          <p>Subtotal incl. VAT</p>
          <p>
            JD<span className="font-bold text-2xl">{totalAllPrice}</span>
          </p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <Link
            href="/cart"
            onClick={onClick}
            className="flex items-center justify-center rounded-full border border-[#014F93] px-6 py-3 text-base font-medium text-[#014F93] hover:text-white shadow-sm hover:bg-[#014780]"
          >
            Your bag
          </Link>
        </div>
        <div className="mt-6">
          <Link
            href="#"
            className="flex items-center justify-center rounded-full border border-transparent bg-[#014F93] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#014780]"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}
