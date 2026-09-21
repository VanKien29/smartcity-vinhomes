"use client";

import Link from "next/link";

const footerSubdivisions = [
  { name: "The Sapphire (S1, S2, S3, S4)", count: "68 căn" },
  { name: "Masteri West Heights", count: "42 căn" },
  { name: "Lumière Evergreen", count: "19 căn" },
  { name: "The Miami (Grand Sapphire)", count: "31 căn" },
  { name: "The Sakura (Chuẩn Nhật)", count: "24 căn" },
  { name: "Imperia Smart City", count: "20 căn" },
  { name: "The Canopy Residences", count: "6 căn" },
  { name: "The Tonkin (Indochine)", count: "4 căn" },
];

const guideLinks = [
  "Bảng phí dịch vụ quản lý & gửi xe 2025",
  "Quy trình làm thẻ cư dân & đăng ký vân tay",
  "Kinh nghiệm chọn căn hộ hướng mát, không ồn",
  "Mẫu hợp đồng thuê căn hộ chuẩn pháp lý",
  "Chính sách tạm trú cho chuyên gia nước ngoài",
  "Ký gửi cho thuê nhà trống / full nội thất",
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-white text-on-surface shadow-[0_-1px_10px_rgba(11,25,44,0.03)]">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <div className="w-9 h-9 rounded-xl bg-brand-navy-deep flex items-center justify-center text-surface-white">
                <span className="material-symbols-outlined text-[20px]">apartment</span>
              </div>
              <div>
                <span className="text-headline-sm font-bold text-brand-navy-deep">TimThue</span>
                <span className="text-headline-sm font-extrabold text-accent-orange">SmartCity</span>
              </div>
            </div>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Hệ thống kết nối trực tiếp khách thuê và chủ nhà tại đại đô thị Vinhomes Smart City Tây Mỗ, Nam Từ Liêm, Hà Nội. Cam kết giá thực tế, quỹ căn thật, hỗ trợ xem nhà 24/7 và tư vấn pháp lý minh bạch.
            </p>
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs text-body-sm text-brand-navy-deep font-semibold">
                <span className="material-symbols-outlined text-accent-orange text-[18px]">call</span>
                <span>Hotline hỗ trợ: 0977 923 284</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm text-secondary">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span>Khung giờ phục vụ: 7:00 - 22:00 hàng ngày</span>
              </div>
              <div className="flex items-center gap-space-xs text-body-sm text-secondary">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>Văn phòng: S2.02 Vinhomes Smart City, Hà Nội</span>
              </div>
            </div>
          </div>

          {/* Column 2: Subdivisions */}
          <div className="flex flex-col gap-space-md">
            <h3 className="text-headline-sm font-bold text-brand-navy-deep flex items-center gap-space-xs">
              <span className="w-1.5 h-4 rounded-full bg-accent-orange" />
              <span>Phân khu căn hộ</span>
            </h3>
            <ul className="grid grid-cols-1 gap-space-xs text-body-sm text-on-surface-variant list-none p-0 m-0">
              {footerSubdivisions.map((sub) => (
                <li key={sub.name}>
                  <Link href="/#phan-khu" className="hover:text-brand-navy-deep transition-colors flex items-center justify-between py-1 no-underline text-on-surface-variant">
                    <span>{sub.name}</span>
                    <span className="text-code-id text-secondary">{sub.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Guides */}
          <div className="flex flex-col gap-space-md">
            <h3 className="text-headline-sm font-bold text-brand-navy-deep flex items-center gap-space-xs">
              <span className="w-1.5 h-4 rounded-full bg-brand-navy-medium" />
              <span>Cẩm nang &amp; Phí dịch vụ</span>
            </h3>
            <ul className="flex flex-col gap-space-xs text-body-sm text-on-surface-variant list-none p-0 m-0">
              {guideLinks.map((link) => (
                <li key={link}>
                  <Link href="/#rental-guide-cards" className="hover:text-brand-navy-deep transition-colors flex items-center gap-space-xs py-1 no-underline text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-secondary">arrow_right</span>
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-space-md">
            <h3 className="text-headline-sm font-bold text-brand-navy-deep flex items-center gap-space-xs">
              <span className="w-1.5 h-4 rounded-full bg-status-available-text" />
              <span>Nhận căn mới mỗi ngày</span>
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              Đăng ký nhận thông báo căn hộ giá tốt nhất khi chủ nhà vừa gửi tin cho thuê trong 30 phút qua.
            </p>
            <form className="flex flex-col gap-space-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center bg-surface-container-low rounded-xl px-space-sm py-space-xs shadow-[0_1px_3px_rgba(11,25,44,0.05)]">
                <span className="material-symbols-outlined text-secondary text-[18px] mr-space-xs">mail</span>
                <input
                  className="w-full bg-transparent text-body-sm text-on-surface placeholder:text-outline focus:outline-none border-none"
                  placeholder="Số điện thoại hoặc Email"
                  type="email"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-space-md bg-brand-navy-deep text-surface-white text-label-md rounded-xl hover:bg-brand-navy-medium transition-all shadow-sm font-semibold flex items-center justify-center gap-space-xs"
              >
                <span>Đăng ký nhận quỹ căn</span>
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
            </form>
            <div className="p-space-sm rounded-xl bg-surface-container-low">
              <div className="flex items-center gap-space-xs text-label-sm text-brand-navy-deep font-bold mb-1">
                <span className="material-symbols-outlined text-status-available-text text-[16px]">verified</span>
                <span>Minh bạch thông tin</span>
              </div>
              <p className="text-body-sm text-on-surface-variant m-0">
                Tất cả căn hộ niêm yết đều được đối soát tình trạng phòng trống định kỳ. Hoàn toàn miễn phí phí môi giới với khách thuê.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-space-lg bg-surface-porcelain/60 rounded-xl px-space-md py-space-sm flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[16px]">info</span>
            <p className="text-label-sm text-secondary m-0">
              Tuyên bố: TimThueSmartCity.com là nền tảng số độc lập kết nối dịch vụ thuê căn hộ, không phải website chính thức từ chủ đầu tư Vinhomes.
            </p>
          </div>
          <p className="text-label-sm text-secondary shrink-0 m-0">© 2025 TimThueSmartCity.com. Toàn bộ bản quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
