import React, { useState } from "react";
import { DataTypes } from "@/components/home/CarouselSection";
import { MdAddBox } from "react-icons/md";
import { FaMinusSquare } from "react-icons/fa";

interface infoCardType {
  currentPlaceDataData: DataTypes | undefined;
}

function InfoCard({ currentPlaceDataData }: infoCardType) {
  const [count, setCount] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
  function handleIncreasePeople() {
    if (count < 10) setCount(count + 1);
  }
  function handleDecreasePeople() {
    if (count > 1) setCount(count - 1);
  }
  return (
    <div className="w-full mt-10 border p-2 px-6 rounded-[14px] bg-[#fff]">
      <div className="">
        <h1 className="text-gray-800 text-[24px] font-semibold mt-2">
          {currentPlaceDataData?.title}
        </h1>
        <h3 className="mb-3 text-sm opacity-80">{currentPlaceDataData?.days}</h3>
        <div className="flex items-center mb-3 gap-2">
          {" "}
          <MdAddBox
            onClick={handleIncreasePeople}
            color="#0075FF"
            size={32}
          />{" "}
          <p className="text-lg font-semibold">{count} </p>
          <FaMinusSquare
            color="#0075FF"
            onClick={handleDecreasePeople}
            size={32}
          />
          <p className="">Number of Travelers</p>
        </div>
        <p className="mb-3 text-lg font-semibold">$1400 USD</p>
        <div className="flex items-center gap-4">
          <h3 className="text-sm opacity-80">Set to Departure on </h3>
          {/* <input type="date" value={2022} /> */}
          <input type="date" id="myDate" value={currentDate} onChange={(event) => setCurrentDate(event.target.value)} />
        </div>
        <div className="flex gap-4 my-6">
          <button className="w-[180px] border rounded-[50px] px-2 py-1 text-white bg-[#0075FF]">
            Book Now
          </button>
          <p className="my-2 text-sm opacity-80">
            Note that, you can only book if the date picked is available
          </p>
        </div>
        <hr />
        <div className="my-3">
          <h1 className="text-sm opacity-80 font-semibold mb-1">Special Offer</h1>
          <p className="text-[#0075FF] text-sm opacity-80">
            Save 10% by booking the trek for Departure May 20.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
