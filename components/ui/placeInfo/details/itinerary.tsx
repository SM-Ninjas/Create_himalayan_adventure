import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { itineraryType } from "../../infoContent";
type itineraryTypes = {
  itineraryData?: itineraryType[]; // as it's array of objects
};

function Itinerary(itineraryData: itineraryTypes) {
  const [openIndex, setOpenIndex] = useState<null | number>(0);

  function handleToggleDetails(index: number) {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <div className="">
      {itineraryData.itineraryData?.map((data, i) => (
        <div className="mb-2" key={i}>
          <div
            className="flex regular-text cursor-pointer items-center small-text text-gray-900 font-medium "
            onClick={() => {
              handleToggleDetails(i);
            }}
          >
            {openIndex === i ? <FaAngleDown /> : <FaAngleRight />}
            Day:{" "} {data.day}
            <h1 className="regular-text ml-2">
              {data.description}
            </h1>
          </div>
          <h1 className="ml-6 p-2 text small-text text-gray-600 opacity-70">
            {openIndex === i && <div>{data.details}</div>}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Itinerary;
