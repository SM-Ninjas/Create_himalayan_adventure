"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { staggerContainer, textVariant } from "@/lib/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaMouse } from "react-icons/fa";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TitleText } from "../ui/text/typingText";

interface CardProps {
  url: string;
  title: string;
  id: number;
  slug: string; 
}

interface TopChoicesProps {
  scrollToSection: () => void;
}

const TopChoices = ({ scrollToSection }: TopChoicesProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  // dispose useScroll
  useEffect(() => {
    return () => {
      scrollYProgress.destroy();
    };
  }, [scrollYProgress]);

  return (
    <section className="relative mx-0 lg:px-0">
      <motion.article
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="relative flex flex-col items-center gap-y-2"
      >
        <div className="container top-20 mx-auto flex flex-col gap-y-4 px-4 lg:sticky lg:px-0">
          <TitleText title="Explore More" />
          <motion.p variants={textVariant(0.25)} className="regular-text">
            Embark on a journey of discovery with our "Explore More" section,
            where adventure knows no bounds. Dive deeper into the heart of
            nature's majesty, uncovering hidden trails, breathtaking vistas, and
            the serenity of untouched landscapes. Whether you're a seasoned
            trekker or a novice explorer, our curated collection of destinations
            offers something for everyone. From rugged mountains to lush
            forests, each trek promises an immersive experience that stirs the
            soul and leaves a lasting impression. Dare to wander, dare to
            discover, and let the call of the wild lead you to new horizons.
            Start your adventure today and unlock the wonders of the great
            outdoors.
          </motion.p>
        </div>

        <div ref={targetRef} className="relative hidden h-[300vh] lg:block">
          <div className="sticky top-56 flex h-[75vh] w-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
              {exploreMoreItems.map((item) => (
                <Card card={item} key={item.id} />
              ))}
              <div className="relative h-[450px] w-[450px] bg-white">
                <div className="absolute inset-0 z-10 grid place-content-center">
                  <p className="rounded-md bg-gradient-to-br from-blue-600/20 to-blue-600/0 p-8 text-xl font-black uppercase text-blue-600 backdrop-blur-lg">
                    View More
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div
            className="sticky left-1/2 top-[90%] h-max w-max -translate-x-1/2 cursor-pointer rounded-full bg-blue-600 p-4"
            onClick={scrollToSection}
          >
            <FaMouse className="h-6 w-6 text-white" />
          </div>
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
            className="mySwiper w-full"
          >
            {exploreMoreItems.map((item, index) => (
              <SwiperSlide key={index}>
                <a href={`/${item.slug}`} className="flex flex-col gap-y-2">
                  <div className="relative h-96 w-auto">
                    <Image
                      src={item.url}
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
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="block w-full px-4 md:hidden">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation]}
            className="mySwiper w-full"
          >
            {exploreMoreItems.map((item, index) => (
              <SwiperSlide key={index}>
                <a href={`/${item.slug}`} className=" border border-black flex flex-col gap-y-2">
                  <div className="relative h-96 w-auto">
                    <Image
                      src={item.url}
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
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.article>
    </section>
  );
};

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden rounded-lg bg-gray-200">
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={card.url}
          alt={card.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <a href={`/${card.slug}`} className="absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-gradient-to-b from-transparent to-gray-900/80 p-4">
        <p className="text-xl font-black uppercase text-white">{card.title}</p>
      </a>
    </div>
  );
};

export default TopChoices;

export const exploreMoreItems = [
  {
    id: 1,
    url: "/locations/gosaikunda.webp",
    title: "Gosaikunda Trek",
    slug: "treks/gosaikunda_trek",
  },
  {
    id: 2,
    url: "/locations/darjeeling.webp",
    title: "Darjeeling Tour",
    slug: "treks/five_himalayan_viewpoint_tour_pokhara",
  },
  {
    id: 3,
    url: "/locations/muktinath.jpeg",
    title: "Muktinath Trek",
    slug: "treks/muktinath_trek",
  },
  {
    id: 4,
    url: "/locations/pokhara.jpeg",
    title: "Pokhara Aventure",
    slug: "treks/pokhara_day_tour_sunrise_sarangkot",
  },
  {
    id: 5,
    url: "/locations/upper-mustang.jpeg",
    title: "Upper Mustang Trek",
    slug: "treks/upper_mustang_trek",
  },
  {
    id: 6,
    url: "/locations/rara.jpeg",
    title: "Trek to Rara Lake",
    slug: "treks/rara_lake_tour",
  },
  {
    id: 7,
    url: "/locations/annapurna.webp",
    title: "Annapurna Circuit Trek",
    slug: "treks/annapurna_circuit_trek",
  },
  {
    id: 8,
    url: "/locations/everest.avif",
    title: "Everest Base Camp",
    slug: "treks/ebc_trek_14_days",
  },
  {
    id: 9,
    url: "/locations/chitwan.jpeg",
    title: "Chitwan Sightseeing",
    slug: "treks/chitwan_national_park_tour",
  },
];
