import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MessageCircle, Menu, X, ExternalLink, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { demos, waLink } from '@/data/site';
import { demoImages } from '@/data/demoImages';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AiAssistant from '@/components/AiAssistant';
import BrandLogo from '@/components/BrandLogo';
import DemoImage from '@/components/DemoImage';

const filters = ['ALL', 'HEALTHCARE', 'FITNESS', 'FOOD', 'HOSPITALITY', 'PROPERTY', 'SHOPPING', 'BEAUTY', 'EDUCATION', 'BUSINESS'] as const;
const demoFilter: Record<string, string> = {
  dental: 'HEALTHCARE',
  gym: 'FITNESS',
  restaurant: 'FOOD',
  hotel: 'HOSPITALITY',
  'real-estate': 'PROPERTY',
  ecommerce: 'SHOPPING',
  salon: 'BEAUTY',
  education: 'EDUCATION',
  'creative-agency': 'BUSINESS',
  'local-business': 'BUSINESS',
};

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

const proofPoints = [
  'Professional UI/UX',
  'Responsive mobile design',
  'E-commerce interface',
  'Modern website development',
  'Interactive user experience',
  'Production-style website structure',
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<(typeof filters)[number]>('ALL');
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const visible = active === 'ALL' ? demos : demos.filter((d) => demoFilter[d.slug] === active);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <header className={`sticky top-0 z-50 w-full transition-all ${scrolled ? 'border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3"><ArrowLeft className="h-4 w-4 text-white/60" /><BrandLogo compact /></div>
          <div className="hidden md:block">
            <a href={waLink('Hi TRYSONVEX, I would like to discuss a website.')} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>
          <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-[#0a0a0f]/95 px-5 py-4 md:hidden">
            <a href={waLink('Hi TRYSONVEX')} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>
        )}
      </header>

      {/* Live proof project */}
      <section className="mx-auto max-w-7xl px-5 pt-16">
        <div className="overflow-hidden rounded-3xl border border-[#D7A936]/25 bg-gradient-to-br from-[#D7A936]/10 via-white/[0.03] to-transparent">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden bg-[#111118] lg:min-h-[420px]">
              <DemoImage src={demoImages.ecommerce.images.hero} alt="Nisha Kids Wear e-commerce website" className="absolute inset-0 h-full w-full" fallbackGradient="from-[#D7A936]/20 via-[#0a0a0f] to-[#3B82F6]/15" eager />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-[#111118]/40 to-transparent" />
              <div className="absolute right-4 top-4 rounded-full bg-[#D7A936] px-3 py-1 text-[10px] font-bold tracking-wider text-black">BUILT BY TRYSONVEX</div>
            </div>
            <div className="p-7 sm:p-10">
              <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">DEMO PROJECT · BUILT BY TRYSONVEX</p>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">NISHA KIDS WEAR</h2>
              <p className="mt-4 text-sm text-white/60">An e-commerce website concept built to demonstrate TRYSONVEX's design, development, responsive UI and digital experience capabilities.</p>
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {proofPoints.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-white/75"><Check className="h-4 w-4 shrink-0 text-[#D7A936]" /> {p}</div>
                ))}
              </div>
              <a href="https://nishakidswear.lovable.app" target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D7A936] px-6 py-3 text-sm font-bold text-black transition hover:brightness-110">
                View Live Demo <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-4 text-xs text-white/35">This is a demonstration project. It is not a paying client and no sales, revenue or results are claimed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold tracking-wider text-[#D7A936]">SELECTED WORK</p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">WEBSITES BUILT TO IMPRESS.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">10 complete demo experiences created by TRYSONVEX. These are demo concepts — not real clients. Click any demo to explore the full website experience.</p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition ${active === f ? 'bg-[#D7A936] text-black' : 'border border-white/15 text-white/60 hover:text-white'}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d) => (
            <Link key={d.slug} to={`/demos/${d.slug}`} className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25">
              <div className="relative aspect-[4/3] overflow-hidden">
                <DemoPreview slug={d.slug} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 text-center">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">WANT A WEBSITE LIKE ONE OF THESE?</h2>
        <p className="mt-4 text-white/50">Tell us about your business and we will build a premium website tailored to your identity and goals.</p>
        <a href={waLink('Hi TRYSONVEX, I saw your demos and would like a website.')} target="_blank" rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition hover:brightness-110">
          <MessageCircle className="h-5 w-5" /> WhatsApp Now
        </a>
      </section>

      <FloatingWhatsApp />
      <AiAssistant />
    </div>
  );
}
