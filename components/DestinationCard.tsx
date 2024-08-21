import React from 'react';
import { useRouter } from 'next/router';

const destinations = [
    {
        id: 1,
        name: "Bhutan",
        image: "/images/tiger-nest-monastery.webp",
        slug: "international_tours"
    },
    {
        id: 2,
        name: "Nepal",
        image: "/images/Annapurna Base Camp Trek -14 Days/AnnapurnaSanctuary_client_lee.webp",
        slug: "treks"
    },
    {
        id: 3,
        name: "Tibet",
        image: "/images/4a52c6a5-db57-4f04-927b-e0edb3f826e4_6-day-private-tour-from-lhasa-to-tsedang-in-tibet-xlarge.webp",
        slug: "international_tours"
    }
];

interface DestinationCardProps {
    name: string;
    image: string;
    slug: string;
}

const DestinationCard = ({ name, image, slug }: DestinationCardProps) => {
    const router = useRouter();

    return (
        <div
            className="relative cursor-pointer group bg-blue-950"
            onClick={() => router.push(`/${slug}`)}
        >
            <img
                src={image}
                alt={name}
                className=" w-full h-96 rounded-lg group-hover:opacity-80 transition-opacity duration-300 hover:opacity-10"
            />
            <div className="absolute bottom-4 left-4 text-white subtitle-text font-bold transition-transform duration-300 transform group-hover:translate-y-1 group-hover:scale-105">
                {name} <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
            </div>
        </div>
    );
};

const Destinations = () => {
    return (
        <div className="container mx-auto text-center py-12">
            <h2 className="title-text font-bold mb-4">CHOOSE YOUR DESTINATIONS</h2>
            <p className="text-lg text-gray-600 mb-8">
                Embark on an extraordinary adventure. Discover the allure of Himalayan journeys and unforgettable escapes.
            </p>
            <div className="flex items-center justify-center my-8">
                <div className="flex-grow h-px bg-gray-300"></div>
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-14 h-14 mx-4"
                />
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {destinations.map((destination) => (
                    <DestinationCard
                        key={destination.id}
                        name={destination.name}
                        image={destination.image}
                        slug={destination.slug}
                    />
                ))}
            </div>
        </div>
    );
};

export default Destinations;
