"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { TbShoppingBagPlus, TbHeart, TbHeartFilled } from "react-icons/tb";
import { useItemStore } from "../../lib/store";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/UI/toast";
import { useRouter } from "next/navigation";

function ProductCard({ id, title, description, image, price, color }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();

  useEffect(() => {
    setIsFavorite(favorite.some((item) => item.id === id));
  }, [favorite, id]);

  const { toast } = useToast();
  const router = useRouter();

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
  }, [addFavorite, id, title, price, description, image, color, toast, router]);

  const addToCartHandler = useCallback(() => {
    addItem({
      id: id,
      title: title,
      description: description,
      image: image,
      price: price,
      color: color,
    });
    toast({
      title: `${title}`,
      description: " has been Added to your bag",
      action: (
        <ToastAction altText="Go to bag" onClick={() => router.push("/cart")}>
          Go to bag
        </ToastAction>
      ),
    });
  }, [addItem, id, title, price, description, image, color, toast, router]);

  return (
    <div>
      <div key={id}>
        <Link href={id.toString()}>
          <div key={id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 shadow-lg">
              <Image
                src={image}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                alt={image}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {title}
                </p>
                <p className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {description}
                </p>
                <p className="mt-1 text-sm text-gray-500">{color}</p>
              </div>
              <div className="bg-yellow-400 p-2 shadow-lg">
                <p className="text-lg font-medium text-gray-900">
                  <span className="font-semibold text-red-700">{price}</span>{" "}
                  <span className="text-xs -mt-2">JD</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-row space-x-6 mt-2">
          <TbShoppingBagPlus
            title="Add to bag"
            size={30}
            onClick={addToCartHandler}
            className="mt-2 text-lg font-sans tracking-wide text-gray-400 hover:text-gray-800"
          />

          {!isFavorite && (
            <TbHeart
              title="Add to favorite"
              size={30}
              onClick={addToFavorite}
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
      </div>
    </div>
  );
}

export default ProductCard;
