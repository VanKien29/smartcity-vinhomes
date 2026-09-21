import Link from "next/link";
import type { Apartment } from "@/data/apartments";

export default function Breadcrumb({ apartment }: { apartment: Apartment }) {
  return (
    <section className="w-full bg-slate-50/80 border-b border-slate-200/70 py-2.5">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Breadcrumb Path */}
        <nav className="flex items-center gap-1.5 sm:gap-2 text-slate-500 overflow-x-auto whitespace-nowrap py-0.5">
          <Link
            href="/"
            className="hover:text-brand-navy-deep no-underline transition-colors flex items-center gap-1 text-slate-600 font-medium"
          >
            <span className="material-symbols-outlined text-[17px]">home</span>
            <span>Trang chủ</span>
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-600 font-medium">{apartment.subdivision}</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-semibold truncate">
            Căn hộ {apartment.typeLabel.split("·")[0]?.trim() || apartment.typeLabel} ({apartment.area}m²)
          </span>
        </nav>

        {/* Mã Căn Tag */}
        <div className="shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
            <span className="text-slate-400 font-normal">Mã căn:</span>
            <strong className="text-brand-navy-deep font-mono font-bold">{apartment.code}</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
