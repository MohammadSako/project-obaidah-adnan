import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

const CarouselFade = (props) => {
  const { data } = props;

  const options = { loop: false, duration: 30 };
  const [emblaRef] = useEmblaCarousel(options, [Fade(), Autoplay()]);

  return (
    <div className="flex items-center justify-center">
      <div className="overflow-hidden w-full max-w-7xl" ref={emblaRef}>
        <div className="flex">
          {data.map((product, index) => (
            <div
              key={product.id || index}
              className="flex-none basis-full min-w-0"
            >
              <Image
                src={product.image}
                width={1500}
                height={1000}
                alt="Picture of the author"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarouselFade;
