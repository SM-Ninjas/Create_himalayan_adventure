"useClient";

import React from "react";
import { Data } from "../home/CarouselSection";
import { FaClock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FaFlag } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
interface OverViewProps {
  currentPlaceDataData: Data | undefined;
}
export default function OverView({ currentPlaceDataData }: OverViewProps) {
  return (
    <div className="w-[70%]">
      <h1 className="text-[24px] font-semibold">Overview</h1>
      <div className="grid grid-cols-3 gap-6 pt-6">
        <div className="flex gap-2">
          <div>
            <FaClock color="#0075FF" size={24} />
          </div>
          <div className="">
            <h1 className=" text-sm font-semibold">
              Duration:{currentPlaceDataData?.days}
            </h1>
            <p className="text-sm text-[#000] opacity-[70%]">
              {currentPlaceDataData?.overView?.duration}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M3.75 5C3.75 3.95833 4.11458 3.07292 4.84375 2.34375C5.57292 1.61458 6.45833 1.25 7.5 1.25C8.54167 1.25 9.42708 1.61458 10.1562 2.34375C10.8854 3.07292 11.25 3.95833 11.25 5C11.25 5.9375 10.9531 6.75271 10.3594 7.44563C9.76562 8.13813 9.02083 8.55729 8.125 8.70313V13.75H6.875V8.70313C5.97917 8.55729 5.23437 8.13813 4.64062 7.44563C4.04687 6.75271 3.75 5.9375 3.75 5Z"
                fill="#0075FF"
              />
            </svg>
          </div>
          <div className="">
            <h1 className=" text-sm font-semibold">Start From</h1>
            <p className="text-sm text-[#000] opacity-[70%]">
              {currentPlaceDataData?.overView?.startingPoint}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div>
            <FaFlag color="#0075FF" />
          </div>
          <div className="">
            <h1 className=" text-sm font-semibold">Ends At</h1>
            <p className="text-sm text-[#000] opacity-[70%]">
              {currentPlaceDataData?.overView?.endingPoint}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div>
            <MdGroups size={30} color="#0075FF" />
          </div>
          <div className="">
            <h1 className="text-sm font-semibold">
              Group: {currentPlaceDataData?.people} Peoples
            </h1>
            <p className="text-sm text-[#000] opacity-[70%]">
              {currentPlaceDataData?.overView?.peoples}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.7094 16C4.23932 16 3.83689 15.8461 3.50214 15.5384C3.16738 15.2307 3 14.8607 3 14.4286V6.57143C3 6.13929 3.16738 5.76935 3.50214 5.46161C3.83689 5.15387 4.23932 5 4.7094 5H13.2564C13.5413 5 13.8084 5.05893 14.0577 5.17679C14.307 5.29464 14.51 5.45833 14.6667 5.66786L17.6795 9.59643C17.8932 9.87143 18 10.1726 18 10.5C18 10.8274 17.8932 11.1286 17.6795 11.4036L14.6667 15.3321C14.51 15.5417 14.307 15.7054 14.0577 15.8232C13.8084 15.9411 13.5413 16 13.2564 16H4.7094ZM8.36325 11.4821L9.04701 12.8571C9.11823 13.0143 9.24644 13.0929 9.43162 13.0929C9.61681 13.0929 9.74501 13.0143 9.81624 12.8571L10.5 11.4821L11.9957 10.8536C12.1667 10.7881 12.2521 10.6702 12.2521 10.5C12.2521 10.3298 12.1667 10.2119 11.9957 10.1464L10.5 9.51786L9.81624 8.14286C9.74501 7.98571 9.61681 7.90714 9.43162 7.90714C9.24644 7.90714 9.11823 7.98571 9.04701 8.14286L8.36325 9.51786L6.86752 10.1464C6.69658 10.2119 6.61111 10.3298 6.61111 10.5C6.61111 10.6702 6.69658 10.7881 6.86752 10.8536L8.36325 11.4821Z"
                fill="#0075FF"
              />
            </svg>
          </div>
          <div className="">
            <h1 className="text-sm font-semibold">
              Activity: {currentPlaceDataData?.category}
            </h1>
            <p className="text-sm text-[#000] opacity-[70%]">
              {currentPlaceDataData?.overView?.category}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <TiWeatherPartlySunny color="#0075FF" size={26} />
          </div>
          <div className="">
            <h1 className="text-sm font-semibold">Best Season</h1>
            <p className="text-sm text-[#000] opacity-[70%]">
              {currentPlaceDataData?.overView?.bestSeason}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
