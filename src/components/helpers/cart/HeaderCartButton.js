import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import classes from "./HeaderCartButton.module.css";
import { TbShoppingBag } from "react-icons/tb";
import { useItemStore } from "../../../lib/store";

const HeaderCartButton = (props) => {
  const item = useItemStore((state) => state.items);
  const [cartEmpty, setCartEmpty] = useState(false);

  useEffect(() => {
    if (item.length > 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
  }, [item]);

  //cart Bump when clicked
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [item]);

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
          {item.length}
        </div>
      )}
    </div>
  );
};
export default HeaderCartButton;
