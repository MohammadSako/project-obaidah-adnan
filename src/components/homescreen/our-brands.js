"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

function NewArrivals() {
  const Images = [
    {
      id: "b1",
      title: "Brand 1",
      image: "/samad.png",
    },
    {
      id: "b2",
      title: "Brand 2",
      image: "/aud.png",
    },
    {
      id: "b3",
      title: "Brand 3",
      image: "/aseel.png",
    },
    {
      id: "b4",
      title: "Brand 4",
      image: "/ebekan.png",
    },
    {
      id: "b5",
      title: "Brand 5",
      image: "/marae.png",
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-20 lg:max-w-none lg:py-10">
            <div className="lg:col-span-2 lg:pr-8 text-center">
              <Link href="/favorite">
                <h1 className="text-4xl font-medium tracking-tighter text-gray-900 sm:text-3xl">
                  Our Brands
                </h1>
              </Link>
              <Carousel
                className="w-full max-w-fit mt-4"
                opts={{ align: "center", dragFree: true }}
                plugins={[
                  Autoplay({
                    delay: 1000,
                  }),
                ]}
              >
                <CarouselContent>
                  {Images.map((product) => (
                    <CarouselItem className="max-w-fit" key={product.id}>
                      <Image
                        src={product.image}
                        width={300}
                        height={300}
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

export default NewArrivals;
