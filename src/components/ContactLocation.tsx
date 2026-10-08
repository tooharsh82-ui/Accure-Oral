import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';

export const ContactLocation: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#03a5fc]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="fade-up-element text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#027ec0] bg-[#e6f6ff] px-3 py-1 rounded-lg mb-3 border border-[#03a5fc]/20">
            Find Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Contact & Location
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently located in Shivganj, Arrah, right beside UCO Bank.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <div className="fade-up-element lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#f2f9fe] p-6 sm:p-8 border border-[#d4efff] shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  {CLINIC_DATA.name}
                </h3>
                <p className="text-sm font-semibold text-[#027ec0] mt-0.5">
                  {CLINIC_DATA.doctor}
                </p>
              </div>

              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e6f6ff] text-[#027ec0] border border-[#03a5fc]/15">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Address</h4>
                  <p className="mt-1 text-sm font-medium text-slate-800 leading-relaxed">
                    {CLINIC_DATA.address}
                  </p>
                  <p className="mt-0.5 text-xs text-[#027ec0]">
                    Landmark: {CLINIC_DATA.landmark}
                  </p>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e6f6ff] text-[#027ec0] border border-[#03a5fc]/15">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone</h4>
                  <a
                    href={`tel:${CLINIC_DATA.phoneTel}`}
                    className="mt-1 block text-base font-bold text-slate-800 hover:text-[#027ec0] transition"
                  >
                    {CLINIC_DATA.phoneDisplay}
                  </a>
                  <span className="text-xs text-slate-500">Call for queries & appointments</span>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e6f6ff] text-[#027ec0] border border-[#03a5fc]/15">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Clinic Hours</h4>
                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {CLINIC_DATA.hoursText}
                  </p>
                  <span className="text-xs text-slate-500">Consultation by schedule</span>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="mt-8 pt-6 border-t border-[#d4efff]">
              <a
                href={CLINIC_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#03a5fc] py-3.5 px-5 text-sm font-bold text-white shadow-sm shadow-[#03a5fc]/25 hover:bg-[#027ec0] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc]"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
                <ExternalLink className="h-4 w-4 ml-1 opacity-70" />
              </a>
            </div>
          </div>

          {/* Embedded Google Maps iFrame */}
          <div className="fade-up-element lg:col-span-7 overflow-hidden rounded-2xl border border-[#d4efff] shadow-sm bg-white min-h-[360px] sm:min-h-[420px] relative">
            <iframe
              title="Accure Oral And Dental Clinic Location Map"
              src={CLINIC_DATA.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
