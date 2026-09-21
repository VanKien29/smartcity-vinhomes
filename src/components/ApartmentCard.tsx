import Link from "next/link";
import type { Apartment } from "@/data/apartments";

interface ApartmentCardProps {
  apartment: Apartment;
  variant?: "featured" | "compact";
}

export default function ApartmentCard({ apartment, variant = "featured" }: ApartmentCardProps) {
  if (variant === "compact") {
    return (
      <div className="bg-surface-white rounded-2xl overflow-hidden shadow-sm border border-border-subtle/80 hover:shadow-md hover:border-accent-orange/40 transition-all flex flex-col group">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={`Căn hộ ${apartment.typeLabel} ${apartment.building}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={apartment.heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/60 via-transparent to-transparent opacity-80" />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-status-available-bg text-status-available-text text-label-sm font-bold shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-status-available-text animate-pulse" />
            {apartment.statusLabel}
          </span>
          <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-navy-deep/80 text-on-primary text-[11px] backdrop-blur-sm">
            <span className="material-symbols-outlined text-[13px]">photo_camera</span>
            {apartment.photoCount} ảnh
          </span>
        </div>
        <div className="p-space-md flex flex-col justify-between flex-1 gap-space-sm">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <h3 className="text-headline-sm font-bold text-brand-navy-deep group-hover:text-accent-orange transition-colors">{apartment.typeLabel}</h3>
              <span className="px-2 py-0.5 rounded bg-surface-container-low text-secondary text-label-sm">{apartment.furnishingTag}</span>
            </div>
            <div className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-accent-orange">location_on</span>
              <span>{apartment.building} · {apartment.area} m²</span>
            </div>
          </div>
          <div className="pt-3 border-t border-border-subtle/70 flex items-center justify-between">
            <div className="text-price-md font-bold text-accent-orange">
              {apartment.priceText}<span className="text-xs font-normal text-on-surface-variant">/th</span>
            </div>
            <Link
              href={`/can-ho/${apartment.slug}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-accent-orange hover:text-on-primary text-brand-navy-deep text-label-md transition-all no-underline shadow-sm"
            >
              Xem căn
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Featured variant (default)
  return (
    <div className="bg-surface-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={`Căn hộ ${apartment.typeLabel} ${apartment.subdivision}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={apartment.heroImage}
        />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="bg-status-available-bg text-status-available-text text-label-sm font-bold px-2.5 py-1 rounded-full shadow-sm">
            {apartment.statusLabel}
          </span>
          <span className="bg-brand-navy-deep/80 backdrop-blur-md text-surface-white text-label-sm px-2.5 py-1 rounded-full">
            {apartment.furnishingTag}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-brand-navy-deep/60 backdrop-blur-md text-surface-white text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1">
          <span className="material-symbols-outlined text-[13px]">photo_camera</span> {apartment.photoCount} ảnh
        </div>
      </div>
      <div className="p-space-md flex flex-col flex-1">
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-price-lg font-extrabold text-accent-orange">
            {apartment.priceText}<span className="text-body-sm text-secondary font-normal">/tháng</span>
          </span>
          <span className="text-code-id text-secondary">Mã: {apartment.code}</span>
        </div>
        <h3 className="text-headline-md font-bold text-brand-navy-deep mb-1 group-hover:text-accent-orange transition-colors">
          {apartment.typeLabel}
        </h3>
        <p className="text-body-sm text-secondary flex items-center gap-1 mb-space-md">
          <span className="material-symbols-outlined text-[16px] text-accent-orange">location_on</span>
          Phân khu {apartment.subdivision} · {apartment.building}
        </p>
        <div className="mt-auto pt-space-sm border-t border-border-subtle flex items-center justify-between gap-space-xs">
          <Link href={`/can-ho/${apartment.slug}`} className="text-label-md text-secondary hover:text-brand-navy-deep px-3 py-2 rounded-xl transition-colors no-underline">
            Xem chi tiết
          </Link>
          <a
            href="https://zalo.me/0977923284"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-zalo-blue text-surface-white text-label-md font-bold px-3.5 py-2 rounded-xl shadow-sm hover:bg-brand-navy-medium transition-all no-underline"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span> Nhắn Zalo
          </a>
        </div>
      </div>
    </div>
  );
}
