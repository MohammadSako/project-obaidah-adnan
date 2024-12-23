"use client";

import React, { useCallback, useEffect, useState } from "react";
import { TbShoppingBagPlus, TbHeart, TbHeartFilled } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/UI/toast";
import { useRouter } from "next/navigation";
import { useItemStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

export function CardDetails({ id, title, description, image, price, color, url }) {
  const { toast } = useToast();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();

  useEffect(() => {
    setIsFavorite(favorite.some((item) => item.id === id));
  }, [favorite, id]);

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
    <>
      <Link href={url}>
        <div className="aspect-h-1 aspect-w-1 md:w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 shadow-lg">
          <Image
            src={image}
            style={{
              width: "auto",
              height: "auto",
              objectFit: "cover",
            }}
            width={200}
            height={200}
            alt={image}
          />
        </div>
      </Link>
      <div className="mt-4 flex md:flex-row flex-col justify-between">
        <div>
          <p className="text-md text-gray-700 font-semibold">{title}</p>
          {/* <p className="text-sm text-gray-700 w-2">{description}</p> */}
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <div className="bg-yellow-400 p-2 w-16 text-center my-4 shadow-lg">
          <p className="text-lg font-medium text-gray-900">
            <span className="font-semibold text-red-700">{price}</span>{" "}
            <span className="text-xs -mt-2">JD</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-6">
        <TbShoppingBagPlus
          title="Add to bag"
          size={30}
          onClick={addToCartHandler}
          className="mt-2 text-lg font-sans tracking-wide text-gray-400 hover:text-gray-800 cursor-pointer"
        />

        {!isFavorite && (
          <TbHeart
            title="Add to favorite"
            size={30}
            onClick={addToFavorite}
            className="mt-2 text-lg font-sans tracking-wide text-gray-400 hover:text-red-500 cursor-pointer"
          />
        )}
        {isFavorite && (
          <TbHeartFilled
            title="Remove from favorite"
            size={30}
            onClick={() => removeFavorite(id)}
            className="mt-2 text-lg font-sans tracking-wide text-red-500 hover:text-red-400 cursor-pointer"
          />
        )}
      </div>
    </>
  );
}
