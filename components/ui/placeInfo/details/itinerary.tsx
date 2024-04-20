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
    <div className="mt-[2rem]  w-[70%]">
      {itineraryData.itineraryData?.map((data, i) => (
        <div className="my-4" key={i}>
          <div
            className="flex cursor-pointer items-center text-[12px] font-medium "
            onClick={() => {
              handleToggleDetails(i);
            }}
          >
            {openIndex === i ? <FaAngleDown /> : <FaAngleRight />}
            Day:{" "}
            <h1 className="">
              {data.day} {data.description}
            </h1>
          </div>
          <p className="p-2 text-[12px] opacity-70">
            {openIndex === i && <div>{data.details}</div>}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Itinerary;
