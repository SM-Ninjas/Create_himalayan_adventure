import CarouselSection from "@/components/home/CarouselSection";
import FAQ from "@/components/home/FAQ";
import AboutUs from "@/components/home/HowTo";
import TopChoices from "@/components/home/TopChoices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Himalayan Adventure",
  description: "",
};

export default function Home() {
  return (
    <section className="flex flex-col gap-y-24">
      <CarouselSection />
      <WhyChooseUs />
      <AboutUs />
      <TopChoices />
      <FAQ />
    </section>
  );
}
