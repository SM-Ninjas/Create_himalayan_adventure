import React from 'react';
// import aboutImage from "images/Annapurnabasecamp.jpg";
import Image from 'next/image';

const About = () => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between p-4">
      <div className="md:w-1/2 text-left">
        <h1 className="title-text font-bold mb-4"> <span className='subtitle-text font-semibold text-blue-400'>Discover with </span> <br />Create Himalaya Adventure</h1>
        <p className='regular-text m-1'>
          Create Himalaya Adventure is a renowned adventure company based in Thamel, Kathmandu, with government registration.
          Established in 2015 by a team of passionate experts in travel and tourism, our mission is to offer exceptional adventure experiences while showcasing the diverse natural and cultural heritage of Nepal. Our team comprises professional trekking and climbing guides, porters, and tour leaders with extensive knowledge of Nepal, Tibet, and Bhutan.
        </p>
        <p className="regular-text mt-2">
          Over the past nine years, we have consistently delivered top-notch services through dedication, professionalism, and passion. We have earned the Certificate of Excellence from Tripadvisor for our outstanding service. In Nepal, we organize extreme sports such as bungee jumping, paragliding, zip-lining, ultra-light flying, rock climbing, and rafting. We offer trekking, hiking, expeditions, and peak-climbing activities in the Everest, Annapurna, Langtang, Manaslu, and Mustang regions. Create Himalaya Adventure also manages and oversees tours including helicopter tours, wildlife safaris, cultural tours, and visits to heritage sites.
        </p>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
        <Image
          src="/images/Annapurnabasecamp.jpg"
          alt="Create Himalaya Adventure"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;



// 