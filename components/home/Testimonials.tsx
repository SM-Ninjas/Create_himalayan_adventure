import { fadeIn, staggerContainer, zoomIn } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText } from "../ui/text/typingText";

const Testimonials = () => {
  return (
    <section className="container relative">
      {/* Illustration behind content */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -mb-32 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <motion.div
        variants={staggerContainer(0, 0)}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto pb-12 text-center md:pb-16">
            <TitleText title="A Message of Adventure and Connection" />
            <motion.p
              variants={fadeIn("up", "tween", 0.25, 1)}
              className="regular-text mt-4"
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
            <div className="relative flex items-start rounded bg-white">
              {/* Testimonial */}
              <div className="mx-4 px-12 py-8 pt-20 text-center md:mx-0">
                <div className="absolute left-1/2 top-0 -mt-8 -translate-x-1/2 transform">
                  <svg
                    className="absolute right-0 top-0 -mr-8 -mt-3 h-16 w-16 fill-current text-blue-600"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <div className="h-24 w-24">
                    <Image
                      className="relative rounded-full object-top"
                      src="/images/ceo.jpg"
                      alt="Testimonial from Founder"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <blockquote className="regular-text mb-4">
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
                <cite className="mb-1 block text-lg font-bold not-italic">
                  Founder Name
                </cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <a className="text-blue-600 hover:underline" href="#0">
                    @Reach Founder
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
