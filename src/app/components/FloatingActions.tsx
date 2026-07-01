'use client';

import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 400);
      // Show sticky desktop CTA after scrolling past hero (approx 600px)
      setShowStickyBar(scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (popupDismissed) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !popupDismissed) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [popupDismissed]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const dismissPopup = () => { setShowExitPopup(false); setPopupDismissed(true); };

  return (
    <>
      {/* Sticky Desktop CTA Bar */}
      <div
        className={`hidden md:flex fixed top-0 left-0 right-0 z-[45] bg-white/97 backdrop-blur-md border-b border-border shadow-md transition-all duration-500 ${
          showStickyBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        aria-hidden={!showStickyBar}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 w-full flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <span className="font-display font-bold text-primary text-base">DentalCare</span>
            <span className="w-px h-5 bg-border" />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="text-xs text-muted ml-1">5,000+ happy patients</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+15551234567" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              +1 (555) 123-4567
            </a>
            <a
              href="#appointment"
              className="btn-primary text-xs py-2 px-5"
              style={{ padding: '0.5rem 1.25rem' }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
        {/* WhatsApp */}
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-green-200 transition-all duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        {/* Call */}
        <a
          href="tel:+15551234567"
          aria-label="Call DentalCare"
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-primary/90 transition-all duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
          </svg>
        </a>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`w-12 h-12 rounded-full bg-white border border-border text-foreground flex items-center justify-center shadow-md hover:scale-110 hover:border-primary hover:text-primary transition-all duration-300 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Sticky Book CTA — mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white border-t border-border px-4 py-3 flex gap-3">
        <a href="tel:+15551234567" className="btn-outline flex-1 justify-center text-sm py-3">
          📞 Call Now
        </a>
        <a href="#appointment" className="btn-primary flex-1 justify-center text-sm py-3">
          Book Appointment
        </a>
      </div>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm"
          onClick={dismissPopup}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

            <button
              onClick={dismissPopup}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground transition-colors"
              aria-label="Close popup"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🦷</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Wait — Before You Go!</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Your first consultation is <strong className="text-primary">completely free</strong>. Book in 2 minutes — no commitment required.
              </p>

              {/* Mini testimonial */}
              <div className="bg-secondary rounded-xl p-4 mb-6 text-left">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-muted italic leading-relaxed">&ldquo;Best dental experience I&apos;ve ever had. The team is incredibly professional and the results are amazing!&rdquo;</p>
                <p className="text-xs font-semibold text-foreground mt-2">— Amanda K., Verified Patient</p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="#appointment"
                  onClick={dismissPopup}
                  className="btn-primary w-full justify-center"
                >
                  Claim Free Consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <button
                  onClick={dismissPopup}
                  className="text-xs text-muted hover:text-foreground transition-colors py-2"
                >
                  No thanks, I&apos;ll skip for now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}