import React from 'react';
import { Phone, Calendar, Star, MapPin } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';
import { ToothHeroIllustration } from './ToothHeroIllustration.tsx';

export const Hero: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white via-[#f2f9fe] to-white py-12 sm:py-16 lg:py-24 border-b border-[#03a5fc]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & CTAs */}
          <div className="fade-up-element lg:col-span-7 text-center lg:text-left">
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-3.5 py-1.5 shadow-sm border border-[#d4efff] mb-6">
              <div className="flex items-center text-[#03a5fc]">
                <Star className="h-4 w-4 fill-[#03a5fc]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                4.9 ★ · 16 Google Reviews
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-[1.12]">
              Healthy Smiles <br className="hidden sm:inline" />
              <span className="text-[#027ec0]">Start Here</span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Professional, personalized dental care in Shivganj, Arrah led by Dr. Saurabh Vishwakarma. We prioritize comfortable, gentle treatments for you and your family.
            </p>

            {/* Location & Status Line */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#03a5fc]" />
                Beside UCO Bank, near NS Mall, Shivganj
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="inline-flex items-center text-slate-600">
                {CLINIC_DATA.hoursText}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#booking"
                onClick={handleScrollToBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#03a5fc] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[#03a5fc]/25 transition-all hover:bg-[#027ec0] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Your Appointment</span>
              </a>

              <a
                href={`tel:${CLINIC_DATA.phoneTel}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm border border-[#d4efff] transition-all hover:bg-[#f2f9fe] hover:text-[#027ec0] hover:border-[#03a5fc]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] active:scale-[0.98]"
              >
                <Phone className="h-5 w-5 text-[#03a5fc]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Soft-blue illustration */}
          <div className="fade-up-element lg:col-span-5 flex justify-center">
            <ToothHeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
