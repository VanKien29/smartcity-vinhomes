import Link from "next/link";

export default function NotificationBanner() {
  return (
    <aside
      aria-label="Thông báo cập nhật căn mới"
      className="w-full bg-brand-navy-deep text-surface-white py-2 px-3 sm:px-4 text-center border-b border-white/10 relative z-30 text-xs sm:text-sm"
    >
      <div className="max-w-[1360px] mx-auto flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
        <span className="text-accent-orange font-bold inline-flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">bolt</span>
          <span>Quỹ căn T03/2025:</span>
        </span>
        <span className="text-surface-white/90">
          <span className="hidden sm:inline">Hôm nay đã bổ sung </span>
          <strong className="text-emerald-400 font-bold">+18 căn hộ mới</strong> giá tốt —
        </span>
        <Link
          href="#featured-listings"
          className="text-amber-300 hover:text-white font-bold inline-flex items-center gap-0.5 no-underline ml-0.5 hover:underline whitespace-nowrap"
        >
          <span>Xem ngay</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </Link>
      </div>
    </aside>
  );
}
