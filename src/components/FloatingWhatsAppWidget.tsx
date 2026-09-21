import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { WHATSAPP_CONFIG, getWhatsAppUrl } from '../utils/whatsapp';
import { PROFILE_DATA } from '../data/portfolioData';

interface FloatingWhatsAppWidgetProps {
  onOpenOrderModal: () => void;
}

export default function FloatingWhatsAppWidget({ onOpenOrderModal }: FloatingWhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSendPrompt = (promptText: string) => {
    window.open(getWhatsAppUrl(promptText), '_blank');
    setIsOpen(false);
  };

  const handleSendInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) {
      window.open(getWhatsAppUrl(`Assalamu Alaikum Mithila,\n\nI would like to inquire about your creative services.`), '_blank');
    } else {
      window.open(getWhatsAppUrl(`Assalamu Alaikum Mithila,\n\n${customMsg.trim()}`), '_blank');
    }
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-white shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/40">
                <img
                  src={PROFILE_DATA.avatarUrl}
                  alt="Mithila Farjana"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075E54]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight">Most Mithila Farjana</h4>
                <p className="text-[11px] text-emerald-200 font-mono">01806-914764 • Online</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/15 text-white transition-colors cursor-pointer"
              aria-label="Close chat bubble"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Bubble Area */}
          <div className="p-4 bg-[#E5DDD5]/40 space-y-3">
            <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-xs text-xs text-stone-800 space-y-1 max-w-[90%] border border-stone-100">
              <p className="font-medium text-stone-900">Assalamu Alaikum! 👋</p>
              <p className="text-stone-600">
                Welcome to my creative portfolio & Mithi's Cake & Bake. How can I help you today?
              </p>
              <p className="text-[10px] text-stone-400 text-right">Just now</p>
            </div>

            {/* Quick action chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                Quick Inquiries:
              </p>
              <button
                onClick={() =>
                  handleSendPrompt(
                    `Assalamu Alaikum Mithila,\n\nI would like to order a custom cake from Mithi's Cake & Bake. Please let me know what flavors and designs are available.`
                  )
                }
                className="w-full text-left text-xs bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 p-2.5 rounded-xl border border-stone-200/80 transition-colors shadow-2xs flex items-center justify-between"
              >
                <span>🎂 Order a Custom Cake</span>
                <span className="text-[10px] text-stone-400">→</span>
              </button>

              <button
                onClick={() =>
                  handleSendPrompt(
                    `Assalamu Alaikum Mithila,\n\nI am planning an event / Gaye Holud and would like to ask about your fruit carving and platter services.`
                  )
                }
                className="w-full text-left text-xs bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 p-2.5 rounded-xl border border-stone-200/80 transition-colors shadow-2xs flex items-center justify-between"
              >
                <span>🍉 Fruit Carving for Event</span>
                <span className="text-[10px] text-stone-400">→</span>
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full text-left text-xs bg-rose-50 hover:bg-rose-100 text-[#8B3A4A] p-2.5 rounded-xl border border-rose-200 transition-colors shadow-2xs flex items-center justify-between font-semibold"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Open Custom Order Builder</span>
                </span>
                <span className="text-[10px]">✨</span>
              </button>
            </div>
          </div>

          {/* Typing Form */}
          <form onSubmit={handleSendInput} className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type message to Mithila..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-stone-300 focus:outline-hidden focus:border-emerald-600"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors cursor-pointer shrink-0"
              aria-label="Send via WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        aria-label="Open WhatsApp Chat"
        id="floating-whatsapp-widget"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping -z-10" />

        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-xs font-bold font-mono tracking-wide">
          WhatsApp 01806914764
        </span>

        {/* Unread badge indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 border-2 border-white rounded-full text-[9px] font-bold flex items-center justify-center text-white">
          1
        </span>
      </button>
    </div>
  );
}
