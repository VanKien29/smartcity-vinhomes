import type { Apartment } from "@/data/apartments";

export default function DetailHeader({ apartment }: { apartment: Apartment }) {
  return (
    <section className="w-full bg-surface-white pt-space-lg pb-space-md">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-lg">
          <div className="max-w-3xl flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-status-available-bg text-status-available-text text-label-sm uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-status-available-text animate-pulse" />
                Đang trống · Vào ngay
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-brand-navy-deep text-label-sm">
                {apartment.building} {apartment.subdivision}
              </span>
            </div>
            <h1 className="text-headline-xl font-bold tracking-tight text-brand-navy-deep">
              Cho thuê căn hộ {apartment.typeLabel} {apartment.building} – Vinhomes Smart City
            </h1>
            <p className="text-body-md text-on-surface-variant">
              Căn hộ {apartment.typeLabel} tại {apartment.building}, phân khu {apartment.subdivision}, Vinhomes Smart City. {apartment.furnishingTag}. Cập nhật ngày {apartment.updatedAt}.
            </p>
          </div>
          <div className="flex items-baseline lg:flex-col lg:items-end gap-2 shrink-0">
            <div className="flex items-baseline gap-1 text-accent-orange text-price-lg">
              <span>{apartment.priceText}</span>
              <span className="text-headline-sm font-semibold text-accent-orange">triệu/tháng</span>
            </div>
            <span className="text-body-sm text-on-surface-variant">Phí thuê niêm yết chính chủ</span>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-2">
          <div className="bg-surface-porcelain rounded-xl p-space-md shadow-sm flex flex-col gap-1 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-between text-secondary">
              <span className="text-label-md">Diện tích tim tường</span>
              <span className="material-symbols-outlined text-[20px]">square_foot</span>
            </div>
            <span className="text-headline-lg font-bold text-brand-navy-deep">{apartment.area} m²</span>
            <span className="text-body-sm text-on-surface-variant">Thiết kế 2PN + 2WC</span>
          </div>
          <div className="bg-surface-porcelain rounded-xl p-space-md shadow-sm flex flex-col gap-1 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-between text-secondary">
              <span className="text-label-md">Giá thuê cố định</span>
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </div>
            <span className="text-headline-lg font-bold text-accent-orange">{apartment.priceText}</span>
            <span className="text-body-sm text-on-surface-variant">Không qua trung gian</span>
          </div>
          <div className="bg-surface-porcelain rounded-xl p-space-md shadow-sm flex flex-col gap-1 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-between text-secondary">
              <span className="text-label-md">Gói nội thất</span>
              <span className="material-symbols-outlined text-[20px]">chair</span>
            </div>
            <span className="text-headline-lg font-bold text-brand-navy-deep">{apartment.furnishingTag}</span>
            <span className="text-body-sm text-on-surface-variant">Bàn giao từ CĐT</span>
          </div>
          <div className="bg-surface-porcelain rounded-xl p-space-md shadow-sm flex flex-col gap-1 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-between text-secondary">
              <span className="text-label-md">Thời điểm dọn vào</span>
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            </div>
            <span className="text-headline-lg font-bold text-status-available-text">Vào ngay</span>
            <span className="text-body-sm text-on-surface-variant">Đã dọn dẹp vệ sinh</span>
          </div>
        </div>
      </div>
    </section>
  );
}
