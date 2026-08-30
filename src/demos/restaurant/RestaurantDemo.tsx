import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';
import { waLink } from '@/data/site';
import { Clock, MapPin, Phone, ChevronDown, ArrowRight, UtensilsCrossed, Star, Calendar } from 'lucide-react';

const ACCENT = '#B45309';
const BRAND = 'Saffron & Smoke';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Hours', href: '#hours' },
  { label: 'Contact', href: '#contact' },
];

const signatureDishes = [
  { name: 'Smoked Lamb Shank', desc: 'Slow-cooked for 12 hours with smoked spices and saffron jus.', price: 'Demo' },
  { name: 'Saffron Risotto', desc: 'Arborio rice, saffron threads, aged parmesan, truffle oil.', price: 'Demo' },
  { name: 'Charcoal Grilled Sea Bass', desc: 'Whole sea bass, charcoal grill, lemon butter, fresh herbs.', price: 'Demo' },
  { name: 'Pistachio Soufflé', desc: 'Warm pistachio soufflé with cardamom cream.', price: 'Demo' },
];

const menuCategories = [
  {
    name: 'Starters',
    items: [
      { name: 'Smoked Beetroot Tartare', desc: 'Beetroot, horseradish cream, rye crisp.', price: 'Demo' },
      { name: 'Seared Scallops', desc: 'Cauliflower purée, brown butter, capers.', price: 'Demo' },
      { name: 'Burrata & Heirloom Tomato', desc: 'Fresh burrata, basil oil, aged balsamic.', price: 'Demo' },
    ],
  },
  {
    name: 'Mains',
    items: [
      { name: 'Smoked Lamb Shank', desc: '12-hour slow-cooked, saffron jus.', price: 'Demo' },
      { name: 'Charcoal Sea Bass', desc: 'Whole sea bass, lemon butter.', price: 'Demo' },
      { name: 'Saffron Risotto', desc: 'Arborio, parmesan, truffle oil.', price: 'Demo' },
      { name: 'Dry-Aged Ribeye', desc: '300g ribeye, bone marrow butter.', price: 'Demo' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Pistachio Soufflé', desc: 'Cardamom cream, pistachio crumble.', price: 'Demo' },
      { name: 'Dark Chocolate Fondant', desc: 'Molten center, vanilla bean ice cream.', price: 'Demo' },
      { name: 'Saffron Crème Brûlée', desc: 'Saffron-infused custard, caramelized sugar.', price: 'Demo' },
    ],
  },
];

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday - Thursday', time: '5 PM - 11 PM' },
  { day: 'Friday - Saturday', time: '5 PM - 1 AM' },
  { day: 'Sunday', time: '12 PM - 11 PM' },
];

export default function RestaurantDemo() {
  const [activeCat, setActiveCat] = useState(0);
  const [reserveOpen, setReserveOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0905] text-white">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Reserve" onCta={() => setReserveOpen(true)} category="RESTAURANT" />

      {/* Hero */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <DemoImage src={demoImages.restaurant.images.hero} alt="Saffron & Smoke hero" className="absolute inset-0 h-full w-full" eager fallbackGradient="from-amber-900 to-[#0c0905]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0c0905]" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 to-[#0c0905]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-700/15 blur-[150px]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 text-center">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-400">TRYSONVEX DEMO CONCEPT</span>
          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
            Saffron<br />&amp; <span className="text-amber-500">Smoke</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">A culinary journey where fire meets spice. Slow-smoked, saffron-infused, unforgettable.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={() => setReserveOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-amber-500">
              <Calendar className="h-5 w-5" /> Reserve a Table
            </button>
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-amber-400 transition hover:bg-amber-500/10">
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <DemoImage src={demoImages.restaurant.images.about} alt="Saffron & Smoke story" className="aspect-[4/3] rounded-3xl" fallbackGradient="from-amber-900 to-[#0c0905]" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">Our Story</p>
              <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Where Fire Meets Spice</h2>
              <p className="mt-4 text-white/60">Saffron &amp; Smoke was born from a passion for bold flavors and the art of live-fire cooking. Every dish is crafted with intention — combining smoked spices, saffron threads, and seasonal ingredients to create a dining experience that lingers long after the last bite.</p>
              <div className="mt-6 flex gap-6">
                <div><p className="text-3xl font-black text-amber-500">12+</p><p className="text-sm text-white/40">Signature Dishes</p></div>
                <div><p className="text-3xl font-black text-amber-500">5★</p><p className="text-sm text-white/40">Fine Dining</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="bg-[#100a06] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">Signature Dishes</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Chef's Selection</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {signatureDishes.map((d, i) => {
              const dishImages = [demoImages.restaurant.images.extra!.dish1, demoImages.restaurant.images.extra!.dish2, demoImages.restaurant.images.extra!.dish3, demoImages.restaurant.images.extra!.dish4];
              return (
              <div key={d.name} className="group overflow-hidden rounded-2xl border border-amber-900/30 bg-amber-950/10 p-6 transition hover:border-amber-600/50">
                <DemoImage src={dishImages[i]} alt={d.name} className="aspect-square rounded-xl" fallbackGradient="from-amber-900 to-[#0c0905]" />
                <h3 className="mt-4 text-lg font-bold">{d.name}</h3>
                <p className="mt-2 text-sm text-white/50">{d.desc}</p>
                <p className="mt-3 text-sm font-bold text-amber-500">{d.price} — TRYSONVEX concept</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">Our Menu</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Full Menu</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {menuCategories.map((c, i) => (
              <button key={c.name} onClick={() => setActiveCat(i)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${activeCat === i ? 'bg-amber-600 text-white' : 'border border-amber-700/40 text-amber-400 hover:bg-amber-500/10'}`}>
                {c.name}
              </button>
            ))}
          </div>
          <div className="mt-10 space-y-4">
            {menuCategories[activeCat].items.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-amber-900/20 bg-amber-950/5 p-5">
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="mt-1 text-sm text-white/50">{item.desc}</p>
                </div>
                <span className="ml-4 flex-shrink-0 text-sm font-bold text-amber-500">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#100a06] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">Gallery</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">A Feast for the Eyes</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <DemoImage key={i} src={demoImages.restaurant.images.gallery[i % demoImages.restaurant.images.gallery.length]} alt={`Gallery ${i + 1}`} className="aspect-square rounded-xl" fallbackGradient="from-amber-900 to-[#0c0905]" />
            ))}
          </div>
        </div>
      </section>

      {/* Chef Story */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">The Chef</p>
          <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">A Passion for Fire</h2>
          <DemoImage src={demoImages.restaurant.images.extra!.chef} alt="Chef at Saffron & Smoke" className="mx-auto mt-8 aspect-[4/3] max-w-2xl rounded-3xl" fallbackGradient="from-amber-900 to-[#0c0905]" />
          <p className="mt-6 text-white/60">The chef brings a passion for live-fire cooking and bold spice combinations, crafting every dish with intention and fire.</p>
        </div>
      </section>

      {/* Hours + Location */}
      <section id="hours" className="bg-[#100a06] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">Opening Hours</p>
              <h2 className="mt-2 font-serif text-4xl font-bold">When We're Open</h2>
              <div className="mt-8 space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between rounded-xl border border-amber-900/20 bg-amber-950/5 p-4">
                    <span className="font-semibold">{h.day}</span>
                    <span className="text-amber-400">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">Location</p>
              <h2 className="mt-2 font-serif text-4xl font-bold">Find Us</h2>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-white/70"><MapPin className="h-5 w-5 text-amber-500" /> [Demo Address — TRYSONVEX concept]</div>
                <div className="flex items-center gap-3 text-white/70"><Phone className="h-5 w-5 text-amber-500" /> [Demo Phone]</div>
              </div>
              <DemoImage src={demoImages.restaurant.images.gallery[0]} alt="Saffron & Smoke location" className="mt-6 aspect-video rounded-2xl" fallbackGradient="from-amber-900 to-[#0c0905]" />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-700 to-amber-900 p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Reserve Your Table</h2>
            <p className="mt-4 text-white/80">Book your table for an unforgettable dining experience.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => setReserveOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-amber-900 transition hover:bg-amber-50">
                <Calendar className="h-5 w-5" /> Reserve Now
              </button>
              <a href={waLink('Hi, I would like to reserve a table at Saffron & Smoke.')} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#100a06] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">Contact</p>
              <h2 className="mt-2 font-serif text-4xl font-bold">Get in Touch</h2>
              <p className="mt-4 text-white/60">For reservations, private dining, or event inquiries, reach out to us.</p>
              <a href={waLink('Hi, I would like to contact Saffron & Smoke.')} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white">
                WhatsApp Now
              </a>
            </div>
            <div className="rounded-3xl border border-amber-900/20 bg-amber-950/5 p-6">
              <h3 className="text-lg font-bold">Send a Message</h3>
              <div className="mt-4 space-y-3">
                <input className="w-full rounded-xl border border-amber-900/30 bg-amber-950/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-amber-500 focus:outline-none" placeholder="Your Name" />
                <input className="w-full rounded-xl border border-amber-900/30 bg-amber-950/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-amber-500 focus:outline-none" placeholder="Phone" />
                <textarea className="w-full rounded-xl border border-amber-900/30 bg-amber-950/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-amber-500 focus:outline-none" rows={3} placeholder="Message" />
                <button onClick={() => setReserveOpen(true)} className="w-full rounded-full bg-amber-600 px-6 py-3 text-sm font-bold text-white">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found Saffron & Smoke (TRYSONVEX demo) and would like to reserve a table." />

      {reserveOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-5" onClick={() => setReserveOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-[#100a06] border border-amber-900/30 p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-serif text-2xl font-bold text-white">Reserve a Table</h3>
            <p className="mt-1 text-sm text-white/50">Confirm your reservation via WhatsApp.</p>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-amber-900/30 bg-amber-950/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-amber-500 focus:outline-none" placeholder="Full Name" />
              <input className="w-full rounded-xl border border-amber-900/30 bg-amber-950/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-amber-500 focus:outline-none" placeholder="Phone" />
              <input type="date" className="w-full rounded-xl border border-amber-900/30 bg-amber-950/10 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none" />
              <select className="w-full rounded-xl border border-amber-900/30 bg-amber-950/10 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none">
                <option className="bg-[#100a06]">2 Guests</option>
                <option className="bg-[#100a06]">4 Guests</option>
                <option className="bg-[#100a06]">6 Guests</option>
                <option className="bg-[#100a06]">8+ Guests</option>
              </select>
            </div>
            <a href={waLink('Hi, I would like to reserve a table at Saffron & Smoke.')} target="_blank" rel="noopener noreferrer"
              onClick={() => setReserveOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3.5 text-sm font-bold text-white">
              Confirm via WhatsApp
            </a>
            <button onClick={() => setReserveOpen(false)} className="mt-2 w-full text-sm text-white/40">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
