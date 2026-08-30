import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X, Send, MessageCircle, Bot, ArrowUpRight } from 'lucide-react';
import { getAiResponse, type AiContext } from '@/data/ai';
import { waLink } from '@/data/site';

type ChatMsg = {
  role: 'user' | 'ai';
  text: string;
  demoSlug?: string;
  demoLabel?: string;
  showWhatsapp?: boolean;
  showAllDemos?: boolean;
};

const quickActions = [
  'What website do I need?',
  'Show me demos',
  'How does pricing work?',
  'How do I start?',
  'Contact TRYSONVEX',
];

const allDemos = [
  { slug: 'dental', label: 'Dental Clinic' },
  { slug: 'gym', label: 'Gym & Fitness' },
  { slug: 'restaurant', label: 'Restaurant' },
  { slug: 'hotel', label: 'Luxury Hotel' },
  { slug: 'real-estate', label: 'Real Estate' },
  { slug: 'ecommerce', label: 'E-Commerce' },
  { slug: 'salon', label: 'Salon & Beauty' },
  { slug: 'education', label: 'Education' },
  { slug: 'creative-agency', label: 'Creative Agency' },
  { slug: 'local-business', label: 'Local Business' },
];

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: 'ai', text: 'Hi! I am the TRYSONVEX AI assistant. Tell me about your business and I will suggest the right website approach. You can also ask about pricing, process, or demos.\n\nआप हिंदी, हिंग्लिश या इंग्लिश में भी पूछ सकते हैं।' },
  ]);
  const [input, setInput] = useState('');
  const [context, setContext] = useState<AiContext>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', text: msg }]);
    const { result, context: newCtx } = getAiResponse(msg, context);
    setContext(newCtx);
    setMessages((m) => [...m, {
      role: 'ai',
      text: result.text,
      demoSlug: result.demoSlug,
      demoLabel: result.demoLabel,
      showWhatsapp: result.showWhatsapp,
      showAllDemos: result.showAllDemos,
    }]);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open TRYSONVEX AI Assistant"
          className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D7A936] to-[#B8932E] px-5 py-3.5 text-black shadow-lg shadow-[#D7A936]/30 transition-transform hover:scale-105 active:scale-95"
        >
          <Bot className="h-5 w-5" />
          <span className="text-sm font-bold">ASK TRYSONVEX AI</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-5 right-5 z-[100] flex h-[520px] max-h-[calc(100vh-2.5rem)] w-[calc(100vw-2.5rem)] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#0a0a0f]/95 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D7A936]/20">
                <Sparkles className="h-5 w-5 text-[#D7A936]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">TRYSONVEX AI</p>
                <p className="text-[11px] text-white/50">Your website planning assistant</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/50 transition hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm ${m.role === 'user' ? 'bg-[#D7A936] text-black' : 'bg-white/10 text-white'}`}>
                  <p className="whitespace-pre-wrap">{m.text}</p>
                  {m.demoSlug && (
                    <Link to={`/demos/${m.demoSlug}`} onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-black/20 px-3 py-1 text-xs font-semibold text-white transition hover:bg-black/30">
                      {m.demoLabel} <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  )}
                  {m.showAllDemos && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {allDemos.map((d) => (
                        <Link key={d.slug} to={`/demos/${d.slug}`} onClick={() => setOpen(false)} className="inline-flex items-center gap-1 rounded-full bg-black/20 px-2.5 py-1 text-[11px] font-semibold text-white transition hover:bg-black/30">
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {m.showWhatsapp && (
                    <a href={waLink('Hi TRYSONVEX, I have a question about my website.')} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1 text-xs font-semibold text-white">
                      <MessageCircle className="h-3 w-3" /> WhatsApp Now
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick actions */}
          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-1.5 px-4 pb-2">
              {quickActions.map((q) => (
                <button key={q} onClick={() => send(q)} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/70 transition hover:border-[#D7A936]/40 hover:text-white">
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2 border-t border-white/10 bg-white/[0.03] px-4 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about a website... / हिंदी में पूछें... / Hinglish mein poochho..."
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#D7A936] focus:outline-none"
            />
            <button onClick={() => send()} aria-label="Send" className="inline-flex items-center justify-center rounded-full bg-[#D7A936] px-4 py-2.5 text-sm font-bold text-black transition hover:brightness-110">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

