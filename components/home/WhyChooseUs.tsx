import { fadeIn, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

import { FaFire, FaUserGraduate } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

interface Reasons {
  title: string;
  description: string;
  icon: IconType;
}

const WhyChooseUs = () => {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={cn("container", "flex flex-col gap-8")}
    >
      <div className="flex items-center justify-between gap-8">
        <div className="flex-[0.5]">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="title-text"
          >
            Why Choose Create Himalayan Adventure?
          </motion.h2>
        </div>
        <div className="flex-1">
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="emphasized-text text-sm text-gray-600"
          >
            Choose us for your trekking adventure because we're more than just
            guides; we're your companions on the path to discovery. With our
            expertise, tailored experiences, commitment to sustainability, and
            unwavering focus on safety, we ensure every step of your journey is
            memorable and meaningful. Join us, and let's explore the world
            together
          </motion.p>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-3 gap-8">
        {reasons.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "tween", 0.2 * (index + 1), 1)}
            className="relative flex h-full flex-col gap-y-4 rounded-lg bg-white px-6 pb-6 pt-16"
            key={index}
          >
            <div className="absolute -top-8 left-6 rounded-md bg-gray-800 p-6">
              <item.icon className="text-lg text-white" />
            </div>

            <h3 className="emphasized-text font-bold text-gray-800">
              {item.title}
            </h3>
            <p className="regular-text text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;

const reasons: Reasons[] = [
  {
    title: "Expertise",
    description:
      "With years of experience in organizing trekking expeditions, our team comprises seasoned professionals who possess intimate knowledge of the terrains you'll tread. From the rugged paths of the Himalayas to the lush trails of South America, we've explored them all, ensuring your safety and satisfaction every step of the way.",
    icon: FaUserGraduate,
  },
  {
    title: "Safety First",
    description:
      "Your safety is our top priority. From thorough equipment checks to trained guides accompanying you throughout the trek, we leave no stone unturned in ensuring a secure and enjoyable expedition. Rest assured, you're in capable hands every step of the way.",
    icon: MdHealthAndSafety,
  },
  {
    title: "Passion for Adventure",
    description:
      "Above all, we're passionate about what we do. We live and breathe adventure, and nothing brings us more joy than sharing our love for trekking with fellow enthusiasts like you. Whether you're seeking solace amidst towering peaks or seeking camaraderie on the trail, we're here to turn your trekking dreams into reality.",
    icon: FaFire,
  },
];
