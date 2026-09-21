export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071322] text-surface-white -mt-2 pt-6 sm:pt-8 lg:pt-10 pb-20 sm:pb-24 lg:pb-24">
      {/* Background Image with optimized dark overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Vinhomes Smart City Tây Mỗ Hà Nội"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out opacity-45"
          src="https://lh3.googleusercontent.com/aida/AEtjO1XxKHJswzppUYKY5VR9nx64LHl00dWSixiQh_Uu_wFrICeNyo-35BGN049C793Q-VOz-xeCiO5eg_hKdaLc9fOXYb8jIW5Z9yDdarv680zLRYIV-XJ6f4rA-yLddXPm8G4j_9j4Jz9NhUAoMN5JeZ54uSH-xKj0SGMPTxUx8aq3uhX0CTmoXvH3jkgZr8QmLXEDWZkBim21LdtFHfLyxGKJpQFZbTTYBV4GbBxejSX8Ut3l3tonOGRDSvM"
        />
      </div>

      {/* Layered Rich Gradients for maximum text legibility & pop */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071322]/90 via-[#0B192C]/75 to-[#071322]/95" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[300px] bg-orange-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Compact Live Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/85 border border-emerald-500/40 text-xs sm:text-sm font-semibold text-emerald-300 backdrop-blur-md shadow-sm mb-2.5 sm:mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>
            Quỹ căn cập nhật trực tiếp mỗi 30 phút • <strong className="text-white font-bold">269 căn thực tế</strong> (214 căn ở ngay)
          </span>
        </div>

        {/* Main Headline - PROMINENT, BOLD & COMPACT */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight text-white leading-[1.12] sm:leading-[1.15] max-w-4xl mb-2 sm:mb-2.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Cho Thuê Căn Hộ Chung Cư
          <span className="block mt-1 sm:mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#FFC247] via-[#FF7A00] to-[#FF4500] drop-shadow-[0_4px_24px_rgba(255,122,0,0.45)]">
            Vinhomes Smart City
          </span>
        </h1>

        {/* Sub-headline description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-2xl leading-normal mb-4 sm:mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          Tìm nhanh theo phân khu, mức giá, diện tích và nội thất. <br className="hidden sm:inline" />
          <span className="text-amber-300 font-semibold">100% Giá gốc chủ nhà</span> • Không phí môi giới • Xem nhà 24/7.
        </p>

        {/* Compact KPI Metric Counter Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 w-full max-w-3xl mb-1 sm:mb-2">
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/15 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center hover:border-white/30 transition-all shadow-md">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">269</span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider mt-0.5">
              Căn Đang Trống
            </span>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md border border-emerald-500/25 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center hover:border-emerald-500/50 transition-all shadow-md">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-400 tracking-tight">214</span>
            <span className="text-[10px] sm:text-xs font-bold text-emerald-200 uppercase tracking-wider mt-0.5">
              Sẵn Sàng Dọn Vào
            </span>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md border border-sky-500/25 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center hover:border-sky-500/50 transition-all shadow-md">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-sky-400 tracking-tight">8</span>
            <span className="text-[10px] sm:text-xs font-bold text-sky-200 uppercase tracking-wider mt-0.5">
              Phân Khu Đa Dạng
            </span>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md border border-amber-500/25 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center hover:border-amber-500/50 transition-all shadow-md">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-amber-400 tracking-tight">5.5 - 18.5</span>
            <span className="text-[10px] sm:text-xs font-bold text-amber-200 uppercase tracking-wider mt-0.5">
              Triệu/Tháng Linh Hoạt
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
