"use client";

import { BreadCrumb } from "@/components/helpers/catgories/breadcrumb";
import Image from "next/image";

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <section className="py-24 mt-24">
    //   <div className="p-4 flex flex-col">
    //     <main>{children}</main>
    //   </div>
    // </section>
    <>
      <div className="relative flex flex-col w-full h-[40vh]">
        <Image
          src="/store.png"
          fill
          sizes="100vw"
          alt="Store Image"
          style={{ objectFit: "fill" }}
        />
      </div>
      {/* <div className="m-4">
        <BreadCrumb />
      </div> */}

      <div className="flex flex-col w-full">{children}</div>
    </>
  );
};

export default CategoriesLayout;
