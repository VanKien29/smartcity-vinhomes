import Link from "next/link";
import { categoryPills } from "@/data/pricing";

export default function CategoryBar() {
  return (
    <section className="max-w-[1280px] w-full mx-auto px-margin-mobile lg:px-margin mt-space-xl">
      <div className="flex items-center justify-between mb-space-sm">
        <h2 className="text-headline-sm text-brand-navy-deep font-bold flex items-center gap-2">
          <span className="w-1.5 h-4 rounded-full bg-accent-orange" />
          <span>Phân loại căn hộ phổ biến</span>
        </h2>
        <Link href="#full-pricing" className="text-label-md text-brand-navy-medium hover:text-accent-orange transition-colors inline-flex items-center gap-1 no-underline">
          Bảng giá tổng hợp <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
        {categoryPills.map((pill) => (
          <Link key={pill.label} href="#featured-listings" className="bg-surface-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex flex-col gap-1 group no-underline">
            <span className="text-headline-sm text-brand-navy-deep group-hover:text-accent-orange transition-colors">{pill.label}</span>
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-secondary">{pill.priceFrom}</span>
              <span className="text-code-id bg-surface-container px-1.5 py-0.5 rounded text-brand-navy-deep font-bold">{pill.count} căn</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
