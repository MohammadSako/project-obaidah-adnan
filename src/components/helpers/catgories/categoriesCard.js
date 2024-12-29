"use client";

import Link from "next/link";
import { CardImage } from "./card/card-image";
import { CardDetails } from "./card/card-details";

function CategoriesCard({
  id,
  category,
  title,
  description,
  image,
  price,
  color,
  url,
  name,
}) {
  return (
    <div>
      <div key={id} className="group relative">
        <h2 className="text-3xl text-gray-700 font-sans font-light my-6 text-center">
          {name}
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
              title={title}
              image={image}
              id={id}
              category={category}
              price={price}
              url={url}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
