import { staggerContainer, textVariant } from "@/lib/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { trekkingData } from "@/blogData";

interface BlogsProps {
  blogsRef: React.RefObject<HTMLElement>;
}

const BlogsComponentHome = ({ blogsRef }: BlogsProps) => {
  // Replace the old blog data with trekkingData
  const blogPosts = trekkingData;

  return (
    <motion.article
      ref={blogsRef}
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col gap-y-4 px-4"
    >
      <div className="container">
        <motion.h2 className="title-text" variants={textVariant(0.2)}>
          Tips, Guides and Blogs
        </motion.h2>
      </div>

      {/* Desktop View */}
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
          {blogPosts.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/blogs/${item.slug}`}>
                <div className="flex flex-col gap-y-2">
                  <div className="relative h-96 w-auto">
                    <Image
                      src={
                        (item.images && item.images[0]?.url) ||
                        "/default-image.jpg"
                      }
                      alt={
                        (item.images && item.images[0]?.altText) || item.title
                      }
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-gradient-to-b from-transparent to-gray-900/80 p-4">
                      <p className="text-xl font-black uppercase text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tablet View */}
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
          {blogPosts.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/blogs/${item.slug}`}>
                <div className="flex flex-col gap-y-2">
                  <div className="relative h-96 w-auto">
                    <Image
                      src={
                        (item.images && item.images[0]?.url) ||
                        "/default-image.jpg"
                      }
                      alt={
                        (item.images && item.images[0]?.altText) || item.title
                      }
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-gradient-to-b from-transparent to-gray-900/80 p-4">
                      <p className="text-xl font-black uppercase text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile View */}
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
          {blogPosts.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/blogs/${item.slug}`}>
                <div className="flex flex-col gap-y-2">
                  <div className="relative h-96 w-auto">
                    <Image
                      src={
                        (item.images && item.images[0]?.url) ||
                        "/default-image.jpg"
                      }
                      alt={
                        (item.images && item.images[0]?.altText) || item.title
                      }
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-gradient-to-b from-transparent to-gray-900/80 p-4">
                      <p className="text-xl font-black uppercase text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.article>
  );
};

export default BlogsComponentHome;
