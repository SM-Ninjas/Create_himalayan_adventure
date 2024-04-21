import { Data, sliderData, subImages } from "@/components/home/CarouselSection";
import Carousel from "@/components/ui/carousel";
import OverView from "@/components/ui/overView";
import PlaceInfo from "@/components/ui/placeInfo";
import { useRouter } from "next/router";
import { FaClock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

function PlacesDetails() {
  const router = useRouter();
  const index = router?.query.index;

  const currentPlaceData: Data | undefined = sliderData.find(
    (item) => item.id.toString() === index
  );

  const subImg: subImages = currentPlaceData?.subImages || [];

  return (
    <div className="container mt-24">
      <div className="">
        <div className="">
          <div key={currentPlaceData?.id}>
            <div className="">
              <h1 className="title-text font-bold">
                {currentPlaceData?.title}
              </h1>
              <div className="mb-[30px] flex gap-[30px]">
                <p className="small-text flex items-center gap-2 text-gray-800">
                  <FaClock className="text-xl" /> {currentPlaceData?.days}{" "}
                </p>

                <p className="small-text flex items-center gap-2 text-gray-800">
                  <MdGroups className="text-xl" />
                  {currentPlaceData?.people}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[45px]">
          <div className="w-[60%]">
            <div key={currentPlaceData?.id}>
              <img
                src={currentPlaceData?.img}
                className="rounded-[14px]"
                alt=""
              />
            </div>
          </div>
          <div className="w-[40%]">
            <Carousel images={subImg} />
          </div>
        </div>
        <div className="">
          <h1 className="subtitle-text">Overview</h1>
          <div className="w-[60%]">
            <OverView currentPlaceDataData={currentPlaceData} />
          </div>
        </div>
        <div className="mt-[30px]">
          <PlaceInfo />
        </div>
      </div>
    </div>
  );
}

export default PlacesDetails;

//
