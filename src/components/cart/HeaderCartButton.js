"use client";

import { useEffect, useState } from "react";
import classes from "../helpers/HeaderButtonAnimation.module.css";
import { TbShoppingBag } from "react-icons/tb";
import { useItemStore } from "../../lib/store";

const HeaderCartButton = (props) => {
  const [cartEmpty, setCartEmpty] = useState(false);
  const quantity = useItemStore((state) => state.totalQuantity);
  const totalAllItems = useItemStore((state) => state.totalAllItems);

  useEffect(() => {
    if (quantity > 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
    totalAllItems()
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
      <TbShoppingBag
        size={30}
        className="text-lg font-sans tracking-wide text-gray-400 hover:[text-gray-800]"
      />
      {cartEmpty && (
        <div className="-mt-8 ml-4 bg-red-500 w-5 h-5 rounded-full font-bold text-sm text-white absolute flex justify-center">
          {quantity}
        </div>
      )}
    </div>
  );
};
export default HeaderCartButton;
