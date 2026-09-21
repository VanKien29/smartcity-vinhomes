import { featuredApartments } from "@/data/apartments";
import ApartmentCard from "@/components/ApartmentCard";
import Link from "next/link";

const filterPills = [
  { label: "Tất cả (269)", active: true },
  { label: "Studio", active: false },
  { label: "1 Phòng ngủ", active: false },
  { label: "2 Phòng ngủ", active: false },
  { label: "Masteri", active: false },
  { label: "Lumière", active: false },
];

export default function FeaturedListings() {
  return (
    <section className="max-w-[1280px] w-full mx-auto px-margin-mobile lg:px-margin mt-space-xl" id="featured-listings">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-status-available-text" />
            <span className="text-label-sm uppercase tracking-wider text-secondary font-bold">Bảng hàng trực tiếp</span>
          </div>
          <h2 className="text-headline-xl text-brand-navy-deep font-bold">Căn Hộ Mới Cập Nhật Trong Ngày</h2>
        </div>
        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          {filterPills.map((pill) => (
            <button
              key={pill.label}
              type="button"
              className={`text-label-md px-3.5 py-1.5 rounded-full shadow-sm whitespace-nowrap ${
                pill.active
                  ? "bg-brand-navy-deep text-surface-white"
                  : "bg-surface-white text-secondary hover:text-brand-navy-deep"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {featuredApartments.map((apt) => (
          <ApartmentCard key={apt.id} apartment={apt} variant="featured" />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md mt-space-xl pt-space-md border-t border-border-subtle">
        <p className="text-body-sm text-secondary">
          Hiển thị <strong>9</strong> trong tổng số <strong>269</strong> căn hộ thực tế đang hoạt động
        </p>
        <div className="flex items-center gap-1.5">
          <button aria-label="Trang trước" className="w-9 h-9 rounded-xl bg-surface-white text-secondary hover:text-brand-navy-deep hover:bg-surface-container flex items-center justify-center transition-colors shadow-sm" type="button">
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button className="w-9 h-9 rounded-xl bg-brand-navy-deep text-surface-white text-label-md font-bold flex items-center justify-center shadow-sm" type="button">1</button>
          <button className="w-9 h-9 rounded-xl bg-surface-white text-on-surface hover:bg-surface-container text-label-md font-bold flex items-center justify-center transition-colors shadow-sm" type="button">2</button>
          <button className="w-9 h-9 rounded-xl bg-surface-white text-on-surface hover:bg-surface-container text-label-md font-bold flex items-center justify-center transition-colors shadow-sm" type="button">3</button>
          <span className="px-1 text-secondary">...</span>
          <button className="w-9 h-9 rounded-xl bg-surface-white text-on-surface hover:bg-surface-container text-label-md font-bold flex items-center justify-center transition-colors shadow-sm" type="button">12</button>
          <button aria-label="Trang sau" className="w-9 h-9 rounded-xl bg-surface-white text-secondary hover:text-brand-navy-deep hover:bg-surface-container flex items-center justify-center transition-colors shadow-sm" type="button">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
        <Link href="#expert-consult" className="inline-flex items-center gap-1.5 text-accent-orange text-label-md font-bold hover:underline no-underline">
          <span>Xem tất cả 260 căn hộ khác</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
