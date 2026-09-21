import NotificationBanner from "@/components/home/NotificationBanner";
import HeroSection from "@/components/home/HeroSection";
import SearchFilter from "@/components/home/SearchFilter";
import CategoryBar from "@/components/home/CategoryBar";
import FeaturedListings from "@/components/home/FeaturedListings";
import PricingTables from "@/components/home/PricingTables";
import ConsignmentCTA from "@/components/home/ConsignmentCTA";
import RentalGuide from "@/components/home/RentalGuide";
import FAQSection from "@/components/home/FAQSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <NotificationBanner />
      <HeroSection />
      <SearchFilter />
      <CategoryBar />
      <FeaturedListings />
      <PricingTables />
      <ConsignmentCTA />
      <RentalGuide />
      <FAQSection />
    </div>
  );
}
