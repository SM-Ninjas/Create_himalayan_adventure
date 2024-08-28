import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaFlag } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";
import { RiH1 } from "react-icons/ri";

const activities = ["Treks", "Tours", "Peak Climbing"];
const destinations = [
  "Nepal",
  "Nepal Bhutan Tour",
  "Nepal Tibet Bhutan Tour",
  "Tibet",
  "Bhutan",
];

const SearchComponent = () => {
  const [activity, setActivity] = useState("");
  const [destination, setDestination] = useState("");
  const [searchAttempt , setSearchAttempt] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (activity) {
      switch (activity.toLowerCase()) {
        case "treks":
          router.push("/treks");
          break;
        case "tours":
          router.push("/tours");
          break;
        case "peak climbing":
          router.push("/peak_climbing");
          break;
        default:
          console.log("No specific route for this activity");
      }
    } else {
      // alert("Please select an activity");
      setSearchAttempt(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
          {searchAttempt && !activity && (
        <h1 className="subtitle-text text-center py-2 text-red-500">Please select an activity and destination</h1>
      )}
      <div className="flex border flex-col lg:flex-row items-center justify-between gap-4 bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center gap-2 w-full lg:w-2/5">
          {/* <IoTime  /> */}
          <LuActivity className="subtitle-text text-gray-400 font-bold" />
          <select
            className="w-full p-2 border rounded"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="">Any Activity</option>
            {activities.map((act, index) => (
              <option key={index} value={act}>
                {act}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 w-full lg:w-2/5">
          <FaFlag className="text-xl text-gray-400" />
          <select
            className="w-full p-2 border rounded"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Any Destination</option>
            {destinations.map((dest, index) => (
              <option key={index} value={dest.toLowerCase().replace(/ /g, "-")}>
                {dest}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="w-full lg:w-1/5 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
