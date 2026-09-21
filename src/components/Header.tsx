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
    <header className="fixed top-0 w-full z-50 bg-surface-white/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,25,44,0.06)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        {/* Logo */}
        <div className="flex items-center gap-space-lg">
          <Link href="/" className="flex items-center gap-space-sm group text-left no-underline">
            <div className="w-10 h-10 rounded-xl bg-brand-navy-deep flex items-center justify-center shadow-[0_4px_12px_rgba(11,25,44,0.18)]">
              <span className="material-symbols-outlined text-surface-white text-[22px]">apartment</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="text-headline-sm font-bold tracking-tight text-brand-navy-deep">TimThue</span>
                <span className="text-headline-sm font-extrabold text-accent-orange">SmartCity</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-status-available-text animate-pulse" />
                <span className="text-label-sm text-secondary font-medium tracking-wide">Quỹ căn thực tế</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden xl:flex items-center gap-space-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/" && pathname === "/");
            return (
              <Link
                key={link.path}
                href={link.href}
                className={`transition-colors py-space-xs flex items-center gap-space-xs no-underline ${
                  isActive
                    ? "bg-brand-navy-deep text-surface-white font-bold rounded-lg px-space-sm shadow-sm"
                    : "text-label-md text-on-surface-variant hover:text-brand-navy-deep"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="bg-status-available-bg text-status-available-text text-label-sm px-1.5 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-space-sm">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center bg-surface-container-low rounded-lg p-space-xs">
            <button className="text-label-sm px-2 py-1 rounded bg-brand-navy-deep text-surface-white font-semibold transition-all">VI</button>
            <button className="text-label-sm px-2 py-1 rounded text-secondary hover:text-on-surface transition-all">EN</button>
            <button className="text-label-sm px-2 py-1 rounded text-secondary hover:text-on-surface transition-all">KR</button>
          </div>
          {/* Zalo CTA */}
          <a
            href="https://zalo.me/0977923284"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-space-xs bg-zalo-blue text-surface-white text-label-md px-3.5 py-2 rounded-xl shadow-[0_4px_12px_rgba(0,104,255,0.22)] hover:bg-brand-navy-medium hover:text-surface-white transition-all no-underline"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Nhắn Zalo 0977.923.284</span>
          </a>
        </div>
      </div>
    </header>
  );
}
