'use client';

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: 'Treatment',
    question: 'How long does a teeth whitening treatment take?',
    answer: 'Our professional in-office whitening takes approximately 60–90 minutes and can lighten teeth by 4–8 shades in a single session. Take-home kits are also available for gradual whitening over 2 weeks.',
  },
  {
    category: 'Treatment',
    question: 'Is a root canal painful?',
    answer: 'Modern root canal therapy is essentially painless. We use advanced local anesthesia and rotary instrumentation to ensure you feel only mild pressure at most. Most patients are surprised at how comfortable the procedure is.',
  },
  {
    category: 'Treatment',
    question: 'How long do dental implants last?',
    answer: 'With proper care, dental implants can last a lifetime. The titanium post integrates permanently with your jawbone, while the crown typically lasts 10–15 years before needing replacement due to normal wear.',
  },
  {
    category: 'Cost',
    question: 'Does DentalCare accept dental insurance?',
    answer: 'Yes, we accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, and United Healthcare. Our billing team will verify your coverage before treatment and explain your out-of-pocket costs.',
  },
  {
    category: 'Cost',
    question: 'What financing options are available?',
    answer: 'We offer CareCredit and in-house payment plans with 0% interest for up to 12 months. We believe financial constraints should never stand between you and a healthy smile.',
  },
  {
    category: 'Timing',
    question: 'How soon can I get an appointment?',
    answer: 'Most routine appointments are available within the same week. Emergency cases are seen the same day whenever possible. Book online or call us and we will find the earliest available slot.',
  },
  {
    category: 'Timing',
    question: 'How often should I come in for a check-up?',
    answer: 'We recommend a professional cleaning and examination every 6 months for most patients. Those with gum disease, high cavity risk, or orthodontic treatment may need more frequent visits — typically every 3–4 months.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Left */}
          <div className="lg:col-span-4 animate-on-scroll">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3 block">FAQ</span>
            <h2 className="font-display text-section-title font-bold text-foreground mb-5">
              Common{' '}
              <span className="text-gradient-blue italic">Questions</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Have more questions? Our team is happy to help — call us or send a message.
            </p>
            <a href="#contact" className="btn-outline text-sm">
              Contact Us
            </a>
          </div>

          {/* Right — Accordion */}
          <div className="lg:col-span-8 animate-on-scroll stagger-2">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'border-primary/30 shadow-sm' : 'border-border'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-secondary/50 transition-colors"
                    aria-expanded={openIndex === i}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                        {faq.category}
                      </span>
                      <span className="text-sm font-semibold text-foreground">{faq.question}</span>
                    </div>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        openIndex === i
                          ? 'bg-primary border-primary text-white rotate-45' :'border-border text-muted'
                      }`}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                    <div className="px-6 pb-5 text-sm text-muted leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}