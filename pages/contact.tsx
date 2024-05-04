import Form from "@/components/form";
import GoogleMaps from "@/components/googleMaps";
import Image from "next/image";
import mainImg from "../public//images/upHill.png";

function Contact() {
  return (
    <div className="">
      <div className="relative">
        <Image src={mainImg} className="h-[430px] w-full" alt="mainImage" />
        <h1 className="absolute bottom-10  left-1/4 title-text text-white ">
          Contact Us
        </h1>
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
