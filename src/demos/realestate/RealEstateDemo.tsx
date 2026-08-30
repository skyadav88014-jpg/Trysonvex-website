import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { waLink } from '@/data/site';
import { Bed, Bath, Maximize, MapPin, ChevronDown, ArrowRight, ArrowLeft, Check, Search, Building2 } from 'lucide-react';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';

const ACCENT = '#0F766E';
const BRAND = 'Estate Atelier';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

type Property = {
  id: number;
  title: string;
  type: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  location: string;
  desc: string;
  amenities: string[];
  tag?: string;
};

const properties: Property[] = [
  { id: 1, title: 'Modern Hillside Villa', type: 'Villa', price: 'Demo', beds: 4, baths: 3, area: '320 sqm', location: '[Demo Hills — TRYSONVEX concept]', desc: 'A stunning contemporary villa with floor-to-ceiling windows, an infinity pool, and panoramic valley views. Designed for modern luxury living.', amenities: ['Infinity Pool', 'Smart Home', '3-Car Garage', 'Garden', 'Solar Panels'], tag: 'Featured' },
  { id: 2, title: 'Downtown Penthouse', type: 'Apartment', price: 'Demo', beds: 3, baths: 2, area: '180 sqm', location: '[Demo City Center — TRYSONVEX concept]', desc: 'A spacious penthouse with a private rooftop terrace, city skyline views, and premium finishes throughout.', amenities: ['Rooftop Terrace', 'Concierge', 'Gym', 'Parking', 'City Views'], tag: 'New' },
  { id: 3, title: 'Garden Family Home', type: 'House', price: 'Demo', beds: 4, baths: 3, area: '250 sqm', location: '[Demo Suburb — TRYSONVEX concept]', desc: 'A warm family home with a large garden, open-plan living, and a quiet residential setting.', amenities: ['Large Garden', 'Open Plan', 'Garage', 'Study Room', 'Quiet Area'] },
  { id: 4, title: 'Waterfront Apartment', type: 'Apartment', price: 'Demo', beds: 2, baths: 2, area: '120 sqm', location: '[Demo Marina — TRYSONVEX concept]', desc: 'A sleek waterfront apartment with a balcony overlooking the marina and modern interiors.', amenities: ['Waterfront', 'Balcony', 'Gym', 'Pool', 'Parking'], tag: 'Featured' },
  { id: 5, title: 'Luxury Estate Mansion', type: 'Villa', price: 'Demo', beds: 6, baths: 5, area: '550 sqm', location: '[Demo Estate — TRYSONVEX concept]', desc: 'An expansive mansion with grand entertaining spaces, a private cinema, wine cellar, and landscaped grounds.', amenities: ['Private Cinema', 'Wine Cellar', 'Pool', 'Gardens', 'Staff Quarters'] },
  { id: 6, title: 'Compact City Studio', type: 'Apartment', price: 'Demo', beds: 1, baths: 1, area: '55 sqm', location: '[Demo Downtown — TRYSONVEX concept]', desc: 'A smartly designed studio apartment perfect for professionals seeking city convenience.', amenities: ['Furnished', 'Gym', 'Concierge', 'Parking', 'City Views'] },
];

export default function RealEstateDemo() {
  const [selected, setSelected] = useState<Property | null>(null);
  const [filter, setFilter] = useState('All');
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const filtered = filter === 'All' ? properties : properties.filter((p) => p.type === filter);

  if (selected) {
    return (
      <div className="min-h-screen bg-[#f8faf9]">
        <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Enquire" onCta={() => setEnquiryOpen(true)} category="REAL ESTATE" />
        <div className="mx-auto max-w-5xl px-5 py-10">
          <button onClick={() => setSelected(null)} className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Properties
          </button>

          {/* Gallery */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            <DemoImage src={demoImages['real-estate'].images.hero} alt={selected.title} className="col-span-2 row-span-2 aspect-video w-full rounded-2xl md:col-span-2" fallbackGradient="from-teal-200 to-teal-400" />
            {demoImages['real-estate'].images.gallery.slice(1, 5).map((src, i) => (
              <DemoImage key={i} src={src} alt={`Property photo ${i + 2}`} className="aspect-square w-full rounded-xl" fallbackGradient="from-teal-100 to-teal-300" />
            ))}
          </div>

          {/* Details */}
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">{selected.type}</span>
                  <h1 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">{selected.title}</h1>
                  <p className="mt-2 flex items-center gap-1.5 text-gray-500"><MapPin className="h-4 w-4" /> {selected.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="text-3xl font-black text-teal-700">{selected.price}</p>
                  <p className="text-xs text-gray-400">TRYSONVEX demo — contact for real pricing</p>
                </div>
              </div>

              <div className="mt-6 flex gap-6 rounded-2xl border border-gray-100 bg-white p-5">
                <div className="flex items-center gap-2"><Bed className="h-5 w-5 text-teal-600" /><div><p className="text-lg font-bold text-gray-900">{selected.beds}</p><p className="text-xs text-gray-400">Bedrooms</p></div></div>
                <div className="flex items-center gap-2"><Bath className="h-5 w-5 text-teal-600" /><div><p className="text-lg font-bold text-gray-900">{selected.baths}</p><p className="text-xs text-gray-400">Bathrooms</p></div></div>
                <div className="flex items-center gap-2"><Maximize className="h-5 w-5 text-teal-600" /><div><p className="text-lg font-bold text-gray-900">{selected.area}</p><p className="text-xs text-gray-400">Area</p></div></div>
              </div>

              <h2 className="mt-8 text-xl font-bold text-gray-900">Description</h2>
              <p className="mt-3 text-gray-600">{selected.desc}</p>

              <h2 className="mt-8 text-xl font-bold text-gray-900">Amenities</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {selected.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-3 text-sm text-gray-700"><Check className="h-4 w-4 text-teal-600" /> {a}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900">Interested in this property?</h3>
                <p className="mt-2 text-sm text-gray-500">Send an enquiry and we will get back to you on WhatsApp.</p>
                <div className="mt-4 space-y-3">
                  <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" placeholder="Your Name" />
                  <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" placeholder="Phone" />
                </div>
                <a href={waLink(`Hi, I am interested in ${selected.title} at Estate Atelier.`)} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white" style={{ background: ACCENT }}>
                  Enquire Now
                </a>
                <a href={waLink('Hi, I would like to schedule a property visit.')} target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <DemoFooter brand={BRAND} accent={ACCENT} />
        <FloatingWhatsApp message="Hi, I found a property on Estate Atelier (TRYSONVEX demo)." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faf9]">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Enquire" onCta={() => setEnquiryOpen(true)} category="REAL ESTATE" />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden py-20 md:py-28">
        <DemoImage src={demoImages['real-estate'].images.hero} alt="Premium property" className="absolute inset-0 h-full w-full" fallbackGradient="from-teal-700 to-teal-900" eager />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800/85 to-teal-950/90" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white">TRYSONVEX DEMO CONCEPT</span>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">Find Your Perfect Property.</h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">Explore curated homes, apartments, and villars — each selected for quality, design, and location.</p>

          {/* Search UI */}
          <div className="mt-8 rounded-2xl bg-white p-4 shadow-xl">
            <div className="grid gap-3 sm:grid-cols-4">
              <select className="rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none">
                <option>All Types</option><option>Villa</option><option>Apartment</option><option>House</option>
              </select>
              <select className="rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none">
                <option>Any Bedrooms</option><option>1+</option><option>2+</option><option>3+</option><option>4+</option>
              </select>
              <select className="rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none">
                <option>Any Price</option><option>Low-High</option><option>High-Low</option>
              </select>
              <button onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white" style={{ background: ACCENT }}>
                <Search className="h-4 w-4" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-teal-600">FEATURED PROPERTIES</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Explore Our Listings</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', 'Villa', 'Apartment', 'House'].map((f) => (
                <button key={f} onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === f ? 'text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  style={filter === f ? { background: ACCENT } : {}}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div key={p.id} onClick={() => setSelected(p)} className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:shadow-xl">
                <DemoImage src={demoImages['real-estate'].images.extra![`prop${p.id}` as string]} alt={p.title} className="relative aspect-[4/3] w-full" fallbackGradient="from-teal-200 to-teal-400">
                  {p.tag && <span className="absolute left-3 top-3 z-10 rounded-full bg-teal-700 px-3 py-1 text-xs font-bold text-white">{p.tag}</span>}
                </DemoImage>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">{p.type}</span>
                    <span className="text-lg font-black text-teal-700">{p.price}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-gray-400"><MapPin className="h-3.5 w-3.5" /> {p.location}</p>
                  <div className="mt-4 flex gap-4 border-t border-gray-100 pt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Bed className="h-4 w-4" /> {p.beds}</span>
                    <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> {p.baths}</span>
                    <span className="flex items-center gap-1"><Maximize className="h-4 w-4" /> {p.area}</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                    View Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-teal-50/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-teal-600">ABOUT ESTATE ATELIER</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Curated Living, Thoughtfully Presented</h2>
              <p className="mt-4 text-gray-600">Estate Atelier is a demo concept by TRYSONVEX showcasing how a premium real-estate website can present properties with clarity, elegance, and interactive detail — from search to full property pages.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-6 text-center"><Building2 className="mx-auto h-8 w-8 text-teal-600" /><p className="mt-2 text-3xl font-black text-gray-900">Demo</p><p className="text-sm text-gray-400">Listings</p></div>
              <div className="rounded-2xl bg-white p-6 text-center"><MapPin className="mx-auto h-8 w-8 text-teal-600" /><p className="mt-2 text-3xl font-black text-gray-900">Demo</p><p className="text-sm text-gray-400">Locations</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-teal-800 p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-black md:text-4xl">Looking for Your Dream Property?</h2>
            <p className="mt-4 text-white/80">Tell us what you are looking for and we will help you find it.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={waLink('Hi, I am looking for a property at Estate Atelier.')} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found Estate Atelier (TRYSONVEX demo) and would like to enquire about a property." />

      {enquiryOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-5" onClick={() => setEnquiryOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-black text-gray-900">Property Enquiry</h3>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" placeholder="Your Name" />
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" placeholder="Phone" />
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" placeholder="Property Interest" />
            </div>
            <a href={waLink('Hi, I would like to enquire about a property at Estate Atelier.')} target="_blank" rel="noopener noreferrer"
              onClick={() => setEnquiryOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white" style={{ background: ACCENT }}>
              Send via WhatsApp
            </a>
            <button onClick={() => setEnquiryOpen(false)} className="mt-2 w-full text-sm text-gray-400">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
