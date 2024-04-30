import { staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { TitleText } from "../ui/text/typingText";

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BestSellers = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col gap-y-4 px-4"
      variants={staggerContainer(0, 0)}
    >
      <div className="container">
        <TitleText title="Our Best Sellers" />
      </div>

      <div className="hidden lg:block">
        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          spaceBetween={30}
          loop={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper hidden w-full lg:block"
        >
          {bestSellers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-y-2">
                <div className="relative h-96 w-auto">
                  <Image
                    src={item.url}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="rounded-md bg-gradient-to-br from-blue-600/20 to-blue-600/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block lg:hidden">
        <Swiper
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper hidden w-full md:block lg:hidden"
        >
          {bestSellers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-y-2">
                <div className="relative h-96 w-auto">
                  <Image
                    src={item.url}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="rounded-md bg-gradient-to-br from-blue-600/20 to-blue-600/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className="mySwiper w-full md:hidden"
        >
          {bestSellers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-y-2">
                <div className="relative h-96 w-auto">
                  <Image
                    src={item.url}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="rounded-md bg-gradient-to-br from-blue-600/20 to-blue-600/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default BestSellers;

const bestSellers = [
  {
    id: 1,
    url: "/locations/annapurna.webp",
    title: "Annapurna Circuit Trek",
  },
  {
    id: 2,
    url: "/locations/everest.avif",
    title: "Everest Base Camp",
  },
  {
    id: 3,
    url: "/locations/chitwan.jpeg",
    title: "Chitwan Sightseeing",
  },
  {
    id: 4,
    url: "/locations/upper-mustang.jpeg",
    title: "Upper Mustang Trek",
  },
  {
    id: 5,
    url: "/locations/rara.jpeg",
    title: "Trek to Rara Lake",
  },
];
