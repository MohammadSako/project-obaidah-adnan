"use client";

import React, { useCallback, useMemo } from "react";
import { TbShoppingBagPlus, TbHeart, TbHeartFilled } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/UI/toast";
import { useRouter } from "next/navigation";
import { useItemStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

// Reusable icon styles
const iconStyles = "mt-2 text-lg font-sans tracking-wide cursor-pointer";

export function CardDetails({
  id,
  title,
  description,
  image,
  price,
  color,
  url,
  alt,
  details,
}) {
  const { toast } = useToast();
  const router = useRouter();
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();

  // Effect to determine if the item is in the favorites
  const isFavorite = useMemo(
    () => favorite.some((item) => item.id === id),
    [favorite, id]
  );

  const handleToast = useCallback(
    (message, actionText, linkName, actionOnClick) => {
      toast({
        title: message,
        description: actionText,
        action: (
          <ToastAction altText={actionText} onClick={actionOnClick}>
            {linkName}
          </ToastAction>
        ),
      });
    },
    [toast]
  );

  const addToFavorite = useCallback(() => {
    addFavorite({ id, title, description, image, price, color, alt, details });
    handleToast(
      `${title}`,
      "has been Added to your Favorite's",
      "go to your Favorite's",
      () => router.push("/favorite")
    );
  }, [
    addFavorite,
    id,
    title,
    description,
    image,
    price,
    color,
    details,
    handleToast,
    router,
    alt,
  ]);

  const addToCartHandler = useCallback(() => {
    addItem({ id, title, description, image, price, color, alt, details });
    handleToast(
      `${title}`,
      "has been Added to your bag",
      "go to your Bag",
      () => router.push("/cart")
    );
  }, [
    addItem,
    id,
    title,
    description,
    image,
    price,
    color,
    details,
    alt,
    handleToast,
    router,
  ]);

  return (
    <>
      <Link href={`/${url}`}>
        <div className="aspect-h-1 aspect-w-1 md:w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 shadow-lg">
          <Image
            src={image}
            alt={alt}
            style={{ width: "auto", height: "auto", objectFit: "cover" }}
            width={200}
            height={200}
          />
        </div>
      </Link>

      <div className="mt-4 flex md:flex-row flex-col justify-between">
        <div className="basis-2/3">
          <p className="text-lg text-gray-700 font-semibold">{title}</p>
          <p className="text-md text-gray-700 w-auto">{description}</p>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>

        <div className="basis-1/3 bg-yellow-400 p-2 w-16 h-[45px] text-center my-4 shadow-lg">
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
          className={`${iconStyles} ${
            isFavorite
              ? "text-red-500 hover:text-red-400"
              : "text-gray-400 hover:text-red-500"
          }`}
        />
        {isFavorite ? (
          <TbHeartFilled
            title="Remove from favorite"
            size={30}
            onClick={() => removeFavorite(id)}
            className={`${iconStyles} ${
              isFavorite
                ? "text-red-500 hover:text-red-400"
                : "text-gray-400 hover:text-red-500"
            }`}
          />
        ) : (
          <TbHeart
            title="Add to favorite"
            size={30}
            onClick={addToFavorite}
            className={`${iconStyles} ${
              isFavorite
                ? "text-red-500 hover:text-red-400"
                : "text-gray-400 hover:text-red-500"
            }`}
          />
        )}
      </div>
    </>
  );
}
