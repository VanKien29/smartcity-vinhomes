"use client";

export default function SearchFilter() {
  return (
    <section className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 lg:-mt-18 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6 text-on-surface border border-slate-100">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md mb-space-md pb-space-sm border-b border-border-subtle">
          <div className="flex items-center gap-space-xs text-headline-sm text-brand-navy-deep">
            <svg className="w-6 h-6 text-accent-orange shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" x2="20" y1="21" y2="21" /><line x1="4" x2="20" y1="14" y2="14" /><line x1="4" x2="20" y1="7" y2="7" />
              <circle cx="8" cy="7" fill="currentColor" r="2" /><circle cx="16" cy="14" fill="currentColor" r="2" /><circle cx="12" cy="21" fill="currentColor" r="2" />
            </svg>
            <span>Bộ lọc tìm kiếm thông minh</span>
          </div>
          {/* Quick Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors text-label-md">
              <input defaultChecked type="checkbox" className="rounded text-accent-orange focus:ring-0" />
              <span className="text-brand-navy-deep font-semibold inline-flex items-center gap-1">
                <svg className="w-4 h-4 text-accent-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h8l-2 8 11-13h-8l1-7z" /></svg>
                Vào ở ngay
              </span>
            </label>
            <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors text-label-md">
              <input defaultChecked type="checkbox" className="rounded text-accent-orange focus:ring-0" />
              <span className="text-brand-navy-deep inline-flex items-center gap-1">
                <svg className="w-4 h-4 text-accent-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2zm7 13l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z" /></svg>
                Căn mới hôm nay
              </span>
            </label>
          </div>
        </div>

        {/* Form Controls */}
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-md" id="hero-filter-form" onSubmit={(e) => e.preventDefault()}>
          {/* Loại căn */}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md text-secondary font-semibold flex items-center gap-1" htmlFor="filter-type">
              <span className="material-symbols-outlined text-[18px]">bed</span> Loại căn hộ
            </label>
            <div className="relative">
              <select className="w-full bg-surface-porcelain text-on-surface text-body-md rounded-xl px-3.5 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-navy-deep/20 shadow-sm cursor-pointer" id="filter-type">
                <option value="">Tất cả loại căn (269 căn)</option>
                <option value="studio">Studio (28 - 35m²)</option>
                <option value="1pn">1 Phòng ngủ (43m²)</option>
                <option value="1pn+">1 Phòng ngủ + (47 - 49m²)</option>
                <option value="2pn">2 Phòng ngủ (54 - 64m²)</option>
                <option value="2pn+">2 Phòng ngủ + (64 - 70m²)</option>
                <option value="3pn">3 Phòng ngủ (75 - 98m²)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-secondary">expand_more</span>
            </div>
          </div>
          {/* Phân khu */}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md text-secondary font-semibold flex items-center gap-1" htmlFor="filter-subdivision">
              <span className="material-symbols-outlined text-[18px]">location_city</span> Phân khu
            </label>
            <div className="relative">
              <select className="w-full bg-surface-porcelain text-on-surface text-body-md rounded-xl px-3.5 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-navy-deep/20 shadow-sm cursor-pointer" id="filter-subdivision">
                <option value="">Tất cả 8 phân khu</option>
                <option value="sapphire">The Sapphire (S1, S2, S3, S4)</option>
                <option value="masteri">Masteri West Heights</option>
                <option value="lumiere">Lumière Evergreen</option>
                <option value="miami">The Miami (Grand Sapphire)</option>
                <option value="sakura">The Sakura (Chuẩn Nhật)</option>
                <option value="imperia">Imperia Smart City</option>
                <option value="canopy">The Canopy Residences</option>
                <option value="tonkin">The Tonkin (Indochine)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-secondary">expand_more</span>
            </div>
          </div>
          {/* Khoảng giá */}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md text-secondary font-semibold flex items-center gap-1" htmlFor="filter-price">
              <span className="material-symbols-outlined text-[18px]">payments</span> Khoảng giá thuê
            </label>
            <div className="relative">
              <select className="w-full bg-surface-porcelain text-on-surface text-body-md rounded-xl px-3.5 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-navy-deep/20 shadow-sm cursor-pointer" id="filter-price">
                <option value="">Tất cả mức giá</option>
                <option value="u7">Dưới 7 triệu/tháng</option>
                <option value="7-10">7 - 10 triệu/tháng</option>
                <option value="10-12">10 - 12 triệu/tháng</option>
                <option value="12-15">12 - 15 triệu/tháng</option>
                <option value="o15">Trên 15 triệu/tháng</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-secondary">expand_more</span>
            </div>
          </div>
          {/* Nội thất */}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md text-secondary font-semibold flex items-center gap-1" htmlFor="filter-furnishing">
              <span className="material-symbols-outlined text-[18px]">chair</span> Tình trạng nội thất
            </label>
            <div className="relative">
              <select className="w-full bg-surface-porcelain text-on-surface text-body-md rounded-xl px-3.5 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-navy-deep/20 shadow-sm cursor-pointer" id="filter-furnishing">
                <option value="">Tất cả nội thất</option>
                <option value="full">Full nội thất (Chỉ xách vali về)</option>
                <option value="basic">Đồ cơ bản (Bếp, điều hòa, tủ)</option>
                <option value="raw">Nhà nguyên bản CĐT</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-secondary">expand_more</span>
            </div>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
          <div className="flex items-center gap-2 text-secondary text-body-sm order-2 sm:order-1">
            <span className="material-symbols-outlined text-status-available-text text-[18px]">verified</span>
            <span>Cam kết quỹ căn thực tế • Không phát sinh phụ phí môi giới</span>
          </div>
          <div className="flex items-center gap-space-sm w-full sm:w-auto order-1 sm:order-2">
            <button className="px-4 py-3 rounded-xl text-label-md text-secondary hover:text-brand-navy-deep hover:bg-surface-container-low transition-colors" type="reset" form="hero-filter-form">
              Xóa bộ lọc
            </button>
            <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-accent-orange hover:bg-accent-orange-dark text-surface-white text-label-md font-bold px-7 py-3 rounded-xl shadow-[0_4px_16px_rgba(249,115,22,0.32)] transition-all" type="submit" form="hero-filter-form">
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span>Tìm căn ngay (269 căn)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
