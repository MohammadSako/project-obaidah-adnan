import { useEffect, useState } from "react";
import classes from "./HeaderFavoriteButton.module.css";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { useItemStore } from "../../../lib/store";

const HeaderFavoriteButton = (props) => {
  const [cartEmpty, setCartEmpty] = useState(false);
  const totalFavQuantity = useItemStore((state) => state.totalFavQuantity);
  const totalAllFavoriteItems = useItemStore(
    (state) => state.totalAllFavoriteItems
  );

  useEffect(() => {
    if (totalFavQuantity > 0) {
      setCartEmpty(true);
    } else {
      setCartEmpty(false);
    }
    totalAllFavoriteItems();
  }, [totalAllFavoriteItems, totalFavQuantity]);

  //cart Bump when clicked
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (totalFavQuantity === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [totalFavQuantity]);

  return (
    <div
      className={btnClasses}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    >
      {cartEmpty && (
        <div>
          <TbHeartFilled
            size={30}
            className="text-lg font-sans tracking-wide text-red-400 hover:[text-gray-800]"
          />
          <div className="-mt-8 ml-4 bg-white w-5 h-5 rounded-full ring-2 ring-red-300  font-bold text-sm text-white absolute flex justify-center">
            <p className="text-red-500">{totalFavQuantity}</p>
          </div>
        </div>
      )}
      {!cartEmpty && (
        <div>
          <TbHeart
            size={30}
            className="text-lg font-sans tracking-wide text-red-400 hover:[text-gray-800]"
          />
        </div>
      )}
    </div>
  );
};
export default HeaderFavoriteButton;
