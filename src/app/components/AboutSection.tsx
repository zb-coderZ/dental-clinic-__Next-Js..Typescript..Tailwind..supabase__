import React from 'react';
import AppImage from '@/components/ui/AppImage';

const certifications = [
'American Dental Association (ADA) Member',
'Board Certified Oral Surgeons',
'ISO 9001:2015 Certified Practice',
'HIPAA Compliant Patient Care'];


const experts = [
{ name: 'Dr. Sarah Mitchell', role: 'Lead Orthodontist', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop' },
{ name: 'Dr. James Harrington', role: 'Implant Specialist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop' },
{ name: 'Dr. Priya Nair', role: 'Cosmetic Dentist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop' }];


export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image stack */}
          <div className="relative animate-on-scroll">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl image-zoom shadow-2xl">
              <AppImage
                src="https://images.unsplash.com/photo-1663755785915-ef1748dda404"
                alt="Modern dental clinic treatment room with state-of-the-art dental chair and equipment in bright, clean environment"
                width={700}
                height={875}
                className="w-full h-full object-cover" />
              
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-primary text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
              <div className="font-display text-4xl font-bold leading-none">15+</div>
              <div className="text-xs text-white/80 mt-1 font-medium">Years of Trusted<br />Dental Excellence</div>
            </div>
            {/* Accent dot pattern */}
            <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20" aria-hidden="true">
              {[...Array(16)]?.map((_, i) =>
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-accent absolute"
                style={{ top: `${Math.floor(i / 4) * 28}px`, left: `${i % 4 * 28}px` }} />

              )}
            </div>
          </div>

          {/* Right — Content */}
          <div className="animate-on-scroll stagger-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">Our Story</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-6">
              A Clinic Built on{' '}
              <span className="text-gradient-blue italic">Trust & Precision</span>
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Founded in 2009, DentalCare was built with a singular mission: to make premium dental care accessible, comfortable, and genuinely transformative. Our team of 12 board-certified specialists combines clinical excellence with a warm, patient-first approach.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We invest continuously in the latest technology — from cone-beam CT imaging to laser dentistry — ensuring every patient receives the most accurate diagnosis and the least invasive treatment possible.
            </p>

            <ul className="space-y-3 mb-10">
              {certifications?.map((cert) =>
              <li key={cert} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {cert}
                </li>
              )}
            </ul>

            {/* Mini expert preview */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Meet Our Experts</p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {experts?.map((expert) =>
                  <div key={expert?.name} className="w-11 h-11 rounded-full border-2 border-white overflow-hidden ring-2 ring-border">
                      <AppImage
                      src={expert?.img}
                      alt={`${expert?.name}, ${expert?.role} at DentalCare`}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover" />
                    
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">12 Specialists</div>
                  <div className="text-xs text-muted">Available for consultation</div>
                </div>
                <a href="#team" className="ml-4 text-xs font-semibold text-primary hover:underline">
                  View All →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}