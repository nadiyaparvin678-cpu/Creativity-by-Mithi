import { useState } from 'react';
import { MessageCircle, Phone, Copy, Check, Sparkles, MapPin, GraduationCap, Heart } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { WHATSAPP_CONFIG, getWhatsAppUrl, getTelUrl, createGeneralInquiryMessage } from '../utils/whatsapp';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export default function Hero({ onOpenOrderModal }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WHATSAPP_CONFIG.rawNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-rose-100/50 via-amber-50/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100/90 text-[#8B3A4A] border border-rose-200/60 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5" />
                {PROFILE_DATA.academicStatus}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available on WhatsApp: {WHATSAPP_CONFIG.formattedDisplay}
              </span>
            </div>

            {/* Display Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-stone-900 tracking-tight leading-[1.15]">
                Most Mithila Farjana
              </h1>
              <p className="text-base sm:text-lg text-[#8B3A4A] font-medium font-serif italic">
                {PROFILE_DATA.tagline}
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
              {PROFILE_DATA.bio}
            </p>

            {/* Location & Key Competencies */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-stone-600">
              <span className="flex items-center gap-1 bg-stone-100/90 px-2.5 py-1 rounded-md font-medium">
                <MapPin className="w-3.5 h-3.5 text-rose-700" />
                {PROFILE_DATA.location}
              </span>
              <span className="bg-stone-100/90 px-2.5 py-1 rounded-md font-medium">
                🎂 Mithi's Cake & Bake
              </span>
              <span className="bg-stone-100/90 px-2.5 py-1 rounded-md font-medium">
                🍉 Fruit Carving
              </span>
              <span className="bg-stone-100/90 px-2.5 py-1 rounded-md font-medium">
                🎨 Hand-Craft & Canvas
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* WhatsApp direct chat */}
              <a
                href={getWhatsAppUrl(createGeneralInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5 fill-white transition-transform group-hover:scale-110" />
                <span>Message on WhatsApp</span>
                <span className="text-xs bg-black/15 px-2 py-0.5 rounded font-mono">
                  {WHATSAPP_CONFIG.rawNumber}
                </span>
              </a>

              {/* Custom Order Modal */}
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B3A4A] hover:bg-[#732f3c] text-white font-semibold text-sm px-5 py-3.5 rounded-xl shadow-sm hover:shadow transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Order Custom Cake</span>
              </button>

              {/* Call button */}
              <a
                href={getTelUrl()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-medium text-sm px-4 py-3.5 rounded-xl transition-colors shadow-2xs"
                title="Call 01806914764 directly"
              >
                <Phone className="w-4 h-4 text-stone-600" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Quick copy bar */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-stone-500">
              <span>Direct WhatsApp & Call number:</span>
              <code className="font-mono font-semibold text-stone-800 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                {WHATSAPP_CONFIG.formattedDisplay}
              </code>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-xs text-[#8B3A4A] hover:underline cursor-pointer font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Portrait with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={PROFILE_DATA.avatarUrl}
                  alt="Most Mithila Farjana in Hijab"
                  className="w-full aspect-[4/5] object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom gradient overlay with name card */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-rose-200 font-semibold mb-0.5">
                    Most Mithila Farjana
                  </p>
                  <p className="font-serif font-bold text-lg leading-snug">
                    Student, Cake Artist & Creator
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-rose-100/90">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Active for orders: 01806914764</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Mithi's Cake & Bake */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-rose-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-xl">
                  🎂
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 leading-tight">Mithi's Cake & Bake</p>
                  <p className="text-[11px] text-stone-500">Fresh • Yummy • Delicious</p>
                </div>
              </div>

              {/* Floating Badge 2: WhatsApp direct indicator */}
              <a
                href={getWhatsAppUrl(createGeneralInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 -right-2 sm:-right-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl p-3 shadow-xl flex items-center gap-2.5 transition-transform hover:scale-105"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <div className="text-left pr-1">
                  <p className="text-[10px] uppercase font-semibold text-emerald-100 tracking-wider">
                    Instant Connect
                  </p>
                  <p className="text-xs font-bold font-mono">01806-914764</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
