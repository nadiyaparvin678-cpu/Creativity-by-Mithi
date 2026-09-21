import { useState } from 'react';
import { MessageCircle, Phone, MapPin, Copy, Check, QrCode, Send, Sparkles } from 'lucide-react';
import { WHATSAPP_CONFIG, getWhatsAppUrl, getTelUrl } from '../utils/whatsapp';
import { PROFILE_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenOrderModal: () => void;
}

export default function ContactSection({ onOpenOrderModal }: ContactSectionProps) {
  const [quickMsg, setQuickMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(WHATSAPP_CONFIG.rawNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSendQuick = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = quickMsg.trim()
      ? `Assalamu Alaikum Mithila,\n\n${quickMsg}\n\n— Sent from portfolio web app`
      : `Assalamu Alaikum Mithila,\n\nI visited your portfolio website and would like to connect!`;
    window.open(getWhatsAppUrl(finalMsg), '_blank');
  };

  // QR Code URL pointing to WhatsApp wa.me link
  const qrTarget = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    `https://wa.me/${WHATSAPP_CONFIG.internationalNumber}`
  )}&bgcolor=FFFFFF&color=25D366&margin=6`;

  return (
    <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B3A4A] bg-rose-100/80 px-3 py-1 rounded-full">
          Get In Touch
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Connect Directly via WhatsApp
        </h2>
        <p className="mt-2 text-stone-600 text-sm sm:text-base">
          For custom cake bookings, fruit carving platters, fabric artworks, or creative inquiries, reach out anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Cards */}
        <div className="lg:col-span-7 space-y-5">
          {/* Main WhatsApp Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/40 border-2 border-emerald-200/80 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-7 h-7 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-800">
                      Primary Channel
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold font-mono text-stone-900">
                    {WHATSAPP_CONFIG.formattedDisplay}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">WhatsApp Chat & Voice Note</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyNumber}
                  className="px-3 py-2 rounded-xl bg-white border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  title="Copy number"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Assalamu Alaikum Mithila,\n\nI would like to inquire about your cakes and creative services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Start Chat</span>
                </a>
              </div>
            </div>

            <p className="mt-4 text-xs text-stone-600 leading-relaxed pt-3 border-t border-emerald-100">
              ⚡ Fast responses for event dates, cake flavor advice, price quotations, and design confirmations.
            </p>
          </div>

          {/* Call and Location Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#8B3A4A] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-stone-900">Direct Phone Call</h4>
                <p className="text-xs font-mono font-medium text-stone-600 mt-1">
                  {WHATSAPP_CONFIG.formattedDisplay}
                </p>
                <p className="text-[11px] text-stone-500 mt-1">
                  For urgent orders or immediate event consultations.
                </p>
              </div>

              <a
                href={getTelUrl()}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B3A4A] hover:underline"
              >
                <span>Call Directly</span>
                <span>→</span>
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-stone-900">Bakery & Studio Location</h4>
                <p className="text-xs font-medium text-stone-700 mt-1">
                  {PROFILE_DATA.location}
                </p>
                <p className="text-[11px] text-stone-500 mt-1">
                  Available for pickup & local delivery across Sirajganj Sadar.
                </p>
              </div>

              <span className="mt-4 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded self-start">
                Sirajganj Delivery Available
              </span>
            </div>
          </div>

          {/* Quick Message Form that triggers WhatsApp */}
          <form onSubmit={handleSendQuick} className="p-6 rounded-3xl bg-white border border-rose-100 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#8B3A4A]" />
                <span>Send Quick Message to WhatsApp</span>
              </h4>
              <span className="text-[11px] text-stone-400 font-mono">01806-914764</span>
            </div>

            <textarea
              rows={3}
              placeholder="Type your message here (e.g. 'I need a 2-tier chocolate cake for Friday in Sirajganj')..."
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-200 focus:outline-hidden focus:border-[#8B3A4A]"
            />

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="text-xs text-[#8B3A4A] font-semibold hover:underline"
              >
                Or use structured order form
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open in WhatsApp</span>
              </button>
            </div>
          </form>
        </div>

        {/* QR Code & Direct Scan Card */}
        <div className="lg:col-span-5 bg-stone-900 text-white rounded-3xl p-7 shadow-xl border border-stone-800 flex flex-col items-center text-center space-y-5">
          <div className="p-2 rounded-2xl bg-white/10 text-emerald-400">
            <QrCode className="w-8 h-8" />
          </div>

          <div>
            <h3 className="font-serif font-bold text-xl text-white">
              Scan to Chat on Mobile
            </h3>
            <p className="text-xs text-stone-300 mt-1 max-w-xs mx-auto">
              Scan this QR code with your mobile camera or WhatsApp scanner to instantly initiate a conversation with Mithila.
            </p>
          </div>

          {/* QR Code Box */}
          <div className="p-3 bg-white rounded-2xl shadow-lg border-2 border-emerald-400">
            <img
              src={qrTarget}
              alt="Scan QR to Chat on WhatsApp with Most Mithila Farjana"
              className="w-44 h-44 object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="space-y-1">
            <p className="font-mono font-bold text-emerald-400 text-sm">
              {WHATSAPP_CONFIG.formattedDisplay}
            </p>
            <p className="text-[11px] text-stone-400">
              Direct Link: wa.me/{WHATSAPP_CONFIG.internationalNumber}
            </p>
          </div>

          <a
            href={getWhatsAppUrl(`Assalamu Alaikum Mithila!`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Open WhatsApp Web / App</span>
          </a>
        </div>
      </div>
    </section>
  );
}
