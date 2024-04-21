import React from "react";

type highlightType = {
  highlightData: string[];
};

function Highlight({ highlightData }: highlightType) {
  return (
    <div>
      <ul className="py-3">
        {highlightData.map((data, i) => (
          <li key={i} className="flex gap-4 py-1 text-[12px] opacity-70">
            <span className="mt-3 h-[5px] w-[5px] rounded-full bg-black"></span>
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Highlight;
