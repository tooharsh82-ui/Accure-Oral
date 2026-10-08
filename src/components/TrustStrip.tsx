import React from 'react';
import { Star, Smile, HeartPulse, MapPin } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';

const iconMap: Record<string, React.ReactNode> = {
  Star: <Star className="h-6 w-6 text-[#0EA5E9] fill-[#0EA5E9]" />,
  Smile: <Smile className="h-6 w-6 text-[#0284C7]" />,
  HeartPulse: <HeartPulse className="h-6 w-6 text-[#0284C7]" />,
  MapPin: <MapPin className="h-6 w-6 text-[#0284C7]" />,
};

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust" className="bg-[#F0F9FF] py-10 border-b border-[#E0F2FE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CLINIC_DATA.trustStrip.map((item) => (
            <div
              key={item.id}
              className="fade-up-element flex items-center gap-4 rounded-2xl bg-white p-5 border border-[#E0F2FE] shadow-sm transition hover:shadow-md hover:border-[#0EA5E9]/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E0F2FE]">
                {iconMap[item.iconName]}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
