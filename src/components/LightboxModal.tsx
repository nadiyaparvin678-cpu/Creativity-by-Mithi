import { useEffect } from 'react';
import { X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';
import { getWhatsAppUrl, getTelUrl, createItemInquiryMessage, WHATSAPP_CONFIG } from '../utils/whatsapp';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenOrderModal: () => void;
}

export default function LightboxModal({ item, onClose, onOpenOrderModal }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const inquiryText = createItemInquiryMessage(item.title, item.categoryLabel);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-rose-100 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container */}
        <div className="md:w-1/2 bg-stone-950 flex items-center justify-center relative min-h-[260px] md:min-h-full">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[500px]"
            referrerPolicy="no-referrer"
          />
          {item.highlight && (
            <span className="absolute bottom-3 left-3 text-[11px] font-bold bg-black/70 text-white px-2.5 py-1 rounded-md backdrop-blur-xs">
              {item.highlight}
            </span>
          )}
        </div>

        {/* Details Container */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${item.tagColor}`}>
                {item.categoryLabel}
              </span>
              <span className="text-xs text-stone-500 font-medium">{item.subtitle}</span>
            </div>

            <h3 className="font-serif font-bold text-2xl text-stone-900 leading-snug">
              {item.title}
            </h3>

            <p className="mt-3 text-stone-600 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Quick ordering tips */}
            <div className="mt-5 p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-stone-700 space-y-1.5">
              <div className="font-semibold text-[#8B3A4A] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Customization & Orders</span>
              </div>
              <p className="text-[11px] text-stone-600">
                You can customize flavor, tier size, color palette, and custom name toppers by sending your details directly on WhatsApp.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 mt-4 border-t border-stone-100 space-y-2.5">
            <a
              href={getWhatsAppUrl(inquiryText)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire on WhatsApp ({WHATSAPP_CONFIG.formattedDisplay})</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenOrderModal();
                }}
                className="py-2.5 px-3 rounded-xl bg-[#8B3A4A] hover:bg-[#732f3c] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Order</span>
              </button>

              <a
                href={getTelUrl()}
                className="py-2.5 px-3 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-stone-600" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
