import { sliderData, subImages } from "@/components/home/CarouselSection";
import Carousel from "@/components/ui/carousel";
import { useRouter } from "next/router";
import React from "react";
import { FaClock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { Data } from "@/components/home/CarouselSection";
import OverView from "@/components/ui/overView";
import PlaceInfo from "@/components/ui/placeInfo";

function PlacesDetails() {
  const router = useRouter();
  const index = router?.query.index;

  const currentPlaceData: Data | undefined = sliderData.find(
    (item) => item.id.toString() === index
  );

  const subImg: subImages = currentPlaceData?.subImages || [];

  return (
    <div className="container">
      <div className="w-[80%]">
        <div className="">
          <div key={currentPlaceData?.id}>
            <div className="">
              <h1 className="text-[24px] font-bold">
                {currentPlaceData?.title}
              </h1>
              <div className="mb-[30px] flex gap-[30px]">
                <p className="flex items-center gap-2 text-[#1F1F1F]">
                  <FaClock size={20} /> {currentPlaceData?.days}{" "}
                </p>

                <p className="flex items-center gap-2 text-[#1F1F1F]">
                  <MdGroups size={30} />
                  {currentPlaceData?.people}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[45px]">
          <div className="w-[60%]">
            <div key={currentPlaceData?.id}>
              <img
                src={currentPlaceData?.img}
                className="rounded-[14px]"
                alt=""
              />
            </div>
          </div>
          <div className="w-[40%]">
            <Carousel images={subImg} />
          </div>
        </div>
        <div className="my-[30px]">
          <h1 className="text-[20px] font-semibold">Overview</h1>
          <div className="w-[60%]">
            <OverView currentPlaceDataData={currentPlaceData} />
          </div>
        </div>
        <div>
          <PlaceInfo />
        </div>
      </div>
    </div>
  );
}

export default PlacesDetails;

//
