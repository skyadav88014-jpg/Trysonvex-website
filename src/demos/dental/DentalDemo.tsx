import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';
import { waLink } from '@/data/site';
import { Calendar, Phone, Clock, MapPin, ChevronDown, Stethoscope, Shield, Heart, Microscope, Star, ArrowRight } from 'lucide-react';

const ACCENT = '#0EA5A4';
const BRAND = 'Bright Smile Dental';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { icon: Stethoscope, title: 'General Dentistry', desc: 'Routine check-ups, cleanings, and oral health assessments.' },
  { icon: Shield, title: 'Preventive Care', desc: 'Fluoride treatments and sealants to protect your teeth.' },
  { icon: Heart, title: 'Cosmetic Dentistry', desc: 'Veneers, bonding, and smile makeovers tailored to you.' },
  { icon: Microscope, title: 'Root Canal Therapy', desc: 'Comfortable, precise treatment to save natural teeth.' },
];

const treatments = [
  { name: 'Teeth Whitening', desc: 'Professional whitening for a brighter smile.', duration: '60 min' },
  { name: 'Dental Implants', desc: 'Permanent replacement for missing teeth.', duration: 'Multi-visit' },
  { name: 'Orthodontics', desc: 'Clear aligners and braces for straighter teeth.', duration: '6-18 months' },
  { name: 'Crowns & Bridges', desc: 'Restore damaged or missing teeth naturally.', duration: '2 visits' },
  { name: 'Pediatric Dentistry', desc: 'Gentle dental care for children.', duration: '30 min' },
  { name: 'Emergency Care', desc: 'Same-day relief for dental pain.', duration: 'On call' },
];

const faqs = [
  { q: 'How often should I visit the dentist?', a: 'We recommend a check-up every six months to maintain optimal oral health.' },
  { q: 'Do you treat children?', a: 'Yes, we offer gentle pediatric dentistry in a comfortable environment for children.' },
  { q: 'Is teeth whitening safe?', a: 'Professional whitening performed by a dentist is safe and monitored for your comfort.' },
  { q: 'Do you accept walk-ins?', a: 'We recommend booking an appointment, but we accommodate emergencies whenever possible.' },
];

export default function DentalDemo() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Book Appointment" onCta={() => setBookingOpen(true)} category="DENTAL CLINIC" />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 py-20 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold text-teal-700">TRYSONVEX DEMO CONCEPT</span>
            <h1 className="mt-4 text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl">A Healthier, Brighter Smile Starts Here.</h1>
            <p className="mt-5 max-w-lg text-lg text-gray-600">Experience gentle, modern dental care in a calm and welcoming environment designed for your comfort.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110" style={{ background: ACCENT }}>
                <Calendar className="h-5 w-5" /> Book Appointment
              </button>
              <a href="#treatments" className="inline-flex items-center gap-2 rounded-full border-2 border-teal-600 px-7 py-3.5 text-sm font-bold text-teal-700 transition hover:bg-teal-50">
                View Treatments
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl p-8">
              <DemoImage src={demoImages.dental.images.hero} alt="Modern dental clinic with advanced technology" className="absolute inset-0 h-full w-full" fallbackGradient="from-teal-900 to-cyan-900" eager />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center gap-3 text-white">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20"><Stethoscope className="h-7 w-7" /></div>
                  <div><p className="text-sm font-bold">Modern Clinic</p><p className="text-xs text-white/70">Advanced Technology</p></div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-white">
                  <div className="rounded-xl bg-white/15 p-3"><p className="text-2xl font-black">10+</p><p className="text-xs">Years</p></div>
                  <div className="rounded-xl bg-white/15 p-3"><p className="text-2xl font-black">5K+</p><p className="text-xs">Patients</p></div>
                  <div className="rounded-xl bg-white/15 p-3"><p className="text-2xl font-black">20+</p><p className="text-xs">Treatments</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <DemoImage src={demoImages.dental.images.about} alt="About Bright Smile Dental clinic" className="aspect-[4/3] w-full rounded-3xl" fallbackGradient="from-teal-900 to-cyan-900" />
            <div>
              <p className="text-sm font-semibold text-teal-600">ABOUT THE CLINIC</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Caring for Smiles with Precision & Comfort</h2>
              <p className="mt-4 text-gray-600">Our clinic combines experienced dental professionals with modern technology to deliver care that is thorough, gentle, and tailored to every patient. We focus on prevention, comfort, and long-term oral health.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-teal-50 p-5"><Shield className="h-6 w-6 text-teal-600" /><p className="mt-2 font-bold text-gray-900">Safe & Sterile</p><p className="text-sm text-gray-500">Strict hygiene protocols</p></div>
                <div className="rounded-2xl bg-teal-50 p-5"><Heart className="h-6 w-6 text-teal-600" /><p className="mt-2 font-bold text-gray-900">Gentle Care</p><p className="text-sm text-gray-500">Patient-first approach</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-teal-50/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-teal-600">OUR SERVICES</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Complete Dental Care Under One Roof</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-teal-100 bg-white p-6 transition hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100"><s.icon className="h-6 w-6 text-teal-600" /></div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section id="treatments" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-teal-600">TREATMENTS</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Solutions for Every Smile</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <div key={t.name} className="group rounded-2xl border border-gray-100 bg-white p-6 transition hover:border-teal-300 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{t.duration}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{t.desc}</p>
                <button onClick={() => setBookingOpen(true)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                  Book this treatment <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-teal-400">WHY CHOOSE US</p>
            <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Why Patients Trust Us</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Stethoscope, title: 'Experienced Team', desc: 'Skilled dental professionals.' },
              { icon: Microscope, title: 'Modern Technology', desc: 'Advanced diagnostic tools.' },
              { icon: Heart, title: 'Patient Comfort', desc: 'Calm, pain-managed care.' },
              { icon: Shield, title: 'Hygiene First', desc: 'Sterilized, safe environment.' },
            ].map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <w.icon className="h-8 w-8 text-teal-400" />
                <h3 className="mt-4 font-bold text-white">{w.title}</h3>
                <p className="mt-1 text-sm text-white/50">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-teal-600">MEET YOUR DENTIST</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Experienced, Caring Professionals</h2>
              <p className="mt-4 text-gray-600">Our dental team brings years of experience in general, cosmetic, and preventive dentistry. We take time to understand each patient and create personalized treatment plans.</p>
            </div>
            <DemoImage src={demoImages.dental.images.extra?.doctor ?? demoImages.dental.images.hero} alt="Dr. Smith, experienced dental professional at Bright Smile Dental" className="aspect-[4/3] w-full rounded-3xl" fallbackGradient="from-teal-900 to-cyan-900" />
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-teal-50/50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-teal-600">TECHNOLOGY & EQUIPMENT</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Modern Tools for Better Care</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {['Digital X-Rays', 'Intraoral Cameras', 'Laser Dentistry', '3D Imaging', 'Sterilization Units', 'Comfort Chairs'].map((tech) => (
              <div key={tech} className="flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100"><Microscope className="h-5 w-5 text-teal-600" /></div>
                <span className="font-semibold text-gray-900">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-teal-600">GALLERY</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Inside Our Clinic</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {demoImages.dental.images.gallery.map((src, i) => (
              <DemoImage key={i} src={src} alt={`Clinic gallery photo ${i + 1}`} className="aspect-square w-full rounded-2xl" fallbackGradient="from-teal-900 to-cyan-900" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-teal-50/50 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-teal-600">FAQ</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Common Questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-teal-100 bg-white">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-teal-600 transition ${openFaq === i ? 'rotate-180' : ''}`} />
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
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-black md:text-4xl">Book Your Appointment Today</h2>
            <p className="mt-4 text-white/80">Schedule your visit and take the first step toward a healthier smile.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-teal-700 transition hover:bg-teal-50">
                <Calendar className="h-5 w-5" /> Book Appointment
              </button>
              <a href={waLink('Hi, I would like to book an appointment at Bright Smile Dental.')} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Location */}
      <section id="contact" className="bg-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-teal-400">CONTACT</p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Get in Touch</h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3 text-white/80"><Phone className="h-5 w-5 text-teal-400" /> Call Now: [Demo Phone]</div>
                <div className="flex items-center gap-3 text-white/80"><Clock className="h-5 w-5 text-teal-400" /> Mon-Sat: 9 AM - 8 PM</div>
                <div className="flex items-center gap-3 text-white/80"><MapPin className="h-5 w-5 text-teal-400" /> [Demo Location — TRYSONVEX concept]</div>
              </div>
              <a href={waLink('Hi, I would like to contact Bright Smile Dental.')} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white">
                WhatsApp Now
              </a>
            </div>
            <div className="rounded-3xl bg-white/5 p-6">
              <h3 className="text-lg font-bold text-white">Quick Contact</h3>
              <div className="mt-4 space-y-3">
                <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-teal-500 focus:outline-none" placeholder="Your Name" />
                <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-teal-500 focus:outline-none" placeholder="Phone Number" />
                <textarea className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-teal-500 focus:outline-none" rows={3} placeholder="Message" />
                <button onClick={() => setBookingOpen(true)} className="w-full rounded-full px-6 py-3 text-sm font-bold text-white" style={{ background: ACCENT }}>Contact Clinic</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found Bright Smile Dental (TRYSONVEX demo) and would like to book an appointment." />

      {/* Booking Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-5" onClick={() => setBookingOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-black text-gray-900">Book Appointment</h3>
            <p className="mt-1 text-sm text-gray-500">Fill in your details and we will confirm on WhatsApp.</p>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" placeholder="Full Name" />
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" placeholder="Phone Number" />
              <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none">
                <option>Select Treatment</option>
                {treatments.map((t) => <option key={t.name}>{t.name}</option>)}
              </select>
              <input type="date" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-teal-500 focus:outline-none" />
            </div>
            <a href={waLink('Hi, I would like to book an appointment at Bright Smile Dental.')} target="_blank" rel="noopener noreferrer"
              onClick={() => setBookingOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white" style={{ background: ACCENT }}>
              Confirm via WhatsApp
            </a>
            <button onClick={() => setBookingOpen(false)} className="mt-2 w-full text-sm text-gray-400">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
