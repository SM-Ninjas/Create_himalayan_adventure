import React from "react";
import { DataTypes } from "../home/CarouselSection";

interface currentEquipmentData {
  currentEquipmentData: string[] | undefined;
}

function Equipment({ currentEquipmentData }: currentEquipmentData) {
  console.log(currentEquipmentData, "equipment");
  return (
    <div className="mt-12">
      <div>
        <h1 className="text-lg font-semibold">Gear Recommendations</h1>
        <p className="text-sm">
          Elevate your trekking experience with our carefully curated selection
          of recommended gear. From essential equipment to specialized tools,
          we've handpicked items to ensure you're fully prepared for the
          challenges and wonders of the trail. Gear up for your next adventure
          with these recommended essentials, and embark on your trekking journey
          with confidence and peace of mind.
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default Equipment;
