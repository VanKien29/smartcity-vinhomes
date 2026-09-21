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
    <div className="bg-surface-white rounded-2xl p-space-md md:p-5 shadow-sm border border-border-subtle/80 flex flex-col gap-space-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-accent-orange text-[22px]">perm_media</span>
          <div>
            <h2 className="text-headline-sm text-brand-navy-deep font-bold">Hình ảnh &amp; Video thực tế căn hộ</h2>
            <p className="text-body-sm text-on-surface-variant hidden sm:block">
              Chụp &amp; quay trực tiếp tại căn {apartment.code} {apartment.building} {apartment.subdivision}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-auto md:h-[460px]">
        {/* Hero Photo */}
        <div
          className="md:col-span-7 h-[300px] md:h-full relative rounded-xl overflow-hidden group cursor-pointer bg-surface-container shadow-inner"
          onClick={() => apartment.images[0] && openLightbox(apartment.images[0])}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Phòng khách & Ban công"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            src={apartment.images[0] || apartment.heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-brand-navy-deep/10 to-transparent" />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-navy-deep/85 text-on-primary text-label-sm backdrop-blur-md shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-accent-orange">verified</span>
            Ảnh thực tế tại căn hộ
          </span>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-primary">
            <div>
              <span className="block text-headline-sm font-bold drop-shadow">Phòng khách &amp; Ban công đón nắng</span>
              <span className="text-body-sm text-surface-container-highest drop-shadow">Tầm view thoáng đãng, sàn gỗ và trần cao</span>
            </div>
          </div>
        </div>

        {/* Right Grid */}
        <div className="md:col-span-5 grid grid-cols-2 gap-3 h-[300px] md:h-full">
          {apartment.images.slice(1, 4).map((img, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group cursor-pointer bg-surface-container shadow-inner"
              onClick={() => openLightbox(img)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={galleryLabels[i]?.label || "Ảnh căn hộ"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-2 left-2 right-2 text-label-md text-on-primary truncate drop-shadow flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-accent-orange">{galleryLabels[i]?.icon || "image"}</span>
                {galleryLabels[i]?.label || "Ảnh căn hộ"}
              </span>
            </div>
          ))}

          {/* Video Card */}
          <div className="relative rounded-xl overflow-hidden group cursor-pointer bg-brand-navy-deep border-2 border-accent-orange/40 hover:border-accent-orange transition-all shadow-md flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-all duration-500 group-hover:scale-105"
              src={apartment.images[4] || apartment.heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/90 via-brand-navy-deep/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent-orange/90 group-hover:bg-accent-orange text-on-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-all border-2 border-surface-white">
                <span className="material-symbols-outlined text-[24px] sm:text-[26px] ml-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
              <span className="mt-1.5 text-label-md text-on-primary font-bold drop-shadow group-hover:text-accent-orange transition-colors">
                Video quay căn {apartment.building.split(" ")[1]}
              </span>
            </div>
            <span className="absolute top-2 right-2 inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-brand-navy-deep/90 text-on-primary text-[11px] backdrop-blur-sm border border-surface-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-ping mr-0.5" />
              01:24
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="pt-2 border-t border-border-subtle flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-1.5 text-body-sm text-on-surface">
          <span className="material-symbols-outlined text-status-available-text text-[18px]">verified</span>
          <span className="font-medium">Cam kết hình ảnh &amp; video quay chụp trực tiếp 100% không qua chỉnh sửa</span>
        </div>
        <button
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-brand-navy-deep text-label-md transition-all border border-border-subtle"
          onClick={() => apartment.images[0] && openLightbox(apartment.images[0])}
        >
          <span className="material-symbols-outlined text-[16px] text-accent-orange">photo_library</span>
          <span>Xem tất cả {apartment.photoCount} ảnh thực tế</span>
        </button>
      </div>
    </div>
  );
}
