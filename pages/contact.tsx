import Form from "@/components/form";
import GoogleMaps from "@/components/googleMaps";
import Image from "next/image";
import mainImg from "../public//images/upHill.png";

function Contact() {
  return (
    <div className="">
      <div className="relative flex justify-center">
        <Image src={mainImg} className="h-[550px] w-full object-cover" alt="mainImage" />
        <div className='absolute bottom-10 container'>
          <h1 className=" title-text text-white">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="container gap-12  justify-center mt-8 md:flex ">
        <div className="">
          <Form />
        </div>
        <div className="rounded-md">
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
}

export default Contact;
