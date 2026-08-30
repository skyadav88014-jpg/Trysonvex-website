import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-5 py-4">
          <Link to="/"><ArrowLeft className="h-4 w-4 text-white/60" /></Link>
          <BrandLogo compact />
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-white/40">Last updated: August 2026</p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/60">
          <section>
            <h2 className="text-lg font-bold text-white">1. Services</h2>
            <p className="mt-2">TRYSONVEX provides professional website design and development services. The scope of each project is agreed upon individually before work begins.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">2. Demo Content</h2>
            <p className="mt-2">All demo websites shown on this site are concept demonstrations created by TRYSONVEX. They are not real client websites unless explicitly stated. Demo businesses, names, and content are fictional.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">3. Pricing</h2>
            <p className="mt-2">Pricing depends on project scope and requirements. Quotes are provided after understanding your needs. No prices listed on this website are final until confirmed in writing.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">4. Client Responsibilities</h2>
            <p className="mt-2">Clients are responsible for providing accurate content, timely feedback, and necessary access to accounts or platforms required for the project.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">5. Intellectual Property</h2>
            <p className="mt-2">Upon full payment, the client receives ownership of the final website design. TRYSONVEX may display the completed work in its portfolio unless otherwise agreed.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">6. No Warranties</h2>
            <p className="mt-2">TRYSONVEX provides services on a best-effort basis. We do not guarantee specific business results, revenue, search rankings, or customer conversions.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">7. Contact</h2>
            <p className="mt-2">For questions about these terms, contact TRYSONVEX on WhatsApp at +91 7782026248.</p>
          </section>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-sm font-semibold text-[#D7A936]">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
