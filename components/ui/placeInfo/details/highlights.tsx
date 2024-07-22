import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

type highlightType = {
  highlightData: string[]| undefined;
};

function Highlight({ highlightData }: highlightType) {
  return (
    <div>
      <div className="">
        {highlightData?.map((data, i) => (
          <div key={i} className="flex mb-2 gap-6">
            <div>
              <FaLongArrowAltRight color="#0075FF" size={20} />
            </div>
            <h1 key={i} className="regular-text opacity-70">
              {data}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlight;
