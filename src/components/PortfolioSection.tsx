import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  X,
  CheckCircle2,
  MapPin,
  Calendar,
  Eye,
  Building2,
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/adgaData';

interface PortfolioSectionProps {
  onRequestQuote: (defaultService?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="realisations"
      className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#008751] font-semibold mb-2">
              <span>RÉALISATIONS MAJEURES & CHANTIERS · EXÉCUTION AU BÉNIN</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A3D24] tracking-tight text-balance">
              Nos Réalisations
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Un aperçu de nos projets majeurs exécutés avec rigueur : solutions numériques GEC PRO,
              infrastructures BTP durables, installations énergétiques et logistique.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filtrer les réalisations"
            className="flex flex-wrap items-center gap-1 p-1.5 bg-slate-200/75 rounded-xl self-start lg:self-auto"
          >
            {[
              { id: 'all', label: 'Tous les projets' },
              { id: 'tic', label: 'GEC PRO & Digital' },
              { id: 'btp', label: 'BTP & Travaux' },
              { id: 'equipements', label: 'Énergie & Froid' },
              { id: 'logistique', label: 'Logistique' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#008751] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#008751]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid with Real Photographic Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.18 }}
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between cursor-pointer hover:border-[#008751] hover:shadow-lg transition-all"
              >
                <div>
                  {/* High Quality Photo Container */}
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-900">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-md bg-[#008751] text-white">
                        {project.categoryLabel}
                      </span>
                      <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-white/90 text-slate-900 font-semibold tabular-nums">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#FCD116] mb-1 font-semibold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-white leading-snug">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary Text */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Impact Metric */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="text-xs font-mono font-bold text-[#008751] tabular-nums">
                    Impact : {project.metricHighlight}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#008751] group-hover:text-[#E8112D] transition-colors whitespace-nowrap shrink-0">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ouvrir la fiche</span>
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Lightbox / Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xl my-8"
              >
                <div className="relative h-64 sm:h-72 bg-slate-900">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Fermer la fiche projet"
                    className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-mono text-[#FCD116] mb-1 font-semibold">
                      {selectedProject.categoryLabel} · {selectedProject.location}
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                      <div className="text-xs font-bold text-[#0A3D24] mb-1">
                        Problématique & Enjeux
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7]">
                      <div className="text-xs font-bold text-[#008751] mb-1">
                        Réponse & Ingénierie ADGA
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-800 mb-2">
                      Livrables & Spécifications Réalisées :
                    </div>
                    <ul className="space-y-2">
                      {selectedProject.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Fermer
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const title = selectedProject.title;
                        setSelectedProject(null);
                        onRequestQuote(`Projet similaire : ${title}`);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#E8112D] hover:bg-[#C00000] rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Demander un devis pour un projet similaire</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
