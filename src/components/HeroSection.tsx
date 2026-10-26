import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Layers,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/adgaData';

interface HeroSectionProps {
  onRequestQuote: (defaultService?: string) => void;
}

type HeroPreviewTab = 'gec' | 'btp' | 'equip';

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  const [activePreview, setActivePreview] = useState<HeroPreviewTab>('gec');

  const previewData = {
    gec: {
      title: 'Plateforme GEC PRO · Zéro Papier',
      subtitle: 'Secrétariat, Direction Générale, DAF, RH & Commercial interconnectés',
      metric: '+40% de productivité',
      image: IMAGES.gecPro,
      caption: 'Équipes en session collaborative sur la gestion électronique des flux documentaires.',
    },
    btp: {
      title: 'Ingénierie BTP & Travaux Publics',
      subtitle: 'Bâtiments administratifs, écoles, magasins & pistes rurales au Bénin',
      metric: '100% rigueur génie civil',
      image: IMAGES.btp,
      caption: 'Supervision technique et contrôle qualité sur chantier d’infrastructure moderne.',
    },
    equip: {
      title: 'Énergie, Froid & Équipements',
      subtitle: 'Installations électriques, climatisation industrielle & aménagement bureautique',
      metric: 'Intervention 24h',
      image: IMAGES.energie,
      caption: 'Techniciens qualifiés assurant la maintenance électrique et climatique sur site.',
    },
  };

  return (
    <section
      id="accueil"
      className="relative bg-gradient-to-b from-[#042817] via-[#063B23] to-[#042817] text-white overflow-hidden border-b border-[#0A4D2E]"
    >
      {/* Subtle architectural grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Atmospheric ambient glows in Benin colors (Vert & Or & Rouge) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 w-[550px] h-[550px] rounded-full bg-[#008751]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#FCD116]/10 blur-3xl"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-20">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Benin National Identity Banner */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-200 font-mono mb-5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-[#FCD116] font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#008751] inline-block ring-1 ring-[#FCD116]" />
                  République du Bénin
                </span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span>RCCM {COMPANY_INFO.registrationNumber}</span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span className="text-emerald-300 font-semibold">Sèmè-Podji (Sèkandji)</span>
              </div>

              <h1
                className="font-display font-extrabold tracking-tight text-white text-balance leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                Excellence opérationnelle en{' '}
                <span className="text-[#FCD116]">TIC</span>,{' '}
                <span className="text-[#4ADE80]">BTP</span> & Services Généraux au Bénin.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-[64ch] mb-8">
                <strong className="font-semibold text-white">ADGA SOLUTIONS</strong> est votre
                partenaire multisectoriel au Bénin. Nous concilions transformation digitale
                performante avec notre plateforme{' '}
                <strong className="font-semibold text-[#FCD116]">GEC PRO (Zéro Papier)</strong>,
                travaux publics & génie civil, énergie, froid et logistique intégrée.
              </p>

              {/* Action Buttons with Benin Red CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onRequestQuote('TIC & Écosystèmes Digitaux (GEC PRO)')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#E8112D] hover:bg-[#C00000] active:scale-[0.99] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-lg shadow-[#E8112D]/25"
                >
                  <span>Demander un devis sur mesure</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="#solutions-numeriques"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#008751]/80 hover:bg-[#008751] border border-[#4ADE80]/40 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 shadow-xs"
                >
                  <span>Découvrir GEC PRO</span>
                </a>
              </div>
            </div>

            {/* Quick Benin Trust Pillars */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-[#FCD116] font-mono mb-1">01 · TIC & GEC PRO</div>
                <div className="text-sm font-semibold text-white">
                  Numérisation, routage & zéro papier
                </div>
              </div>
              <div>
                <div className="text-xs text-[#4ADE80] font-mono mb-1">02 · BTP & Infrastructures</div>
                <div className="text-sm font-semibold text-white">
                  Bâtiments, magasins & suivi de chantiers
                </div>
              </div>
              <div>
                <div className="text-xs text-rose-300 font-mono mb-1">03 · Énergie & Logistique</div>
                <div className="text-sm font-semibold text-white">
                  Électricité, climatisation & supply chain
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage with Real Photographic Showcase */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-2xl bg-[#032113]/90 border border-[#0A5C36] p-5 sm:p-6 flex flex-col justify-between shadow-xl">
              <div>
                {/* Visualizer Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FCD116]" />
                    <span className="text-xs font-mono text-slate-300 tracking-wider">
                      OPÉRATIONS DE TERRAIN · BÉNIN
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#FCD116] tabular-nums font-bold">
                    ADGA · 2026
                  </span>
                </div>

                {/* Segmented Tab Buttons (Benin Green active state) */}
                <div
                  role="tablist"
                  aria-label="Sélecteur de photo et pôle"
                  className="grid grid-cols-3 gap-1.5 p-1 bg-[#02180D] rounded-xl border border-white/10 mb-4"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activePreview === 'gec'}
                    onClick={() => setActivePreview('gec')}
                    className={`px-2.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activePreview === 'gec'
                        ? 'bg-[#008751] text-white shadow-xs'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    01. GEC PRO
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activePreview === 'btp'}
                    onClick={() => setActivePreview('btp')}
                    className={`px-2.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activePreview === 'btp'
                        ? 'bg-[#008751] text-white shadow-xs'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    02. BTP
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activePreview === 'equip'}
                    onClick={() => setActivePreview('equip')}
                    className={`px-2.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activePreview === 'equip'
                        ? 'bg-[#008751] text-white shadow-xs'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    03. Énergie
                  </button>
                </div>

                {/* Animated Photographic Showcase Container */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePreview}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-3"
                  >
                    <div className="relative rounded-xl overflow-hidden border border-white/20 aspect-[16/10] bg-black">
                      <img
                        src={previewData[activePreview].image}
                        alt={previewData[activePreview].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-xs">
                        <div className="min-w-0">
                          <div className="font-bold text-white text-sm truncate">
                            {previewData[activePreview].title}
                          </div>
                          <div className="text-slate-300 text-[11px] truncate">
                            {previewData[activePreview].subtitle}
                          </div>
                        </div>
                        <span className="font-mono font-bold text-xs px-2 py-1 rounded-md bg-[#008751] text-white shrink-0 tabular-nums">
                          {previewData[activePreview].metric}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 italic px-1">
                      {previewData[activePreview].caption}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-300">
                  Besoin d’un chiffrage rapide ?
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onRequestQuote(
                      activePreview === 'gec'
                        ? 'TIC & Écosystèmes Digitaux (GEC PRO)'
                        : activePreview === 'btp'
                        ? 'BTP & Travaux Publics'
                        : 'Équipements & Maintenance'
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FCD116] hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Chiffrer ce besoin</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quantitative Strip */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="font-mono font-bold text-2xl sm:text-3xl text-[#FCD116] tabular-nums mb-1">
              +40%
            </div>
            <div className="text-sm font-semibold text-emerald-200 mb-1">
              Gain de productivité GEC PRO
            </div>
            <p className="text-xs text-slate-300">
              Éradication des lenteurs administratives et sécurisation des courriers au Bénin.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="font-mono font-bold text-2xl sm:text-3xl text-[#4ADE80] tabular-nums mb-1">
              4 Pôles
            </div>
            <div className="text-sm font-semibold text-emerald-200 mb-1">
              Expertise multisectorielle
            </div>
            <p className="text-xs text-slate-300">
              TIC & Digital, BTP & Génie Civil, Équipements & Énergie, Logistique & Services.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="font-mono font-bold text-2xl sm:text-3xl text-white tabular-nums mb-1">
              100%
            </div>
            <div className="text-sm font-semibold text-emerald-200 mb-1">
              Traçabilité & Confidentialité
            </div>
            <p className="text-xs text-slate-300">
              Filtrage par rôle, archivage inaltérable et alertes e-mail automatiques.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <div className="font-mono font-bold text-xl sm:text-2xl text-[#FCD116] tabular-nums mb-1">
              RB/PNO/26 A 125246
            </div>
            <div className="text-sm font-semibold text-emerald-200 mb-1">
              Entreprise agréée au Bénin
            </div>
            <p className="text-xs text-slate-300">
              Créée le 08 Mai 2026 à Sèmè-Podji (Agblangandan - Sèkandji), capital humain qualifié.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
