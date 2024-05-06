import { DataTypes } from "@/components/home/CarouselSection";
import SliderCard from "./SliderCard";

type Props = {
  data: DataTypes[];
  handleChangeSlide: (id: number) => void;
};

function Slides({ data, handleChangeSlide }: Props) {
  return (
    <div className="flex w-full gap-6 ">
      {data.map((data) => {
        return (
          <SliderCard
            key={data.id}
            data={data}
            handleChangeSlide={(id: number) => handleChangeSlide(id)}
          />
        );
      })}
    </div>
  );
}

export default Slides;
