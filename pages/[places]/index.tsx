import { sliderData, subImages } from "@/components/home/CarouselSection";
import Carousel from "@/components/ui/carousel";
import { useRouter } from "next/router";
import { FaClock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { DataTypes } from "@/components/home/CarouselSection";
import OverView from "@/components/ui/overView";
import PlaceInfo from "@/components/ui/placeInfo";
import InfoCard from "@/components/ui/infoCard";
import Gallery from "@/components/ui/Gallery";
import Equipment from "@/components/ui/Equipment";

function PlacesDetails() {
  const router = useRouter();
  const index = router?.query.index;

  const currentPlaceData: DataTypes | undefined = sliderData.find(
    (item) => item.id.toString() === index
  );

  const subImg: subImages = currentPlaceData?.subImages || [];
  const equiment = currentPlaceData?.equipment;
  console.log(equiment,'quiu');

  return (
    <div className="container mt-[5rem]">
      <div key={currentPlaceData?.id}>
        <div className="">
          <h1 className="text-[24px] font-bold">{currentPlaceData?.title}</h1>
          <div className="mb-[30px] flex gap-[30px]">
            <p className="flex items-center gap-2 text-[#1F1F1F]">
              <FaClock size={20} /> {currentPlaceData?.days}{" "}
            </p>

            <p className="flex items-center gap-2 text-[#1F1F1F]">
              <MdGroups size={30} />
              {currentPlaceData?.people}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-12">
        <div className="w-[67%]">
          <div className="">
            <img
              src={currentPlaceData?.img}
              className="rounded-[14px]"
              alt=""
            />
          </div>
          <OverView currentPlaceData={currentPlaceData} />
          <PlaceInfo />
        </div>

        <div className=" w-[35%] ">
          <Carousel images={subImg} />
          <InfoCard currentPlaceDataData={currentPlaceData} />
        </div>
      </div>
      <div>
        <Gallery />
        <Equipment currentEquipmentData={equiment} />
      </div>
    </div>
  );
}

export default PlacesDetails;

//
