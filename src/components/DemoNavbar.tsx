import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

type NavLink = { label: string; href: string };

export default function DemoNavbar({
  brand,
  accent,
  links,
  ctaLabel = 'Book Now',
  ctaHref,
  onCta,
  category,
}: {
  brand: string;
  accent: string;
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  onCta?: () => void;
  category?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <BrandLogo compact />
          <span className="hidden text-white/30 sm:inline">/</span>
          <span className="hidden text-sm font-semibold text-white/80 sm:inline">{brand}</span>
          {category && (
            <span className="hidden rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white/60 lg:inline-block">
              {category}
            </span>
          )}
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/" className="flex items-center gap-1 text-xs text-white/50 transition hover:text-white">
            <ArrowLeft className="h-3 w-3" /> TRYSONVEX
          </Link>
          <button
            onClick={onCta}
            className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
            style={{ background: accent }}
          >
            {ctaLabel}
          </button>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/90 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <Link to="/" className="flex items-center gap-1 text-xs text-white/50">
              <ArrowLeft className="h-3 w-3" /> Back to TRYSONVEX
            </Link>
            <button
              onClick={() => { setOpen(false); onCta?.(); }}
              className="mt-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ background: accent }}
            >
              {ctaLabel}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
