import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function DemoFooter({ brand, accent }: { brand: string; accent: string }) {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3"><BrandLogo compact /><span className="text-white/30">/</span><span className="text-lg font-bold text-white">{brand}</span></div>
          <p className="max-w-md text-sm text-white/40">
            This is a demo concept created by TRYSONVEX to demonstrate the kind of website we can build for your business.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to TRYSONVEX
          </Link>
        </div>
      </div>
    </footer>
  );
}
