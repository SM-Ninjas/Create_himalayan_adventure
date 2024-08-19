import About from "@/components/about/AboutUs";
import OurTeam from "@/components/about/ourTeam";
import BestSellers from "@/components/home/BestSellers";
import Blogs from "@/components/home/BlogsComponentHome";
import CarouselMobileResponsive from "@/components/home/CarouselMobileResponsve";
import CarouselSection from "@/components/home/CarouselSection";
import HowTo from "@/components/home/HowTo";
import Partners from "@/components/home/Partners";
import SearchComponent from "@/components/home/SearchComponent";
import Testimonials from "@/components/home/Testimonials";
import TopChoices from "@/components/home/TopChoices";
import TripAdvisorReview from "@/components/home/TripAdvisorReview";
import { Metadata } from "next";
import React from "react";

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
      <BestSellers />
      <HowTo />
      <About />
      <TopChoices />
      <Blogs blogsRef={scrollRef} />
      {/* <OurTeam /> */}
      <Partners />
      <Testimonials />
      <TripAdvisorReview />
    </section>
  );
}
