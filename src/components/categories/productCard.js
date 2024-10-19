"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { TbShoppingBagPlus } from "react-icons/tb";
import { cartActions } from "../../../store/cart-slice";
// import { setCookie } from "nookies";
// import getCookies from "../../../util/getCookies";

function ProductCard({ key, id, title, description, image, price, color }) {
  //   const getCookie = getCookies();
  const dispatch = useDispatch();

  const addToCartHandler = useCallback(() => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        description,
        image,
        price,
        color
      })
    );

    // with nookies
    // const cartItem = getCookie?.["cartItems"]
    //   ? JSON.parse(getCookie?.["cartItems"])
    //   : []; //if the cookie has any items; to merge them with the new one.
    // const addToCookies = [
    //   ...cartItem, //old items in the cookie, merge them with the new one.
    //   {
    //     id,
    //     title,
    //     description,
    //     image,
    //     price,
    //     color,
    //   },
    // ];
    // setCookie(null, "cartItems", JSON.stringify(addToCookies), {
    //   maxAge: 86400,
    //   path: "/",
    // });
    //   }, [dispatch, id, title, price, description, image, color, getCookie]);
  }, [dispatch, id, title, price, description, image, color]);

  return (
    <div>
      <div key={key}>
        <Link href={id.toString()}>
          <div key={key} className="group relative">
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
