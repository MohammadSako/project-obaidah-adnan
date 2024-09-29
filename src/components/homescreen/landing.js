"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import { Card, CardContent } from "../UI/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../UI/carousel";
import Image from "next/image";

export function Landing() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const Images = [
    {
      src: "/p1.jpg",
      alt: "product 1",
    },
    {
      src: "/p2.jpg",
      alt: "product 2",
    },
    {
      src: "/p3.jpg",
      alt: "product 3",
    },
    {
      src: "/p1.jpg",
      alt: "product 1",
    },
    {
      src: "/p2.jpg",
      alt: "product 2",
    },
    {
      src: "/p3.jpg",
      alt: "product 3",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center my-8 gap-4 w-full overflow-hidden origin-center"
    >
      <Carousel
        plugins={[plugin.current]}
        // className="w-full mt-2 max-w-fit relative"
        className="w-[1000px] max-w-fit relative"
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Images.map((product, index) => (
            <CarouselItem key={index}>
              <div className="p-4">
                <Card>
                  <CardContent className="flex h-[400px] items-center justify-center p-2">
                    <Image
                      src={product.src}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      width={800}
                      height={400}
                      alt={product.alt}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.section>
  );
}
