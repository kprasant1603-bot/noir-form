import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/navigation/Navbar';
import { MobileMenu } from './components/navigation/MobileMenu';
import { CartDrawer } from './components/cart/CartDrawer';
import { ToastContainer } from './components/ui/Toast';
import { ProductDetailModal } from './components/product/ProductDetailModal';
import { ArticleModal } from './components/journal/ArticleModal';

import { HeroSection } from './sections/HeroSection';
import { FeaturedSection } from './sections/FeaturedSection';
import { SpotlightSection } from './sections/SpotlightSection';
import { ManifestoSection } from './sections/ManifestoSection';
import { CraftSection } from './sections/CraftSection';
import { CampaignSection } from './sections/CampaignSection';
import { JournalSection } from './sections/JournalSection';
import { NewsletterSection } from './sections/NewsletterSection';
import { FooterSection } from './sections/FooterSection';

import { Product, Article } from './types';

export function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleNavigateToSpotlight = () => {
    const el = document.getElementById('spotlight');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-noir-950 text-noir-100 flex flex-col selection:bg-acid selection:text-noir-950">
      {/* Navigation */}
      <Navbar onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section A — Hero Experience */}
        <HeroSection />

        {/* Section B — Featured Collection */}
        <FeaturedSection onViewProduct={(prod) => setSelectedProduct(prod)} />

        {/* Section C — Interactive 3D Product Spotlight */}
        <SpotlightSection />

        {/* Section D — Brand Manifesto */}
        <ManifestoSection />

        {/* Section E — Materials & Craftsmanship */}
        <CraftSection />

        {/* Section F — Campaign Visual */}
        <CampaignSection />

        {/* Section G — Journal */}
        <JournalSection onReadArticle={(art) => setSelectedArticle(art)} />

        {/* Section H — Newsletter */}
        <NewsletterSection />
      </main>

      {/* Section I — Footer */}
      <FooterSection />

      {/* Modals & Overlays */}
      <CartDrawer />
      <ToastContainer />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onNavigateToSpotlight={handleNavigateToSpotlight}
      />

      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
