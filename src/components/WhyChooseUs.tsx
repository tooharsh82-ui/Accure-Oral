import React from 'react';
import { UserCheck, ClipboardList, Shield, Navigation } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="h-6 w-6 text-[#027ec0]" />,
  ClipboardList: <ClipboardList className="h-6 w-6 text-[#027ec0]" />,
  Shield: <Shield className="h-6 w-6 text-[#027ec0]" />,
  Navigation: <Navigation className="h-6 w-6 text-[#0284C7]" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-[#f2f9fe] border-b border-[#03a5fc]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="fade-up-element text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#027ec0] bg-[#e6f6ff] px-3 py-1 rounded-lg mb-3 border border-[#03a5fc]/20">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Patient Comfort Comes First
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We focus on providing attentive and reliable dental care for our patients in Arrah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_DATA.whyChooseUs.map((item) => (
            <div
              key={item.id}
              className="fade-up-element flex flex-col rounded-2xl bg-white p-6 sm:p-7 border border-[#d4efff] shadow-sm transition hover:shadow-md hover:border-[#03a5fc]/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6f6ff] mb-5">
                {iconMap[item.iconName]}
              </div>
              <h3 className="text-lg font-bold text-slate-800 leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
