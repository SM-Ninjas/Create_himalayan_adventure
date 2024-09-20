import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { People } from "iconsax-react";
import { MdOutlineDateRange } from "react-icons/md";

export interface Activity {
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

const ActivityCard = ({ activity }: { activity: Activity }) => {
  return (
    <div className="group relative h-[400px] overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl mt-4 rounded-md">
      <Link href={`/activity/${activity.slug}`}>
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

export default ActivityCard;
