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
  
  // Data for each groups
  const aboutData = infoContent.about;
  const benefitData = infoContent.facilities;
  const highlightData = infoContent.highlights;
  const itineraryData = infoContent.itinerary;
  const howToPrepare = infoContent.howtoprepare;


  return (
    <div className="mt-16">
      <div className="">
        <div className="my-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            Highlight
          </h1>
          <Highlight highlightData={highlightData} />
          <AboutActivity aboutData={aboutData} />
        </div>

        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            Benefits
          </h1>
          <Benefits benefitData={benefitData} />
        </div>
        <div className="mb-6">
          <h1 className="text-gray-800 subtitle-text mb-4">
            Itinerary
          </h1>
          <Itinerary itineraryData={itineraryData} />
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
          <HowToPrepare howToPrepare={howToPrepare} />
        </div>

      </div>
    </div>
  );
}

export default PlaceInfo;
