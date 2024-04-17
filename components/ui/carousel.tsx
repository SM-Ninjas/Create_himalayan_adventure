import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Data as Place } from "../home/CarouselSection";

interface CarouselProps {
  filteredData: Place[];
}

function Carousel({ filteredData }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === filteredData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full">
      {filteredData.map((place, index) => (
        <div key={place.id} className={`flex justify-center gap-4`}>
          <div>
            <img src={place.img} className="rounded-[14px]" alt="" />
          </div>
          <div className="">
            {place.subImages?.map((img, subIndex) => (
              <div key={subIndex} className="ml-2">
                <img
                  src={img}
                  className="cursor-pointer rounded-[14px]"
                  alt=""
                  onClick={() => setCurrentImageIndex(index)}
                />
              </div>
            ))}
            <div className="mt-2 flex ml-2">
              <FaChevronLeft
                size={35}
                color="#0075FF"
                className="cursor-pointer rounded-[6px] border border-[#0075FF]"
                style={{ border: "1px solid #0075FF" }}
                onClick={handlePrevClick}
              />
              <FaChevronRight
                size={35}
                color="#0075FF"
                className="ml-2 cursor-pointer rounded-[6px] border border-[#0075FF]"
                style={{ border: "1px solid #0075FF" }}
                onClick={handleNextClick}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
