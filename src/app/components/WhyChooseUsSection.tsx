import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  span?: string;
}

const features: Feature[] = [
  {
    icon: '🔬',
    title: 'Modern Equipment',
    description: 'We invest in the latest dental technology — CBCT imaging, laser dentistry, digital impressions, and CAD/CAM crowns crafted in-house.',
    span: 'md:col-span-2',
  },
  {
    icon: '👩‍⚕️',
    title: 'Experienced Team',
    description: 'All 12 of our specialists are board-certified with 10+ years of clinical experience and ongoing professional education.',
  },
  {
    icon: '🛋️',
    title: 'Comfortable Environment',
    description: 'From massage chairs to noise-canceling headphones — we have redesigned the dental experience to feel like a spa, not a clinic.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description: 'No hidden fees. Every treatment plan comes with a detailed cost breakdown before any work begins.',
  },
  {
    icon: '⚡',
    title: 'Quick Appointments',
    description: 'Same-week availability for most procedures. Book online in under 2 minutes.',
    span: 'md:col-span-2',
  },
  {
    icon: '❤️',
    title: 'Patient First Care',
    description: 'We treat every patient like family. Your comfort, questions, and concerns are always our top priority.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl animate-on-scroll">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">Our Difference</span>
            <h2 className="font-display text-section-title font-bold text-foreground">
              Why Patients Choose{' '}
              <span className="text-gradient-blue italic">DentalCare</span>
            </h2>
          </div>
          <div className="animate-on-scroll stagger-2">
            <a href="#appointment" className="btn-primary whitespace-nowrap">
              Book Your Visit
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        {/* Row 1: [Modern Equipment cs-2] [Experienced Team cs-1] */}
        {/* Row 2: [Comfortable Environment cs-1] [Transparent Pricing cs-1] [Quick Appointment cs-2] */}
        {/* Row 3: [Patient First Care cs-1 on mobile, handled via responsive] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`animate-on-scroll stagger-${(i % 3) + 1} group relative bg-secondary rounded-2xl p-7 border border-border card-hover ${feature.span || ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-card-title font-display font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}