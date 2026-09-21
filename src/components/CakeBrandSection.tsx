import { Sparkles, MessageCircle, CheckCircle2, Heart, Award, Clock } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { WHATSAPP_CONFIG, getWhatsAppUrl, createCakeOrderMessage } from '../utils/whatsapp';

interface CakeBrandSectionProps {
  onOpenOrderModal: () => void;
}

export default function CakeBrandSection({ onOpenOrderModal }: CakeBrandSectionProps) {
  const highlights = [
    {
      icon: <Sparkles className="w-4 h-4 text-rose-600" />,
      title: '100% Homemade & Freshly Baked',
      desc: 'No stale storage. Baked fresh for your specific event date with pure butter and premium ingredients.',
    },
    {
      icon: <Heart className="w-4 h-4 text-rose-600" />,
      title: 'Customized 3D & Character Themes',
      desc: 'From Spider-Man and safari jungle tracks to sophisticated gold drip cakes and wedding banquets.',
    },
    {
      icon: <Award className="w-4 h-4 text-rose-600" />,
      title: 'Artisanal Flavors & Fillings',
      desc: 'Rich dark chocolate ganache, vanilla buttercream, red velvet, strawberry cream, and customized fruit compotes.',
    },
    {
      icon: <Clock className="w-4 h-4 text-rose-600" />,
      title: 'Direct WhatsApp Booking in Sirajganj',
      desc: 'Seamless booking on 01806914764. Confirm flavor, weight, delivery date, and customized topper name.',
    },
  ];

  return (
    <section id="cakes" className="py-16 md:py-20 bg-gradient-to-b from-rose-50/40 via-white to-amber-50/20 border-y border-rose-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B3A4A] bg-rose-100/80 px-3 py-1 rounded-full">
            Artisanal Home Bakery
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Mithi's Cake & Bake
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Fresh, yummy, and delicious customized cakes baked with love and artistic care in Sirajganj.
          </p>
        </div>

        {/* Brand Card & Details */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-rose-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Logo Image Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-md border-4 border-rose-100/80 bg-rose-50/30 p-2">
                <img
                  src={PROFILE_DATA.brandLogoUrl}
                  alt="Mithi's Cake & Bake Official Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#8B3A4A] bg-rose-50 px-3 py-1.5 rounded-full border border-rose-200/60">
                <span>Sirajganj, Bangladesh</span>
                <span>•</span>
                <span>WhatsApp: {WHATSAPP_CONFIG.formattedDisplay}</span>
              </div>
            </div>

            {/* Content & Quality Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Every Celebration Deserves a Sweet Work of Art
                </h3>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  At <strong>Mithi's Cake & Bake</strong>, each cake is tailored to your unique celebration. Whether it's a child's milestone birthday with their favorite character, an elegant wedding reception, or an intimate family anniversary, we craft cakes that taste as memorable as they look.
                </p>
              </div>

              {/* Grid of features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FFFDF9] border border-rose-100/80 hover:border-rose-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5 font-bold text-stone-900 text-sm">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons for Cake Booking */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getWhatsAppUrl(createCakeOrderMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order Cake via WhatsApp ({WHATSAPP_CONFIG.formattedDisplay})</span>
                </a>

                <button
                  onClick={onOpenOrderModal}
                  className="inline-flex items-center justify-center gap-2 bg-[#8B3A4A] hover:bg-[#732f3c] text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Custom Order Form</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
