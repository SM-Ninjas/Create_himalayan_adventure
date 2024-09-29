import useCertificatesHook from "@/hooks/useCertificatesHook";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


interface CertificateTypes {
  _id: string;
  image: string;
  title: string;
}

function Certificates() {
  const { data, isLoading, isError } = useCertificatesHook();
  console.log(data, "data from the certificates");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load certificates.</div>;
  }

  return (
    <div className="container my-12">
      <div>
        <h1 className="title-text my-4 text-center">Certification</h1>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          // For tablets and larger devices
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {data?.certificates.map((certificate: CertificateTypes) => (
          <SwiperSlide key={certificate._id}>
            <div className="certificate-card relative group">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image object-cover w-full h-80 rounded-lg border border-blue-50 shadow-sm"
              />
              {/* Hover effect for title */}
              <div className="rounded-lg absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">
                  {certificate.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Certificates;
