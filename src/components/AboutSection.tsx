import { GraduationCap, Sparkles, Heart, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { WHATSAPP_CONFIG, getWhatsAppUrl, getTelUrl } from '../utils/whatsapp';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-rose-50/70 via-white to-amber-50/50 rounded-3xl p-6 sm:p-12 border border-rose-100 shadow-sm">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B3A4A] bg-rose-100/90 px-3 py-1 rounded-full">
            About Most Mithila Farjana
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
            Academics, Creative Entrepreneurship & Vision
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            As an Honours 3rd Year student, I believe education and creative execution go hand-in-hand. Over the years, I have nurtured a multifaceted portfolio encompassing <strong>Mithi's Cake & Bake</strong>, handmade acrylic paintings, celebratory fruit carving platters, and traditional hand-print fashion pieces.
          </p>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            I continuously expand my horizon by mastering contemporary digital tools—leveraging Artificial Intelligence for design brainstorming, refining product photography, and editing engaging video reels. Every creation is guided by dedication, precision, and heartfelt care for clients across Sirajganj and beyond.
          </p>

          {/* Key Stat / Highlights */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-rose-100/80 shadow-2xs">
              <GraduationCap className="w-5 h-5 text-[#8B3A4A] mx-auto mb-1.5" />
              <div className="font-bold text-stone-900 text-sm">Honours 3rd Year</div>
              <div className="text-[11px] text-stone-500">Academic Focus</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-rose-100/80 shadow-2xs">
              <Sparkles className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
              <div className="font-bold text-stone-900 text-sm">Mithi's Cake</div>
              <div className="text-[11px] text-stone-500">Baking Venture</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-rose-100/80 shadow-2xs">
              <Heart className="w-5 h-5 text-rose-600 mx-auto mb-1.5" />
              <div className="font-bold text-stone-900 text-sm">Hand-Crafts</div>
              <div className="text-[11px] text-stone-500">Painting & Carving</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-rose-100/80 shadow-2xs">
              <MapPin className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
              <div className="font-bold text-stone-900 text-sm">Sirajganj</div>
              <div className="text-[11px] text-stone-500">Rajshahi Division</div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl(
                `Assalamu Alaikum Mithila,\n\nI read your about profile and would love to discuss a creative collaboration / order.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp ({WHATSAPP_CONFIG.formattedDisplay})</span>
            </a>

            <a
              href={getTelUrl()}
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 text-xs sm:text-sm font-medium px-4 py-3 rounded-xl transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 01806914764</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
