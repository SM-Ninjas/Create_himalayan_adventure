import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Partner {
  _id: string;
  logo: string;
  name: string;
  url : string
}

interface PartnersResponse {
  partners: Partner[];
}



const fetchPartners = async ():Promise<PartnersResponse> => {
  const response = await fetch("http://localhost:8800/api/partners");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Partners = () => {
  const { data , error, isLoading } = useQuery(
    {
      queryKey: ["partners"], queryFn: fetchPartners
    });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container overflow-hidden">
      <h1 className="title-text mb-8">Our Partners</h1>
      <Swiper
        centeredSlides
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 120,
          },
        }}
        // navigation
        modules={[Autoplay, Navigation]}
        className="flex items-center"
      >
        {data?.partners.map((partner) => (
          <SwiperSlide key={partner._id}>
            <Link href={`${partner.url}`}>
            <img
              className="h-16 lg:h-16"
              src={partner.logo}
              alt={partner.name}
              />
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
