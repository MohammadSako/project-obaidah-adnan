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
        <h2 className="mt-10 sm:h-16 h-10 font-arabic text-2xl sm:text-2xl sm:w-[200px] w-auto my-6 text-gray-700 capitalize text-center">
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
