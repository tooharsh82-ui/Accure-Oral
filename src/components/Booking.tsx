import React, { useState, useEffect } from 'react';
import { Calendar, User, Phone, Clock, Stethoscope, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinic.ts';

interface BookingProps {
  selectedService?: string;
}

export const Booking: React.FC<BookingProps> = ({ selectedService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning');
  const [service, setService] = useState('Not sure / General Checkup');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successNote, setSuccessNote] = useState('');

  // Update selected service if parent triggers it
  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  // Minimum date is today (YYYY-MM-DD)
  const todayDateString = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = 'Full name is required.';
    } else if (name.trim().length < 2) {
      errs.name = 'Please enter a valid full name.';
    }

    // Phone validation: exactly 10 digits
    const cleanPhone = phone.replace(/\D/g, '');
    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (cleanPhone.length !== 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!date) {
      errs.date = 'Preferred date is required.';
    } else if (date < todayDateString) {
      errs.date = 'Date cannot be in the past.';
    }

    if (!time) {
      errs.time = 'Please select a preferred time.';
    }

    if (!service) {
      errs.service = 'Please select a dental service.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSuccessNote('Opening WhatsApp to confirm your appointment...');

    const cleanPhone = phone.replace(/\D/g, '');
    const cleanMessage = message.trim() || 'None';

    const formattedMessage = [
      `Hello ${CLINIC_DATA.doctor}, I would like to book an appointment at ${CLINIC_DATA.name}.`,
      `Name: ${name.trim()}`,
      `Phone: ${cleanPhone}`,
      `Service: ${service}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${time}`,
      `Message: ${cleanMessage}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${CLINIC_DATA.WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-[#f2f9fe] border-b border-[#03a5fc]/15">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="fade-up-element text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#027ec0] bg-[#e6f6ff] px-3 py-1 rounded-lg mb-3 border border-[#03a5fc]/20">
            Appointment Request
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Schedule Your Visit
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Fill in your preferred date and contact details. Our clinic desk will review and confirm your slot promptly.
          </p>
        </div>

        <div className="fade-up-element rounded-2xl bg-white p-6 sm:p-10 border border-[#d4efff] shadow-md shadow-sky-900/5">
          {successNote && (
            <div className="mb-8 rounded-xl bg-[#e6f6ff] border border-[#03a5fc]/40 p-4 flex items-center gap-3 text-slate-800">
              <CheckCircle className="h-5 w-5 text-[#03a5fc] shrink-0" />
              <p className="text-sm font-semibold">{successNote}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-bold text-slate-800 mb-1.5">
                  Full Name <span className="text-[#03a5fc]">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="Enter your name"
                    className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] transition ${
                      errors.name ? 'border-red-400 ring-1 ring-red-300' : 'border-[#d4efff] hover:border-slate-300'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-medium">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate-800 mb-1.5">
                  Phone (10 digits) <span className="text-[#03a5fc]">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                    }}
                    placeholder="e.g. 9876543210"
                    maxLength={10}
                    className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] transition ${
                      errors.phone ? 'border-red-400 ring-1 ring-red-300' : 'border-[#d4efff] hover:border-slate-300'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-medium">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-bold text-slate-800 mb-1.5">
                  Preferred Date <span className="text-[#03a5fc]">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <input
                    type="date"
                    id="date"
                    min={todayDateString}
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      if (errors.date) setErrors((prev) => ({ ...prev, date: '' }));
                    }}
                    className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] transition ${
                      errors.date ? 'border-red-400 ring-1 ring-red-300' : 'border-[#d4efff] hover:border-slate-300'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-medium">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.date}</span>
                  </p>
                )}
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="time" className="block text-sm font-bold text-slate-800 mb-1.5">
                  Preferred Time <span className="text-[#03a5fc]">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-[#d4efff] bg-white py-3 pl-10 pr-4 text-sm text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] hover:border-slate-300 transition"
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-bold text-slate-800 mb-1.5">
                Service <span className="text-[#03a5fc]">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Stethoscope className="h-4 w-4" />
                </div>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl border border-[#d4efff] bg-white py-3 pl-10 pr-4 text-sm text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] hover:border-slate-300 transition"
                >
                  <option value="Not sure / General Checkup">Not sure / General Checkup</option>
                  {CLINIC_DATA.services.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message (Optional) */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-800 mb-1.5">
                Message <span className="text-xs font-normal text-slate-500">(Optional)</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute top-3.5 left-3.5 text-slate-400">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any specific tooth concerns, symptoms, or notes..."
                  className="w-full rounded-xl border border-[#d4efff] bg-white py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] hover:border-slate-300 transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#03a5fc] py-4 px-6 text-base font-bold text-white shadow-md shadow-[#03a5fc]/25 transition-all hover:bg-[#027ec0] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#03a5fc] focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
              >
                Book Your Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
