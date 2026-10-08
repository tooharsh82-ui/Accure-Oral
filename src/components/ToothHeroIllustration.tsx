import React from 'react';
import { Shield, Sparkles, Clock } from 'lucide-react';
import { ToothIcon } from './ToothIcon.tsx';

export const ToothHeroIllustration: React.FC = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-[420px] sm:max-w-[480px] items-center justify-center py-6">
      {/* Outer concentric subtle ring */}
      <div className="absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-dashed border-[#03a5fc]/25 animate-pulse" />
      
      {/* Intermediate layered circle */}
      <div className="absolute h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-[#d4efff]/60 shadow-inner" />
      
      {/* Inner layer circle */}
      <div className="absolute h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[#e6f6ff] border border-[#03a5fc]/30" />

      {/* Main Center Tooth Emblem Card */}
      <div className="relative z-10 flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full bg-white shadow-xl shadow-[#03a5fc]/15 border-4 border-white transition-transform hover:scale-105 duration-300">
        <div className="flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full bg-[#f2f9fe]">
          <ToothIcon className="h-16 w-16 sm:h-20 sm:w-20 text-[#03a5fc]" fill="#d4efff" />
        </div>
      </div>

      {/* Floating supportive badge 1: Clean & Hygienic */}
      <div className="absolute -top-1 left-2 sm:left-4 z-20 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2 shadow-lg shadow-sky-900/5 border border-[#d4efff] backdrop-blur-sm">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e6f6ff] text-[#027ec0]">
          <Shield className="h-4 w-4" />
        </div>
        <span className="text-xs font-semibold text-slate-800">Clean & Hygienic</span>
      </div>

      {/* Floating supportive badge 2: Gentle Dentistry */}
      <div className="absolute bottom-2 right-2 sm:right-4 z-20 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2 shadow-lg shadow-sky-900/5 border border-[#d4efff] backdrop-blur-sm">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e6f6ff] text-[#027ec0]">
          <Sparkles className="h-4 w-4" />
        </div>
        <span className="text-xs font-semibold text-slate-800">Gentle Care</span>
      </div>

      {/* Floating supportive badge 3: Open daily */}
      <div className="absolute bottom-3 left-4 z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2 shadow-lg shadow-sky-900/5 border border-[#d4efff]">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f2f9fe] text-[#027ec0]">
          <Clock className="h-4 w-4" />
        </div>
        <span className="text-xs font-semibold text-slate-700">Open until 7 PM</span>
      </div>
    </div>
  );
};
