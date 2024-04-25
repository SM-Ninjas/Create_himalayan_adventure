import React from "react";
// import { DataTypes } from "../home/CarouselSection";
import { Equipment as EquipmentTypes } from "../home/CarouselSection";

interface currentEquipmentData {
  currentEquipmentData: EquipmentTypes[] | undefined;
}

function Equipment({ currentEquipmentData }: currentEquipmentData) {

  return (
    <div className="mt-12">
      <div>
        <h1 className="text-lg font-semibold">Gear Recommendations</h1>
        <p className="text-sm mt-2 opacity-70">
          Elevate your trekking experience with our carefully curated selection
          of recommended gear. From essential equipment to specialized tools,
          we've handpicked items to ensure you're fully prepared for the
          challenges and wonders of the trail. Gear up for your next adventure
          with these recommended essentials, and embark on your trekking journey
          with confidence and peace of mind.
        </p>
      </div>
      <div className="flex justify-between mt-4 p-[2px]">
        {currentEquipmentData?.map((equipment, i) => (
          <div key={i} className="flex m-2  bg-[#FFFF] rounded-[8px] border">
            <img className="w-[110px] h-[125px] rounded-[8px]" src={equipment.image} alt="alts" />
            <div className="p-2">
              <h1 className="text-sm text-gray-800 font-semibold mt-1">
                {equipment.title}
              </h1>
              <p className="text-[12px] mt-1 text-gray-600 ">{equipment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipment;
