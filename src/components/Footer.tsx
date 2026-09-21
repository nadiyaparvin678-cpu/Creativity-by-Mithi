import { MessageCircle, Phone, MapPin, Heart } from 'lucide-react';
import { WHATSAPP_CONFIG, getWhatsAppUrl, getTelUrl } from '../utils/whatsapp';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-rose-300/40">
                <img
                  src={PROFILE_DATA.avatarUrl}
                  alt="Most Mithila Farjana"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-lg">
                  Most Mithila Farjana
                </h3>
                <p className="text-xs text-rose-300">
                  Honours 3rd Year Student • Creative Entrepreneur
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 max-w-md leading-relaxed">
              Founder of <strong>Mithi's Cake & Bake</strong> in Sirajganj. Specializing in custom designer cakes, celebratory fruit carvings, traditional hand-print fashion, acrylic art, and creative media editing.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Sirajganj, Rajshahi Division, Bangladesh</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home / Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Mithila
                </a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-white transition-colors">
                  Mithi's Cake & Bake
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Creative Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio & Creations
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Orders
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp Direct */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Direct Contact
            </h4>
            <p className="text-xs text-stone-400">
              Inquire or book directly via WhatsApp:
            </p>

            <a
              href={getWhatsAppUrl(`Assalamu Alaikum Mithila,\n\nI would like to order / ask about your creative services.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="font-mono">{WHATSAPP_CONFIG.formattedDisplay}</span>
            </a>

            <div className="pt-1">
              <a
                href={getTelUrl()}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {WHATSAPP_CONFIG.formattedDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© {new Date().getFullYear()} Most Mithila Farjana. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in Sirajganj, Bangladesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
