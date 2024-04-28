import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DataTypes as Place, subImages } from "../home/CarouselSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";



interface CarouselProps {
  images: subImages;
}

function Carousel({ images }: CarouselProps) {

  return (
    <div className="w-full">
      <div className="">
        <div className="flex gap-[30px]">
          <Swiper
            className=" w-full mySwiper"
            slidesPerView={2}
            slidesPerGroup={2}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className="flex gap-4">
              {images.map((image, index) => (
                <Image
                  src={image}
                  alt={image}
                  width={500}
                  height={200}
                  className="rounded-lg"
                // className="h-[250px] w-[900px] cursor-pointer rounded-[14px] object-cover"
                // alt=""
                />
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
