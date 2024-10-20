"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback } from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useItemStore } from "../../lib/store";

function ProductCard({ id, title, description, image, price, color }) {
  const addItems = useItemStore((state) => state.addItem);
  const item = useItemStore((state) => state.items);

  console.log("zustand....................", item);
  
  const addToCartHandler = useCallback(() => {
    addItems({
      id: id,
      title: title,
      description: description,
      image: image,
      price: price,
      color: color,
    });
  }, [addItems, id, title, price, description, image, color]);

  return (
    <div>
      <div key={id}>
        <Link href={id.toString()}>
          <div key={id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
              <p className="text-lg font-medium text-gray-900">
                <span className="font-semibold text-red-700">{price}</span>{" "}
                <span className="text-xs -mt-2">JD</span>
              </p>
            </div>
          </div>
        </Link>
        <TbShoppingBagPlus
          title="Add to bag"
          size={30}
          onClick={addToCartHandler}
          className="mt-2 text-lg font-sans tracking-wide text-gray-400 hover:text-gray-800"
        />
      </div>
    </div>
  );
}

export default ProductCard;
