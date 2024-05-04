import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


type BenefitProps = {
  benefitData: string[];
};

function Benefits({ benefitData }: BenefitProps) {
  return (
    <div>
      <div className="">
        {benefitData.map((data, i) => (
          <div key={i} className="flex mb-2 gap-6 ">
            <div>
              <FaLongArrowAltRight color="#0075FF" size={20} />
            </div>
            <h1 key={i} className="small-text opacity-70 regular-text">
              {data}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
