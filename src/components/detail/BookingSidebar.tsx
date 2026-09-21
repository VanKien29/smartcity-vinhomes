import type { Apartment } from "@/data/apartments";

export default function BookingSidebar({ apartment }: { apartment: Apartment }) {
  return (
    <div className="bg-surface-white rounded-2xl p-6 shadow-sm border border-border-subtle/80 flex flex-col">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-available-bg text-status-available-text font-semibold text-xs w-fit">
        <span className="w-2 h-2 rounded-full bg-status-available-text" />
        <span>Có thể vào ở ngay</span>
      </div>

      {/* Price */}
      <div className="mt-4">
        <div className="text-[32px] leading-tight font-extrabold text-brand-navy-deep tracking-tight">
          {apartment.priceText.replace("triệu", "").trim()} triệu/tháng
        </div>
        <div className="text-sm text-on-surface-variant mt-1">Giá thuê niêm yết chính chủ</div>
      </div>

      <div className="border-t border-border-subtle/70 my-5" />

      {/* Specifications */}
      <div className="flex flex-col gap-3.5 text-sm">
        <div className="flex items-center justify-between text-on-surface-variant">
          <span>Loại căn</span>
          <span className="font-bold text-brand-navy-deep text-base">{apartment.type === "2pn+" ? "2 Ngủ +" : apartment.type === "2pn" ? "2 Ngủ" : apartment.type === "1pn" ? "1 Ngủ" : apartment.type}</span>
        </div>
        <div className="flex items-center justify-between text-on-surface-variant">
          <span>Diện tích</span>
          <span className="font-bold text-brand-navy-deep text-base">{apartment.area} m²</span>
        </div>
        <div className="flex items-center justify-between text-on-surface-variant">
          <span>Tòa</span>
          <span className="font-bold text-brand-navy-deep text-base">{apartment.building.replace("Tòa ", "")}</span>
        </div>
        <div className="flex items-center justify-between text-on-surface-variant">
          <span>Nội thất</span>
          <span className="font-bold text-brand-navy-deep text-base">{apartment.furnishingTag}</span>
        </div>
      </div>

      <div className="border-t border-border-subtle/70 my-5" />

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="w-full py-3.5 px-4 rounded-xl bg-brand-navy-deep text-on-primary font-bold text-center transition hover:opacity-90 shadow-sm"
        >
          Đặt lịch xem căn
        </button>
        <a
          href="https://zalo.me/0977923284"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-4 rounded-xl bg-zalo-blue text-on-primary font-bold text-center transition hover:opacity-95 shadow-sm no-underline block"
        >
          Nhắn Zalo
        </a>
        <a
          href="tel:0977923284"
          className="w-full py-3.5 px-4 rounded-xl bg-surface-white border border-border-subtle text-brand-navy-deep font-bold text-center transition hover:bg-surface-porcelain shadow-sm no-underline block"
        >
          Gọi 0977 923 284
        </a>
      </div>

      {/* Footer */}
      <div className="text-center mt-5">
        <span className="text-xs text-on-surface-variant font-medium tracking-wide">Mã căn: {apartment.code}</span>
        <div className="border-t border-dashed border-border-subtle my-3.5" />
        <p className="text-xs text-on-surface-variant/80 leading-relaxed m-0">
          Thông tin căn được đồng bộ từ quỹ căn đang hiển thị trên website.
        </p>
      </div>
    </div>
  );
}
