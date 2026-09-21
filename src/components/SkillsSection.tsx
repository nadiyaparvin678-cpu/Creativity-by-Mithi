import { MessageCircle, Sparkles } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../utils/whatsapp';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B3A4A] bg-rose-100/80 px-3 py-1 rounded-full">
          Creative Skills & Talents
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Multifaceted Creative Expertise
        </h2>
        <p className="mt-2 text-stone-600 text-sm sm:text-base">
          Combining traditional hand-craftsmanship with modern culinary artistry and digital design tools.
        </p>
      </div>

      {/* Grid of 8 Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS_DATA.map((skill, index) => {
          const inquiryText = `Assalamu Alaikum Mithila,\n\nI saw your skill in "${skill.title}" on your portfolio website and would like to ask about your services/creations.\n\nThank you!`;
          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-rose-100/80 hover:border-rose-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-2xl bg-rose-50/80 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {skill.icon}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-700/80 bg-rose-50 px-2 py-0.5 rounded-md">
                    {skill.category}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-900 mb-1 group-hover:text-[#8B3A4A] transition-colors">
                  {skill.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-stone-100">
                <a
                  href={getWhatsAppUrl(inquiryText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 group-hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-600" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom banner for custom requests */}
      <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-stone-900 to-[#4A1E26] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-base sm:text-lg">
              Have a Custom Creative Request or Event in Mind?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Cakes, Gaye Holud arrangements, hand-print dress work, and custom paintings.
            </p>
          </div>
        </div>

        <a
          href={getWhatsAppUrl(
            `Assalamu Alaikum Mithila,\n\nI have a special custom creative project / event inquiry and would love to consult with you directly.\n\nThank you!`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shadow-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat on {WHATSAPP_CONFIG.formattedDisplay}</span>
        </a>
      </div>
    </section>
  );
}
