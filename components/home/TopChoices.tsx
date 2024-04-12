"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, textVariant } from "@/lib/motion";

interface CardProps {
  url: string;
  title: string;
  id: number;
}

const TopChoices = () => {
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
    <section className="px-sm lg:px-0">
      <motion.article
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="relative flex flex-col items-start gap-y-2"
      >
        <div className="sticky flex flex-col max-w-6xl mx-auto top-20 gap-y-4">
          <motion.h2 className="title-text" variants={textVariant(0.2)}>Explore More</motion.h2>
          <motion.p variants={textVariant(0.25)} className="regular-text">
          Embark on a journey of discovery with our "Explore More" section, where adventure knows no bounds. Dive deeper into the heart of nature's majesty, uncovering hidden trails, breathtaking vistas, and the serenity of untouched landscapes. Whether you're a seasoned trekker or a novice explorer, our curated collection of destinations offers something for everyone. From rugged mountains to lush forests, each trek promises an immersive experience that stirs the soul and leaves a lasting impression. Dare to wander, dare to discover, and let the call of the wild lead you to new horizons. Start your adventure today and unlock the wonders of the great outdoors.
          </motion.p>
        </div>

        <div ref={targetRef} className="relative h-[300vh]">
          <div className="sticky top-48 w-screen flex h-[75vh] items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
              {exploreMoreItems.map((item) => (
                <Card card={item} key={item.id} />
              ))}
              <div className="h-[450px] w-[450px] bg-white relative">
                <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="p-8 text-xl font-black text-blue-600 uppercase rounded-md bg-gradient-to-br from-blue-600/20 to-blue-600/0 backdrop-blur-lg">
                        View More
                    </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </section>
  );
};

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-gray-200 rounded-lg">
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={card.url}
          alt={card.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="p-8 text-xl font-black text-white uppercase rounded-md bg-gradient-to-br from-blue-600/20 to-blue-600/0 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default TopChoices;

export const exploreMoreItems = [
    {
      id: 1,
      url: "/locations/gosaikunda.webp",
      title: "Gosaikunda Trek",
    },
    {
      id: 2,
      url: "/locations/darjeeling.webp",
      title: "Darjeeling Tour",
    },
    {
      id: 3,
      url: "/locations/muktinath.jpeg",
      title: "Muktinath Trek",
    },
    {
      id: 4,
      url: "/locations/pokhara.jpeg",
      title: "Pokhara Aventure",
    },
    {
      id: 5,
      url: "/locations/upper-mustang.jpeg",
      title: "Upper Mustang Trek",
    },
    {
      id: 6,
      url: "/locations/rara.jpeg",
      title: "Trek to Rara Lake",
    },
    {
      id: 7,
      url: "/locations/annapurna.webp",
      title: "Annapurna Circuit Trek",
    },
    {
      id: 8,
      url: "/locations/everest.avif",
      title: "Everest Base Camp",
    },
    {
      id: 9,
      url: "/locations/chitwan.jpeg",
      title: "Chitwan Sightseeing",
    },
  ];