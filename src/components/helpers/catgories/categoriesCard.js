"use client";

import Link from "next/link";
import { CardImage } from "./card/card-image";
import { CardDetails } from "./card/card-details";
import { useCurrentLocale } from "@/locales/client";

function CategoriesCard({
  id,
  title,
  description,
  titleAr,
  descriptionAr,
  image,
  price,
  color,
  colorAr,
  url,
  details,
  detailsAr,
  alt,
  dashboardType,
  size,
  gender,
  type,
  imageid,
  category,
}) {
  const locale = useCurrentLocale();

  return (
    <div>
      <div key={id} className="group relative">
        <h2 className="mt-10 sm:h-16 h-10 font-arabic text-2xl sm:text-2xl sm:w-[200px] w-auto my-6 text-gray-700 capitalize text-center">
          {locale === "ar" ? titleAr : title}
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
              colorAr={colorAr}
              descriptionAr={descriptionAr}
              detailsAr={detailsAr}
              titleAr={titleAr}
              image={image}
              id={id}
              category={category}
              price={price}
              url={url}
              alt={alt}
              dashboardType={dashboardType}
              size={size}
              gender={gender}
              type={type}
              imageid={imageid}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoriesCard;
