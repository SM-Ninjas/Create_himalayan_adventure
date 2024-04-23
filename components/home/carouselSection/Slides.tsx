import { DataTypes } from "@/components/home/CarouselSection";
import React from "react";
import SliderCard from "./SliderCard";

type Props = {
  data: DataTypes[];
};

function Slides({ data }: Props) {
  return (
    <div className="flex w-full gap-6 ">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
}

export default Slides;
