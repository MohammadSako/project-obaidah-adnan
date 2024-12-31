"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/UI/toast";
import { useRouter } from "next/navigation";
import { useItemStore } from "@/lib/store";
import Image from "next/image";

function ProductDetailPage({ products }) {
  const { toast } = useToast();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem, addFavorite, removeFavorite, favorite } = useItemStore();

  const { id, title, description, image, price, color, size, alt } = products;

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
    addItem({ id, title, description, image, price, color });
    showToast(
      "has been Added to your bag",
      <ToastAction altText="Go to bag" onClick={() => router.push("/cart")}>
        Go to bag
      </ToastAction>
    );
  }, [addItem, id, title, description, image, price, color, showToast, router]);

  const addToFavoriteHandler = useCallback(() => {
    addFavorite({ id, title, description, image, price, color });
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
    showToast,
    router,
  ]);

  const removeFromFavoriteHandler = useCallback(() => {
    removeFavorite(id);
    showToast("has been Removed from your Favorite's");
  }, [removeFavorite, id, showToast]);

  return (
    <div className="bg-white mx-10">
      <div className="pt-6">
        <div className="px-4 pb-16 pt-10 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {image ? (
              <Image
                src={image}
                alt={alt || "Product Image"}
                width={300}
                height={200}
                style={{ width: "auto", height: "auto", objectFit: "cover" }}
              />
            ) : (
              <p className="text-gray-500">No image available.</p>
            )}
          </div>

          <div className="mt-6">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold text-gray-500 sm:text-3xl">
                {title || "No Title"}
              </h1>
              <p className="text-3xl font-bold text-red-500">
                <span className="text-lg">JD</span> {price || "N/A"}
              </p>
            </div>

            <h4 className="text-lg text-gray-500 mt-2">{description}</h4>

            <div className="mt-2">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-gray-600">Color</h3>
                <h4 className="text-xl font-medium text-gray-800">
                  {color || "N/A"}
                </h4>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-gray-600">Size</h3>
                <h4 className="text-xl font-medium text-gray-800">
                  {size || "N/A"}
                </h4>
              </div>
            </div>

            <button
              onClick={addToCartHandler}
              className="mt-10 w-full py-3 px-8 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Add to bag
            </button>

            <button
              onClick={
                isFavorite ? removeFromFavoriteHandler : addToFavoriteHandler
              }
              className={`mt-4 w-full py-3 px-8 text-lg font-bold text-white rounded-full focus:ring-2 ${
                isFavorite
                  ? "bg-red-500 hover:bg-red-700 focus:ring-red-500"
                  : "bg-red-600 hover:bg-red-700 focus:ring-red-500"
              }`}
            >
              {isFavorite ? "Remove from favorite" : "Add to favorite"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
