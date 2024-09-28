// components/ui/Equipment.tsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface EquipmentItem {
  _id: string;
  image: string;
  title: string;
  description: string;
}

interface EquipmentProps {
  currentEquipmentData: EquipmentItem[];
}

function Equipment({ currentEquipmentData }: EquipmentProps) {
  console.log(currentEquipmentData, "current equipment data");

  if (!currentEquipmentData || currentEquipmentData.length === 0) {
    return <p>No equipment recommendations available.</p>;
  }

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
      <div className="grid grid-cols-1 xl:grid-cols-4 mt-4 p-1">
        {currentEquipmentData.map((equipment) => (
          <div
            key={equipment._id}
            className="flex m-2 bg-white rounded-lg border shadow-md"
          >
            <img
              className="w-28 h-32 object-cover rounded-l-lg"
              src={equipment.image}
              alt={equipment.title}
            />
            <div className="p-2 flex flex-col justify-between">
              <h2 className="text-sm font-semibold text-gray-800">
                {equipment.title}
              </h2>
              <p className="text-xs text-gray-600">{equipment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipment;
