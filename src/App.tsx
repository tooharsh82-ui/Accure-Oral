/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Gallery } from './components/Gallery.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { Reviews } from './components/Reviews.tsx';
import { Booking } from './components/Booking.tsx';
import { Faq } from './components/Faq.tsx';
import { ContactLocation } from './components/ContactLocation.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = document.querySelectorAll('.fade-up-element');

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f2f9fe] text-slate-600 flex flex-col font-sans selection:bg-[#d4efff] selection:text-[#027ec0]">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Exact Order: Home → About → Services → Gallery → Why Us → Patient Review → Booking → FAQ */}
        {/* 1. Home */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Services (collapsible with View All) */}
        <Services onSelectService={(svc) => setSelectedService(svc)} />

        {/* 4. Gallery */}
        <Gallery />

        {/* 5. Why Us */}
        <WhyChooseUs />

        {/* 6. Patient Review */}
        <Reviews />

        {/* 7. Booking */}
        <Booking selectedService={selectedService} />

        {/* 8. FAQ */}
        <Faq />

        {/* Contact and Location */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
