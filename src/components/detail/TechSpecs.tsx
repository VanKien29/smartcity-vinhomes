import type { Apartment } from "@/data/apartments";

export default function TechSpecs({ apartment }: { apartment: Apartment }) {
  const specs = [
    { icon: "tag", label: "Mã căn hộ", value: apartment.code, bold: true },
    { icon: "king_bed", label: "Loại hình căn", value: "Căn hộ 2 Phòng Ngủ (2WC, ban công thoáng)" },
    { icon: "straighten", label: "Diện tích", value: `${apartment.area} m² (tim tường)${apartment.areaNet ? ` · ${apartment.areaNet} m² (thông thủy)` : ""}` },
    { icon: "domain", label: "Vị trí tòa nhà", value: `${apartment.building} - ${apartment.subdivision} (gần nhà để xe 10 tầng & hồ trung tâm)` },
    { icon: "inventory_2", label: "Tình trạng nội thất", value: `${apartment.furnishingTag}: Đã sẵn sàng trọn bộ thiết bị vệ sinh đầy đủ, trần thạch cao, sàn gỗ cao cấp, hệ thống đèn chiếu sáng LED âm trần, đầu chờ điều hòa & bếp.` },
    { icon: "attach_money", label: "Giá thuê đề xuất", value: `${(apartment.price * 1000000).toLocaleString("vi-VN")} đ / tháng`, highlight: true, sub: "(Cố định nguyên hạn hợp đồng 1 năm)" },
    { icon: "vpn_key", label: "Thời gian bàn giao", value: "Sẵn sàng bàn giao chìa khóa & vào ở ngay", green: true },
    { icon: "history", label: "Kiểm tra quỹ căn", value: `${apartment.updatedAt} (Chủ nhà xác nhận còn trống)`, small: true },
  ];

  return (
    <div className="bg-surface-white rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between pb-space-xs">
        <h2 className="text-headline-md text-brand-navy-deep font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-accent-orange text-[22px]">tune</span>
          Thông số kỹ thuật căn hộ
        </h2>
        <span className="text-code-id text-on-surface-variant">Dữ liệu niêm yết minh bạch</span>
      </div>

      <div className="overflow-hidden rounded-xl bg-surface-porcelain">
        <div className="divide-y divide-border-subtle">
          {specs.map((spec) => (
            <div key={spec.label} className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-surface-container-low transition-colors">
              <span className="text-label-md text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-secondary">{spec.icon}</span>
                {spec.label}
              </span>
              <span className={`sm:col-span-2 ${
                spec.highlight
                  ? "text-headline-sm font-bold text-accent-orange"
                  : spec.green
                    ? "text-body-md font-semibold text-status-available-text"
                    : spec.small
                      ? "text-code-id text-on-surface-variant"
                      : spec.bold
                        ? "text-headline-sm font-bold text-brand-navy-deep"
                        : "text-body-md font-semibold text-brand-navy-deep"
              }`}>
                {spec.value}
                {spec.sub && <span className="text-body-sm font-normal text-on-surface-variant ml-1">{spec.sub}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      {apartment.description && (
        <div className="flex flex-col gap-2 pt-2">
          <span className="text-label-md uppercase tracking-wider text-brand-navy-deep font-bold">Mô tả chi tiết từ chuyên viên khảo sát</span>
          <p className="text-body-md text-on-surface leading-relaxed bg-surface-porcelain p-space-md rounded-xl">
            {apartment.description}
          </p>
        </div>
      )}

      {/* CTA Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">
        <a
          href="https://zalo.me/0977923284"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-space-md py-3.5 rounded-xl bg-zalo-blue text-on-primary text-headline-sm hover:opacity-95 transition-all no-underline shadow-md"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Nhắn Zalo hỏi căn {apartment.code}
        </a>
        <a
          href="tel:0977923284"
          className="inline-flex items-center justify-center gap-2 px-space-md py-3.5 rounded-xl bg-accent-orange text-on-primary text-headline-sm hover:bg-accent-orange-dark transition-all no-underline shadow-md"
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          Gọi điện 0977.923.284
        </a>
      </div>
    </div>
  );
}
