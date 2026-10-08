/**
 * Clinic Data Configuration File
 * All clinic contact details, hours, reviews, services, FAQs, and gallery items
 * are maintained here in one editable place.
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  source: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export const CLINIC_DATA = {
  name: "Accure Oral And Dental Clinic",
  doctor: "Dr. Saurabh Vishwakarma",
  doctorRole: "Dentist",
  phoneDisplay: "084343 82509",
  phoneTel: "+918434382509",
  WHATSAPP_NUMBER: "918434382509",
  address: "Beside UCO Bank, near NS Mall, Shivganj, Arrah, Bihar 802301",
  landmark: "Beside UCO Bank, near NS Mall",
  locality: "Shivganj, Arrah, Bihar",
  hoursText: "Open until 7:00 PM",
  googleRating: 4.9,
  reviewCount: 16,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Accure+Oral+And+Dental+Clinic+Shivganj+Arrah+Bihar",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Accure+Oral+And+Dental+Clinic+Shivganj+Arrah+Bihar+802301&output=embed",

  trustStrip: [
    {
      id: "trust-1",
      title: "4.9 Google Rating",
      subtitle: "Based on 16 patient reviews",
      iconName: "Star",
    },
    {
      id: "trust-2",
      title: "Friendly Staff",
      subtitle: "Welcoming and polite assistance",
      iconName: "Smile",
    },
    {
      id: "trust-3",
      title: "Personalised Care",
      subtitle: "Tailored to your dental comfort",
      iconName: "HeartPulse",
    },
    {
      id: "trust-4",
      title: "Easy Location",
      subtitle: "Shivganj, Arrah near NS Mall",
      iconName: "MapPin",
    },
  ] as TrustItem[],

  services: [
    {
      id: "srv-1",
      title: "General Checkup and Consultation",
      description: "Thorough oral examination and professional evaluation of teeth and gum health.",
      iconName: "Stethoscope",
    },
    {
      id: "srv-2",
      title: "Teeth Cleaning and Scaling",
      description: "Gentle plaque and tartar removal to maintain fresh breath and healthy gums.",
      iconName: "Sparkles",
    },
    {
      id: "srv-3",
      title: "Teeth Whitening",
      description: "Safe aesthetic treatments to lighten staining and brighten your natural smile.",
      iconName: "Sun",
    },
    {
      id: "srv-4",
      title: "Dental Fillings",
      description: "Restorative fillings to repair tooth cavities and prevent further decay.",
      iconName: "ShieldCheck",
    },
    {
      id: "srv-5",
      title: "Root Canal Treatment",
      description: "Careful procedure to relieve tooth discomfort and preserve natural teeth.",
      iconName: "Activity",
    },
    {
      id: "srv-6",
      title: "Crowns and Bridges",
      description: "Durable prosthetic caps and bridges to restore damaged or missing teeth.",
      iconName: "Layers",
    },
    {
      id: "srv-7",
      title: "Dental Implants",
      description: "Modern tooth replacement solutions anchored securely for natural function.",
      iconName: "Anchor",
    },
    {
      id: "srv-8",
      title: "Braces and Aligners",
      description: "Orthodontic options to guide teeth into proper alignment and balance.",
      iconName: "Grid",
    },
    {
      id: "srv-9",
      title: "Tooth Extraction and Wisdom Teeth",
      description: "Gentle tooth removal procedures with careful attention to patient comfort.",
      iconName: "Scissors",
    },
    {
      id: "srv-10",
      title: "Dentures",
      description: "Custom-fitted complete and partial dentures to restore chewing and smile.",
      iconName: "SmilePlus",
    },
    {
      id: "srv-11",
      title: "Children's Dentistry",
      description: "Gentle dental checkups and preventative advice tailored for young patients.",
      iconName: "Baby",
    },
    {
      id: "srv-12",
      title: "Smile Makeover",
      description: "Individualized aesthetic dental consultations to enhance your overall smile.",
      iconName: "Smile",
    },
  ] as ServiceItem[],

  whyChooseUs: [
    {
      id: "why-1",
      title: "Polite and caring staff",
      description: "Every member of our team is dedicated to listening patiently and ensuring a calm, supportive visit.",
      iconName: "UserCheck",
    },
    {
      id: "why-2",
      title: "Personalised treatment plans",
      description: "Careful dental assessments tailored to your individual dental needs and oral health goals.",
      iconName: "ClipboardList",
    },
    {
      id: "why-3",
      title: "Comfortable and hygienic clinic",
      description: "A sanitized, clean, and organized clinical setting designed for patient peace of mind.",
      iconName: "Shield",
    },
    {
      id: "why-4",
      title: "Convenient location near NS Mall",
      description: "Easily accessible in Shivganj, Arrah, situated right beside UCO Bank for simple travel.",
      iconName: "Navigation",
    },
  ] as WhyChooseUsItem[],

  howItWorks: [
    {
      number: "01",
      title: "Fill the form",
      description: "Choose your preferred date, time slot, and treatment interest right on this page.",
      iconName: "FileEdit",
    },
    {
      number: "02",
      title: "Confirm on WhatsApp",
      description: "Your details will open in WhatsApp so our clinic desk can immediately confirm your slot.",
      iconName: "MessageCircle",
    },
    {
      number: "03",
      title: "Visit the clinic",
      description: "Arrive at our Shivganj clinic beside UCO Bank for your consultation with Dr. Saurabh Vishwakarma.",
      iconName: "Building2",
    },
  ] as StepItem[],

  // ONLY real reviews provided in the prompt - strictly no extra reviews
  reviews: [
    {
      id: "rev-1",
      quote: "Perfect in Ara, Service is awesome",
      author: "Verified Patient",
      source: "Google Review",
      rating: 5,
    },
    {
      id: "rev-2",
      quote: "Staff is also polite.",
      author: "Verified Patient",
      source: "Google Review",
      rating: 5,
    },
    {
      id: "rev-3",
      quote: "Great place for the healthy teeth",
      author: "Verified Patient",
      source: "Google Review",
      rating: 5,
    },
  ] as ReviewItem[],

  // 6 gallery slots with real clinic photos
  galleryUrls: [
    "https://i.ibb.co/PZRb7mgq/dr1.webp",
    "https://i.ibb.co/rK1kP6Fb/dr2.webp",
    "https://i.ibb.co/rKvyh0gT/dr3.webp",
    "https://i.ibb.co/s9BwrMj8/dr4.webp",
    "https://i.ibb.co/jvPdmd3d/dr5.webp",
    "https://i.ibb.co/TfnX2hX/dr6.webp",
  ],

  // 6 generic, careful FAQ answers with zero prices or guarantees
  faqs: [
    {
      id: "faq-1",
      question: "How often should I visit a dentist for a checkup?",
      answer: "Most dental professionals recommend visiting for a routine checkup and cleaning every six months. Regular visits help detect plaque buildup, cavities, and gum issues early before they cause discomfort.",
    },
    {
      id: "faq-2",
      question: "Is root canal treatment painful?",
      answer: "Modern root canal procedures are performed with local anesthesia to keep you as comfortable as possible. The primary goal of the treatment is actually to relieve the pain caused by deep inflammation or infection inside the tooth.",
    },
    {
      id: "faq-3",
      question: "What should I do if I have severe tooth pain or a dental emergency?",
      answer: "If you are experiencing acute toothache, swelling, or trauma to a tooth, please call our clinic directly at 084343 82509 so we can arrange prompt attention and advise you on immediate steps.",
    },
    {
      id: "faq-4",
      question: "Is professional teeth whitening safe for enamel?",
      answer: "When carried out under clinical supervision, teeth whitening is safe. Dr. Saurabh Vishwakarma evaluates your enamel thickness and gum condition beforehand to ensure the treatment is suitable for you.",
    },
    {
      id: "faq-5",
      question: "Can children be brought in for dental examinations?",
      answer: "Yes, children of all ages are welcome. Early visits help children become comfortable in the clinic environment and help protect developing teeth against early childhood cavities.",
    },
    {
      id: "faq-6",
      question: "How do I book an appointment at the clinic?",
      answer: "You can simply use the booking form on this website to select your preferred date and time, or call us directly at 084343 82509 during clinic hours.",
    },
  ] as FaqItem[],
};
