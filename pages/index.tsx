import CarouselSection from "@/components/home/CarouselSection";
import FAQ from "@/components/home/FAQ";
import AboutUs from "@/components/home/HowTo";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";
import TopChoices from "@/components/home/TopChoices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Himalayan Adventure",
  description: "",
};

export default function Home() {
  const faqRef = React.useRef<HTMLDivElement>(null);

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col gap-y-24">
      <CarouselSection />
      <WhyChooseUs />
      <AboutUs />
      <TopChoices scrollToSection={scrollToFAQ} />
      <FAQ faqRef={faqRef} />
      <Partners />
      <Testimonials />
    </section>
  );
}
