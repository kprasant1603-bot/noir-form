import React, { useState } from 'react';
import { CRAFTSMANSHIP_PILLARS, MATERIAL_SWATCHES } from '../data/materials';
import { MaterialFeature } from '../types';
import { Hammer, Sparkles, Check, ArrowRight } from 'lucide-react';

export const CraftSection: React.FC = () => {
  const [activeSwatch, setActiveSwatch] = useState<MaterialFeature>(MATERIAL_SWATCHES[0]);

  return (
    <section id="craft" className="py-24 bg-noir-950 relative border-t border-noir-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-noir-850 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-acid tracking-widest uppercase mb-2">
              <Hammer className="w-3.5 h-3.5" />
              <span>LABORATORY &amp; ATELIER</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-noir-50 tracking-tight uppercase">
              MATERIALS &amp; CRAFT.
            </h2>
          </div>
          <p className="font-mono text-xs text-noir-400 max-w-md">
            Engineered silhouettes, considered high-tensile textiles, and mil-spec closures built to withstand metropolitan extremes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {CRAFTSMANSHIP_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 bg-noir-900 border border-noir-800 hover:border-noir-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-sm text-acid font-bold block mb-4">
                  {pillar.number} // PRINCIPLE
                </span>
                <h3 className="font-display font-bold text-xl text-noir-50 tracking-wide mb-1 group-hover:text-acid transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-mono text-[11px] text-noir-500 uppercase tracking-wider mb-4">
                  {pillar.subtitle}
                </p>
                <p className="font-sans text-xs text-noir-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-noir-800/80 space-y-1.5">
                {pillar.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-mono text-noir-400">
                    <Check className="w-3 h-3 text-acid shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Material Swatches Inspection Studio */}
        <div className="mt-16 bg-noir-900 border border-noir-800 p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            {/* Swatch Selector */}
            <div className="w-full lg:w-1/2 space-y-4">
              <span className="font-mono text-xs text-acid uppercase tracking-widest block">
                TEXTILE ARCHIVE // SELECT SPECIFICATION:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MATERIAL_SWATCHES.map((swatch) => {
                  const isSelected = activeSwatch.id === swatch.id;
                  return (
                    <button
                      key={swatch.id}
                      onClick={() => setActiveSwatch(swatch)}
                      className={`p-4 text-left border transition-all ${
                        isSelected
                          ? 'border-acid bg-acid/10 shadow-acid-sm'
                          : 'border-noir-800 bg-noir-950/60 hover:border-noir-600'
                      }`}
                    >
                      <span className="font-mono text-[10px] text-acid block uppercase tracking-wider mb-1">
                        {swatch.badge}
                      </span>
                      <h4 className="font-display font-bold text-sm text-noir-100 mb-1">
                        {swatch.title}
                      </h4>
                      <p className="font-mono text-[11px] text-noir-400 line-clamp-1">
                        {swatch.spec}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Swatch Detailed Breakdown */}
            <div className="w-full lg:w-1/2 bg-noir-950 border border-noir-800 p-6 sm:p-8 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-noir-600">
                ACTIVE LAB SPEC
              </div>

              <div className="inline-block px-2.5 py-1 bg-noir-900 border border-noir-700 font-mono text-[10px] text-acid uppercase">
                {activeSwatch.badge}
              </div>

              <h3 className="font-display font-bold text-2xl text-noir-50">
                {activeSwatch.title}
              </h3>

              <div className="p-3 bg-noir-900 border-l-2 border-acid text-xs font-mono text-noir-200">
                {activeSwatch.spec}
              </div>

              <p className="font-sans text-sm text-noir-300 leading-relaxed">
                {activeSwatch.description}
              </p>

              <div className="pt-4 border-t border-noir-800 flex items-center justify-between font-mono text-xs text-noir-400">
                <span>LAB TEST: SATISFIES ASTM D3884</span>
                <span className="text-acid">VERIFIED RESILIENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
