"use client";

import Image from "next/image";
import { useItemStore } from "../../lib/store";
import CartButton from "../UI/cartButton";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/UI/toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartList() {
  const {
    totalQuantity,
    items,
    removeItem,
    addFavorite,
    removeFavorite,
    favorite,
  } = useItemStore();

  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  useEffect(() => {
    setIsFavorite(favorite.some((item) => item.id === items.id));
  }, [favorite, items.id]);

  const addToFavorite = useCallback(() => {
    addFavorite({
      id: id,
      title: title,
      description: description,
      image: image,
      price: price,
      color: color,
    });
    toast({
      title: `${title}`,
      description: "has been Added to your Favorite's",
      action: (
        <ToastAction
          altText="Added To Favorite"
          onClick={() => router.push("/favorite")}
        >
          View
        </ToastAction>
      ),
    });
  }, [addFavorite, toast, router]);

  return (
    <>
      <div className="mt-4 space-y-4 ">
        {totalQuantity > 0 && (
          <p className="">{totalQuantity} products in total</p>
        )}
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
                    <div>
                      {!isFavorite && (
                        <TbHeart
                          title="Add to favorite"
                          size={30}
                          onClick={() => addToFavorite(product)}
                          className="mt-2 text-lg font-sans tracking-wide text-gray-400 hover:text-red-500"
                        />
                      )}
                      {isFavorite && (
                        <TbHeartFilled
                          title="Remove from favorite"
                          size={30}
                          onClick={() => removeFavorite(id)}
                          className="mt-2 text-lg font-sans tracking-wide text-red-500 hover:text-red-400"
                        />
                      )}
                    </div>
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
