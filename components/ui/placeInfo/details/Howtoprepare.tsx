import React from "react";
import { FaArrowRight } from "react-icons/fa";
import type { HowToPrepare } from "../../infoContent";

type howToPrepareType = {
    howToPrepare: HowToPrepare;
};
function HowToPrepare({ howToPrepare }: howToPrepareType) {

    return (
        <div>
            <div className="">
                {howToPrepare.paragraph.map((data, i) => (
                    <div key={i} className="flex mb-4 gap-6">
                        <h1 key={i} className="regular-tex t opacity-70">
                            {data}
                        </h1>
                    </div>
                ))}
                {howToPrepare.points.map((data, i) => (
                    <div key={i} className="flex mb-2 gap-6">
                        <div>
                            <FaArrowRight color="#0075FF" size={20} />
                        </div>
                        <h1 className="regular-text opacity-70">
                            {data}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HowToPrepare;
