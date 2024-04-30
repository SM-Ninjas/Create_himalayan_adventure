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
import CustomTestimonials from "@/components/customTestomonial";


function PlacesDetails() {
  const router = useRouter();
  const index = router?.query.index;

  const currentPlaceData: DataTypes | undefined = sliderData.find(
    (item) => item.id.toString() === index
  );
  const subImg: subImages = currentPlaceData?.subImages || [];
  const equiment = currentPlaceData?.equipment

  return (
    <div className="container  mt-[1rem] sm:mt-[5rem]">
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


      <Carousel images={subImg} />
      <div className="flex gap-6">
        <div className="w-full  xl:w-[75%]">
          <OverView currentPlaceData={currentPlaceData} />
          <PlaceInfo />
        </div>
        <div className="w-1/3 sm:hidden xl:block hidden">
          <InfoCard currentPlaceDataData={currentPlaceData} />
        </div>
      </div>
      <div>
        <Gallery />
        <Equipment currentEquipmentData={equiment} />
        <div >
          <h1 className="mt-6 text-lg font-semibold">What our clients have to say about this trip</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-4">
            <CustomTestimonials name="Michelle Copper" />
            <CustomTestimonials name="Jason Brown" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacesDetails;

//
