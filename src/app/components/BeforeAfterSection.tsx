'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Case {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

const cases: Case[] = [
{
  id: 'whitening',
  title: 'Teeth Whitening',
  treatment: 'Professional Whitening',
  duration: '1 Session',
  before: "https://img.rocket.new/generatedImages/rocket_gen_img_1726f53d9-1777159042852.png",
  after: "https://img.rocket.new/generatedImages/rocket_gen_img_1726f53d9-1777159042852.png",
  beforeAlt: 'Before teeth whitening treatment showing natural tooth shade in well-lit clinical setting',
  afterAlt: 'After professional teeth whitening showing bright, white smile in modern dental clinic'
},
{
  id: 'orthodontics',
  title: 'Orthodontic Treatment',
  treatment: 'Clear Aligners',
  duration: '8 Months',
  before: "https://img.rocket.new/generatedImages/rocket_gen_img_18acb7a1d-1778879741288.png",
  after: "https://img.rocket.new/generatedImages/rocket_gen_img_18acb7a1d-1778879741288.png",
  beforeAlt: 'Before orthodontic treatment showing misaligned teeth in bright clinical environment',
  afterAlt: 'After clear aligner treatment showing perfectly aligned, confident smile in dental office'
},
{
  id: 'veneers',
  title: 'Porcelain Veneers',
  treatment: 'Cosmetic Veneers',
  duration: '2 Visits',
  before: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2505928-1772074597280.png",
  after: "https://img.rocket.new/generatedImages/rocket_gen_img_1b2505928-1772074597280.png",
  beforeAlt: 'Before porcelain veneer procedure showing worn tooth enamel in well-lit clinical space',
  afterAlt: 'After porcelain veneers showing flawless, natural-looking smile in bright dental environment'
}];


export default function BeforeAfterSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-on-scroll">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">Real Results</span>
          <h2 className="font-display text-section-title font-bold text-foreground mb-4">
            Before &{' '}
            <span className="text-gradient-blue italic">After Gallery</span>
          </h2>
          <p className="text-muted leading-relaxed">
            Real patient transformations achieved by our specialists. Hover to reveal the after result.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) =>
          <div
            key={c.id}
            className={`animate-on-scroll stagger-${i + 1} group relative rounded-2xl overflow-hidden cursor-pointer shadow-md`}
            onMouseEnter={() => setHoveredId(c.id)}
            onMouseLeave={() => setHoveredId(null)}>
            
              <div className="relative aspect-[4/5]">
                {/* After image (base) */}
                <AppImage
                src={c.after}
                alt={c.afterAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover" />
              
                {/* Before image — overlaid, clips away on hover */}
                <div
                className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  clipPath: hoveredId === c.id ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 0)'
                }}>
                
                  <AppImage
                  src={c.before}
                  alt={c.beforeAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover" />
                
                  {/* Before label */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    Before
                  </div>
                </div>

                {/* After label */}
                <div
                className={`absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-opacity duration-300 ${
                hoveredId === c.id ? 'opacity-100' : 'opacity-0'}`
                }>
                
                  After
                </div>

                {/* Divider line */}
                <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ left: hoveredId === c.id ? '0%' : '100%' }} />
              

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5">
                  <div className="text-white font-display font-semibold text-base">{c.title}</div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-white/80 text-xs">{c.treatment}</span>
                    <span className="w-1 h-1 rounded-full bg-white/50" />
                    <span className="text-accent text-xs font-medium">{c.duration}</span>
                  </div>
                </div>

                {/* Hover instruction */}
                {hoveredId !== c.id &&
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2">
                      <span className="text-white text-xs font-medium">Hover to reveal</span>
                    </div>
                  </div>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}