import React from "react";
import Highlight from "./details/highlights";
import AboutActivity from "./details/about";
import Benefits from "./details/benefits";
import infoContent from "../infoContent";
import Itinerary from "./details/itinerary";
import HowToPrepareComponent from "./details/Howtoprepare";
import { useRouter } from "next/router";
import PathImg from "./details/pathImg";

function PlaceInfo() {
  const { query } = useRouter();
  const places = query.slug as keyof typeof infoContent; // keyof typeof infoContent to ensure type safety
  const formatPlaceName = (slug: string) => {
    if (!slug) return "";
    return slug
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const currentPlaceName = formatPlaceName(places);

  const currentPlaceData = infoContent[places];
  console.log(currentPlaceData?.path[0]);

  if (!currentPlaceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-16">
      <div className="">
        <div className="my-6">
          <h1 className="text-gray-800 subtitle-text mb-4">Highlight</h1>
          <Highlight highlightData={currentPlaceData.highlights} />
          <AboutActivity aboutData={currentPlaceData.about} />
        </div>

        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">Benefits</h1>
          <Benefits benefitData={currentPlaceData.facilities} />
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">Itinerary</h1>
          <Itinerary itineraryData={currentPlaceData.itinerary} />
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            Road map of this journey
          </h1>
          <PathImg pathImg={currentPlaceData.path[0]} />
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            How to Prepare for {currentPlaceName}
          </h1>
          <HowToPrepareComponent howToPrepare={currentPlaceData.howtoprepare} />
        </div>
      </div>
    </div>
  );
}

export default PlaceInfo;
