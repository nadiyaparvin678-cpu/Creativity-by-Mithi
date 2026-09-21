import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CakeBrandSection from './components/CakeBrandSection';
import SkillsSection from './components/SkillsSection';
import PortfolioGallery from './components/PortfolioGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsAppWidget from './components/FloatingWhatsAppWidget';
import LightboxModal from './components/LightboxModal';
import WhatsAppOrderModal from './components/WhatsAppOrderModal';
import { PortfolioItem } from './types';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#2D2926] selection:bg-rose-100 selection:text-[#8B3A4A]">
      {/* Top Navigation */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* About Section */}
        <AboutSection />

        {/* Mithi's Cake & Bake Section */}
        <CakeBrandSection onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* 8 Skills Section */}
        <SkillsSection />

        {/* Portfolio Showcase Section */}
        <PortfolioGallery onSelectItem={(item) => setSelectedItem(item)} />

        {/* Contact & WhatsApp Section */}
        <ContactSection onOpenOrderModal={() => setIsOrderModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Widget */}
      <FloatingWhatsAppWidget onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Lightbox Modal for Items */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onOpenOrderModal={() => {
          setSelectedItem(null);
          setIsOrderModalOpen(true);
        }}
      />

      {/* WhatsApp Order & Inquiry Customizer Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
