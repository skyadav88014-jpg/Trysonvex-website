import { Link } from 'react-router-dom';

export default function BrandLogo({ to = '/', compact = false }: { to?: string; compact?: boolean }) {
  return (
    <Link to={to} className="inline-flex items-center gap-2.5 text-white" aria-label="TRYSONVEX home">
      <svg width="34" height="34" viewBox="0 0 42 42" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id="goldMark" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#fff0a8" /><stop offset="0.42" stopColor="#D7A936" /><stop offset="1" stopColor="#9b6a0d" /></linearGradient>
        </defs>
        <circle cx="21" cy="21" r="19.5" fill="#08090b" stroke="#24262a" />
        <path d="M10 10h21l-4.7 5.3h-5v12.6l-4.1 4.2V15.3h-4.2z" fill="url(#goldMark)" />
        <path d="M25.3 16.5h6.2l-2.7 3h-3.1c-2.2 0-3.5.7-3.5 2s1.3 1.8 3.5 1.8h2.7l-3.8 3.3h-2.7c-4.3 0-6.6-1.8-6.6-4.9 0-3.5 2.8-5.2 10-5.2z" fill="#f4f5f7" />
        <path d="M8 25.5a16 16 0 0 0 26-14" fill="none" stroke="#f3f4f6" strokeWidth="1.1" />
        <path d="M11 31a16 16 0 0 0 23-7" fill="none" stroke="#D7A936" strokeWidth="1.1" />
      </svg>
      <span className="leading-none">
        <span className="block text-[17px] font-black tracking-[-0.06em]">TRY<span className="text-[#D7A936]">SONVEX</span></span>
        {!compact && <span className="mt-1 block text-[7px] font-semibold tracking-[0.28em] text-white/55">BUILD PREMIUM. GROW FASTER.</span>}
      </span>
    </Link>
  );
}
