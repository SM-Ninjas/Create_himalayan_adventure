"use client";

import * as React from "react";
import Link from "next/link";
import { trekRegions } from "@/mock-data/treks";
import { tourRegions } from "@/mock-data/tours";
import { peakClimbingRegions } from "@/mock-data/peak_climbing_regions";

export function MenuItems() {
  const [hoveredDestination, setHoveredDestination] = React.useState<
    number | null
  >(null);

  const handleMouseEnter = (index: number) => {
    setHoveredDestination(index);
  };

  const handleMouseLeave = () => {
    setHoveredDestination(null);
  };

  const formatCategoryName = (name: string) => {
    return name
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };

  return (
    <nav className="mx-auto">
      <ul className="flex justify-center items-center gap-4 sm:gap-2 space-x-4 sm:space-x-2 md:space-x-6 lg:space-x-10">
        <li className="group relative flex items-center">
          <button className="regular-text">Trekking</button>
          <div className="absolute top-full left-0 hidden group-hover:block">
            <ul className="w-[420px] sm:w-[420px] bg-white p-4 shadow-md rounded-lg">
              <p className="subtitle-text text-gray-900 my-2">
                Trekking in Nepal
              </p>
              {trekRegions.map((region, index) => (
                <li key={index} className="p-2">
                  <Link
                    onClick={() => setHoveredDestination(null)}
                    href={`/treks?category=${region.name.replace(/ /g, "_")}`}
                  >
                    <span className="emphasized-text text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm p-2 transition duration-300">
                      {region.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="group relative flex items-center">
          <button className="regular-text">Peak Climbing</button>
          <div className="absolute top-full left-0 hidden group-hover:block">
            <ul className="w-[340px] sm:w-[420px] bg-white p-4 shadow-md rounded-lg">
              <p className="subtitle-text text-gray-900 my-2">Peak Climbing Adventures</p>
              {peakClimbingRegions.map((region, index) => (
                <li key={index} className="p-2">
                  <Link
                    onClick={() => setHoveredDestination(null)}
                    href={`/peak_climbing?category=${region.name.replace(/ /g, "_")}`}
                  >
                    <span className="emphasized-text text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm p-2 transition duration-300">
                      {region.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="group relative flex items-center">
          <button className="regular-text">Tours</button>
          <div className="absolute top-full left-0 hidden group-hover:block">
            <ul className="w-[340px] sm:w-[420px] bg-white p-4 shadow-md rounded-lg">
              <p className="subtitle-text text-gray-900 my-2">Tours in Nepal</p>
              {tourRegions.map((region, index) => (
                <li key={index} className="p-2">
                  <Link
                    onClick={() => setHoveredDestination(null)}
                    href={`/tours?category=${region.name.replace(/ /g, "_")}`}
                  >
                    <span className="emphasized-text text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm p-2 transition duration-300">
                      {region.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="group relative flex items-center">
          <button className="regular-text">Destination</button>
          <div className="absolute top-full left-0 hidden group-hover:block">
            <ul className="w-[300px] sm:w-[250px] bg-white shadow-md rounded-lg">
              <p className="subtitle-text text-gray-900 p-2">
                International Treks
              </p>
              {destinations.map((destination, destinationIndex) => (
                <li
                  key={destinationIndex}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(destinationIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={`/${destination.slug}`}>
                    <p className="emphasized-text text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm transition duration-300 p-2">
                      {destination.name}
                    </p>
                  </Link>
                  {hoveredDestination === destinationIndex && (
                    <ul className="absolute right-[100%] top-0 w-[340px] sm:w-[280px] bg-white shadow-lg rounded-lg p-2">
                      {destination.option.map((categoryName, optionIndex) => (
                        <li key={optionIndex}>
                          <Link
                            onClick={() => setHoveredDestination(null)}
                            href={`/${destination.slug}?category=${categoryName}`}
                          >
                            <p className="text-gray-700 m-2 emphasized-text hover:text-blue-500 transition duration-300">
                              {formatCategoryName(categoryName)}
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

const destinations = [
  {
    name: "Nepal",
    slug: "treks",
    option: [
      "Annapurna_Region_Trekking",
      "Manaslu_Region_Trekking",
      "Kanchenjunga_Region_Trekking",
      "Makalu_Region_Trekking",
      "Dolpa_Region_Trekking",
      "Everest_Region_Trekking",
    ],
  },
  {
    name: "Bhutan",
    slug: "international_tours",
    option: [
      "Trekking_and_Hiking_in_Bhutan",
      "Culture_and_City_Tour_in_Bhutan",
      "Day_Hikes_And_Cultural_Tour_in_Bhutan",
      "Festival_Tour_in_Bhutan",
    ],
  },
  {
    name: "Tibet",
    slug: "international_tours",
    option: ["Culture_And_City_Tours_in_Tibet"],
  },
];
