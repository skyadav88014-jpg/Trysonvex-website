import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { waLink } from '@/data/site';
import { Scissors, Sparkles, Clock, MapPin, ChevronDown, Calendar, Check, ArrowRight, Heart } from 'lucide-react';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';

const ACCENT = '#BE185D';
const BRAND = 'Maison Lumière';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const hairServices = [
  { name: 'Haircut & Style', desc: 'Precision cut with wash and styling.', price: 'Demo' },
  { name: 'Hair Coloring', desc: 'Full color, highlights, or balayage.', price: 'Demo' },
  { name: 'Keratin Treatment', desc: 'Smoothing treatment for frizz-free hair.', price: 'Demo' },
  { name: 'Hair Spa', desc: 'Deep conditioning and scalp treatment.', price: 'Demo' },
];

const beautyServices = [
  { name: 'Facial Treatment', desc: 'Customized facial for your skin type.', price: 'Demo' },
  { name: 'Manicure & Pedicure', desc: 'Nail care, shaping, and polish.', price: 'Demo' },
  { name: 'Bridal Makeup', desc: 'Complete bridal look with trial.', price: 'Demo' },
  { name: 'Waxing & Threading', desc: 'Smooth, precise hair removal.', price: 'Demo' },
];

const packages = [
  { name: 'GLOW UP', desc: 'Haircut + Facial + Manicure', price: 'Demo', features: ['Precision haircut', 'Express facial', 'Basic manicure'], featured: false },
  { name: 'BRIDAL LUXE', desc: 'Complete bridal package', price: 'Demo', features: ['Bridal makeup', 'Hair styling', 'Mehndi', 'Pre-bridal facial', 'Manicure & pedicure'], featured: true },
  { name: 'SELF CARE', desc: 'Hair spa + Facial + Pedicure', price: 'Demo', features: ['Hair spa treatment', 'Premium facial', 'Luxury pedicure'], featured: false },
];

export default function SalonDemo() {
  const [bookOpen, setBookOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: 'Do I need to book an appointment?', a: 'Yes, we recommend booking in advance to ensure your preferred time and stylist are available.' },
    { q: 'Do you offer bridal packages?', a: 'Yes, our Bridal Luxe package includes makeup, hair, mehndi, and pre-bridal treatments.' },
    { q: 'What products do you use?', a: 'We use premium, professional-grade products selected for quality and results.' },
  { q: 'Do you offer consultations?', a: 'Yes, we offer complimentary consultations before any major service.' },
  ];

  return (
    <div className="min-h-screen bg-[#fdf5f8]">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Book Now" onCta={() => setBookOpen(true)} category="SALON & BEAUTY" />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-pink-100 to-rose-50 py-20 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-700">TRYSONVEX DEMO CONCEPT</span>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">Beauty, Crafted with Care.</h1>
              <p className="mt-5 max-w-lg text-lg text-gray-600">A premium salon experience where every detail is designed to make you look and feel your best.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => setBookOpen(true)} className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110" style={{ background: ACCENT }}>
                  <Calendar className="h-5 w-5" /> Book Appointment
                </button>
                <a href="#services" className="inline-flex items-center gap-2 rounded-full border-2 border-pink-600 px-7 py-3.5 text-sm font-bold text-pink-700 transition hover:bg-pink-50">
                  View Services
                </a>
              </div>
            </div>
            <div className="relative">
              <DemoImage src={demoImages.salon.images.hero} alt="Premium salon interior" className="aspect-[4/3] w-full rounded-3xl" fallbackGradient="from-pink-200 to-rose-300" eager />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-pink-600">OUR SERVICES</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">Hair & Beauty</h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900"><Scissors className="h-5 w-5 text-pink-600" /> Hair</h3>
              <div className="mt-4 space-y-3">
                {hairServices.map((s) => (
                  <div key={s.name} className="flex items-center justify-between rounded-2xl border border-pink-100 bg-white p-4">
                    <div><p className="font-bold text-gray-900">{s.name}</p><p className="text-sm text-gray-400">{s.desc}</p></div>
                    <span className="text-sm font-bold text-pink-600">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900"><Sparkles className="h-5 w-5 text-pink-600" /> Beauty</h3>
              <div className="mt-4 space-y-3">
                {beautyServices.map((s) => (
                  <div key={s.name} className="flex items-center justify-between rounded-2xl border border-pink-100 bg-white p-4">
                    <div><p className="font-bold text-gray-900">{s.name}</p><p className="text-sm text-gray-400">{s.desc}</p></div>
                    <span className="text-sm font-bold text-pink-600">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-pink-50/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-pink-600">PACKAGES</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">Curated Experiences</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className={`relative rounded-3xl border p-8 ${p.featured ? 'border-pink-500 bg-white shadow-lg' : 'border-pink-100 bg-white'}`}>
                {p.featured && <span className="absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: ACCENT }}>MOST POPULAR</span>}
                <h3 className="text-xl font-black text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-400">{p.desc}</p>
                <p className="mt-4 text-3xl font-black text-pink-600">{p.price}</p>
                <p className="text-xs text-gray-300">TRYSONVEX demo — contact for pricing</p>
                <div className="my-6 h-px bg-pink-100" />
                <div className="space-y-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-700"><Check className="h-4 w-4 text-pink-600" /> {f}</div>
                  ))}
                </div>
                <button onClick={() => setBookOpen(true)} className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition ${p.featured ? 'text-white hover:brightness-110' : 'border border-pink-300 text-pink-700 hover:bg-pink-50'}`}
                  style={p.featured ? { background: ACCENT } : {}}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-pink-600">GALLERY</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">Our Work</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {demoImages.salon.images.gallery.slice(0, 8).map((src, i) => (
              <DemoImage key={i} src={src} alt={`Salon gallery ${i + 1}`} className="aspect-square w-full rounded-xl" fallbackGradient="from-pink-200 to-rose-300" />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-pink-50/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <DemoImage src={demoImages.salon.images.about} alt="Salon styling area" className="aspect-[4/3] w-full rounded-3xl" fallbackGradient="from-pink-200 to-rose-300" />
            <div>
              <p className="text-sm font-semibold text-pink-600">ABOUT MAISON LUMIÈRE</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">A Sanctuary of Style</h2>
              <p className="mt-4 text-gray-600">Maison Lumière is a premium salon where artistry meets care. Our experienced team is dedicated to creating personalized experiences that enhance your natural beauty in a warm, luxurious setting.</p>
              <div className="mt-6 flex gap-6">
                <div className="flex items-center gap-2"><Heart className="h-6 w-6 text-pink-600" /><div><p className="font-bold text-gray-900">Premium</p><p className="text-sm text-gray-400">Products</p></div></div>
                <div className="flex items-center gap-2"><Sparkles className="h-6 w-6 text-pink-600" /><div><p className="font-bold text-gray-900">Expert</p><p className="text-sm text-gray-400">Stylists</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-pink-600">FAQ</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">Questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-pink-100 bg-white">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-pink-600 transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-gray-600">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 to-rose-700 p-10 text-center text-white md:p-16">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Book Your Appointment</h2>
            <p className="mt-4 text-white/80">Treat yourself to a premium salon experience.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => setBookOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-pink-700 transition hover:bg-pink-50">
                <Calendar className="h-5 w-5" /> Book Now
              </button>
              <a href={waLink('Hi, I would like to book an appointment at Maison Lumière.')} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-pink-50/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-pink-600">CONTACT</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">Visit Us</h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3 text-gray-700"><MapPin className="h-5 w-5 text-pink-600" /> [Demo Address — TRYSONVEX concept]</div>
                <div className="flex items-center gap-3 text-gray-700"><Clock className="h-5 w-5 text-pink-600" /> Mon-Sat: 10 AM - 8 PM · Sun: Closed</div>
              </div>
              <a href={waLink('Hi, I would like to contact Maison Lumière.')} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white">
                WhatsApp Now
              </a>
            </div>
            <div className="rounded-3xl border border-pink-100 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900">Quick Booking</h3>
              <div className="mt-4 space-y-3">
                <input className="w-full rounded-xl border border-pink-100 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none" placeholder="Your Name" />
                <input className="w-full rounded-xl border border-pink-100 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none" placeholder="Phone" />
                <select className="w-full rounded-xl border border-pink-100 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none">
                  <option>Select Service</option>
                  {[...hairServices, ...beautyServices].map((s) => <option key={s.name}>{s.name}</option>)}
                </select>
                <button onClick={() => setBookOpen(true)} className="w-full rounded-full px-6 py-3 text-sm font-bold text-white" style={{ background: ACCENT }}>Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found Maison Lumière (TRYSONVEX demo) and would like to book an appointment." />

      {bookOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-5" onClick={() => setBookOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-serif text-2xl font-bold text-gray-900">Book Appointment</h3>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-pink-100 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none" placeholder="Full Name" />
              <input className="w-full rounded-xl border border-pink-100 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none" placeholder="Phone" />
              <select className="w-full rounded-xl border border-pink-100 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none">
                <option>Select Service</option>
                {[...hairServices, ...beautyServices].map((s) => <option key={s.name}>{s.name}</option>)}
              </select>
              <input type="date" className="w-full rounded-xl border border-pink-100 px-4 py-3 text-sm focus:border-pink-500 focus:outline-none" />
            </div>
            <a href={waLink('Hi, I would like to book an appointment at Maison Lumière.')} target="_blank" rel="noopener noreferrer"
              onClick={() => setBookOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white" style={{ background: ACCENT }}>
              Confirm via WhatsApp
            </a>
            <button onClick={() => setBookOpen(false)} className="mt-2 w-full text-sm text-gray-400">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
