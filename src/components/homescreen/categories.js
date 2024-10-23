"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export function Categories() {
  const Images = [
    {
      src: "/c3.jpg",
      alt: "product 1",
      description: "Men",
      url: "/categories/men",
    },
    {
      src: "/c2.jpg",
      alt: "product 2",
      description: "Women",
      url: "/categories/women",
    },
    {
      src: "/c1.jpg",
      alt: "product 3",
      description: "Mixed",
      url: "/categories/mixed",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center my-2 gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="lg:col-span-2 lg:pr-8">
              <h1 className="text-2xl font-medium tracking-tighter text-gray-900 sm:text-3xl">
                Explore Popular Categories
              </h1>
            </div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {Images.map((categ, index) => (
                <Link key={index} href={categ.url}>
                  <div key={index} className="group relative mt-6">
                    <div className="relative h-80 w-full overflow-hidden shadow-lg rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <Image
                        src={categ.src}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        width={200}
                        height={200}
                        alt={categ.alt}
                      />
                    </div>

                    <h3 className="mt-2 text-2xl text-center">
                      <span className="absolute inset-0" />
                      {categ.description}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
    </motion.section>
  );
}
