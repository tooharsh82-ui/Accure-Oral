import React, { useState } from 'react';
import {
  Stethoscope,
  Sparkles,
  Sun,
  ShieldCheck,
  Activity,
  Layers,
  Anchor,
  Grid,
  Scissors,
  SmilePlus,
  Baby,
  Smile,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { CLINIC_DATA, ServiceItem } from '../data/clinic.ts';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="h-6 w-6 text-[#027ec0]" />,
  Sparkles: <Sparkles className="h-6 w-6 text-[#027ec0]" />,
  Sun: <Sun className="h-6 w-6 text-[#027ec0]" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-[#027ec0]" />,
  Activity: <Activity className="h-6 w-6 text-[#027ec0]" />,
  Layers: <Layers className="h-6 w-6 text-[#027ec0]" />,
  Anchor: <Anchor className="h-6 w-6 text-[#027ec0]" />,
  Grid: <Grid className="h-6 w-6 text-[#027ec0]" />,
  Scissors: <Scissors className="h-6 w-6 text-[#027ec0]" />,
  SmilePlus: <SmilePlus className="h-6 w-6 text-[#027ec0]" />,
  Baby: <Baby className="h-6 w-6 text-[#027ec0]" />,
  Smile: <Smile className="h-6 w-6 text-[#027ec0]" />,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll ? CLINIC_DATA.services : CLINIC_DATA.services.slice(0, 2);

  const handleServiceClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const target = document.querySelector('#booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#f2f9fe] border-b border-[#03a5fc]/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="fade-up-element text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#027ec0] bg-[#e6f6ff] px-3 py-1 rounded-lg mb-3 border border-[#03a5fc]/20">
            Our Dental Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Comprehensive Dental Care in Arrah
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From routine checkups and cleanings to orthodontic and restorative solutions, we provide attentive treatments for your oral health.
          </p>
        </div>

        {/* Services Grid (Shows 2 initially, expands to 12 upon clicking View All) */}
        <div
          className={`grid gap-5 sm:gap-6 ${
            !showAll
              ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}
        >
          {displayedServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="fade-up-element in-view group flex flex-col justify-between rounded-2xl bg-white p-6 border border-[#d4efff] shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#03a5fc]/60 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6f6ff] transition-colors group-hover:bg-[#03a5fc]/15">
                  {serviceIconMap[service.iconName] || <Sparkles className="h-6 w-6 text-[#027ec0]" />}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-800 group-hover:text-[#027ec0] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#f2f9fe]">
                <button
                  type="button"
                  onClick={() => handleServiceClick(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#027ec0] hover:text-[#03a5fc] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] rounded-md px-1 py-0.5 cursor-pointer"
                >
                  <span>Select & Book</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clean, Premium View All / Show Less Button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-2xl bg-white border border-[#03a5fc]/30 px-6 py-3 text-sm font-semibold text-[#027ec0] shadow-sm hover:bg-[#e6f6ff] hover:border-[#03a5fc] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] cursor-pointer"
          >
            <span>{showAll ? 'Show Fewer Services' : `View All Services (${CLINIC_DATA.services.length})`}</span>
            {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};
