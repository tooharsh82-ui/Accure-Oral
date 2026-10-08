import React, { useState, useEffect } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ToothIcon } from './ToothIcon.tsx';
import { CLINIC_DATA } from '../data/clinic.ts';

const slotLabels = [
  'Clinic Consultation Area',
  'Dental Operatory & Patient Chair',
  'Hygienic Sterilization Desk',
  'Patient Reception & Waiting Lounge',
  'Diagnostic & Examination Setup',
  'Clinic Front & Access View',
];

export const Gallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % CLINIC_DATA.galleryUrls.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + CLINIC_DATA.galleryUrls.length) % CLINIC_DATA.galleryUrls.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeImageIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % CLINIC_DATA.galleryUrls.length : 0));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev !== null ? (prev - 1 + CLINIC_DATA.galleryUrls.length) % CLINIC_DATA.galleryUrls.length : 0
    );
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#03a5fc]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="fade-up-element text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#027ec0] bg-[#e6f6ff] px-3 py-1 rounded-lg mb-3 border border-[#03a5fc]/20">
            Clinic Preview
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Clinic Gallery
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A look inside our clean and comfortable dental facility in Shivganj, Arrah. Click any image to view in full resolution.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_DATA.galleryUrls.map((url, index) => {
            const hasImage = Boolean(url && url.trim().length > 0);
            const label = slotLabels[index] || `Clinic Photo ${index + 1}`;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`View full photo: ${label}`}
                className="fade-up-element group relative overflow-hidden rounded-2xl border border-[#d4efff] bg-[#f2f9fe] shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#03a5fc] aspect-[4/3] flex flex-col items-center justify-center cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc]"
              >
                {hasImage ? (
                  <>
                    <img
                      src={url}
                      alt={`${label} - Accure Oral And Dental Clinic`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                      loading="lazy"
                    />

                    {/* Gradient Overlay & Hover Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-sm font-semibold drop-shadow-md">
                          {label}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/25 backdrop-blur-md text-white border border-white/30">
                          <Maximize2 className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Static bottom subtle bar for clear labeling */}
                    <div className="absolute bottom-2 left-2 right-2 pointer-events-none rounded-lg bg-white/85 backdrop-blur-sm px-2.5 py-1 text-slate-700 text-xs font-medium border border-white/40 shadow-xs group-hover:opacity-0 transition-opacity">
                      {label}
                    </div>
                  </>
                ) : (
                  /* Placeholder when no image */
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#f2f9fe] to-[#e6f6ff] p-6 text-center">
                    <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border border-[#d4efff] text-[#03a5fc] group-hover:scale-110 transition-transform">
                      <ToothIcon className="h-9 w-9 text-[#03a5fc]" />
                      <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#e6f6ff] text-[#027ec0] border border-white">
                        <Camera className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-800">
                      Clinic Photo
                    </span>
                    <span className="text-xs text-slate-500 mt-1">
                      {label}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Lightbox"
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 sm:p-6 transition-opacity"
        >
          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col max-w-5xl w-full max-h-[92vh] rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-950/70 text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#03a5fc] bg-[#03a5fc]/15 px-2.5 py-1 rounded-md">
                  Photo {activeImageIndex + 1} of {CLINIC_DATA.galleryUrls.length}
                </span>
                <h3 className="text-sm sm:text-base font-semibold truncate text-slate-200">
                  {slotLabels[activeImageIndex] || 'Clinic Photo'}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={CLINIC_DATA.galleryUrls[activeImageIndex]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                  title="Open full image in new tab"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-red-500/80 transition cursor-pointer"
                  aria-label="Close image preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Image View */}
            <div className="relative flex items-center justify-center flex-1 bg-black/90 p-2 sm:p-4 min-h-[300px] max-h-[75vh] overflow-hidden">
              <img
                src={CLINIC_DATA.galleryUrls[activeImageIndex]}
                alt={slotLabels[activeImageIndex] || 'Accure Oral And Dental Clinic Photo'}
                className="max-h-[72vh] max-w-full object-contain rounded-lg transition-transform"
              />

              {/* Navigation Left Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 border border-white/20 text-white hover:bg-[#03a5fc] transition cursor-pointer shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Navigation Right Arrow */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 border border-white/20 text-white hover:bg-[#03a5fc] transition cursor-pointer shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom thumbnail strip / caption */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-slate-800 bg-slate-950/70 text-xs text-slate-400">
              <p>
                Accure Oral And Dental Clinic · Beside UCO Bank, Shivganj, Arrah
              </p>
              <div className="flex gap-1.5 overflow-x-auto py-1">
                {CLINIC_DATA.galleryUrls.map((thumbUrl, thumbIdx) => (
                  <button
                    key={thumbIdx}
                    type="button"
                    onClick={() => setActiveImageIndex(thumbIdx)}
                    className={`h-9 w-12 rounded-md overflow-hidden border transition shrink-0 cursor-pointer ${
                      activeImageIndex === thumbIdx
                        ? 'border-[#03a5fc] ring-2 ring-[#03a5fc]/50 scale-105'
                        : 'border-slate-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={thumbUrl}
                      alt={`Thumbnail ${thumbIdx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
