import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Laptop,
  HardHat,
  Wrench,
  Truck,
  ArrowUpRight,
  Check,
  Building,
  Award,
  Users,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, SERVICE_DOMAINS, ServiceDomain, IMAGES } from '../data/adgaData';

interface ServicesBentoProps {
  onRequestQuote: (defaultService?: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onRequestQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>('tic-gec-pro');

  const filteredServices =
    selectedCategory === 'all'
      ? SERVICE_DOMAINS
      : SERVICE_DOMAINS.filter((s) => s.category === selectedCategory);

  const getDomainIcon = (category: ServiceDomain['category']) => {
    switch (category) {
      case 'tic':
        return <Laptop className="w-5 h-5 text-[#008751]" />;
      case 'btp':
        return <HardHat className="w-5 h-5 text-[#E8112D]" />;
      case 'equipements':
        return <Wrench className="w-5 h-5 text-[#008751]" />;
      case 'logistique':
        return <Truck className="w-5 h-5 text-[#E8112D]" />;
    }
  };

  return (
    <>
      {/* SECTION QUI SOMMES-NOUS (#about) */}
      <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Image of Corporate Headquarters in Benin */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-[4/3] bg-slate-100">
                <img
                  src={IMAGES.hero}
                  alt="Siège et collaborateurs ADGA SOLUTIONS au Bénin"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-[#FCD116] font-semibold mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#008751]" />
                    <span>SÈMÈ-PODJI · AGBLANGANDAN</span>
                  </div>
                  <p className="font-medium text-white/95">
                    Structure multisectorielle dynamique au cœur du développement au Bénin.
                  </p>
                </div>
              </div>

              {/* National Identity Badge overlapping */}
              <div className="absolute -bottom-4 -right-2 sm:right-4 bg-white rounded-xl border border-slate-200/90 p-3 shadow-md flex items-center gap-3">
                <div className="w-3 h-8 rounded-full overflow-hidden flex flex-col shrink-0">
                  <div className="h-1/3 bg-[#008751]" />
                  <div className="h-1/3 bg-[#FCD116]" />
                  <div className="h-1/3 bg-[#E8112D]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Numéro Officiel</div>
                  <div className="text-xs font-mono font-bold text-[#008751]">
                    {COMPANY_INFO.registrationNumber}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission & Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#008751] font-semibold mb-2">
                  <span>IDENTITÉ & GOUVERNANCE NATIONALE</span>
                  <span aria-hidden="true">·</span>
                  <span>RÉPUBLIQUE DU BÉNIN</span>
                </div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A3D24] tracking-tight text-balance mb-4">
                  Qui sommes-nous ?
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                  <strong className="font-bold text-[#008751]">ADGA SOLUTIONS</strong> est une
                  entreprise multisectorielle dynamique, dédiée à fournir des solutions intégrées de
                  haute qualité.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Créée officiellement le{' '}
                  <strong className="font-semibold text-slate-900">08 Mai 2026</strong> et
                  enregistrée sous le numéro officiel{' '}
                  <strong className="font-mono font-semibold text-[#008751]">
                    RB/PNO/26 A 125246
                  </strong>
                  , notre force repose sur un capital humain dynamique, rompu à la tâche et prêt à
                  répondre dans les meilleurs délais aux besoins stratégiques de notre clientèle.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7]">
                  <Users className="w-5 h-5 text-[#008751] mb-2" />
                  <h3 className="font-display font-bold text-sm text-[#0A3D24] mb-1">
                    Capital Humain
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ingénieurs, informaticiens et techniciens rompus à la tâche sur le terrain.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FEE2E2]">
                  <Award className="w-5 h-5 text-[#E8112D] mb-2" />
                  <h3 className="font-display font-bold text-sm text-[#0A3D24] mb-1">
                    Délais & Rigueur
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Livraison conforme aux cahiers des charges et engagements contractuels.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FEF3C7]">
                  <MapPin className="w-5 h-5 text-[#D97706] mb-2" />
                  <h3 className="font-display font-bold text-sm text-[#0A3D24] mb-1">
                    Proximité Bénin
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Implantation à Sèmè-Podji avec intervention rapide partout au pays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NOS DOMAINES D'INTERVENTION (#services) */}
      <section id="services" className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#008751] font-semibold mb-2">
                <span>COMPÉTENCES CLÉS ISSUES D’UN SAVOIR-FAIRE D’EXCELLENCE</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A3D24] tracking-tight text-balance">
                Nos Domaines d’Intervention
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                Découvrez nos compétences clés issues de notre savoir-faire d’excellence, illustrées
                par nos opérations sur le terrain au Bénin.
              </p>
            </div>

            {/* Interactive Filter Controls */}
            <div
              role="tablist"
              aria-label="Filtrer les domaines d'intervention"
              className="flex flex-wrap items-center gap-1 p-1.5 bg-slate-200/75 rounded-xl self-start lg:self-auto"
            >
              {[
                { id: 'all', label: 'Tous les pôles (4)' },
                { id: 'tic', label: '01. TIC & GEC PRO' },
                { id: 'btp', label: '02. BTP & Travaux' },
                { id: 'equipements', label: '03. Équipements' },
                { id: 'logistique', label: '04. Logistique' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-[#008751] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#008751]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Bento Grid with Authentic Imagery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((domain, index) => {
                const isWide =
                  selectedCategory === 'all' ? index === 0 || index === 3 : true;
                const colSpanClass =
                  selectedCategory === 'all'
                    ? isWide
                      ? 'lg:col-span-7'
                      : 'lg:col-span-5'
                    : 'lg:col-span-12';
                const isExpanded = expandedCardId === domain.id;

                return (
                  <motion.article
                    layout
                    key={domain.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.2 }}
                    className={`${colSpanClass} rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between transition-all hover:border-[#008751] hover:shadow-md`}
                  >
                    <div>
                      {/* Photographic Card Header */}
                      <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900 group">
                        <img
                          src={domain.imageUrl}
                          alt={domain.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                        
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                          <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-md bg-[#008751] text-white">
                            PÔLE {domain.number}
                          </span>
                          <span className="font-mono font-bold text-xs px-2 py-0.5 rounded-md bg-white/90 text-[#0A3D24]">
                            {domain.metricValue}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-4 right-4 text-white">
                          <div className="text-xs font-mono text-[#FCD116] font-semibold mb-0.5">
                            {domain.shortTitle}
                          </div>
                          <h3 className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                            {domain.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                          {domain.description}
                        </p>

                        {/* Capabilities List */}
                        <div className="space-y-2 mb-4">
                          <div className="text-xs font-bold text-[#0A3D24]">
                            Solutions & Compétences :
                          </div>
                          <ul className="space-y-1.5">
                            {domain.capabilities.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-snug"
                              >
                                <Check className="w-4 h-4 text-[#008751] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expandable Deliverables */}
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.15 }}
                            className="mt-4 p-4 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7]"
                          >
                            <div className="text-xs font-bold text-[#008751] mb-2">
                              Livrables & Garanties ADGA :
                            </div>
                            <ul className="space-y-1 text-xs text-slate-700">
                              {domain.deliverables.map((deliv) => (
                                <li key={deliv} className="flex items-center gap-2">
                                  <span className="text-[#008751] font-bold">·</span>
                                  <span>{deliv}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setExpandedCardId(isExpanded ? null : domain.id)}
                        className="text-xs font-semibold text-slate-600 hover:text-[#008751] cursor-pointer"
                      >
                        {isExpanded ? 'Masquer détails' : 'Voir livrables clés'}
                      </button>

                      <button
                        type="button"
                        onClick={() => onRequestQuote(domain.title)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#008751] hover:bg-[#065F38] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
                      >
                        <span>Demander un devis</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};
