import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { IoMdBookmark } from "react-icons/io";
import { Data, CurrentSlideData } from "@/components/home/CarouselSection";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className="w-5 h-1 mb-2 bg-white rounded-full " />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className="flex items-center gap-3 mt-5 ">
        {/* Uncomment this if in future bookmark feature is required */}
        
        {/* <button
          className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs  transition 
            duration-300 ease-in-out hover:opacity-80 "
        >
          <IoMdBookmark className="text-xl " />
        </button> */}
        
        <button
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-xs font-thin transition duration-300 
            ease-in-out hover:bg-white hover:text-black "
        >
          DETAILS
        </button>
      </motion.div>
    </>
  );
}

export default SlideInfo;
