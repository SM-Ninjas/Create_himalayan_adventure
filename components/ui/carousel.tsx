import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DataTypes as Place, subImages } from "../home/CarouselSection";

interface CarouselProps {
  images: subImages;
}

function Carousel({ images }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full">
      <div className={``}>
        <div className="flex gap-[30px]">
          <div className="ml-2 flex gap-4 overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="h-[230px] w-[60%] cursor-pointer rounded-[14px] object-cover"
                alt=""
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="ml-4 mt-4 flex gap-4">
          <div className="cursor-pointer rounded-[6px] border border-[#0075FF] p-2">
            <FaChevronLeft
              size={25}
              color="#0075FF"
              onClick={handlePrevClick}
            />
          </div>
          <div className="cursor-pointer rounded-[6px] border border-[#0075FF] p-2">
            <FaChevronRight
              size={25}
              color="#0075FF"
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
