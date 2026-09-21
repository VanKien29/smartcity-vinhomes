import type { Apartment } from "@/data/apartments";

export default function DetailHeader({ apartment }: { apartment: Apartment }) {
  // Format price string to avoid double "triệu"
  const cleanPrice = apartment.priceText.replace("triệu", "").trim();

  return (
    <section className="w-full bg-white border-b border-slate-200/70 pt-5 sm:pt-6 pb-6 sm:pb-8">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges & Verification */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Đang trống • Vào ở ngay</span>
            </span>

            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
              <span className="material-symbols-outlined text-[15px] text-slate-400">apartment</span>
              <span>{apartment.building} • {apartment.subdivision}</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span className="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
            <span>Đã đối soát quỹ căn thực tế hôm nay</span>
          </div>
        </div>

        {/* Main Title & Price Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 sm:pb-7 border-b border-slate-100">
          <div className="flex-1 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Cho thuê căn hộ {apartment.typeLabel.split("·")[0]?.trim() || apartment.typeLabel} • {apartment.area}m² {apartment.building} – Vinhomes Smart City
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-500 font-medium mt-2.5">
              <span className="flex items-center gap-1 text-slate-600">
                <span className="material-symbols-outlined text-[17px] text-accent-orange">location_on</span>
                <span>Phân khu {apartment.subdivision}, Vinhomes Smart City, Tây Mỗ, Hà Nội</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-slate-500">
                Cập nhật: <strong className="text-slate-700 font-semibold">{apartment.updatedAt}</strong>
              </span>
            </div>
          </div>

          {/* Clean Price Block - Fixed duplicate "triệu" bug */}
          <div className="flex flex-col items-start lg:items-end shrink-0 bg-orange-50/60 lg:bg-transparent p-3.5 lg:p-0 rounded-2xl border border-orange-100 lg:border-none">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-4xl font-black text-accent-orange tracking-tight">
                {cleanPrice}
              </span>
              <span className="text-base sm:text-lg font-bold text-accent-orange">
                triệu/tháng
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Phí thuê niêm yết chính chủ • Không qua trung gian
            </span>
          </div>
        </div>

        {/* 4 Unified Metric Cards (Key Specifications) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6">
          {/* Metric 1: Diện tích */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Diện tích tim tường
              </span>
              <div className="w-8 h-8 rounded-lg bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">square_foot</span>
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {apartment.area} m²
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1 m-0">
                Thiết kế 2PN + 2WC
              </p>
            </div>
          </div>

          {/* Metric 2: Giá cố định */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Giá thuê cố định
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-100/80 text-accent-orange flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">payments</span>
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-accent-orange tracking-tight">
                {cleanPrice} triệu
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1 m-0">
                Hợp đồng chuẩn 1 năm
              </p>
            </div>
          </div>

          {/* Metric 3: Gói nội thất */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Gói nội thất
              </span>
              <div className="w-8 h-8 rounded-lg bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">chair</span>
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {apartment.furnishingTag}
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1 m-0">
                Bàn giao từ CĐT
              </p>
            </div>
          </div>

          {/* Metric 4: Thời điểm dọn vào */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Thời điểm dọn vào
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">event_available</span>
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-600 tracking-tight">
                Vào ngay
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1 m-0">
                Đã dọn dẹp vệ sinh sạch sẽ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
