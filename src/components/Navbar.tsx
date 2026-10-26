import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/adgaData';

interface NavbarProps {
  activeSection: string;
  onRequestQuote: (defaultService?: string) => void;
}

const NAV_ITEMS = [
  { label: 'À propos', href: '#about', id: 'about' },
  { label: 'Expertises', href: '#services', id: 'services' },
  { label: 'GEC PRO', href: '#solutions-numeriques', id: 'solutions-numeriques' },
  { label: 'Réalisations', href: '#realisations', id: 'realisations' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onRequestQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs'
          : 'bg-white border-b border-slate-200/70'
      }`}
    >
      {/* National Tricolor Accent Ribbon (Vert - Jaune - Rouge du Bénin) */}
      <div className="h-1 w-full grid grid-cols-3">
        <div className="bg-[#008751]" title="Vert Bénin" />
        <div className="bg-[#FCD116]" title="Jaune Bénin" />
        <div className="bg-[#E8112D]" title="Rouge Bénin" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup (single-line wordmark) */}
        <a
          href="#accueil"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008751] rounded-sm group"
        >
          {logoLoaded ? (
            <img
              src={COMPANY_INFO.logoUrl}
              alt="ADGA SOLUTIONS Logo"
              referrerPolicy="no-referrer"
              onError={() => setLogoLoaded(false)}
              className="h-10 w-auto object-contain shrink-0"
            />
          ) : (
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#008751] text-white font-display font-extrabold text-sm shrink-0">
              A
            </span>
          )}
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#0A3D24] group-hover:text-[#008751] transition-colors whitespace-nowrap shrink-0">
              ADGA SOLUTIONS
            </span>
            <span className="hidden lg:inline-flex items-center text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-xs bg-[#008751]/10 text-[#008751] border border-[#008751]/20">
              BÉNIN
            </span>
          </div>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#008751] font-semibold'
                    : 'text-slate-600 hover:text-[#008751]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#008751] transition-transform duration-150 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary CTA button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onRequestQuote('TIC & Écosystèmes Digitaux (GEC PRO)')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#E8112D] hover:bg-[#C00000] active:scale-[0.99] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8112D]"
          >
            <span>Demander un devis</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700 hover:text-[#008751] hover:bg-slate-50 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleNavClick}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#008751]/10 text-[#008751] font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#008751]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote('TIC & Écosystèmes Digitaux (GEC PRO)');
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#E8112D] hover:bg-[#C00000] rounded-lg transition-colors cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
