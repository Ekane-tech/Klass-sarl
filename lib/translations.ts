export type Lang = "fr" | "en";

const fr = {
  meta: {
    title: "Klass Sarl — Métallerie & Soudure à Edéa",
    description:
      "Klass Sarl, atelier de métallerie à Edéa (Littoral, Cameroun) : soudure, portails, garde-corps, structures métalliques, pièces de rechange. Partenaire d'ALUCAM. Également Klass Pressing pour l'entretien du linge. Qualité, sérieux et service sur mesure.",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    products: "Usinage & fabrication",
    about: "À propos",
    blog: "Blog",
    contact: "Contact",
    callUs: "Appelez-nous",
  },
  topbar: {
    address: "BP 713 Edéa, Cameroun",
    hoursLabel: "Ouvert du lundi au samedi",
    hours: "Lun – Sam : 7h30 – 19h",
  },
  hero: {
    badge: "Métallerie & Soudure — Edéa",
    titleA: "L'atelier de métallerie de",
    titleHighlight: "référence à Edéa",
    titleB: "",
    subtitle:
      "Klass Sarl, c'est avant tout un atelier de métallerie : soudure, portails, garde-corps, structures métalliques et pièces de rechange. Partenaire d'ALUCAM. Et pour votre linge, Klass Pressing complète nos services.",
    ctaPrimary: "Découvrir l'atelier",
    ctaSecondary: "Nous contacter",
    imageLabel: "L'atelier de Klass Sarl",
    stats: [
      { value: "+10", label: "Années d'expérience" },
      { value: "100%", label: "Fait sur mesure" },
      { value: "2", label: "Pôles d'activité" },
    ],
  },
  intro: {
    eyebrow: "Bienvenue chez Klass Sarl",
    title: "La métallerie au cœur de notre métier",
    p1: "Klass Sarl est une entreprise implantée à Edéa, dans le Littoral du Cameroun. Notre cœur de métier : l'atelier de métallerie, qui conçoit et fabrique des ouvrages métalliques robustes — soudure, portails, garde-corps, barreaux, structures métalliques — et fournit des pièces de rechange pour vos équipements.",
    p2: "En complément, Klass Pressing prend soin de votre linge avec le même standard de qualité et de confiance.",
    featureList: [
      "Soudure et fabrication métallique",
      "Portails, garde-corps & barreaux",
      "Structures et ouvrages sur mesure",
      "Pièces de rechange & consommables",
    ],
    cta: "En savoir plus",
    imageLabel: "Notre équipe et nos équipements",
  },
  services: {
    eyebrow: "Nos services",
    title: "Ce que nous faisons pour vous",
    subtitle:
      "Deux grandes familles de services, avec la même exigence : un travail soigné, livré dans les délais, au juste prix.",
    items: [
      {
        key: "workshop",
        icon: "wrench",
        title: "Atelier Métallerie",
        desc: "Notre cœur de métier : soudure et fabrication métallique — portails, garde-corps, barreaux, structures métalliques et ouvrages sur mesure. Partenaire d'ALUCAM pour les travaux métalliques à Edéa.",
        image: "/images/service-welding1.jpg",
      },
      {
        key: "pressing",
        icon: "shirt",
        title: "Klass Pressing",
        desc: "En complément : lavage, repassage et entretien du linge et des vêtements. Reprise rapide et soin attentif de vos tissus.",
        image: "/images/pressing-interior.jpg",
      },
    ],
    workshopSub: {
      title: "L'atelier, en détail",
      items: [
        { icon: "wrench", title: "Soudure & assemblage", desc: "Soudure à l'arc et à l'électrode pour un résultat solide et durable." },
        { icon: "door", title: "Portails & grilles", desc: "Portails coulissants ou battants, grilles de sécurité sur mesure." },
        { icon: "grid", title: "Garde-corps & barreaux", desc: "Protection des fenêtres, balcons et escaliers, élégante et sûre." },
        { icon: "building", title: "Structures métalliques", desc: "Charpentes, ossatures et supports pour bâtiments et équipements." },
      ],
    },
    weldingTypes: {
      eyebrow: "Nos techniques",
      title: "Les types de soudure que nous pratiquons",
      subtitle: "Nous choisissons la technique adaptée à chaque projet et à chaque matériau pour garantir un résultat optimal.",
      items: [
        {
          icon: "plug-zap",
          title: "Soudure TIG (argon)",
          desc: "La technique la plus précise, sous gaz argon, pour l'inox, l'aluminium et les finitions soignées de garde-corps et mobilier métallique.",
          tags: ["Inox", "Aluminium", "Précision"],
        },
        {
          icon: "flame",
          title: "Soudure semi-automatique (MIG/MAG)",
          desc: "Soudure au fil sous gaz de protection, rapide et régulière, parfaite pour les fabrications en série et l'acier de nos ouvrages.",
          tags: ["Acier", "Fabrication", "Finition propre"],
        },
        {
          icon: "zap",
          title: "Soudure à l'arc (électrode enrobée)",
          desc: "Technique robuste et polyvalente, idéale pour les portails, grilles, barreaux et structures métalliques, même en extérieur.",
          tags: ["Portails", "Grilles", "Structures"],
        },
      ],
    },
    productsTeaser: {
      eyebrow: "Pièces de rechange",
      title: "L'atelier vend aussi des pièces et consommables",
      subtitle: "Gaines, lames de scie, disques, électrodes et accessoires pour portails — disponibles directement à l'atelier.",
      cta: "Voir les pièces de rechange",
    },
    ctaTitle: "Un projet à réaliser ?",
    ctaSubtitle: "Décrivez-nous votre besoin, nous vous proposons une solution sur mesure.",
    ctaButton: "Demander un devis",
    pressingPoints: [
      "Lavage et nettoyage du linge",
      "Repassage professionnel",
      "Pliage soigné et emballage",
      "Reprise rapide",
      "Entretien de vêtements délicats",
    ],
  },
  why: {
    eyebrow: "Pourquoi nous choisir",
    title: "L'exigence du travail bien fait",
    subtitle: "Des valeurs simples qui font la différence au quotidien.",
    items: [
      { icon: "shield", title: "Qualité durable", desc: "Des matériaux et un savoir-faire qui tiennent dans le temps." },
      { icon: "timer", title: "Respect des délais", desc: "Nous nous engageons sur des dates et nous les tenons." },
      { icon: "handshake", title: "Prix justes", desc: "Des devis clairs et honnêtes, sans mauvaise surprise." },
      { icon: "map-pin", title: "Proche de vous", desc: "Basés à Edéa, nous servons toute la région du Littoral." },
    ],
  },
  process: {
    eyebrow: "Comment ça marche",
    title: "Simple et transparent",
    items: [
      { title: "01", desc: "Vous nous contactez par téléphone, email ou le formulaire." },
      { title: "02", desc: "Nous étudions votre besoin et évaluons les solutions." },
      { title: "03", desc: "Nous établissons un devis clair et vous le présentons." },
      { title: "04", desc: "Nous réalisons le travail et livrons avec soin." },
    ],
  },
  testimonials: {
    eyebrow: "Ils nous font confiance",
    title: "Ce que disent nos clients",
    items: [
      { quote: "Mon linge repassé impeccable, et livré à l'heure. Un service sérieux.", name: "Clarisse M.", role: "Cliente du pressing" },
      { quote: "Klass Sarl réalise nos structures métalliques avec un professionnalisme et une qualité irréprochables. Un partenaire fiable pour nos projets industriels.", name: "ALUCAM", role: "Partenaire industriel" },
      { quote: "Une équipe à l'écoute, des prix justes et un travail qui dure.", name: "Marthe D.", role: "Entrepreneuse à Edéa" },
    ],
  },
  partnership: {
    eyebrow: "Nos partenariats",
    title: "Sous-traitance pour ALUCAM",
    subtitle: "Un gage de qualité et de confiance pour nos clients.",
    description: "Klass Sarl est fière d'être partenaire de sous-traitance d'ALUCAM, l'entreprise d'aluminium du Cameroun. Nous réalisons leurs structures métalliques et ouvrages sur mesure avec le plus grand professionnalisme.",
    points: [
      "Structures métalliques pour projets industriels",
      "Fabrication sur mesure selon les normes ALUCAM",
      "Respect strict des délais et des exigences qualité",
      "Équipe qualifiée et équipements adaptés",
    ],
    partnerName: "ALUCAM",
    partnerSubtitle: "Aluminium du Cameroun",
    partnerDescription: "Partenaire de confiance pour les travaux métalliques à Edéa",
  },
  blog: {
    eyebrow: "Notre blog",
    title: "Conseils & actualités",
    subtitle: "Astuces pour entretenir votre linge et vos ouvrages métalliques.",
    viewAll: "Voir tous les articles",
    readMore: "Lire la suite",
    minRead: "min de lecture",
  },
  cta: {
    title: "Parlons de votre projet",
    subtitle: "Appelez-nous, écrivez-nous ou passez nous voir à Edéa. Nous répondons rapidement.",
    button: "Appeler maintenant",
    or: "ou",
    emailUs: "Écrivez-nous",
  },
  footer: {
    about:
      "Klass Sarl, atelier de métallerie à Edéa : soudure, fabrications métalliques, pièces de rechange — et Klass Pressing pour votre linge.",
    quickLinks: "Liens rapides",
    servicesTitle: "Services",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
    madeIn: "Fait avec fierté à Edéa, Cameroun",
  },
  form: {
    title: "Envoyez-nous un message",
    subtitle: "Remplissez le formulaire, nous vous répondrons au plus vite.",
    name: "Nom complet",
    namePh: "Votre nom",
    phone: "Téléphone",
    phonePh: "Votre numéro",
    email: "Email",
    emailPh: "vous@exemple.com",
    service: "Service concerné",
    servicePh: "Choisir un service",
    servicePressing: "Klass Pressing",
    serviceWorkshop: "Atelier Métallerie",
    serviceOther: "Autre / Renseignements",
    message: "Message",
    messagePh: "Décrivez votre besoin…",
    submit: "Envoyer le message",
    submitting: "Envoi en cours…",
    success: "Merci ! Votre message a bien été envoyé. Nous vous répondrons bientôt.",
    error: "Une erreur est survenue. Veuillez réessayer ou nous écrire directement.",
    required: "Veuillez remplir les champs obligatoires.",
    back: "Envoyer un autre message",
    mailtoNote: "Si le formulaire ne fonctionne pas, écrivez-nous directement à",
  },
  contactPage: {
    title: "Contactez Klass Sarl",
    subtitle: "Nous sommes à votre écoute pour tous vos projets de pressing et de métallerie.",
    addressLabel: "Adresse",
    address: "Rond point quartier Damour, Edéa — Littoral, Cameroun",
    phoneLabel: "Téléphone",
    emailLabel: "Email",
    hoursLabel: "Horaires",
    hours: "Lundi – Samedi : 7h30 – 19h",
    mapLabel: "Rond point quartier Damour",
    mapLocation: "Pressing",
    mapDescription: "Notre service de pressing se trouve au rond point quartier Damour.",
    lyceeLabel: "Lycée Classique d'Edéa",
    lyceeDescription: "Notre atelier de métallerie se trouve dans le quartier Pongo, à 30m du Lycée Classique d'Edéa.",
    lyceeLocation: "Atelier",
  },
  aboutPage: {
    title: "À propos de Klass Sarl",
    subtitle: "Une entreprise d'Edéa qui fédère des savoir-faire locaux.",
    storyEyebrow: "Notre histoire",
    storyTitle: "Née à Edéa, au service du Littoral",
    storyP1:
      "Klass Sarl est née d'une conviction : réunir plusieurs petits métiers sous une même entreprise pour offrir des services fiables, sans intermédiaires. Implantée à Edéa, dans le département de la Sanaga-Maritime (Littoral), elle accompagne particuliers, commerces et entreprises.",
    storyP2:
      "Aujourd'hui, Klass Sarl s'organise autour de deux pôles : Klass Pressing pour l'entretien du linge, et un atelier de métallerie pour la soudure et la fabrication d'ouvrages métalliques sur mesure.",
    missionEyebrow: "Notre mission",
    missionTitle: "Ce qui nous anime",
    missionItems: [
      { icon: "target", title: "Notre mission", desc: "Offrir des prestations de qualité accessibles, réalisées par des artisans locaux passionnés." },
      { icon: "lightbulb", title: "Notre vision", desc: "Faire rayonner le savoir-faire d'Edéa et devenir une référence régionale du pressing et de la métallerie." },
      { icon: "handshake", title: "Nos valeurs", desc: "Honnêteté, ponctualité, respect du client et qualité du travail." },
    ],
    locationsEyebrow: "Où sommes-nous ?",
    locationsTitle: "Au cœur d'Edéa, Littoral",
    locationsText:
      "Edéa est une ville industrielle et carrefour entre Douala et Yaoundé. Nos deux pôles y sont basés et rayonnent sur toute la région du Littoral. Notre atelier de métallerie se trouve dans le quartier Pongo, à 30m du Lycée Classique d'Edéa.",
    imageLabel: "L'équipe Klass Sarl au travail",
    ctaTitle: "Envie d'en savoir plus ?",
    ctaSubtitle: "Contactez-nous ou venez nous rencontrer à l'atelier.",
    ctaButton: "Contactez-nous",
  },
  blogPage: {
    title: "Blog Klass Sarl",
    subtitle: "Conseils d'entretien, actualités de l'atelier et astuces pratiques.",
  },
  productsPage: {
    title: "Pièces de rechange",
    subtitle:
      "En plus de ses fabrications, l'atelier Klass Sarl vend des pièces de rechange et des consommables pour vos équipements et vos travaux de métallerie.",
    intro:
      "Disponibles directement à l'atelier, quartier Pongo (à 30m du Lycée Classique d'Edéa). Appelez-nous pour vérifier la disponibilité et les prix.",
    availability: "Disponible à l'atelier",
    askPrice: "Prix sur demande",
    orderTitle: "Vous cherchez une pièce précise ?",
    orderSubtitle:
      "Appelez-nous ou envoyez-nous un message avec la référence ou une photo de la pièce : nous vous disons rapidement si nous l'avons ou si nous pouvons la commander.",
    orderButton: "Demander une pièce",
    callButton: "Appeler l'atelier",
    note: "Photos non contractuelles. Le stock varie — contactez-nous pour confirmer la disponibilité.",
    items: [
      {
        name: "Gaine guide-fil jaune",
        desc: "Gaine guide-fil jaune pour torche de soudage MIG/MAG : guide le fil de soudure à l'intérieur du faisceau de la torche.",
        image: "/images/product-gaine-jaune.jpg",
        category: "Soudure",
      },
      {
        name: "Lame de scie à ruban",
        desc: "Lames de scie robustes pour la coupe du métal et du bois.",
        image: "/images/lame-scie.jpg",
        category: "Coupe",
      },
      {
        name: "Disques de coupe & meulage",
        desc: "Disques abrasifs pour meuleuse : tronçonnage et meulage du métal.",
        image: "/images/product-disques.jpg",
        category: "Coupe",
      },
      {
        name: "Électrodes de soudure",
        desc: "Baguettes d'électrodes enrobées pour la soudure à l'arc, plusieurs diamètres.",
        image: "/images/product-electrodes.jpg",
        category: "Soudure",
      },
      {
        name: "Paumelles à souder",
        desc: "Paumelles et gonds à souder pour portails, portes métalliques et grilles.",
        image: "/images/product-paumelles.jpg",
        category: "Portails",
      },
      {
        name: "Galets de portail coulissant",
        desc: "Galets et roulettes pour portails coulissants, avec supports et roulements.",
        image: "/images/product-galets.jpg",
        category: "Portails",
      },
      {
        name: "Torche de soudage MIG/MAG",
        desc: "Torche complète avec faisceau et connecteur Euro pour postes de soudure semi-automatiques.",
        image: "/images/product-torche-soudage.jpg",
        category: "Soudure",
      },
      {
        name: "Consommables de torche MIG",
        desc: "Buses de gaz, supports de tube, diffuseurs céramique pour torches MIG/MAG.",
        image: "/images/product-consommables-torches.jpg",
        category: "Soudure",
      },
    ],
  },
  fabricationPage: {
    title: "Usinage & fabrication mécanique",
    subtitle:
      "Apportez la pièce usée, cassée… ou votre plan. Nous fabriquons la pièce neuve, sur mesure, dans notre atelier d'Edéa.",
    heroImage: "/images/fabrication/vis-sans-fin-avant-apres.jpg",
    heroImageAlt: "Vis sans fin neuve fabriquée à côté de la pièce usée",
    heroCaption: "Vis sans fin : pièce neuve fabriquée d'après la pièce usée",
    pillarsTitle: "Trois façons de vous servir",
    pillars: [
      {
        title: "Reproduction de pièces",
        desc: "Vous apportez la pièce usée ou cassée : nous la mesurons et fabriquons une pièce neuve identique — flasques, poulies, vis sans fin, accouplements…",
        image: "/images/fabrication/flasque-reducteur-avant-apres.jpg",
        imageAlt: "Flasque de réducteur neuve fabriquée d'après l'ancienne pièce",
      },
      {
        title: "Fabrication sur plan",
        desc: "Vous fournissez votre dessin technique coté : nous usinons la pièce conforme, dans la matière demandée (acier, bronze, aluminium, fonte).",
        image: "/images/fabrication/fabrication-sur-plan.jpg",
        imageAlt: "Pièce usinée posée sur son plan technique coté",
      },
      {
        title: "Réalisation de vos projets",
        desc: "Vous avez une idée ou un projet : nous concevons et fabriquons la structure ou la machine qu'il vous faut, de A à Z — châssis, trémies, ensembles mécano-soudés.",
        image: "/images/fabrication/fraiseuse-atelier.jpg",
        imageAlt: "Fraiseuse universelle de l'atelier Klass Sarl",
      },
    ],
    galleryTitle: "Nos réalisations",
    gallerySubtitle:
      "Un aperçu des pièces fabriquées dans notre atelier pour les industries, scieries et particuliers de la région.",
    families: [
      {
        name: "Pignons & crémaillères",
        items: [
          {
            name: "Pignon à denture droite",
            image: "/images/fabrication/pignon-denture-droite.jpg",
          },
          {
            name: "Roue dentée avec rainure de clavette",
            image: "/images/fabrication/roue-dentee-clavette.jpg",
          },
          {
            name: "Pignon à chevrons",
            image: "/images/fabrication/pignon-chevrons.jpg",
          },
          {
            name: "Crémaillère pour colonne de toupie",
            image: "/images/fabrication/cremaillere-toupie.jpg",
          },
        ],
      },
      {
        name: "Arbres & axes",
        items: [
          {
            name: "Axes épaulés filetés",
            image: "/images/fabrication/axes-epaules-filetes.jpg",
          },
          {
            name: "Axes de connexion",
            image: "/images/fabrication/axes-connexion.jpg",
          },
          {
            name: "Arbre claveté pour scie",
            image: "/images/fabrication/arbre-clavete.jpg",
          },
          {
            name: "Vis sans fin, pas à gauche, pas à droite",
            image: "/images/fabrication/arbres-flasque.jpg",
          },
          {
            name: "Usinage de vilebrequin sur tour",
            image: "/images/fabrication/vilebrequin-tour.jpg",
          },
        ],
      },
      {
        name: "Poulies & galets",
        items: [
          {
            name: "Poulies à gorges",
            image: "/images/fabrication/poulies-gorges.jpg",
          },
          {
            name: "Poulie plate en aluminium",
            image: "/images/fabrication/poulie-aluminium.jpg",
          },
          {
            name: "Poulie plate en aluminium — vue de face",
            image: "/images/fabrication/poulie-alu-face.jpg",
          },
          {
            name: "Poulie à double gorge en acier",
            image: "/images/fabrication/poulie-double-gorge.jpg",
          },
          {
            name: "Poulie à double gorge en aluminium",
            image: "/images/fabrication/poulie-double-gorge-alu.jpg",
          },
          {
            name: "Galet",
            image: "/images/fabrication/galet-gorge.jpg",
          },
        ],
      },
      {
        name: "Vis, écrous & filetages",
        items: [
          {
            name: "Filetage à pas carré",
            image: "/images/fabrication/filetage-pas-carre.jpg",
          },
          {
            name: "Vis-écrou avec roulement",
            image: "/images/fabrication/vis-ecrou.jpg",
          },
          {
            name: "Écrou en bronze à forme prismatique",
            image: "/images/fabrication/ecrou-bronze.jpg",
          },
          {
            name: "Écrous en acier à épaulement",
            image: "/images/fabrication/ecrous-acier.jpg",
          },
        ],
      },
      {
        name: "Manchons, accouplements & flasques",
        items: [
          {
            name: "Manchons d'accouplement en fonte",
            image: "/images/fabrication/manchons-fonte.jpg",
          },
          {
            name: "Manchon à bride",
            image: "/images/fabrication/manchon-bride.jpg",
          },
          {
            name: "Manchons et bagues usinés",
            image: "/images/fabrication/manchons-bagues.jpg",
          },
          {
            name: "Flasques neuves d'après pièce usée",
            image: "/images/fabrication/flasques.jpg",
          },
          {
            name: "Manchons avec trous oblongs",
            image: "/images/fabrication/flasques-trous-oblongs.jpg",
          },
          {
            name: "Disques et flasques usinés",
            image: "/images/fabrication/disques-flasques-usines.jpg",
          },
          {
            name: "Flasques mécano-soudées",
            image: "/images/fabrication/flasque-reducteur-alu.jpg",
          },
          {
            name: "Matière brute et pièce fabriquée",
            image: "/images/fabrication/brut-et-fini.jpg",
          },
        ],
      },
      {
        name: "Fabrication sur plan",
        items: [
          {
            name: "Pièce fabriquée d'après ce plan",
            images: ["/images/fabrication/plan-moyeu-bride.jpg", "/images/fabrication/moyeu-bride-pignon.jpg"],
          },
          {
            name: "Pièce usinée conforme au dessin",
            image: "/images/fabrication/piece-sur-plan.jpg",
          },
          {
            name: "Fabrication d'après votre dessin coté",
            image: "/images/fabrication/fabrication-sur-plan.jpg",
          },
        ],
      },
      {
        name: "Fabrication soudée & ensembles",
        items: [
          {
            name: "Machine à écraser",
            image: "/images/fabrication/machine-ecraser.jpg",
          },
          {
            name: "Ensemble monté : vis-écrou, paliers et poulie",
            image: "/images/fabrication/ensemble-assemble.jpg",
          },
          {
            name: "Clads",
            image: "/images/fabrication/billettes-placage.jpg",
          },
        ],
      },
      {
        name: "Au cœur de l'atelier",
        items: [
          {
            name: "Usinage avec lunette fixe",
            image: "/images/fabrication/usinage-lunette.jpg",
          },
          {
            name: "Chariotage conique de grande pièce",
            image: "/images/fabrication/chariotage-conique.jpg",
          },
          {
            name: "Filetage à pas carré sur arbre long",
            image: "/images/fabrication/filetage-arbre-long.jpg",
          },
          {
            name: "Arbre en cours d'usinage sur le tour",
            image: "/images/fabrication/usinage-arbre-tour.jpg",
          },
          {
            name: "Fraiseuse — taillage de pignons",
            image: "/images/fabrication/fraiseuse-atelier.jpg",
          },
        ],
      },
    ],
    processTitle: "Comment ça se passe",
    processSteps: [
      {
        title: "1. Vous nous contactez",
        desc: "Apportez la pièce à l'atelier, ou envoyez une photo ou votre plan par email ou WhatsApp.",
      },
      {
        title: "2. Devis rapide",
        desc: "Nous vous confirmons la faisabilité, le délai et le prix.",
      },
      {
        title: "3. Fabrication",
        desc: "Fabrication avec contrôle qualité à chaque étape.",
      },
      {
        title: "4. Livraison",
        desc: "Vous récupérez une pièce prête à monter, conforme à l'original ou au plan.",
      },
    ],
    partsTitle: "Pièces de rechange & consommables",
    partsSubtitle:
      "L'atelier vend aussi des pièces de rechange et des consommables, disponibles directement au quartier Pongo.",
    partsButton: "Voir les pièces de rechange",
    ctaTitle: "Une pièce à refaire ?",
    ctaSubtitle:
      "Envoyez-nous une photo de votre pièce usée ou votre plan : nous vous répondons rapidement avec un délai et un prix.",
    ctaButton: "Demander un devis",
    callButton: "Appeler l'atelier",
  },
  notFound: {
    title: "Page introuvable",
    text: "La page que vous cherchez n'existe pas.",
    back: "Retour à l'accueil",
  },
};

const en: typeof fr = {
  meta: {
    title: "Klass Sarl — Metalwork & Welding in Edea",
    description:
      "Klass Sarl, metalwork workshop in Edea (Littoral, Cameroon): welding, gates, railings, metal structures and spare parts. ALUCAM partner. Also Klass Pressing for laundry care. Quality, reliability and custom made work.",
  },
  nav: {
    home: "Home",
    services: "Services",
    products: "Machining & mechanical fabrication",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    callUs: "Call us",
  },
  topbar: {
    address: "BP 713 Edea, Cameroon",
    hoursLabel: "Open Monday to Saturday",
    hours: "Mon – Sat: 7:30 am – 7 pm",
  },
  hero: {
    badge: "Metalwork & Welding — Edea",
    titleA: "The leading metalwork",
    titleHighlight: "workshop in Edea",
    titleB: "",
    subtitle:
      "Klass Sarl is first and foremost a metalwork workshop: welding, gates, railings, metal structures and spare parts. ALUCAM partner. And for your laundry, Klass Pressing completes our services.",
    ctaPrimary: "Explore the workshop",
    ctaSecondary: "Contact us",
    imageLabel: "The Klass Sarl workshop",
    stats: [
      { value: "+10", label: "Years of experience" },
      { value: "100%", label: "Custom made" },
      { value: "2", label: "Areas of activity" },
    ],
  },
  intro: {
    eyebrow: "Welcome to Klass Sarl",
    title: "Metalwork at the heart of what we do",
    p1: "Klass Sarl is a company based in Edea, in the Littoral region of Cameroon. Our core business is the metalwork workshop, which designs and builds robust metal pieces — welding, gates, railings, window bars, metal structures — and supplies spare parts for your equipment.",
    p2: "Alongside it, Klass Pressing takes care of your laundry with the same standard of quality and trust.",
    featureList: [
      "Welding and metal fabrication",
      "Gates, railings & window bars",
      "Custom structures and pieces",
      "Spare parts & consumables",
    ],
    cta: "Learn more",
    imageLabel: "Our team and equipment",
  },
  services: {
    eyebrow: "Our services",
    title: "What we do for you",
    subtitle:
      "Two great families of services, with the same standard: careful work, delivered on time, at a fair price.",
    items: [
      {
        key: "workshop",
        icon: "wrench",
        title: "Metalwork Workshop",
        desc: "Our core business: welding and metal fabrication — gates, railings, window bars, metal structures and custom made pieces. ALUCAM partner for metalwork in Edea.",
        image: "/images/service-welding1.jpg",
      },
      {
        key: "pressing",
        icon: "shirt",
        title: "Klass Pressing",
        desc: "Alongside the workshop: washing, ironing and care for clothes and linen. Fast turnaround and attentive treatment of your fabrics.",
        image: "/images/pressing-interior.jpg",
      },
    ],
    workshopSub: {
      title: "The workshop, in detail",
      items: [
        { icon: "wrench", title: "Welding & assembly", desc: "Arc and stick welding for a strong, lasting result." },
        { icon: "door", title: "Gates & grilles", desc: "Sliding or swinging gates and security grilles made to order." },
        { icon: "grid", title: "Railings & window bars", desc: "Protection for windows, balconies and stairs — elegant and safe." },
        { icon: "building", title: "Metal structures", desc: "Frames, frameworks and supports for buildings and equipment." },
      ],
    },
    weldingTypes: {
      eyebrow: "Our techniques",
      title: "The welding techniques we use",
      subtitle: "We choose the right technique for each project and material to ensure optimal results.",
      items: [
        {
          icon: "plug-zap",
          title: "TIG welding (argon)",
          desc: "The most precise technique, under argon gas, for stainless steel, aluminum and refined finishes of railings and metal furniture.",
          tags: ["Stainless", "Aluminum", "Precision"],
        },
        {
          icon: "flame",
          title: "Semi-automatic welding (MIG/MAG)",
          desc: "Wire welding under shielding gas, fast and regular, perfect for series production and the steel of our works.",
          tags: ["Steel", "Fabrication", "Clean finish"],
        },
        {
          icon: "zap",
          title: "Arc welding (stick electrode)",
          desc: "Robust and versatile technique, ideal for gates, grilles, bars and metal structures, even outdoors.",
          tags: ["Gates", "Grilles", "Structures"],
        },
      ],
    },
    productsTeaser: {
      eyebrow: "Spare parts",
      title: "The workshop also sells parts and consumables",
      subtitle: "Conduits, saw blades, discs, electrodes and gate accessories — available directly at the workshop.",
      cta: "View spare parts",
    },
    ctaTitle: "A project in mind?",
    ctaSubtitle: "Tell us what you need and we will offer you a custom made solution.",
    ctaButton: "Request a quote",
    pressingPoints: [
      "Washing and laundry cleaning",
      "Professional ironing",
      "Careful folding and packaging",
      "Fast turnaround",
      "Care of delicate garments",
    ],
  },
  why: {
    eyebrow: "Why choose us",
    title: "The standard of a job well done",
    subtitle: "Simple values that make all the difference every day.",
    items: [
      { icon: "shield", title: "Lasting quality", desc: "Materials and craftsmanship that stand the test of time." },
      { icon: "timer", title: "On-time delivery", desc: "We commit to dates and we meet them." },
      { icon: "handshake", title: "Fair prices", desc: "Clear, honest quotes with no surprises." },
      { icon: "map-pin", title: "Close to you", desc: "Based in Edea, we serve the whole Littoral region." },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "Simple and transparent",
    items: [
      { title: "01", desc: "Contact us by phone, email or the contact form." },
      { title: "02", desc: "We study your need and assess the options." },
      { title: "03", desc: "We prepare a clear quote and present it to you." },
      { title: "04", desc: "We carry out the work and deliver with care." },
    ],
  },
  testimonials: {
    eyebrow: "They trust us",
    title: "What our clients say",
    items: [
      { quote: "My laundry perfectly ironed and delivered on time. A serious service.", name: "Clarisse M.", role: "Pressing client" },
      { quote: "Klass Sarl carries out our metal structures with professionalism and impeccable quality. A reliable partner for our industrial projects.", name: "ALUCAM", role: "Industrial partner" },
      { quote: "An attentive team, fair prices and work that lasts.", name: "Marthe D.", role: "Entrepreneur in Edea" },
    ],
  },
  partnership: {
    eyebrow: "Our partnerships",
    title: "Subcontracting for ALUCAM",
    subtitle: "A mark of quality and trust for our clients.",
    description: "Klass Sarl is proud to be a subcontracting partner of ALUCAM, Cameroon's aluminum company. We carry out their metal structures and custom made works with the utmost professionalism.",
    points: [
      "Metal structures for industrial projects",
      "Custom fabrication according to ALUCAM standards",
      "Strict adherence to deadlines and quality requirements",
      "Qualified team and adapted equipment",
    ],
    partnerName: "ALUCAM",
    partnerSubtitle: "Aluminium du Cameroun",
    partnerDescription: "Trusted partner for metalwork in Edea",
  },
  blog: {
    eyebrow: "Our blog",
    title: "Tips & news",
    subtitle: "Advice on caring for your clothes and your metal pieces.",
    viewAll: "View all articles",
    readMore: "Read more",
    minRead: "min read",
  },
  cta: {
    title: "Let's talk about your project",
    subtitle: "Call us, email us or drop by our workshop in Edea. We reply fast.",
    button: "Call now",
    or: "or",
    emailUs: "Email us",
  },
  footer: {
    about:
      "Klass Sarl, metalwork workshop in Edea: welding, metal fabrication, spare parts — and Klass Pressing for your laundry.",
    quickLinks: "Quick links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    madeIn: "Proudly made in Edea, Cameroon",
  },
  form: {
    title: "Send us a message",
    subtitle: "Fill in the form and we will get back to you quickly.",
    name: "Full name",
    namePh: "Your name",
    phone: "Phone",
    phonePh: "Your number",
    email: "Email",
    emailPh: "you@example.com",
    service: "Service concerned",
    servicePh: "Choose a service",
    servicePressing: "Klass Pressing",
    serviceWorkshop: "Metalwork Workshop",
    serviceOther: "Other / Enquiry",
    message: "Message",
    messagePh: "Describe what you need…",
    submit: "Send message",
    submitting: "Sending…",
    success: "Thank you! Your message has been sent. We will reply soon.",
    error: "Something went wrong. Please try again or write to us directly.",
    required: "Please fill in the required fields.",
    back: "Send another message",
    mailtoNote: "If the form does not work, email us directly at",
  },
  contactPage: {
    title: "Contact Klass Sarl",
    subtitle: "We are here for all your pressing and metalwork projects.",
    addressLabel: "Address",
    address: "Rond point quartier Damour, Edea — Littoral, Cameroon",
    phoneLabel: "Phone",
    emailLabel: "Email",
    hoursLabel: "Opening hours",
    hours: "Monday – Saturday: 7:30 am – 7 pm",
    mapLabel: "Rond point quartier Damour",
    mapLocation: "Pressing",
    mapDescription: "Our pressing service is located at the Damour neighborhood roundabout.",
    lyceeLabel: "Lycée Classique d'Edéa",
    lyceeDescription: "Our metalwork workshop is located in the Pongo neighborhood, 30m from Lycée Classique d'Edéa.",
    lyceeLocation: "Workshop",
  },
  aboutPage: {
    title: "About Klass Sarl",
    subtitle: "A company that brings local crafts together.",
    storyEyebrow: "Our story",
    storyTitle: "Born in Edea, serving the Littoral",
    storyP1:
      "Klass Sarl was born from a belief: bringing several small trades together under one company to offer reliable services with no middlemen. Based in Edea, in the Sanaga-Maritime division (Littoral), it serves individuals, shops and businesses.",
    storyP2:
      "Today, Klass Sarl is organized around two areas: Klass Pressing for laundry care, and a metalwork workshop for welding and the fabrication of custom made metal pieces.",
    missionEyebrow: "Our mission",
    missionTitle: "What drives us",
    missionItems: [
      { icon: "target", title: "Our mission", desc: "To offer quality, accessible services carried out by passionate local craftspeople." },
      { icon: "lightbulb", title: "Our vision", desc: "To showcase Edea's craft skills and become a regional reference in pressing and metalwork." },
      { icon: "handshake", title: "Our values", desc: "Honesty, punctuality, respect for the client and quality of work." },
    ],
    locationsEyebrow: "Where are we?",
    locationsTitle: "In the heart of Edea, Littoral",
    locationsText:
      "Edea is an industrial town and a crossroads between Douala and Yaounde. Our two facilities are based there and serve the whole Littoral region. Our metalwork workshop is located in the Pongo neighborhood, 30m from Lycée Classique d'Edéa.",
    imageLabel: "The Klass Sarl team at work",
    ctaTitle: "Want to know more?",
    ctaSubtitle: "Contact us or come meet us at the workshop.",
    ctaButton: "Contact us",
  },
  productsPage: {
    title: "Spare parts",
    subtitle:
      "Beyond its custom fabrications, the Klass Sarl workshop sells spare parts and consumables for your equipment and metalwork projects.",
    intro:
      "Available directly at the workshop, Pongo neighborhood (30m from the Lycée Classique d'Edéa). Call us to check availability and prices.",
    availability: "Available at the workshop",
    askPrice: "Price on request",
    orderTitle: "Looking for a specific part?",
    orderSubtitle:
      "Call us or send a message with the reference or a photo of the part: we will quickly tell you whether we have it or can order it.",
    orderButton: "Request a part",
    callButton: "Call the workshop",
    note: "Photos are not contractual. Stock varies — contact us to confirm availability.",
    items: [
      {
        name: "Yellow wire liner",
        desc: "Yellow wire liner for MIG/MAG welding torches: guides the welding wire inside the torch cable assembly.",
        image: "/images/product-gaine-jaune.jpg",
        category: "Welding",
      },
      {
        name: "Band saw blade",
        desc: "Sturdy saw blades for cutting metal and wood.",
        image: "/images/lame-scie.jpg",
        category: "Cutting",
      },
      {
        name: "Cutting & grinding discs",
        desc: "Abrasive discs for angle grinders: metal cutting and grinding.",
        image: "/images/product-disques.jpg",
        category: "Cutting",
      },
      {
        name: "Welding electrodes",
        desc: "Coated electrode rods for arc welding, several diameters.",
        image: "/images/product-electrodes.jpg",
        category: "Welding",
      },
      {
        name: "Weld-on hinges",
        desc: "Weld-on hinges and pivots for gates, metal doors and grilles.",
        image: "/images/product-paumelles.jpg",
        category: "Gates",
      },
      {
        name: "Sliding gate rollers",
        desc: "Rollers and wheels for sliding gates, with brackets and bearings.",
        image: "/images/product-galets.jpg",
        category: "Gates",
      },
      {
        name: "MIG/MAG welding torch",
        desc: "Complete torch with cable assembly and Euro connector for semi-automatic welding machines.",
        image: "/images/product-torche-soudage.jpg",
        category: "Welding",
      },
      {
        name: "MIG torch consumables",
        desc: "Contact tips, gas nozzles, tip holders, ceramic diffusers and swan necks for MIG/MAG torches.",
        image: "/images/product-consommables-torches.jpg",
        category: "Welding",
      },
    ],
  },
  fabricationPage: {
    title: "Machining & mechanical fabrication",
    subtitle:
      "Bring the worn or broken part… or your drawing. We machine the new part, made to measure, in our Edea workshop.",
    heroImage: "/images/fabrication/vis-sans-fin-avant-apres.jpg",
    heroImageAlt: "Newly machined worm screw next to the worn original",
    heroCaption: "Worm screw: new part machined from the worn original",
    pillarsTitle: "Three ways we can help",
    pillars: [
      {
        title: "Part reproduction",
        desc: "Bring the worn or broken part: we measure it and machine an identical new one — flanges, pulleys, worm screws, couplings…",
        image: "/images/fabrication/flasque-reducteur-avant-apres.jpg",
        imageAlt: "New gearbox flange machined from the old part",
      },
      {
        title: "Made from your drawing",
        desc: "Provide your dimensioned technical drawing: we machine the part to spec, in the requested material (steel, bronze, aluminum, cast iron).",
        image: "/images/fabrication/fabrication-sur-plan.jpg",
        imageAlt: "Machined part resting on its dimensioned technical drawing",
      },
      {
        title: "Building your projects",
        desc: "You have an idea or a project: we design and build the structure or machine you need, from A to Z — frames, hoppers, welded assemblies.",
        image: "/images/fabrication/fraiseuse-atelier.jpg",
        imageAlt: "Universal milling machine at the Klass Sarl workshop",
      },
    ],
    galleryTitle: "Our work",
    gallerySubtitle:
      "A glimpse of the parts machined in our workshop for industries, sawmills and individuals across the region.",
    families: [
      {
        name: "Gears & racks",
        items: [
          {
            name: "Spur gear",
            image: "/images/fabrication/pignon-denture-droite.jpg",
          },
          {
            name: "Gear wheel with keyway",
            image: "/images/fabrication/roue-dentee-clavette.jpg",
          },
          {
            name: "Herringbone gear",
            image: "/images/fabrication/pignon-chevrons.jpg",
          },
          {
            name: "Rack for spindle-moulder column",
            image: "/images/fabrication/cremaillere-toupie.jpg",
          },
        ],
      },
      {
        name: "Shafts & pins",
        items: [
          {
            name: "Stepped threaded shafts",
            image: "/images/fabrication/axes-epaules-filetes.jpg",
          },
          {
            name: "Connecting shafts",
            image: "/images/fabrication/axes-connexion.jpg",
          },
          {
            name: "Keyed shaft for saw",
            image: "/images/fabrication/arbre-clavete.jpg",
          },
          {
            name: "Flanged shafts",
            image: "/images/fabrication/arbres-flasque.jpg",
          },
          {
            name: "Batch of stepped pins",
            image: "/images/fabrication/lot-axes-filetes.jpg",
          },
          {
            name: "Crankshaft rollers on the lathe",
            image: "/images/fabrication/vilebrequin-tour.jpg",
          },
        ],
      },
      {
        name: "Pulleys & rollers",
        items: [
          {
            name: "V-belt pulleys",
            image: "/images/fabrication/poulies-gorges.jpg",
          },
          {
            name: "Aluminum pulley",
            image: "/images/fabrication/poulie-aluminium.jpg",
          },
          {
            name: "Aluminum pulley — front view",
            image: "/images/fabrication/poulie-alu-face.jpg",
          },
          {
            name: "Steel double-groove pulley",
            image: "/images/fabrication/poulie-double-gorge.jpg",
          },
          {
            name: "Aluminum double-groove pulley",
            image: "/images/fabrication/poulie-double-gorge-alu.jpg",
          },
          {
            name: "Grooved roller",
            image: "/images/fabrication/galet-gorge.jpg",
          },
        ],
      },
      {
        name: "Screws, nuts & threads",
        items: [
          {
            name: "Square thread cutting",
            image: "/images/fabrication/filetage-pas-carre.jpg",
          },
          {
            name: "Screw & nut with bearing",
            image: "/images/fabrication/vis-ecrou.jpg",
          },
          {
            name: "Prismatic bronze nut",
            image: "/images/fabrication/ecrou-bronze.jpg",
          },
          {
            name: "Shouldered steel nuts",
            image: "/images/fabrication/ecrous-acier.jpg",
          },
        ],
      },
      {
        name: "Sleeves, couplings & flanges",
        items: [
          {
            name: "Cast-iron coupling sleeves",
            image: "/images/fabrication/manchons-fonte.jpg",
          },
          {
            name: "Flanged sleeve",
            image: "/images/fabrication/manchon-bride.jpg",
          },
          {
            name: "Machined sleeves and rings",
            image: "/images/fabrication/manchons-bagues.jpg",
          },
          {
            name: "New flanges from a worn part",
            image: "/images/fabrication/flasques.jpg",
          },
          {
            name: "Flanges with oblong holes",
            image: "/images/fabrication/flasques-trous-oblongs.jpg",
          },
          {
            name: "Machined discs and flanges",
            image: "/images/fabrication/disques-flasques-usines.jpg",
          },
          {
            name: "Mechanically welded flanges",
            image: "/images/fabrication/flasque-reducteur-alu.jpg",
          },
          {
            name: "Raw stock and finished part",
            image: "/images/fabrication/brut-et-fini.jpg",
          },
        ],
      },
      {
        name: "Made from your drawing",
        items: [
          {
            name: "Customer's technical drawing",
            image: "/images/fabrication/plan-moyeu-bride.jpg",
          },
          {
            name: "Flanged hub with helical pinion, machined from this drawing",
            image: "/images/fabrication/moyeu-bride-pignon.jpg",
          },
          {
            name: "Part machined to the drawing",
            image: "/images/fabrication/piece-sur-plan.jpg",
          },
          {
            name: "Manufactured from your dimensioned drawing",
            image: "/images/fabrication/fabrication-sur-plan.jpg",
          },
        ],
      },
      {
        name: "Welded fabrication & assemblies",
        items: [
          {
            name: "Crushing machine",
            image: "/images/fabrication/machine-ecraser.jpg",
          },
          {
            name: "Assembled unit: screw-nut, bearings and pulley",
            image: "/images/fabrication/ensemble-assemble.jpg",
          },
          {
            name: "Slotted discs for saw",
            image: "/images/fabrication/disques-fentes.jpg",
          },
          {
            name: "Cladding billets",
            image: "/images/fabrication/billettes-placage.jpg",
          },
        ],
      },
      {
        name: "Inside the workshop",
        items: [
          {
            name: "Turning with a fixed steady rest",
            image: "/images/fabrication/usinage-lunette.jpg",
          },
          {
            name: "Taper turning of a large workpiece",
            image: "/images/fabrication/chariotage-conique.jpg",
          },
          {
            name: "Square-thread cutting on a long shaft",
            image: "/images/fabrication/filetage-arbre-long.jpg",
          },
          {
            name: "Shaft being machined on the lathe",
            image: "/images/fabrication/usinage-arbre-tour.jpg",
          },
          {
            name: "Milling machine — gear cutting",
            image: "/images/fabrication/fraiseuse-atelier.jpg",
          },
          {
            name: "Indexable-insert face milling cutter",
            image: "/images/fabrication/fraise-surfacer.jpg",
          },
        ],
      },
    ],
    processTitle: "How it works",
    processSteps: [
      {
        title: "1. Contact us",
        desc: "Bring the part to the workshop, or send a photo or your drawing via WhatsApp.",
      },
      {
        title: "2. Quick quote",
        desc: "We confirm feasibility, lead time and price.",
      },
      {
        title: "3. Machining",
        desc: "Turning and milling, with dimensions checked at every step.",
      },
      {
        title: "4. Delivery",
        desc: "You collect a ready-to-fit part, matching the original or the drawing.",
      },
    ],
    partsTitle: "Spare parts & consumables",
    partsSubtitle:
      "The workshop also sells spare parts and consumables, available directly in the Pongo neighborhood.",
    partsButton: "See spare parts",
    ctaTitle: "A part to remake?",
    ctaSubtitle:
      "Send us a photo of your worn part or your drawing: we reply quickly with a lead time and a price.",
    ctaButton: "Request a quote",
    callButton: "Call the workshop",
  },
  blogPage: {
    title: "Klass Sarl Blog",
    subtitle: "Care tips, workshop news and practical advice.",
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist.",
    back: "Back to home",
  },
};

export const translations: Record<Lang, typeof fr> = { fr, en };

export const defaultLang: Lang = "fr";

export const company = {
  name: "Klass Sarl",
  phones: ["+237 699 84 84 50", "+237 690 76 08 85", "+237 682 34 80 87"],
  phoneHrefs: ["https://wa.me/237699848450", "https://wa.me/237690760885", "https://wa.me/237682348087"],
  pressingPhone: "+237 682 34 80 87",
  pressingPhoneHref: "https://wa.me/237682348087",
  email: "Klasssarl@yahoo.com",
  emailHref: "mailto:Klasssarl@yahoo.com",
  address: "BP 713 Edéa, Cameroun",
  city: "Edéa, Littoral, Cameroun",
};
