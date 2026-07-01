'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <>
      {/* Announcement bar */}
      {announcementVisible && !scrolled && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white text-xs font-medium py-2 px-5 flex items-center justify-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
          <span>🎉 First consultation is <strong>FREE</strong> — Book today and get a complimentary dental check-up!</span>
          <button
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Dismiss announcement"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          announcementVisible && !scrolled ? 'top-8' : 'top-0'
        } ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo size={38} onClick={() => {}} />
            <span className="font-display font-bold text-xl text-primary tracking-tight">
              DentalCare
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Phone number */}
            <a
              href="tel:+15551234567"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-foreground hover:text-primary' : 'text-foreground/80 hover:text-primary'
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              +1 (555) 123-4567
            </a>
            <button
              onClick={() => handleNavClick('#appointment')}
              className="btn-primary text-sm"
            >
              Book Appointment
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0 w-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col pt-28 px-6 pb-12 ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-4 text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors border-b border-border"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => handleNavClick('#appointment')}
            className="btn-primary w-full justify-center text-base"
          >
            Book Appointment
          </button>
          <a href="tel:+15551234567" className="btn-outline w-full justify-center text-base">
            📞 Call Now
          </a>
        </div>
        <div className="mt-auto pt-8 flex flex-col items-center gap-2 text-sm text-muted text-center">
          <p className="font-medium text-foreground">📞 +1 (555) 123-4567</p>
        </div>
      </div>
    </>
  );
}