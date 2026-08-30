import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, ArrowRight, ArrowUpRight, Menu, X, Sparkles,
  Check, ChevronDown,
  Send, MapPin, Clock, Instagram,
} from 'lucide-react';
import { demos, services, whyTrysonvex, processSteps, pricingTiers, faqs, waLink, WHATSAPP_DISPLAY, INSTAGRAM_URL, LOCATION, AVAILABILITY } from '@/data/site';
import { getAiResponse } from '@/data/ai';
import { demoImages } from '@/data/demoImages';
import LiveShowcase from '@/components/LiveShowcase';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AiAssistant from '@/components/AiAssistant';
import BrandLogo from '@/components/BrandLogo';
import DemoImage from '@/components/DemoImage';

/* ---------------- Nav ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#top' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <BrandLogo to="/#top" compact />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/60 transition hover:text-white">{l.label}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href={waLink('Hi TRYSONVEX, I would like to discuss a website for my business.')} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">
            <MessageCircle className="h-4 w-4" /> WhatsApp Now
          </a>
        </div>
        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#0a0a0f]/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href={waLink('Hi TRYSONVEX, I would like to discuss a website.')} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#0a0a0f] pt-28">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D7A936]/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/15 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-[#D7A936]" /> PREMIUM WEB DESIGN & DEVELOPMENT
          </div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            WE BUILD PREMIUM WEBSITES<br /><span className="text-[#D7A936]">THAT MAKE YOUR BUSINESS</span><br />STAND OUT.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            TRYSONVEX creates modern, professional and responsive websites designed around your business, industry and customers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={waLink('Hi TRYSONVEX, I would like to discuss a website for my business.')} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110">
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
              Explore Our Work <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs font-semibold tracking-wider text-white/40">BUSINESS WEBSITES &middot; E-COMMERCE &middot; LANDING PAGES &middot; CUSTOM WEBSITES</p>
        </div>

        {/* Live interactive website showcase */}
        <LiveShowcase />
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}

/* ---------------- Trust / Value strip ---------------- */
function TrustStrip() {
  const points = ['PREMIUM DESIGN', 'RESPONSIVE EXPERIENCE', 'BUSINESS FOCUSED', 'MODERN TECHNOLOGY'];
  return (
    <section className="border-y border-white/10 bg-[#070710] py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-5">
        {points.map((p) => (
          <div key={p} className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#D7A936]" />
            <span className="text-xs font-bold tracking-wider text-white/70">{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- What we build — large visual previews ---------------- */
function WhatWeBuild() {
  const items = demos.map((d) => ({
    ...d,
    img: demoImages[d.slug as keyof typeof demoImages]?.images.hero ?? '',
    accent: d.accent,
  }));
  return (
    <section className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">WHAT WE BUILD</p>
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
          ONE COMPANY.<br /><span className="text-[#D7A936]">MANY BUSINESS WEBSITE EXPERIENCES.</span>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link key={it.slug} to={`/demos/${it.slug}`} className="group relative block overflow-hidden rounded-2xl border border-white/10 transition hover:border-white/25">
              <div className="relative aspect-[16/10] overflow-hidden">
                <DemoImage src={it.img} alt={it.industry} className="h-full w-full" fallbackGradient="from-gray-700 to-gray-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-bold tracking-wider text-[#D7A936]">TRYSONVEX DEMO CONCEPT</p>
                <h3 className="mt-1 text-lg font-bold text-white">{it.industry}</h3>
              </div>
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur transition group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured Work ---------------- */
function FeaturedWork() {
  const featured = demos.filter((d) => ['dental', 'restaurant', 'real-estate'].includes(d.slug));
  return (
    <section id="work" className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">OUR WORK</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              WEBSITES BUILT TO IMPRESS.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/50">Explore TRYSONVEX demo concepts created to show how different businesses could look online.</p>
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
            View All 10 Demos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((d) => (
            <Link key={d.slug} to={`/demos/${d.slug}`} className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25">
              <div className="relative aspect-[4/3] overflow-hidden" style={{ background: d.accent }}>
                <DemoPreview slug={d.slug} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{d.industry}</div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{d.title}</h3>
                <p className="mt-2 text-sm text-white/50">{d.description}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D7A936]">
                  View Full Website <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Live Proof Project ---------------- */
function LiveProof() {
  const points = ['Professional UI/UX', 'Responsive mobile design', 'E-commerce interface', 'Modern website development', 'Interactive user experience', 'Production-style structure'];
  return (
    <section className="bg-[#070710] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="overflow-hidden rounded-3xl border border-[#D7A936]/25 bg-gradient-to-br from-[#D7A936]/10 via-white/[0.03] to-transparent">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[260px] overflow-hidden bg-[#111118] lg:min-h-[400px]">
              <DemoImage src={demoImages.ecommerce.images.hero} alt="Nisha Kids Wear e-commerce website" className="absolute inset-0 h-full w-full" fallbackGradient="from-[#D7A936]/20 via-[#0a0a0f] to-[#3B82F6]/15" eager />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-[#111118]/40 to-transparent" />
              <div className="absolute right-4 top-4 rounded-full bg-[#D7A936] px-3 py-1 text-[10px] font-bold tracking-wider text-black">BUILT BY TRYSONVEX</div>
            </div>
            <div className="p-7 sm:p-10">
              <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">DEMO PROJECT · BUILT BY TRYSONVEX</p>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">NISHA KIDS WEAR</h2>
              <p className="mt-4 text-sm text-white/60">An e-commerce website concept built to demonstrate TRYSONVEX's design, development, responsive UI and digital experience capabilities.</p>
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {points.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-white/75"><Check className="h-4 w-4 shrink-0 text-[#D7A936]" /> {p}</div>
                ))}
              </div>
              <a href="https://nishakidswear.lovable.app" target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D7A936] px-6 py-3 text-sm font-bold text-black transition hover:brightness-110">
                View Live Demo <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-xs text-white/35">A demonstration project — not a paying client. No sales, revenue or results are claimed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Mini visual preview per demo — real image */
function DemoPreview({ slug }: { slug: string }) {
  const meta = demoImages[slug as keyof typeof demoImages];
  if (!meta) return <div className="h-full bg-white/10" />;
  return (
    <DemoImage
      src={meta.images.hero}
      alt={meta.category}
      className="h-full w-full"
      fallbackGradient="from-gray-700 to-gray-900"
    />
  );
}

/* ---------------- Services ---------------- */
function Services() {
  return (
    <section id="services" className="bg-[#070710] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">SERVICES</p>
        <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">WEBSITES BUILT FOR EVERY BUSINESS.</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20">
              <h3 className="text-lg font-bold text-white">{s.name}</h3>
              <p className="mt-2 text-xs text-white/40">{s.who}</p>
              <div className="mt-4 space-y-2">
                {s.includes.map((inc) => (
                  <div key={inc} className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#D7A936]" /> {inc}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Trysonvex ---------------- */
function WhyTrysonvex() {
  return (
    <section className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">WHY TRYSONVEX</p>
        <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">A WEBSITE BUILT THE RIGHT WAY.</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyTrysonvex.map((w) => (
            <div key={w.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-base font-bold text-white">{w.title}</h3>
              <p className="mt-2 text-sm text-white/50">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  return (
    <section id="process" className="bg-[#070710] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">PROCESS</p>
        <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">FROM IDEA TO LAUNCH.</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <div key={s.num} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-5xl font-black text-white/10">{s.num}</span>
              <h3 className="mt-2 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-white/50">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  return (
    <section id="pricing" className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-5xl px-5">
        <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">PRICING</p>
        <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">SIMPLE, SCALABLE TIERS.</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {pricingTiers.map((t) => (
            <div key={t.name} className={`relative rounded-3xl border p-8 ${t.featured ? 'border-[#D7A936] bg-[#D7A936]/5' : 'border-white/10 bg-white/[0.03]'}`}>
              {t.featured && <span className="absolute -top-3 left-8 rounded-full bg-[#D7A936] px-3 py-1 text-xs font-bold text-black">POPULAR</span>}
              <h3 className="text-2xl font-black text-white">{t.name}</h3>
              <p className="mt-2 text-sm text-white/50">{t.tagline}</p>
              <div className="my-6 h-px bg-white/10" />
              <div className="space-y-3">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="h-4 w-4 flex-shrink-0 text-[#D7A936]" /> {f}
                  </div>
                ))}
              </div>
              <a href={waLink(`Hi TRYSONVEX, I would like a quote for the ${t.name} tier.`)} target="_blank" rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${t.featured ? 'bg-[#D7A936] text-black hover:brightness-110' : 'border border-white/20 text-white hover:bg-white/10'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-white/30">Final pricing depends on scope and features. Contact us for a custom quote.</p>
      </div>
    </section>
  );
}

/* ---------------- About Sonal Yadav ---------------- */
function About() {
  const pillars = [
    { label: 'VISION', body: 'Build websites businesses can be proud to show.' },
    { label: 'DESIGN', body: 'Create premium visual experiences.' },
    { label: 'DEVELOPMENT', body: 'Turn ideas into responsive websites.' },
    { label: 'BUSINESS', body: 'Help businesses build a stronger online presence.' },
  ];
  return (
    <section id="about" className="bg-[#070710] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">MEET SONAL YADAV</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">SONAL YADAV</h2>
            <div className="mt-6 space-y-4 text-white/60">
              <p>Sonal Yadav is the person behind TRYSONVEX, a website design and development company focused on creating premium digital experiences for businesses.</p>
              <p>The vision behind TRYSONVEX is to help businesses present themselves professionally online through modern, responsive and thoughtfully structured websites.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-bold tracking-wider text-[#D7A936]">{p.label}</p>
                  <p className="mt-1.5 text-sm text-white/60">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#1a1505]">
              {/* Abstract premium visual: logo + glass + gold lighting */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-64 w-64 rounded-full bg-[#D7A936]/15 blur-[80px]" />
                <div className="relative flex flex-col items-center gap-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-[#D7A936]/30 bg-white/5 backdrop-blur-xl">
                    <BrandLogo compact />
                  </div>
                  <span className="text-4xl font-black tracking-tighter text-white/90 sm:text-5xl">TRYSON<span className="text-[#D7A936]">VEX</span></span>
                  <span className="text-xs font-semibold tracking-wider text-white/40">BUILD PREMIUM. GROW FASTER.</span>
                </div>
              </div>
              {/* Decorative interface fragments */}
              <div className="absolute left-6 top-6 h-16 w-24 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm" />
              <div className="absolute bottom-8 right-8 h-20 w-28 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm" />
              <div className="absolute right-12 top-12 h-2 w-16 rounded-full bg-[#D7A936]/40" />
              <div className="absolute bottom-16 left-10 h-2 w-12 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Owner Information Panel ---------------- */
function OwnerPanel() {
  const rows = [
    { label: 'Founded by', value: 'Sonal Yadav' },
    { label: 'Based in', value: LOCATION },
    { label: 'Focus', value: 'Professional Website Design & Development' },
    { label: 'Available', value: AVAILABILITY },
    { label: 'Contact', value: WHATSAPP_DISPLAY },
    { label: 'Instagram', value: 'TRYSONVEX' },
  ];
  return (
    <section className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 bg-white/[0.02] px-7 py-5">
            <span className="text-2xl font-black tracking-tighter text-white">TRYSON<span className="text-[#D7A936]">VEX</span></span>
          </div>
          <div className="grid gap-px sm:grid-cols-2">
            {rows.map((r) => (
              <div key={r.label} className="bg-white/[0.02] px-7 py-5">
                <p className="text-xs font-semibold tracking-wider text-white/40">{r.label.toUpperCase()}</p>
                <p className="mt-1 text-sm font-semibold text-white">{r.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI Assistant (floating widget) ---------------- */
/* Now rendered as a fixed-position floating chat — see AiAssistant component */

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[#070710] py-24">
      <div className="mx-auto max-w-3xl px-5">
        <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">FAQ</p>
        <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">QUESTIONS, ANSWERED.</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                <span className="text-sm font-semibold text-white">{f.q}</span>
                <ChevronDown className={`h-4 w-4 flex-shrink-0 text-white/50 transition ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && <div className="px-5 pb-4 text-sm text-white/60">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', whatsapp: '', type: '', websiteType: '', budget: '', details: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New enquiry from ${form.name}%0ABusiness: ${form.business}%0AWhatsApp: ${form.whatsapp}%0AType: ${form.type}%0AWebsite: ${form.websiteType}%0ABudget: ${form.budget}%0ADetails: ${form.details}`;
    window.open(waLink(decodeURIComponent(msg)), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">CONTACT</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">LET'S BUILD YOUR WEBSITE.</h2>
            <p className="mt-4 text-white/60">Tell us about your business and we will get back to you on WhatsApp.</p>
            <div className="mt-8 space-y-4">
              <a href={waLink('Hi TRYSONVEX!')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 transition hover:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/20"><MessageCircle className="h-5 w-5 text-[#25D366]" /></div>
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><MapPin className="h-5 w-5 text-white/60" /></div>
                <span>{LOCATION}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Clock className="h-5 w-5 text-white/60" /></div>
                <span>Available {AVAILABILITY}</span>
              </div>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 transition hover:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Instagram className="h-5 w-5 text-white/60" /></div>
                <span>@trysonvex</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D7A936]/20"><Check className="h-8 w-8 text-[#D7A936]" /></div>
                <h3 className="text-xl font-bold text-white">Thank you!</h3>
                <p className="mt-2 text-sm text-white/50">Your enquiry has been opened in WhatsApp. We will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#D7A936]">Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Field label="Business Name" value={form.business} onChange={(v) => setForm({ ...form, business: v })} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="WhatsApp Number" value={form.whatsapp} onChange={(v) => setForm({ ...form, whatsapp: v })} required />
                  <Field label="Business Type" value={form.type} onChange={(v) => setForm({ ...form, type: v })} placeholder="e.g. Restaurant" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectField label="Website Type" value={form.websiteType} onChange={(v) => setForm({ ...form, websiteType: v })} options={['Business Website', 'Landing Page', 'E-Commerce', 'Portfolio', 'Custom']} />
                  <SelectField label="Budget" value={form.budget} onChange={(v) => setForm({ ...form, budget: v })} options={['Starter', 'Premium', 'Custom']} />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-white/60">Project Details</label>
                  <textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} rows={3}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D7A936] focus:outline-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D7A936] px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-110">
                  Send Enquiry <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, required, placeholder }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-white/60">{label}{required && <span className="text-[#D7A936]">*</span>}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} required={required} placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D7A936] focus:outline-none" />
    </div>
  );
}
function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-white/60">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-[#D7A936] focus:outline-none">
        <option value="" className="bg-[#0a0a0f]">Select...</option>
        {options.map((o) => <option key={o} value={o} className="bg-[#0a0a0f]">{o}</option>)}
      </select>
    </div>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#070710] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D7A936]/15 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
          READY TO MAKE YOUR<br />BUSINESS LOOK <span className="text-[#D7A936]">PREMIUM?</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={waLink('Hi TRYSONVEX, I am ready to make my business look premium.')} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition hover:brightness-110">
            <MessageCircle className="h-5 w-5" /> WhatsApp Now
          </a>
          <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10">
            View Our Demos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'Our Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <footer className="border-t border-white/10 bg-[#050508] py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <BrandLogo compact />
            <p className="mt-3 text-sm font-semibold tracking-wider text-white/60">BUILD PREMIUM. GROW FASTER.</p>
            <p className="mt-4 max-w-xs text-sm text-white/40">Professional website design & development for businesses.</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold tracking-wider text-white/40">NAVIGATION</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/50 transition hover:text-white">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold tracking-wider text-white/40">CONNECT</p>
            <div className="space-y-2">
              <a href={waLink('Hi TRYSONVEX!')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white"><MessageCircle className="h-4 w-4 text-[#25D366]" /> {WHATSAPP_DISPLAY}</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/50 transition hover:text-white"><Instagram className="h-4 w-4" /> @trysonvex</a>
              <div className="flex items-center gap-2 text-sm text-white/50"><MapPin className="h-4 w-4" /> {LOCATION}</div>
              <div className="flex items-center gap-2 text-sm text-white/50"><Clock className="h-4 w-4" /> {AVAILABILITY}</div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/30">&copy; TRYSONVEX. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link to="/privacy" className="transition hover:text-white/60">Privacy Policy</Link>
            <Link to="/terms" className="transition hover:text-white/60">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */
export default function Home() {
  return (
    <div className="bg-[#0a0a0f]">
      <Nav />
      <Hero />
      <TrustStrip />
      <WhatWeBuild />
      <FeaturedWork />
      <LiveProof />
      <Services />
      <WhyTrysonvex />
      <Process />
      <Pricing />
      <About />
      <OwnerPanel />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
      <AiAssistant />
    </div>
  );
}
