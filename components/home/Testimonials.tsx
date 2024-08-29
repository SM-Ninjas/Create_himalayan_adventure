import { fadeIn, staggerContainer, zoomIn } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText } from "../ui/text/typingText";

const Testimonials = () => {
  return (
    <div className="mt-4">
      <motion.div
        variants={staggerContainer(0, 0)}
        className="px-4 mx-auto sm:px-6 container"
      >
        <div className="">
          {/* Section header */}
          <div className="pb-12 mx-auto md:pb-16">
            <TitleText title="A Message of Adventure and Connection" />
            <motion.p
              variants={fadeIn("up", "tween", 0.25, 1)}
              className="mt-4 regular-text"
            >
              Step into the world of adventure and exploration with insights
              straight from the heart of our founder. Discover the driving
              passion behind our treks, the commitment to meaningful
              connections, and the transformative power of nature. Join us as we
              delve into the essence of adventure and the spirit of discovery
            </motion.p>
          </div>

          {/* Testimonials */}
          <motion.div variants={zoomIn(1, 0.5)} className="mx-auto mt-4">
            <div className="relative flex items-start bg-white rounded">
              {/* Testimonial */}
              <div className="px-4 py-8 pt-20 mx-4 md:mx-0 lg:px-12">
                <div className="absolute top-0 -mt-8 transform">
                  <svg
                    className="absolute top-0 right-0 w-16 h-16 -mt-3 -mr-8 text-blue-600 fill-current"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <div className="w-24 h-24">
                    <Image
                      className="relative object-top rounded-full"
                      src="/DirectorImg.jpeg"
                      alt="Testimonial from Founder"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <blockquote className="mb-4 regular-text">
                  “As the founder of our trekking company, I am thrilled to
                  share with you the essence of our journey. From the very core
                  of my passion for exploration and connection, each step we
                  take embodies a commitment to creating unforgettable
                  experiences. Our treks are not just about reaching summits or
                  traversing landscapes; they are about forging bonds with
                  nature, cultures, and fellow adventurers. Join us as we embark
                  on a quest for discovery, where every trail leads to new
                  horizons and every moment is infused with the spirit of
                  adventure. “
                </blockquote>
                <cite className="block mb-1 not-italic font-bold emphasized-text">
                Ram Chandra lamichhane
                </cite>
                <div className="text-gray-600 regular-text">
                  <span>Managing Director</span>{" "}
                  <a className="text-blue-600 hover:underline" href="https://np.linkedin.com/in/ramchandra-lamichhane-b82685114">
                    @Reach Director
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
