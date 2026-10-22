import React from 'react';
import { EyeOff, Shield, Compass, Sparkles } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-28 bg-noir-950 relative border-t border-noir-850 overflow-hidden">
      {/* Background Graphic watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[18vw] text-noir-900/40 select-none pointer-events-none tracking-tighter leading-none -z-0">
        NOIR
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Asymmetric Typography Left */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-acid tracking-widest uppercase">
              <EyeOff className="w-3.5 h-3.5" />
              <span>THE BRAND MANIFESTO // 001</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-noir-50 tracking-tight uppercase leading-[0.95]">
              NOT MADE TO <br />
              <span className="text-stroke-sm text-transparent hover:text-acid transition-all duration-300">
                BLEND IN.
              </span>
            </h2>

            <div className="space-y-6 max-w-2xl text-noir-300 font-sans text-base sm:text-lg font-light leading-relaxed">
              <p>
                In a hyper-connected landscape designed for algorithmic conformity, true rebellion is quiet precision. NOIR//FORM is born at the intersection of architectural discipline and underground metropolitan subculture.
              </p>
              <p>
                We do not produce disposable seasons or superficial logo prints. We construct garments as protective kinetic exoskeletons—engineered with weatherproof membranes, ergonomic articulation, and deep charcoal finishes that absorb glare rather than demanding it.
              </p>
            </div>

            {/* Fictional Brand Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-noir-800">
              <div className="space-y-1.5">
                <span className="font-mono text-xs text-acid">01 // SILHOUETTE</span>
                <h4 className="font-display font-bold text-sm text-noir-100 uppercase">
                  Kinetic Volume
                </h4>
                <p className="text-xs text-noir-400">
                  Drapes calculated for human motion without mechanical resistance.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-xs text-acid">02 // PALETTE</span>
                <h4 className="font-display font-bold text-sm text-noir-100 uppercase">
                  Total Obscurity
                </h4>
                <p className="text-xs text-noir-400">
                  Near-black, matte graphite, and strategic electric accents.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-xs text-acid">03 // UTILITY</span>
                <h4 className="font-display font-bold text-sm text-noir-100 uppercase">
                  Zero Redundancy
                </h4>
                <p className="text-xs text-noir-400">
                  Every seam, cinch, and magnetic closure serves an everyday function.
                </p>
              </div>
            </div>
          </div>

          {/* Right Architectural Abstract Badge */}
          <div className="lg:col-span-4">
            <div className="relative p-8 bg-noir-900 border border-noir-800 space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-noir-950 border border-noir-700 flex items-center justify-center text-acid">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-noir-500">
                  PROTOCOL // 2026
                </span>
              </div>

              <blockquote className="font-display font-bold text-xl text-noir-100 italic">
                “To wear the unseen is not to disappear. It is to command presence without shouting.”
              </blockquote>

              <div className="pt-4 border-t border-noir-800 flex items-center justify-between text-xs font-mono text-noir-400">
                <span>FOUNDRY // TOKYO STUDIO</span>
                <span className="text-acid">DROP 001 APPROVED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
