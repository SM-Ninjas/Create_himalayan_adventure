import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

function WriteReview() {
  return (
    <div className="flex items-center justify-center h-full">
      <Link
        href={
          "https://www.tripadvisor.com/UserReviewEdit-g293890-d11877391-Create_Himalaya_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
        }
      >
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg"
        >
          <span className="text-2xl mr-3">Write A Review</span>
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaArrowRight size={30} />
          </motion.div>
        </motion.button>
      </Link>
    </div>
  );
}

export default WriteReview;
