import React, { useState } from "react";
import Highlight from "./details/highlights";
import AboutActivity from "./details/about";
import Benefits from "./details/benefits";
import infoContent, { itineraryType } from "../infoContent";
import Itinerary from "./details/itinerary";

function PlaceInfo() {
  const [visibleContent, setVisibleContent] = useState("about");

  // Data for each groups
  const aboutData = infoContent.about;
  const benefitData = infoContent.facilities;
  const highlightData = infoContent.highlights;
  const itineraryData = infoContent.itinerary;

  const handleRenderComponent = (currentString: string) => {
    setVisibleContent(currentString);
  };

  return (
    <div className="">
      <div className="flex gap-10">
        <button
          className={`text-[18px] font-semibold ${
            visibleContent === "about" ? "text-blue-500" : ""
          }`}
          onClick={() => {
            handleRenderComponent("about");
          }}
        >
          About {}
        </button>
        |{/* // add activities */}
        <button
          className={`text-[18px] font-semibold ${
            visibleContent === "highlight" ? "text-blue-500" : ""
          }`}
          onClick={() => {
            handleRenderComponent("highlight");
          }}
        >
          Highlight
        </button>
        |
        <button
          className={`text-[18px] font-semibold ${
            visibleContent === "benefit" ? "text-blue-500" : ""
          }`}
          onClick={() => {
            handleRenderComponent("benefit");
          }}
        >
          Benefits
        </button>
        |
        <button
          className={`text-[18px] font-semibold ${
            visibleContent === "itenary" ? "text-blue-500" : ""
          }`}
          onClick={() => {
            handleRenderComponent("itenary");
          }}
        >
          Itenary
        </button>
      </div>
      {visibleContent === "about" && <AboutActivity aboutData={aboutData} />}
      {visibleContent === "itenary" && (
        <Itinerary itineraryData={itineraryData} />
      )}
      {visibleContent === "highlight" && (
        <Highlight highlightData={highlightData} />
      )}
      {visibleContent === "benefit" && <Benefits benefitData={benefitData} />}
    </div>
  );
}

export default PlaceInfo;
