import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/ui/Header";
import BackgroundImage from "@/components/home/carouselSection/BackgroundImage";
import Slides from "@/components/home/carouselSection/Slides";
import SlideInfo from "@/components/home/carouselSection/SlideInfo";
import Controls from "@/components/home/carouselSection/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
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
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none text-white antialiased`}
    >
      <Header />
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 w-full h-full ">
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
    </main>
  );
}

const sliderData = [
  {
    img: "/locations/annapurna.webp",
    location: "Gandaki",
    description:
      "14 Days Annapurna Base Camp Trek guided by the professionals",
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
