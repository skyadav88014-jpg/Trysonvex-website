import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-5 py-4">
          <Link to="/"><ArrowLeft className="h-4 w-4 text-white/60" /></Link>
          <BrandLogo compact />
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-white/40">Last updated: August 2026</p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/60">
          <section>
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p className="mt-2">TRYSONVEX may collect information you voluntarily provide through our contact form or WhatsApp, including your name, business name, phone number, and project details. We do not collect sensitive personal data without your consent.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">2. How We Use Your Information</h2>
            <p className="mt-2">Information you share is used solely to respond to your enquiry, discuss your project, and provide website design and development services. We do not sell or share your information with third parties for marketing purposes.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">3. Cookies</h2>
            <p className="mt-2">This website does not use tracking cookies. Standard browser functionality may be used for basic site operation.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">4. Data Retention</h2>
            <p className="mt-2">We retain enquiry information only as long as needed to serve your request and complete any project work. You may request deletion of your information at any time via WhatsApp.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">5. Third-Party Links</h2>
            <p className="mt-2">This website may contain links to third-party sites such as WhatsApp and Instagram. TRYSONVEX is not responsible for the privacy practices of those platforms.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white">6. Contact</h2>
            <p className="mt-2">For any privacy-related questions, contact TRYSONVEX on WhatsApp at +91 7782026248.</p>
          </section>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-sm font-semibold text-[#D7A936]">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
