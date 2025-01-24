"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import { TbShoppingBagPlus, TbHeart, TbHeartFilled } from "react-icons/tb";
import { useItemStore } from "../../lib/store";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/locales/client";
import Lottie from "lottie-react";
import Loading from "@/s3.json";

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
  const [cartPending, setCartPending] = useState(false);
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();
  const { toast } = useToast();
  const t = useI18n();

  // Memoize isFavorite value to prevent unnecessary re-renders
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
  }, [
    addFavorite,
    id,
    title,
    description,
    image,
    price,
    color,
    details,
    alt,
    toast,
    t,
  ]);

  const removeFromFavorite = useCallback(() => {
    removeFavorite(id);
    toast({
      title: `${title}`,
      description: t("common.favremovedmessage"),
    });
  }, [removeFavorite, id, title, toast, t]);

  const addToCartHandler = useCallback(() => {
    setCartPending(true);

    addItem({ id, title, description, image, price, color, alt, details });
    toast({
      title: `${title}`,
      description: t("common.addedmessage"),
    });
    setTimeout(() => {
      setCartPending(false);
    }, 2500);
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
    toast,
    t,
    setCartPending,
  ]);

  return (
    <div>
      <Link href={url}>
        <div className="group relative">
          <div className="p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
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
              <p className="rtl:font-arabic text-lg text-gray-900 font-sans truncate w-32">
                {title}
              </p>
              <p className="rtl:font-arabic mt-1 text-lg text-gray-900">
                {color}
              </p>
            </div>
            {dashboardType ? (
              <div className="bg-yellow-400 max-h-8 p-2 shadow-lg flex items-center">
                <p className="font-medium text-gray-900">
                  <span className="text-xl font-semibold text-red-600">
                    {price}
                  </span>{" "}
                  <span className="text-sm -mt-2">{t("product.price")}</span>
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
      <div className="flex flex-row gap-4 items-center">
        {!cartPending && (
          <TbShoppingBagPlus
            title="Add to bag"
            onClick={addToCartHandler}
            className="mt-2 text-lg font-sans tracking-wide bg-blue-500 rounded-full w-10 h-10 text-white p-1.5 hover:bg-blue-800 cursor-pointer"
          />
        )}
        {cartPending && (
          <div className="w-10 h-10 mt-2">
            <Lottie animationData={Loading} loop={true} />
          </div>
        )}
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
