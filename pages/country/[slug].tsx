import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { People } from "iconsax-react";
import Link from "next/link";
import ActivityCard, { Activity } from "@/components/ui/Activity";

// fetch activities function
const fetchActivitiesByCountry = async (country: string) => {
  const response = await fetch(
    `http://localhost:8802/api/activities/country/${country}`
  );
  if (!response.ok) throw new Error("Failed to fetch activities by country");
  return await response.json();
};

const CountryActivities = () => {
  const router = useRouter();
  const country = router.query.slug;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["country", country],
    queryFn: () => fetchActivitiesByCountry(country as string),
    enabled: !!country,
  });

  if (isError) {
    console.error("Error fetching activities:", error);
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) return <div>Loading...</div>;

  if (!data || !data.activities || data.activities.length === 0) {
    return <div>No activities found for {country}</div>;
  }

  return (
    <div className="pt-20">
      <div className="relative flex justify-center">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-900/70 to-blue-900/30"></div>
        <img
          src="/images/about1.jpg"
          className="h-[400px] w-full object-cover"
          alt="countryImage"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-center text-white title-text">
            Activities in <span className="capitalize">{country}</span>
          </h1>
        </div>
      </div>
      <div className="container mt-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.activities.map((activity: Activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryActivities;
