import React from 'react';
import { HeroScene } from '../components/3d/HeroScene';
import { Button } from '../components/ui/Button';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-noir-950">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 grid-hairline opacity-30 pointer-events-none" />

      {/* Top Drop Meta Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-noir-800/80 pb-3 text-[11px] font-mono text-noir-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-acid">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLECTION ARCHIVE</span>
            </span>
            <span className="text-noir-600">/</span>
            <span>DROP 001 // AUTUMN–WINTER</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-noir-500">
            <span>TOKYO // BERLIN // BENGALURU</span>
            <span>•</span>
            <span className="text-noir-300">LIMITED GLOBAL ALLOCATION</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content & 3D Centerpiece */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-noir-900 border border-noir-700/80 font-mono text-xs text-acid">
              <span className="w-1.5 h-1.5 rounded-full bg-acid animate-ping" />
              <span>KINETIC VOLUMETRIC APPAREL</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tighter text-noir-50 uppercase leading-[0.95]">
                FORM. <br />
                <span className="text-stroke-sm text-transparent hover:text-acid transition-all duration-300">
                  WITHOUT
                </span>{' '}
                <br />
                <span className="text-acid">LIMITS.</span>
              </h1>
            </div>

            <p className="font-sans text-base sm:text-lg text-noir-300 max-w-xl font-light leading-relaxed">
              Streetwear engineered for the in-between. Architectural silhouettes, digital fashion, and underground culture deconstructed for metropolitan reality.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#collection">
                <Button
                  variant="acid"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Explore Collection
                </Button>
              </a>

              <a href="#spotlight">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<ArrowDown className="w-4 h-4" />}
                >
                  Discover The Form
                </Button>
              </a>
            </div>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-noir-850/80 max-w-lg">
              <div>
                <span className="block font-mono text-[10px] text-noir-500 uppercase">
                  WEIGHT METRIC
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-noir-100">
                  380 GSM
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-noir-500 uppercase">
                  WATERPROOF
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-noir-100">
                  20,000 MM
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-noir-500 uppercase">
                  HARDWARE
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-acid">
                  FIDLOCK®
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Centerpiece Sneaker */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Restrained Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-noir-500 font-mono text-[10px] tracking-widest pt-4 border-t border-noir-850/80">
        <div className="flex items-center gap-2">
          <span className="text-acid">01</span>
          <span>// 06 PHASES</span>
        </div>

        <a
          href="#collection"
          className="flex items-center gap-2 text-noir-400 hover:text-acid transition-colors group"
        >
          <span>SCROLL TO EXPLORE DROP 001</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>

        <div className="hidden sm:block">
          <span>CURRENCY: INR (₹)</span>
        </div>
      </div>
    </section>
  );
};
