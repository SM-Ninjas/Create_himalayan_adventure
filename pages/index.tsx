import About from "@/components/about/AboutUs";
import OurTeam from "@/components/about/ourTeam";
import Destinations from "@/components/DestinationCard";
import BestSellers from "@/components/home/BestSellers";
import Blogs from "@/components/home/BlogsComponentHome";
import CarouselMobileResponsive from "@/components/home/CarouselMobileResponsve";
import CarouselSection from "@/components/home/CarouselSection";
import HowTo from "@/components/home/HowTo";
import Partners from "@/components/home/Partners";
import SearchComponent from "@/components/home/SearchComponent";
import Testimonials from "@/components/home/Testimonials";
import TopChoices from "@/components/home/TopChoices";
import PhotoGallery from "@/components/PhotoGallery";
import { Metadata } from "next";
import React from "react";
import ReviewsCHA from "@/components/reviews/Reviews";
import ReviewsSection from "@/components/reviews/ReviewsSection";


export const metadata: Metadata = {
  title: "Create Himalayan Adventure",
  description: "",
};

export default function Home() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollToFAQ = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col min-w-full gap-y-16">
               <CarouselSection />
          <CarouselMobileResponsive />
          <SearchComponent />
          <Destinations />
          <BestSellers />
          <ReviewsCHA />
          <HowTo />
          <About />
          <PhotoGallery location="Bhutan" />
          <TopChoices />
          <ReviewsSection />
          <Blogs blogsRef={scrollRef} />
          <OurTeam />
          <Partners />
          <Testimonials />

    </section>
  );
}
