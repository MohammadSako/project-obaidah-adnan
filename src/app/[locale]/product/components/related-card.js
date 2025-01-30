"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbShoppingBagPlus, TbHeart, TbHeartFilled } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { useItemStore } from "@/lib/store";
import { useI18n } from "@/locales/client";

function RelatedCard({
  id,
  title,
  description,
  image,
  price,
  color,
  details,
  alt,
  dashboardType,
  size,
  gender,
  type,
  imageid,
  category,
}) {
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();
  const { toast } = useToast();
  const t = useI18n();

  // Memoize isFavorite value to prevent unnecessary re-renders
  const isFavorite = useMemo(
    () => favorite.some((item) => item.id === id),
    [favorite, id]
  );

  const addToFavorite = useCallback(() => {
    addFavorite({
      id,
      title,
      description,
      image,
      price,
      color,
      details,
      alt,
      dashboardType,
      size,
      gender,
      type,
      imageid,
      category,
    });
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
    dashboardType,
    size,
    gender,
    type,
    imageid,
    category,
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
    addItem({
      id,
      title,
      description,
      image,
      price,
      color,
      details,
      alt,
      dashboardType,
      size,
      gender,
      type,
      imageid,
      category,
    });
    toast({
      title: `${title}`,
      description: t("common.addedmessage"),
    });
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
    dashboardType,
    size,
    gender,
    type,
    imageid,
    category,
    toast,
    t,
  ]);

  return (
    <div>
      <Link href={`product/${id}`}>
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
              <p className="text-lg text-gray-700 w-32 truncate">{title}</p>
              <p className="mt-1 text-lg text-gray-500">{color}</p>
            </div>
            <div className="bg-yellow-400 max-h-8 p-2 shadow-lg flex items-center">
              <p className="text-lg font-medium text-gray-900">
                <span className="font-semibold text-red-700">{price}</span>{" "}
                <span className="text-xs -mt-2">JD</span>
              </p>
            </div>
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

export default RelatedCard;
