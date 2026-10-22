import React, { useState } from 'react';
import { SpotlightScene } from '../components/3d/SpotlightScene';
import { SNEAKER_VARIANTS, PRODUCTS } from '../data/products';
import { ProductColorVariant } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { Check, ShieldAlert, Cpu, Sparkles, Layers } from 'lucide-react';

export const SpotlightSection: React.FC = () => {
  const voidRunner = PRODUCTS.find((p) => p.id === 'void-runner') || PRODUCTS[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductColorVariant>(SNEAKER_VARIANTS[0]);
  const [selectedSize, setSelectedSize] = useState<string>(voidRunner.sizes[1] || 'US 8.5');
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, formatPrice } = useCart();

  const handleAddToCart = () => {
    addToCart(voidRunner, selectedVariant.name, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="spotlight" className="py-24 bg-noir-950 relative border-t border-noir-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-noir-850">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-acid tracking-widest uppercase mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE HARDWARE SPOTLIGHT</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-noir-50 tracking-tight uppercase">
              VOID RUNNER // 3D LAB.
            </h2>
            <p className="font-mono text-xs text-noir-400 max-w-md">
              Inspect kinetic geometries, directional traction lugs, and switch dynamic PBR material finishes in real-time.
            </p>
          </div>
        </div>

        {/* 3D Showcase & Product Info Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-12">
          {/* Left: 3D Scene Viewport */}
          <div className="lg:col-span-7">
            <SpotlightScene selectedVariant={selectedVariant} />
          </div>

          {/* Right: Interactive Product Configuration & Actions */}
          <div className="lg:col-span-5 space-y-6 bg-noir-900 border border-noir-800 p-6 sm:p-8">
            <div className="flex items-start justify-between pb-4 border-b border-noir-800">
              <div>
                <span className="font-mono text-xs text-acid tracking-widest uppercase">
                  DROP 001 // FOOTWEAR HERO
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-noir-50 mt-1">
                  VOID RUNNER
                </h3>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] text-noir-500 block uppercase">PRICE</span>
                <span className="font-mono font-bold text-2xl text-acid">
                  {formatPrice(voidRunner.price)}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-noir-300 leading-relaxed">
              {voidRunner.description}
            </p>

            {/* REAL-TIME 3D COLOR VARIANT SELECTOR */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-mono text-xs text-noir-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-acid" />
                  <span>MATERIAL FINISH:</span>
                  <strong className="text-acid">{selectedVariant.name.toUpperCase()}</strong>
                </label>
                <span className="font-mono text-[10px] text-noir-500">
                  REAL-TIME SHADER
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {SNEAKER_VARIANTS.map((v) => {
                  const isSelected = selectedVariant.id === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`p-3 border flex flex-col items-center gap-2 transition-all ${
                        isSelected
                          ? 'border-acid bg-acid/10 shadow-acid-sm'
                          : 'border-noir-700 bg-noir-950/60 hover:border-noir-500'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-4 h-4 rounded-full border border-noir-700 shadow"
                          style={{ backgroundColor: v.hex }}
                        />
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-noir-700"
                          style={{ backgroundColor: v.accentHex }}
                        />
                      </div>
                      <span
                        className={`font-mono text-xs uppercase tracking-wider font-bold ${
                          isSelected ? 'text-acid' : 'text-noir-300'
                        }`}
                      >
                        {v.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label className="font-mono text-xs text-noir-400 uppercase tracking-widest">
                  SELECT SIZE: <span className="text-noir-100 font-bold">{selectedSize}</span>
                </label>
                <span className="font-mono text-[10px] text-noir-500">
                  TRUE TO SIZE FIT
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {voidRunner.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-center font-mono text-xs border transition-all ${
                      selectedSize === size
                        ? 'border-acid bg-acid text-noir-950 font-bold'
                        : 'border-noir-700 bg-noir-950 text-noir-300 hover:border-noir-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Button
                variant="acid"
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                icon={isAdded ? <Check className="w-4 h-4" /> : undefined}
              >
                {isAdded ? 'ADDED TO BAG' : `ADD TO BAG • ${formatPrice(voidRunner.price)}`}
              </Button>
            </div>

            {/* Engineering Highlights */}
            <div className="p-3 bg-noir-950 border border-noir-800 text-[11px] font-mono text-noir-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-acid" />
                <span>MULTICELLULAR VIBRAM COMPOUND</span>
              </span>
              <span className="text-noir-500">SHORE 45C</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
