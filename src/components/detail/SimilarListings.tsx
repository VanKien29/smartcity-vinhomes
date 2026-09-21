import Link from "next/link";
import type { Apartment } from "@/data/apartments";
import ApartmentCard from "@/components/ApartmentCard";

export default function SimilarListings({ apartments }: { apartments: Apartment[] }) {
  return (
    <section className="w-full py-space-xl bg-surface-white">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm pb-space-xs">
          <div className="flex flex-col gap-1">
            <span className="text-label-md uppercase tracking-wider text-accent-orange font-bold">Lựa chọn thay thế cùng phân khúc</span>
            <h2 className="text-headline-lg font-bold text-brand-navy-deep">
              Căn hộ tương tự cùng tòa I1 &amp; khu vực lân cận
            </h2>
          </div>
          <Link href="/" className="inline-flex items-center gap-1 text-label-md text-brand-navy-deep hover:text-accent-orange transition-colors no-underline">
            Xem tất cả căn Imperia
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} variant="compact" />
          ))}
        </div>

        {/* Quick Need Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-space-sm">
          <span className="text-label-md text-on-surface-variant mr-1">Xem thêm theo nhu cầu:</span>
          {[
            "Căn hộ Imperia đang cho thuê",
            "Căn 2 phòng ngủ",
            "2 phòng ngủ 10–12 triệu",
            "Tòa I1 Imperia",
            "Bảng giá thuê Smart City",
          ].map((tag) => (
            <Link key={tag} href="/" className="px-3 py-1 rounded-lg bg-surface text-brand-navy-deep text-body-sm hover:bg-surface-container transition-colors no-underline">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
