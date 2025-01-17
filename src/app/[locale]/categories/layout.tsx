"use client"

import { Suspense } from "react";
import Image from "next/image";
import { CategoryBackgroundImageSkeleton } from "@/components/UI/skeletons";
// import { BreadCrumbs } from "@/components/categories/bread-crump";

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense fallback={<CategoryBackgroundImageSkeleton />}>
        <div className="relative flex flex-col w-full h-[20vh]">
          <Image
            src="https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/store.avif"
            fill
            sizes="100vw"
            alt="Store Image"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* <BreadCrumbs /> */}
      </Suspense>
      <div className="flex flex-col w-full">{children}</div>
    </>
  );
};

export default CategoriesLayout;
