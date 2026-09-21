import type { Metadata } from "next";
import { detailApartment, similarApartments } from "@/data/apartments";
import Breadcrumb from "@/components/detail/Breadcrumb";
import DetailHeader from "@/components/detail/DetailHeader";
import MediaGallery from "@/components/detail/MediaGallery";
import TechSpecs from "@/components/detail/TechSpecs";
import BookingSidebar from "@/components/detail/BookingSidebar";
import SimilarListings from "@/components/detail/SimilarListings";
import LightboxModal from "@/components/detail/LightboxModal";

export async function generateMetadata(): Promise<Metadata> {
  const apt = detailApartment;
  return {
    title: `Cho thuê căn hộ ${apt.typeLabel} ${apt.building} – Vinhomes Smart City`,
    description: `Căn hộ ${apt.typeLabel} tại ${apt.building}, phân khu ${apt.subdivision}. Giá ${apt.priceText}/tháng. ${apt.furnishingTag}. Vào ở ngay.`,
  };
}

export default function ApartmentDetailPage() {
  const apartment = detailApartment;

  return (
    <div className="flex flex-col w-full">
      <Breadcrumb apartment={apartment} />
      <DetailHeader apartment={apartment} />

      {/* Main Content: 2-Column Layout */}
      <section className="w-full py-space-lg bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left Column */}
            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              <MediaGallery apartment={apartment} />
              <TechSpecs apartment={apartment} />
            </div>
            {/* Right Column */}
            <div className="lg:col-span-4 flex flex-col gap-space-md sticky top-24">
              <BookingSidebar apartment={apartment} />
            </div>
          </div>
        </div>
      </section>

      <SimilarListings apartments={similarApartments} />
      <LightboxModal />
    </div>
  );
}
