import React from "react";
import Highlight from "./details/highlights";
import AboutActivity from "./details/about";
import Benefits from "./details/benefits";
import Itinerary from "./details/itinerary";
import HowToPrepareComponent from "./details/Howtoprepare";
import PathImg from "./details/pathImg";
import { TrekkingContent } from "@/components/ui/infoContent";

interface CurrentPlaceType {
  currentPlaceInfo: TrekkingContent | undefined;
}

function PlaceInfo({ currentPlaceInfo }: CurrentPlaceType) {
  const formatPlaceName = (slug: string | undefined) => {
    if (!slug) return "";
    return slug.replaceAll("_", " ");
  };
  const currentPlaceName = formatPlaceName(currentPlaceInfo?.title);

  if (!currentPlaceInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-16">
      <div className="">
        <div className="my-6">
          <h1 className="text-gray-800 subtitle-text mb-4">Highlight</h1>
          <Highlight highlightData={currentPlaceInfo?.highlights} />
          <AboutActivity aboutData={currentPlaceInfo?.about} />
        </div>

        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">Benefits</h1>
          <Benefits benefitData={currentPlaceInfo.facilities} />
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">Itinerary</h1>
          <Itinerary itineraryData={currentPlaceInfo.itinerary} />
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            Road map of this journey
          </h1>
          <PathImg
            pathImg={currentPlaceInfo && currentPlaceInfo.path
              ? currentPlaceInfo.path[0]
              : undefined} mapCenter={{ lat: 27.712987623893596, lng: 85.32390120211947 }} zoom={10}          /> 
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            How to Prepare for{" "}
            <span className="capitalize">{currentPlaceName}</span>
          </h1>
          <HowToPrepareComponent
            howToPrepare={currentPlaceInfo?.HowToPrepare}
          />
        </div>
      </div>
    </div>
  );
}

export default PlaceInfo;
