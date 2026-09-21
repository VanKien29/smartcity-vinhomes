export default function ConsignmentCTA() {
  return (
    <section className="max-w-[1280px] w-full mx-auto px-margin-mobile lg:px-margin mt-space-xl">
      <div className="bg-surface-white rounded-2xl p-space-md lg:p-space-lg shadow-sm border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-14 h-14 rounded-2xl bg-brand-navy-deep text-accent-orange flex items-center justify-center shrink-0 shadow-md">
            <span className="material-symbols-outlined text-[32px]">real_estate_agent</span>
          </div>
          <div>
            <h3 className="text-headline-md text-brand-navy-deep font-bold">
              Anh/chị là chủ sở hữu căn hộ cần cho thuê tại Smart City?
            </h3>
            <p className="text-body-sm text-secondary mt-0.5">
              Gửi thông tin và hình ảnh trực tiếp qua Zalo hoặc website, chúng tôi kết nối khách thuê uy tín nhanh chóng. Không mất phí đăng tin.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-sm shrink-0 w-full md:w-auto">
          <a href="tel:0977923284" className="flex-1 md:flex-none text-center px-4 py-2.5 rounded-xl border border-border-subtle text-brand-navy-deep hover:bg-surface-container text-label-md font-semibold transition-colors no-underline">
            Hotline: 0977 923 284
          </a>
          <a href="https://zalo.me/0977923284" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none text-center px-5 py-2.5 rounded-xl bg-brand-navy-deep hover:bg-brand-navy-medium text-surface-white text-label-md font-bold transition-all shadow-sm no-underline">
            Ký gửi cho thuê ngay →
          </a>
        </div>
      </div>
    </section>
  );
}
