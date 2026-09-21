"use client";

export default function LightboxModal() {
  const closeLightbox = () => {
    const modal = document.getElementById("lightbox-modal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-brand-navy-deep/90 backdrop-blur-md flex-col items-center justify-center p-4 hidden"
      id="lightbox-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLightbox();
      }}
    >
      <div className="relative max-w-4xl w-full flex flex-col items-center">
        <button
          className="absolute -top-12 right-0 text-on-primary hover:text-accent-orange flex items-center gap-1 text-label-md bg-transparent border-none cursor-pointer"
          onClick={closeLightbox}
        >
          <span>Đóng lại</span>
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Phóng to ảnh căn hộ thực tế"
          className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
          id="lightbox-img"
          src=""
        />
        <span className="mt-3 text-on-primary/80 text-body-sm">
          Ảnh chụp thực tế căn hộ - Vinhomes Smart City
        </span>
      </div>
    </div>
  );
}
