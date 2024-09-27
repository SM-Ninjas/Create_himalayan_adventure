import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type ItineraryProps = {
  itineraryData?: ItineraryType[];
};

type ItineraryType = {
  day: number;
  title: string;
  description: string;
};

const Itinerary: React.FC<ItineraryProps> = ({ itineraryData = [] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggleDetails = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="space-y-4 ">
      {itineraryData?.map((data, i) => (
        <div
          key={data.day}
          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300 ease-in-out"
        >
          <button
            onClick={() => handleToggleDetails(i)}
            className="w-full text-left p-4 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-xl font-semibold text-blue-600">
                  Day {data.day}:
                </span>
                <h3 className="text-lg font-medium text-gray-800">
                  {data.title}
                </h3>
              </div>
              {openIndex === i ? (
                <FaAngleUp className="text-blue-600 text-xl" />
              ) : (
                <FaAngleDown className="text-blue-600 text-xl" />
              )}
            </div>
          </button>
          {openIndex === i && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {data.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Itinerary;
