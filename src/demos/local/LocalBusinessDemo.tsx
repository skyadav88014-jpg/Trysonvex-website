import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { waLink } from '@/data/site';
import { Wrench, Shield, Clock, MapPin, ChevronDown, Check, ArrowRight, Phone, Leaf } from 'lucide-react';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';

const ACCENT = '#16A34A';
const BRAND = 'Greenleaf Services';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { icon: Wrench, title: 'Home Repairs', desc: 'Reliable repair services for your home — plumbing, electrical, and general maintenance.' },
  { icon: Leaf, title: 'Garden Care', desc: 'Professional garden maintenance, landscaping, and seasonal cleanup.' },
  { icon: Shield, title: 'Property Maintenance', desc: 'Ongoing upkeep for homes and small commercial properties.' },
  { icon: Clock, title: 'On-Call Service', desc: 'Flexible scheduling and prompt response for urgent needs.' },
];

const whyChoose = [
  { title: 'Reliable & Punctual', desc: 'We show up on time, every time.' },
  { title: 'Fair Pricing', desc: 'Transparent quotes with no hidden charges.' },
  { title: 'Experienced Team', desc: 'Skilled professionals who take pride in their work.' },
  { title: 'Local & Trusted', desc: 'We are part of your local community.' },
];

const faqs = [
  { q: 'What areas do you cover?', a: 'We serve the local community and surrounding neighborhoods. Contact us to confirm your area.' },
  { q: 'Do you offer free quotes?', a: 'Yes, we provide free quotes for all services before any work begins.' },
  { q: 'Are you available on weekends?', a: 'Yes, we offer weekend appointments for your convenience.' },
  { q: 'How do I book a service?', a: 'You can WhatsApp us or call directly to schedule a visit at your preferred time.' },
];

export default function LocalBusinessDemo() {
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#f7faf8]">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Book Service" onCta={() => setContactOpen(true)} category="LOCAL BUSINESS" />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 py-20 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-700">TRYSONVEX DEMO CONCEPT</span>
              <h1 className="mt-4 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl">Your Trusted Local Service Partner.</h1>
              <p className="mt-5 max-w-lg text-lg text-gray-600">Greenleaf Services takes care of your home and property so you can focus on what matters. Reliable, friendly, and professional — every time.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => setContactOpen(true)} className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110" style={{ background: ACCENT }}>
                  <Phone className="h-5 w-5" /> Book a Service
                </button>
                <a href={waLink('Hi, I would like to book a service with Greenleaf Services.')} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110">
                  WhatsApp Now
                </a>
              </div>
            </div>
            <div className="relative">
              <DemoImage src={demoImages['local-business'].images.hero} alt="Local business storefront" className="aspect-[4/3] w-full rounded-3xl" fallbackGradient="from-green-200 to-emerald-300" eager />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <DemoImage src={demoImages['local-business'].images.about} alt="Business interior" className="aspect-[4/3] w-full rounded-3xl" fallbackGradient="from-green-100 to-emerald-200" />
            <div>
              <p className="text-sm font-semibold text-green-600">ABOUT GREENLEAF</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Serving Our Community with Care</h2>
              <p className="mt-4 text-gray-600">Greenleaf Services is a demo concept by TRYSONVEX showcasing a premium local business website. We are a friendly, local team offering home repairs, garden care, and property maintenance with a commitment to quality and community trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-green-50/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-green-600">OUR SERVICES</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">What We Can Do for You</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-green-100 bg-white p-6 transition hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100"><s.icon className="h-6 w-6 text-green-600" /></div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
                <button onClick={() => setContactOpen(true)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-600">
                  Book this <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-green-600">WHY CHOOSE US</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">The Greenleaf Difference</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-2xl border border-gray-100 bg-white p-6 text-center">
                <Check className="mx-auto h-10 w-10 text-green-600" />
                <h3 className="mt-4 font-bold text-gray-900">{w.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-green-50/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-green-600">GALLERY</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Our Work</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {demoImages['local-business'].images.gallery.slice(0, 8).map((src, i) => (
              <DemoImage key={i} src={src} alt={`Gallery ${i + 1}`} className="aspect-square w-full rounded-xl" fallbackGradient="from-green-200 to-emerald-300" />
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-green-600">LOCATION</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Find Us</h2>
              <div className="mt-6 flex items-center gap-3 text-gray-700"><MapPin className="h-5 w-5 text-green-600" /> [Demo Address — TRYSONVEX concept]</div>
              <DemoImage src={demoImages['local-business'].images.gallery[0]} alt="Location view" className="mt-6 aspect-video w-full rounded-2xl" fallbackGradient="from-green-100 to-emerald-200" />
            </div>
            <div>
              <p className="text-sm font-semibold text-green-600">OPENING HOURS</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">When We're Available</h2>
              <div className="mt-6 space-y-3">
                {[
                  { day: 'Monday - Friday', time: '8 AM - 6 PM' },
                  { day: 'Saturday', time: '9 AM - 4 PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((h) => (
                  <div key={h.day} className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4">
                    <span className="font-semibold text-gray-900">{h.day}</span>
                    <span className="text-green-600">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-green-50/50 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-green-600">FAQ</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Common Questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-green-100 bg-white">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-green-600 transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-gray-600">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-emerald-700 p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-black md:text-4xl">Need a Service?</h2>
            <p className="mt-4 text-white/80">Book a service or send us a message on WhatsApp. We respond quickly.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => setContactOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-green-700 transition hover:bg-green-50">
                <Phone className="h-5 w-5" /> Book a Service
              </button>
              <a href={waLink('Hi, I would like to book a service with Greenleaf Services.')} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found Greenleaf Services (TRYSONVEX demo) and would like to book a service." />

      {contactOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-5" onClick={() => setContactOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-black text-gray-900">Book a Service</h3>
            <p className="mt-1 text-sm text-gray-500">Fill in your details and we will confirm on WhatsApp.</p>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-green-500 focus:outline-none" placeholder="Your Name" />
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-green-500 focus:outline-none" placeholder="Phone Number" />
              <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-green-500 focus:outline-none">
                <option>Select Service</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
              <input type="date" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-green-500 focus:outline-none" />
            </div>
            <a href={waLink('Hi, I would like to book a service with Greenleaf Services.')} target="_blank" rel="noopener noreferrer"
              onClick={() => setContactOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white" style={{ background: ACCENT }}>
              Confirm via WhatsApp
            </a>
            <button onClick={() => setContactOpen(false)} className="mt-2 w-full text-sm text-gray-400">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
