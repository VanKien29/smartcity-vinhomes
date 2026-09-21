import { pricingByType } from "@/data/pricing";
import { subdivisions } from "@/data/subdivisions";

export default function PricingTables() {
  return (
    <section className="max-w-[1280px] w-full mx-auto px-margin-mobile lg:px-margin mt-space-xl" id="full-pricing">
      <div className="bg-surface-white rounded-2xl p-space-md lg:p-space-xl shadow-sm text-on-surface">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-accent-orange text-[20px]">analytics</span>
              <span className="text-label-sm uppercase tracking-wider text-secondary font-bold">Dữ liệu thị trường minh bạch</span>
            </div>
            <h2 className="text-headline-xl text-brand-navy-deep font-bold">Bảng Giá Thuê Vinhomes Smart City Hôm Nay</h2>
            <p className="text-body-md text-secondary mt-1">
              Thống kê cập nhật trực tiếp theo quỹ căn thực tế đang chào thuê, không áp dụng giá ảo quảng cáo.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-status-available-bg text-status-available-text text-label-md px-3 py-1.5 rounded-full font-bold">
            <span className="w-2 h-2 rounded-full bg-status-available-text animate-pulse" />
            <span>Cập nhật ngày 03/2025</span>
          </div>
        </div>

        {/* Two Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* Table 1: By Type */}
          <div className="flex flex-col">
            <div className="bg-surface-container-low rounded-t-xl px-4 py-3 text-headline-sm text-brand-navy-deep font-bold flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-accent-orange">pie_chart</span>
                <span>Theo Loại Căn Hộ</span>
              </span>
              <span className="text-code-id text-secondary font-normal">269 căn tổng cộng</span>
            </div>
            <div className="overflow-x-auto rounded-b-xl border border-border-subtle">
              <table className="w-full text-left text-body-md">
                <thead className="bg-surface-porcelain text-secondary text-label-md">
                  <tr>
                    <th className="py-3 px-4">Loại căn</th>
                    <th className="py-3 px-4 text-center">Đang có</th>
                    <th className="py-3 px-4 text-right">Khoảng giá thuê</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {pricingByType.map((row) => (
                    <tr key={row.type} className="hover:bg-surface-porcelain/80 transition-colors">
                      <td className="py-3 px-4 font-semibold text-brand-navy-deep">{row.type}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="bg-surface-container px-2 py-0.5 rounded-full font-bold text-brand-navy-deep text-code-id">{row.count} căn</span>
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-accent-orange">{row.priceRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: By Subdivision */}
          <div className="flex flex-col">
            <div className="bg-surface-container-low rounded-t-xl px-4 py-3 text-headline-sm text-brand-navy-deep font-bold flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-accent-orange">apartment</span>
                <span>Theo Phân Khu Dự Án</span>
              </span>
              <span className="text-code-id text-secondary font-normal">8 phân khu chính</span>
            </div>
            <div className="overflow-x-auto rounded-b-xl border border-border-subtle">
              <table className="w-full text-left text-body-md">
                <thead className="bg-surface-porcelain text-secondary text-label-md">
                  <tr>
                    <th className="py-3 px-4">Phân khu</th>
                    <th className="py-3 px-4 text-center">Đang có</th>
                    <th className="py-3 px-4 text-right">Khoảng giá thuê</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {subdivisions.map((row) => (
                    <tr key={row.id} className="hover:bg-surface-porcelain/80 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-brand-navy-deep">{row.name}</td>
                      <td className="py-2.5 px-4 text-center">
                        <span className="bg-surface-container px-2 py-0.5 rounded-full font-bold text-brand-navy-deep text-code-id">{row.count} căn</span>
                      </td>
                      <td className="py-2.5 px-4 text-right font-bold text-accent-orange">{row.priceRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
