/* ============================================================
   CATALOGUE DES PRESTATIONS — SILVER SERVICES
   Source : informations commerciales officielles de Silver Services (base de référence 2027).
   - price    : nombre en FCFA, ou null = « Sur devis ».
   - unit     : unité du prix (ex. "la page").
   - items    : liste facultative des prestations comprises (affichée sous la description).
   - featured : true = affichée sur la page d'accueil (6 maximum).
   - icon     : nom d'icône (voir js/main.js, objet ICONS).
   ============================================================ */
window.SC_SERVICES = [
  /* ---------- A. Bureautique et traitement de documents ---------- */
  { id: "saisie-simple", category: "Bureautique", name: "Saisie de documents simples", description: "Saisie de documents simples à partir de vos textes ou documents.", price: 300, unit: "la page", icon: "edit", featured: true },
  { id: "saisie-devoirs", category: "Bureautique", name: "Saisie de devoirs et exposés", description: "Saisie de vos devoirs et exposés.", price: 500, unit: "la page", icon: "edit" },
  { id: "mise-en-forme-simple", category: "Bureautique", name: "Mise en forme simple", description: "Mise en forme simple de vos documents.", price: 500, unit: "la page", icon: "layout", featured: true },
  { id: "saisie-devis", category: "Bureautique", name: "Saisie complexe, manuscrits, rapports et mémoires", description: "Saisies demandant plus de travail : tarif établi sur devis selon le document.", price: null, unit: "", icon: "edit",
    items: ["Saisie de documents complexes", "Saisie de textes manuscrits", "Saisie de rapports et mémoires"] },
  { id: "mise-en-page-devis", category: "Bureautique", name: "Mise en forme complexe et mise en page", description: "Mise en forme et mise en page avancées : tarif établi sur devis.", price: null, unit: "", icon: "layout",
    items: ["Mise en forme complexe", "Mise en page de rapports et mémoires", "Pagination", "Création de tables des matières", "Numérotation automatique", "Création et mise en forme de tableaux"] },
  { id: "pdf-conversions", category: "Bureautique", name: "Conversions et outils PDF", description: "Conversion et traitement de fichiers : tarif établi sur devis.", price: null, unit: "", icon: "copy",
    items: ["Conversion Word en PDF", "Conversion PDF en Word", "Fusion et séparation de fichiers PDF", "Compression de fichiers PDF"] },

  /* ---------- B. CV et candidatures professionnelles ---------- */
  { id: "cv-sans-photo", category: "CV et candidatures", name: "CV sans photo", description: "Création de votre CV sans photo, clair et professionnel.", price: 500, unit: "le CV", icon: "user" },
  { id: "cv-avec-photo", category: "CV et candidatures", name: "CV avec photo", description: "Création de votre CV avec photo.", price: 700, unit: "le CV", icon: "user" },
  { id: "cv-pro", category: "CV et candidatures", name: "CV professionnel (CV Pro)", description: "CV personnalisé et professionnel.", price: 1000, unit: "le CV", icon: "user", featured: true },
  { id: "lettre-motivation", category: "CV et candidatures", name: "Lettre de motivation", description: "Rédaction et mise en forme de votre lettre de motivation.", price: 1000, unit: "la lettre", icon: "mail", featured: true },
  { id: "cv-devis", category: "CV et candidatures", name: "Refonte de CV, CV étudiants et débutants", description: "Modernisation de CV existant et CV adaptés aux étudiants et débutants : tarif sur devis.", price: null, unit: "", icon: "user",
    items: ["Refonte et modernisation de CV", "CV pour étudiants et débutants"] },
  { id: "candidature-devis", category: "CV et candidatures", name: "Lettres de stage/emploi et dossiers de candidature", description: "Lettres de demande et préparation de dossiers : tarif sur devis.", price: null, unit: "", icon: "mail",
    items: ["Lettres de demande de stage et d'emploi", "Préparation de dossiers de candidature"] },

  /* ---------- C. Rédaction administrative et professionnelle ---------- */
  { id: "redaction-admin", category: "Rédaction", name: "Rédaction administrative et professionnelle", description: "Rédaction selon la nature et la complexité du document : tarif sur devis.", price: null, unit: "", icon: "edit",
    items: ["Lettres administratives", "Demandes manuscrites", "Lettres professionnelles", "Demandes d'emploi et de stage", "Comptes rendus", "Procès-verbaux", "Rapports d'activités", "Notes de service", "Convocations", "Communiqués", "Correspondances professionnelles"] },

  /* ---------- D. Services commerciaux et documents d'entreprise ---------- */
  { id: "documents-entreprise", category: "Documents d'entreprise", name: "Services commerciaux et documents d'entreprise", description: "Documents commerciaux et professionnels : tarif sur devis.", price: null, unit: "", icon: "briefcase",
    items: ["Rédaction de devis simples et complexes", "Création de factures", "Création de bons de commande", "Création de reçus", "Bons de livraison", "Fiches de suivi", "Documents commerciaux", "Dossiers de projets", "Modèles de documents professionnels"] },

  /* ---------- E. Impression, photocopie et numérisation ---------- */
  { id: "impression-nb", category: "Impression et numérisation", name: "Impression noir et blanc", description: "Impression de CV, rapports, mémoires et documents administratifs.", price: 50, unit: "la page", icon: "printer", featured: true },
  { id: "impression-couleur", category: "Impression et numérisation", name: "Impression couleur", description: "Impression couleur de vos documents.", price: 100, unit: "la page", icon: "printer" },
  { id: "photocopie-nb", category: "Impression et numérisation", name: "Photocopie noir et blanc", description: "Photocopie de vos documents.", price: 25, unit: "la page", icon: "copy" },
   { id: "photocopie-couleur", category: "Impression et numérisation", name: "Photocopie en couleur", description: "Photocopie de vos documents.", price: 50, unit: "la page", icon: "copy" },
  { id: "scan", category: "Impression et numérisation", name: "Numérisation (scan)", description: "Numérisation de vos documents.", price: 200, unit: "la page", icon: "scan", featured: true },
  { id: "scan-volumineux", category: "Impression et numérisation", name: "Numérisation de dossiers volumineux", description: "Numérisation de dossiers volumineux : tarif sur devis.", price: null, unit: "", icon: "scan" },

  /* ---------- F. Présentations et supports professionnels ---------- */
  { id: "presentations", category: "Présentations", name: "Présentations et supports professionnels", description: "Création de présentations PowerPoint et de supports : tarif sur devis.", price: null, unit: "", icon: "monitor",
    items: ["Création de présentations PowerPoint", "Mise en forme de diapositives", "Présentations scolaires", "Présentations professionnelles", "Supports de formation", "Présentations de projets", "Supports de conférences"] },

  /* ---------- G. Assistance informatique et numérique ---------- */
  { id: "assistance-numerique", category: "Assistance numérique", name: "Assistance informatique et numérique", description: "Aide pratique à l'informatique et aux démarches en ligne : tarif sur devis.", price: null, unit: "", icon: "code",
    items: ["Assistance informatique de base", "Assistance sur Microsoft Word, Excel et PowerPoint", "Installation et configuration de logiciels", "Création d'adresses électroniques", "Assistance à la création de comptes numériques", "Assistance aux démarches en ligne", "Téléchargement et organisation de documents", "Classement et archivage numérique", "Assistance à l'utilisation d'Internet"] },

  /* ---------- H. Formations informatiques et intelligence artificielle ---------- */
  { id: "formations", category: "Formations", name: "Formations informatiques et intelligence artificielle", description: "Formation pratique et théorique. Organisation envisagée : 3 mois, jusqu'à 3 séances par semaine, 2 h 30 maximum par séance. Tarif sur devis.", price: null, unit: "", icon: "graduation",
    items: ["Initiation à l'informatique", "Bureautique", "Microsoft Word", "Microsoft Excel", "PowerPoint", "Initiation à Internet", "Initiation à l'intelligence artificielle", "Utilisation pratique des outils d'IA", "IA appliquée aux études", "IA appliquée au travail professionnel", "Productivité numérique"] },

  /* ---------- I. Élèves et étudiants ---------- */
  { id: "eleves-etudiants", category: "Élèves et étudiants", name: "Services aux élèves et étudiants", description: "Toutes les prestations utiles aux études, au tarif de la prestation concernée ou sur devis.", price: null, unit: "", icon: "graduation",
    items: ["Saisie de devoirs", "Mise en forme d'exposés", "Présentations scolaires", "Rapports de stage", "Mémoires", "Impression de supports scolaires", "Numérisation de documents", "CV étudiants", "Lettres de motivation", "Dossiers de candidature"] },

  /* ---------- J. Entrepreneurs et organisations ---------- */
  { id: "entrepreneurs-organisations", category: "Entrepreneurs et organisations", name: "Services aux entrepreneurs et organisations", description: "Appui bureautique et administratif, ponctuel ou régulier : selon la prestation ou sur devis.", price: null, unit: "", icon: "briefcase",
    items: ["Assistance bureautique", "Saisie et mise en forme de documents professionnels", "Rédaction administrative", "Devis et factures", "Présentations de projets", "Rapports d'activités", "Classement et archivage", "Assistance administrative ponctuelle ou régulière"] }
];