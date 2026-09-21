import { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, Copy, Check } from 'lucide-react';
import { WHATSAPP_CONFIG, getWhatsAppUrl, getTelUrl, createGeneralInquiryMessage } from '../utils/whatsapp';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(WHATSAPP_CONFIG.rawNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-rose-100 shadow-[0_2px_15px_rgba(139,58,74,0.04)]">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-rose-900 via-[#8B3A4A] to-rose-900 text-rose-50 text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>WhatsApp Orders & Inquiries Open: <strong>{WHATSAPP_CONFIG.formattedDisplay}</strong></span>
        </span>
        <button
          onClick={handleCopyNumber}
          className="inline-flex items-center gap-1 text-[11px] bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded transition-colors text-white"
          title="Copy phone number"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-rose-300/80 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img
              src={PROFILE_DATA.avatarUrl}
              alt="Most Mithila Farjana"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-lg text-stone-900 tracking-tight group-hover:text-[#8B3A4A] transition-colors">
                Mithila Farjana
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider bg-rose-100 text-[#8B3A4A] px-1.5 py-0.5 rounded">
                Portfolio
              </span>
            </div>
            <p className="text-xs text-stone-500 font-medium">Mithi's Cake & Bake • Sirajganj</p>
          </div>
        </a>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
          <a href="#about" className="hover:text-[#8B3A4A] transition-colors">
            About
          </a>
          <a href="#cakes" className="hover:text-[#8B3A4A] transition-colors flex items-center gap-1">
            <span>Mithi's Cake</span>
            <span className="text-xs text-rose-500">🎂</span>
          </a>
          <a href="#skills" className="hover:text-[#8B3A4A] transition-colors">
            Skills
          </a>
          <a href="#portfolio" className="hover:text-[#8B3A4A] transition-colors">
            Creations
          </a>
          <a href="#contact" className="hover:text-[#8B3A4A] transition-colors">
            Contact
          </a>
        </div>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Order Modal Trigger */}
          <button
            onClick={onOpenOrderModal}
            className="text-xs font-semibold px-3.5 py-2 rounded-full border border-rose-300 text-[#8B3A4A] hover:bg-rose-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Custom Order</span>
          </button>

          {/* Direct Phone Call */}
          <a
            href={getTelUrl()}
            className="p-2 rounded-full border border-stone-200 text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            title="Call 01806914764"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Primary WhatsApp Button */}
          <a
            href={getWhatsAppUrl(createGeneralInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
            id="nav-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
            <span className="hidden lg:inline text-[11px] bg-white/20 px-1.5 py-0.5 rounded font-mono">
              01806914764
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={getWhatsAppUrl(createGeneralInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#25D366] text-white rounded-full shadow-xs"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-rose-50/60"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-rose-100 bg-[#FFFDF9] px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-rose-50"
            >
              About Mithila
            </a>
            <a
              href="#cakes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-rose-50 flex items-center justify-between"
            >
              <span>Mithi's Cake & Bake</span>
              <span className="text-xs bg-rose-100 text-[#8B3A4A] px-2 py-0.5 rounded-full">Bakery</span>
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-rose-50"
            >
              Creative Skills
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-rose-50"
            >
              Showcase & Creations
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-rose-50"
            >
              Contact & Location
            </a>
          </div>

          <div className="pt-2 border-t border-stone-200/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-2.5 px-4 text-center rounded-xl bg-rose-100 text-[#8B3A4A] font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Build Custom Order</span>
            </button>

            <a
              href={getWhatsAppUrl(createGeneralInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center rounded-xl bg-[#25D366] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp (01806914764)</span>
            </a>

            <a
              href={getTelUrl()}
              className="w-full py-2 px-4 text-center rounded-xl border border-stone-300 text-stone-700 font-medium text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Call: 01806914764</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
