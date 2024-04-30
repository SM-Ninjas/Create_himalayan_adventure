import Form from "@/components/form";
import GoogleMaps from "@/components/googleMaps";
import Image from "next/image";
import mainImg from "../public//images/upHill.png";

function Contact() {
  return (
    <div className="">
      <div className="relative">
        <Image src={mainImg} className="h-[430px] w-full" alt="mainImage" />
        <h1 className="absolute bottom-10 left-[24rem] text-3xl text-white ">
          Contact Us
        </h1>
      </div>
          <div className="container mt-8 md:flex  gap-8 ">
        <div className="w-1/2">
          <Form />
        </div>
        <div className="w-1/2 rounded-md">
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
}

export default Contact;
