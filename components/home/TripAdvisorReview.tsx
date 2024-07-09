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
    name: "Emily Harper",
    title: "Incredible Journey!",
    message:
      "This was by far the best trip I've ever taken. The guides were knowledgeable and friendly, and the scenery was breathtaking. Highly recommended!",
  },
  {
    id: 3,
    name: "Megan LcCain",
    title: "Awesome Experience!",
    message:
      "From start to finish, everything was perfect. The team was professional, and the activities were well-organized. I'll definitely be booking another trip soon!",
  },
  {
    id: 4,
    name: "John Doe",
    title: "Great Service!",
    message:
      "100 out of 10 would recommend! The service was amazing and the trip was unforgettable! If you're looking for a great experience, look no further! I am so happy with the service and the trip was unforgettable!",
  },
  {
    id: 5,
    name: "Ava Smith",
    title: "Adventure of a Lifetime",
    message:
      "The entire trip exceeded my expectations. The landscapes were stunning, and the support from the team was top-notch. I can't wait to go back!",
  },
  {
    id: 6,
    name: "Michael Johnson",
    title: "Unforgettable Experience!",
    message:
      "Everything was perfect, from the accommodations to the activities. The staff went above and beyond to ensure we had a great time. Highly recommended!",
  },
];
