import React from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: '✨',
    title: 'Teeth Whitening',
    description: 'Professional-grade whitening treatments that remove deep stains and restore your natural brightness — results in a single session.',
    color: 'from-yellow-50 to-amber-50',
  },
  {
    icon: '🦷',
    title: 'Dental Implants',
    description: 'Permanent titanium implants that look, feel, and function like natural teeth. Restore your smile with lasting confidence.',
    color: 'from-blue-50 to-cyan-50',
  },
  {
    icon: '🔬',
    title: 'Root Canal Therapy',
    description: 'Pain-free, precision root canal treatments using the latest rotary technology — save your natural tooth with minimal discomfort.',
    color: 'from-purple-50 to-violet-50',
  },
  {
    icon: '😁',
    title: 'Orthodontics',
    description: 'Invisible aligners and traditional braces customized for your bite. Straighten your teeth discreetly at any age.',
    color: 'from-green-50 to-emerald-50',
  },
  {
    icon: '💎',
    title: 'Cosmetic Dentistry',
    description: 'Veneers, bonding, and smile makeovers designed to craft the perfect aesthetic smile you have always envisioned.',
    color: 'from-pink-50 to-rose-50',
  },
  {
    icon: '🚨',
    title: 'Emergency Care',
    description: 'Same-day emergency appointments for dental pain, broken teeth, and urgent oral health issues. We are here when you need us most.',
    color: 'from-red-50 to-orange-50',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-14 animate-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">What We Offer</span>
          <h2 className="font-display text-section-title font-bold text-foreground mb-4">
            Comprehensive Dental <span className="text-gradient-blue italic">Services</span>
          </h2>
          <p className="text-muted leading-relaxed">
            From routine check-ups to full smile transformations — every treatment is delivered with precision, care, and the latest clinical technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll stagger-${(i % 6) + 1} card-hover group relative bg-white rounded-2xl p-7 border border-border cursor-pointer`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-card-title font-display font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{service.description}</p>
              <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-3 transition-all duration-200">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}