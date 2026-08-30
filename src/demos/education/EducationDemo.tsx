import { useState } from 'react';
import DemoNavbar from '@/components/DemoNavbar';
import DemoFooter from '@/components/DemoFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { waLink } from '@/data/site';
import { BookOpen, GraduationCap, Users, Clock, ChevronDown, ArrowRight, ArrowLeft, Check, Award, Target, Lightbulb } from 'lucide-react';
import DemoImage from '@/components/DemoImage';
import { demoImages } from '@/data/demoImages';

const ACCENT = '#1D4ED8';
const BRAND = 'Ascend Academy';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

type Course = {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  desc: string;
  modules: string[];
  outcomes: string[];
};

const courses: Course[] = [
  { id: 1, title: 'Web Development Foundations', category: 'Technology', level: 'Beginner', duration: '12 weeks', desc: 'Learn the fundamentals of modern web development from HTML to full-stack basics.', modules: ['HTML & CSS Fundamentals', 'JavaScript Essentials', 'Responsive Design', 'Introduction to Backend', 'Building Your First Project'], outcomes: ['Build responsive websites', 'Understand core JavaScript', 'Deploy a live project'] },
  { id: 2, title: 'Digital Marketing Mastery', category: 'Marketing', level: 'Intermediate', duration: '8 weeks', desc: 'Master digital marketing strategies from social media to SEO and paid ads.', modules: ['Marketing Fundamentals', 'SEO & Content', 'Social Media Strategy', 'Paid Advertising', 'Analytics & Reporting'], outcomes: ['Create marketing campaigns', 'Optimize for search engines', 'Analyze campaign performance'] },
  { id: 3, title: 'Graphic Design Professional', category: 'Design', level: 'Beginner', duration: '10 weeks', desc: 'Develop professional design skills using industry-standard tools.', modules: ['Design Principles', 'Color & Typography', 'Logo & Branding', 'Social Media Design', 'Portfolio Building'], outcomes: ['Create brand identities', 'Design social media content', 'Build a design portfolio'] },
  { id: 4, title: 'Business Communication', category: 'Business', level: 'All Levels', duration: '6 weeks', desc: 'Master professional communication for the modern workplace.', modules: ['Effective Writing', 'Presentation Skills', 'Email Etiquette', 'Negotiation Basics', 'Leadership Communication'], outcomes: ['Communicate with confidence', 'Deliver impactful presentations', 'Write professional documents'] },
  { id: 5, title: 'Data Analysis Essentials', category: 'Technology', level: 'Intermediate', duration: '14 weeks', desc: 'Learn to analyze and visualize data to drive business decisions.', modules: ['Data Fundamentals', 'Excel & Spreadsheets', 'SQL Basics', 'Data Visualization', 'Reporting & Insights'], outcomes: ['Analyze datasets', 'Create visual dashboards', 'Generate business insights'] },
  { id: 6, title: 'Photography & Editing', category: 'Creative', level: 'Beginner', duration: '8 weeks', desc: 'Master photography fundamentals and professional editing techniques.', modules: ['Camera Basics', 'Composition & Lighting', 'Portrait Photography', 'Photo Editing', 'Portfolio Creation'], outcomes: ['Shoot professional photos', 'Edit photos like a pro', 'Build a photography portfolio'] },
];

const benefits = [
  { icon: Users, title: 'Expert Instructors', desc: 'Learn from experienced professionals.' },
  { icon: BookOpen, title: 'Structured Curriculum', desc: 'Step-by-step, practical learning.' },
  { icon: Award, title: 'Certificate', desc: 'Earn a completion certificate.' },
  { icon: Clock, title: 'Flexible Schedule', desc: 'Learn at your own pace.' },
];

const process = [
  { step: '01', title: 'Enroll', desc: 'Choose your course and enroll.' },
  { step: '02', title: 'Learn', desc: 'Follow structured modules.' },
  { step: '03', title: 'Practice', desc: 'Apply skills with projects.' },
  { step: '04', title: 'Certify', desc: 'Earn your certificate.' },
];

const faqs = [
  { q: 'Are the courses online or in-person?', a: 'Our courses are designed for flexible online learning with instructor support.' },
  { q: 'Do I get a certificate?', a: 'Yes, you receive a completion certificate after finishing all modules.' },
  { q: 'What if I am a complete beginner?', a: 'We have beginner-friendly courses with no prerequisites.' },
  { q: 'How long do I have access?', a: 'You get lifetime access to course materials after enrollment.' },
];

export default function EducationDemo() {
  const [selected, setSelected] = useState<Course | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (selected) {
    return (
      <div className="min-h-screen bg-[#f5f7fb]">
        <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Enquire" onCta={() => setEnquiryOpen(true)} />
        <div className="mx-auto max-w-4xl px-5 py-10">
          <button onClick={() => setSelected(null)} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </button>

          <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white md:p-12">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{selected.category} · {selected.level}</span>
            <h1 className="mt-4 text-3xl font-black md:text-4xl">{selected.title}</h1>
            <p className="mt-3 text-white/80">{selected.desc}</p>
            <div className="mt-6 flex gap-6 text-sm">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {selected.duration}</span>
              <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {selected.modules.length} Modules</span>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-gray-900">Course Modules</h2>
              <div className="mt-4 space-y-3">
                {selected.modules.map((m, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">{i + 1}</span>
                    <span className="font-semibold text-gray-900">{m}</span>
                  </div>
                ))}
              </div>

              <h2 className="mt-8 text-xl font-bold text-gray-900">What You Will Learn</h2>
              <div className="mt-4 space-y-2">
                {selected.outcomes.map((o) => (
                  <div key={o} className="flex items-center gap-2 text-gray-700"><Check className="h-5 w-5 text-blue-600" /> {o}</div>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900">Enroll in this Course</h3>
                <p className="mt-2 text-sm text-gray-500">Send an enquiry and we will get back to you on WhatsApp.</p>
                <a href={waLink(`Hi, I would like to enroll in ${selected.title} at Ascend Academy.`)} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white" style={{ background: ACCENT }}>
                  Enroll Now
                </a>
                <a href={waLink('Hi, I have a question about a course at Ascend Academy.')} target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        <DemoFooter brand={BRAND} accent={ACCENT} />
        <FloatingWhatsApp message="Hi, I found Ascend Academy (TRYSONVEX demo) and have a question about a course." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <DemoNavbar brand={BRAND} accent={ACCENT} links={navLinks} ctaLabel="Enquire" onCta={() => setEnquiryOpen(true)} category="EDUCATION & COACHING" />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden py-20 md:py-28">
        <DemoImage src={demoImages.education.images.hero} alt="Modern classroom" className="absolute inset-0 h-full w-full" fallbackGradient="from-blue-700 to-blue-900" eager />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-950/90" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-white">TRYSONVEX DEMO CONCEPT</span>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">Learn. Grow. Ascend.</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">Practical, career-focused courses designed to help you build real skills and move forward.</p>
          <a href="#courses" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-900 transition hover:bg-blue-50">
            Explore Courses <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600">OUR PROGRAMS</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Choose Your Path</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {['Technology', 'Marketing', 'Design', 'Business'].map((cat) => (
              <div key={cat} className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100"><GraduationCap className="h-7 w-7 text-blue-600" /></div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{cat}</h3>
                <p className="mt-1 text-sm text-gray-400">Courses available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-blue-50/30 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600">COURSES</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Featured Courses</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <div key={c.id} onClick={() => setSelected(c)} className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:shadow-lg">
                <DemoImage src={demoImages.education.images.gallery[(c.id - 1) % demoImages.education.images.gallery.length]} alt={c.title} className="aspect-[16/10] w-full" fallbackGradient="from-blue-100 to-blue-200" />
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">{c.category}</span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">{c.level}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-gray-400 line-clamp-2">{c.desc}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration}</span>
                    <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {c.modules.length} modules</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    View Course <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600">WHY ASCEND</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Benefits of Learning With Us</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-gray-100 bg-white p-6 text-center">
                <b.icon className="mx-auto h-10 w-10 text-blue-600" />
                <h3 className="mt-4 font-bold text-gray-900">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="bg-blue-50/30 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600">LEARNING PROCESS</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">How It Works</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-gray-100 bg-white p-6">
                <span className="text-4xl font-black text-blue-100">{p.step}</span>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-blue-600">ABOUT ASCEND ACADEMY</p>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Practical Learning for Real Growth</h2>
              <p className="mt-4 text-gray-600">Ascend Academy is a demo concept by TRYSONVEX showcasing how a coaching and education website can present programs, courses with detail pages, benefits, and a learning process — all in a clean, professional design.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-blue-50 p-6 text-center"><Target className="mx-auto h-8 w-8 text-blue-600" /><p className="mt-2 text-3xl font-black text-gray-900">Demo</p><p className="text-sm text-gray-400">Courses</p></div>
              <div className="rounded-2xl bg-blue-50 p-6 text-center"><Lightbulb className="mx-auto h-8 w-8 text-blue-600" /><p className="mt-2 text-3xl font-black text-gray-900">Demo</p><p className="text-sm text-gray-400">Students</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-blue-50/30 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600">FAQ</p>
            <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">Questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-blue-600 transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-gray-600">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-center text-white md:p-16">
            <h2 className="text-3xl font-black md:text-4xl">Ready to Start Learning?</h2>
            <p className="mt-4 text-white/80">Send an enquiry and begin your learning journey.</p>
            <a href={waLink('Hi, I would like to enroll at Ascend Academy.')} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition hover:brightness-110">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <DemoFooter brand={BRAND} accent={ACCENT} />
      <FloatingWhatsApp message="Hi, I found Ascend Academy (TRYSONVEX demo) and would like to enroll." />

      {enquiryOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-5" onClick={() => setEnquiryOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-white p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-black text-gray-900">Course Enquiry</h3>
            <div className="mt-6 space-y-3">
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none" placeholder="Your Name" />
              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none" placeholder="Phone" />
              <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none">
                <option>Select Course</option>
                {courses.map((c) => <option key={c.id}>{c.title}</option>)}
              </select>
            </div>
            <a href={waLink('Hi, I would like to enroll at Ascend Academy.')} target="_blank" rel="noopener noreferrer"
              onClick={() => setEnquiryOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white" style={{ background: ACCENT }}>
              Send via WhatsApp
            </a>
            <button onClick={() => setEnquiryOpen(false)} className="mt-2 w-full text-sm text-gray-400">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
