export type PostBody = string[];

export type Post = {
  slug: string;
  date: string;
  category: string;
  image: string;
  fr: { title: string; excerpt: string; readMinutes: number; body: PostBody };
  en: { title: string; excerpt: string; readMinutes: number; body: PostBody };
};

export const posts: Post[] = [
  {
    slug: "conseils-entretien-pressing",
    date: "2026-07-18",
    category: "Pressing",
    image: "/images/pressing-cloths.png",
    fr: {
      title: "5 conseils pour bien entretenir votre linge à la maison",
      excerpt:
        "Du tri des couleurs au séchage en passant par le repassage : nos astuces simples pour garder vos vêtements plus longtemps.",
      readMinutes: 2,
      body: [
        "Prendre soin de son linge, c'est le premier pas pour le faire durer. Voici quelques réflexes simples que nous appliquons aussi à Klass Pressing.",
        "1. Triez toujours vos couleurs. Séparez le blanc, les couleurs foncées et les textiles délicats avant le lavage pour éviter les dégâts.",
        "2. Respectez les étiquettes. Les symboles de lavage et de repassage vous indiquent la bonne température et le bon programme.",
        "3. Traitez les taches rapidement. Plus vous agissez vite, plus la tache part facilement. Évitez l'eau chaude sur les taches protéinées.",
        "4. Ne surchargez pas la machine. Un tambour trop plein lave moins bien et abîme les tissus.",
        "5. Repassez sur un linge légèrement humide. Le résultat est plus net et plus rapide, et les plis disparaissent mieux.",
        "Et si vous manquez de temps, confiez votre linge à Klass Pressing : lavage, repassage et pliage soigné, livrés dans les délais.",
      ],
    },
    en: {
      title: "5 tips to properly care for your laundry at home",
      excerpt:
        "From sorting colors to drying and ironing: simple tips to make your clothes last longer.",
      readMinutes: 2,
      body: [
        "Taking care of your laundry is the first step to making it last. Here are a few simple habits we also apply at Klass Pressing.",
        "1. Always sort your colors. Separate whites, dark colors and delicate fabrics before washing to avoid damage.",
        "2. Respect the labels. Wash and iron symbols tell you the right temperature and program.",
        "3. Treat stains quickly. The sooner you act, the easier the stain comes out. Avoid hot water on protein stains.",
        "4. Do not overload the machine. An overfull drum washes less well and damages fabrics.",
        "5. Iron slightly damp clothes. The result is sharper and faster, and wrinkles disappear more easily.",
        "And if you are short on time, hand your laundry to Klass Pressing: washing, ironing and careful folding, delivered on time.",
      ],
    },
  },
  {
    slug: "soudure-fabrications-sur-mesure",
    date: "2026-06-14",
    category: "Métallerie",
    image: "/images/blog-welding.png",
    fr: {
      title: "Soudure et fabrications métalliques : que pouvez-vous commander ?",
      excerpt:
        "Portails, garde-corps, barreaux, structures… Un tour d'horizon de ce que notre atelier peut fabriquer pour vous.",
      readMinutes: 2,
      body: [
        "Notre atelier de métallerie transforme le métal brut en ouvrages utiles et durables. Voici les fabrications les plus demandées.",
        "Portails et grilles : coulissants, battants ou sur-mesure, pour sécuriser et embellir vos entrées.",
        "Garde-corps et barreaux : pour fenêtres, balcons et escaliers, alliant sécurité et esthétique.",
        "Structures métalliques : charpentes, ossatures, supports pour bâtiments, abris et équipements industriels.",
        "Mobilier et ouvrages divers : tables, supports, châssis, réparations… dites-nous votre besoin.",
        "Chaque projet commence par un devis clair. Nous mesurons, conseillons sur le matériau, puis fabriquons et posons avec soin.",
      ],
    },
    en: {
      title: "Welding and metal fabrication: what can you order?",
      excerpt:
        "Gates, railings, window bars, structures… An overview of what our workshop can build for you.",
      readMinutes: 2,
      body: [
        "Our metalwork workshop turns raw metal into useful, durable pieces. Here are the most requested fabrications.",
        "Gates and grilles: sliding, swinging or made to order, to secure and beautify your entrances.",
        "Railings and window bars: for windows, balconies and stairs, combining safety and aesthetics.",
        "Metal structures: frames, frameworks, supports for buildings, shelters and industrial equipment.",
        "Furniture and other pieces: tables, supports, frames, repairs… tell us what you need.",
        "Every project starts with a clear quote. We measure, advise on the material, then build and install with care.",
      ],
    },
  },
  {
    slug: "entretien-gardes-corps-balcons",
    date: "2026-05-09",
    category: "Pressing",
    image: "/images/blog-pressing.png",
    fr: {
      title: "Repassage professionnel : gagnez du temps chaque semaine",
      excerpt:
        "Le repassage prend du temps. Découvrez comment un service de pressing vous libère du temps tout en prenant soin de vos vêtements.",
      readMinutes: 3,
      body: [
        "Entre le travail, la famille et les loisirs, le repassage est souvent relégué à la fin de la liste. Pourtant, un vêtement bien repassé change tout à votre allure.",
        "Chez Klass Pressing, nous repassons chemises, robes, draps et tout votre linge avec soin, et nous plions vos affaires prêtes à porter.",
        "Vous gagnez plusieurs heures par semaine, et vos vêtements sont traités à la bonne température pour chaque tissu.",
        "Le service est simple : déposez votre linge, choisissez vos délais, récupérez-le impeccable.",
        "Essayez-nous une fois : vous ne reviendrez plus en arrière !",
      ],
    },
    en: {
      title: "Professional ironing: save time every week",
      excerpt:
        "Ironing takes time. Discover how a pressing service frees up your time while taking care of your clothes.",
      readMinutes: 3,
      body: [
        "Between work, family and leisure, ironing is often pushed to the bottom of the list. Yet a well-ironed garment changes your whole look.",
        "At Klass Pressing, we iron shirts, dresses, sheets and all your laundry with care, and fold your items ready to wear.",
        "You save several hours a week, and your clothes are treated at the right temperature for each fabric.",
        "It is simple: drop off your laundry, choose your turnaround, pick it up immaculate.",
        "Try us once: you will never look back!",
      ],
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const allCategories = Array.from(new Set(posts.map((p) => p.category)));
