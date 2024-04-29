import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = () => {
  return (
    <div className="container overflow-hidden">
      {/* <div className="flex gap-24 infinite-scroll-animation">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center">
            <img className="h-10" src={partner.src} alt={partner.name} />
          </div>
        ))}
      </div> */}
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
        navigation
        modules={[Autoplay, Navigation]}
        className="flex items-center"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <img
              className="h-16 lg:h-10"
              src={partner.src}
              alt={partner.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;

const partners = [
  {
    id: 1,
    name: "Nepal Government",
    src: "partners/nepalGoverment.svg",
  },
  {
    id: 2,
    name: "NMA",
    src: "partners/nma.svg",
  },
  {
    id: 3,
    name: "NTB",
    src: "partners/ntb.svg",
  },
  {
    id: 4,
    name: "TAAN",
    src: "partners/taan.svg",
  },
  {
    id: 5,
    name: "keep",
    src: "partners/keep.webp",
  },
  {
    id: 6,
    name: "Bookmundi",
    src: "partners/bookmudi.webp",
  },
  {
    id: 7,
    name: "Guide",
    src: "partners/guide.webp",
  },
];
