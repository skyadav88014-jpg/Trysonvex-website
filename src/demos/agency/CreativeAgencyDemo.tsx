import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { waLink } from '@/data/site';
import { ArrowRight, ArrowLeft, ChevronDown, Sparkles, Layers, Code, Palette, Zap, Globe, Check } from 'lucide-react';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';

const ACCENT = '#10B981';
const BRAND = 'Nova Studio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { icon: Palette, title: 'Brand Identity', desc: 'Logos, visual systems, and brand guidelines that define who you are.' },
  { icon: Layers, title: 'UI/UX Design', desc: 'Interfaces designed for clarity, beauty, and effortless interaction.' },
  { icon: Code, title: 'Web Development', desc: 'Fast, modern, and scalable websites built with current technology.' },
  { icon: Sparkles, title: 'Motion & Interaction', desc: 'Micro-animations and transitions that bring interfaces to life.' },
  { icon: Globe, title: 'Digital Strategy', desc: 'Research-led direction that aligns design with business goals.' },
  { icon: Zap, title: 'Creative Direction', desc: 'A cohesive visual language across every touchpoint.' },
];

const projects = [
  { title: 'Project Aurora', category: 'Web Experience', desc: 'An immersive scrolling experience for a technology brand.' },
  { title: 'Project Helix', category: 'Brand Identity', desc: 'A complete visual system for a wellness startup.' },
  { title: 'Project Nexus', category: 'Product Design', desc: 'A dashboard interface for a data analytics platform.' },
  { title: 'Project Vertex', category: 'Web Development', desc: 'A futuristic portfolio for a creative collective.' },
];

const process = [
  { num: '01', title: 'Research', desc: 'We study the brand, audience, and goals.' },
  { num: '02', title: 'Concept', desc: 'We explore visual directions and ideas.' },
  { num: '03', title: 'Design', desc: 'We craft the interface and interactions.' },
  { num: '04', title: 'Build', desc: 'We develop with modern technology.' },
  { num: '05', title: 'Launch', desc: 'We deploy and refine the final product.' },
];

const capabilities = ['Brand Strategy', 'Visual Identity', 'UI Design', 'UX Research', 'Prototyping', 'Web Development', 'Motion Design', 'Creative Direction', 'Art Direction', 'Design Systems'];

const faqs = [
  { q: 'What kind of projects do you take on?', a: 'We work on brand identity, web design, product design, and creative direction projects for ambitious brands.' },
  { q: 'Do you work with startups?', a: 'Yes. We work with both startups and established brands looking for a premium creative partner.' },
  { q: 'What is your typical timeline?', a: 'Timelines vary by scope. Brand projects typically take 3-6 weeks, while web experiences take 4-8 weeks.' },
  { q: 'Can you handle both design and development?', a: 'Yes. We offer end-to-end service from concept and design through development and launch.' },
];

export default function CreativeAgencyDemo() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Get in Touch" onCta={() => setContactOpen(true)} category="CREATIVE AGENCY" />

      {/* Hero — experimental layout */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <DemoImage src={demoImages['creative-agency'].images.hero} alt="Creative studio workspace" className="absolute inset-0 h-full w-full" fallbackGradient="from-[#050608] via-[#0a1410] to-[#050608]" eager />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050608]/90 via-[#0a1410]/85 to-[#050608]/90" />
        <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-emerald-500" />
            <span className="text-xs font-semibold tracking-[0.3em] text-emerald-400">TRYSONVEX DEMO CONCEPT</span>
          </div>
          <h1 className="mt-6 text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl lg:text-9xl">
            WE BUILD<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">BOLD</span> THINGS.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/50">Nova Studio is a creative agency for brands that refuse to blend in. We design and build digital experiences that are impossible to ignore.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-black transition hover:bg-emerald-400">
              View Selected Work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <button onClick={() => setContactOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10">
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-12 bg-emerald-500" />
            <span className="text-xs font-semibold tracking-[0.3em] text-emerald-400">CAPABILITIES</span>
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">What We Do.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group bg-[#050608] p-8 transition hover:bg-white/[0.03]">
                <s.icon className="h-8 w-8 text-emerald-400" />
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/40">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-12 bg-emerald-500" />
            <span className="text-xs font-semibold tracking-[0.3em] text-emerald-400">SELECTED WORK</span>
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Projects.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <div key={p.title} onClick={() => setSelectedProject(p)} className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-emerald-500/40">
                <DemoImage src={demoImages['creative-agency'].images.gallery[i % demoImages['creative-agency'].images.gallery.length]} alt={p.title} className="relative aspect-[16/10] w-full" fallbackGradient={i % 2 === 0 ? 'from-emerald-900/40 to-[#050608]' : 'from-teal-900/30 to-[#050608]'} />
                <div className="p-6">
                  <span className="text-xs font-semibold tracking-wider text-emerald-400">{p.category}</span>
                  <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/40">{p.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-400">
                    View Project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-12 bg-emerald-500" />
            <span className="text-xs font-semibold tracking-[0.3em] text-emerald-400">PROCESS</span>
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">How We Work.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p) => (
              <div key={p.num} className="bg-[#050608] p-6">
                <span className="text-3xl font-black text-emerald-500/30">{p.num}</span>
                <h3 className="mt-2 font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/40">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-emerald-500" />
                <span className="text-xs font-semibold tracking-[0.3em] text-emerald-400">ABOUT</span>
              </div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">We are a small studio with big ambition.</h2>
              <p className="mt-6 text-white/50">Nova Studio is a demo concept by TRYSONVEX showcasing a futuristic creative agency layout. We believe great design is bold, intentional, and impossible to ignore. Every project is an opportunity to create something that moves people.</p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-emerald-400">FULL CAPABILITIES</h3>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((c) => (
                  <span key={c} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-12 bg-emerald-500" />
            <span className="text-xs font-semibold tracking-[0.3em] text-emerald-400">FAQ</span>
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Questions.</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-emerald-400 transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-white/50">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            LET'S CREATE<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">SOMETHING BOLD.</span>
          </h2>
          <p className="mt-6 text-white/50">Have a project in mind? Let's talk.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button onClick={() => setContactOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-black transition hover:bg-emerald-400">
              Start a Project
            </button>
            <a href={waLink('Hi TRYSONVEX, I found Nova Studio demo and would like to start a project.')} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition hover:brightness-110">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found Nova Studio (TRYSONVEX demo) and would like to start a project." />

      {/* Project detail */}
      {selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-5" onClick={() => setSelectedProject(null)}>
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-[#0a0f0c] border border-white/10" onClick={(e) => e.stopPropagation()}>
            <DemoImage src={demoImages['creative-agency'].images.about} alt={selectedProject.title} className="aspect-video w-full" fallbackGradient="from-emerald-900/40 to-[#050608]" />
            <div className="p-8">
              <button onClick={() => setSelectedProject(null)} className="mb-4 inline-flex items-center gap-1 text-sm text-white/40 hover:text-white">
                <ArrowLeft className="h-4 w-4" /> Close
              </button>
              <span className="text-xs font-semibold tracking-wider text-emerald-400">{selectedProject.category}</span>
              <h2 className="mt-2 text-3xl font-black">{selectedProject.title}</h2>
              <p className="mt-3 text-white/50">{selectedProject.desc}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 p-4"><p className="text-xs text-white/30">Role</p><p className="mt-1 font-semibold">Design & Development</p></div>
                <div className="rounded-xl border border-white/10 p-4"><p className="text-xs text-white/30">Scope</p><p className="mt-1 font-semibold">Full Experience</p></div>
              </div>
              <div className="mt-6 space-y-2">
                {['Research & strategy', 'Visual concept', 'Interface design', 'Development & launch'].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-white/60"><Check className="h-4 w-4 text-emerald-400" /> {s}</div>
                ))}
              </div>
              <a href={waLink('Hi TRYSONVEX, I found Nova Studio demo and would like to discuss a project.')} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-emerald-400">
                Start a Similar Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact modal */}
      {contactOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-5" onClick={() => setContactOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-[#0a0f0c] border border-white/10 p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-black text-white">Start a Project</h3>
            <p className="mt-1 text-sm text-white/50">Tell us about your project and we will respond on WhatsApp.</p>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none" placeholder="Your Name" />
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none" placeholder="Phone" />
              <input className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none" placeholder="Project Type" />
              <textarea className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none" rows={3} placeholder="Project Details" />
            </div>
            <a href={waLink('Hi TRYSONVEX, I found Nova Studio demo and would like to start a project.')} target="_blank" rel="noopener noreferrer"
              onClick={() => setContactOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-emerald-400">
              Send via WhatsApp
            </a>
            <button onClick={() => setContactOpen(false)} className="mt-2 w-full text-sm text-white/40">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
