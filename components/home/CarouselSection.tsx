import { AnimatePresence } from "framer-motion";
import React from "react";
import { AnimatePresence } from "framer-motion";
import React from "react";

import BackgroundImage from "./carouselSection/BackgroundImage";
import Controls from "@/components/home/carouselSection/Controls";
import SlideInfo from "@/components/home/carouselSection/SlideInfo";
import Slides from "@/components/home/carouselSection/Slides";
import BackgroundImage from "./carouselSection/BackgroundImage";

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
  id: number;
  img: string;
  title: string;
  description: string;
  location: string;
};


export type CurrentSlideData = {
  data: Data;
  index: number;
  data: Data;
  index: number;
};

const CarouselSection = () => {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <article
      className={`
        relative flex min-h-screen w-full select-none flex-col gap-y-16 text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full ">
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
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
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </article>
  );
};
  );
};

export default CarouselSection;
export default CarouselSection;

const sliderData = [
  {
    img: "/locations/annapurna.webp",
    location: "Gandaki",
    description: "14 Days Annapurna Base Camp Trek guided by the professionals",
    title: "Annapurna Base Camp",
  },
  {
    img: "/locations/everest.avif",
    title: "Everest Base Camp",
    description:
      "Everest Base Camp Trek in short EBC Trek is one of the best hikes in the world",
    location: "Mahalangpur",
  },
  {
    img: "/locations/chitwan.jpeg",
    title: "Chitwan National Park Tour",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "Bagmati",
  },
  {
    img: "/locations/rara.jpeg",
    title: "Rara Lake Tour",
    description:
      "Amazingly deep blue lake with an hour-long shift is the best part you can see in desert Nepal",
    location: "Jumla",
  },
  {
    img: "/locations/pokhara.jpeg",
    title: "Adverture in Pokhara",
    description:
      "Spectacular scenery, adventure activities, and accommodation and food choices galore",
    location: "Pokhara",
  },
];

const initData = sliderData[0];

export const sliderData = [
  {
    id: 0,
    category: "Trekking",
    img: "/locations/annapurna.webp",
    description: "14 Days Annapurna Base Camp Trek guided by the professionals",
    title: "Annapurna Base Camp",
    location: "Gandaki",
    subImages: [
      // Add sub-images if available
      "/locations/annapurna_sub1.jpg",
      "/locations/annapurna_sub2.jpg",
    ],
  },
  {
    id: 1,
    category: "Trekking",
    img: "/locations/everest.avif",
    title: "Everest Base Camp",
    description:
      "Everest Base Camp Trek in short EBC Trek is one of the best hikes in the world",
    location: "Mahalangpur",
    subImages: ["/locations/everest_sub1.avif", "/locations/everest_sub2.avif"],
  },
  {
    id: 2,
    category: "National Parks",
    img: "/locations/chitwan.jpeg",
    title: "Chitwan National Park Tour",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "Bagmati",
    subImages: ["/locations/chitwan_sub1.png", "/locations/chitwan_sub2.jpg"],
  },
  {
    id: 3,
    category: "Lakes",
    img: "/locations/rara.jpeg",
    title: "Rara Lake Tour",
    description:
      "Amazingly deep blue lake with an hour-long shift is the best part you can see in desert Nepal",
    location: "Jumla",
    subImages: ["/locations/rara_sub1.jpeg", "/locations/rara_sub2.jpeg"],
  },
  {
    id: 4,
    category: "Adventure",
    img: "/locations/pokhara.jpeg",
    title: "Adverture in Pokhara",
    description:
      "Spectacular scenery, adventure activities, and accommodation and food choices galore",
    location: "Pokhara",
    subImages: ["/locations/pokhara_sub1.jpg", "/locations/pokhara_sub2.jpg"],
  },
];

const initData = sliderData[0];
