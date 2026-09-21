"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Trang chủ", path: "trang-chu", icon: "home" },
  { href: "/can-ho", label: "Căn hộ ở ngay", path: "can-ho-o-ngay", badge: "214", icon: "key" },
  { href: "/#full-pricing", label: "Bảng giá thuê", path: "bang-gia-thue", icon: "sell" },
  { href: "/#phan-khu", label: "Phân khu", path: "phan-khu", icon: "domain" },
  { href: "/#rental-guide-cards", label: "Cẩm nang thuê", path: "cam-nang-thue", icon: "menu_book" },
  { href: "/#ky-gui", label: "Ký gửi", path: "ky-gui-cho-thue", icon: "real_estate_agent" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_12px_rgba(11,25,44,0.05)]">
      <div className="h-16 sm:h-20 max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo - Compact on mobile, expansive on desktop */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group text-left no-underline shrink-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-navy-deep flex items-center justify-center shadow-[0_3px_10px_rgba(11,25,44,0.18)] transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-surface-white text-[20px] sm:text-[22px]">apartment</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 leading-tight">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-brand-navy-deep">TimThue</span>
              <span className="text-lg sm:text-xl font-extrabold text-accent-orange">SmartCity</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide whitespace-nowrap">
                Quỹ căn thực tế
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Always 1 single clean line */}
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

        {/* Right Actions: Desktop vs Mobile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop Language Switcher */}
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

          {/* Desktop Zalo CTA Button */}
          <a
            href="https://zalo.me/0977923284"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#0068FF] hover:bg-blue-600 text-surface-white text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-[0_4px_14px_rgba(0,104,255,0.25)] hover:shadow-[0_6px_18px_rgba(0,104,255,0.35)] transition-all whitespace-nowrap shrink-0 no-underline"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="whitespace-nowrap">Nhắn Zalo 0977.923.284</span>
          </a>

          {/* Mobile Quick Zalo Pill (Compact) */}
          <a
            href="https://zalo.me/0977923284"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden w-9 h-9 rounded-xl bg-blue-50 text-[#0068FF] border border-blue-200 flex items-center justify-center shrink-0 no-underline"
            title="Chat Zalo"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-2xl shadow-xl px-4 py-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
              return (
                <Link
                  key={link.path}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between no-underline transition-colors ${
                    isActive
                      ? "bg-brand-navy-deep text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[19px] opacity-80">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>
                  {link.badge && (
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                      {link.badge} căn
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Action Row */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
              <span>Ngôn ngữ:</span>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                <button className="px-2.5 py-1 bg-brand-navy-deep text-white rounded font-bold">VI</button>
                <button className="px-2.5 py-1 text-slate-600 rounded">EN</button>
                <button className="px-2.5 py-1 text-slate-600 rounded">KR</button>
              </div>
            </div>

            <a
              href="tel:0977923284"
              className="w-full py-3 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm flex items-center justify-center gap-2 no-underline hover:bg-slate-200 transition-colors"
            >
              <span className="material-symbols-outlined text-accent-orange text-[18px]">call</span>
              <span>Hotline 24/7: 0977.923.284</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
