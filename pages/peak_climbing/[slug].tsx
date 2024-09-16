"use client";
import React from "react";
import Equipment from "@/components/ui/Equipment";
import Gallery from "@/components/ui/Gallery";
import Carousel from "@/components/ui/carousel";
import InfoCard from "@/components/ui/infoCard";
import infoContent, { subimages } from "@/components/ui/infoContent";
import OverView from "@/components/ui/overView";
import PlaceInfo from "@/components/ui/placeInfo";
import { useRouter } from "next/router";
import { FaClock } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import ShareButtons from "@/components/SocialMediaPreFill";
import WhyChooseUs from "@/components/ui/whyChooseUs";

function PlacesDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const index = slug as keyof typeof infoContent;

  const currentPlaceData = infoContent[index];
  const subImg: subimages = currentPlaceData?.subimages || [];
  const equipment = currentPlaceData?.equipment;

  const [placeUrl, setPlaceUrl] = React.useState("");

  React.useEffect(() => {
    setPlaceUrl(window.location.href);
  }, []);

  if (!currentPlaceData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative pt-28">
        <div key={currentPlaceData?.id} className="mb-4">
          <div className="container flex justify-between">
            <div className="flex flex-col gap-y-2">
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
              <div>

              </div>
              <InfoCard currentPlaceData={currentPlaceData} />

              <div className="flex items-center gap-4 mt-4 shadow-lg border  p-4 rounded-lg">
                <h1 className="regular-text">Share with Friends</h1>
                <ShareButtons
                  title={currentPlaceData?.title || ""}
                  imageUrl={
                    "https://createhimalaya.com/_next/image?url=%2Fimages%2FAnnapurna%20Base%20Camp%20Trek%20-14%20Days%2FAnnapurna-Basecamp-image1-1.webp&w=1920&q=75"
                  }
                  placeUrl={placeUrl}
                />
              </div>
              <WhyChooseUs />
            </div>
          </div>

          <div className="hidden sm:hidden xl:block w-5/12">
            <WhyChooseUs />
            <div className="sticky top-40">
              <InfoCard currentPlaceData={currentPlaceData} />
              {/* Share Buttons */}
              <div className="flex items-center gap-4 mt-4 shadow-lg border  p-4 rounded-lg">
                <h1 className="regular-text">Share with Friends</h1>
                <ShareButtons
                  title={currentPlaceData?.title || ""}
                  imageUrl={
                    "https://createhimalaya.com/_next/image?url=%2Fimages%2FAnnapurna%20Base%20Camp%20Trek%20-14%20Days%2FAnnapurna-Basecamp-image1-1.webp&w=1920&q=75"
                  }
                  placeUrl={placeUrl}
                />
              </div>
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
