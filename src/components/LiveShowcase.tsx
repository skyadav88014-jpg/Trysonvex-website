import { useState, useRef, useEffect } from 'react';

type ScreenContent = {
  brand: string;
  nav: string[];
  eyebrow: string;
  headline: string;
  cta: string;
  accent: string;
  bgGradient: string;
  cards: { title: string; subtitle: string }[];
  heroImg: string;
};

const screens: Record<string, ScreenContent> = {
  restaurant: {
    brand: 'Saffron & Smoke',
    nav: ['Home', 'Menu', 'About', 'Reserve'],
    eyebrow: 'FINE DINING',
    headline: 'A Taste of Tradition',
    cta: 'Reserve a Table',
    accent: '#B45309',
    bgGradient: 'linear-gradient(135deg, #1a1208, #2d1f0f)',
    cards: [
      { title: 'Starters', subtitle: 'Begin your journey' },
      { title: 'Main Course', subtitle: 'Chef\'s signature' },
      { title: 'Desserts', subtitle: 'Sweet endings' },
    ],
    heroImg: 'https://images.pexels.com/photos/19442296/pexels-photo-19442296.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
  },
  gym: {
    brand: 'Iron Forge',
    nav: ['Home', 'Programs', 'Membership', 'Contact'],
    eyebrow: 'STRENGTH & POWER',
    headline: 'Forge Your Best Self',
    cta: 'Join Now',
    accent: '#F97316',
    bgGradient: 'linear-gradient(135deg, #1a1208, #2d1f0f)',
    cards: [
      { title: 'Strength', subtitle: 'Build power' },
      { title: 'Cardio', subtitle: 'Endurance' },
      { title: 'HIIT', subtitle: 'Burn fast' },
    ],
    heroImg: 'https://images.pexels.com/photos/6388514/pexels-photo-6388514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
  },
  dental: {
    brand: 'Bright Smile',
    nav: ['Home', 'Services', 'Treatments', 'Book'],
    eyebrow: 'DENTAL CARE',
    headline: 'Your Best Smile Starts Here',
    cta: 'Book Appointment',
    accent: '#0EA5A4',
    bgGradient: 'linear-gradient(135deg, #042021, #0a3536)',
    cards: [
      { title: 'Cleaning', subtitle: 'Preventive care' },
      { title: 'Whitening', subtitle: 'Brighter smile' },
      { title: 'Implants', subtitle: 'Restore function' },
    ],
    heroImg: 'https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
  },
  hotel: {
    brand: 'Azure Retreat',
    nav: ['Home', 'Rooms', 'Amenities', 'Book'],
    eyebrow: 'LUXURY STAY',
    headline: 'Experience Serene Luxury',
    cta: 'Book Your Stay',
    accent: '#1E3A5F',
    bgGradient: 'linear-gradient(135deg, #0a1628, #162d4a)',
    cards: [
      { title: 'Deluxe', subtitle: 'City view' },
      { title: 'Suite', subtitle: 'Premium comfort' },
      { title: 'Penthouse', subtitle: 'Ultimate luxury' },
    ],
    heroImg: 'https://images.pexels.com/photos/15621208/pexels-photo-15621208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
  },
  realestate: {
    brand: 'Estate Atelier',
    nav: ['Home', 'Properties', 'About', 'Enquire'],
    eyebrow: 'PREMIUM PROPERTIES',
    headline: 'Find Your Dream Home',
    cta: 'View Properties',
    accent: '#0F766E',
    bgGradient: 'linear-gradient(135deg, #04201d, #0a3530)',
    cards: [
      { title: 'Villa', subtitle: '5 beds · 6 baths' },
      { title: 'Apartment', subtitle: '3 beds · 2 baths' },
      { title: 'Penthouse', subtitle: '4 beds · 3 baths' },
    ],
    heroImg: 'https://images.pexels.com/photos/8482510/pexels-photo-8482510.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
  },
  ecommerce: {
    brand: 'Lumen Store',
    nav: ['Shop', 'Collections', 'About', 'Cart'],
    eyebrow: 'NEW ARRIVALS',
    headline: 'Style Meets Quality',
    cta: 'Shop Now',
    accent: '#7C3AED',
    bgGradient: 'linear-gradient(135deg, #1a0a2e, #2d1050)',
    cards: [
      { title: 'Watches', subtitle: 'From $129' },
      { title: 'Audio', subtitle: 'From $89' },
      { title: 'Accessories', subtitle: 'From $49' },
    ],
    heroImg: 'https://images.pexels.com/photos/5650016/pexels-photo-5650016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
  },
};

function MiniWebsite({ content, scale = 1 }: { content: ScreenContent; scale?: number }) {
  return (
    <div className="h-full w-full overflow-hidden" style={{ background: content.bgGradient }}>
      {/* Nav bar */}
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${content.accent}22` }}>
        <span className="text-[10px] font-bold tracking-tight text-white" style={{ fontSize: `${10 * scale}px` }}>
          {content.brand}
        </span>
        <div className="hidden gap-2 sm:flex">
          {content.nav.map((n) => (
            <span key={n} className="text-[7px] text-white/50" style={{ fontSize: `${7 * scale}px` }}>{n}</span>
          ))}
        </div>
        <div
          className="rounded-full px-2 py-0.5 text-[7px] font-bold text-white"
          style={{ background: content.accent, fontSize: `${7 * scale}px` }}
        >
          {content.cta}
        </div>
      </div>
      {/* Hero */}
      <div className="relative px-3 py-3">
        <div
          className="mb-2 inline-block rounded-full px-2 py-0.5 text-[7px] font-bold tracking-wider text-white"
          style={{ background: `${content.accent}33`, color: content.accent, fontSize: `${7 * scale}px` }}
        >
          {content.eyebrow}
        </div>
        <h3 className="font-black leading-tight text-white" style={{ fontSize: `${14 * scale}px` }}>
          {content.headline}
        </h3>
        <div
          className="mt-2 inline-block rounded-full px-3 py-1 text-[8px] font-bold text-white"
          style={{ background: content.accent, fontSize: `${8 * scale}px` }}
        >
          {content.cta}
        </div>
        {/* Hero image */}
        <div className="mt-3 overflow-hidden rounded-lg" style={{ height: `${60 * scale}px` }}>
          <img
            src={content.heroImg}
            alt={content.brand}
            loading="eager"
            className="h-full w-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-1.5 px-3 pb-3">
        {content.cards.map((c) => (
          <div
            key={c.title}
            className="rounded-lg p-1.5"
            style={{ background: `${content.accent}11`, border: `1px solid ${content.accent}22` }}
          >
            <div className="font-bold text-white" style={{ fontSize: `${8 * scale}px` }}>{c.title}</div>
            <div className="text-white/40" style={{ fontSize: `${6 * scale}px` }}>{c.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LiveShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isHovering) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  const rotateX = mousePos.y * -8;
  const rotateY = mousePos.x * 8;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative mx-auto mt-16 h-[500px] max-w-5xl"
      style={{ perspective: '1200px' }}
    >
      {/* Gold glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D7A936]/10 blur-[100px]" />
      </div>

      {/* Desktop monitor */}
      <div
        className="absolute left-1/2 top-0 w-[80%] max-w-2xl -translate-x-1/2 transition-transform duration-200 ease-out"
        style={{
          transform: `translateX(-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="rounded-t-xl border-2 border-white/15 bg-[#111118] p-2 shadow-2xl">
          <div className="flex gap-1 px-1 py-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
            <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
            <div className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-lg bg-black">
            <MiniWebsite content={screens.restaurant} scale={1} />
          </div>
        </div>
        <div className="mx-auto h-2 w-32 rounded-b-lg bg-white/15" />
        <div className="mx-auto h-5 w-48 rounded-b-2xl bg-white/10" />
      </div>

      {/* Laptop */}
      <div
        className="absolute bottom-8 left-[2%] hidden w-[32%] max-w-xs sm:block"
        style={{
          transform: `rotateX(${rotateX * 0.6}deg) rotateY(${rotateY * 0.6}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="rounded-lg border-2 border-white/15 bg-[#111118] p-1.5 shadow-2xl">
          <div className="aspect-[16/10] overflow-hidden rounded bg-black">
            <MiniWebsite content={screens.gym} scale={0.85} />
          </div>
        </div>
        <div className="mx-auto h-1.5 w-full rounded-b-lg bg-white/15" />
      </div>

      {/* Tablet */}
      <div
        className="absolute bottom-12 right-[18%] hidden w-[20%] max-w-[180px] md:block"
        style={{
          transform: `rotateX(${rotateX * 0.4}deg) rotateY(${rotateY * 0.4}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="rounded-xl border-2 border-white/15 bg-[#111118] p-1.5 shadow-2xl">
          <div className="aspect-[4/3] overflow-hidden rounded bg-black">
            <MiniWebsite content={screens.dental} scale={0.7} />
          </div>
        </div>
      </div>

      {/* Phone */}
      <div
        className="absolute bottom-0 right-[3%] w-[16%] max-w-[130px]"
        style={{
          transform: `rotateX(${rotateX * 0.3}deg) rotateY(${rotateY * 0.3}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="rounded-[1.5rem] border-2 border-white/20 bg-[#111118] p-1 shadow-2xl">
          <div className="aspect-[9/16] overflow-hidden rounded-[1.2rem] bg-black">
            <MiniWebsite content={screens.hotel} scale={0.55} />
          </div>
        </div>
      </div>

      {/* Small phone 2 */}
      <div
        className="absolute bottom-16 left-[20%] hidden w-[14%] max-w-[110px] lg:block"
        style={{
          transform: `rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="rounded-[1.2rem] border-2 border-white/15 bg-[#111118] p-1 shadow-xl">
          <div className="aspect-[9/16] overflow-hidden rounded-[1rem] bg-black">
            <MiniWebsite content={screens.realestate} scale={0.5} />
          </div>
        </div>
      </div>

      {/* Tablet 2 */}
      <div
        className="absolute bottom-2 left-[8%] hidden w-[18%] max-w-[150px] lg:block"
        style={{
          transform: `rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="rounded-xl border-2 border-white/15 bg-[#111118] p-1 shadow-xl">
          <div className="aspect-[3/4] overflow-hidden rounded bg-black">
            <MiniWebsite content={screens.ecommerce} scale={0.6} />
          </div>
        </div>
      </div>
    </div>
  );
}
