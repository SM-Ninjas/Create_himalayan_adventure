import React from "react";
import { FaTripadvisor } from "react-icons/fa";

const TripAdvisorCard = () => {
  return (
    <a
      href="https://www.tripadvisor.com/Attraction_Review-g293890-d11877391-Reviews-Create_Himalaya_Adventure-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html"
      target="_blank"
      className="card w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover "
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f5/52/04/amadablam-base-camp.jpg?w=1200&h=1200&s=1"
          alt="Create Himalaya Adventure"
        />
        <div className="absolute top-2 left-2 bg-slate-100 p-2 rounded-full">
          <FaTripadvisor size={50} className="text-green-600"/>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">Create Himalaya Adventure</h3>
        <p className="text-gray-600">
          #31 of 268 Boat Tours & Water Sports in Kathmandu
        </p>
        <p className="text-yellow-500">★★★★★ (5/5)</p>
        <p className="mt-2 text-gray-600">
          Relish the jaw-dropping beauty of Nepal with a reliable travel
          partner.
        </p>
        <h1
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
        >
          View on TripAdvisor
        </h1>
      </div>
    </a>
  );
};

export default TripAdvisorCard;
