"use client";

import Link from "next/link";

const topSubdivisions = [
  { name: "The Sapphire (S1 - S4)", count: "68 căn" },
  { name: "Masteri West Heights", count: "42 căn" },
  { name: "Lumière Evergreen", count: "19 căn" },
  { name: "The Miami & The Sakura", count: "55 căn" },
  { name: "Imperia Smart City", count: "20 căn" },
  { name: "The Tonkin & The Canopy", count: "10 căn" },
];

const helpfulGuides = [
  { label: "Bảng phí quản lý & gửi xe 2025", href: "/#rental-guide-cards" },
  { label: "Quy trình làm thẻ cư dân & FaceID", href: "/#rental-guide-cards" },
  { label: "Mẫu hợp đồng thuê chuẩn pháp lý", href: "/#rental-guide-cards" },
  { label: "Thủ tục tạm trú chuyên gia nước ngoài", href: "/#rental-guide-cards" },
  { label: "Ký gửi cho thuê căn hộ nhanh 48h", href: "/#ky-gui" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200/80 text-slate-700">
      {/* Main Footer Links */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-deep flex items-center justify-center text-white shadow-sm">
                <span className="material-symbols-outlined text-[22px]">apartment</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">TimThue</span>
                <span className="text-xl font-extrabold text-accent-orange">SmartCity</span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Chuyên trang kết nối cho thuê căn hộ tại đại đô thị Vinhomes Smart City Tây Mỗ. Cập nhật quỹ căn chính chủ giá tốt nhất thị trường.
            </p>

            <div className="flex flex-col gap-2.5 mt-1 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs max-w-sm">
              <a
                href="tel:0977923284"
                className="flex items-center justify-between text-slate-900 hover:text-accent-orange font-bold text-sm transition-colors no-underline"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent-orange text-[18px]">phone_in_talk</span>
                  <span>Hotline: 0977.923.284</span>
                </span>
                <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
                  Hỗ trợ 24/7
                </span>
              </a>

              <div className="flex items-start gap-2 text-xs text-slate-500 pt-1 border-t border-slate-100">
                <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0 mt-0.5">location_on</span>
                <span>VP S2.02 KĐT Vinhomes Smart City, Tây Mỗ, Nam Từ Liêm, Hà Nội</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0">schedule</span>
                <span>Phục vụ: 7:30 - 22:00 tất cả các ngày trong tuần</span>
              </div>
            </div>
          </div>

          {/* Col 2: Subdivisions (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-3.5 rounded-full bg-accent-orange" />
              <span>Phân khu cho thuê</span>
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-600 list-none p-0 m-0">
              {topSubdivisions.map((sub) => (
                <li key={sub.name}>
                  <Link
                    href="/#phan-khu"
                    className="hover:text-accent-orange transition-colors flex items-center justify-between py-1 no-underline text-slate-600 hover:translate-x-0.5 transition-transform"
                  >
                    <span>{sub.name}</span>
                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md font-medium">
                      {sub.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Guides & Services (2.5 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-3.5 rounded-full bg-blue-600" />
              <span>Cẩm nang thuê</span>
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm list-none p-0 m-0">
              {helpfulGuides.map((guide) => (
                <li key={guide.label}>
                  <Link
                    href={guide.href}
                    className="hover:text-accent-orange transition-colors text-slate-600 no-underline block py-0.5 hover:translate-x-0.5 transition-transform"
                  >
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Quick Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-3.5 rounded-full bg-emerald-600" />
              <span>Nhận tin căn giá tốt</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nhận thông báo căn hộ mới gửi và danh sách căn giảm giá sâu trong tuần qua Zalo/Email.
            </p>

            <form
              className="flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Cảm ơn bạn! Chuyên viên sẽ gửi quỹ căn phù hợp qua số điện thoại của bạn ngay.");
              }}
            >
              <div className="flex items-center bg-white rounded-xl px-3 py-2 border border-slate-200 focus-within:border-accent-orange transition-colors shadow-2xs">
                <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">phone_iphone</span>
                <input
                  type="text"
                  required
                  placeholder="Nhập số điện thoại / Zalo"
                  className="w-full bg-transparent text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none border-none p-0"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-brand-navy-deep hover:bg-brand-navy-medium text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Nhận Quỹ Căn Miễn Phí</span>
                <span className="material-symbols-outlined text-[15px]">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="m-0 text-center sm:text-left">
            © 2025 <strong className="text-slate-700 font-semibold">TimThueSmartCity.com</strong>. Toàn bộ bản quyền được bảo lưu.
          </p>
          <p className="m-0 text-center sm:text-right text-[11px] text-slate-400 max-w-xl">
            Tuyên bố: TimThueSmartCity là nền tảng số độc lập kết nối dịch vụ thuê căn hộ, không phải website chính thức của chủ đầu tư Vinhomes.
          </p>
        </div>
      </div>
    </footer>
  );
}
