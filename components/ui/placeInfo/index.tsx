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
    <div className="">
      <div className="">
        <div className="my-6">
          <h1 className="mb-4 text-gray-800 subtitle-text">Highlight</h1>
          <Highlight highlightData={currentPlaceInfo?.highlights} />
          <AboutActivity aboutData={currentPlaceInfo?.about} />
        </div>

        <div className="mb-6">
          <h1 className="mb-4 text-gray-800 subtitle-text">Benefits</h1>
          <Benefits benefitData={currentPlaceInfo.facilities} />
        </div>
        <div className="mb-6">
          <h1 className="mb-4 text-gray-800 subtitle-text">Itinerary</h1>
          <Itinerary itineraryData={currentPlaceInfo.itinerary} />
        </div>
        <div className="mb-8">
          <h1 className="mb-4 text-gray-800 subtitle-text">
            Road map of this journey
          </h1>
            {/* currentPlaceInfo && currentPlaceInfo.path ? */}
            <PathImg
              pathImg={currentPlaceInfo?.path?.[0]}         
            /> 
        </div>
        <div className="mb-6">
          <h1 className="mb-4 text-gray-800 subtitle-text">
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
