import FaqSection from "@/components/cards/Sections/FaqSection";
import FeaturesSection from "@/components/cards/Sections/FeaturesSection";
import PopularSports from "@/components/cards/Sections/PopularSports";
import WhyChooseUs from "@/components/cards/Sections/WhyChooseUs";
import Banner from "@/components/ShareComponents/Banner";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturesSection></FeaturesSection>
      <WhyChooseUs></WhyChooseUs>
      <PopularSports></PopularSports>
      <FaqSection></FaqSection>
    </div>
  );
}
