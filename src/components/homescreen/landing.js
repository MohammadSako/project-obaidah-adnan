"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

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
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[1000px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Images.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-4">
              <Card>
                <CardContent className="flex h-[400px] items-center justify-center p-2">
                  <Image
                    src={product.src}
                    width={1000}
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
  );
}
