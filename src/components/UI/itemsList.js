"use client";

import React from "react";
import Image from "next/image";
import { useItemStore } from "../../lib/store";
import CartButton from "./cartButton";
import { MdOutlineDelete } from "react-icons/md";
import Checkout from "./checkout";
import { TbShoppingBagPlus} from "react-icons/tb";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/UI/toast";
import { useCallback } from "react";

export default function ItemsList({
  totalQuantity,
  allPrice,
  pageData,
  pagePath,
}) {
  // const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();
  const { addItem, removeFavorite } = useItemStore();

  // useEffect(() => {
  //   setIsFavorite(favorite.some((item) => item.id === pageData.id));
  // }, [favorite, pageData.id]);

  const addToCartHandler = useCallback(
    (item) => {
      addItem({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        price: item.price,
        color: item.color,
      });
      toast({
        title: `${item.title}`,
        description: " has been Added to your bag",
        action: (
          <ToastAction altText="Go to bag" onClick={() => router.push("/cart")}>
            Go to bag
          </ToastAction>
        ),
      });
    },
    [addItem, toast]
  );

  return (
    <div>
      {pagePath === "/cart" && (
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Your bag
        </h2>
      )}
      {pagePath === "/favorite" && (
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Your favorites
        </h2>
      )}

      <div className="flex md:flex-row flex-col-reverse font-sans justify-center gap-10 ">
        <div className="basis-3/5">
          <div className="mt-4 space-y-4 ">
            <p className="">{totalQuantity} products in total</p>

            <div className="flow-root">
              <ul
                role="list"
                className="-my-6 mt-2 divide-y divide-gray-200 border-t border-gray-200 "
              >
                {pageData.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-25 w-25 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        width={100}
                        height={100}
                        alt={product.image}
                        src={product.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col gap-6">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.title}</h3>
                          <p className="ml-4">{product.price} JD</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex flex-1 items-end justify-between text-sm">
                        {pagePath === "/cart" && (
                          <>
                            <CartButton
                              quantity={product.quantity}
                              id={product.id}
                            />
                            {/* <MdOutlineDelete
                              size={30}
                              style={{ cursor: "pointer" }}
                              onClick={() => removeItem(product.id)}
                              className="text-gray-400 hover:text-red-600"
                            /> */}
                          </>
                        )}
                        {pagePath === "/favorite" && (
                          <>
                            <TbShoppingBagPlus
                              size={30}
                              style={{ cursor: "pointer" }}
                              onClick={() => addToCartHandler(product)}
                              className="text-gray-400 hover:text-gray-800"
                            />
                            <MdOutlineDelete
                              size={30}
                              style={{ cursor: "pointer" }}
                              onClick={() => removeFavorite(product.id)}
                              className="text-gray-400 hover:text-red-600"
                            />
                          </>
                        )}

                        {/* {pagePath === "/cart" && (
                            <div>
                              {!isFavorite && (
                                <TbHeart
                                  title="Add to favorite"
                                  size={30}
                                  onClick={() => addToFavorite(product)}
                                  className="mt-2 text-lg font-sans tracking-wide text-gray-400 hover:text-red-500"
                                />
                              )}
                              {isFavorite && (
                                <TbHeartFilled
                                  title="Remove from favorite"
                                  size={30}
                                  onClick={() => removeFavorite(product.id)}
                                  className="mt-2 text-lg font-sans tracking-wide text-red-500 hover:text-red-400"
                                />
                              )}
                            </div>
                          )} */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="basis-2/5">
          <Checkout
            allPrice={allPrice}
            totalQuantity={totalQuantity}
            pagePath={pagePath}
          />
        </div>
      </div>
    </div>
  );
}
