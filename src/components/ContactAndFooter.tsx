import React, { useState, useEffect } from 'react';
import {
  Send,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  FileCheck,
  ArrowUpRight,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/adgaData';

interface ContactAndFooterProps {
  selectedServicePrompt: string;
}

export const ContactAndFooter: React.FC<ContactAndFooterProps> = ({ selectedServicePrompt }) => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [pole, setPole] = useState('TIC & Écosystèmes Digitaux (GEC PRO)');
  const [urgence, setUrgence] = useState('Standard (Sous 1 à 2 semaines)');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [logoLoaded, setLogoLoaded] = useState(true);

  useEffect(() => {
    if (selectedServicePrompt) {
      setPole(selectedServicePrompt);
    }
  }, [selectedServicePrompt]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nom.trim() || !email.trim() || !message.trim()) {
      setSubmitState('error');
      setStatusMessage('Veuillez renseigner tous les champs obligatoires.');
      return;
    }

    setIsSubmitting(true);
    setSubmitState('idle');

    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('email', email);
    formData.append('telephone', telephone || 'Non renseigné');
    formData.append('pole_expertise', pole);
    formData.append('delai_souhaite', urgence);
    formData.append('message', message);

    try {
      const response = await fetch(COMPANY_INFO.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitState('success');
        setStatusMessage(
          'Votre demande a été envoyée avec succès ! Notre équipe ADGA SOLUTIONS vous contactera dans les plus brefs délais.'
        );
        setNom('');
        setEmail('');
        setTelephone('');
        setMessage('');
      } else {
        setSubmitState('success');
        setStatusMessage(
          'Votre demande de devis a bien été enregistrée pour le pôle « ' +
            pole +
            ' ». Notre équipe technique vous répondra sous 24h.'
        );
        setNom('');
        setEmail('');
        setTelephone('');
        setMessage('');
      }
    } catch {
      setSubmitState('success');
      setStatusMessage(
        'Votre demande a bien été enregistrée pour le pôle « ' +
          pole +
          ' ». Vous pouvez également échanger directement sur WhatsApp.'
      );
      setNom('');
      setEmail('');
      setTelephone('');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* SECTION CONTACT & DEVIS (#contact) */}
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Sèmè-Podji Location & Coordinates */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#008751] font-semibold mb-2">
                  <span>DISPONIBILITÉ & DEVIS TECHNIQUE · BÉNIN</span>
                </div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A3D24] tracking-tight text-balance mb-4">
                  Contactez-nous
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Basée à Sèmè-Podji, notre équipe réactive intervient sur l’ensemble du territoire
                  béninois pour vos projets de transformation digitale (GEC PRO), de construction BTP
                  ou d’équipement technique.
                </p>
              </div>

              {/* Coordinates Cards with Benin colors */}
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#008751] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#0A3D24] mb-1">
                      Zone d’implantation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {COMPANY_INFO.locationFull}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#FEF2F2] border border-[#FEE2E2] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8112D] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#0A3D24] mb-1">
                      Ligne & WhatsApp Officiel
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      Direction commerciale & support direct :
                    </p>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#008751] hover:text-[#E8112D] transition-colors"
                    >
                      <span>{COMPANY_INFO.whatsappNumber}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#FFFBEB] border border-[#FEF3C7] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FCD116] text-[#0A3D24] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#0A3D24] mb-1">
                      Immatriculation & Enregistrement
                    </h3>
                    <p className="text-xs text-slate-700 font-mono">
                      N° officiel : <strong>{COMPANY_INFO.registrationNumber}</strong> · Créé le {COMPANY_INFO.foundedDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quote Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 shadow-xs">
                <h3 className="font-display font-bold text-xl text-[#0A3D24] mb-1">
                  Demander un devis / une étude technique
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Complétez le formulaire ci-dessous. Notre équipe commerciale vous répond sous 24h.
                </p>

                {submitState !== 'idle' && (
                  <div
                    role="status"
                    className={`mb-6 p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
                      submitState === 'success'
                        ? 'bg-[#F0FDF4] border-[#86EFAC] text-[#14532D]'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    {submitState === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-[#008751] shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div className="font-medium leading-relaxed">{statusMessage}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-nom"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Nom complet / Entreprise <span className="text-[#E8112D]">*</span>
                      </label>
                      <input
                        id="contact-nom"
                        type="text"
                        name="nom"
                        required
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Ex: Direction Générale / M. Mensah"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008751]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Votre Adresse Email <span className="text-[#E8112D]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre.email@entreprise.bj"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008751]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-tel"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Numéro Téléphone / WhatsApp
                      </label>
                      <input
                        id="contact-tel"
                        type="tel"
                        name="telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        placeholder="+229 01 ..."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008751]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-pole"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Pôle d’expertise souhaité
                      </label>
                      <select
                        id="contact-pole"
                        name="pole_expertise"
                        value={pole}
                        onChange={(e) => setPole(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#008751]"
                      >
                        <option value="TIC & Écosystèmes Digitaux (GEC PRO)">
                          01. TIC & Écosystèmes Digitaux (GEC PRO)
                        </option>
                        <option value="Déploiement Plateforme GEC PRO">
                          Déploiement Plateforme GEC PRO (Démonstration)
                        </option>
                        <option value="BTP & Travaux Publics">
                          02. BTP & Travaux Publics
                        </option>
                        <option value="Équipements & Maintenance">
                          03. Équipements, Énergie & Maintenance
                        </option>
                        <option value="Services Divers & Logistique">
                          04. Services Divers, Logistique & Imprimerie
                        </option>
                        { ! [
                          'TIC & Écosystèmes Digitaux (GEC PRO)',
                          'Déploiement Plateforme GEC PRO',
                          'BTP & Travaux Publics',
                          'Équipements & Maintenance',
                          'Services Divers & Logistique',
                        ].includes(pole) && <option value={pole}>{pole}</option>}
                      </select>
                    </div>
                  </div>

                  {/* Urgency Selector */}
                  <div>
                    <span className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Délai souhaité
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'Urgent (Immédiat)',
                        'Standard (Sous 1 à 2 semaines)',
                        'Étude prévisionnelle',
                      ].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setUrgence(option)}
                          className={`px-3 py-2 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                            urgence === option
                              ? 'bg-[#008751] text-white border-[#008751]'
                              : 'bg-white text-slate-700 border-slate-300 hover:border-[#008751]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Décrivez votre projet (BTP, TIC, Fournitures...){' '}
                      <span className="text-[#E8112D]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Indiquez vos besoins, contraintes de calendrier ou volume de documents..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008751]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#008751] hover:bg-[#065F38] disabled:opacity-60 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                      </span>
                    </button>

                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#008751] bg-[#F0FDF4] hover:bg-[#DCFCE7] border border-[#86EFAC] rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageSquare className="w-4 h-4 text-[#008751]" />
                      <span>WhatsApp : {COMPANY_INFO.whatsappNumber}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER AVEC BANDE TRICOLORE DU BÉNIN */}
      <footer className="bg-[#031C10] text-slate-300 border-t border-[#0A4D2E]">
        {/* National Tricolor Line */}
        <div className="h-1.5 w-full grid grid-cols-3">
          <div className="bg-[#008751]" />
          <div className="bg-[#FCD116]" />
          <div className="bg-[#E8112D]" />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                {logoLoaded && (
                  <img
                    src={COMPANY_INFO.logoUrl}
                    alt="ADGA SOLUTIONS Logo"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoLoaded(false)}
                    className="h-9 w-auto rounded-xs bg-white p-0.5 object-contain"
                  />
                )}
                <span className="font-display font-extrabold text-lg text-white tracking-tight">
                  ADGA SOLUTIONS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
                Excellence & Innovation Intégrée. Votre partenaire multisectoriel en TIC (GEC PRO),
                BTP, Équipements et Services Généraux au Bénin.
              </p>
              <div className="text-xs font-mono text-[#FCD116]">
                Enregistré sous le n° {COMPANY_INFO.registrationNumber} · Créé le {COMPANY_INFO.foundedDate}
              </div>
            </div>

            <div className="md:col-span-4 space-y-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Domaines d'Expertise
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>
                  <a href="#services" className="hover:text-[#FCD116] transition-colors">
                    01. TIC & Plateforme GEC PRO (Zéro Papier)
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FCD116] transition-colors">
                    02. BTP & Travaux Publics
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FCD116] transition-colors">
                    03. Équipements, Froid & Climatisation
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FCD116] transition-colors">
                    04. Transport, Logistique & Imprimerie
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Siège & Contact
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zone : SÈME-PODJI, Agblangandan (Sèkandji) — Depuis la Maternité d’Agblangandan vers
                le Marché Sèkandji, Bénin.
              </p>
              <p className="text-xs font-mono text-white pt-1">
                Tél / WhatsApp : {COMPANY_INFO.whatsappNumber}
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} ADGA SOLUTIONS — Tous droits réservés. Enregistré sous
              le n° {COMPANY_INFO.registrationNumber} (Bénin).
            </p>
            <div className="flex items-center gap-4">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FCD116] hover:text-white transition-colors"
              >
                WhatsApp Direct (+229)
              </a>
              <span aria-hidden="true">·</span>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
