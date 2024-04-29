import React, { useState } from "react";
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
      <div className="">
        <div className="flex gap-[30px]">
          <Swiper
            className="w-full mySwiper overflow-auto"
            slidesPerView={2}
            slidesPerGroup={2}
            spaceBetween={30}
            navigation={true}
            // loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
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
