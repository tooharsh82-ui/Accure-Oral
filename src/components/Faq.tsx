import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';

export const Faq: React.FC = () => {
  // First item open by default for helpful immediate context
  const [openId, setOpenId] = useState<string | null>(CLINIC_DATA.faqs[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#03a5fc]/15">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="fade-up-element text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#027ec0] bg-[#e6f6ff] px-3 py-1 rounded-lg mb-3 border border-[#03a5fc]/20">
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Answers to common queries regarding oral health and clinic visits.
          </p>
        </div>

        <div className="space-y-3.5">
          {CLINIC_DATA.faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="fade-up-element overflow-hidden rounded-2xl border border-[#d4efff] bg-white transition hover:border-[#03a5fc]/50 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-slate-800">
                    <HelpCircle className="h-5 w-5 text-[#03a5fc] shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f2f9fe] text-[#027ec0] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#e6f6ff]' : ''
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="border-t border-[#d4efff]/60 bg-[#f2f9fe]/70 px-5 pb-6 pt-4 sm:px-6"
                  >
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick emergency callout */}
        <div className="fade-up-element mt-10 rounded-2xl bg-[#f2f9fe] p-5 sm:p-6 border border-[#d4efff] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-800">
              Have an urgent dental concern?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Give us a quick call at {CLINIC_DATA.phoneDisplay} to schedule an immediate consultation.
            </p>
          </div>
          <a
            href={`tel:${CLINIC_DATA.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 border border-[#d4efff] hover:bg-white hover:text-[#027ec0] hover:border-[#03a5fc]/60 transition shadow-sm shrink-0"
          >
            <PhoneCall className="h-4 w-4 text-[#03a5fc]" />
            <span>Call {CLINIC_DATA.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
