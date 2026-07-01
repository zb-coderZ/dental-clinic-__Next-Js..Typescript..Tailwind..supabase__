import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  img: string;
  alt: string;
  socials: {label: string;path: string;}[];
}

const doctors: Doctor[] = [
{
  name: 'Dr. Sarah Mitchell',
  specialty: 'Lead Orthodontist',
  experience: '14 years experience',
  img: "https://images.unsplash.com/photo-1667133295308-9ef24f71952e",
  alt: 'Dr. Sarah Mitchell, Lead Orthodontist at DentalCare, smiling in white clinical coat in bright dental office',
  socials: [
  { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }]

},
{
  name: 'Dr. James Harrington',
  specialty: 'Implant Specialist',
  experience: '18 years experience',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_15f37e3a0-1778618641500.png",
  alt: 'Dr. James Harrington, Implant Specialist at DentalCare, confident professional pose in modern clinical setting',
  socials: [
  { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }]

},
{
  name: 'Dr. Priya Nair',
  specialty: 'Cosmetic Dentist',
  experience: '11 years experience',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_192f25304-1767786255269.png",
  alt: 'Dr. Priya Nair, Cosmetic Dentist at DentalCare, warm professional smile in bright airy dental clinic',
  socials: [
  { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }]

},
{
  name: 'Dr. Michael Torres',
  specialty: 'Oral Surgeon',
  experience: '16 years experience',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb8285cd-1772084739949.png",
  alt: 'Dr. Michael Torres, Oral Surgeon at DentalCare, professional standing in clean well-lit surgical suite',
  socials: [
  { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }]

}];


export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">Our Specialists</span>
          <h2 className="font-display text-section-title font-bold text-foreground mb-4">
            Meet the <span className="text-gradient-blue italic">Expert Team</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Board-certified specialists with decades of combined experience, committed to your best smile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, i) =>
          <div
            key={doc.name}
            className={`animate-on-scroll stagger-${i + 1} group relative bg-secondary rounded-2xl overflow-hidden card-hover border border-border`}>
            
              <div className="aspect-[3/4] overflow-hidden image-zoom">
                <AppImage
                src={doc.img}
                alt={doc.alt}
                width={400}
                height={533}
                className="w-full h-full object-cover" />
              
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-base text-foreground mb-0.5">{doc.name}</h3>
                <p className="text-xs font-medium text-accent mb-1">{doc.specialty}</p>
                <p className="text-xs text-muted mb-4">{doc.experience}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {doc.socials.map(({ label, path }) =>
                  <a
                    key={label}
                    href="#"
                    aria-label={`${doc.name} on ${label}`}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors duration-200">
                    
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={path} />
                        </svg>
                      </a>
                  )}
                  </div>
                  <a
                  href="#appointment"
                  className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                  
                    Book →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}