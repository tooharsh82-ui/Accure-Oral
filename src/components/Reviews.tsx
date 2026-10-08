import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#03a5fc]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="fade-up-element text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#027ec0] bg-[#e6f6ff] px-3 py-1 rounded-lg mb-3 border border-[#03a5fc]/20">
            Patient Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Patient Reviews
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real feedback from patients who visited our clinic in Arrah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Summary Card */}
          <div className="fade-up-element flex flex-col justify-between rounded-2xl bg-[#03a5fc] p-7 text-white shadow-md shadow-[#03a5fc]/25">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/20 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                Google Rating
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight">{CLINIC_DATA.googleRating}</span>
                <span className="text-xl text-sky-100 font-semibold">/ 5.0</span>
              </div>
              
              <div className="mt-3 flex items-center gap-1 text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-white" />
                ))}
              </div>

              <p className="mt-4 text-sm text-sky-100">
                Based on {CLINIC_DATA.reviewCount} authentic Google reviews.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <a
                href={CLINIC_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
              >
                <span>View on Google</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* 3 Real Review Cards */}
          {CLINIC_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              className="fade-up-element flex flex-col justify-between rounded-2xl bg-[#f2f9fe] p-6 sm:p-7 border border-[#d4efff] shadow-sm transition hover:shadow-md hover:bg-white hover:border-[#03a5fc]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#03a5fc]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#03a5fc]" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-[#03a5fc]/30" />
                </div>

                <p className="text-base font-medium text-slate-800 italic leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#d4efff] flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700">
                  {rev.author}
                </span>
                <span className="text-xs font-semibold text-[#027ec0] bg-[#e6f6ff] px-2 py-0.5 rounded-md border border-[#03a5fc]/15">
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
