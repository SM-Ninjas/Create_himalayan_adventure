import { fadeIn, staggerContainer, zoomIn } from "@/lib/motion";
import { motion } from "framer-motion";
import { TitleText } from "../ui/text/typingText";

interface FAQProps {
  faqRef: React.RefObject<HTMLDivElement>;
}

const FAQ = ({ faqRef }: FAQProps) => {
  return (
    <section className="container relative mx-auto" ref={faqRef}>
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
        className="mx-auto flex flex-col justify-center gap-y-16 px-4 py-8 md:p-8"
      >
        <div className="flex flex-col gap-y-4">
          <div>
            {/* <TypingText title="FAQ" /> */}
            <TitleText title="Frequently Asked Questions" />
          </div>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="regular-text"
          >
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to contact me.
          </motion.p>
        </div>
        <div className="space-y-4">
          <motion.details
            variants={zoomIn(1, 0.25)}
            className="w-full rounded-lg bg-white transition-all"
          >
            <summary className="focus-visible:ri px-4 py-6 focus:outline-none">
              What are the accomodation service like?
            </summary>
            <p className="small-text -mt-4 ml-4 px-4 py-6 pt-0">
              Accommodations during treks vary based on the route and location.
              Common options include lodges, teahouses, camping sites, and
              homestays. Accommodations on treks are generally basic, focusing
              on providing comfort and shelter. Luxurious options are rare, as
              the emphasis is on experiencing nature and local culture.
            </p>
          </motion.details>
          <motion.details
            variants={zoomIn(1.25, 0.25)}
            className="w-full rounded-lg bg-white"
          >
            <summary className="focus-visible:ri px-4 py-6 focus:outline-none">
              What kind of gear do I need for trekking?
            </summary>
            <p className="small-text -mt-4 ml-4 px-4 py-6 pt-0">
              Essential trekking gear includes sturdy hiking boots, appropriate
              clothing (layers for varying weather conditions), a backpack,
              water bottle, trekking poles, and a first aid kit. Depending on
              the trek's difficulty and duration, you may also need items like a
              sleeping bag, tent, and cooking equipment.
            </p>
          </motion.details>
          <motion.details
            variants={zoomIn(1.5, 0.25)}
            className="w-full rounded-lg bg-white"
          >
            <summary className="focus-visible:ri px-4 py-6 focus:outline-none">
              Can I rent trekking gear at the destination?
            </summary>
            <p className="small-text -mt-4 ml-4 px-4 py-6 pt-0">
              In many popular trekking destinations, gear rental shops are
              available where you can rent items like sleeping bags, trekking
              poles, and even backpacks. However, availability and quality may
              vary, so it's best to check in advance or bring your own gear if
              possible.
            </p>
          </motion.details>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
