import { AnimatePresence } from "framer-motion";
import React from "react";

import Controls from "@/components/home/carouselSection/Controls";
import SlideInfo from "@/components/home/carouselSection/SlideInfo";
import Slides from "@/components/home/carouselSection/Slides";
import { carouselData } from "@/mock-data/carousel-data";
import BackgroundImage from "./carouselSection/BackgroundImage";

export type subImages = string[];
export interface DataTypes {
  id: number;
  slug: string;
  category: string; // Optional, based on feedback
  img: string;
  description: string;
  title: string;
  location: string;
  days: string;
  people: string;
  subImages?: subImages;
  overView?: OverView;
  equipment?: Equipment[];
}
export interface infoContentTypes {
  about: string;
  highLight: string;
  benefits: string;
  itenary: string;
}
export interface OverView {
  duration: string;
  startingPoint: string;
  endingPoint: string;
  peoples?: string;
  category?: string;
  bestSeason: string;
}

export type CurrentSlideData = {
  data: DataTypes;
  index: number;
};

export type Equipment = {
  title?: string;
  image?: string;
  description?: string;
};

const CarouselSection = () => {
  const [data, setData] = React.useState<DataTypes[]>(carouselData.slice(1));

  const [transitionData, setTransitionData] = React.useState<DataTypes>(
    carouselData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  const handleChangeSlide = (id: number) => {
    const currentData = data.find((item) => item.id === id);
    if (currentData) {
      setData((prev) => [
        ...prev.filter((item) => item.id !== id),
        transitionData ? transitionData : initData,
      ]);
      setCurrentSlideData({
        data: transitionData ? transitionData : carouselData[0],
        index: carouselData.findIndex((ele) => ele.img === currentData.img),
      });
      setTransitionData(currentData);
    }
  };

  return (
    <article
      className={`
       relative hidden min-h-screen w-full select-none flex-col gap-y-16 text-white antialiased xl:flex`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 w-full h-full">
          <div className="flex flex-col w-full h-full grid-cols-10 md:grid">
            <div className="flex flex-col justify-end flex-1 h-full col-span-4 px-5 mb-3 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="flex flex-col justify-start flex-1 h-full col-span-6 p-4 md:justify-center md:p-10">
              <Slides
                data={data}
                handleChangeSlide={(id: number) => handleChangeSlide(id)}
              />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={carouselData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </article>
  );
};

export default CarouselSection;

const initData = carouselData[0];
