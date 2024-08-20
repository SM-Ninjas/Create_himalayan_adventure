import CustomTestimonials from "@/components/customTestomonial";
import Equipment from "@/components/ui/Equipment";
import Gallery from "@/components/ui/Gallery";
import Carousel from "@/components/ui/carousel";
import InfoCard from "@/components/ui/infoCard";
import infoContent, {
  TrekkingContent,
  subimages,
} from "@/components/ui/infoContent";
import OverView from "@/components/ui/overView";
import PlaceInfo from "@/components/ui/placeInfo";
import { useRouter } from "next/router";
import { FaClock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

function PlacesDetails() {
  const router = useRouter()
  const { slug } = router.query;
  console.log(slug)
  const { query } = useRouter();
  const index = query.slug as keyof typeof infoContent; // keyof typeof infoContent to ensure type safety

  const currentPlaceData = infoContent[index];
  const subImg: subimages = currentPlaceData?.subimages || [];
  const equipment = currentPlaceData?.equipment;
  console.log(currentPlaceData)

  return (
    <>
      <div className="relative pt-28">
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
        <div className="px-2">
      <Carousel images={subImg} />
        </div>

        <div className="flex gap-8 container mt-8">
          <div className="w-full xl:w-8/12">
            <div className="flex gap-16">
              <div>
                <OverView currentPlaceInfo={currentPlaceData} />
                <PlaceInfo currentPlaceInfo={currentPlaceData} />
              </div>
            </div>
            <div className="xl:hidden">
              <InfoCard currentPlaceData={currentPlaceData} />
            </div>
          </div>
          <div className="hidden sm:hidden xl:block w-5/12">
            <div className="sticky top-40">
              <InfoCard currentPlaceData={currentPlaceData} />
            </div>
          </div>
        </div>
        <div className="container">
          <Gallery />
          <Equipment currentEquipmentData={equipment} />

        </div>
      </div>
    </>
  );
}

export default PlacesDetails;
