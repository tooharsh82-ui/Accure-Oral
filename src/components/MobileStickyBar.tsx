import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';

export const MobileStickyBar: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E0F2FE] bg-white/95 px-4 py-3 backdrop-blur-md shadow-2xl lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        {/* Call Button */}
        <a
          href={`tel:${CLINIC_DATA.phoneTel}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F0F9FF] border border-[#E0F2FE] py-3 text-sm font-bold text-slate-700 hover:text-[#0284C7] active:scale-[0.98] transition min-h-[44px]"
        >
          <Phone className="h-4 w-4 text-[#0EA5E9]" />
          <span>Call</span>
        </a>

        {/* Book Your Appointment Button */}
        <a
          href="#booking"
          onClick={handleScrollToBooking}
          className="flex flex-[1.6] items-center justify-center gap-2 rounded-xl bg-[#0EA5E9] py-3 text-sm font-bold text-white shadow-md shadow-[#0EA5E9]/20 hover:bg-[#0284C7] active:scale-[0.98] transition min-h-[44px]"
        >
          <Calendar className="h-4 w-4" />
          <span>Book Your Appointment</span>
        </a>
      </div>
    </div>
  );
};
