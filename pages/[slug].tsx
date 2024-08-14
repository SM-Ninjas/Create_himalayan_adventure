import { useRouter } from 'next/router';
import React from 'react';
import { internationalRegions } from "@/mock-data/internationaltours";
import { tourRegions, TrekAndTours } from "@/mock-data/tours";
import { trekRegions } from "@/mock-data/treks";
import infoContent, { TrekkingContent } from '@/components/ui/infoContent';
import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

interface CardProps {
  name: string;
  slug: string;
}


const Treks_Tours = () => {
  const router = useRouter();
  const { slug } = router.query;

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
    <div className='mt-[92px]'>
      <div className="relative flex justify-center">
        <img src="/images/about1.jpg" className="h-[600px] w-full object-cover" alt="aboutImage" />
        <div className='absolute bottom-10 container'>
          <h1 className="title-text text-white">
            Browse <span className='capitalize'>{slug}</span>
          </h1>
        </div>
      </div>
      <div className='container'>
        {activityData.map((region) => (
          <div key={region.name} className=''>
            <h2 className='title-text mb-4 mt-6'>{region.name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {region.options.map((activity) => (
                <ActivityCard
                  // key={activity.slug}
                  card={activity as CardProps}  // Type assertion here
                  infoContent={infoContent}
                  activityType={slug as string}
                />
              ))}
            </div>
          </div>
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
    <div className="group relative h-[400px] overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
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
            <p className='flex items-center gap-2'><FaPeopleGroup className="text-blue-500" /> {activityInfo.people}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};


export default Treks_Tours
