import { staggerContainer, textVariant } from "@/lib/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import useBlogHook from "@/hooks/useBlogHook";
import Spinner from "@/components/spinner";

interface BlogsProps {
  blogsRef: React.RefObject<HTMLElement>;
}
export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  createdAt: string;
  metaDesc: string;
  content: string;
  coverImage: string;
  isFeatured: boolean;
}

const BlogsComponentHome = ({ blogsRef }: BlogsProps) => {
  const { data, isLoading, isError } = useBlogHook();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8 text-blue-600">
        Failed to load blogs.
      </div>
    );
  }

  // Replace static blog data with dynamically fetched data
  const blogPosts = data?.blogs || [];

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
          {blogPosts.map((item: BlogPost) => (
            <SwiperSlide key={item._id}>
              <Link href={`/blogs/${item._id}`}>
                <div className="flex flex-col gap-y-2">
                  <div className="relative h-96 w-auto">
                    <Image
                      src={
                        (item.coverImage && item.coverImage) ||
                        "/default-image.jpg"
                      }
                      alt={item.title}
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
          {blogPosts.map((item: BlogPost) => (
            <SwiperSlide key={item._id}>
              <Link href={`/blogs/${item.slug}`}>
                <div className="flex flex-col gap-y-2">
                  <div className="relative h-96 w-auto">
                    <Image
                      src={
                        (item.coverImage && item.coverImage) ||
                        "/default-image.jpg"
                      }
                      alt={item.title}
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
          {blogPosts.map((item: BlogPost) => (
            <SwiperSlide key={item._id}>
              <Link href={`/blogs/${item.slug}`}>
                <div className="flex flex-col gap-y-2">
                  <div className="relative h-96 w-auto">
                    <Image
                      src={
                        (item.coverImage && item.coverImage) ||
                        "/default-image.jpg"
                      }
                      alt={item.title}
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
