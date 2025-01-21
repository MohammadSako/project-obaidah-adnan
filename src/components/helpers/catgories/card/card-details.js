"use client";

import React, { useCallback, useMemo } from "react";
import { TbShoppingBagPlus, TbHeart, TbHeartFilled } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useItemStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/locales/client";

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
  const t = useI18n();

  // Effect to determine if the item is in the favorites
  const isFavorite = useMemo(
    () => favorite.some((item) => item.id === id),
    [favorite, id]
  );

  const addToFavorite = useCallback(() => {
    addFavorite({ id, title, description, image, price, color, alt, details });
    toast({
      title: `${title}`,
      description: t("common.favaddedmessage"),
    });
  }, [addFavorite, id, title, description, image, price, color, details, alt]);

  const removeFromFavorite = useCallback(() => {
    removeFavorite(id);
    toast({
      title: `${title}`,
      description: t("common.favremovedmessage"),
    });
  }, [removeFavorite, id, title]);

  const addToCartHandler = useCallback(() => {
    addItem({ id, title, description, image, price, color, alt, details });
    toast({
      title: `${title}`,
      description: t("common.addedmessage"),
    });
  }, [addItem, id, title, description, image, price, color, details, alt]);

  return (
    <div className="sm:shadow-none sm:p-0 rounded-lg shadow-lg p-4 space-y-2">
      <Link href={`/${url}`}>
        <div className="p-4 aspect-h-1 aspect-w-1 md:w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75">
          <Image
            src={image}
            alt={alt}
            style={{ width: 400, height: "auto", objectFit: "fill" }}
            width={200}
            height={200}
          />
        </div>
      </Link>

      <div className="mt-4 flex md:flex-row flex-col sm:justify-between space-y-7">
        <div className="basis-2/3">
          {/* <p className="sm:text-lg text-5xl text-gray-700 font-semibold">{title}</p> */}
          <p className="sm:text-lg text-3xl text-gray-700 w-auto">
            {description}
          </p>
          <p className="mt-1 sm:text-lg text-2xl text-gray-500">{color}</p>
        </div>

        <div className="basis-1/3 bg-yellow-400 sm:w-16 w-24 sm:h-[32px] text-center shadow-lg">
          <p className="sm:text-2xl text-3xl font-medium text-gray-900">
            <span className="font-semibold text-red-700">{price}</span>{" "}
            <span className="sm:text-lg text-xl">{t("product.price")}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <TbShoppingBagPlus
          title="Add to bag"
          size={35}
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
            size={35}
            onClick={() => removeFromFavorite(id)}
            className={`${iconStyles} ${
              isFavorite
                ? "text-red-500 hover:text-red-400"
                : "text-gray-400 hover:text-red-500"
            }`}
          />
        ) : (
          <TbHeart
            title="Add to favorite"
            size={35}
            onClick={addToFavorite}
            className={`${iconStyles} ${
              isFavorite
                ? "text-red-500 hover:text-red-400"
                : "text-gray-400 hover:text-red-500"
            }`}
          />
        )}
      </div>
    </div>
  );
}
