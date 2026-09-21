"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Trang chủ", path: "trang-chu" },
  { href: "/can-ho", label: "Căn hộ ở ngay", path: "can-ho-o-ngay", badge: "214" },
  { href: "/#full-pricing", label: "Bảng giá thuê", path: "bang-gia-thue" },
  { href: "/#phan-khu", label: "Phân khu", path: "phan-khu" },
  { href: "/#rental-guide-cards", label: "Cẩm nang thuê", path: "cam-nang-thue" },
  { href: "/#ky-gui", label: "Ký gửi", path: "ky-gui-cho-thue" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-white/95 backdrop-blur-xl border-b border-border-subtle shadow-[0_2px_12px_rgba(11,25,44,0.05)]">
      <div className="h-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group text-left no-underline shrink-0">
          <div className="w-10 h-10 rounded-xl bg-brand-navy-deep flex items-center justify-center shadow-[0_4px_12px_rgba(11,25,44,0.18)] transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-surface-white text-[22px]">apartment</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-xl font-extrabold tracking-tight text-brand-navy-deep">TimThue</span>
              <span className="text-xl font-extrabold text-accent-orange">SmartCity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-secondary font-medium tracking-wide">Quỹ căn thực tế 24/7</span>
            </div>
          </div>
        </Link>

        {/* Navigation - Always 1 single clean line */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-nowrap shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
            return (
              <Link
                key={link.path}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 no-underline ${
                  isActive
                    ? "bg-brand-navy-deep text-surface-white shadow-sm"
                    : "text-slate-600 hover:text-brand-navy-deep hover:bg-slate-100"
                }`}
              >
                <span className="whitespace-nowrap leading-none">{link.label}</span>
                {link.badge && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold leading-none whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-emerald-400/25 text-emerald-300 border border-emerald-400/30"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="hidden xl:flex items-center bg-slate-100/90 rounded-xl p-1 shrink-0 border border-slate-200/60">
            <button className="text-xs px-2.5 py-1 rounded-lg bg-brand-navy-deep text-surface-white font-bold transition-all shadow-xs">
              VI
            </button>
            <button className="text-xs px-2 py-1 rounded-lg text-slate-500 hover:text-brand-navy-deep font-semibold transition-all">
              EN
            </button>
            <button className="text-xs px-2 py-1 rounded-lg text-slate-500 hover:text-brand-navy-deep font-semibold transition-all">
              KR
            </button>
          </div>

          {/* Zalo CTA Button */}
          <a
            href="https://zalo.me/0977923284"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0068FF] hover:bg-blue-600 text-surface-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-[0_4px_14px_rgba(0,104,255,0.25)] hover:shadow-[0_6px_18px_rgba(0,104,255,0.35)] transition-all whitespace-nowrap shrink-0 no-underline"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="whitespace-nowrap">Nhắn Zalo 0977.923.284</span>
          </a>
        </div>
      </div>
    </header>
  );
}
