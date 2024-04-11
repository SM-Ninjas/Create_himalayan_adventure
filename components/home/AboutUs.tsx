import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container flex flex-col items-center gap-8 md:flex-row"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="relative aspect-video flex-1 overflow-hidden rounded-lg"
      >
        <Image
          src="/images/trek.jpg"
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="zoom-in-transition rounded-lg transition-all hover:scale-110"
        />
      </motion.div>
      <div className="flex w-2/5 flex-col gap-y-4">
        <motion.h1
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="title-text"
        >
          How it all begun
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="regular-text"
        >
          Welcome to{" "}
          <span className="font-bold text-blue-600">
            Create Himalayan Adventure
          </span>
          , where passion meets adventure! We are a team of avid trekkers
          dedicated to crafting unforgettable journeys amidst nature's grandeur.
          With years of experience and a deep-rooted love for the great
          outdoors, we curate immersive trekking experiences that transcend
          boundaries and leave lasting memories. From the rugged terrains of
          remote mountains to the serene beauty of lush valleys, we invite you
          to join us on a quest for exploration and self-discovery. Embark on a
          journey with us, and let's conquer new heights together, one step at a
          time.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
