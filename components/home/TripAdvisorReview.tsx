import { staggerContainer, textVariant } from "@/lib/motion";
import { motion } from "framer-motion";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomTestimonials from "../customTestomonial";

const TripAdvisorReview = () => {
  return (
    <motion.article
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col gap-y-4 px-8"
    >
      <div className="container">
        <motion.h2 className="title-text" variants={textVariant(0.2)}>
          Hear Directly From Our Clients
        </motion.h2>
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
          {tripAdvisorReviewList.map((item, index) => (
            <SwiperSlide key={index}>
              <CustomTestimonials
                name={item.name}
                title={item.title}
                message={item.message}
              />
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
          {tripAdvisorReviewList.map((item, index) => (
            <SwiperSlide key={index}>
              <CustomTestimonials
                name={item.name}
                title={item.title}
                message={item.message}
              />
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
          {tripAdvisorReviewList.map((item, index) => (
            <SwiperSlide key={index}>
              <CustomTestimonials
                name={item.name}
                title={item.title}
                message={item.message}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.article>
  );
};

export default TripAdvisorReview;

const tripAdvisorReviewList = [
  {
    id: 1,
    name: "Larey Prentice",
    title: "Best Service Ever!",
    message:
      "I definitely recommend this service to anyone looking for a great experience! Create Himalayan Adventure were amazing with their service and the trip was unforgettable!",
  },
  {
    id: 2,
    name: "Phil Dunphy",
    title: "The Best Hiking Trails in the World",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ultricies nunc. Nullam at ultricies nunc. Nullam at ultricies nunc. Nullam at ultricies nunc. Nullam at ultricies nunc. Nullam at ultricies nunc. Nullam at ultricies nunc. Nullam at ultricies nunc. Nullam",
  },
  {
    id: 3,
    name: "Megan LcCain",
    title: "Awesome Experience!",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 4,
    name: "John Doe",
    title: "Great Service!",
    message:
      "100 out of 10 would recommend! The service was amazing and the trip was unforgettable! If you're looking for a great experience, look no further!. I am so happy with the service and the trip was unforgettable!",
  },
];
