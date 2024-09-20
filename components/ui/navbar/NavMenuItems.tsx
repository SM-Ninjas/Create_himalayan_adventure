"use client";

import * as React from "react";
import Link from "next/link";
import useAllActivities from "@/hooks/useActivitiesHook";
import useActivitiesByLocationHook from "@/hooks/useActivitiesByLocationHook";

export function MenuItems() {
  const [hoveredDestination, setHoveredDestination] = React.useState<
    string | null
  >(null);
  const { data: allActivities, isLoading, isError } = useAllActivities();
  const { data: countryActivities } = useActivitiesByLocationHook(
    hoveredDestination || ""
  );

  const handleMouseEnter = (country: string) => {
    setHoveredDestination(country);
  };

  const handleMouseLeave = () => {
    setHoveredDestination(null);
  };

  const formatCategoryName = (name: string) => {
    return name
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  if (isLoading) {
    return <div>Loading activities...</div>;
  }

  if (isError || !allActivities) {
    return <div>Error loading activities</div>;
  }

  const uniqueCategories = Array.from(
    new Set(allActivities.activities.map((activity: any) => activity.category))
  );

  // Create a map of countries to their regions
  const countryRegionsMap = allActivities.activities.reduce(
    (acc: { [key: string]: Set<string> }, activity: any) => {
      if (!acc[activity.country]) {
        acc[activity.country] = new Set();
      }
      acc[activity.country].add(activity.region);
      return acc;
    },
    {}
  );

  // Convert the map to an array of objects for easier rendering
  const countriesWithRegions = Object.entries(countryRegionsMap).map(
    ([country, regions]) => ({
      country,
      regions: Array.from(regions as Set<string>),
    })
  );

  return (
    <nav className="mx-auto">
      <ul className="flex justify-center items-center gap-4 sm:gap-2 space-x-4 sm:space-x-2 md:space-x-6 lg:space-x-10">
        <li className="group relative flex items-center">
          <button className="regular-text">Activities</button>
          <div className="absolute top-full left-0 hidden group-hover:block">
            <ul className="w-[340px] sm:w-[420px] bg-white p-4 shadow-md rounded-lg">
              <p className="subtitle-text text-gray-900 my-2">Activities</p>
              {uniqueCategories.map((category, index) => (
                <li key={index} className="p-2">
                  <Link
                    onClick={() => setHoveredDestination(null)}
                    href={`/activity/${category}`}
                  >
                    <span className="emphasized-text text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm p-2 transition duration-300">
                      {category as React.ReactNode}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Destination dropdown */}
        <li className="group relative flex items-center">
          <button className="regular-text">Destination</button>
          <div className="absolute top-full left-0 hidden group-hover:block">
            <ul className="w-[300px] sm:w-[250px] bg-white shadow-md rounded-lg">
              <p className="subtitle-text text-gray-900 p-2">
                International Treks
              </p>
              {countriesWithRegions.map(({ country, regions }, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(country)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={`/country?country=${country}`}>
                    <p className="emphasized-text text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm transition duration-300 p-2 capitalize">
                      {country}
                    </p>
                  </Link>
                  {hoveredDestination === country && (
                    <ul className="absolute right-[100%] top-0 w-[340px] sm:w-[280px] bg-white shadow-lg rounded-lg p-2">
                      {regions.map((region, optionIndex) => (
                        <li key={optionIndex}>
                          <Link
                            onClick={() => setHoveredDestination(null)}
                            href={`/country?country=${country}&region=${region}`}
                          >
                            <p className="text-gray-700 m-2 emphasized-text hover:text-blue-500 transition duration-300">
                              {formatCategoryName(region)}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="flex items-center">
          <Link href="/about" className="regular-text">
            About
          </Link>
        </li>

        <li className="flex items-center">
          <Link href="/blogs" className="regular-text">
            Blogs
          </Link>
        </li>

        <li className="flex items-center">
          <Link href="/contact" className="regular-text">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
