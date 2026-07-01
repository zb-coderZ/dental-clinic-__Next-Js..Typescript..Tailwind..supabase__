import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import ServicesSection from '@/app/components/ServicesSection';
import AboutSection from '@/app/components/AboutSection';
import BeforeAfterSection from '@/app/components/BeforeAfterSection';
import WhyChooseUsSection from '@/app/components/WhyChooseUsSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import TeamSection from '@/app/components/TeamSection';
import AppointmentSection from '@/app/components/AppointementSection';
import FAQSection from '@/app/components/FAQSection';
import ContactSection from '@/app/components/ContactSection';
import FloatingActions from '@/app/components/FloatingActions';
import ScrollAnimationInit from '@/app/components/ScrollAnimationInit';

export default function HomePage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollAnimationInit />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <BeforeAfterSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <TeamSection />
        <AppointmentSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}