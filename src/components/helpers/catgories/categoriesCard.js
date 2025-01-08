"use client";

import Link from "next/link";
import { CardImage } from "./card/card-image";
import { CardDetails } from "./card/card-details";

function CategoriesCard({
  id,
  category,
  description,
  image,
  price,
  color,
  details,
  url,
  alt,
  title,
}) {
  return (
    <div>
      <div key={id} className="group relative">
        <h2 className="mt-10 text-4xl sm:text-3xl sm:w-[200px] h-[80px] text-gray-700 font-sans font-light text-center">
          {title}
        </h2>
        <div className="md:block flex flex-col gap-8 sm:w-[200px]">
          {!price && (
            <Link href={url}>
              <CardImage image={image} />
            </Link>
          )}
          {price && (
            <CardDetails
              color={color}
              description={description}
              details={details}
              title={title}
              image={image}
              id={id}
              category={category}
              price={price}
              url={url}
              alt={alt}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
