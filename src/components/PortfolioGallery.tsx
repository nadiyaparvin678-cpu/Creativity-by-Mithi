import { useState } from 'react';
import { MessageCircle, Eye, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { getWhatsAppUrl, createItemInquiryMessage, WHATSAPP_CONFIG } from '../utils/whatsapp';

interface PortfolioGalleryProps {
  onSelectItem: (item: PortfolioItem) => void;
}

export default function PortfolioGallery({ onSelectItem }: PortfolioGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cakes' | 'crafts' | 'carving'>('all');

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white/60 border-t border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B3A4A] bg-rose-100/80 px-3 py-1 rounded-full">
            Signature Showcase
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Handcrafted Creations & Masterpieces
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Explore authentic baked creations from Mithi's Cake & Bake, hand-carved celebration platters, and original acrylic artworks.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Creations (8)' },
            { id: 'cakes', label: 'Cake & Bake (4)' },
            { id: 'carving', label: 'Fruit & Holud Platter (2)' },
            { id: 'crafts', label: 'Art & Craft (2)' },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#8B3A4A] text-white shadow-md scale-102'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const inquiryText = createItemInquiryMessage(item.title, item.categoryLabel);
            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-rose-100/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Top highlight badge */}
                  {item.highlight && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider bg-black/65 backdrop-blur-sm text-white px-2 py-0.5 rounded-full shadow-xs">
                      {item.highlight}
                    </span>
                  )}

                  {/* Category Pill */}
                  <span
                    className={`absolute bottom-3 right-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm ${item.tagColor}`}
                  >
                    {item.categoryLabel}
                  </span>

                  {/* Hover Quick Overlay */}
                  <button
                    onClick={() => onSelectItem(item)}
                    className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold cursor-pointer"
                    aria-label="View Details"
                  >
                    <div className="bg-white text-stone-900 px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Closer</span>
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-rose-700 uppercase tracking-wider mb-1">
                      {item.subtitle}
                    </p>
                    <h3 className="font-serif font-bold text-base text-stone-900 leading-snug group-hover:text-[#8B3A4A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* WhatsApp Action Button */}
                  <div className="pt-4 mt-3 border-t border-stone-100 flex items-center gap-2">
                    <a
                      href={getWhatsAppUrl(inquiryText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-2.5 px-3 rounded-xl shadow-xs transition-colors"
                      title={`Order or ask about ${item.title} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
                      <span className="truncate">Inquire on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onSelectItem(item)}
                      className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors shrink-0"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500">
            Need custom colors, flavors, or personalized names? Send a photo or idea directly to WhatsApp:
            <a
              href={getWhatsAppUrl(
                `Assalamu Alaikum Mithila,\n\nI have a photo / custom design reference for a cake / craft order. Please take a look!`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1.5 font-semibold text-emerald-700 hover:underline"
            >
              {WHATSAPP_CONFIG.formattedDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
