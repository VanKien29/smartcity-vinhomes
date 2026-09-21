export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-navy-deep text-surface-white -mt-2 pt-14 pb-28 lg:pb-36">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Vinhomes Smart City Tây Mỗ Hà Nội"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          src="https://lh3.googleusercontent.com/aida/AEtjO1XxKHJswzppUYKY5VR9nx64LHl00dWSixiQh_Uu_wFrICeNyo-35BGN049C793Q-VOz-xeCiO5eg_hKdaLc9fOXYb8jIW5Z9yDdarv680zLRYIV-XJ6f4rA-yLddXPm8G4j_9j4Jz9NhUAoMN5JeZ54uSH-xKj0SGMPTxUx8aq3uhX0CTmoXvH3jkgZr8QmLXEDWZkBim21LdtFHfLyxGKJpQFZbTTYBV4GbBxejSX8Ut3l3tonOGRDSvM"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-navy-deep/75 via-brand-navy-deep/60 to-brand-navy-deep/90" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-orange/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex flex-col items-center text-center">
        {/* Sync Status Badge */}
        <div className="inline-flex items-center gap-space-xs bg-surface-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-space-md shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-status-available-text animate-pulse" />
          <span className="text-label-md text-surface-white/95">
            Quỹ căn đồng bộ tự động mỗi 30 phút • <strong>269 căn thực tế</strong> (214 căn ở ngay)
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-display-hero max-w-4xl tracking-tight text-surface-white mb-space-md font-extrabold leading-tight">
          Cho Thuê Căn Hộ Chung Cư <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-tertiary-fixed to-accent-orange">
            Vinhomes Smart City
          </span>
        </h1>

        <p className="text-body-lg text-surface-white/80 max-w-2xl mb-space-xl">
          Tìm nhanh theo phân khu, ngân sách, diện tích và mức độ nội thất. Dữ liệu chuẩn xác 100% từ chủ nhà, hỗ trợ xem nhà trực tiếp 24/7 hoàn toàn miễn phí.
        </p>

        {/* KPI Metric Counter Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm sm:gap-space-md w-full max-w-4xl mb-space-xl">
          <div className="bg-surface-white/10 backdrop-blur-md border border-white/10 rounded-xl p-space-md flex flex-col items-center justify-center hover:bg-surface-white/15 transition-all shadow-md">
            <span className="text-headline-xl font-extrabold text-surface-white">269</span>
            <span className="text-label-sm text-surface-white/80 uppercase tracking-wider mt-1">Tổng căn đang trống</span>
          </div>
          <div className="bg-surface-white/10 backdrop-blur-md border border-white/10 rounded-xl p-space-md flex flex-col items-center justify-center hover:bg-surface-white/15 transition-all shadow-md">
            <span className="text-headline-xl font-extrabold text-status-available-text">214</span>
            <span className="text-label-sm text-surface-white/80 uppercase tracking-wider mt-1">Sẵn sàng dọn vào</span>
          </div>
          <div className="bg-surface-white/10 backdrop-blur-md border border-white/10 rounded-xl p-space-md flex flex-col items-center justify-center hover:bg-surface-white/15 transition-all shadow-md">
            <span className="text-headline-xl font-extrabold text-secondary-container">8</span>
            <span className="text-label-sm text-surface-white/80 uppercase tracking-wider mt-1">Phân khu đa dạng</span>
          </div>
          <div className="bg-surface-white/10 backdrop-blur-md border border-white/10 rounded-xl p-space-md flex flex-col items-center justify-center hover:bg-surface-white/15 transition-all shadow-md">
            <span className="text-headline-xl font-extrabold text-accent-orange">5.5 - 18.5</span>
            <span className="text-label-sm text-surface-white/80 uppercase tracking-wider mt-1">Triệu/tháng linh hoạt</span>
          </div>
        </div>
      </div>
    </section>
  );
}
