'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  review: string;
  avatar: string;
  treatment: string;
}

const testimonials: Testimonial[] = [
{
  name: 'Amanda Kowalski',
  role: 'Marketing Director',
  rating: 5,
  review: 'I had serious dental anxiety before coming here. The team made me feel completely at ease. My veneers look absolutely natural — I get compliments every single day. Worth every penny.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_196ce7eb1-1772074804611.png",
  treatment: 'Porcelain Veneers'
},
{
  name: 'Marcus Thompson',
  role: 'Software Engineer',
  rating: 5,
  review: 'Got my implant done here after consulting three other clinics. DentalCare was the most transparent about pricing and the procedure was genuinely painless. 8 months later — feels like my own tooth.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_174857320-1764654468594.png",
  treatment: 'Dental Implant'
},
{
  name: 'Priya Raghavan',
  role: 'Pediatrician',
  rating: 5,
  review: 'As a doctor myself, I have very high standards for clinical environments. DentalCare exceeded them. Sterile, modern, and the staff explains every step. My whole family comes here now.',
  avatar: "https://images.unsplash.com/photo-1643660526741-094639fbe53a",
  treatment: 'Family Dentistry'
},
{
  name: 'David Chen',
  role: 'Restaurant Owner',
  rating: 5,
  review: 'Clear aligners changed my life. I was self-conscious about my smile for 20 years. 8 months with DentalCare and I cannot stop smiling. The digital tracking app is a great touch too.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe94a121-1765863790353.png",
  treatment: 'Clear Aligners'
},
{
  name: 'Sarah O\'Brien',
  role: 'Teacher',
  rating: 5,
  review: 'Came in for a root canal expecting the worst. Left wondering what all the fuss was about — completely pain-free. The staff are genuinely warm and the facility is spotless.',
  avatar: "https://images.unsplash.com/photo-1663755785915-ef1748dda404",
  treatment: 'Root Canal'
}];


function StarRating({ rating }: {rating: number;}) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) =>
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={i < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        className={i < rating ? 'text-amber-400' : 'text-gray-300'}>
        
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )}
    </div>);

}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {if (intervalRef.current) clearInterval(intervalRef.current);};
  }, []);

  const handleDot = (i: number) => {
    setCurrent(i);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  };

  const visibleCount = 3;
  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="animate-on-scroll">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">Patient Stories</span>
            <h2 className="font-display text-section-title font-bold text-foreground">
              What Our Patients{' '}
              <span className="text-gradient-blue italic">Say</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 animate-on-scroll stagger-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              aria-label="Previous testimonial">
              
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              aria-label="Next testimonial">
              
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
          {getVisible().map((t, i) =>
          <div
            key={`${t.name}-${current}-${i}`}
            className={`bg-white rounded-2xl p-7 border border-border card-hover transition-all duration-500 ${
            i === 0 ? 'ring-2 ring-primary/20' : ''}`
            }>
            
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                    <AppImage
                    src={t.avatar}
                    alt={`${t.name}, patient at DentalCare who received ${t.treatment} treatment`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover" />
                  
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-accent/30 flex-shrink-0">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <StarRating rating={t.rating} />
              <p className="text-sm text-muted leading-relaxed mt-4 mb-5">{t.review}</p>
              <div className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                🦷 {t.treatment}
              </div>
            </div>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) =>
          <button
            key={i}
            onClick={() => handleDot(i)}
            className={`rounded-full transition-all duration-300 ${
            i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-border hover:bg-muted'}`
            }
            aria-label={`Go to testimonial ${i + 1}`} />

          )}
        </div>
      </div>
    </section>);

}