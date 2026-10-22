import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

type FeaturedSectionProps = {
  onViewProduct: (product: Product) => void;
};

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onViewProduct }) => {
  return (
    <section id="collection" className="py-24 bg-noir-950 relative border-t border-noir-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-noir-850">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-acid tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EDITION 001 ARCHIVE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-noir-50 tracking-tight uppercase">
              THE FIRST DROP.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-noir-400">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-acid" />
              <span>CURATED SILHOUETTES: 4 EDITIONS</span>
            </div>
            <span className="hidden sm:inline text-noir-700">•</span>
            <span>ALL SIZES PRE-ALLOCATED</span>
          </div>
        </div>

        {/* 4-Product Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProduct={onViewProduct}
            />
          ))}
        </div>

        {/* Editorial Sub-bar */}
        <div className="mt-12 p-6 bg-noir-900 border border-noir-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-noir-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-acid" />
            <span>DISPATCHING GLOBALLY FROM TOKYO &amp; BENGALURU DISTRIBUTION HUBS</span>
          </div>
          <span className="text-acid underline cursor-pointer hover:text-white">
            EXPLORE SIZE MATRIX &amp; FIT GUIDE
          </span>
        </div>
      </div>
    </section>
  );
};
