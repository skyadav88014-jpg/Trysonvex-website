export type DemoSlug = 'dental' | 'gym' | 'restaurant' | 'hotel' | 'real-estate' | 'ecommerce' | 'salon' | 'education' | 'creative-agency' | 'local-business';

export interface IndustryMeta {
  slug: DemoSlug;
  category: string;
  subtitle: string;
  images: {
    hero: string;
    about: string;
    gallery: string[];
    extra?: Record<string, string>;
  };
}

const px = (id: string, w = 940, h = 650) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}`;

export const demoImages: Record<DemoSlug, IndustryMeta> = {
  dental: {
    slug: 'dental',
    category: 'DENTAL CLINIC',
    subtitle: 'Premium Dental Care Website',
    images: {
      hero: px('305567'),
      about: px('5355863'),
      gallery: [px('6809639'), px('4269268'), px('6809648'), px('6502543'), px('6629415'), px('305568'), px('287237'), px('6812463')],
      extra: { doctor: px('4269277'), treatment: px('6502543'), tech: px('6809648') },
    },
  },
  gym: {
    slug: 'gym',
    category: 'GYM & FITNESS',
    subtitle: 'Premium Fitness Website',
    images: {
      hero: px('6388514'),
      about: px('6739958'),
      gallery: [px('14502821'), px('9545909'), px('7031705'), px('3916766'), px('9545914'), px('12250460'), px('4716814'), px('6739958')],
      extra: { trainer1: px('6392833'), trainer2: px('7444444'), trainer3: px('3917685'), trainer4: px('8612491') },
    },
  },
  restaurant: {
    slug: 'restaurant',
    category: 'RESTAURANT',
    subtitle: 'Premium Restaurant Website',
    images: {
      hero: px('19442296'),
      about: px('14262704'),
      gallery: [px('32635014'), px('6536617'), px('24289165'), px('3628428'), px('59782'), px('6845341'), px('24433378'), px('12181763')],
      extra: { chef: px('15689898'), dish1: px('15580733'), dish2: px('24289165'), dish3: px('23644633'), dish4: px('15671371') },
    },
  },
  hotel: {
    slug: 'hotel',
    category: 'LUXURY HOTEL',
    subtitle: 'Premium Hospitality Website',
    images: {
      hero: px('15621208'),
      about: px('2883048'),
      gallery: [px('6758531'), px('19689227'), px('6758532'), px('14036254'), px('756083'), px('1001965'), px('27548238'), px('18426842')],
      extra: { room1: px('29000312'), room2: px('35747339'), room3: px('164595'), pool: px('6394574'), lobby: px('6758531') },
    },
  },
  'real-estate': {
    slug: 'real-estate',
    category: 'REAL ESTATE',
    subtitle: 'Premium Property Website',
    images: {
      hero: px('8482510'),
      about: px('7031581'),
      gallery: [px('323780'), px('8089172'), px('280239'), px('7598368'), px('37692742'), px('358636'), px('186077'), px('7031406')],
      extra: {
        prop1: px('8482510'), prop2: px('7031581'), prop3: px('323780'), prop4: px('7598368'), prop5: px('37692742'), prop6: px('358636'),
        living: px('8089172'), kitchen: px('280239'), bedroom: px('8135496'),
      },
    },
  },
  ecommerce: {
    slug: 'ecommerce',
    category: 'E-COMMERCE',
    subtitle: 'Modern Online Store Website',
    images: {
      hero: px('5650016'),
      about: px('4841343'),
      gallery: [px('5788857'), px('3081174'), px('2919003'), px('533442'), px('17938771'), px('13650607'), px('20118030'), px('5788855')],
      extra: {
        p1: px('5788857'), p2: px('3081174'), p3: px('2919003'), p4: px('533442'),
        p5: px('17938771'), p6: px('4841343'), p7: px('13650607'), p8: px('20118030'),
        p9: px('5650016'), p10: px('28645956'), p11: px('3927388'), p12: px('5788855'),
      },
    },
  },
  salon: {
    slug: 'salon',
    category: 'SALON & BEAUTY',
    subtitle: 'Premium Beauty Website',
    images: {
      hero: px('7195805'),
      about: px('4974566'),
      gallery: [px('7195811'), px('7195812'), px('7195796'), px('8834017'), px('8834018'), px('4783330'), px('7750125'), px('7750108')],
      extra: { products: px('3993126'), styling: px('4783330') },
    },
  },
  education: {
    slug: 'education',
    category: 'EDUCATION & COACHING',
    subtitle: 'Professional Education Website',
    images: {
      hero: px('5212342'),
      about: px('5905568'),
      gallery: [px('7396377'), px('18506736'), px('35362880'), px('37822421'), px('37812751'), px('38575482'), px('5905568'), px('5212342')],
    },
  },
  'creative-agency': {
    slug: 'creative-agency',
    category: 'CREATIVE AGENCY',
    subtitle: 'Creative Digital Agency Website',
    images: {
      hero: px('326518'),
      about: px('18024473'),
      gallery: [px('326513'), px('7675029'), px('1714202'), px('16307278'), px('29940157'), px('11044812'), px('5582587'), px('20148810')],
    },
  },
  'local-business': {
    slug: 'local-business',
    category: 'LOCAL BUSINESS',
    subtitle: 'Professional Local Business Website',
    images: {
      hero: px('35068510'),
      about: px('30929605'),
      gallery: [px('16382753'), px('33683824'), px('8228650'), px('10102267'), px('36371672'), px('3989434'), px('5810863'), px('34417195')],
    },
  },
};

export function getDemoImage(slug: DemoSlug, key: keyof IndustryMeta['images'] | string): string {
  const meta = demoImages[slug];
  if (!meta) return '';
  if (key === 'hero') return meta.images.hero;
  if (key === 'about') return meta.images.about;
  if (meta.images.extra && key in meta.images.extra) return meta.images.extra[key];
  const gallery = meta.images.gallery;
  const idx = parseInt(String(key), 10);
  if (!isNaN(idx) && idx >= 0 && idx < gallery.length) return gallery[idx];
  return meta.images.hero;
}
