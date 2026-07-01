import React from 'react';
import AppImage from '@/components/ui/AppImage';

const trustBadges = [
{
  icon: '😊',
  value: '5,000+',
  label: 'Happy Patients',
  delay: 'float-1',
  position: 'top-[22%] left-[3%] md:left-[5%]'
},
{
  icon: '🏆',
  value: 'Certified',
  label: 'Expert Dentists',
  delay: 'float-2',
  position: 'top-[55%] left-[2%] md:left-[4%]'
},
{
  icon: '🚨',
  value: '24/7',
  label: 'Emergency Support',
  delay: 'float-3',
  position: 'top-[30%] right-[2%] md:right-[5%]'
}];


export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg">
      
      {/* Depth blobs */}
      <div className="blob-primary absolute w-[600px] h-[600px] top-[-100px] left-[-150px] pointer-events-none" aria-hidden="true" />
      <div className="blob-secondary absolute w-[500px] h-[500px] bottom-[-100px] right-[-100px] pointer-events-none" aria-hidden="true" />
      {/* Vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:flex justify-center" aria-hidden="true">
        <div className="w-full max-w-7xl flex justify-between px-10">
          {[...Array(5)]?.map((_, i) =>
          <div key={i} className="grid-overlay-line" />
          )}
        </div>
      </div>
      {/* Hero image — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[42%] hidden lg:block pointer-events-none" aria-hidden="true">
        <div className="relative h-full w-full overflow-hidden">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1327ad393-1767891053721.png"
            alt="Professional dental clinic interior with modern equipment and bright, welcoming atmosphere"
            fill
            sizes="42vw"
            className="object-cover object-center"
            priority />
          
          {/* Gradient scrim — light text on image */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="hero-animate-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent bg-accent/10 px-4 py-2 rounded-full mb-8 border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Accepting New Patients
            </span>
          </div>

          <h1 className="font-display text-hero font-bold text-foreground mb-6 hero-animate-2">
            Premium Dental Care{' '}
            <span className="text-gradient-blue italic">For Confident</span>{' '}
            Smiles
          </h1>

          <p className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-lg hero-animate-3">
            Experience world-class dentistry in a calm, modern environment. Our certified specialists deliver precision care tailored to your unique smile goals.
          </p>

          <div className="flex flex-wrap gap-4 hero-animate-4">
            <a href="#appointment" className="btn-primary">
              Book Appointment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn-outline">
              View Services
            </a>
          </div>

          {/* Bottom stats row */}
          <div className="flex flex-wrap gap-8 mt-14 hero-animate-5">
            {[
            { value: '15+', label: 'Years Experience' },
            { value: '98%', label: 'Patient Satisfaction' },
            { value: '12', label: 'Specialist Doctors' }]?.
            map((stat) =>
            <div key={stat?.label} className="flex flex-col">
                <span className="font-display text-3xl font-bold text-primary leading-none">{stat?.value}</span>
                <span className="text-xs text-muted mt-1 font-medium">{stat?.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Floating trust badges */}
      {trustBadges?.map((badge) =>
      <div
        key={badge?.label}
        className={`absolute ${badge?.position} ${badge?.delay} hidden lg:flex items-center gap-3 bg-white/90 backdrop-blur-md border border-border rounded-2xl px-4 py-3 shadow-lg z-20`}
        aria-hidden="true">
        
          <span className="text-2xl">{badge?.icon}</span>
          <div>
            <div className="font-display font-bold text-sm text-foreground leading-none">{badge?.value}</div>
            <div className="text-xs text-muted mt-0.5">{badge?.label}</div>
          </div>
        </div>
      )}
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>);

}