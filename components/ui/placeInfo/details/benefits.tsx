import React from "react";

type BenefitProps = {
  benefitData: string[];
};

function Benefits({ benefitData }: BenefitProps) {
  return (
    <div>
      <div className="py-3">
        {benefitData.map((data, i) => (
          <li key={i} className="flex gap-4 py-1 text-[12px] opacity-70">
            <span className="mt-[6px] h-[5px] w-[5px] rounded-full border bg-[#111] p-[2px]"></span>
            {data}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
