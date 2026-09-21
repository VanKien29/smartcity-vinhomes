import Link from "next/link";
import { categoryPills } from "@/data/pricing";

export default function CategoryBar() {
  return (
    <section className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
      {/* Header - Simple & Clean */}
      <div className="flex items-center justify-between mb-3 text-xs sm:text-sm">
        <span className="font-bold text-slate-700 tracking-tight">
          Phân loại căn hộ phổ biến
        </span>
        <Link
          href="#full-pricing"
          className="text-slate-500 hover:text-accent-orange transition-colors inline-flex items-center gap-1 no-underline font-medium"
        >
          <span>Bảng giá tổng hợp</span>
          <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
        </Link>
      </div>

      {/* 6 Category Pills - Soft, light and minimal */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
        {categoryPills.map((pill) => (
          <Link
            key={pill.label}
            href="#featured-listings"
            className="bg-slate-50/80 hover:bg-white rounded-xl p-2.5 sm:px-3 sm:py-2.5 border border-slate-200/60 hover:border-slate-300 transition-all flex flex-col gap-0.5 group no-underline hover:shadow-2xs"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-accent-orange transition-colors">
                {pill.label}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {pill.count} căn
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              {pill.priceFrom}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
