"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { useI18n } from "@/locales/client";

export function Advertisement({ data }) {
  const options = { loop: false, duration: 30 };
  const [emblaRef] = useEmblaCarousel(options, [Fade(), Autoplay()]);
  const t = useI18n();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex-col items-center gap-4 w-full overflow-hidden origin-center sm:block hidden"
    >
      <h1 className="text-4xl font-medium tracking-tighter text-center text-gray-900 sm:text-3xl mt-32">
        {t("common.advertisements")} 
      </h1>
      <div className="flex items-center justify-center mt-10">
        <div className="overflow-hidden w-full max-w-7xl" ref={emblaRef}>
          <div className="flex">
            {data.map((product) => (
              <div key={product.id} className="flex-none basis-full min-w-0">
                <Image
                  src={product.image}
                  width={1500}
                  height={400}
                  alt={product.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
