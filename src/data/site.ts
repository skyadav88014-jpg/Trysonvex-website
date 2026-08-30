export const WHATSAPP_NUMBER = '917782026248';
export const WHATSAPP_DISPLAY = '+91 7782026248';
export const INSTAGRAM_URL = 'https://www.instagram.com/trysonvex/';
export const LOCATION = 'Aurangabad, Bihar, India';
export const AVAILABILITY = 'From 1:30 PM onward';

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type DemoMeta = {
  slug: string;
  industry: string;
  title: string;
  description: string;
  accent: string;
  preview: string;
};

export const demos: DemoMeta[] = [
  {
    slug: 'dental',
    industry: 'Dental Clinic',
    title: 'Bright Smile Dental',
    description: 'A calming, trust-building dental clinic website with appointment booking, treatments, and a premium clinical identity.',
    accent: '#0EA5A4',
    preview: 'dental',
  },
  {
    slug: 'gym',
    industry: 'Fitness & Gym',
    title: 'Iron Forge Gym',
    description: 'A powerful, high-energy gym website with membership plans, trainers, programs, and a bold athletic identity.',
    accent: '#F97316',
    preview: 'gym',
  },
  {
    slug: 'restaurant',
    industry: 'Restaurant',
    title: 'Saffron & Smoke',
    description: 'A cinematic restaurant experience with signature dishes, full menu, reservations, and an atmospheric visual identity.',
    accent: '#B45309',
    preview: 'restaurant',
  },
  {
    slug: 'hotel',
    industry: 'Luxury Hotel',
    title: 'The Azure Retreat',
    description: 'A serene luxury hotel website with rooms, amenities, dining, booking, and a refined hospitality identity.',
    accent: '#1E3A5F',
    preview: 'hotel',
  },
  {
    slug: 'real-estate',
    industry: 'Real Estate',
    title: 'Estate Atelier',
    description: 'An interactive property website with search, featured listings, property detail pages, and an elegant real-estate identity.',
    accent: '#0F766E',
    preview: 'realestate',
  },
  {
    slug: 'ecommerce',
    industry: 'E-Commerce',
    title: 'Lumen Store',
    description: 'A complete shopping experience with categories, product detail, cart, and checkout — clearly marked as a demo.',
    accent: '#7C3AED',
    preview: 'ecommerce',
  },
  {
    slug: 'salon',
    industry: 'Salon & Beauty',
    title: 'Maison Lumière',
    description: 'A premium salon website with services, packages, gallery, appointments, and a luxurious beauty identity.',
    accent: '#BE185D',
    preview: 'salon',
  },
  {
    slug: 'education',
    industry: 'Education & Coaching',
    title: 'Ascend Academy',
    description: 'A coaching website with programs, course detail pages, learning process, and an inspiring academic identity.',
    accent: '#1D4ED8',
    preview: 'education',
  },
  {
    slug: 'creative-agency',
    industry: 'Creative Agency',
    title: 'Nova Studio',
    description: 'A futuristic creative agency concept with selected work, process, capabilities, and an experimental visual layout.',
    accent: '#10B981',
    preview: 'agency',
  },
  {
    slug: 'local-business',
    industry: 'Local Business',
    title: 'Greenleaf Services',
    description: 'A clean, premium local business website with services, gallery, location, and a friendly community identity.',
    accent: '#16A34A',
    preview: 'local',
  },
];

export const services = [
  {
    name: 'Business Websites',
    who: 'Any business that needs a professional online presence.',
    includes: ['Multi-page structure', 'Service pages', 'About & contact', 'WhatsApp integration', 'Responsive design'],
  },
  {
    name: 'Landing Pages',
    who: 'Campaigns, product launches, and lead capture.',
    includes: ['Single focused page', 'Clear call-to-action', 'Lead form', 'Fast loading', 'Conversion layout'],
  },
  {
    name: 'Portfolio Websites',
    who: 'Creatives, freelancers, and professionals.',
    includes: ['Project gallery', 'Case studies', 'About section', 'Contact form', 'Custom layout'],
  },
  {
    name: 'Restaurant Websites',
    who: 'Restaurants, cafes, and cloud kitchens.',
    includes: ['Menu display', 'Food gallery', 'Reservations', 'Location & hours', 'Instagram feed'],
  },
  {
    name: 'Clinic Websites',
    who: 'Dental, medical, and wellness clinics.',
    includes: ['Appointment booking', 'Treatments list', 'Doctor info', 'FAQ', 'Contact & location'],
  },
  {
    name: 'Gym Websites',
    who: 'Gyms, fitness studios, and trainers.',
    includes: ['Membership plans', 'Programs', 'Trainer profiles', 'Facilities', 'Join CTA'],
  },
  {
    name: 'E-Commerce Websites',
    who: 'Brands and sellers with products.',
    includes: ['Product catalog', 'Product detail', 'Cart & checkout', 'Categories', 'Inventory-ready'],
  },
  {
    name: 'Custom Business Websites',
    who: 'Businesses with unique requirements.',
    includes: ['Bespoke design', 'Custom sections', 'Tailored flows', 'Scalable structure', 'Dedicated support'],
  },
];

export const whyTrysonvex = [
  { title: 'Premium Design', body: 'Every website is crafted with a refined visual direction — not a template.' },
  { title: 'Responsive Experience', body: 'Designed mobile-first so it looks great on every screen your customers use.' },
  { title: 'Business-Focused Structure', body: 'Pages and sections are planned around how your customers actually browse and decide.' },
  { title: 'Custom Design', body: 'Each project gets its own identity, typography, and color treatment.' },
  { title: 'Modern Technology', body: 'Built with current, fast, and reliable web technology.' },
  { title: 'Professional Communication', body: 'Clear, honest updates throughout the project — no confusion, no surprises.' },
  { title: 'Clear Process', body: 'A defined step-by-step process from discovery to launch.' },
  { title: 'Conversion-Focused Layouts', body: 'Layouts designed to guide visitors toward calling, messaging, or booking.' },
];

export const processSteps = [
  { num: '01', title: 'Discovery', body: 'We understand your business, goals, and audience.' },
  { num: '02', title: 'Structure', body: 'We plan the pages and content your website needs.' },
  { num: '03', title: 'Design', body: 'We create the visual direction and identity.' },
  { num: '04', title: 'Development', body: 'We build the website with modern technology.' },
  { num: '05', title: 'Review', body: 'We refine based on your feedback.' },
  { num: '06', title: 'Launch', body: 'We prepare the final website for launch.' },
];

export const pricingTiers = [
  {
    name: 'STARTER',
    tagline: 'A focused, professional website for businesses getting online.',
    features: ['Professional website', 'Responsive design', 'Essential pages', 'Basic customization', 'WhatsApp integration'],
    cta: 'GET A QUOTE',
  },
  {
    name: 'PREMIUM',
    tagline: 'A complete, multi-page business website with custom design.',
    features: ['Premium custom design', 'Advanced sections', 'Advanced animations', 'More customization', 'Enhanced business presentation', 'Priority support'],
    cta: 'GET A QUOTE',
    featured: true,
  },
];

export const faqs = [
  {
    q: 'What types of websites does TRYSONVEX build?',
    a: 'Business websites, landing pages, portfolios, restaurant, clinic, gym, e-commerce, and fully custom business websites. Each is designed around your specific industry.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Pricing depends on the scope, number of pages, and features. We offer Starter and Premium tiers and provide a custom quote after understanding your requirements.',
  },
  {
    q: 'What is the process for building a website?',
    a: 'Discovery, Structure, Design, Development, Review, and Launch. You are kept informed at every step.',
  },
  {
    q: 'Do I need to provide the content?',
    a: 'You can provide content, or we can structure placeholder content you can replace later. We guide you on what is needed for each page.',
  },
  {
    q: 'How many revisions are included?',
    a: 'The Review stage includes refinement rounds so the design matches your expectations before launch.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Yes. Every website is built mobile-first and tested across screen sizes for a smooth experience.',
  },
  {
    q: 'Can you add WhatsApp to my website?',
    a: 'Yes. WhatsApp buttons and click-to-chat integration are included so customers can reach you instantly.',
  },
  {
    q: 'How long does it take to launch?',
    a: 'Timelines depend on scope and how quickly content and feedback are shared. We agree on a schedule before starting.',
  },
  {
    q: 'Do you help with domain and hosting?',
    a: 'We guide you on choosing a domain and hosting setup, and help connect your website so it goes live smoothly.',
  },
  {
    q: 'How do I contact TRYSONVEX?',
    a: `You can WhatsApp us at ${WHATSAPP_DISPLAY} or use the enquiry form on the contact section. We are available ${AVAILABILITY}.`,
  },
];
