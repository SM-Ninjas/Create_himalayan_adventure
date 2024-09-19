"use client";

import { useRouter } from "next/router";
import React from "react";
import useActivitiesByCategoryHook from "@/hooks/useActivitiesByCategoryHook";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { FaMountain } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { People } from "iconsax-react";

interface Activity {
  slug: string;
  title: string;
  location: string;
  days: string;
  category: string;
  level: string;
  duration: number;
  maxPeople: number;
  minPeople: number;
  pricePerPerson: number;
  subimages: string[];
}

const Treks_Tours = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch activities based on category (slug)
  const { data, isLoading, isError } = useActivitiesByCategoryHook(
    slug as string | undefined
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading activities...</div>;
  }

  const activities = data?.activities || [];

  // Extract unique regions using Set
  const uniqueRegions = new Set(activities.map((activity: Activity) => activity.location));
  const regionCount = uniqueRegions.size;

  // Get duration range (min to max)
  const durations = activities.map((activity: Activity) => activity.duration);
  const minDuration = Math.min(...durations);
  const maxDuration = Math.max(...durations);

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
              {slug ? slug.toString().replace(/_/g, " ") : ""}
            </span>
          </h1>
        </div>
      </div>

      {/* Fancy Stats Bar */}
      <div className="bg-blue-50 py-6 flex justify-around items-center mt-6 rounded-md">
        <div className="text-center text-blue-950 flex flex-col items-center">
          <FaMountain size={30} color="#2563EB" className="mb-2" />
          <h3 className="text-3xl font-bold">{regionCount}</h3>
          <p className="text-sm">Total Regions</p>
        </div>
        <div className="text-center text-blue- flex flex-col items-center">
          <MdOutlineDateRange color="#2563EB" size={30} className="mb-2" />
          <h3 className="text-3xl font-bold">
            {minDuration} - {maxDuration} Days
          </h3>
          <p className="text-sm">Duration Range</p>
        </div>
        <div className="text-center text-blue- flex flex-col items-center">
          <BiCategory color="#2563EB" size={30} className="mb-2" />
          <h3 className="text-3xl font-bold">{activities.length} Activities</h3>
          <p className="text-sm">Total Activities</p>
        </div>
      </div>

      <div className="container mt-10">
        {activities.length === 0 ? (
          <div>No activities found for this category.</div>
        ) : (
          <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity: Activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ActivityCard = ({ activity }: { activity: Activity }) => {
  return (
    <div className="group relative h-[400px] overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl mt-4 rounded-md">
      <Link href={`/${activity.slug}`}>
        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
          {activity.subimages.length > 0 && (
            <img
              src={activity.subimages[0]}
              alt={activity.title}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 bg-white">
          <h3 className="text-lg font-bold text-black uppercase leading-snug">
            {activity.title}
          </h3>
          <div className="flex flex-col gap-2 mt-3 text-black space-y-2">
            <div className="flex justify-between items-center text-sm">
              <p className="flex items-center gap-1">
                <IoLocationSharp className="text-blue-400" />{" "}
                {activity.location}
              </p>
              <p className="flex items-center gap-1">
                <MdOutlineDateRange className="text-blue-400" />{" "}
                {activity.duration} days
              </p>
              <p className="flex items-center gap-1">
                <People size="20" color="#60A5FA" /> {activity.minPeople}-
                {activity.maxPeople} people
              </p>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-xs uppercase tracking-wider">
                {activity.category}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Level:</span>
                <span className="font-bold text-blue-500">
                  {activity.level ?? "Moderate"}
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
