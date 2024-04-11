import CarouselSection from "@/components/home/CarouselSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <section
      className='flex flex-col gap-y-16'
    >
      <CarouselSection />
      <WhyChooseUs />
    </section>
  );
}
