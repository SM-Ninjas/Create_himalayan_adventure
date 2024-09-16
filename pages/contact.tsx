import Form from "@/components/form";
// import GoogleMaps from "@/components/googleMaps";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import mainImg from "../public//images/upHill.png";
import Logo from "@/components/ui/Logo";

function Contact() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div className="">
      <div className="relative flex justify-center">
        <Image src={mainImg} className="w-full object-cover" alt="mainImage" />
        <div className='absolute bottom-10 container'>
          <h1 className=" title-text text-white">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="container gap-12 justify-center mt-8 md:flex ">
        <div className="md:w-1/2">
          <div className="bg-white p-6">
            <h2 className="subtitle-text mb-4"><Logo /></h2>
            <p className="regular-text font-semibold">Create Himalaya Adventure</p>

            {/* Location with icon */}
            <p className="small-text flex items-center mt-2">
              <FaMapMarkerAlt className="mr-2" /> Kathmandu, Nepal
            </p>

            {/* Phone with icon */}
            <p className="small-text flex items-center mt-2">
              <FaPhoneAlt className="mr-2" /> +977 9702542143
            </p>

            {/* Emails with icon */}
            <p className="small-text flex items-center mt-2">
              <FaEnvelope className="mr-2" /> createhimalaya16@gmail.com
            </p>
            <p className="small-text flex items-center mt-2">
              <FaEnvelope className="mr-2" /> info@createhimalaya.com
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Form />
        </div>
      </div>

      <div className="w-full h-[480px]">
        <Map />
      </div>
    </div>
  );
}

export default Contact;
