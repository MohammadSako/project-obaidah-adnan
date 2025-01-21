"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { useItemStore } from "@/lib/store";
import { useI18n } from "@/locales/client";

function ProductDetailPage({ products }) {
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  const [clotheType, setClotheType] = useState("");
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();
  const t = useI18n();

  const {
    id,
    title,
    description,
    image,
    price,
    color,
    size,
    alt,
    details,
    gender,
    type,
  } = products;

  useEffect(() => {
    setIsFavorite(favorite.some((item) => item.id === id));
  }, [favorite, id]);

  const addToFavoriteHandler = useCallback(() => {
    addFavorite({ id, title, description, image, price, color, alt, details });
    toast({
      title: `${title}`,
      description: t("common.favaddedmessage"),
    });
  }, [addFavorite, id, title, description, image, price, color, details, alt]);

  const removeFromFavoriteHandler = useCallback(() => {
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

  useEffect(() => {
    switch (type) {
      case "top":
        setClotheType(t("categories.top"));
        break;
      case "lower":
        setClotheType(t("categories.lower"));
        break;
      case "shoes":
        setClotheType(t("categories.shoes"));
        break;
      default:
        setClotheType("n/a");
    }
  }, [type]);

  return (
    <main className="sm:flex flex-col shadow-md rounded-md sm:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-20 p-10">
      <div className="bg-white">
        <div className="pt-6">
          <div className="px-4 flex md:flex-row flex-col gap-10 ">
            <div className="basis-1/2 lg:col-span-2 lg:pr-8">
              {image ? (
                <>
                  <div className="relative bg-white">
                    <div className="absolute cursor-pointer right-2 top-2 text-xl text-black bg-white rounded-full w-8 h-8">
                      <div className="flex flex-row space-x-6">
                        {isFavorite ? (
                          <TbHeartFilled
                            title="Remove from favorite"
                            size={26}
                            onClick={removeFromFavoriteHandler}
                            className="mx-auto mt-1 text-lg font-sans tracking-wide text-red-500 hover:text-red-400"
                          />
                        ) : (
                          <TbHeart
                            title="Add to favorite"
                            size={26}
                            onClick={addToFavoriteHandler}
                            className="mx-auto mt-1 text-lg font-sans tracking-wide text-red-500 hover:text-red-500"
                          />
                        )}
                      </div>
                    </div>
                    <Image
                      src={image}
                      alt={alt || "Product Image"}
                      width={400}
                      height={400}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </>
              ) : (
                <p className="text-gray-500">{t("product.noimage")}</p>
              )}
            </div>

            <div className="basis-1/2 space-y-4">
              <div className="flex justify-between">
                <h1 className="sm:text-4xl text-4xl font-bold text-gray-900 capitalize">
                  {title || "No Title"}
                </h1>
              </div>

              <div>
                <div className="flex flex-row gap-1">
                  <h3 className="text-xl text-gray-400">
                    {t("product.details")}:
                  </h3>
                  <h4 className="w-fit text-xl font-medium text-gray-400 border-gray-800 capitalize">
                    {details || "N/A"}
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <h3 className="text-xl text-gray-400">
                    {t("product.description")}:
                  </h3>
                  <h4 className="w-fit text-xl font-medium text-gray-400 border-gray-800 capitalize">
                    {description || "N/A"}
                  </h4>
                </div>
              </div>
              <h4 className="text-lg text-gray-500 mt-2">
                <span className="capitalize">{clotheType}</span>{" "}
                {gender === "men"
                  ? t("categories.formen")
                  : t("categories.forwomen")}
              </h4>

              <div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl text-gray-800">
                    {t("product.color")}
                  </h3>
                  <h4 className="w-fit text-xl font-medium text-gray-600 border-gray-800 border rounded-md px-4 py-1 capitalize">
                    {color || "N/A"}
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl text-gray-800">{t("product.size")}</h3>
                  <h4 className="w-fit text-xl text-gray-600 border-gray-800 border rounded-md px-4 py-1 ">
                    {size || "N/A"}
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-1 text-end">
                  <p className="text-4xl font-bold text-red-600">
                    {price || "N/A"}
                    <span className="text-2xl text-gray-600 mx-2">
                      {t("product.price")}
                    </span>
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-400" />

              <button
                onClick={addToCartHandler}
                className="mt-6 w-full h-10 px-8 text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                {t("product.addtocart")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailPage;
