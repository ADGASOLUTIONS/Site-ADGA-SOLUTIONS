export interface ServiceDomain {
  id: string;
  number: string;
  category: 'tic' | 'btp' | 'equipements' | 'logistique';
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  metricValue: string;
  metricLabel: string;
  featured?: boolean;
  imageUrl: string;
}

export interface GecProPillar {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  content: string;
  keyTakeaway: string;
  metric: string;
  metricContext: string;
}

export interface GecWorkflowNode {
  id: string;
  role: string;
  department: string;
  actionTitle: string;
  timestampOffset: string;
  statusLabel: string;
  documentState: string;
  annotation: string;
  securityScope: string;
  emailAlert: string;
}

export interface PortfolioProject {
  id: string;
  category: 'tic' | 'btp' | 'equipements' | 'logistique';
  categoryLabel: string;
  title: string;
  location: string;
  year: string;
  metricHighlight: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  visualType: 'gec-dashboard' | 'btp-blueprint' | 'energy-grid' | 'logistics-hub';
  imageUrl: string;
}

export const IMAGES = {
  hero: '/src/assets/images/hero_adga_benin_1793035424995.jpg',
  gecPro: '/src/assets/images/gecpro_digital_office_1793035426033.jpg',
  btp: '/src/assets/images/btp_chantier_benin_1793035426715.jpg',
  energie: '/src/assets/images/energie_equipements_1793035426605.jpg',
  logistique: '/src/assets/images/logistique_transport_1793035427183.jpg',
};

export const COMPANY_INFO = {
  name: 'ADGA SOLUTIONS',
  tagline: 'Excellence & Innovation Intégrée',
  description:
    'Votre partenaire multisectoriel en TIC, BTP, Fournitures et Services Généraux au Bénin.',
  registrationNumber: 'RB/PNO/26 A 125246',
  foundedDate: '08 Mai 2026',
  locationShort: 'Sèmè-Podji, Agblangandan (Sèkandji), Bénin',
  locationFull:
    "Zone : SÈME-PODJI, Agblangandan (Sèkandji) — Depuis la Maternité d'Agblangandan vers le Marché Sèkandji.",
  whatsappNumber: '+229 01 40 54 28 31',
  whatsappUrl: 'https://wa.me/2290140542831',
  formspreeEndpoint: 'https://formspree.io/f/xykovkbq',
  logoUrl: '/assets/aistudio/unnamed_ba419ef9.jpg',
};

export const SERVICE_DOMAINS: ServiceDomain[] = [
  {
    id: 'tic-gec-pro',
    number: '01',
    category: 'tic',
    title: 'TIC & Écosystèmes Digitaux (GEC PRO)',
    shortTitle: 'TIC & GEC PRO',
    subtitle: 'Digitalisation documentaire, développement sur mesure & infrastructures réseaux',
    description:
      'Nous transformons la gestion de vos documents avec notre solution phare GEC PRO, conçue pour éradiquer la lenteur administrative et interconnecter vos pôles stratégiques (Secrétariat, DG, DAF, RH, Commercial).',
    capabilities: [
      'Plateforme collaborative GEC PRO (Transition Zéro Papier)',
      'Création de sites internet professionnels (Vitrines & E-commerce)',
      'Applications Web sur mesure & Mobiles (iOS & Android)',
      'Hardware IT (Matériels informatiques, serveurs & réseaux sécurisés)',
    ],
    deliverables: [
      'Déploiement clé en main avec formation des équipes',
      'Archivage numérique indexé et contrôle d’accès par rôle',
      'Maintenance préventive et évolutive du parc informatique',
    ],
    metricValue: '+40%',
    metricLabel: 'Gain de productivité administrative mesuré dès le 1er mois',
    featured: true,
    imageUrl: IMAGES.gecPro,
  },
  {
    id: 'btp-travaux-publics',
    number: '02',
    category: 'btp',
    title: 'BTP & Travaux Publics',
    shortTitle: 'BTP & Génie Civil',
    subtitle: 'Construction, réhabilitation d’infrastructures et suivi technique de chantiers',
    description:
      'Des fondations aux finitions, nos équipes d’ingénieurs et de techniciens réalisent des ouvrages durables, conformes aux normes de sécurité et aux exigences architecturales modernes au Bénin.',
    capabilities: [
      'Construction et réhabilitation de bâtiments résidentiels et tertiaires',
      'Réalisation de magasins de stockage, salles de classes et complexes administratifs',
      'Entretien de pistes rurales et ouvrages de franchissement',
      'Contrôle technique, métré, ordonnancement et suivi rigoureux de travaux',
    ],
    deliverables: [
      'Études techniques, plans d’exécution et devis quantitatifs détaillés',
      'Rapports d’avancement hebdomadaires et respect strict des délais',
      'Garantie décennale et conformité aux standards du génie civil',
    ],
    metricValue: '100%',
    metricLabel: 'Chantiers livrés dans le respect des cahiers des charges techniques',
    featured: true,
    imageUrl: IMAGES.btp,
  },
  {
    id: 'equipements-maintenance',
    number: '03',
    category: 'equipements',
    title: 'Équipements & Maintenance',
    shortTitle: 'Équipements & Énergie',
    subtitle: 'Génie électrique, froid industriel, mobilier ergonomique et consommables',
    description:
      'Nous équipons et maintenons vos environnements de travail pour garantir la continuité opérationnelle de vos installations administratives, commerciales et industrielles.',
    capabilities: [
      'Énergie & Froid : Installations électriques courant fort/faible et climatisation',
      'Bureautique : Aménagement et fourniture de mobiliers de bureau de haute qualité',
      'Fourniture de consommables informatiques et équipements techniques',
      'Contrats de maintenance préventive et curative multi-sites',
    ],
    deliverables: [
      'Bilans énergétiques et dimensionnement d’installations climatiques',
      'Aménagement ergonomique d’espaces de direction et d’open-spaces',
      'Intervention rapide sur site en cas de panne critique',
    ],
    metricValue: '24h',
    metricLabel: 'Délai moyen d’intervention technique et maintenance sur site',
    imageUrl: IMAGES.energie,
  },
  {
    id: 'services-divers-logistique',
    number: '04',
    category: 'logistique',
    title: 'Services Divers & Logistique',
    shortTitle: 'Logistique & Négoce',
    subtitle: 'Transport, chaîne d’approvisionnement, assainissement et imprimerie pro',
    description:
      'Une prise en charge intégrée de vos opérations logistiques, d’approvisionnement et d’entretien général pour permettre à vos équipes de se concentrer sur leur cœur de métier.',
    capabilities: [
      'Transport & Logistique : Gestion optimisée des flux et chaîne d’approvisionnement',
      'Commerce Général, Import-Export et négoce de matériels spécialisés',
      'Assainissement, nettoyage industriel et entretien d’espaces professionnels',
      'Imprimerie professionnelle et supports de communication institutionnelle',
    ],
    deliverables: [
      'Traçabilité complète des expéditions et livraisons sur tout le territoire',
      'Protocoles d’hygiène et d’assainissement certifiés pour bâtiments publics/privés',
      'Production graphique et impression grand tirage haute définition',
    ],
    metricValue: '360°',
    metricLabel: 'Couverture multisectorielle intégrée avec un interlocuteur unique',
    imageUrl: IMAGES.logistique,
  },
];

export const GEC_PRO_PILLARS: GecProPillar[] = [
  {
    id: 'constat',
    stepNumber: '01',
    title: 'Le Constat : La paralysie administrative des entreprises',
    subtitle: 'Pourquoi la gestion manuelle du courrier freine votre compétitivité',
    content:
      "Dans l'écosystème professionnel actuel, la gestion manuelle du courrier et des documents physiques représente un frein majeur à la compétitivité et à la réactivité des équipes. Les structures font face à des pertes récurrentes d'informations, à un manque de traçabilité sur les consignes données, et à un cloisonnement des services qui ralentit la prise de décision. Face à des flux documentaires de plus en plus denses, la recherche d'une correspondance ou la validation d'une urgence se transforme souvent en une perte de temps considérable pour les dirigeants et leurs collaborateurs.",
    keyTakeaway:
      'Élimination des pertes de courriers physiques, des goulots d’étranglement et du cloisonnement inter-services.',
    metric: '0 perte',
    metricContext: 'Zéro document égaré grâce à la numérisation dès réception',
  },
  {
    id: 'solution',
    stepNumber: '02',
    title: 'La Solution : La Plateforme GEC PRO',
    subtitle: 'Centralisation et automatisation du cycle de vie documentaire',
    content:
      "Pour répondre à ce défi, notre entreprise a développé GEC PRO, une plateforme numérique collaborative de Gestion Électronique des Courriers, conçue pour centraliser et automatiser l'intégralité du cycle de vie de vos documents. Développée avec une interface moderne et intuitive, cette solution interconnecte instantanément tous les services stratégiques de votre entreprise, du Secrétariat à la Direction Générale, en passant par le DAF, les Ressources Humaines, le pôle Commercial et les autres services, garantissant une transition fluide vers le zéro papier.",
    keyTakeaway:
      'Interconnexion temps réel entre Secrétariat, Direction Générale, DAF, RH et pôle Commercial.',
    metric: '5+ pôles',
    metricContext: 'Services stratégiques interconnectés sur une interface unique',
  },
  {
    id: 'coeur-systeme',
    stepNumber: '03',
    title: 'Le Cœur du Système : Numérisation, routage et confidentialité',
    subtitle: 'Indexation intelligente et contrôle d’accès granulaire par rôle',
    content:
      "Le fonctionnement de la plateforme repose sur une logique d’aiguillage rigoureuse et sécurisée. Dès l'arrivée d'un document au Secrétariat, il est instantanément numérisé, indexé avec ses métadonnées clés (expéditeur, objet, référence) et stocké de manière unique dans des archives hautement sécurisées. Grâce à un système de filtrage dynamique basé sur les rôles, la confidentialité est absolue : chaque chef de service ne voit sur son tableau de bord que les courriers qui le concernent directement, évitant ainsi la surcharge d'informations et les fuites de données internes.",
    keyTakeaway:
      'Cloisonnement sécurisé par rôle : chaque responsable accède uniquement aux dossiers qui lui sont affectés.',
    metric: '100%',
    metricContext: 'Confidentialité garantie par filtrage dynamique des droits',
  },
  {
    id: 'tracabilite',
    stepNumber: '04',
    title: 'La Traçabilité Totale et le Traitement Collaboratif',
    subtitle: 'Horodatage inaltérable, annotations fusionnées et alertes instantanées',
    content:
      "La force de GEC PRO réside dans sa capacité à maintenir une traçabilité historique inaltérable. Lorsqu'un courrier passe d'un service à un autre, le système fusionne et horodate automatiquement toutes les annotations et instructions précédentes, permettant à la Direction de garder une visibilité parfaite sur l'état d'avancement d'un dossier. De plus, une passerelle de messagerie automatisée envoie une alerte e-mail instantanée au service cible dès qu'un document est transféré, éliminant ainsi le besoin de relances manuelles incessantes.",
    keyTakeaway:
      'Historique horodaté complet des instructions et notifications e-mail automatiques à chaque transfert.',
    metric: '< 3 sec',
    metricContext: 'Temps de routage et notification e-mail entre deux départements',
  },
  {
    id: 'roi',
    stepNumber: '05',
    title: 'Le Retour sur Investissement : Productivité et modernisation',
    subtitle: 'Un gain de productivité immédiat supérieur à 40 %',
    content:
      "Adopter GEC PRO, c'est choisir de moderniser l'image de marque de votre entreprise tout en optimisant vos coûts opérationnels. En éliminant les lenteurs du papier, la plateforme génère un gain de productivité immédiat estimé à plus de 40 % sur le traitement des tâches administratives courantes. Elle offre à la direction un outil de pilotage en temps réel, garantit le respect des délais face aux institutions (impôts, banques, partenaires) et sécurise le patrimoine documentaire de votre entreprise à long terme.",
    keyTakeaway:
      'Pilotage exécutif en temps réel, conformité institutionnelle et préservation du patrimoine documentaire.',
    metric: '+40%',
    metricContext: 'Productivité gagnée sur le traitement administratif courant',
  },
];

export const GEC_WORKFLOW_SIMULATION: GecWorkflowNode[] = [
  {
    id: 'secretariat',
    role: 'Étape 1 · Réception & Indexation',
    department: 'Secrétariat Central',
    actionTitle: 'Numérisation & Enregistrement Métadonnées',
    timestampOffset: '08:14:02',
    statusLabel: 'Numérisé & Indexé',
    documentState: 'Réf: ADGA/COUR/2026-0849 · Appel d’offres Équipements & BTP',
    annotation:
      'Courrier physique reçu ce matin, numérisé en PDF/A haute définition. Pièces jointes vérifiées et indexées.',
    securityScope: 'Accès : Secrétariat Central & Direction Générale',
    emailAlert: 'Notification automatique envoyée à : Direction Générale (DG)',
  },
  {
    id: 'dg',
    role: 'Étape 2 · Orientation Stratégique',
    department: 'Direction Générale (DG)',
    actionTitle: 'Instruction & Imputation Multi-Pôles',
    timestampOffset: '08:21:45',
    statusLabel: 'Imputé avec Priorité Haute',
    documentState: 'Réf: ADGA/COUR/2026-0849 · Statut : Annoté par le DG',
    annotation:
      '« Pour étude budgétaire immédiate par la DAF et validation du planning technique par le pôle BTP avant jeudi 16h. »',
    securityScope: 'Accès étendu à : DG · DAF · Direction Technique',
    emailAlert: 'Alerte instantanée envoyée à : DAF & Direction Technique',
  },
  {
    id: 'daf',
    role: 'Étape 3 · Traitement Collaboratif',
    department: 'Direction Administrative & Financière (DAF)',
    actionTitle: 'Visa Budgétaire & Fusion des Annotations',
    timestampOffset: '09:05:18',
    statusLabel: 'Visa Financier Accordé',
    documentState: 'Réf: ADGA/COUR/2026-0849 · Historique fusionné (2 annotations)',
    annotation:
      '« Chiffrage validé conformément à la grille tarifaire 2026. Caution bancaire prête pour soumission. Transmis au Commercial. »',
    securityScope: 'Accès : DG · DAF · Pôle Commercial (RH masqué)',
    emailAlert: 'Notification de validation transmise à : Pôle Commercial & DG',
  },
  {
    id: 'archive',
    role: 'Étape 4 · Clôture & Archivage Sécurisé',
    department: 'Coffre-Fort Numérique GEC PRO',
    actionTitle: 'Validation Finale & Archivage Inaltérable',
    timestampOffset: '10:12:00',
    statusLabel: 'Clôturé & Archivé',
    documentState: 'Réf: ADGA/COUR/2026-0849 · Empreinte SHA-256 vérifiée',
    annotation:
      'Dossier complet traité en 1h58 au lieu de 4 jours en circuit papier. Courrier de réponse généré et archivé avec piste d’audit complète.',
    securityScope: 'Archive pérenne consultable selon habilitations',
    emailAlert: 'Accusé de clôture envoyé au tableau de bord Direction Générale',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-gec-pro',
    category: 'tic',
    categoryLabel: 'Solutions Numériques · GEC PRO',
    title: 'Déploiement de la Plateforme Collaborative GEC PRO',
    location: 'Cotonou & Sèmè-Podji, Bénin',
    year: '2026',
    metricHighlight: '+40% de productivité administrative',
    summary:
      'Interconnexion complète du Secrétariat, de la Direction Générale, de la DAF, des RH et du service Commercial avec transition zéro papier.',
    challenge:
      'Éliminer les délais de traitement de 3 à 5 jours liés aux parapheurs physiques, sécuriser la confidentialité des courriers sensibles et assurer une traçabilité horodatée de chaque instruction.',
    solution:
      'Mise en place de GEC PRO avec numérisation à l’arrivée, filtrage dynamique des tableaux de bord par rôle, fusion automatique des annotations et passerelle d’alertes e-mail en temps réel.',
    deliverables: [
      'Application web sécurisée multi-départements (Secrétariat, DG, DAF, RH, Commercial)',
      'Système d’indexation multicritères (expéditeur, objet, référence, date)',
      'Moteur de notifications automatiques par e-mail et journal d’audit inaltérable',
    ],
    visualType: 'gec-dashboard',
    imageUrl: IMAGES.gecPro,
  },
  {
    id: 'proj-btp-complexe',
    category: 'btp',
    categoryLabel: 'BTP & Travaux Publics',
    title: 'Construction & Réhabilitation d’Infrastructures Administratives et Scolaires',
    location: 'Sèmè-Podji & Départements, Bénin',
    year: '2026',
    metricHighlight: '100% conformité génie civil',
    summary:
      'Réalisation de bâtiments administratifs, salles de classes, magasins de stockage et entretien de pistes rurales avec suivi rigoureux.',
    challenge:
      'Concevoir et livrer des infrastructures durables résistantes aux contraintes climatiques locales tout en respectant strictement les calendriers d’exécution.',
    solution:
      'Mobilisation de nos équipes d’ingénieurs génie civil pour le contrôle qualité des matériaux, l’exécution du gros œuvre et second œuvre, et le suivi permanent de chantier.',
    deliverables: [
      'Construction et réhabilitation de bâtiments administratifs et salles de classes',
      'Aménagement de magasins de stockage et ouvrages d’assainissement',
      'Entretien de pistes rurales, contrôle technique et suivi d’exécution',
    ],
    visualType: 'btp-blueprint',
    imageUrl: IMAGES.btp,
  },
  {
    id: 'proj-energie-froid',
    category: 'equipements',
    categoryLabel: 'Équipements & Maintenance',
    title: 'Installation Électrique, Climatisation & Mobilier de Direction',
    location: 'Agblangandan & Grand Nokoué, Bénin',
    year: '2026',
    metricHighlight: '-28% de consommation énergétique',
    summary:
      'Équipement intégral de plateaux de bureaux : réseaux électriques stabilisés, climatisation haute efficacité et mobilier ergonomique.',
    challenge:
      'Garantir la stabilité électrique du parc informatique et le confort thermique des espaces de travail tout en fournissant un aménagement bureautique durable.',
    solution:
      'Déploiement de systèmes de climatisation Inverter, câblage électrique et informatique structuré, et fourniture de mobilier de bureau professionnel avec contrat de maintenance.',
    deliverables: [
      'Installations électriques sécurisées et groupes de secours',
      'Climatisation centrale et splits haute performance énergétique',
      'Dotation complète en mobilier bureautique et consommables techniques',
    ],
    visualType: 'energy-grid',
    imageUrl: IMAGES.energie,
  },
  {
    id: 'proj-logistique-services',
    category: 'logistique',
    categoryLabel: 'Services Divers & Logistique',
    title: 'Gestion de Flux Logistiques, Assainissement & Imprimerie Pro',
    location: 'Corridor Sèmè-Podji – Cotonou, Bénin',
    year: '2026',
    metricHighlight: '99.4% de ponctualité logistique',
    summary:
      'Optimisation de la chaîne d’approvisionnement, négoce import-export, entretien d’espaces professionnels et travaux d’imprimerie.',
    challenge:
      'Coordonner simultanément les approvisionnements techniques, l’entretien irréprochable des locaux et la production de supports imprimés institutionnels.',
    solution:
      'Organisation d’un pôle logistique réactif couplé à des équipes dédiées d’assainissement professionnel et une unité d’imprimerie haute capacité.',
    deliverables: [
      'Transport de marchandises et gestion optimisée des flux logistiques',
      'Commerce général, import-export et approvisionnement d’équipements',
      'Assainissement de bâtiments et imprimerie professionnelle',
    ],
    visualType: 'logistics-hub',
    imageUrl: IMAGES.logistique,
  },
];
