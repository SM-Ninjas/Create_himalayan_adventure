import { AnimatePresence } from "framer-motion";
import React from "react";

import BackgroundImage from "./carouselSection/BackgroundImage";
import Controls from "@/components/home/carouselSection/Controls";
import SlideInfo from "@/components/home/carouselSection/SlideInfo";
import Slides from "@/components/home/carouselSection/Slides";

export interface Data {
  id: number;
  category: string; // Optional, based on feedback
  img: string;
  description: string;
  title: string;
  location: string;
  days: string; 
  people: string; 
  subImages?: string[]; 
  overView?: OverView;
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
  data: Data;
  index: number;
};

const CarouselSection = () => {
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
        <div className="absolute z-20 h-full w-full">
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
      </AnimatePresence>
    </article>
  );
};

export default CarouselSection;

export const sliderData = [
  {
    id: 0,
    category: "Trekking",
    img: "/locations/annapurna.webp",
    description: "14 Days Annapurna Base Camp Trek guided by the professionals",
    title: "Annapurna Base Camp",
    location: "Gandaki",
    days: "14 days",
    people: "1-12",
    subImages: [
      // Add sub-images if available
      "/locations/annapurna_sub1.jpg",
      "/locations/annapurna_sub2.jpg",
    ],
    overView: {
      duration:
        "A full 14 days 13 nights worth of adventurous and exciting trek throughout the circuit",
      startingPoint:
        "Meet up at the designated location in Kathmandu at sharp 6 AM",
      endingPoint:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      peoples:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      category:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      bestSeason: "Spring and Autumn",
    },
  },
  {
    id: 1,
    category: "Trekking",
    img: "/locations/everest.avif",
    title: "Everest Base Camp",
    description:
      "Everest Base Camp Trek in short EBC Trek is one of the best hikes in the world",
    location: "Mahalangpur",
    days: "14 days",
    people: "1-12",
    subImages: ["/locations/everest_sub1.avif", "/locations/everest_sub2.avif"],
    overView: {
      duration:
        "A full 14 days 13 nights worth of adventurous and exciting trek throughout the circuit",
      startingPoint:
        "Meet up at the designated location in Kathmandu at sharp 6 AM",
      endingPoint:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      peoples:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      category:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      bestSeason: "Spring and Autumn",
    },
  },
  {
    id: 2,
    category: "National Parks",
    img: "/locations/chitwan.jpeg",
    title: "Chitwan National Park Tour",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "Bagmati",
    days: "14 days",
    people: "1-12",
    subImages: ["/locations/chitwan_sub1.png", "/locations/gil_sub1.png"],
  },
  {
    id: 3,
    category: "Lakes",
    img: "/locations/rara.jpeg",
    title: "Rara Lake Tour",
    description:
      "Amazingly deep blue lake with an hour-long shift is the best part you can see in desert Nepal",
    location: "Jumla",
    days: "14 days",
    people: "1-12",
    subImages: ["/locations/rara_sub1.jpeg", "/locations/rara_sub2.jpeg"],
    overView: {
      duration:
        "A full 14 days 13 nights worth of adventurous and exciting trek throughout the circuit",
      startingPoint:
        "Meet up at the designated location in Kathmandu at sharp 6 AM",
      endingPoint:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      peoples:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      category:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      bestSeason: "Spring and Autumn",
    },
  },
  {
    id: 4,
    category: "Adventure",
    img: "/locations/pokhara.jpeg",
    title: "Adverture in Pokhara",
    description:
      "Spectacular scenery, adventure activities, and accommodation and food choices galore",
    location: "Pokhara",
    days: "14 days",
    people: "1-12",
    subImages: ["/locations/pokhara_sub1.jpg", "/locations/pokhara_sub2.jpg"],
    overView: {
      duration:
        "A full 14 days 13 nights worth of adventurous and exciting trek throughout the circuit",
      startingPoint:
        "Meet up at the designated location in Kathmandu at sharp 6 AM",
      endingPoint:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      peoples:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      category:
        "Exciting journey comes to an end in Kathmandu at around 9-10 PM. Might highly depend on traffic.",
      bestSeason: "Spring and Autumn",
    },
  },
];

const initData = sliderData[0];
