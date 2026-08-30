import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { waLink } from '@/data/site';
import { Bed, Wifi, Wine, Dumbbell, Waves, Bell, ChevronDown, MapPin, Phone, Calendar, Check, ArrowRight } from 'lucide-react';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';

const ACCENT = '#1E3A5F';
const BRAND = 'The Azure Retreat';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const rooms = [
  { name: 'Deluxe Ocean Room', desc: 'Elegant room with partial ocean views, king bed, and marble bath.', size: '42 sqm', bed: 'King', price: 'Demo' },
  { name: 'Premium Suite', desc: 'Spacious suite with separate lounge, balcony, and panoramic views.', size: '65 sqm', bed: 'King + Sofa', price: 'Demo' },
  { name: 'Azure Villa', desc: 'Private villa with plunge pool, terrace, and dedicated butler service.', size: '120 sqm', bed: 'King', price: 'Demo' },
];

const amenities = [
  { icon: Waves, name: 'Infinity Pool', desc: 'Heated infinity pool with ocean views.' },
  { icon: Wine, name: 'Fine Dining', desc: 'Two signature restaurants on-site.' },
  { icon: Dumbbell, name: 'Fitness Center', desc: '24/7 modern fitness studio.' },
  { icon: Bell, name: 'Concierge', desc: 'Personalized service around the clock.' },
  { icon: Wifi, name: 'High-Speed Wi-Fi', desc: 'Complimentary throughout the property.' },
  { icon: Bed, name: 'Luxury Linen', desc: 'Egyptian cotton bedding and pillow menu.' },
];

const faqs = [
  { q: 'What time is check-in and check-out?', a: 'Check-in is from 2 PM and check-out is by 12 PM. Early check-in and late check-out are available on request.' },
  { q: 'Is breakfast included?', a: 'Complimentary breakfast is included with all suite and villa bookings.' },
  { q: 'Do you offer airport transfers?', a: 'Yes, private airport transfers can be arranged. Please contact us in advance.' },
  { q: 'Is the property pet-friendly?', a: 'We welcome small pets in select room categories. Please inquire at booking.' },
];

export default function HotelDemo() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Book Now" onCta={() => setBookingOpen(true)} category="LUXURY HOTEL" />

      {/* Hero */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <DemoImage src={demoImages.hotel.images.hero} alt="Luxury hotel lobby" className="absolute inset-0 h-full w-full" fallbackGradient="from-[#1E3A5F]/30 via-[#0a0f1a]/80 to-[#0a0f1a]" eager />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/40 via-[#0a0f1a]/80 to-[#0a0f1a]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-20">
          <span className="inline-block w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-300">TRYSONVEX DEMO CONCEPT</span>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl font-bold leading-tight md:text-7xl">
            Where Serenity<br />Meets the <span className="text-blue-400">Sea.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">A luxury retreat designed for those who seek stillness, beauty, and refined hospitality by the ocean.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold tracking-wider text-white transition hover:bg-blue-500">
              <Calendar className="h-5 w-5" /> Book Your Stay
            </button>
            <a href="#rooms" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold tracking-wider text-white transition hover:bg-white/10">
              Explore Rooms
            </a>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Rooms & Suites</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Stay in Elegance</h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {rooms.map((r, i) => (
              <div key={r.name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-blue-500/40">
                <DemoImage src={[demoImages.hotel.images.extra!.room1, demoImages.hotel.images.extra!.room2, demoImages.hotel.images.extra!.room3][i] ?? demoImages.hotel.images.hero} alt={r.name} className="aspect-[4/3] w-full" fallbackGradient="from-blue-900/40 to-[#0a0f1a]" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{r.name}</h3>
                  <p className="mt-2 text-sm text-white/50">{r.desc}</p>
                  <div className="mt-4 flex gap-4 text-xs text-white/40">
                    <span>{r.size}</span><span>·</span><span>{r.bed}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-400">{r.price} — TRYSONVEX concept</span>
                    <button onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400">Book <ArrowRight className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="bg-[#0d1320] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Amenities</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Every Comfort Considered</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div key={a.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <a.icon className="h-8 w-8 text-blue-400" />
                <h3 className="mt-4 text-lg font-bold">{a.name}</h3>
                <p className="mt-1 text-sm text-white/50">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Gallery</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">A Glimpse of Azure</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {demoImages.hotel.images.gallery.slice(0, 8).map((src, i) => (
              <DemoImage key={i} src={src} alt={`Hotel gallery ${i + 1}`} className="aspect-square w-full rounded-xl" fallbackGradient="from-blue-900/40 to-[#0a0f1a]" />
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section id="dining" className="bg-[#0d1320] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Dining</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Culinary Experiences</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <Wine className="h-10 w-10 text-blue-400" />
              <h3 className="mt-4 text-2xl font-bold">The Ocean Restaurant</h3>
              <p className="mt-2 text-white/50">Coastal fine dining with locally sourced seafood and a curated wine cellar.</p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <Bell className="h-10 w-10 text-blue-400" />
              <h3 className="mt-4 text-2xl font-bold">The Sky Lounge</h3>
              <p className="mt-2 text-white/50">Rooftop cocktails, small plates, and panoramic sunset views.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Experience */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">The Experience</p>
          <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">More Than a Stay</h2>
          <p className="mt-4 text-white/60">From sunrise yoga on the terrace to evening spa rituals, every moment at The Azure Retreat is designed to restore and inspire.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#0d1320] py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">FAQ</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Good to Know</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-blue-400 transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-white/60">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-[#1E3A5F] p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Book Your Retreat</h2>
            <p className="mt-4 text-white/80">Reserve your stay and experience true serenity.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-900 transition hover:bg-blue-50">
                <Calendar className="h-5 w-5" /> Book Now
              </button>
              <a href={waLink('Hi, I would like to book a stay at The Azure Retreat.')} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#0d1320] py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">Contact</p>
              <h2 className="mt-2 font-serif text-4xl font-bold">Reach Us</h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3 text-white/70"><MapPin className="h-5 w-5 text-blue-400" /> [Demo Address — TRYSONVEX concept]</div>
                <div className="flex items-center gap-3 text-white/70"><Phone className="h-5 w-5 text-blue-400" /> [Demo Phone]</div>
              </div>
              <a href={waLink('Hi, I would like to contact The Azure Retreat.')} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white">
                WhatsApp Now
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">Booking Enquiry</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none" placeholder="Check-in" type="date" />
                <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none" placeholder="Check-out" type="date" />
              </div>
              <div className="mt-3 space-y-3">
                <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none" placeholder="Name" />
                <select className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none">
                  <option className="bg-[#0d1320]">Select Room</option>
                  {rooms.map((r) => <option key={r.name} className="bg-[#0d1320]">{r.name}</option>)}
                </select>
                <button onClick={() => setBookingOpen(true)} className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white">Check Availability</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found The Azure Retreat (TRYSONVEX demo) and would like to book a stay." />

      {bookingOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-5" onClick={() => setBookingOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-[#0d1320] border border-white/10 p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-serif text-2xl font-bold text-white">Book Your Stay</h3>
            <p className="mt-1 text-sm text-white/50">Confirm your booking via WhatsApp.</p>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none" placeholder="Full Name" />
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none" placeholder="Phone" />
              <input type="date" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none" />
              <input type="date" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none" />
              <select className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none">
                <option className="bg-[#0d1320]">Select Room</option>
                {rooms.map((r) => <option key={r.name} className="bg-[#0d1320]">{r.name}</option>)}
              </select>
            </div>
            <a href={waLink('Hi, I would like to book a stay at The Azure Retreat.')} target="_blank" rel="noopener noreferrer"
              onClick={() => setBookingOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white">
              Confirm via WhatsApp
            </a>
            <button onClick={() => setBookingOpen(false)} className="mt-2 w-full text-sm text-white/40">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
