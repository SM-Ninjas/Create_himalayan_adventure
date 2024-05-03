import React, { useState } from "react";
import Highlight from "./details/highlights";
import AboutActivity from "./details/about";
import Benefits from "./details/benefits";
import infoContent from "../infoContent";
import Itinerary from "./details/itinerary";
import HowToPrepare from "./details/Howtoprepare";
import { useRouter } from "next/router";


function PlaceInfo() {
  const router = useRouter()
  const currentPlace =  router.query.places
  // console.log(,'place data')
  console.log(currentPlace,'place data')
  console.log(currentPlace,'place data')
  console.log(currentPlace,'place data')

  // Data for each groups
  const aboutData = infoContent.about;
  const benefitData = infoContent.facilities;
  const highlightData = infoContent.highlights;
  const itineraryData = infoContent.itinerary;
  const howToPrepare = infoContent.howtoprepare;

  return (
    <div className="mt-16">
      <div className="">
        <div>
          <h1 className="text-gray-800 subtitle-text">
            Highlight
          </h1>
          <Highlight highlightData={highlightData} />
        </div>
        <div>
          <AboutActivity aboutData={aboutData} />
        </div>

        <div>
          <h1 className="text-gray-800 subtitle-text">
            Benefits
          </h1>
          <Benefits benefitData={benefitData} />
        </div>
        <div>
          <h1 className="text-gray-800 subtitle-text">
            Itinerary
          </h1>
          <Itinerary itineraryData={itineraryData} />
        </div>
        <div>
          <h1 className="text-gray-800 subtitle-text">
            How to Prepare for {currentPlace} Tour
          </h1>
          <HowToPrepare howToPrepare={howToPrepare} />
        </div>
      </div>
    </div>
  );
}

export default PlaceInfo;
