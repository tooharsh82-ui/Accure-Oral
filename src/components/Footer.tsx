import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { ToothIcon } from './ToothIcon.tsx';
import { CLINIC_DATA } from '../data/clinic.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#03a5fc]/15 bg-white pt-14 pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Clinic Brand & Doctor */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6f6ff] text-[#03a5fc] border border-[#03a5fc]/15">
                <ToothIcon className="h-6 w-6 text-[#03a5fc]" />
              </div>
              <div>
                <span className="text-base font-semibold text-slate-800 block">
                  {CLINIC_DATA.name}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {CLINIC_DATA.doctor} · {CLINIC_DATA.doctorRole}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600 max-w-sm leading-relaxed">
              Providing careful oral health treatments, consultations, cleanings, and smile care in Shivganj, Arrah.
            </p>

            <div className="mt-5 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#03a5fc]" />
                <span>{CLINIC_DATA.hoursText}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#03a5fc]" />
                <span>Shivganj, Arrah, Bihar 802301</span>
              </div>
            </div>
          </div>

          {/* Quick Links in requested sequence */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleScrollTo(e, '#hero')}
                  className="text-slate-600 hover:text-[#027ec0] transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, '#about')}
                  className="text-slate-600 hover:text-[#027ec0] transition"
                >
                  About Dr. Saurabh
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, '#services')}
                  className="text-slate-600 hover:text-[#027ec0] transition"
                >
                  Dental Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleScrollTo(e, '#gallery')}
                  className="text-slate-600 hover:text-[#027ec0] transition"
                >
                  Clinic Photos
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleScrollTo(e, '#why-us')}
                  className="text-slate-600 hover:text-[#027ec0] transition"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleScrollTo(e, '#reviews')}
                  className="text-slate-600 hover:text-[#027ec0] transition"
                >
                  Patient Reviews
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  onClick={(e) => handleScrollTo(e, '#booking')}
                  className="text-slate-600 hover:text-[#027ec0] transition"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleScrollTo(e, '#faq')}
                  className="text-slate-600 hover:text-[#027ec0] transition"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
              Contact & Appointments
            </h4>
            <div className="rounded-2xl bg-[#f2f9fe] p-5 border border-[#d4efff] space-y-3">
              <p className="text-xs text-slate-600">
                <strong className="text-slate-800 block mb-0.5">Clinic Location:</strong>
                {CLINIC_DATA.address}
              </p>
              <div className="pt-2 border-t border-[#d4efff]">
                <a
                  href={`tel:${CLINIC_DATA.phoneTel}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#027ec0] hover:text-[#03a5fc]"
                >
                  <Phone className="h-4 w-4" />
                  <span>{CLINIC_DATA.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider and disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#d4efff] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© {currentYear} {CLINIC_DATA.name}. All rights reserved.</p>
          <p className="max-w-xl text-center sm:text-right text-slate-400">
            Information on this website is general and not a substitute for professional dental advice.
          </p>
        </div>
      </div>
    </footer>
  );
};
