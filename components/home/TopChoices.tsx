"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/lib/motion";
import { TitleText } from "../ui/text/typingText";
import { useRouter } from "next/router";

interface CardProps {
  url: string;
  title: string;
  id: number;
  slug: string;
}

const TopChoices = () => {
  const router = useRouter();

  return (
    <section className="relative mx-0 lg:px-0">
      <motion.article
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="relative flex flex-col items-center gap-y-8"
      >
        <div className="container mx-auto flex flex-col gap-y-4 px-4 lg:px-0">
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

        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreMoreItems.map((item) => (
              <Card card={item} key={item.id} />
            ))}

            <div
              key="explore-more"
              onClick={() => router.push("/treks")}
              // className="my-auto mx-auto h-16 w-40  rounded-lg bg-blue-600 text-white font-bold text-xl border "
              className="rounded-lg w-full h-full flex justify-center items-center bg-gray-200   text-blue-600 font-bold"
            
            >
              <button className="px-6 py-3 emphasized-text text-gray-800 rounded-lg hover:bg-blue-500 hover:text-white">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
};

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="group relative h-[300px] overflow-hidden rounded-lg bg-gray-200 ">
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={card.url}
          alt={card.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <a
        href={`/${card.slug}`}
        className="absolute inset-0 z-10 flex h-full w-full items-end justify-start bg-gradient-to-b from-transparent to-gray-900/80 p-4"
      >
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
    slug: "treks/Gosaikunda_Lake_Trek",
  },
  {
    id: 3,
    url: "/locations/muktinath.jpeg",
    title: "Muktinath Helicopter Tour from Pokhara",
    slug: "treks/Muktinath_Helicopter_Tour",
  },
  {
    id: 4,
    url: "/locations/pokhara.jpeg",
    title: "Pokhara Adventure",
    slug: "treks/pokhara_adventure",
  },
  {
    id: 5,
    url: "/locations/upper-mustang.jpeg",
    title: "Upper Mustang Trek",
    slug: "treks/Upper_Mustang_Trek",
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
  }
];
