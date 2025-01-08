"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

function OurBrands({ data }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl h-[400px]">
          <div className="mx-auto max-w-2xl  lg:max-w-none">
            <div className="lg:col-span-2 text-center ">
              <Link href="/favorite">
                <h1 className="text-4xl font-medium tracking-tighter text-gray-900 sm:text-3xl mt-32">
                  Our Brands
                </h1>
              </Link>
              <Carousel
                className="w-full max-w-fit mt-10"
                opts={{ align: "center", dragFree: true }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent>
                  {data.map((product) => (
                    <CarouselItem className="max-w-fit" key={product.id}>
                      <Image
                        src={product.image}
                        width={600}
                        height={400}
                        alt="Picture of the author"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default OurBrands;
