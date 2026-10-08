import React from 'react';
import { FileEdit, MessageCircle, Building2, ArrowRight } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';

const stepIconMap: Record<string, React.ReactNode> = {
  FileEdit: <FileEdit className="h-6 w-6 text-[#0284C7]" />,
  MessageCircle: <MessageCircle className="h-6 w-6 text-[#0284C7]" />,
  Building2: <Building2 className="h-6 w-6 text-[#0284C7]" />,
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-[#F0F9FF] border-b border-[#E0F2FE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="fade-up-element text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] px-3 py-1 rounded-lg mb-3">
            Simple Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Booking your dental visit in Arrah is straightforward and fast.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CLINIC_DATA.howItWorks.map((step, idx) => (
            <div
              key={step.number}
              className="fade-up-element relative flex flex-col rounded-2xl bg-white p-7 sm:p-8 border border-[#E0F2FE] shadow-sm transition hover:shadow-md"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0F2FE]">
                  {stepIconMap[step.iconName]}
                </div>
                <span className="text-3xl font-black text-[#0EA5E9]/30">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-800">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>

              {idx < CLINIC_DATA.howItWorks.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#0EA5E9]/40">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
