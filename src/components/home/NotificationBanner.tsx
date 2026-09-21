import Link from "next/link";

export default function NotificationBanner() {
  return (
    <aside
      aria-label="Thông báo cập nhật căn mới"
      className="w-full bg-brand-navy-deep text-surface-white py-2.5 px-margin-mobile text-center border-b border-white/10 relative z-30"
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-space-xs text-body-sm">
        <span className="text-accent-orange font-bold flex items-center gap-1">
          <span className="material-symbols-outlined text-[17px]">bolt</span> Quỹ căn T03/2025:
        </span>
        <span className="text-surface-white/90">
          Hôm nay đã bổ sung <strong>18 căn hộ mới</strong> giá tốt từ chính chủ —
        </span>
        <Link
          href="#featured-listings"
          className="text-accent-orange hover:underline font-semibold inline-flex items-center gap-0.5 ml-1 no-underline"
        >
          Xem ngay kẻo lỡ <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
        </Link>
      </div>
    </aside>
  );
}
