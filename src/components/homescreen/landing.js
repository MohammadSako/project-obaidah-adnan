"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

export function Landing({ data }) {
  const options = { loop: false, duration: 30 };
  const [emblaRef] = useEmblaCarousel(options, [Fade(), Autoplay()]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex-col items-center gap-4 w-full overflow-hidden origin-center sm:block hidden"
    >
      <div className="flex items-center justify-center">
        <div className="w-full max-w-7xl" ref={emblaRef}>
          <div className="flex">
            {data.map((product, index) => (
              <div
                key={product.id || index}
                className="flex-none basis-full min-w-0"
              >
                <Image
                  src={product.image}
                  width={1400}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
