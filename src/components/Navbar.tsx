import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { ToothIcon } from './ToothIcon.tsx';
import { CLINIC_DATA } from '../data/clinic.ts';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#booking', label: 'Booking' },
  { href: '#faq', label: 'FAQ' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full border-b border-[#03a5fc]/20 bg-[#eef8fe] transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] rounded-xl"
        >
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white text-[#03a5fc] shadow-sm border border-[#03a5fc]/20 transition-transform group-hover:scale-105">
            <ToothIcon className="h-6 w-6 text-[#03a5fc]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base sm:text-lg font-medium tracking-tight text-slate-800 leading-tight">
              {CLINIC_DATA.name}
            </span>
            <span className="text-xs text-slate-500 font-normal">
              Shivganj, Arrah · {CLINIC_DATA.hoursText}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#027ec0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] rounded-md px-1.5 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${CLINIC_DATA.phoneTel}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#027ec0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] rounded-lg px-2 py-1.5"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#03a5fc] border border-[#03a5fc]/20">
              <Phone className="h-4 w-4" />
            </div>
            <span>{CLINIC_DATA.phoneDisplay}</span>
          </a>

          {/* Book Your Appointment button stays in dark blue */}
          <a
            href="#booking"
            onClick={(e) => handleScrollTo(e, '#booking')}
            className="inline-flex items-center justify-center rounded-xl bg-[#027ec0] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#027ec0]/25 transition-all hover:bg-[#02669c] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#027ec0] focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            Book Your Appointment
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${CLINIC_DATA.phoneTel}`}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#03a5fc] border border-[#03a5fc]/25 shadow-xs"
            aria-label="Call clinic directly"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#03a5fc]/25 bg-white text-slate-700 transition hover:bg-[#eef8fe] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#03a5fc]/20 bg-[#eef8fe] px-4 pt-3 pb-6 shadow-xl lg:hidden">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-white hover:text-[#027ec0] transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#booking"
                onClick={(e) => handleScrollTo(e, '#booking')}
                className="flex w-full items-center justify-center rounded-xl bg-[#027ec0] py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#02669c] transition"
              >
                Book Your Appointment
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
