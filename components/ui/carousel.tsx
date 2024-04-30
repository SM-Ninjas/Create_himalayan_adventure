import React from "react";
import { DataTypes as Place, subImages } from "../home/CarouselSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface CarouselProps {
  images: subImages;
}

function Carousel({ images }: CarouselProps) {
  return (
    <div className="w-full p-1">
      <div className="border gap-[30px]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
              <div className="flex justify-center">
                <Image
                  src={image}
                  alt={image}
                  width={500}
                  height={200}
                  className="rounded-lg w-full h-[280px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
