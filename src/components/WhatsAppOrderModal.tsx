import { useState } from 'react';
import { X, MessageCircle, Send, Copy, Check, Sparkles } from 'lucide-react';
import { OrderFormData } from '../types';
import { formatCustomOrderMessage, getWhatsAppUrl, WHATSAPP_CONFIG } from '../utils/whatsapp';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppOrderModal({ isOpen, onClose }: WhatsAppOrderModalProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    service: 'Theme Birthday Cake (Mithi’s Cake & Bake)',
    eventDate: '',
    deliveryArea: 'Sirajganj Sadar',
    cakeFlavor: 'Chocolate Truffle',
    cakeWeight: '1.5 Pound',
    notes: '',
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const isCake = formData.service.includes('Cake');
  const formattedMessage = formatCustomOrderMessage(formData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrl(formattedMessage);
    window.open(url, '_blank');
    onClose();
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-rose-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-900 via-[#8B3A4A] to-rose-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-white/10 text-amber-300">
                <Sparkles className="w-4 h-4" />
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl">
                Custom Order & WhatsApp Inquiry
              </h3>
            </div>
            <p className="text-xs text-rose-200 mt-1">
              Direct connection to Most Mithila Farjana at {WHATSAPP_CONFIG.formattedDisplay}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
          {/* Customer info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Nusrat Jahan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#8B3A4A] focus:ring-1 focus:ring-[#8B3A4A]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Your Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 017xxxxxxxx"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#8B3A4A] focus:ring-1 focus:ring-[#8B3A4A]"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Creative Service / Product *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#8B3A4A] bg-white"
            >
              <option value="Theme Birthday Cake (Mithi’s Cake & Bake)">
                🎂 Theme Birthday Cake (Mithi’s Cake & Bake)
              </option>
              <option value="Multi-Tier Wedding / Reception Cake">
                🍰 Multi-Tier Wedding / Reception Cake
              </option>
              <option value="Gaye Holud Carved Fruit Platter">
                🍉 Gaye Holud Carved Fruit Platter & Styling
              </option>
              <option value="Floral Watermelon Centerpiece">
                🌺 Floral Watermelon Centerpiece Carving
              </option>
              <option value="Handmade Acrylic Canvas Painting">
                🎨 Handmade Acrylic Canvas Painting
              </option>
              <option value="Hand-Print Dress / Saree Art">
                👗 Hand-Print Dress / Saree Art Work
              </option>
              <option value="Photo / Video Editing Project">
                🎬 Photo / Video Editing Project
              </option>
              <option value="General Creative Consultation">
                💡 General Creative Consultation
              </option>
            </select>
          </div>

          {/* Cake specific fields */}
          {isCake && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Cake Flavor Preference
                </label>
                <select
                  value={formData.cakeFlavor}
                  onChange={(e) => setFormData({ ...formData, cakeFlavor: e.target.value })}
                  className="w-full text-sm px-3 py-2 rounded-lg border border-stone-300 bg-white"
                >
                  <option value="Chocolate Truffle">Chocolate Truffle Ganache</option>
                  <option value="Dark Chocolate Drip">Dark Chocolate Drip</option>
                  <option value="Rich Vanilla Buttercream">Rich Vanilla Buttercream</option>
                  <option value="Red Velvet with Cream Cheese">Red Velvet Cream Cheese</option>
                  <option value="Strawberry / Mixed Fruit">Strawberry / Fresh Fruit</option>
                  <option value="Coffee Mocha">Coffee Mocha</option>
                  <option value="Custom Flavor Request">Other (Specify in Notes)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Cake Weight / Size
                </label>
                <select
                  value={formData.cakeWeight}
                  onChange={(e) => setFormData({ ...formData, cakeWeight: e.target.value })}
                  className="w-full text-sm px-3 py-2 rounded-lg border border-stone-300 bg-white"
                >
                  <option value="1 Pound (Small family)">1 Pound (~4-6 servings)</option>
                  <option value="1.5 Pound (Popular)">1.5 Pound (~8-10 servings)</option>
                  <option value="2 Pound (Party)">2 Pound (~12-15 servings)</option>
                  <option value="2-Tier 3+ Pound (Grand Event)">2-Tier 3+ Pound (Grand Event)</option>
                  <option value="Custom Size">Custom Sizing</option>
                </select>
              </div>
            </div>
          )}

          {/* Event date & delivery area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Event / Required Date
              </label>
              <input
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#8B3A4A]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Delivery / Pickup Location
              </label>
              <input
                type="text"
                placeholder="e.g. Sirajganj Sadar / Mujib Sarak"
                value={formData.deliveryArea}
                onChange={(e) => setFormData({ ...formData, deliveryArea: e.target.value })}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#8B3A4A]"
              />
            </div>
          </div>

          {/* Notes & Special Instructions */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Theme Details, Text to Write on Cake, or Special Requests
            </label>
            <textarea
              rows={3}
              placeholder="e.g. 'Happy 5th Birthday Rayan' with Spider-Man theme, eggless preference, or color palette..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#8B3A4A]"
            />
          </div>

          {/* Live formatted message preview */}
          <div className="p-3.5 rounded-xl bg-stone-900 text-stone-200 text-xs font-mono">
            <div className="flex items-center justify-between text-stone-400 mb-1 font-sans text-[11px]">
              <span>WhatsApp Message Preview:</span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy text'}</span>
              </button>
            </div>
            <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-emerald-300">
              {formattedMessage}
            </pre>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm py-3 px-5 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send via WhatsApp ({WHATSAPP_CONFIG.formattedDisplay})</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
