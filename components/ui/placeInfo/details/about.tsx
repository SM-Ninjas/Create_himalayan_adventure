import React from "react";

type aboutTypes = {
  aboutData: string[]|undefined;
};
export default function AboutActivity({ aboutData }: aboutTypes) {
  return (
    <div>
      <div className="">
        {aboutData?.map((data) => (
          <p key={data} className="py-2  regular-text text-gray-700 opacity-70">
            {data}
          </p>
        ))}
      </div>
    </div>
  );
}
