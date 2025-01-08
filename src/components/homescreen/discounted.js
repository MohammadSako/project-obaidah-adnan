"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "../UI/carousel";
import ProductCard from "../categories/productCard";
import Autoplay from "embla-carousel-autoplay";

function Discounted({ data }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center h-auto gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-20 lg:max-w-none lg:py-10 mt-6">
            <div className="lg:col-span-2 lg:pr-8">
              <h1 className="text-4xl font-medium tracking-tighter text-center text-gray-900 sm:text-3xl">
                Discounted Products
              </h1>
              <Carousel
                className="w-full max-w-fit mt-4"
                opts={{ align: "center", dragFree: true }}
                plugins={[
                  Autoplay({
                    delay: 2500,
                  }),
                ]}
              >
                <CarouselContent>
                  {data.map((product) => (
                    <CarouselItem className="max-w-fit" key={product.id}>
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        alt={product.alt}
                        price={product.price}
                        color={product.color}
                        url={product.url}
                        details={product.details}
                        description={product.description}
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

export default Discounted;
