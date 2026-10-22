import React, { useState } from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { Eye, Plus, Check } from 'lucide-react';
import { Button } from '../ui/Button';

type ProductCardProps = {
  product: Product;
  onViewProduct: (product: Product) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewProduct,
}) => {
  const { addToCart, formatPrice } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colorName);
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedColor, product.sizes[0]);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div
      onClick={() => onViewProduct(product)}
      className="group relative bg-noir-900 border border-noir-800 hover:border-acid/60 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg hover:shadow-noir-card"
    >
      {/* Top Meta Bar */}
      <div className="p-4 flex items-center justify-between border-b border-noir-850/80 bg-noir-950/40 z-10">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest text-acid uppercase">
            {product.category}
          </span>
          {product.badge && (
            <span className="px-1.5 py-0.5 bg-noir-800 border border-noir-700 font-mono text-[9px] text-noir-300 tracking-wider">
              {product.badge}
            </span>
          )}
        </div>
        <span className="font-mono text-[11px] text-noir-400">
          {product.colorName}
        </span>
      </div>

      {/* Visual Canvas Area */}
      <div className="relative aspect-[4/3] bg-noir-950 flex items-center justify-center p-6 overflow-hidden">
        {/* Subtle grid in background */}
        <div className="absolute inset-0 grid-hairline opacity-20 pointer-events-none" />

        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 w-full h-full object-contain filter contrast-125 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay quick action trigger */}
        <div className="absolute inset-0 bg-noir-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewProduct(product);
            }}
            className="p-3 bg-noir-900 border border-noir-700 hover:border-acid text-noir-200 hover:text-acid transition-all shadow-xl"
            title="Inspect Details"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={handleQuickAdd}
            className="p-3 bg-acid text-noir-950 font-bold hover:bg-white transition-all shadow-acid-sm"
            title="Quick Add to Bag"
          >
            {isAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-5 border-t border-noir-850 bg-noir-900/90 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-bold text-base sm:text-lg text-noir-50 tracking-wide group-hover:text-acid transition-colors">
              {product.name}
            </h3>
            <span className="font-mono font-bold text-sm text-noir-100 whitespace-nowrap">
              {formatPrice(product.price)}
            </span>
          </div>
          <p className="text-xs text-noir-400 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Card Actions & Color Palette Indicators */}
        <div className="pt-4 mt-3 border-t border-noir-800/60 flex items-center justify-between">
          {product.variants ? (
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedColor(v.name)}
                  className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                    selectedColor === v.name
                      ? 'border-acid scale-110 ring-1 ring-acid'
                      : 'border-noir-600 hover:scale-105'
                  }`}
                  style={{ backgroundColor: v.hex }}
                  title={v.name}
                />
              ))}
            </div>
          ) : (
            <span className="font-mono text-[10px] text-noir-500 uppercase">
              SINGLE RUN EDITION
            </span>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={handleQuickAdd}
            className="text-[11px] py-1 px-2.5 -mr-1"
          >
            {isAdded ? 'ADDED' : '+ ADD TO BAG'}
          </Button>
        </div>
      </div>
    </div>
  );
};
