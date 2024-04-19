import React, { useState } from "react";
import Highlight from "./details/highlights";
import AboutActivity from "./details/about";
import Benefits from "./details/benefits";
import Itenary from "./details/itenary";
import { infoContent } from "../infoContent";

function PlaceInfo() {
  const [visibleContent, setVisibleContent] = useState("about");

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
        {/* // add activities */}
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
      {visibleContent === "about" && <AboutActivity />}
      {visibleContent === "itenary" && <Itenary />}
      {visibleContent === "highlight" && <Highlight />}
      {visibleContent === "benefit" && <Benefits />}
    </div>
  );
}

export default PlaceInfo;
