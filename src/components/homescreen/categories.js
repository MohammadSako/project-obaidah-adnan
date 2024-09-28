"use client";

import Image from "next/image";
import * as React from "react";

export function Categories() {
  const Images = [
    {
      src: "/c1.jpg",
      alt: "product 1",
      description: "dis 1",
    },
    {
      src: "/c2.jpg",
      alt: "product 2",
      description: "dis 2",
    },
    {
      src: "/c3.jpg",
      alt: "product 3",
      description: "dis 3",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {Images.map((categ, index) => (
              <div key={index} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    src={categ.src}
                    width={500}
                    height={500}
                    alt={categ.alt}
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={index}>
                    <span className="absolute inset-0" />
                    {categ.alt}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {categ.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
