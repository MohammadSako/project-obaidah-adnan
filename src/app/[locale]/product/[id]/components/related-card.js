"use client";

import Link from "next/link";
import Image from "next/image";
import { useCurrentLocale, useI18n } from "@/locales/client";

function RelatedCard({ id, title, color, titleAr, colorAr, image, price, alt }) {
  const t = useI18n();
  const locale = useCurrentLocale();
  const productTitle = locale === "ar" ? titleAr : title;
  const productColor = locale === "ar" ? colorAr : color;

  return (
    <div className="max-w-xs">
      <Link href={`/product/${id}`} className="block group">
        <div className="relative w-full h-[200px] overflow-hidden rounded-md group-hover:opacity-75">
          <Image
            src={image}
            alt={alt || productTitle}
            width={200}
            height={200}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-lg text-gray-700 w-32 truncate">{productTitle}</p>
            <p className="mt-1 text-lg text-gray-500">{productColor}</p>
          </div>
          <div className="bg-yellow-400 px-2 py-1 shadow-lg flex items-center rounded">
            <span className="text-lg font-medium text-gray-900">
              <span className="font-semibold text-red-700">{price}</span>{" "}
              <span className="text-xs">{t("product.price")}</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RelatedCard;
