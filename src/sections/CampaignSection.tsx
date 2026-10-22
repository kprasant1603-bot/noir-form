import React from 'react';
import { ArrowUpRight, Flame } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CampaignSection: React.FC = () => {
  return (
    <section className="py-28 bg-noir-950 relative border-t border-noir-850 overflow-hidden">
      {/* Background Graphic Blueprint */}
      <div className="absolute inset-0 grid-hairline opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-noir-900 border border-noir-800 p-8 sm:p-14 lg:p-20 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-acid/15 filter blur-[120px] pointer-events-none" />

          {/* Campaign Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-noir-800 text-xs font-mono text-noir-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
              <span className="text-acid uppercase font-bold">CAMPAIGN 001 // THE UNSEEN PROTOCOL</span>
            </div>
            <span>PHOTOGRAPHED IN METROPOLITAN TOKYO</span>
          </div>

          {/* Oversized Campaign Statement */}
          <div className="my-12 max-w-4xl space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-7xl text-noir-50 tracking-tight uppercase leading-[0.95]">
              WE DO NOT DESIGN FOR THE MASSES. <br />
              <span className="text-acid">WE ENGINEER FOR THE FEW</span> <br />
              <span className="text-stroke-sm text-transparent hover:text-white transition-all duration-300">
                WHO WALK IN SILENCE.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-xl text-noir-300 font-light max-w-2xl leading-relaxed">
              Every drop is numbered. No re-issues. Once the physical and digital allocations are exhausted, the archive locks permanently.
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="pt-8 border-t border-noir-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a href="#collection">
                <Button
                  variant="acid"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Acquire Drop 001
                </Button>
              </a>

              <a href="#spotlight">
                <Button variant="secondary" size="lg">
                  Explore 3D Lab
                </Button>
              </a>
            </div>

            <div className="font-mono text-xs text-noir-500">
              ALLOCATION STATUS: <strong className="text-acid font-bold">42% CLAIMED</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
