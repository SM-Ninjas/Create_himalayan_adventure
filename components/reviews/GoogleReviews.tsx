import Link from "next/link";
import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const GoogleReviewCard = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-lg">
        <div className="p-6">
          <Link href="https://www.google.com/search?q=Create+Himalaya+Adventure+Pvt.+Ltd.&stick=H4sIAAAAAAAA_-NgU1I1qDC2TE0ytDQxSTFITDUxs7C0MqgwTEk0M01JNkxOTrY0tzAxXsSq7FyUmliSquCRmZuYk1iZqOCYUpaaV1JalKoQUFaip-BTkqIHAH6tCu5PAAAA&hl=en-GB&mat=CQ8CBFmHS7SRElUBEKoLacDdeC8Hfdo7L_47SJHdECgmhG7sxOHcP7yiQXbcLJSBin5or-Ct-J2_OUKfs5K8T1W-qlWGcMY9QBtDl36CU_3qMGO_qkSS9oZd0HRx5j8wGggHBiCnAhq8dA&authuser=0&ved=2ahUKEwiqoPa-75SIAxW_SmwGHd5xNRIQ-MgIKAN6BAhCEBE">
            <div className="flex flex-col items-center text-center">
              <p className="text-2xl font-bold mb-3 text-gray-800">Create Himalaya Adventure</p>
              <div className="flex items-center gap-4 mb-4">
                <FcGoogle size={60} />
                <h1 className="text-xl font-medium text-gray-700">Google Reviews</h1>
              </div>
              <div className="flex mb-4">
                <MdOutlineStarPurple500 size={40} color="#FFAC33" />
                <MdOutlineStarPurple500 size={40} color="#FFAC33" />
                <MdOutlineStarPurple500 size={40} color="#FFAC33" />
                <MdOutlineStarPurple500 size={40} color="#FFAC33" />
                <MdOutlineStarPurple500 size={40} color="#FFAC33" />
              </div>
              <p className="text-gray-800 mb-2 text-lg font-semibold">5 Stars</p>
              <p className="text-gray-600 text-sm">Based on 30 reviews</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewCard;
