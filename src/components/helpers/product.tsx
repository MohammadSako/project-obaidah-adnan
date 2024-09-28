import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { FiPlus } from "react-icons/fi";
import { FavoriteToggle } from ".";

interface Props {
  title: string;
  image: string | StaticImport;
  description?: string;
  price?: number;
  width?: number;
  height?: number;
  imageStyles?: string;
  noButton?: boolean;
  handleProductClick?: () => void;
}

export const Product: React.FC<Props> = (props) => {
  const {
    title,
    noButton,
    imageStyles,
    width = 190,
    height = 190,
    image,
    description,
    price,
    handleProductClick,
  } = props;
  return (
    <div
      onClick={handleProductClick}
      className="relative flex flex-col min-w-[200px] max-w-[290px] h-90 gap-1 items-center cursor-pointer font-sans mx-4 hover:bg-lightGreen/60 p-3 transition-colors duration-500 rounded-sm text-center overflow-hidden"
    >
      {!noButton && (
        <div className="absolute top-2 right-2">
          <FavoriteToggle />
        </div>
      )}
      <Image
        src={image}
        alt="Product Image"
        width={width}
        height={height}
        className={`${imageStyles}`}
      />
      <div className="flex flex-col gap-2 w-full items-center overflow-hidden">
        <p className="text-lg text-forest font-semibold truncate max-w-[250px]">
          {title}
        </p>
        {/* <p className="text-sm text-grey100 font-light truncate max-w-[250px]"> */}
        {/*   {description} */}
        {/* </p> */}
        {price && <span className="text-forest font-medium ">{price}$</span>}
        {!noButton && (
          <Button
            text="Add to Cart"
            icon={<FiPlus />}
            variant="secondary"
            className="px-5 mt-3"
          />
        )}
      </div>
    </div>
  );
};
