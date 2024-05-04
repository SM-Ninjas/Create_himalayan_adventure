import { DataTypes } from "@/components/home/CarouselSection";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import Buttons from "./Buttons";
import Link from "next/link";

interface infoCardType {
  currentPlaceDataData: DataTypes | undefined;
}

function InfoCard({ currentPlaceDataData }: infoCardType) {
  const [count, setCount] = useState(1);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  function handleIncreasePeople() {
    if (count < 10) setCount(count + 1);
  }
  function handleDecreasePeople() {
    if (count > 1) setCount(count - 1);
  }
  return (
    <div className="mt-8 w-full rounded-xl border bg-[#fff] p-2 px-6">
      <div className="">
        <h1 className="subtitle-text mt-2 text-gray-800">
          {currentPlaceDataData?.title}
        </h1>
        <h3 className="small-text mb-4 opacity-80">
          {currentPlaceDataData?.days}
        </h3>
        <div className="mb-4 flex items-center gap-2">
          {/* <MdAddBox onClick={handleIncreasePeople} color="#0075FF" size={27} /> */}
          <div
            onClick={handleDecreasePeople}
            className="rounded bg-blue-500 p-2"
          >
            <FiMinus
              size={8} className="text-white" />
          </div>
          <p className="text-lg font-semibold">{count} </p>
          <div
            onClick={handleIncreasePeople}

            className="rounded bg-blue-500 p-2"
          >
            <FaPlus
              size={8} className="text-gray-50" />
          </div>
          <p className="small-text">Number of Travelers</p>
        </div>
        <p className="mb-4">
          <span className="subtitle-text font-bold">$1400</span> USD
        </p>
        <div className="flex items-center gap-8">
          <p className="small-text">Set to Departure on </p>
          {/* <input type="date" value={2022} /> */}
          <input
            type="date"
            id="myDate"
            className="regular-text w-40 rounded-md border-0 bg-[#f5f5f5] p-2 font-bold focus:outline-none"
            value={currentDate}
            onChange={(event) => setCurrentDate(event.target.value)}
          />
        </div>
        <div className="mb-8 mt-12 flex gap-4">
          <Link href={'/bookingForm'}>
            {/* pass the current place details to the booking form so that i can send that in email about the selected place and the input box for that place should be disabled */}
            <Buttons text="Book Now" customColor="bg-blue-500 text-white" />
          </Link>
          <p className="my-2 text-sm opacity-80">
            Note that, you can only book if the date picked is available
          </p>
        </div>
        <hr />
        <div className="my-3">
          <h1 className="small-text mb-1 font-bold">Special Offer</h1>
          <p className="text-sm text-blue-500">
            Save 10% by booking the trek for Departure May 20.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
