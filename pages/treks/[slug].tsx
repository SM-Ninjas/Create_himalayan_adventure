import CustomTestimonials from "@/components/customTestomonial";
import { DataTypes, subImages } from "@/components/home/CarouselSection";
import Equipment from "@/components/ui/Equipment";
import Gallery from "@/components/ui/Gallery";
import Carousel from "@/components/ui/carousel";
import InfoCard from "@/components/ui/infoCard";
import OverView from "@/components/ui/overView";
import PlaceInfo from "@/components/ui/placeInfo";
import { carouselData } from "@/mock-data/carousel-data";
import { useRouter } from "next/router";
import { FaClock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

function PlacesDetails() {
  const router = useRouter();
  const index = router?.query.index;

  // ----- Too many data in json, so for static version, better to statically render a single content ------------
  // const currentPlaceData: DataTypes | undefined = sliderData.find(
  //   (item) => item.id.toString() === index
  // );
  const currentPlaceData: DataTypes | undefined = carouselData[0];
  const subImg: subImages = currentPlaceData?.subImages || [];
  const equiment = currentPlaceData?.equipment;

  return (
    <div className="relative pt-24">
      <div key={currentPlaceData?.id} className="mb-4">
        <div className="container flex flex-col gap-y-2">
          <h1 className="title-text">{currentPlaceData?.title}</h1>
          <div className="flex gap-x-8">
            <p className="small-text flex items-center gap-2 text-gray-600">
              <FaClock size={18} /> {currentPlaceData?.days}{" "}
            </p>

            <p className="flex items-center gap-2 text-gray-600">
              <MdGroups size={30} />
              {currentPlaceData?.people}
            </p>
          </div>
        </div>
      </div>

      <Carousel images={subImg} />
      <div className="flex gap-8  container mt-8">
        <div className="w-full xl:w-8/12">
          <div className="flex gap-16 ">
            <div className="">
              <OverView currentPlaceData={currentPlaceData} />
              <PlaceInfo />
            </div>
          </div>
          <div className="xl:hidden">
            <InfoCard currentPlaceDataData={currentPlaceData} />
          </div>
        </div>
        <div className=" hidden sm:hidden xl:block w-5/12">
          <div className="sticky top-40">
            <InfoCard currentPlaceDataData={currentPlaceData} />
          </div>
        </div>
      </div>
      <div className="container">
        <Gallery />
        <Equipment currentEquipmentData={equiment} />
        <div>
          <h1 className="mt-6 text-lg font-semibold">
            What our clients have to say about this trip
          </h1>
          <div className="grid grid-cols-1 gap-10 sm:gap-4 lg:grid-cols-2">
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
