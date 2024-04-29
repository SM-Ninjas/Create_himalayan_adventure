import { fadeIn, planetVariants, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import StartSteps from "../ui/text/startSteps";
import { TitleText } from "../ui/text/typingText";

const HowTo = () => {
  return (
    <section className={`relative z-10 w-screen`}>
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`get-started-bg`}
      >
        <div className="container flex gap-8 overflow-x-hidden lg:overflow-auto">
          <motion.div
            variants={planetVariants("left")}
            className={`hidden aspect-square flex-1 items-center justify-center lg:flex`}
          >
            {/* <Image
              src="/images/trek.jpg"
              alt="Get-Started"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            /> */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex flex-1 flex-col justify-center gap-12 py-24 lg:flex-[0.75]"
          >
            <div className="flex flex-col gap-y-2">
              {/* <TypingText title="How To Book" /> */}
              <TitleText
                title="Get Started by booking your first vacation"
                textStyles="text-white"
              />
            </div>
            <div className="flex flex-col gap-[24px]">
              {steps.map((step, index) => (
                <StartSteps
                  key={index}
                  title={step.title}
                  number={index + 1}
                  text={step.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowTo;

const steps = [
  {
    title: "Inquiry Form",
    description: "Tell us about a trip you want through our inquiry form",
  },
  {
    title: "Design Your Vacation",
    description: "Design your dream vacation together",
  },
  {
    title: "Book Your Trip",
    description: "Book your trip successfully and get ready to go!",
  },
  {
    title: "Prepare for Adventure",
    description: "Prepare and get ready for 100% satisfaction!",
  },
];
