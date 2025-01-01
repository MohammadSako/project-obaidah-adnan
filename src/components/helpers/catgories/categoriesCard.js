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
        <h2 className="text-3xl text-gray-700 font-sans font-light my-6 text-center">
          {title}
        </h2>
        <div className="md:block flex flex-row gap-8">
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
