/**
 * WhatsApp integration utilities for Most Mithila Farjana
 * Phone Number: 01806914764 (Bangladesh +880)
 */

export const WHATSAPP_CONFIG = {
  rawNumber: '01806914764',
  formattedDisplay: '01806-914764',
  internationalNumber: '8801806914764',
  ownerName: 'Most Mithila Farjana',
  businessName: "Mithi's Cake & Bake",
  location: 'Sirajganj, Bangladesh',
};

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_CONFIG.internationalNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getTelUrl(): string {
  return `tel:+8801806914764`;
}

export function createGeneralInquiryMessage(): string {
  return `Assalamu Alaikum Mithila,\n\nI visited your portfolio and I would like to inquire about your creative services / cake orders. Could you please share more details?`;
}

export function createCakeOrderMessage(cakeTitle?: string): string {
  if (cakeTitle) {
    return `Assalamu Alaikum Mithila,\n\nI saw your cake creation "${cakeTitle}" from Mithi's Cake & Bake and would like to place an order / inquire about pricing and customization for an upcoming celebration.\n\nLooking forward to your reply!`;
  }
  return `Assalamu Alaikum Mithila,\n\nI would like to order a custom homemade cake from Mithi's Cake & Bake (Sirajganj). Please share available flavors, pricing, and booking procedure.\n\nThank you!`;
}

export function createItemInquiryMessage(itemTitle: string, category: string): string {
  return `Assalamu Alaikum Mithila,\n\nI saw your "${itemTitle}" (${category}) on your creative portfolio website and I am interested in ordering / getting more details.\n\nCould you please let me know availability and pricing?`;
}

export function formatCustomOrderMessage(data: {
  name: string;
  phone: string;
  service: string;
  eventDate?: string;
  deliveryArea?: string;
  cakeFlavor?: string;
  cakeWeight?: string;
  notes: string;
}): string {
  let msg = `🎂 *NEW INQUIRY / ORDER*\n`;
  msg += `─────────────────────\n`;
  msg += `👤 *Name:* ${data.name || 'Not provided'}\n`;
  msg += `📞 *Contact:* ${data.phone || 'Not provided'}\n`;
  msg += `✨ *Service:* ${data.service}\n`;

  if (data.eventDate) {
    msg += `📅 *Date of Event:* ${data.eventDate}\n`;
  }
  if (data.deliveryArea) {
    msg += `📍 *Location/Area:* ${data.deliveryArea}\n`;
  }
  if (data.cakeFlavor) {
    msg += `🍰 *Flavor Preference:* ${data.cakeFlavor}\n`;
  }
  if (data.cakeWeight) {
    msg += `⚖️ *Estimated Weight/Size:* ${data.cakeWeight}\n`;
  }
  if (data.notes) {
    msg += `📝 *Order Details & Notes:*\n${data.notes}\n`;
  }
  msg += `─────────────────────\n`;
  msg += `_Sent via Most Mithila Farjana Portfolio Web App_`;

  return msg;
}
