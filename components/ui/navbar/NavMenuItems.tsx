"use client";

import * as React from "react";

import Link from "next/link";
import { trekRegions } from "@/mock-data/treks";
import { tourRegions } from "@/mock-data/tours";
// import { internationalRegions } from "@/mock-data/internationaltours";

export function MenuItems() {


  const [hoveredDestination, setHoveredDestination] = React.useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredDestination(index);
  };

  const handleMouseLeave = () => {
    setHoveredDestination(null);
  };
  const formatCategoryName = (name: string) => {
    return name
      .replace(/_/g, ' ')   // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };


  return (
    <nav className="mx-auto">
      <ul className="h-full flex justify-center items-center gap-10 sm:gap-2 space-x-12">
        <li className="group relative flex items-center h-full">
          <button className="regular-text h-full flex items-center">
            Trekking
          </button>
          <div className="absolute top-full left-0 hidden group-hover:block">
            <ul className="w-[500px] bg-white p-4 shadow-md rounded-lg">
              <p className="subtitle-text text-gray-900 my-2">Trekking in Nepal</p>
              {trekRegions.map((region, index) => (
                <li key={index} className="p-2">
                  <Link onClick={() => { setHoveredDestination(null) }} href={`/treks?category=${region.name.replace(/ /g, '_')}`}>
                    <span className="emphasized-text font-normal text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm p-2 transition duration-300">
                      {region.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="group relative flex items-center h-full">
          <button className="regular-text h-full flex items-center">
            Tours
          </button>
          <div className="absolute top-full left-0 hidden group-hover:block">
            <ul className="w-[380px] bg-white p-4 shadow-md rounded-lg">
              <p className="subtitle-text text-gray-900 my-2">Tours in Nepal</p>
              {tourRegions.map((region, index) => (
                <li key={index} className="p-2">
                  <Link onClick={() => { setHoveredDestination(null) }} href={`/tours?category=${region.name.replace(/ /g, '_')}`}>
                    <span className="emphasized-text font-normal text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm p-2 transition duration-300">
                      {region.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>


        <li className="group relative flex items-center h-full">
          <button className="regular-text h-full flex items-center">
            Destination
          </button>
          <div className="absolute top-full left-0 hidden group-hover:block">
            <ul className="w-[380px] bg-white shadow-md rounded-lg">
              <p className="subtitle-text text-gray-900 p-2">International Treks</p>
              {destinations.map((destination, destinationIndex) => (
                <li
                  key={destinationIndex}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(destinationIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className="emphasized-text font-normal text-gray-900 hover:bg-blue-500 hover:text-white rounded-sm transition duration-300 p-2">
                    {destination.name}
                  </p>
                  {hoveredDestination === destinationIndex && (
                    <ul className="absolute right-[378px] top-0 w-[400px] bg-white shadow-lg rounded-lg p-2">
                      {destination.option.map((categoryName, optionIndex) => (
                        <li key={optionIndex} className="">
                          <Link onClick={() => { setHoveredDestination(null) }} href={`/${destination.slug}?category=${categoryName}`}>
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


        <li className="flex items-center h-full">
          <Link href="/about" className="regular-text h-full regular-text flex items-center">
            About
          </Link>
        </li>

        <li className="flex items-center h-full">
          <Link href="/blogs" className="regular-text h-full regular-text flex items-center">
            Blogs
          </Link>
        </li>
        <li className="flex items-center h-full">
          <Link href="/contact" className="regular-text h-full regular-text flex items-center">
            Contact
          </Link>
        </li>
        <li className="flex items-center h-full">
          <Link href="/forum" className="regular-text h-full regular-text flex items-center">
            Forum
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
      "Makalu Region_Trekking",
      "Dolpa_Region_Trekking",
      "Everest_Region_Trekking"
    ]
  },
  {
    name: "Bhutan",
    slug: "international_tours",
    option: [
      "Trekking_and_Hiking_in_Bhutan",
      "Culture_and_City_Tour_in_Bhutan",
      "Day Hikes_And_Cultural_Tour_in_Bhutan",
      "Festival_Tour_in_Bhutan"
    ]
  },
  {
    name: "Tibet",
    slug: "international_tours",
    option: [
      "Culture_And_City_Tours_in_Tibet"
    ]
  }
];
