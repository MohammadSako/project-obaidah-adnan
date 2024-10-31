"use client";

import Image from "next/image";
import { useItemStore } from "../../lib/store";
import { MdOutlineDelete } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/UI/toast";
import { useCallback } from "react";

export default function FavoriteList() {
  const { favorite, addItem, removeFavorite } = useItemStore();
  const { toast } = useToast();

  const addToCartHandler = useCallback((item) => {
    addItem({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      price: item.price,
      color: item.color,
    });
    toast({
      title: `${item.title}`,
      description: " has been Added to your bag",
      action: (
        <ToastAction altText="Go to bag" onClick={() => router.push("/cart")}>
          Go to bag
        </ToastAction>
      ),
    });
  }, [addItem, toast]);

  return (
    <>
      <div className="mt-4 space-y-4 ">
        <div className="flow-root">
          <ul
            role="list"
            className="-my-6 mt-2 divide-y divide-gray-200 border-t border-gray-200 "
          >
            {favorite.map((product) => (
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
                    <TbShoppingBagPlus
                      size={30}
                      style={{ cursor: "pointer" }}
                      onClick={() => addToCartHandler(product)}
                      className="text-gray-400 hover:text-gray-800"
                    />
                    <MdOutlineDelete
                      size={30}
                      style={{ cursor: "pointer" }}
                      onClick={() => removeFavorite(product.id)}
                      className="text-gray-400 hover:text-red-600"
                    />
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
