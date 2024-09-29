"use client";

import * as React from "react";
import Link from "next/link";
import useAllActivities from "@/hooks/useActivitiesHook";
import useActivitiesByCountryHook from "@/hooks/useActivitiesByLocationHook";

export function MenuItems() {
  const [hoveredDestination, setHoveredDestination] = React.useState<
    string | null
  >(null);
  const { data: allActivities, isLoading, isError } = useAllActivities();
  const { data: countryActivities } = useActivitiesByCountryHook(
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

  const countriesWithRegions = Object.entries(countryRegionsMap).map(
    ([country, regions]) => ({
      country,
      regions: Array.from(regions as Set<string>)
    })
  );

  return (
    <nav className="mx-auto px-4 py-2">
      <ul className="flex justify-center items-center gap-6 md:gap-8 lg:gap-10">
        <li className="group relative flex items-center">
          <button className="regular-text hover:text-blue-500 transition duration-300">
            Activities
          </button>
          <div className="absolute top-full left-0 hidden group-hover:block z-10">
            <ul className="bg-white p-3 shadow-lg rounded-lg min-w-[200px]">
              <p className="subtitle-text text-gray-900 mb-2 pb-2 border-b">
                Activities
              </p>
              {uniqueCategories.map((category, index) => (
                <li key={index} className="py-1">
                  <Link
                    onClick={() => setHoveredDestination(null)}
                    href={`/activity/${category}`}
                  >
                    <span className="emphasized-text capitalize text-gray-700 hover:text-blue-500 block px-2 py-1 rounded-md transition duration-300">
                      {category as React.ReactNode}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="group relative flex items-center">
          <button className="regular-text hover:text-blue-500 transition duration-300">
            Destination
          </button>
          <div className="absolute top-full left-0 hidden group-hover:block z-10">
            <ul className="bg-white shadow-lg rounded-lg p-3 min-w-[280px]">
              <p className="subtitle-text text-gray-900 mb-2 pb-2 border-b">
                Choose a destination
              </p>
              {countriesWithRegions.map(({ country, regions }, index) => (
                <li
                  key={index}
                  className="relative py-1"
                  onMouseEnter={() => handleMouseEnter(country)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={`/country/${country}`}>
                    <p className="emphasized-text capitalize text-gray-700 hover:text-blue-500 px-2 py-1 rounded-md transition duration-300 ">
                      {country}
                    </p>
                  </Link>
                  {hoveredDestination === country && (
                    <ul className="absolute right-full top-0 bg-white shadow-lg rounded-lg p-3 ml-2 min-w-[320px]">
                     <h1 className="subtitle-text text-gray-900 mb-2 pb-2 border-b">Browse by Region</h1>
                      {regions.map((region, optionIndex) => (
                        <li key={optionIndex} className="py-1">
                          <Link href={`/country/region/${region}`}>
                            <p className="text-gray-700 emphasized-text hover:text-blue-500 px-2 py-1 rounded-md transition duration-300">
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
          <Link
            href="/about"
            className="regular-text hover:text-blue-500 transition duration-300"
          >
            About
          </Link>
        </li>

        <li className="flex items-center">
          <Link
            href="/blogs"
            className="regular-text hover:text-blue-500 transition duration-300"
          >
            Blogs
          </Link>
        </li>

        <li className="flex items-center">
          <Link
            href="/contact"
            className="regular-text hover:text-blue-500 transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
