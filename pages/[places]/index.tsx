import { sliderData } from "@/components/home/CarouselSection";
import Carousel from "@/components/ui/carousel";
import { useRouter } from "next/router";
import React from "react";
import { FaClock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { Data } from "@/components/home/CarouselSection";

function PlacesDetails() {
  const router = useRouter();
  const { places } = router.query;

  const filtered: Data[] = sliderData.filter(
    (slider) => slider.location === places
  );
 

  return (
    <div className="mt-[100px] flex w-full justify-center">
      <div className="w-[80%] border">
        <div className=" ">
          {filtered.map((place) => (
            <div key={place.id}>
              <div className="">
                <h1 className="text-[24px] font-bold">{place.title}</h1>
                <div className="mb-[30px] flex gap-[30px]">
                  <p className="flex items-center gap-2 text-[#1F1F1F]">
                    <FaClock size={20} />
                    {place.days}
                  </p>
                  <p className="flex items-center gap-2 text-[#1F1F1F]">
                    <MdGroups size={30} />
                    {place.people}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          {/* here lies the carousel */}
          <Carousel filteredData={filtered} />
        </div>
      </div>
    </div>
  );
}

export default PlacesDetails;
