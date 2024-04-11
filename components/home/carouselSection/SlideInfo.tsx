import { CurrentSlideData, Data } from "@/components/home/CarouselSection";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white " />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className="mt-5 flex items-center gap-3 ">
        {/* Uncomment this if in future bookmark feature is required */}

        {/* <button
          className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-sm  transition 
            duration-300 ease-in-out hover:opacity-80 "
        >
          <IoMdBookmark className="text-xl " />
        </button> */}

        <button
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-sm font-thin transition duration-300 
            ease-in-out hover:bg-white hover:text-black "
        >
          DETAILS
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
