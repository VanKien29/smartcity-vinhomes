import Link from "next/link";
import type { Apartment } from "@/data/apartments";

export default function Breadcrumb({ apartment }: { apartment: Apartment }) {
  return (
    <section className="w-full bg-surface-white py-space-sm border-b border-border-subtle/60">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex flex-wrap items-center justify-between gap-y-space-xs">
        <nav className="flex items-center gap-space-xs text-body-sm text-on-surface-variant">
          <Link href="/" className="hover:text-brand-navy-deep no-underline transition-colors flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">home</span>
            Trang chủ
          </Link>
          <span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
          <span className="text-on-surface-variant">{apartment.subdivision}</span>
          <span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
          <span className="text-brand-navy-deep font-semibold">Căn hộ {apartment.typeLabel}</span>
          <span className="ml-1.5 px-2 py-0.5 rounded bg-surface-container text-code-id text-brand-navy-medium">
            Mã: {apartment.code}
          </span>
        </nav>
      </div>
    </section>
  );
}
