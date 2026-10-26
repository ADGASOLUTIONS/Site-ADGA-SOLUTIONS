import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  ArrowRight,
  Lock,
  MailCheck,
  Clock,
  Play,
  RotateCcw,
  Calculator,
  FileText,
  CheckCircle,
} from 'lucide-react';
import {
  GEC_PRO_PILLARS,
  GEC_WORKFLOW_SIMULATION,
  IMAGES,
} from '../data/adgaData';

interface GecProShowcaseProps {
  onRequestQuote: (defaultService?: string) => void;
}

export const GecProShowcase: React.FC<GecProShowcaseProps> = ({ onRequestQuote }) => {
  const [openPillarId, setOpenPillarId] = useState<string>('constat');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // ROI Calculator state
  const [monthlyMailCount, setMonthlyMailCount] = useState<number>(250);
  const [departmentsCount, setDepartmentsCount] = useState<number>(5);

  const activeWorkflowStep = GEC_WORKFLOW_SIMULATION[activeStepIndex];
  const estimatedHoursSaved = Math.round((monthlyMailCount * 18 * 0.42) / 60);
  const paperSheetsSaved = monthlyMailCount * departmentsCount * 2;

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % GEC_WORKFLOW_SIMULATION.length);
  };

  return (
    <section
      id="solutions-numeriques"
      className="py-16 lg:py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#008751] font-semibold mb-2">
            <span className="px-2 py-0.5 rounded-sm bg-[#008751]/10 border border-[#008751]/20">
              SOLUTION PHARE DU PÔLE TIC
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E8112D] font-bold">+40% DE PRODUCTIVITÉ ADMINISTRATIVE</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A3D24] tracking-tight text-balance mb-4">
            Présentation Détaillée de GEC PRO
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Cliquez sur chaque chapitre pour explorer en profondeur le fonctionnement, les enjeux de
            confidentialité et les avantages concrets de notre plateforme collaborative de Gestion
            Électronique des Courriers.
          </p>
        </div>

        {/* Real Digital Office Showcase Banner */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-64 sm:h-80 overflow-hidden relative">
              <img
                src={IMAGES.gecPro}
                alt="Équipes administratives utilisant la plateforme GEC PRO"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/80 hidden lg:block" />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#042817] text-white">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FCD116] mb-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#008751]" />
                <span>TRANSITION ZÉRO PAPIER · ENTREPRISES DU BÉNIN</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-3 leading-snug">
                Éradication définitive de la lenteur administrative
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                Chaque document physique ou numérique entrant est indexé, sécurisé et aiguillé en
                temps réel vers les chefs de pôles concernés avec une traçabilité inviolable.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onRequestQuote('Déploiement Plateforme GEC PRO')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#E8112D] hover:bg-[#C00000] rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <span>Demander une démo GEC PRO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Split: 5 Detailed Accordions | Interactive Simulator & Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 5 Official Chapters from the User's Document */}
          <div className="lg:col-span-7 space-y-3.5">
            {GEC_PRO_PILLARS.map((pillar) => {
              const isOpen = openPillarId === pillar.id;
              return (
                <div
                  key={pillar.id}
                  className={`rounded-xl border transition-colors duration-150 ${
                    isOpen
                      ? 'bg-white border-[#008751] shadow-xs'
                      : 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenPillarId(isOpen ? '' : pillar.id)}
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                        <span className="font-bold text-[#008751]">
                          CHAPITRE {pillar.stepNumber}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{pillar.subtitle}</span>
                      </div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#0A3D24]">
                        {pillar.stepNumber}. {pillar.title.replace(/^\d+\.\s*/, '')}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[#008751] text-white rotate-180'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.16 }}
                        className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100"
                      >
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                          {pillar.content}
                        </p>

                        <div className="p-3.5 rounded-lg bg-[#F0FDF4] border border-[#DCFCE7] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="text-xs text-slate-700">
                            <strong className="text-[#008751]">Avantage stratégique : </strong>
                            {pillar.keyTakeaway}
                          </div>
                          <div className="shrink-0 sm:text-right">
                            <span className="font-mono font-bold text-sm text-[#008751] tabular-nums">
                              {pillar.metric}
                            </span>
                            <div className="text-[11px] text-slate-500">{pillar.metricContext}</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Official Summary Callout Box in Benin Green */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#063B23] text-white mt-6 border border-[#0A5C36]">
              <div className="text-xs font-mono text-[#FCD116] mb-1 font-semibold">
                RÉSUMÉ EXÉCUTIF · GEC PRO
              </div>
              <h4 className="font-display font-bold text-lg sm:text-xl mb-2">
                En résumé : GEC PRO, c’est quoi ?
              </h4>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-5">
                GEC PRO est une plateforme conçue pour éradiquer définitivement la lenteur, la perte
                d’information et les manquements liés à la gestion manuelle des courriers en
                entreprise. En transformant chaque document papier ou électronique en un flux
                numérique sécurisé, elle interconnecte instantanément vos pôles clés.
              </p>
              <button
                type="button"
                onClick={() => onRequestQuote('Déploiement Plateforme GEC PRO')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#E8112D] hover:bg-[#C00000] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
              >
                <span>Planifier une démonstration GEC PRO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Workflow Simulation & ROI Calculator */}
          <div className="lg:col-span-5 space-y-6">
            {/* Interactive Workflow Simulator */}
            <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div>
                  <div className="text-xs font-mono text-[#008751] font-semibold">
                    SIMULATEUR DE CIRCUIT INTERNE
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0A3D24]">
                    Traçabilité d’un dossier GEC PRO
                  </h3>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#008751] hover:bg-[#065F38] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Suivant</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex(0)}
                    title="Réinitialiser"
                    aria-label="Réinitialiser la simulation"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-[#008751] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Step Buttons */}
              <div className="grid grid-cols-4 gap-1.5 mb-5">
                {GEC_WORKFLOW_SIMULATION.map((node, index) => {
                  const isCurrent = index === activeStepIndex;
                  const isDone = index < activeStepIndex;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveStepIndex(index)}
                      className={`p-2 rounded-lg text-left border transition-colors cursor-pointer ${
                        isCurrent
                          ? 'bg-[#008751] text-white border-[#008751]'
                          : isDone
                          ? 'bg-[#F0FDF4] text-[#008751] border-[#DCFCE7]'
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-mono text-[11px] font-bold tabular-nums">
                        0{index + 1}
                      </div>
                      <div className="text-[11px] font-semibold truncate">{node.department}</div>
                    </button>
                  );
                })}
              </div>

              {/* Current Step Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkflowStep.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16 }}
                  className="rounded-xl bg-white border border-slate-200 p-4 space-y-3 shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 font-mono">
                    <span>{activeWorkflowStep.role}</span>
                    <span className="inline-flex items-center gap-1 text-[#008751] font-semibold tabular-nums">
                      <Clock className="w-3.5 h-3.5" />
                      {activeWorkflowStep.timestampOffset}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-[#E8112D] mb-0.5">
                      {activeWorkflowStep.department}
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900">
                      {activeWorkflowStep.actionTitle}
                    </h4>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/70 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 font-mono text-slate-700">
                      <FileText className="w-3.5 h-3.5 text-[#008751] shrink-0" />
                      <span className="truncate">{activeWorkflowStep.documentState}</span>
                    </div>
                    <p className="text-slate-600 italic leading-relaxed">
                      {activeWorkflowStep.annotation}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Lock className="w-3.5 h-3.5 text-[#008751] shrink-0" />
                      <span>{activeWorkflowStep.securityScope}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 font-medium">
                      <MailCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>{activeWorkflowStep.emailAlert}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ROI & Savings Calculator */}
            <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#008751] font-semibold mb-1">
                <Calculator className="w-4 h-4 text-[#008751]" />
                <span>CALCULATEUR D’ÉCONOMIES AU BÉNIN</span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#0A3D24] mb-4">
                Estimez le gain de votre organisation
              </h3>

              <div className="space-y-4 mb-5">
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                    <label htmlFor="mail-volume-slider">
                      Volume mensuel de courriers traités
                    </label>
                    <span className="font-mono font-bold text-[#008751] tabular-nums">
                      {monthlyMailCount} courriers / mois
                    </span>
                  </div>
                  <input
                    id="mail-volume-slider"
                    type="range"
                    min={50}
                    max={1500}
                    step={50}
                    value={monthlyMailCount}
                    onChange={(e) => setMonthlyMailCount(Number(e.target.value))}
                    className="w-full accent-[#008751] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-700 mb-1.5">
                    <label htmlFor="dept-count-slider">
                      Nombre de pôles / directions interconnectées
                    </label>
                    <span className="font-mono font-bold text-[#E8112D] tabular-nums">
                      {departmentsCount} pôles
                    </span>
                  </div>
                  <input
                    id="dept-count-slider"
                    type="range"
                    min={2}
                    max={12}
                    step={1}
                    value={departmentsCount}
                    onChange={(e) => setDepartmentsCount(Number(e.target.value))}
                    className="w-full accent-[#E8112D] cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Temps administratif épargné</div>
                  <div className="font-mono font-extrabold text-xl text-[#008751] tabular-nums">
                    ~{estimatedHoursSaved} h / mois
                  </div>
                  <div className="text-[11px] text-[#008751] font-semibold">+40% de productivité</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Économie Zéro Papier</div>
                  <div className="font-mono font-extrabold text-xl text-[#E8112D] tabular-nums">
                    {paperSheetsSaved.toLocaleString('fr-FR')} pages
                  </div>
                  <div className="text-[11px] text-slate-500">Archivées sans papier</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
