import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TimThueSmartCity.com - Cho Thuê Căn Hộ Vinhomes Smart City",
    template: "%s | TimThueSmartCity.com",
  },
  description:
    "Cho thuê căn hộ chung cư Vinhomes Smart City Tây Mỗ. Quỹ 269 căn thực tế, giá từ 5.5 triệu/tháng. Hỗ trợ xem nhà 24/7 miễn phí. Hotline 0977.923.284.",
  keywords: [
    "cho thuê căn hộ vinhomes smart city",
    "thuê nhà smart city",
    "vinhomes smart city tây mỗ",
    "căn hộ cho thuê nam từ liêm",
  ],
  openGraph: {
    title: "TimThueSmartCity.com - Cho Thuê Căn Hộ Vinhomes Smart City",
    description:
      "Quỹ 269 căn hộ thực tế đang cho thuê tại Vinhomes Smart City. Giá từ 5.5 triệu/tháng.",
    type: "website",
    locale: "vi_VN",
    siteName: "TimThueSmartCity.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={plusJakartaSans.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-sans text-body-md text-on-surface antialiased">
        <Header />
        <main className="w-full pt-20 bg-surface-porcelain min-h-[calc(100vh-280px)]">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
