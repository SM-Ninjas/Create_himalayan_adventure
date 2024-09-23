import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


interface CarouselProps {
  images: string[];  
}

function Carousel({ images }: CarouselProps) {
  return (
    <div className="">
      <div className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={30}
          loop={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper flex w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex">
                <div className="relative aspect-video flex-1 justify-center rounded-lg">
                  <Image
                    src={image}
                    alt={`image-${index}`}  // update alt text dynamically
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
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
          loop={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper flex w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex">
                <div className="relative aspect-video flex-1 justify-center rounded-lg">
                  <Image
                    src={image}
                    alt={`image-${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="px-4 md:hidden">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={10}
          loop={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper flex w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex">
                <div className="relative aspect-video flex-1 justify-center rounded-lg">
                  <Image
                    src={image}
                    alt={`image-${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
