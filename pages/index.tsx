import BestSellers from "@/components/home/BestSellers";
import Blogs from "@/components/home/BlogsComponentHome";
import CarouselSection from "@/components/home/CarouselSection";
import AboutUs from "@/components/home/HowTo";
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
    <section className="flex flex-col gap-y-24">
      <CarouselSection />
      <SearchComponent />
      {/* <WhyChooseUs /> */}
      <BestSellers />
      <AboutUs />
      <TopChoices scrollToSection={scrollToFAQ} />
      {/* <FAQ faqRef={faqRef} /> */}
      <Blogs blogsRef={scrollRef} />
      <Partners />
      <Testimonials />
      <TripAdvisorReview />
    </section>
  );
}
