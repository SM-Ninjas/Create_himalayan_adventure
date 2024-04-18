import { sliderData, subImages } from "@/components/home/CarouselSection";
import Carousel from "@/components/ui/carousel";
import { useRouter } from "next/router";
import React from "react";
import { FaClock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { Data } from "@/components/home/CarouselSection";
import OverView from "@/components/ui/overView";

function PlacesDetails() {
  const router = useRouter();
  const index = router?.query.index;

  const place: Data | undefined = sliderData.find(
    (item) => item.id.toString() === index
  );

  const subImg: subImages = place?.subImages || [];

  return (
    <div className="mt-[100px] flex w-full justify-center">
      <div className="w-[80%]">
        <div className="">
          <div key={place?.id}>
            <div className="">
              <h1 className="text-[24px] font-bold">{place?.title}</h1>
              <div className="mb-[30px] flex gap-[30px]">
                <p className="flex items-center gap-2 text-[#1F1F1F]">
                  <FaClock size={20} /> {place?.days}{" "}
                </p>

                <p className="flex items-center gap-2 text-[#1F1F1F]">
                  <MdGroups size={30} />
                  {place?.people}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[45px]">
          <div className="w-[60%]">
            <div key={place?.id}>
              <img src={place?.img} className="rounded-[14px]" alt="" />
            </div>
          </div>
          <div className="w-[40%]">
            <Carousel images={subImg} />
          </div>
        </div>
        <div className="my-[30px]">
          <h1 className="text-[20px] font-semibold">Overview</h1>
          <div className="w-[60%]">
            <OverView placeData={place} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacesDetails;

//
