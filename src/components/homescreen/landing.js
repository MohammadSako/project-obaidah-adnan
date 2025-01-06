"use client";

import * as React from "react";
import { motion } from "framer-motion";
import CarouselFade from "../UI/carouselFade";

export function Landing() {
  const Images = [
    {
      image: "/p1.avif",
      alt: "product 1",
    },
    {
      image: "/p2.avif",
      alt: "product 2",
    },
    {
      image: "/p3.avif",
      alt: "product 3",
    },
    {
      image: "/p1.avif",
      alt: "product 1",
    },
    {
      image: "/p2.avif",
      alt: "product 2",
    },
    {
      image: "/p3.avif",
      alt: "product 3",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex-col items-center my-8 gap-4 w-full overflow-hidden origin-center sm:block hidden"
    >
      <CarouselFade data={Images} />
    </motion.section>
  );
}
