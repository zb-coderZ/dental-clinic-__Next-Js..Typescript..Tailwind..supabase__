import React from 'react';

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Emergency Only' },
];

const insurancePartners = [
  'Delta Dental',
  'Cigna',
  'Aetna',
  'MetLife',
  'United Healthcare',
  'Humana',
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-xl mx-auto mb-14 animate-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">Find Us</span>
          <h2 className="font-display text-section-title font-bold text-foreground">
            Visit Our <span className="text-gradient-blue italic">Clinic</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info cards */}
          <div className="lg:col-span-1 space-y-5 animate-on-scroll">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-border card-hover">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-lg mb-4">📍</div>
              <h3 className="font-semibold text-sm text-foreground mb-1">Address</h3>
              <p className="text-sm text-muted leading-relaxed">247 Madison Avenue, Suite 12<br />New York, NY 10016</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mt-3"
              >
                Get Directions →
              </a>
            </div>

            {/* Phone + Email */}
            <div className="bg-white rounded-2xl p-6 border border-border card-hover">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-lg mb-4">📞</div>
              <h3 className="font-semibold text-sm text-foreground mb-2">Contact</h3>
              <a href="tel:+15551234567" className="block text-sm text-primary font-medium hover:underline mb-1">+1 (555) 123-4567</a>
              <a href="mailto:hello@dentalcare.com" className="block text-sm text-primary font-medium hover:underline">hello@dentalcare.com</a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border border-border card-hover">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-lg mb-4">⏰</div>
              <h3 className="font-semibold text-sm text-foreground mb-3">Working Hours</h3>
              <div className="space-y-2">
                {hours?.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center text-xs">
                    <span className="text-foreground font-medium">{day}</span>
                    <span className={`font-semibold ${time === 'Emergency Only' ? 'text-red-500' : 'text-accent'}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-2 animate-on-scroll stagger-2">
            <div className="w-full h-full min-h-[420px] rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                title="DentalCare Clinic Location — 247 Madison Avenue, New York, NY"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291891!2d-73.98343!3d40.74844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sMadison%20Ave%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1688000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Insurance partners */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-border animate-on-scroll">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">We Accept</p>
            <h3 className="font-display text-xl font-bold text-foreground">Major Insurance Plans</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {insurancePartners?.map((partner) => (
              <div
                key={partner}
                className="flex items-center gap-2 bg-secondary border border-border rounded-full px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-primary transition-colors duration-200"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                {partner}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted mt-4">
            Don&apos;t see your insurance? <a href="tel:+15551234567" className="text-primary font-semibold hover:underline">Call us</a> — we likely accept it.
          </p>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-8 bg-primary rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 animate-on-scroll">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">Ready for Your Best Smile?</h3>
            <p className="text-white/70 text-sm">Book a consultation today. No obligation, just expert advice.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="tel:+15551234567" className="btn-outline border-white/30 text-white hover:bg-white hover:text-primary whitespace-nowrap">
              📞 Call Now
            </a>
            <a
              href="#appointment"
              className="btn-accent whitespace-nowrap"
            >
              Book Appointment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}