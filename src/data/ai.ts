import { demos, waLink, WHATSAPP_DISPLAY, LOCATION, AVAILABILITY, INSTAGRAM_URL } from '@/data/site';

type AiResult = {
  text: string;
  demoSlug?: string;
  demoLabel?: string;
  showWhatsapp?: boolean;
  showAllDemos?: boolean;
};

export type AiContext = {
  industry?: string;
  industrySlug?: string;
  detail?: string;
  tier?: string;
  lang?: 'en' | 'hi' | 'hinglish';
};

// ---------- Language detection ----------

// Devanagari Unicode range for Hindi script
const devanagariRe = /[\u0900-\u097F]/;

// Common Roman-Hindi / Hinglish words
const hinglishWords = [
  'kya', 'hai', 'kaise', 'kaisa', 'kaisi', 'kab', 'kaha', 'kahan', 'kitna', 'kitne',
  'kyu', 'kyun', 'kyon', 'kaun', 'kon', 'banao', 'banega', 'chahiye', 'dikhao',
  'hamko', 'humko', 'mere', 'mera', 'meri', 'accha', 'acha', 'bhai', 'bilkul',
  'nahi', 'nahin', 'haan', 'karna', 'karta', 'karti', 'karte', 'hota', 'hoti',
  'hote', 'ho', 'h', 'kr', 'kar', 'ke', 'ki', 'ka', 'se', 'mein', 'me', 'par',
  'bhi', 'to', 'aur', 'ya', 'lekin', 'magar', 'phir', 'ab', 'yahan', 'vahan',
  'sab', 'kuch', 'bahut', 'thoda', 'zyada', 'kam', 'saath', 'saath',
  'website', 'chahiye', 'premium', 'banwana', 'banana', 'cost', 'kitna',
  'lagega', 'kya', 'krta', 'karta', 'trysonvex', 'trysonvex',
];

function detectLang(raw: string): 'hi' | 'hinglish' | 'en' {
  const text = raw.toLowerCase();
  // Devanagari script = Hindi
  if (devanagariRe.test(raw)) return 'hi';
  // Count Hinglish words
  const words = text.split(/\s+/);
  let hinglishCount = 0;
  for (const w of words) {
    // strip punctuation
    const clean = w.replace(/[^\w]/g, '');
    if (hinglishWords.includes(clean)) hinglishCount++;
  }
  // If at least 2 Hinglish words or >30% of words are Hinglish
  if (hinglishCount >= 2 || (words.length > 0 && hinglishCount / words.length > 0.3)) {
    return 'hinglish';
  }
  return 'en';
}

// ---------- Industry detection ----------

const industryKeywords: { slug: string; keywords: string[] }[] = [
  { slug: 'restaurant', keywords: [
    'restaurant', 'cafe', 'cloud kitchen', 'food', 'menu', 'dining', 'reservation', 'family restaurant',
    'खाना', 'भोजन', 'रेस्टोरेंट', 'खाने', 'खाना', 'रेस्टोरंट', 'खाने की',
    'restaurant chahiye', 'khana', 'khane', 'restaurant ke liye', 'restaurant banwana',
  ]},
  { slug: 'gym', keywords: [
    'gym', 'fitness', 'workout', 'trainer', 'membership', 'health club', 'crossfit', 'yoga',
    'जिम', 'व्यायाम', 'फिटनेस', 'जिम की', 'वर्कआउट',
    'jim', 'jim ki', 'jim chahiye', 'jim ke liye', 'jim banwana', 'jim banao',
  ]},
  { slug: 'dental', keywords: [
    'clinic', 'dental', 'doctor', 'medical', 'hospital', 'wellness', 'physio', 'therapy', 'dentist',
    'दंत', 'दांत', 'क्लिनिक', 'अस्पताल', 'डॉक्टर', 'इलाज',
    'dant', 'dant ki', 'clinic chahiye', 'clinic ke liye', 'clinic banwana', 'clinic banao',
  ]},
  { slug: 'hotel', keywords: [
    'hotel', 'resort', 'stay', 'booking room', 'hospitality', 'suite', 'guest house',
    'होटल', 'रिसॉर्ट', 'ठहरना', 'आतिथ्य',
    'hotel chahiye', 'hotel ke liye', 'hotel banwana', 'hotel banao', 'hotel ki',
  ]},
  { slug: 'real-estate', keywords: [
    'real estate', 'property', 'properties', 'realty', 'listing', 'apartment', 'villa', 'plot', 'house',
    'संपत्ति', 'घर', 'जमीन', 'मकान', 'प्रॉपर्टी', 'रियल एस्टेट',
    'property chahiye', 'property ke liye', 'property banwana', 'ghar', 'makan', 'zameen',
  ]},
  { slug: 'ecommerce', keywords: [
    'ecommerce', 'e-commerce', 'shop', 'store', 'product', 'cart', 'checkout', 'online store', 'sell',
    'ऑनलाइन स्टोर', 'दुकान', 'बिक्री', 'उत्पाद', 'ई-कॉमर्स',
    'online store', 'online dukan', 'dukan', 'online sell', 'bechna', 'product bechna',
  ]},
  { slug: 'salon', keywords: [
    'salon', 'beauty', 'hair', 'spa', 'makeup', 'parlour', 'parlor', 'grooming',
    'सैलून', 'सौंदर्य', 'बाल', 'मेकअप', 'पार्लर',
    'salon chahiye', 'salon ke liye', 'salon banwana', 'parlour', 'parlor', 'beauty parlour',
  ]},
  { slug: 'education', keywords: [
    'education', 'coaching', 'course', 'academy', 'tutor', 'learning', 'training', 'institute', 'class',
    'शिक्षा', 'कोचिंग', 'कोर्स', 'अकादमी', 'शिक्षण', 'सीखना', 'कक्षा',
    'padhana', 'padhai', 'sikhana', 'sikhaana', 'classes', 'coaching chahiye', 'academy chahiye',
  ]},
  { slug: 'creative-agency', keywords: [
    'agency', 'creative', 'studio', 'design agency', 'branding', 'portfolio agency',
    'एजेंसी', 'रचनात्मक', 'स्टूडियो', 'ब्रांडिंग',
    'agency chahiye', 'agency ke liye', 'agency banwana', 'studio chahiye',
  ]},
  { slug: 'local-business', keywords: [
    'local business', 'small business', 'near me', 'service business', 'repair', 'cleaning', 'plumber', 'electrician',
    'स्थानीय व्यवसाय', 'दुकान', 'सेवा', 'मरम्मत', 'सफाई', 'बिजली',
    'dukaan', 'kirana', 'kirana store', 'repair shop', 'service business',
  ]},
];

function detectIndustry(q: string): string | null {
  for (const { slug, keywords } of industryKeywords) {
    if (keywords.some((k) => q.includes(k))) return slug;
  }
  return null;
}

function getDemoInfo(slug: string) {
  const d = demos.find((x) => x.slug === slug);
  return d ?? null;
}

// ---------- Intent detection ----------

type Intent =
  | 'restaurant' | 'gym' | 'dental' | 'hotel' | 'real-estate' | 'ecommerce'
  | 'salon' | 'education' | 'creative-agency' | 'local-business'
  | 'pricing' | 'process' | 'founder' | 'location' | 'instagram'
  | 'start' | 'contact' | 'portfolio' | 'website-types' | 'company'
  | 'empty' | 'unknown';

function detectIntent(q: string): Intent {
  if (!q.trim()) return 'empty';

  // Pricing
  if (/(price|pricing|cost|quote|budget|how much|charge|fees?)/.test(q)) return 'pricing';
  if (/kitna|kitne|kitna lagega|kitne ka|kharch|kimat|keemat|daam|kimat|kharch/.test(q)) return 'pricing';
  if (/(कितना|कितने|कीमत|खर्च|दाम|मूल्य|लागत)/.test(q)) return 'pricing';

  // Process
  if (/(process|how do you work|steps|timeline|how long|workflow)/.test(q)) return 'process';
  if (/(kaise|kaise kaam|kaise banti|kaise banegi|kaise banega|process kya|steps kya)/.test(q)) return 'process';
  if (/(कैसे|कैसे बनती|कैसे बनेगी|प्रक्रिया|चरण)/.test(q)) return 'process';

  // Founder
  if (/(who owns|founder|owner|sonal|yadav|who is behind|who started)/.test(q)) return 'founder';
  if (/(kaun|kon|kaun hai|kon hai|kiske dwara|kisne|kisne banaya|sonal|yadav)/.test(q)) return 'founder';
  if (/(कौन|किसने|सोनल|यादव|संस्थापक|मालिक)/.test(q)) return 'founder';

  // Location
  if (/(where are you|where is trysonvex|located|location|address|based in)/.test(q)) return 'location';
  if (/(kahan|kaha|kahan hai|kaha hai|kahan hai trysonvex|kaha se|kahan se|address kya)/.test(q)) return 'location';
  if (/(कहां|कहा|स्थित|पता|पता क्या)/.test(q)) return 'location';

  // Instagram
  if (/(instagram|social media|insta)/.test(q)) return 'instagram';
  if (/(insta|instagram|social media)/.test(q)) return 'instagram';

  // Start project
  if (/(how do i start|start a project|begin|get started|how to begin)/.test(q)) return 'start';
  if (/(kaise shuru|shuru karein|shuru karu|start kaise|begin kaise|start karna|shuru karna)/.test(q)) return 'start';
  if (/(शुरू|आरंभ|कैसे शुरू)/.test(q)) return 'start';

  // Contact
  if (/(contact|reach|talk|call|whatsapp|phone|number)/.test(q)) return 'contact';
  if (/(sampark|contact kaise|number kya|whatsapp par|phone|call kaise|baat|baat karni)/.test(q)) return 'contact';
  if (/(संपर्क|संपर्क कैसे|नंबर|फोन|बात)/.test(q)) return 'contact';

  // Portfolio / demos
  if (/(portfolio|demo|work|examples?|samples?|showcase|show me|what websites do you build)/.test(q)) return 'portfolio';
  if (/(demo dikhao|dikhao|demos dikhao|dikhao demos|kaam dikhao|work dikhao|portfolio dikhao|demo dikha|demos dikha)/.test(q)) return 'portfolio';
  if (/(दिखाओ|डेमो|नमूने|काम दिखाओ)/.test(q)) return 'portfolio';

  // Website types general
  if (/(website type|kind of website|what websites|which website|landing page|what do you build)/.test(q)) return 'website-types';
  if (/(kaisa website|kaisi website|kya website|website kaisa|website kaisi|kis type|kaun sa website|website types)/.test(q)) return 'website-types';
  if (/(कैसी वेबसाइट|किस प्रकार|कौन सी वेबसाइट)/.test(q)) return 'website-types';

  // Company / tagline
  if (/(tagline|motto|what is trysonvex|about trysonvex|company)/.test(q)) return 'company';
  if (/(trysonvex kya|kya hai trysonvex|trysonvex kya hai|kya krta|kya karta|karta kya|trysonvex kya karta)/.test(q)) return 'company';
  if (/(ट्रायसोनवेक्स क्या|क्या है|क्या करता)/.test(q)) return 'company';

  // Industry-specific
  const industry = detectIndustry(q);
  if (industry) return industry as Intent;

  return 'unknown';
}

// ---------- Response builders per language ----------

function buildResponse(intent: Intent, lang: 'en' | 'hi' | 'hinglish', ctx: AiContext): { result: AiResult; context: AiContext } {
  const context: AiContext = { ...ctx, lang };

  // Demo labels per language
  const demoLabels: Record<string, { en: string; hi: string; hinglish: string }> = {
    restaurant: { en: 'VIEW RESTAURANT DEMO', hi: 'रेस्टोरेंट डेमो देखें', hinglish: 'RESTAURANT DEMO DEKHO' },
    gym: { en: 'VIEW GYM DEMO', hi: 'जिम डेमो देखें', hinglish: 'GYM DEMO DEKHO' },
    dental: { en: 'VIEW DENTAL DEMO', hi: 'डेंटल डेमो देखें', hinglish: 'DENTAL DEMO DEKHO' },
    hotel: { en: 'VIEW HOTEL DEMO', hi: 'होटल डेमो देखें', hinglish: 'HOTEL DEMO DEKHO' },
    'real-estate': { en: 'VIEW REAL ESTATE DEMO', hi: 'रियल एस्टेट डेमो देखें', hinglish: 'REAL ESTATE DEMO DEKHO' },
    ecommerce: { en: 'VIEW E-COMMERCE DEMO', hi: 'ई-कॉमर्स डेमो देखें', hinglish: 'E-COMMERCE DEMO DEKHO' },
    salon: { en: 'VIEW SALON DEMO', hi: 'सैलून डेमो देखें', hinglish: 'SALON DEMO DEKHO' },
    education: { en: 'VIEW EDUCATION DEMO', hi: 'एजुकेशन डेमो देखें', hinglish: 'EDUCATION DEMO DEKHO' },
    'creative-agency': { en: 'VIEW CREATIVE AGENCY DEMO', hi: 'क्रिएटिव एजेंसी डेमो देखें', hinglish: 'CREATIVE AGENCY DEMO DEKHO' },
    'local-business': { en: 'VIEW LOCAL BUSINESS DEMO', hi: 'लोकल बिजनेस डेमो देखें', hinglish: 'LOCAL BUSINESS DEMO DEKHO' },
  };

  const label = (slug: string) => demoLabels[slug]?.[lang] ?? demoLabels[slug].en;

  // Responses per intent per language
  const responses: Record<Intent, { en: AiResult; hi: AiResult; hinglish: AiResult }> = {
    empty: {
      en: { text: 'Tell me about your business or the kind of website you need, and I will suggest the right approach.' },
      hi: { text: 'अपने बिज़नेस के बारे में बताइए या बताइए कि आपको किस तरह की वेबसाइट चाहिए, और मैं सही सुझाव दूंगा।' },
      hinglish: { text: 'Apne business ke baare mein batayein ya batayein ki aapko kis tarah ki website chahiye, aur main sahi sujhav dunga.' },
    },
    restaurant: {
      en: { text: 'Absolutely. TRYSONVEX can create a premium restaurant website with a strong homepage, menu, signature dishes, food gallery, restaurant information, opening hours, location, reservation/enquiry section and WhatsApp contact. What kind of restaurant is it?', demoSlug: 'restaurant', demoLabel: label('restaurant'), showWhatsapp: true },
      hi: { text: 'बिल्कुल। TRYSONVEX आपके रेस्टोरेंट के लिए एक premium website बना सकता है, जिसमें menu, food gallery, location, opening hours, reservation/enquiry और WhatsApp CTA हो सकता है। आपका रेस्टोरेंट किस तरह का है?', demoSlug: 'restaurant', demoLabel: label('restaurant'), showWhatsapp: true },
      hinglish: { text: 'Bilkul. TRYSONVEX aapke restaurant ke liye premium website bana sakta hai, jisme menu, food gallery, location, opening hours, reservation/enquiry aur WhatsApp CTA ho sakta hai. Aapka restaurant kis type ka hai?', demoSlug: 'restaurant', demoLabel: label('restaurant'), showWhatsapp: true },
    },
    gym: {
      en: { text: 'TRYSONVEX can build a premium gym website with fitness programs, membership information, facilities, trainer information, schedule, gallery, location and enquiry options.', demoSlug: 'gym', demoLabel: label('gym'), showWhatsapp: true },
      hi: { text: 'बिल्कुल। TRYSONVEX आपके जिम के लिए एक premium website बना सकता है, जिसमें programs, membership, trainers, facilities, gallery, location और enquiry section हो सकता है।', demoSlug: 'gym', demoLabel: label('gym'), showWhatsapp: true },
      hinglish: { text: 'Bilkul. TRYSONVEX aapke gym ke liye ek premium website bana sakta hai, jisme programs, membership, trainers, facilities, gallery, location aur enquiry section ho sakta hai.', demoSlug: 'gym', demoLabel: label('gym'), showWhatsapp: true },
    },
    dental: {
      en: { text: 'TRYSONVEX can create a professional dental website with clinic information, treatments, services, gallery, appointment enquiry, location and WhatsApp contact.', demoSlug: 'dental', demoLabel: label('dental'), showWhatsapp: true },
      hi: { text: 'बिल्कुल। TRYSONVEX आपके डेंटल क्लिनिक के लिए एक professional website बना सकता है, जिसमें clinic info, treatments, gallery, appointment enquiry, location और WhatsApp contact हो सकता है।', demoSlug: 'dental', demoLabel: label('dental'), showWhatsapp: true },
      hinglish: { text: 'Bilkul. TRYSONVEX aapke dental clinic ke liye ek professional website bana sakta hai, jisme clinic info, treatments, gallery, appointment enquiry, location aur WhatsApp contact ho sakta hai.', demoSlug: 'dental', demoLabel: label('dental'), showWhatsapp: true },
    },
    hotel: {
      en: { text: 'TRYSONVEX can build a luxury hotel website with rooms, room details, amenities, dining, gallery, experience, location, FAQ and a booking enquiry CTA.', demoSlug: 'hotel', demoLabel: label('hotel'), showWhatsapp: true },
      hi: { text: 'बिल्कुल। TRYSONVEX आपके होटल के लिए एक luxury website बना सकता है, जिसमें rooms, amenities, dining, gallery, location, FAQ और booking enquiry CTA हो सकता है।', demoSlug: 'hotel', demoLabel: label('hotel'), showWhatsapp: true },
      hinglish: { text: 'Bilkul. TRYSONVEX aapke hotel ke liye ek luxury website bana sakta hai, jisme rooms, amenities, dining, gallery, location, FAQ aur booking enquiry CTA ho sakta hai.', demoSlug: 'hotel', demoLabel: label('hotel'), showWhatsapp: true },
    },
    'real-estate': {
      en: { text: 'TRYSONVEX can build an interactive real-estate website with property search, featured listings, property detail pages with galleries, amenities, location and enquiry CTAs.', demoSlug: 'real-estate', demoLabel: label('real-estate'), showWhatsapp: true },
      hi: { text: 'बिल्कुल। TRYSONVEX आपके रियल एस्टेट बिज़नेस के लिए एक interactive website बना सकता है, जिसमें property search, listings, detail pages, gallery, location और enquiry CTAs हो सकते हैं।', demoSlug: 'real-estate', demoLabel: label('real-estate'), showWhatsapp: true },
      hinglish: { text: 'Bilkul. TRYSONVEX aapke real estate business ke liye ek interactive website bana sakta hai, jisme property search, listings, detail pages, gallery, location aur enquiry CTAs ho sakte hain.', demoSlug: 'real-estate', demoLabel: label('real-estate'), showWhatsapp: true },
    },
    ecommerce: {
      en: { text: 'TRYSONVEX can build a complete e-commerce experience with categories, product grid, product detail pages, product gallery, variants, cart and a demo checkout.', demoSlug: 'ecommerce', demoLabel: label('ecommerce') },
      hi: { text: 'बिल्कुल। TRYSONVEX एक complete e-commerce website बना सकता है, जिसमें categories, products, cart, checkout, gallery और product details हो सकते हैं।', demoSlug: 'ecommerce', demoLabel: label('ecommerce') },
      hinglish: { text: 'Bilkul. TRYSONVEX ek complete e-commerce website bana sakta hai, jisme categories, products, cart, checkout, gallery aur product details ho sakte hain.', demoSlug: 'ecommerce', demoLabel: label('ecommerce') },
    },
    salon: {
      en: { text: 'TRYSONVEX can build a premium salon website with services, hair and beauty sections, packages, gallery, about, appointments, location and WhatsApp contact.', demoSlug: 'salon', demoLabel: label('salon') },
      hi: { text: 'बिल्कुल। TRYSONVEX आपके सैलून के लिए एक premium website बना सकता है, जिसमें services, beauty sections, packages, gallery, appointments, location और WhatsApp contact हो सकता है।', demoSlug: 'salon', demoLabel: label('salon') },
      hinglish: { text: 'Bilkul. TRYSONVEX aapke salon ke liye ek premium website bana sakta hai, jisme services, beauty sections, packages, gallery, appointments, location aur WhatsApp contact ho sakta hai.', demoSlug: 'salon', demoLabel: label('salon') },
    },
    education: {
      en: { text: 'TRYSONVEX can build an education website with programs, course cards, course detail pages, benefits, a learning process, FAQ and enquiry CTAs.', demoSlug: 'education', demoLabel: label('education') },
      hi: { text: 'बिल्कुल। TRYSONVEX आपके शैक्षणिक संस्थान के लिए एक professional website बना सकता है, जिसमें programs, courses, course details, learning process, FAQ और enquiry CTAs हो सकते हैं।', demoSlug: 'education', demoLabel: label('education') },
      hinglish: { text: 'Bilkul. TRYSONVEX aapke educational institute ke liye ek professional website bana sakta hai, jisme programs, courses, course details, learning process, FAQ aur enquiry CTAs ho sakte hain.', demoSlug: 'education', demoLabel: label('education') },
    },
    'creative-agency': {
      en: { text: 'TRYSONVEX can build a futuristic creative agency website with capabilities, services, selected projects, project details, process, about, FAQ and contact.', demoSlug: 'creative-agency', demoLabel: label('creative-agency') },
      hi: { text: 'बिल्कुल। TRYSONVEX आपकी क्रिएटिव एजेंसी के लिए एक futuristic website बना सकता है, जिसमें capabilities, services, projects, process, about, FAQ और contact हो सकता है।', demoSlug: 'creative-agency', demoLabel: label('creative-agency') },
      hinglish: { text: 'Bilkul. TRYSONVEX aapki creative agency ke liye ek futuristic website bana sakta hai, jisme capabilities, services, projects, process, about, FAQ aur contact ho sakta hai.', demoSlug: 'creative-agency', demoLabel: label('creative-agency') },
    },
    'local-business': {
      en: { text: 'TRYSONVEX can build a clean, premium local business website with services, why-choose-us, gallery, opening hours, location, FAQ and WhatsApp contact.', demoSlug: 'local-business', demoLabel: label('local-business') },
      hi: { text: 'बिल्कुल। TRYSONVEX आपके स्थानीय बिज़नेस के लिए एक premium website बना सकता है, जिसमें services, gallery, location, FAQ और WhatsApp contact हो सकता है।', demoSlug: 'local-business', demoLabel: label('local-business') },
      hinglish: { text: 'Bilkul. TRYSONVEX aapke local business ke liye ek premium website bana sakta hai, jisme services, gallery, location, FAQ aur WhatsApp contact ho sakta hai.', demoSlug: 'local-business', demoLabel: label('local-business') },
    },
    pricing: {
      en: { text: `TRYSONVEX offers Starter and Premium website options, but the final price depends on your website scope and requirements. For an accurate quote, contact TRYSONVEX on WhatsApp at ${WHATSAPP_DISPLAY}.`, showWhatsapp: true },
      hi: { text: `TRYSONVEX में final pricing website ke scope aur requirements par depend karti hai. Accurate quote ke liye TRYSONVEX ko WhatsApp par contact karein — ${WHATSAPP_DISPLAY}.`, showWhatsapp: true },
      hinglish: { text: `TRYSONVEX mein final pricing website ke scope aur requirements par depend karti hai. Accurate quote ke liye TRYSONVEX ko WhatsApp par contact karein — ${WHATSAPP_DISPLAY}.`, showWhatsapp: true },
    },
    process: {
      en: { text: 'Our process has six steps: Discovery, Structure, Design, Development, Review, and Launch. You are kept informed at every stage.', showWhatsapp: true },
      hi: { text: 'हमारी process 6 steps mein hoti hai: Discovery, Structure, Design, Development, Review, और Launch। हर stage par aapko inform kiya jata hai।', showWhatsapp: true },
      hinglish: { text: 'Hamari process 6 steps mein hoti hai: Discovery, Structure, Design, Development, Review, aur Launch. Har stage par aapko inform kiya jata hai.', showWhatsapp: true },
    },
    founder: {
      en: { text: 'TRYSONVEX was founded by Sonal Yadav. Sonal Yadav is the person behind TRYSONVEX and its vision of creating premium, modern and professional websites for businesses.' },
      hi: { text: 'TRYSONVEX की स्थापना Sonal Yadav ने की है। Sonal Yadav ही TRYSONVEX के पीछे हैं और businesses के लिए premium, modern और professional websites बनाने की उनकी vision है।' },
      hinglish: { text: 'TRYSONVEX ki sthapana Sonal Yadav ne ki hai. Sonal Yadav hi TRYSONVex ke peeche hain aur businesses ke liye premium, modern aur professional websites banane ki unki vision hai.' },
    },
    location: {
      en: { text: `TRYSONVEX is based in ${LOCATION}. We are available ${AVAILABILITY}.`, showWhatsapp: true },
      hi: { text: `TRYSONVEX ${LOCATION} mein based hai। Hum ${AVAILABILITY} available hain।`, showWhatsapp: true },
      hinglish: { text: `TRYSONVEX ${LOCATION} mein based hai. Hum ${AVAILABILITY} available hain.`, showWhatsapp: true },
    },
    instagram: {
      en: { text: `You can find TRYSONVEX on Instagram at @trysonvex — ${INSTAGRAM_URL}` },
      hi: { text: `TRYSONVEX ko Instagram par @trysonvex par pa sakte hain — ${INSTAGRAM_URL}` },
      hinglish: { text: `TRYSONVEX ko Instagram par @trysonvex par pa sakte hain — ${INSTAGRAM_URL}` },
    },
    start: {
      en: { text: `Getting started is simple — WhatsApp TRYSONVEX at ${WHATSAPP_DISPLAY} and tell us about your business. We will guide you through the process from discovery to launch.`, showWhatsapp: true },
      hi: { text: `Shuru karna bahut simple hai — TRYSONVEX ko WhatsApp karein ${WHATSAPP_DISPLAY} par aur apne business ke baare mein batayein. Hum aapko Discovery se Launch tak guide karenge।`, showWhatsapp: true },
      hinglish: { text: `Shuru karna bahut simple hai — TRYSONVEX ko WhatsApp karein ${WHATSAPP_DISPLAY} par aur apne business ke baare mein batayein. Hum aapko Discovery se Launch tak guide karenge.`, showWhatsapp: true },
    },
    contact: {
      en: { text: `You can contact TRYSONVEX on WhatsApp at ${WHATSAPP_DISPLAY}. We are based in ${LOCATION} and available ${AVAILABILITY}.`, showWhatsapp: true },
      hi: { text: `TRYSONVEX se WhatsApp par contact kar sakte hain — ${WHATSAPP_DISPLAY}। Hum ${LOCATION} mein based hain aur ${AVAILABILITY} available hain।`, showWhatsapp: true },
      hinglish: { text: `TRYSONVEX se WhatsApp par contact kar sakte hain — ${WHATSAPP_DISPLAY}. Hum ${LOCATION} mein based hain aur ${AVAILABILITY} available hain.`, showWhatsapp: true },
    },
    portfolio: {
      en: { text: 'Here are TRYSONVEX demo concepts. Click any demo to explore the full website experience.', showAllDemos: true },
      hi: { text: 'Yahan TRYSONVEX ke demo concepts hain. Kisi bhi demo par click karke poora website experience dekhein।', showAllDemos: true },
      hinglish: { text: 'Yahan TRYSONVEX ke demo concepts hain. Kisi bhi demo par click karke poora website experience dekhein.', showAllDemos: true },
    },
    'website-types': {
      en: { text: 'TRYSONVEX focuses on professional website design and development. We can create Business Websites, Landing Pages, Portfolio Websites, Restaurant Websites, Clinic Websites, Gym Websites, E-Commerce Websites and Custom Business Websites. Tell me your industry and I will suggest the right approach.', showWhatsapp: true },
      hi: { text: 'TRYSONVEX professional website design aur development par focus karta hai। Hum Business Websites, Landing Pages, Portfolios, Restaurant, Clinic, Gym, E-Commerce aur Custom Websites bana sakte hain। Apna industry batayein aur main sahi approach suggest karunga।', showWhatsapp: true },
      hinglish: { text: 'TRYSONVEX professional website design aur development par focus karta hai. Hum Business Websites, Landing Pages, Portfolios, Restaurant, Clinic, Gym, E-Commerce aur Custom Websites bana sakte hain. Apna industry batayein aur main sahi approach suggest karunga.', showWhatsapp: true },
    },
    company: {
      en: { text: 'TRYSONVEX is a professional website design and development company. Our tagline: BUILD PREMIUM. GROW FASTER. We create modern, professional websites designed around your business.', showWhatsapp: true },
      hi: { text: 'TRYSONVEX ek professional website design aur development company hai। Hamara tagline: BUILD PREMIUM. GROW FASTER। Hum businesses ke liye modern, professional websites banate hain।', showWhatsapp: true },
      hinglish: { text: 'TRYSONVEX ek professional website design aur development company hai. Hamara tagline: BUILD PREMIUM. GROW FASTER. Hum businesses ke liye modern, professional websites banate hain.', showWhatsapp: true },
    },
    unknown: {
      en: { text: `I don't have that information yet. Please contact TRYSONVEX on WhatsApp at ${WHATSAPP_DISPLAY} for an accurate answer.`, showWhatsapp: true },
      hi: { text: `Iske baare mein abhi information nahi hai। Sahi jawab ke liye TRYSONVEX ko WhatsApp par contact karein — ${WHATSAPP_DISPLAY}।`, showWhatsapp: true },
      hinglish: { text: `Iske baare mein abhi information nahi hai. Sahi jawab ke liye TRYSONVEX ko WhatsApp par contact karein — ${WHATSAPP_DISPLAY}.`, showWhatsapp: true },
    },
  };

  return { result: responses[intent][lang], context };
}

// ---------- Main export ----------

export function getAiResponse(raw: string, ctx?: AiContext): { result: AiResult; context: AiContext } {
  const q = raw.toLowerCase().trim();
  const context: AiContext = ctx ? { ...ctx } : {};

  // Detect language — use existing language as fallback for short/ambiguous messages
  const detectedLang = detectLang(raw);
  const lang = detectedLang !== 'en' ? detectedLang : (context.lang ?? 'en');
  context.lang = lang;

  // Detect industry from current message
  const detected = detectIndustry(q);
  if (detected) {
    context.industrySlug = detected;
    const d = getDemoInfo(detected);
    if (d) context.industry = d.industry;
  }

  // Capture detail about business type
  if (context.industrySlug === 'restaurant' && /family|casual|fine dining|fast food|buffet|cafe|bakery|परिवार|परिवारिक/.test(q)) {
    context.detail = q.match(/family|casual|fine dining|fast food|buffet|cafe|bakery|परिवार/)?.[0];
  }

  // Capture tier preference
  if (/\bpremium\b|\bstarter\b|\bluxury\b|\bbasic\b|\badvanced\b|प्रीमियम|शानदार/.test(q)) {
    context.tier = q.match(/premium|starter|luxury|basic|advanced|प्रीमियम|शानदार/)?.[0];
  }

  // Detect intent
  const intent = detectIntent(q);

  // Contextual follow-up: user mentions price/cost after discussing a specific industry
  if ((intent === 'pricing' || /kitna|कितना|how much|cost|price/.test(q)) && context.industrySlug) {
    const industryName = context.industry ?? 'website';
    const priceResponses = {
      en: { text: `Final pricing depends on your ${industryName} website's scope and requirements. For an accurate quote, contact TRYSONVEX on WhatsApp at ${WHATSAPP_DISPLAY}.`, showWhatsapp: true },
      hi: { text: `Final pricing aapki ${industryName} website ke scope par depend karti hai। Accurate quote ke liye TRYSONVEX ko WhatsApp par contact karein — ${WHATSAPP_DISPLAY}।`, showWhatsapp: true },
      hinglish: { text: `Final pricing aapki ${industryName} website ke scope par depend karti hai. Accurate quote ke liye TRYSONVEX ko WhatsApp par contact karein — ${WHATSAPP_DISPLAY}.`, showWhatsapp: true },
    };
    return { result: priceResponses[lang], context };
  }

  // Contextual follow-up: user says "premium" after mentioning a restaurant
  if (context.industrySlug === 'restaurant' && /\bpremium\b|प्रीमियम|शानदार/.test(q) && context.tier === 'premium') {
    const detail = context.detail ? ` ${context.detail} ` : ' ';
    const premiumResponses = {
      en: { text: `For a${detail}premium restaurant website, I recommend a strong homepage, curated menu, signature dishes gallery, restaurant story, location, opening hours, reservation/enquiry section and WhatsApp contact — all with a luxury visual identity.`, demoSlug: 'restaurant', demoLabel: lang === 'hi' ? 'रेस्टोरेंट डेमो देखें' : 'RESTAURANT DEMO DEKHO', showWhatsapp: true },
      hi: { text: `Premium${detail}restaurant website ke liye main strong homepage, curated menu, signature dishes gallery, restaurant story, location, opening hours, reservation/enquiry section aur WhatsApp contact recommend karunga — sab luxury visual identity ke saath।`, demoSlug: 'restaurant', demoLabel: 'रेस्टोरेंट डेमो देखें', showWhatsapp: true },
      hinglish: { text: `Premium${detail}restaurant website ke liye main strong homepage, curated menu, signature dishes gallery, restaurant story, location, opening hours, reservation/enquiry section aur WhatsApp contact recommend karunga — sab luxury visual identity ke saath.`, demoSlug: 'restaurant', demoLabel: 'RESTAURANT DEMO DEKHO', showWhatsapp: true },
    };
    return { result: premiumResponses[lang], context };
  }

  return buildResponse(intent, lang, context);
}

export { waLink };
