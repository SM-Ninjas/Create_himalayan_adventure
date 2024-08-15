import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { internationalRegions } from "@/mock-data/internationaltours";
import { tourRegions, TrekAndTours } from "@/mock-data/tours";
import { trekRegions } from "@/mock-data/treks";
import infoContent, { TrekkingContent } from '@/components/ui/infoContent';
import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { People } from "iconsax-react"

interface CardProps {
  name: string;
  slug: string;
}

const Treks_Tours = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [activePlace, setActivePlace] = useState<string | null>(null);

  const getActivityData = (activityType: string | string[] | undefined) => {
    switch (activityType) {
      case 'treks':
        return trekRegions;
      case 'tours':
        return tourRegions;
      case 'international_tours':
        return internationalRegions;
      default:
        return [];
    }
  };

  const activityData = getActivityData(slug);

  return (
    <div className=''>
      <div className="relative flex justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-900/30 z-10"></div>
        <img src="/images/about1.jpg" className="h-[400px] w-full object-cover" alt="aboutImage" />
        <div className='absolute inset-0 flex items-center justify-center z-20'>
          <h1 className="title-text text-white text-center">
            Browse <span className='capitalize'>{slug}</span>
          </h1>
        </div>
      </div>
      <div className='container mt-10'>
        <div className="flex flex-wrap justify-center gap-4 my-6">
          <button
            className={`px-4 py-2 rounded ${activePlace === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            onClick={() => setActivePlace(null)}
          >
            All Places
          </button>
          {activityData.map((region) => (
            // category buttons 
            <button
              key={region.name}
              className={`px-4  py-2 rounded ${activePlace === region.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              onClick={() => setActivePlace(region.name)}
            >
              {region.name}
            </button>
          ))}
        </div>
        {activityData.map((region) => (
          activePlace === null || activePlace === region.name ? (
            <div key={region.name} className=''>
              {/* <h2 className='title-text mb-4 mt-6'>{region.name}</h2> */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-4'>
                {region.options.map((activity) => (
                  <ActivityCard
                    // key={activity.slug}
                    card={activity as CardProps}
                    infoContent={infoContent}
                    activityType={slug as string}
                  />
                ))}
              </div>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
};

const ActivityCard = ({
  card,
  infoContent,
  activityType
}: {
  card: CardProps,
  infoContent: { [key: string]: TrekkingContent },
  activityType: string
}) => {
  const activityInfo = infoContent[card.slug] || {};

  return (
    <div className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl mt-4">
      <Link href={`/${activityType}/${card.slug}`}>
        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
          {activityInfo.img && (
            <img src={activityInfo.img} alt={card.name} className="w-full h-full object-cover" />
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 bg-white p-8 bg-gradient-to-b from-transparent to-white/90">
          <h3 className="text-lg font-bold uppercase text-gray-800">{card.name}</h3>
          <div className="flex justify-between text-gray-700 mt-2">
            <p className='flex items-center gap-2'><IoLocationSharp className="text-blue-500" /> {activityInfo.location}</p>
            <p className='flex items-center gap-2'><MdOutlineDateRange className="text-blue-500" /> {activityInfo.days}</p>
            <p className='flex items-center gap-2'><People size="24" color="#3B82F6" /> {activityInfo.people}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Treks_Tours;