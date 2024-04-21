import React from "react";

type aboutTypes = {
  aboutData: string[];
};
export default function AboutActivity({ aboutData }: aboutTypes) {
  return (
    <div>
      <div className="py-3">
        {aboutData.map((data) => (
          <p key={data} className="py-2  text-[12px] opacity-70">
            {data}
          </p>
        ))}
      </div>
    </div>
  );
}
