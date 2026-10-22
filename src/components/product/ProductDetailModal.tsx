import React, { useState } from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Check, ShieldCheck, Box, ArrowRight } from 'lucide-react';

type ProductDetailModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSpotlight?: () => void;
};

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onNavigateToSpotlight,
}) => {
  const { addToCart, formatPrice } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);

  // Sync state when product opens
  React.useEffect(() => {
    if (product) {
      setSelectedColor(product.colorName);
      setSelectedSize(product.sizes[0] || 'Standard');
      setIsAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, selectedColor, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product.name}
      subtitle={`DROP 001 // ${product.category}`}
      maxWidth="4xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Product Visual & Blueprint */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-noir-950 border border-noir-800 p-6 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-hairline opacity-25" />
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain filter contrast-125 relative z-10"
            />
            {product.badge && (
              <div className="absolute top-3 left-3 px-2 py-1 bg-acid text-noir-950 font-mono text-[10px] font-bold tracking-widest uppercase z-20">
                {product.badge}
              </div>
            )}
          </div>

          {/* 3D Spotlight Shortcut Callout if Void Runner */}
          {product.id === 'void-runner' && onNavigateToSpotlight && (
            <button
              onClick={() => {
                onClose();
                onNavigateToSpotlight();
              }}
              className="w-full py-2.5 px-4 bg-noir-850 hover:bg-noir-800 border border-acid/40 text-acid font-mono text-xs flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4" />
                <span>LAUNCH 3D INTERACTIVE SPOTLIGHT</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Product Spec & Configuration */}
        <div className="space-y-6">
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-mono text-xs text-acid tracking-widest uppercase">
                PRICE
              </span>
              <span className="font-mono font-bold text-2xl text-noir-50">
                {formatPrice(product.price)}
              </span>
            </div>
            <p className="font-sans text-sm text-noir-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Color Selection (if variants exist) */}
          {product.variants && product.variants.length > 0 && (
            <div>
              <label className="block font-mono text-xs text-noir-400 uppercase tracking-widest mb-2.5">
                COLORWAY: <span className="text-acid font-bold">{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedColor(v.name)}
                    className={`flex items-center gap-2 px-3 py-2 border font-mono text-xs transition-all ${
                      selectedColor === v.name
                        ? 'border-acid bg-acid/10 text-acid'
                        : 'border-noir-700 bg-noir-850 text-noir-400 hover:border-noir-500'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-noir-600"
                      style={{ backgroundColor: v.hex }}
                    />
                    <span>{v.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-center mb-2.5">
              <label className="font-mono text-xs text-noir-400 uppercase tracking-widest">
                SELECT SIZE: <span className="text-noir-100 font-bold">{selectedSize}</span>
              </label>
              <span className="font-mono text-[10px] text-noir-500 underline cursor-pointer hover:text-acid">
                SIZE GUIDE (CM)
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`py-2 px-1 text-center font-mono text-xs border transition-all ${
                    selectedSize === s
                      ? 'border-acid bg-acid text-noir-950 font-bold'
                      : 'border-noir-700 bg-noir-950 text-noir-300 hover:border-noir-500'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Key Technical Features */}
          <div className="border-t border-noir-800 pt-4">
            <h5 className="font-mono text-xs text-noir-400 uppercase tracking-widest mb-2.5">
              TECHNICAL SPECIFICATIONS
            </h5>
            <ul className="space-y-1.5 font-mono text-[11px] text-noir-300">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-acid mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart CTA */}
          <div className="pt-2">
            <Button
              variant="acid"
              size="lg"
              fullWidth
              onClick={handleAdd}
              icon={isAdded ? <Check className="w-4 h-4" /> : undefined}
            >
              {isAdded ? 'ITEM ADDED TO BAG' : `ADD TO BAG • ${formatPrice(product.price)}`}
            </Button>

            <div className="flex items-center justify-between text-[10px] font-mono text-noir-500 mt-3 px-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-acid" />
                VERIFIED ARCHITECTURAL DRAPE
              </span>
              <span>EST. DISPATCH: 24-48 HRS</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
