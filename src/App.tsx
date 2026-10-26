import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesBento } from './components/ServicesBento';
import { GecProShowcase } from './components/GecProShowcase';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactAndFooter } from './components/ContactAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [selectedServicePrompt, setSelectedServicePrompt] = useState<string>(
    'TIC & Écosystèmes Digitaux (GEC PRO)'
  );

  useEffect(() => {
    const sectionIds = [
      'accueil',
      'about',
      'services',
      'solutions-numeriques',
      'realisations',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRequestQuote = (defaultService?: string) => {
    if (defaultService) {
      setSelectedServicePrompt(defaultService);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const nomInput = document.getElementById('contact-nom');
        if (nomInput) {
          nomInput.focus();
        }
      }, 450);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] relative">
      <Navbar activeSection={activeSection} onRequestQuote={handleRequestQuote} />

      <main className="flex-1">
        <HeroSection onRequestQuote={handleRequestQuote} />
        <ServicesBento onRequestQuote={handleRequestQuote} />
        <GecProShowcase onRequestQuote={handleRequestQuote} />
        <PortfolioSection onRequestQuote={handleRequestQuote} />
        <ContactAndFooter selectedServicePrompt={selectedServicePrompt} />
      </main>

      {/* Bouton WhatsApp flottant stylisé aux couleurs du Bénin */}
      <FloatingWhatsApp />
    </div>
  );
}
