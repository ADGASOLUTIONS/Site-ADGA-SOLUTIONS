import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Send, ArrowUpRight, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/adgaData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Bonjour ADGA SOLUTIONS, je souhaite obtenir des informations sur vos services (TIC, BTP, Équipements).'
  );

  const quickOptions = [
    {
      label: 'Démo Plateforme GEC PRO',
      text: 'Bonjour ADGA SOLUTIONS, je souhaite planifier une démonstration de votre plateforme GEC PRO.',
    },
    {
      label: 'Devis BTP & Génie Civil',
      text: 'Bonjour ADGA SOLUTIONS, je souhaite échanger sur un projet de construction ou réhabilitation BTP.',
    },
    {
      label: 'Énergie, Froid & Équipements',
      text: 'Bonjour ADGA SOLUTIONS, je sollicite un devis pour des installations électriques / climatisation / bureautique.',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Interactive Quick Dialogue Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="mb-3 w-76 sm:w-84 rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden"
          >
            {/* Header with Benin Tricolor Bar */}
            <div className="h-1.5 w-full grid grid-cols-3">
              <div className="bg-[#008751]" />
              <div className="bg-[#FCD116]" />
              <div className="bg-[#E8112D]" />
            </div>

            <div className="p-3.5 bg-[#052E1B] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#008751] flex items-center justify-center text-white shrink-0 border border-white/20">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display font-bold text-xs sm:text-sm text-white">
                    ADGA SOLUTIONS
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span>En ligne sur WhatsApp</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer la boîte de dialogue"
                className="w-6 h-6 rounded-md text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-3.5 bg-[#F8FAFC] space-y-2.5">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
                Bonjour ! Comment l’équipe d’<strong>ADGA SOLUTIONS</strong> (Bénin) peut-elle vous
                accompagner aujourd’hui ?
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-1">
                  Sujets rapides :
                </div>
                {quickOptions.map((opt) => (
                  <a
                    key={opt.label}
                    href={`https://wa.me/2290140542831?text=${encodeURIComponent(opt.text)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 hover:border-[#008751] hover:text-[#008751] hover:bg-[#F0FDF4] transition-all group"
                  >
                    <span>{opt.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#008751] transition-colors" />
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/2290140542831?text=${defaultMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#008751] hover:bg-[#065F38] rounded-lg transition-colors shadow-xs"
                  >
                    <Send className="w-3 h-3 shrink-0" />
                    <span>Démarrer (+229)</span>
                  </a>

                  {/* Indicateur 'Sécurisé' avec cadenas à côté du bouton */}
                  <div
                    className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg bg-[#F0FDF4] border border-[#DCFCE7] text-[10px] font-mono font-semibold text-[#008751] shrink-0 select-none"
                    title="Échanges cryptés de bout en bout via WhatsApp"
                  >
                    <Lock className="w-3 h-3 text-[#008751] shrink-0" />
                    <span>Sécurisé</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 text-[9px] text-slate-500 font-mono">
                  <span className="w-1 h-1 rounded-full bg-[#008751]" />
                  <span>Échanges chiffrés de bout en bout</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Benin Tricolor Ring */}
      <div className="relative flex items-center">
        {/* Compact Circular Tricolor Button with Benin Flag Halo */}
        <div className="relative p-[2px] rounded-full shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 bg-gradient-to-tr from-[#008751] via-[#FCD116] to-[#E8112D]">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Contacter ADGA SOLUTIONS sur WhatsApp"
            className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#008751] hover:bg-[#065F38] text-white flex items-center justify-center shadow-inner cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008751]"
          >
            {/* National mini-flag indicator badge */}
            <span
              title="Bénin"
              className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border border-white shadow-xs overflow-hidden flex flex-col"
            >
              <span className="h-1/3 bg-[#008751]" />
              <span className="h-1/3 bg-[#FCD116]" />
              <span className="h-1/3 bg-[#E8112D]" />
            </span>

            {/* Official WhatsApp SVG Icon (compact size) */}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
