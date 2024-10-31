import { useEffect, useState } from "react";
import classes from "../helpers/HeaderButtonAnimation.module.css";
import { TbHeart } from "react-icons/tb";
import { useItemStore } from "../../lib/store";

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
      <TbHeart
        size={30}
        className="text-lg font-sans tracking-wide text-gray-400 hover:text-red-500"
      />
      {cartEmpty && (
        <div className="-mt-8 ml-4 bg-red-500 w-5 h-5 rounded-full font-bold text-sm text-white absolute flex justify-center">
          {totalFavQuantity}
        </div>
      )}
    </div>
  );
};
export default HeaderFavoriteButton;
