import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { routes } from "@/lib/routes";
import { carouselData } from "@/mock-data/carousel-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CarouselMobileResponsive = () => {
  return (
    <div className="xl:hidden">
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="w-full mySwiper"
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[60vh] w-full">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className=""
              />
              <div className="absolute z-50 flex items-end w-full h-full p-4 bg-gradient-to-b from-transparent to-gray-900/80">
                <motion.div className="flex flex-col gap-2">
                  <div>
                    <motion.div
                      layout
                      className=" mb-2 h-[2px] w-3 rounded-full bg-white"
                    ></motion.div>
                    <motion.p
                      layoutId={item.location}
                      className="small-text text-[#D5D5D6]"
                    >
                      {item.location}
                    </motion.p>
                  </div>
                  <motion.h1
                    layoutId={item.title}
                    className="leading-6 title-text text-gray-50"
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p className="text-gray-200 regular-text">
                    {item.description}
                  </motion.p>
                  <Link
                    href={{
                      pathname: `${routes.treks}/${item.slug}`,
                      query: {
                        index: index,
                      },
                    }}
                  >
                    <button
                      className="small-text mt-4 w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 font-thin text-gray-50 
          transition duration-300 ease-in-out hover:bg-white "
                    >
                      DETAILS
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselMobileResponsive;
