import React, { useState } from "react";
import Highlight from "./details/highlights";
import AboutActivity from "./details/about";
import Benefits from "./details/benefits";
import infoContent from "../infoContent";
import Itinerary from "./details/itinerary";
import HowToPrepare from "./details/Howtoprepare";
import { useRouter } from "next/router";
import PathImg from "./details/pathImg";


function PlaceInfo() {
  const router = useRouter()
  const currentPlace = router.query.places





  return (
    <div className="mt-16">
      <div className="">
        <div className="my-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            Highlight
          </h1>
          <Highlight highlightData={infoContent.highlights} />
          <AboutActivity aboutData={infoContent.about} />
        </div>

        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            Benefits
          </h1>
          <Benefits benefitData={infoContent.facilities} />
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            Itinerary
          </h1>
          <Itinerary itineraryData={infoContent.itinerary} />
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            Road map of this journey
          </h1>
          <PathImg pathImg={infoContent.path} />
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            How to Prepare for {currentPlace} Tour
          </h1>
          <HowToPrepare howToPrepare={infoContent.howtoprepare} />
        </div>

      </div>
    </div>
  );
}

export default PlaceInfo;
