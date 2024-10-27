"use client";

import Image from "next/image";
import { useItemStore } from "../../lib/store";
import CartButton from "../UI/cartButton";

export default function CartList() {
  const { totalQuantity, items, removeItem } = useItemStore();

  return (
    <>
      <div className="mt-4 space-y-4 ">
        {totalQuantity > 0 && <p className="">{totalQuantity} products in total</p>}
        <div className="flow-root">
          <ul
            role="list"
            className="-my-6 mt-2 divide-y divide-gray-200 border-t border-gray-200 "
          >
            {items.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-25 w-25 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    width={100}
                    height={100}
                    alt={product.image}
                    src={product.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col gap-6">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.title}</a>
                      </h3>
                      <p className="ml-4">{product.price} JD</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <CartButton quantity={product.quantity} id={product.id} />
                    <div className="flex">
                      <button
                        onClick={() => removeItem(product.id)}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
