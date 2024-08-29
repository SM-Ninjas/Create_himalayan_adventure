"use client";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { internationalRegions } from "@/mock-data/internationaltours";
import { tourRegions, TrekAndTours } from "@/mock-data/tours";
import { trekRegions } from "@/mock-data/treks";
import infoContent, { TrekkingContent } from "@/components/ui/infoContent";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { People } from "iconsax-react";
import { peakClimbingRegions } from "@/mock-data/peak_climbing_regions";
import Button from "@/components/ui/Button";

interface CardProps {
  name: string;
  slug: string;
}

const Treks_Tours = () => {
  const router = useRouter();
  const { slug, category } = router.query;
  console.log(slug);

  const [activePlace, setActivePlace] = useState<string | null>(null);

  const getActivityData = (activityType: string | string[] | undefined) => {
    switch (activityType) {
      case "treks":
        return trekRegions;
      case "tours":
        return tourRegions;
      case "international_tours":
        return internationalRegions;
      case "peak_climbing":
        return peakClimbingRegions;
      default:
        return [];
    }
  };
  const formatCategoryName = (name: string) => {
    return name
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };

  const activityData = getActivityData(slug);

  useEffect(() => {
    if (category) {
      const formattedCategory = (category as string)
        .replace(/_/g, " ")
        .toLowerCase();
      const matchingRegion = activityData.find(
        (region) => region.name.toLowerCase() === formattedCategory
      );

      if (matchingRegion) {
        setActivePlace(matchingRegion.name);
      }
    }
  }, [category, activityData]);

  console.log(activityData, "this is activity data");

  return (
    <div className="">
      <div className="relative flex justify-center">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-900/70 to-blue-900/30"></div>
        <img
          src="/images/about1.jpg"
          className="h-[400px] w-full object-cover"
          alt="aboutImage"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-center text-white title-text">
            Browse{" "}
            <span className="capitalize">
              {slug ? formatCategoryName(slug as string) : ""}
            </span>
          </h1>
        </div>
      </div>
      <div className="container mt-10">
        <div className="flex flex-wrap justify-center gap-4 my-6">
          <button
            className={`px-4 py-2 rounded ${
              activePlace === null
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActivePlace(null)}
          >
            All Places
          </button>
          {activityData.map((region) => (
            <button
              key={region.name}
              className={`px-4 py-2 rounded ${
                activePlace === region.name
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActivePlace(region.name)}
            >
              {region.name}
            </button>
          ))}
        </div>
        {activityData.map((region) =>
          activePlace === null || activePlace === region.name ? (
            <div key={region.name} className="">
              <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
                {region.options.map((activity) => (
                  <ActivityCard
                    card={activity as CardProps}
                    infoContent={infoContent}
                    activityType={slug as string}
                  />
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
const ActivityCard = ({
  card,
  infoContent,
  activityType,
}: {
  card: CardProps;
  infoContent: { [key: string]: TrekkingContent };
  activityType: string;
}) => {
  const activityInfo = infoContent[card.slug] || {};

  return (
    <div className="group relative h-[400px] overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl mt-4 rounded-md">
      <Link href={`/${activityType}/${card.slug}`}>
        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
          {activityInfo.img && (
            <img
              src={activityInfo.img}
              alt={card.name}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 bg-white">
          <h3 className="text-lg font-bold text-black uppercase leading-snug">
            {card.name}
          </h3>
          <div className="flex flex-col gap-2 mt-3 text-black space-y-2">
            <div className="flex justify-between items-center text-sm">
              <p className="flex items-center gap-1">
                <IoLocationSharp className="text-blue-400" />{" "}
                {activityInfo.location}
              </p>
              <p className="flex items-center gap-1">
                <MdOutlineDateRange className="text-blue-400" />{" "}
                {activityInfo.days}
              </p>
              <p className="flex items-center gap-1">
                <People size="20" color="#60A5FA" /> {activityInfo.people}
              </p>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-xs uppercase tracking-wider">
                {activityInfo.category}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Level:</span>
                <span className="font-bold text-blue-500">
                  {activityInfo.level ?? "Moderate"}
                </span>
              </div>
              <button className="px-3 py-1 text-xs font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200">
                View Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};




export default Treks_Tours;
