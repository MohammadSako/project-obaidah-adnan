"use client";

import Link from "next/link";
import Image from "next/image";
import { useCurrentLocale, useI18n } from "@/locales/client";

function RelatedCard({
  id,
  title,
  color,
  titleAr,
  colorAr,
  image,
  price,
  alt,
}) {
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <div>
      <Link href={id}>
        <div className="group relative">
          <div className="p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 shadow-lg">
            <Image
              src={image}
              alt={alt}
              width={200}
              height={200}
              style={{ width: "400", height: "400" }}
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-lg text-gray-700 w-32 truncate">
                {locale === "ar" ? titleAr : title}
              </p>
              <p className="mt-1 text-lg text-gray-500">
                {locale === "ar" ? colorAr : color}
              </p>
            </div>
            <div className="bg-yellow-400 max-h-8 p-2 shadow-lg flex items-center">
              <p className="text-lg font-medium text-gray-900">
                <span className="font-semibold text-red-700">{price}</span>{" "}
                <span className="text-xs -mt-2">{t("product.price")}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RelatedCard;
