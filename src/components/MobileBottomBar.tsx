"use client";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-surface-white/95 backdrop-blur-xl border-t border-slate-200/80 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(11,25,44,0.08)] flex items-center gap-2.5">
      {/* Nút Gọi Điện - Đồng bộ tuyệt đối, không rớt dòng */}
      <a
        href="tel:0977923284"
        className="flex-1 h-11 px-2 rounded-xl bg-brand-navy-deep active:bg-brand-navy-medium text-surface-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap shrink-0 no-underline transition-transform active:scale-[0.98]"
      >
        <span className="material-symbols-outlined text-accent-orange text-[18px]">call</span>
        <span className="whitespace-nowrap leading-none">Gọi 0977.923.284</span>
      </a>

      {/* Nút Nhắn Zalo - Đồng bộ tuyệt đối, không rớt dòng */}
      <a
        href="https://zalo.me/0977923284"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-11 px-2 rounded-xl bg-[#0068FF] active:bg-blue-600 text-surface-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-[0_3px_12px_rgba(0,104,255,0.25)] whitespace-nowrap shrink-0 no-underline transition-transform active:scale-[0.98]"
      >
        <span className="material-symbols-outlined text-[18px]">chat</span>
        <span className="whitespace-nowrap leading-none">Nhắn Zalo Ngay</span>
      </a>
    </div>
  );
}
