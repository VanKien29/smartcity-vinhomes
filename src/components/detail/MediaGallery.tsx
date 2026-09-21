"use client";

import type { Apartment } from "@/data/apartments";

const galleryLabels = [
  { icon: "bed", label: "Phòng ngủ chính" },
  { icon: "countertops", label: "Khu bếp tiện nghi" },
  { icon: "bathtub", label: "Vệ sinh vách kính" },
];

export default function MediaGallery({ apartment }: { apartment: Apartment }) {
  const openLightbox = (src: string) => {
    const modal = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-img") as HTMLImageElement;
    if (modal && img) {
      img.src = src;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs border border-slate-200/80 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-1">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-orange-50 text-accent-orange flex items-center justify-center shrink-0 border border-orange-100">
            <span className="material-symbols-outlined text-[20px]">perm_media</span>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              Hình ảnh &amp; Video thực tế căn hộ
            </h2>
            <p className="text-xs text-slate-500 hidden sm:block mt-0.5">
              Chụp &amp; quay trực tiếp tại căn {apartment.code} • {apartment.building} • {apartment.subdivision}
            </p>
          </div>
        </div>

        {/* Quick View All Button in Header for fast access */}
        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all shrink-0 cursor-pointer"
          onClick={() => apartment.images[0] && openLightbox(apartment.images[0])}
        >
          <span className="material-symbols-outlined text-[16px] text-accent-orange">photo_library</span>
          <span>{apartment.photoCount} ảnh</span>
        </button>
      </div>

      {/* Gallery Mosaic Grid - Robust dimensions with zero overflow */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-auto md:h-[440px] lg:h-[460px]">
          {/* Hero Main Photo (7 cols) */}
          <div
            className="md:col-span-7 h-[280px] sm:h-[340px] md:h-full relative rounded-xl overflow-hidden group cursor-pointer bg-slate-900 shadow-inner"
            onClick={() => apartment.images[0] && openLightbox(apartment.images[0])}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Phòng khách & Ban công"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src={apartment.images[0] || apartment.heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-sm">
              <span className="material-symbols-outlined text-[14px] text-accent-orange">verified</span>
              <span>Ảnh thực tế căn hộ</span>
            </span>

            <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
              <span className="block text-sm sm:text-base font-bold drop-shadow-md">
                Phòng khách &amp; Ban công đón nắng
              </span>
              <span className="text-xs text-slate-200 drop-shadow-sm">
                Tầm view thoáng đãng, sàn gỗ và trần cao
              </span>
            </div>
          </div>

          {/* Right Sub-Grid: 2 cols x 2 rows (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-2 grid-rows-2 gap-3 h-[260px] sm:h-[320px] md:h-full min-h-0">
            {apartment.images.slice(1, 4).map((img, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden group cursor-pointer bg-slate-900 shadow-inner h-full min-h-0"
                onClick={() => openLightbox(img)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={galleryLabels[i]?.label || "Ảnh căn hộ"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <span className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white truncate drop-shadow-md flex items-center gap-1 pointer-events-none">
                  <span className="material-symbols-outlined text-[14px] text-accent-orange">
                    {galleryLabels[i]?.icon || "image"}
                  </span>
                  <span>{galleryLabels[i]?.label || "Ảnh căn hộ"}</span>
                </span>
              </div>
            ))}

            {/* Video Preview Card */}
            <div
              className="relative rounded-xl overflow-hidden group cursor-pointer bg-slate-900 border-2 border-accent-orange/50 hover:border-accent-orange transition-all shadow-md flex items-center justify-center h-full min-h-0"
              onClick={() => apartment.images[0] && openLightbox(apartment.images[0])}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-all duration-500 group-hover:scale-105"
                src={apartment.images[4] || apartment.heroImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-accent-orange text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border-2 border-white">
                  <span className="material-symbols-outlined text-[22px] ml-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_arrow
                  </span>
                </div>
                <span className="mt-1 text-xs text-white font-bold drop-shadow-md group-hover:text-amber-300 transition-colors">
                  Video quay căn {apartment.building.split(" ")[1]}
                </span>
              </div>
              <span className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900/90 text-white text-[10px] font-bold backdrop-blur-sm border border-white/20 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-ping" />
                <span>01:24</span>
              </span>
            </div>
          </div>
        </div>

        {/* Floating View All Photos Button in corner - Standard Modern Real Estate UX */}
        <button
          type="button"
          className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/95 hover:bg-white text-slate-900 text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md transition-all hover:scale-105 border border-white/80 cursor-pointer"
          onClick={() => apartment.images[0] && openLightbox(apartment.images[0])}
        >
          <span className="material-symbols-outlined text-[17px] text-accent-orange">photo_library</span>
          <span>Xem tất cả {apartment.photoCount} ảnh</span>
        </button>
      </div>

      {/* Bottom Toolbar - Clean, well-spaced, guaranteed never covered */}
      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0">verified</span>
          <span className="font-medium">
            Cam kết hình ảnh &amp; video quay chụp trực tiếp 100% tại căn hộ, không qua chỉnh sửa.
          </span>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy-deep hover:bg-brand-navy-medium text-white text-xs font-bold transition-all shadow-xs shrink-0 whitespace-nowrap cursor-pointer"
          onClick={() => apartment.images[0] && openLightbox(apartment.images[0])}
        >
          <span className="material-symbols-outlined text-[16px] text-accent-orange">photo_library</span>
          <span>Mở thư viện ảnh full HD</span>
        </button>
      </div>
    </div>
  );
}
