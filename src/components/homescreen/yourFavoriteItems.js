"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import Image from "next/image";
import Link from "next/link";

export function YourFavoriteItems({ data }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center my-2 gap-4 w-full overflow-hidden origin-center"
    >
      <Link href="/favorite">
        <h1 className="text-2xl font-medium tracking-tighter text-gray-900 sm:text-3xl">
          Your favourites
        </h1>
      </Link>
      <Carousel
        className="w-full max-w-fit mt-4"
        opts={{ align: "center", dragFree: true }}
      >
        <CarouselContent>
          {data.map((product) => (
            <CarouselItem className="basis-1/3" key={product.id}>
              <Link key={product.id} href="/favorite">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src={product.image}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      width={200}
                      height={200}
                      alt={product.image}
                    />
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.section>
  );
}
