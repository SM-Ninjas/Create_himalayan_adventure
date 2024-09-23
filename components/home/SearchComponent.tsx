import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaFlag } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";

// List of available activities and destinations (countries and regions)
const activities = ["trekking", "tours", "Peak Climbing"];
const destinations = [
  { name: "Nepal", type: "country" },
  { name: "Tibet", type: "country" },
  { name: "Bhutan", type: "country" },
];

const SearchComponent = () => {
  const [activity, setActivity] = useState("");
  const [destination, setDestination] = useState("");
  const [searchAttempt, setSearchAttempt] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (activity) {
      // Redirect to activity route
      router.push(`/activity/${activity.toLowerCase().replace(" ", "_")}`);
    } else if (destination) {
      // Find the destination type (country or region)
      const selectedDestination = destinations.find(
        (dest) => dest.name.toLowerCase().replace(/ /g, "-") === destination
      );

      if (selectedDestination) {
        if (selectedDestination.type === "country") {
          // Redirect to country route
          router.push(`/country/${destination}`);
        } else if (selectedDestination.type === "region") {
          // Redirect to region route
          router.push(`/country/region/${destination}`);
        }
      } else {
        setSearchAttempt(true); // Trigger error if no match
      }
    } else {
      setSearchAttempt(true);
    }
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      {searchAttempt && (!activity || !destination) && (
        <h1 className="subtitle-text text-center py-2 text-red-500">
          Please select an activity and destination
        </h1>
      )}

      <div className="w-11/12 md:w-8/12 flex border flex-col lg:flex-row items-center justify-between gap-4 bg-white rounded-3xl shadow-md p-4">
        <div className="flex items-center gap-2 w-full lg:w-2/5">
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
              <option
                key={index}
                value={dest.name.toLowerCase().replace(/ /g, "-")}
              >
                {dest.name}
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
