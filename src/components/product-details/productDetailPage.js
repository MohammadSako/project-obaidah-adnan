"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/UI/toast";
import { useRouter } from "next/navigation";
import { useItemStore } from "@/lib/store";
import Image from "next/image";
import { TbHeart, TbHeartFilled } from "react-icons/tb";

function ProductDetailPage({ products }) {
  const { toast } = useToast();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();

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

  const showToast = useCallback(
    (message, action) => {
      toast({
        title: title || "Product",
        description: message,
        action,
      });
    },
    [title, toast]
  );

  const addToCartHandler = useCallback(() => {
    addItem({
      id,
      title,
      description,
      image,
      price,
      details,
      color,
      gender,
      type,
    });
    showToast(
      "has been Added to your bag",
      <ToastAction altText="Go to bag" onClick={() => router.push("/cart")}>
        Go to bag
      </ToastAction>
    );
  }, [
    addItem,
    id,
    title,
    description,
    image,
    price,
    details,
    color,
    showToast,
    router,
    gender,
    type,
  ]);

  const addToFavoriteHandler = useCallback(() => {
    addFavorite({
      id,
      title,
      description,
      image,
      price,
      details,
      color,
      gender,
      type,
    });
    showToast(
      "has been Added to your Favorite's",
      <ToastAction
        altText="Added To Favorite"
        onClick={() => router.push("/favorite")}
      >
        View
      </ToastAction>
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
    showToast,
    router,
    gender,
    type,
  ]);

  const removeFromFavoriteHandler = useCallback(() => {
    removeFavorite(id);
    showToast("has been Removed from your Favorite's");
  }, [removeFavorite, id, showToast]);

  return (
    <main className="sm:flex flex-col sm:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  mb-20 p-10">
      <div className="bg-white mx-10 shadow-md p-4">
        <div className="pt-6">
          <div className="px-4 flex md:flex-row flex-col gap-4 ">
            <div className="basis-1/2 lg:col-span-2 lg:pr-8">
              {image ? (
                <>
                  <div className="relative bg-white">
                    <div className="absolute z-50 cursor-pointer right-2 top-2 text-xl text-black bg-white rounded-full w-8 h-8">
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
                <p className="text-gray-500">No image available.</p>
              )}
            </div>

            <div className="basis-1/2 space-y-4">
              <div className="flex justify-between">
                <h1 className="sm:text-4xl text-4xl font-bold text-gray-900 capitalize">
                  {title || "No Title"}
                </h1>
              </div>

              <h4 className="text-2xl text-gray-500 mt-2">{details}</h4>
              <h4 className="text-lg text-gray-500 mt-2">{description}</h4>
              <h4 className="text-lg text-gray-500 mt-2">
                <span className="capitalize">{type}</span> for {gender}
              </h4>

              <div className="">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl text-gray-800">Color</h3>
                  <h4 className="w-fit text-xl font-medium text-gray-600 border-gray-800 border rounded-md px-4 py-1 capitalize">
                    {color || "N/A"}
                  </h4>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl text-gray-800">Size</h3>
                  <h4 className="w-fit text-xl text-gray-600 border-gray-800 border rounded-md px-4 py-1 ">
                    {size || "N/A"}
                  </h4>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col gap-1 text-end">
                  <p className="text-4xl font-bold text-red-600">
                    <span className="text-2xl text-red-600">JD </span>
                    {price || "N/A"}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-400" />

              <button
                onClick={addToCartHandler}
                className="mt-6 w-full h-10 px-8 text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailPage;
