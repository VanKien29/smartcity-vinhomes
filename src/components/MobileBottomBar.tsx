export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-surface-white/95 backdrop-blur-xl border-t border-border-subtle py-2 px-4 shadow-[0_-4px_16px_rgba(11,25,44,0.1)] flex items-center gap-3">
      <a
        href="tel:0977923284"
        className="flex-1 py-2.5 px-3 rounded-xl bg-surface-container text-brand-navy-deep text-label-md font-bold flex items-center justify-center gap-1.5 shadow-sm no-underline"
      >
        <span className="material-symbols-outlined text-accent-orange text-[18px]">call</span>
        <span>Gọi 0977.923.284</span>
      </a>
      <a
        href="https://zalo.me/0977923284"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-zalo-blue text-surface-white text-label-md font-bold flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(0,104,255,0.25)] no-underline"
      >
        <span className="material-symbols-outlined text-[18px]">chat</span>
        <span>Nhắn Zalo Ngay</span>
      </a>
    </div>
  );
}
