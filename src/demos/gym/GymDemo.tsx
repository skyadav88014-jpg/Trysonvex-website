import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';
import { waLink } from '@/data/site';
import { Dumbbell, Flame, Users, Zap, Clock, MapPin, ChevronDown, ArrowRight, Check, Trophy } from 'lucide-react';

const ACCENT = '#F97316';
const BRAND = 'Iron Forge Gym';
const GYM_IMAGES = demoImages.gym.images;
const TRAINER_IMAGES = [
  GYM_IMAGES.extra!.trainer1,
  GYM_IMAGES.extra!.trainer2,
  GYM_IMAGES.extra!.trainer3,
  GYM_IMAGES.extra!.trainer4,
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const programs = [
  { name: 'Strength Training', desc: 'Build raw power with compound lifts and progressive overload.', icon: Dumbbell },
  { name: 'HIIT & Cardio', desc: 'Burn fat fast with high-intensity interval training.', icon: Flame },
  { name: 'CrossFit', desc: 'Functional fitness that pushes your limits every session.', icon: Zap },
  { name: 'Powerlifting', desc: 'Master the squat, bench, and deadlift with expert coaching.', icon: Trophy },
];

const plans = [
  { name: 'BASIC', price: 'Demo', period: '/month', features: ['Full gym access', 'Locker room', '1 fitness assessment', 'Open gym hours'], cta: 'Join Now', featured: false },
  { name: 'PRO', price: 'Demo', period: '/month', features: ['Everything in Basic', 'Group classes', 'Personalized plan', 'Nutrition guide', 'Sauna access'], cta: 'Join Now', featured: true },
  { name: 'ELITE', price: 'Demo', period: '/month', features: ['Everything in Pro', '1-on-1 training', 'Recovery sessions', 'Priority booking'], cta: 'Join Now', featured: false },
];

const trainers = [
  { name: 'Trainer Profile', specialty: 'Strength & Conditioning', exp: 'Demo' },
  { name: 'Trainer Profile', specialty: 'HIIT & Cardio', exp: 'Demo' },
  { name: 'Trainer Profile', specialty: 'CrossFit Coach', exp: 'Demo' },
  { name: 'Trainer Profile', specialty: 'Powerlifting', exp: 'Demo' },
];

const facilities = ['Olympic Lifting Platform', 'Cardio Zone', 'Free Weights Area', 'Functional Training Zone', 'CrossFit Box', 'Recovery & Sauna', 'Group Class Studio', 'Nutrition Bar'];

const faqs = [
  { q: 'Do you offer a free trial?', a: 'Yes, we offer a complimentary day pass so you can experience the gym before joining.' },
  { q: 'Are trainers included in membership?', a: 'Group classes are included in Pro and Elite plans. 1-on-1 training is available with Elite.' },
  { q: 'What are your operating hours?', a: 'We are open from 5 AM to 11 PM, seven days a week.' },
  { q: 'Do you have a women-only area?', a: 'Yes, we have a dedicated women-only training zone with separate access.' },
];

export default function GymDemo() {
  const [joinOpen, setJoinOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Join Now" onCta={() => setJoinOpen(true)} category="GYM & FITNESS" />

      {/* Hero */}
      <section id="home" className="relative min-h-[90vh] overflow-hidden pt-20">
        <DemoImage src={GYM_IMAGES.hero} alt="Iron Forge Gym interior" className="absolute inset-0 h-full w-full" fallbackGradient="from-orange-900 to-black" eager />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#1a1a1a]/80 to-orange-950/60" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-orange-600/20 blur-[120px]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-20 text-center">
          <span className="rounded-full bg-orange-500/20 px-4 py-1.5 text-xs font-semibold text-orange-400">TRYSONVEX DEMO CONCEPT</span>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Forge Your<br /><span className="text-orange-500">Strength.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">No excuses. Just results. Train hard, lift heavy, and become unstoppable at Iron Forge Gym.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button onClick={() => setJoinOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-bold uppercase text-white transition hover:brightness-110">
              <Dumbbell className="h-5 w-5" /> Join Now
            </button>
            <a href="#programs" className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-white/10">
              View Programs
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[{ icon: Users, val: '500+', label: 'Members' }, { icon: Dumbbell, val: '50+', label: 'Equipment' }, { icon: Trophy, val: '15+', label: 'Coaches' }, { icon: Clock, val: '18hr', label: 'Open Daily' }].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto h-8 w-8 text-orange-500" />
                <p className="mt-2 text-3xl font-black">{s.val}</p>
                <p className="text-xs uppercase tracking-wider text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Training Programs</p>
            <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">Train With Purpose</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <div key={p.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-orange-500/50">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/20"><p.icon className="h-7 w-7 text-orange-500" /></div>
                <h3 className="mt-4 text-xl font-bold uppercase">{p.name}</h3>
                <p className="mt-2 text-sm text-white/50">{p.desc}</p>
                <button onClick={() => setJoinOpen(true)} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-500">Start Training <ArrowRight className="h-4 w-4" /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Membership Plans</p>
            <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">Choose Your Plan</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-3xl border p-8 ${p.featured ? 'border-orange-500 bg-orange-500/5' : 'border-white/10 bg-white/[0.03]'}`}>
                {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-black">MOST POPULAR</span>}
                <h3 className="text-2xl font-black uppercase">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1"><span className="text-4xl font-black text-orange-500">{p.price}</span><span className="text-white/40">{p.period}</span></div>
                <p className="mt-1 text-xs text-white/30">Pricing shown as demo — contact for real rates</p>
                <div className="my-6 h-px bg-white/10" />
                <div className="space-y-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/70"><Check className="h-4 w-4 text-orange-500" /> {f}</div>
                  ))}
                </div>
                <button onClick={() => setJoinOpen(true)} className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase transition ${p.featured ? 'bg-orange-500 text-white hover:brightness-110' : 'border border-white/20 text-white hover:bg-white/10'}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Our Trainers</p>
            <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">Meet the Coaches</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((t, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <DemoImage src={TRAINER_IMAGES[i]} alt={t.name} className="aspect-[3/4]" fallbackGradient="from-orange-900 to-black" />
                <div className="p-5">
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-orange-500">{t.specialty}</p>
                  <p className="mt-1 text-xs text-white/30">{t.exp} — TRYSONVEX demo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Facilities</p>
            <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">World-Class Equipment</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <Dumbbell className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-semibold">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Gallery</p>
            <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">Inside the Forge</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {GYM_IMAGES.gallery.map((src, i) => (
              <DemoImage key={i} src={src} alt={`Gallery ${i + 1}`} className="aspect-square rounded-xl" fallbackGradient="from-orange-900 to-black" />
            ))}
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Transformations</p>
          <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">Your Journey Starts Here</h2>
          <p className="mt-4 text-white/50">Every member's journey is unique. With consistent training and expert coaching, you can achieve your fitness goals. We do not display fabricated before/after claims — your results depend on your dedication and effort.</p>
          <button onClick={() => setJoinOpen(true)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-bold uppercase text-white transition hover:brightness-110">
            <Flame className="h-5 w-5" /> Start Your Journey
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">FAQ</p>
            <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">Questions?</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-orange-500 transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-white/60">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Contact</p>
              <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">Get in Touch</h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-3 text-white/80"><MapPin className="h-5 w-5 text-orange-500" /> [Demo Location — TRYSONVEX concept]</div>
                <div className="flex items-center gap-3 text-white/80"><Clock className="h-5 w-5 text-orange-500" /> Open 5 AM - 11 PM, 7 days</div>
              </div>
              <a href={waLink('Hi, I would like to join Iron Forge Gym.')} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white">
                WhatsApp Now
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-bold">Join the Forge</h3>
              <div className="mt-4 space-y-3">
                <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-orange-500 focus:outline-none" placeholder="Your Name" />
                <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-orange-500 focus:outline-none" placeholder="Phone Number" />
                <select className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none">
                  <option className="bg-black">Select Plan</option>
                  {plans.map((p) => <option key={p.name} className="bg-black">{p.name}</option>)}
                </select>
                <button onClick={() => setJoinOpen(true)} className="w-full rounded-full bg-orange-500 px-6 py-3 text-sm font-bold uppercase text-white">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found Iron Forge Gym (TRYSONVEX demo) and would like to join." />

      {joinOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-5" onClick={() => setJoinOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-[#1a1a1a] border border-white/10 p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-black uppercase text-white">Join Iron Forge</h3>
            <p className="mt-1 text-sm text-white/50">Fill in your details and we will confirm on WhatsApp.</p>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-orange-500 focus:outline-none" placeholder="Full Name" />
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-orange-500 focus:outline-none" placeholder="Phone Number" />
              <select className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none">
                <option className="bg-black">Select Plan</option>
                {plans.map((p) => <option key={p.name} className="bg-black">{p.name}</option>)}
              </select>
            </div>
            <a href={waLink('Hi, I would like to join Iron Forge Gym.')} target="_blank" rel="noopener noreferrer"
              onClick={() => setJoinOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold uppercase text-white">
              Confirm via WhatsApp
            </a>
            <button onClick={() => setJoinOpen(false)} className="mt-2 w-full text-sm text-white/40">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
