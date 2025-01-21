"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCurrentLocale, useI18n } from "@/locales/client";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { Button } from "../UI/button";

export function Landing({ data }) {
  const [activeBanner, setActiveBanner] = useState(0);
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const isRtl = currentLocale === "ar";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveBanner((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearTimeout(timeout);
  }, [activeBanner, data.length]);

  function handleNext() {
    setActiveBanner((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }

  function handlePrevious() {
    setActiveBanner((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }
  return (
    <section className="relative flex flex-col w-full items-start justify-center h-96">
      <div className="flex flex-col z-10 container mx-auto gap-6 px-[2rem]">
        {data[activeBanner].title && (
          <h1 className="text-4xl lg:text-8xl ltr:font-display text-forest text-gray-400 font-bold max-w-screen-lg">
            {data[activeBanner]?.title}
          </h1>
        )}
        {data[activeBanner].description && (
          <h2 className="text-forest text-lg lg:text-2xl max-w-3xl mb-6 text-gray-400 font-bold">
            {data[activeBanner]?.description}
          </h2>
        )}
        {data[activeBanner]?.redirectURL && (
          <Link href={data[activeBanner].redirectURL} className="w-40 h-[45px]">
            <Button
              variant="secondary"
              size="xl"
              className="w-40 font-medium ltr:uppercase z-10 cursor-pointer min-w-fit "
            >
              <span className="rtl:pt-1">{t("home.shopnow")}</span>
              {isRtl ? <FaArrowLeft /> : <FaArrowRight />}
            </Button>
          </Link>
        )}
      </div>
      <AnimatePresence>
        {data.map(
          (banner, i) =>
            activeBanner === i && (
              <motion.div
                key={`banner-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex-col items-center gap-4 w-full overflow-hidden origin-center"
              >
                <Image
                  src={banner.image}
                  fill
                  sizes="100vw"
                  alt="Banner"
                  className="object-cover"
                  // src={banner.image}
                  // width={1400}
                  // height={500}
                  // alt={banner.title}
                />
              </motion.div>
            )
        )}
      </AnimatePresence>
      {data.length > 1 && (
        <div className="absolute flex bottom-10 w-[50%] items-center gap-10 justify-between self-center z-40">
          <Button
            variant="secondary"
            onClick={() =>
              currentLocale === "ar" ? handlePrevious() : handleNext()
            }
          >
            {currentLocale === "ar" ? <FaChevronRight /> : <FaChevronLeft />}
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              currentLocale === "ar" ? handleNext() : handlePrevious()
            }
          >
            {currentLocale === "ar" ? <FaChevronLeft /> : <FaChevronRight />}
          </Button>
        </div>
      )}
    </section>
  );
}
