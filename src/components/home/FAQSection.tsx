"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="max-w-[1280px] w-full mx-auto px-margin-mobile lg:px-margin mt-space-xl mb-space-xl">
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
        <h2 className="text-headline-xl text-brand-navy-deep font-bold mb-2">Câu Hỏi Thường Gặp Khi Thuê Căn Hộ</h2>
        <p className="text-body-md text-secondary">
          Những thắc mắc phổ biến nhất của cư dân trước khi quyết định thuê nhà tại Vinhomes Smart City Tây Mỗ.
        </p>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col gap-space-sm" id="faq-container">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-surface-white rounded-xl shadow-sm p-space-md group transition-all"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full cursor-pointer text-headline-sm text-brand-navy-deep font-bold text-left bg-transparent border-none p-0"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              aria-expanded={openId === faq.id}
            >
              <span>{faq.id}. {faq.question}</span>
              <span className={`material-symbols-outlined text-secondary transition-transform ${openId === faq.id ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>
            {openId === faq.id && (
              <p
                className="text-body-md text-secondary mt-3 leading-relaxed border-t border-border-subtle pt-3"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
