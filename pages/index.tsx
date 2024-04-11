import AboutUs from "@/components/home/AboutUs";
import CarouselSection from "@/components/home/CarouselSection";
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
    </section>
  );
}
