import { VideoCircle } from "iconsax-react";
import React, { useState } from "react";


const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="container flex flex-col xl:flex-row items-center justify-between p-4">
      <div className="xl:w-1/2 text-left">
        <h1 className="title-text font-bold mb-4">
          <span className="subtitle-text font-semibold text-blue-400">
            Discover with{" "}
          </span>
          <br />
          Create Himalaya Adventure
        </h1>
        <p className="regular-text m-1">
          Create Himalaya Adventure is a renowned adventure company based in
          Thamel, Kathmandu, with government registration. Established in 2015
          by a team of passionate experts in travel and tourism, our mission is
          to offer exceptional adventure experiences while showcasing the
          diverse natural and cultural heritage of Nepal. Our team comprises
          professional trekking and climbing guides, porters, and tour leaders
          with extensive knowledge of Nepal, Tibet, and Bhutan.
        </p>
        <p className="regular-text mt-2">
          Over the past nine years, we have consistently delivered top-notch
          services through dedication, professionalism, and passion. We have
          earned the Certificate of Excellence from Tripadvisor for our
          outstanding service. In Nepal, we organize extreme sports such as
          bungee jumping, paragliding, zip-lining, ultra-light flying, rock
          climbing, and rafting. We offer trekking, hiking, expeditions, and
          peak-climbing activities in the Everest, Annapurna, Langtang, Manaslu,
          and Mustang regions. Create Himalaya Adventure also manages and
          oversees tours including helicopter tours, wildlife safaris, cultural
          tours, and visits to heritage sites.
        </p>
      </div>
      <div className="py-3 w-full xl:w-2/4 mt-4 md:mt-0 md:ml-4">
        <div className="w-full h-auto rounded-lg shadow-lg">
          {!isVideoPlaying ? (
            <div
              className="relative cursor-pointer"
              onClick={handleThumbnailClick}
            >
              <img
                src="/images/Annapurnabasecamp.jpg"
                alt="Create Himalaya Adventure"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
              {/* <VideoPlay size="32" color="#60A5FA"/> */}
              <VideoCircle size="52" color="#111111" variant="Bulk"/>
              </div>
            </div>
          ) : (
            <iframe
              width="800px"
              height="450px"
              src="https://www.youtube.com/embed/6LCgR92DSis"
              title="Create Himalaya Adventure Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
