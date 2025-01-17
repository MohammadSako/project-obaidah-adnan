"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";
import { TbShoppingBagPlus, TbHeart, TbHeartFilled } from "react-icons/tb";
import { useItemStore } from "../../lib/store";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/UI/toast";
import { useRouter } from "next/navigation";
import { useI18n } from "@/locales/client";

function ProductCard({
  id,
  title,
  description,
  image,
  price,
  color,
  url,
  details,
  alt,
  dashboardType,
}) {
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();
  const { toast } = useToast();
  const router = useRouter();
  const t = useI18n();

  // Memoize isFavorite value to prevent unnecessary re-renders
  const isFavorite = useMemo(
    () => favorite.some((item) => item.id === id),
    [favorite, id]
  );

  const handleToast = useCallback(
    (message, actionText, actionOnClick) => {
      toast({
        title: message,
        description: actionText,
        action: (
          <ToastAction altText={actionText} onClick={actionOnClick}>
            {actionText}
          </ToastAction>
        ),
      });
    },
    [toast]
  );

  const addToFavorite = useCallback(() => {
    addFavorite({ id, title, description, image, price, color, alt, details });
    handleToast(`${title}`, "has been Added to your Favorite's", () =>
      router.push("/favorite")
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

  const removeFromFavorite = useCallback(() => {
    removeFavorite(id);
    handleToast(`${title}`, "has been removed from your Favorite's", () =>
      router.push("/favorite")
    );
  }, [removeFavorite, id, title, handleToast, router]);

  const addToCartHandler = useCallback(() => {
    addItem({ id, title, description, image, price, color, alt, details });
    handleToast(`${title}`, "has been Added to your bag", () =>
      router.push("/cart")
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
    <div>
      <Link href={url}>
        <div className="group relative">
          <div className="p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 shadow-lg">
            <Image
              src={image}
              alt={alt}
              width={200}
              height={200}
              style={{ width: "400", height: "400" }}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-lg text-gray-700 font-sans">{title}</p>
              <p className="mt-1 text-lg text-gray-500">{color}</p>
            </div>
            {dashboardType ? (
              <div className="bg-yellow-400 max-h-8 p-2 shadow-lg flex items-center">
                <p className="font-medium text-gray-900">
                  <span className="text-2xl font-semibold text-red-600">
                    {price}
                  </span>{" "}
                  <span className="text-xl -mt-2">{t("product.price")}</span>
                </p>
              </div>
            ) : (
              <div className="bg-white max-h-8 p-2 flex items-center">
                <p className="font-medium text-gray-900">
                  <span className="text-2xl font-semibold text-red-700">
                    {price}
                  </span>{" "}
                  <span className="text-xl -mt-2">{t("product.price")}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
      <div className="flex flex-row space-x-6">
        <TbShoppingBagPlus
          title="Add to bag"
          size={30}
          onClick={addToCartHandler}
          className="mt-2 text-lg font-sans tracking-wide text-gray-400 hover:text-gray-800"
        />
        {isFavorite ? (
          <TbHeartFilled
            title="Remove from favorite"
            size={30}
            onClick={removeFromFavorite}
            className="mt-2 text-lg font-sans tracking-wide text-red-500 hover:text-red-400"
          />
        ) : (
          <TbHeart
            title="Add to favorite"
            size={30}
            onClick={addToFavorite}
            className="mt-2 text-lg font-sans tracking-wide text-gray-400 hover:text-red-500"
          />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
