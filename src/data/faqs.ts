export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Giá thuê căn hộ Vinhomes Smart City hiện nay khoảng bao nhiêu?",
    answer:
      'Giá thuê căn hộ tại Vinhomes Smart City dao động phổ biến từ khoảng <strong>5.5 – 7.5 triệu đồng/tháng</strong> đối với căn Studio, <strong>7 – 10 triệu/tháng</strong> đối với căn 1 ngủ / 1 ngủ+, và từ <strong>10 – 18 triệu đồng/tháng</strong> cho căn 2–3 phòng ngủ full nội thất cao cấp tại phân khu Masteri West Heights hoặc Lumière Evergreen.',
  },
  {
    id: 2,
    question: "Vị trí Vinhomes Smart City ở đâu và giao thông có thuận tiện không?",
    answer:
      "Dự án tọa lạc tại phường Tây Mỗ, quận Nam Từ Liêm, Hà Nội, ngay trục Đại lộ Thăng Long kết nối trực tiếp đến Trung tâm Hội nghị Quốc gia, Keangnam và Mỹ Đình chỉ trong 7–10 phút di chuyển. Hệ thống xe buýt điện VinBus chạy nội ngoại khu liên tục.",
  },
  {
    id: 3,
    question: "Khách thuê có phải trả phí môi giới hoặc phí dịch vụ dẫn xem nhà không?",
    answer:
      "<strong>Hoàn toàn không.</strong> Khách thuê được hỗ trợ tư vấn, dẫn xem nhà trực tiếp và làm thủ tục hợp đồng hoàn toàn miễn phí 100%. Mọi chi phí dịch vụ vận hành nền tảng do phía chủ nhà ký gửi thanh toán.",
  },
  {
    id: 4,
    question: "Chi phí dịch vụ quản lý tòa nhà, gửi xe ô tô và xe máy tại khu đô thị?",
    answer:
      "Phí dịch vụ quản lý thông thường dao động từ 8.000 – 16.500đ/m² (tùy phân khu Sapphire hay Masteri/Lumière). Phí gửi xe máy là 45.000đ/tháng và vé xe ô tô khoảng 1.250.000đ/tháng tại các bãi đỗ xe nổi hoặc tầng hầm.",
  },
];
