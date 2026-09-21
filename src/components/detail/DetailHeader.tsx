import type { Apartment } from "@/data/apartments";

export default function DetailHeader({ apartment }: { apartment: Apartment }) {
  // Format price string to avoid double "triệu"
  const cleanPrice = apartment.priceText.replace("triệu", "").trim();

  return (
    <section className="w-full bg-white border-b border-slate-200/70 py-3 sm:py-4">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-2.5 sm:gap-3">
        {/* Top Row: Badges & Price */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
              <span className="material-symbols-outlined text-[14px] text-slate-400">apartment</span>
              <span>{apartment.building} • {apartment.subdivision}</span>
            </span>

            <span className="hidden md:inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
              <span className="material-symbols-outlined text-[15px] text-emerald-600">verified</span>
              <span>Đã đối soát thực tế</span>
            </span>
          </div>

          {/* Compact Price Pill */}
          <div className="flex items-baseline gap-1.5 shrink-0">
            <span className="text-2xl sm:text-3xl font-black text-accent-orange tracking-tight">
              {cleanPrice}
            </span>
            <span className="text-sm sm:text-base font-bold text-accent-orange">
              triệu/tháng
            </span>
            <span className="text-xs text-slate-400 font-medium ml-1 hidden sm:inline">
              (Giá chính chủ)
            </span>
          </div>
        </div>

        {/* Middle Row: Compact Title & Location */}
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-extrabold text-slate-900 tracking-tight leading-snug m-0">
            Cho thuê căn hộ {apartment.typeLabel.split("·")[0]?.trim() || apartment.typeLabel} • {apartment.area}m² {apartment.building} – Vinhomes Smart City
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 font-medium mt-1">
            <span className="flex items-center gap-1 text-slate-600">
              <span className="material-symbols-outlined text-[15px] text-accent-orange">location_on</span>
              <span>Phân khu {apartment.subdivision}, Tây Mỗ, Nam Từ Liêm, Hà Nội</span>
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-400">
              Cập nhật: <strong className="text-slate-600 font-semibold">{apartment.updatedAt}</strong>
            </span>
          </div>
        </div>

        {/* Bottom Row: Sleek 4-Spec Quick Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5">
          <div className="bg-slate-50/80 rounded-xl px-3 py-2 border border-slate-200/60 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[16px]">square_foot</span>
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                {apartment.area} m²
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 truncate leading-tight">
                Thiết kế 2PN + 2WC
              </div>
            </div>
          </div>

          <div className="bg-slate-50/80 rounded-xl px-3 py-2 border border-slate-200/60 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-orange-100/80 text-accent-orange flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[16px]">payments</span>
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-accent-orange leading-tight truncate">
                {cleanPrice} triệu
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 truncate leading-tight">
                Hợp đồng 1 năm
              </div>
            </div>
          </div>

          <div className="bg-slate-50/80 rounded-xl px-3 py-2 border border-slate-200/60 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[16px]">chair</span>
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                {apartment.furnishingTag}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 truncate leading-tight">
                Bàn giao CĐT
              </div>
            </div>
          </div>

          <div className="bg-slate-50/80 rounded-xl px-3 py-2 border border-slate-200/60 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[16px]">event_available</span>
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-emerald-600 leading-tight truncate">
                Vào ngay
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 truncate leading-tight">
                Đã vệ sinh sạch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
