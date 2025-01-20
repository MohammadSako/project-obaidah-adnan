"use client";

import { useEffect, useState } from "react";
import classes from "../helpers/HeaderButtonAnimation.module.css";
import { TbShoppingBag } from "react-icons/tb";
import { useItemStore } from "../../lib/store";
import { NavLinkIcon } from "../helpers/navbar helpers/nav-link";
import { useI18n } from "@/locales/client";

const HeaderCartButton = (props) => {
  const [cartEmpty, setCartEmpty] = useState(false);
  const quantity = useItemStore((state) => state.totalQuantity);
  const totalAllItems = useItemStore((state) => state.totalAllItems);
  const t = useI18n();

  useEffect(() => {
    if (quantity > 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
    totalAllItems();
  }, [totalAllItems, quantity]);

  //cart Bump when clicked
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (quantity === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [quantity]);

  return (
    <div
      className={btnClasses}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    >
      <NavLinkIcon
        icon={
          <div>
            {!cartEmpty && (
              <TbShoppingBag
                size={30}
                className="text-black hover:text-gray-400 mt-1"
              />
            )}

            {cartEmpty && (
              <div>
                <TbShoppingBag size={30} className="text-red-500 -mt-2" />

                <div className="-mt-8 ml-4 bg-red-500 w-5 h-5 rounded-full font-bold text-sm text-white flex justify-center">
                  {quantity}
                </div>
              </div>
            )}
          </div>
        }
        tooltipTx={t("common.cart")}
      ></NavLinkIcon>
    </div>
  );
};
export default HeaderCartButton;
