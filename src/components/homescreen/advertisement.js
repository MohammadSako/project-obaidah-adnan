// "use client";

// import { motion } from "framer-motion";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import Fade from "embla-carousel-fade";
// import Autoplay from "embla-carousel-autoplay";
// import { useI18n } from "@/locales/client";

// export function Advertisement({ data }) {
//   const options = { loop: false, duration: 30 };
//   const [emblaRef] = useEmblaCarousel(options, [Fade(), Autoplay()]);
//   const t = useI18n();

//   return (
//     <motion.section
//       initial={{ opacity: 0, translateY: 100 }}
//       whileInView={{ opacity: 1, translateY: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, delay: 0.3 }}
//       className="flex-col items-center gap-4 w-full overflow-hidden origin-center sm:block hidden"
//     >
//       <h1 className="text-4xl font-medium tracking-tighter text-center text-gray-900 sm:text-3xl mt-32">
//         {t("common.advertisements")}
//       </h1>
//       <div className="flex items-center justify-center mt-10">
//         <div className="overflow-hidden w-full max-w-7xl" ref={emblaRef}>
//           <div className="flex">
//             {data.map((product) => (
//               <div key={product.id} className="flex-none basis-full min-w-0">
//                 <Image
//                   src={product.image}
//                   width={1500}
//                   height={400}
//                   alt={product.title}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCurrentLocale } from "@/locales/client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Button } from "../UI/button";

export function Advertisement({ data }) {
  const [activeBanner, setActiveBanner] = useState(0);
  const currentLocale = useCurrentLocale();
  const locale = useCurrentLocale();

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
    <section className="relative flex flex-col w-full items-start justify-center sm:h-[600px] h-96">
      <div className="flex flex-col z-10 capitalize h-full w-full gap-6 px-[2rem] justify-center text-center bg-opacity-10 bg-gray-900">
        {data[activeBanner].title && (
          <h1 className="text-4xl lg:text-8xl m-4 rtl:font-arabic text-white font-bold">
            {locale === "ar"
              ? data[activeBanner]?.titleAr
              : data[activeBanner]?.title}
          </h1>
        )}
        {data[activeBanner].description && (
          <h2 className="text-lg lg:text-5xl rtl:font-arabic mb-6 text-white font-bold">
            {locale === "ar"
              ? data[activeBanner]?.descriptionAr
              : data[activeBanner]?.description}
          </h2>
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
                />
              </motion.div>
            )
        )}
      </AnimatePresence>
      {data.length > 1 && (
        <div className="absolute flex bottom-10 w-[50%] items-center gap-10 justify-between self-center z-10">
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
