'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Teeth Whitening',
  'Dental Implants',
  'Root Canal Therapy',
  'Orthodontics',
  'Cosmetic Dentistry',
  'Emergency Care',
  'General Check-up',
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 20.5h11a2 2 0 002-2v-11a2 2 0 00-2-2h-11a2 2 0 00-2 2v11a2 2 0 002 2z',
  },
  {
    label: 'Twitter',
    href: '#',
    icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    label: 'YouTube',
    href: '#',
    icon: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Top CTA strip */}
      <div className="bg-primary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦷</span>
            <div>
              <p className="font-display font-semibold text-white text-sm">Ready for your best smile?</p>
              <p className="text-white/70 text-xs">First consultation is completely free.</p>
            </div>
          </div>
          <a
            href="#appointment"
            onClick={() => handleNavClick('#appointment')}
            className="btn-accent text-sm whitespace-nowrap flex-shrink-0"
          >
            Book Free Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <AppLogo size={36} />
              <span className="font-display font-bold text-xl text-white tracking-tight">DentalCare</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium dental care delivered with precision, compassion, and the latest clinical technology. Your confident smile is our mission.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-200"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['ADA Member', 'HIPAA Compliant', 'ISO Certified'].map((badge) => (
                <span key={badge} className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1">
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-200 overflow-hidden" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-2 group text-left"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-200 overflow-hidden" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="space-y-4 mb-7">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5 flex-shrink-0">📍</span>
                <span className="text-sm text-white/60 leading-relaxed">247 Madison Avenue, Suite 12<br />New York, NY 10016</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent flex-shrink-0">📞</span>
                <a href="tel:+15551234567" className="text-sm text-white/60 hover:text-accent transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent flex-shrink-0">📧</span>
                <a href="mailto:hello@dentalcare.com" className="text-sm text-white/60 hover:text-accent transition-colors">hello@dentalcare.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5 flex-shrink-0">⏰</span>
                <div className="text-sm text-white/60">
                  <div>Mon–Fri: 8AM–7PM</div>
                  <div>Sat: 9AM–4PM</div>
                  <div className="text-red-400">Sun: Emergency Only</div>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">Dental Health Tips</p>
              {subscribed ? (
                <div className="bg-accent/10 border border-accent/20 rounded-xl px-4 py-3 text-xs text-accent font-medium">
                  ✓ You&apos;re subscribed! Check your inbox.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 bg-white/8 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-accent text-primary font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-accent/90 transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© 2026 DentalCare. All rights reserved. Designed with ❤️ for healthier smiles.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-white/40 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-white/40 hover:text-accent transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}