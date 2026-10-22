import React, { useEffect } from 'react';
import { X, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { name: 'Collection', href: '#collection', number: '01' },
    { name: 'Void Runner 3D', href: '#spotlight', number: '02' },
    { name: 'Brand Manifesto', href: '#manifesto', number: '03' },
    { name: 'Craftsmanship & Materials', href: '#craft', number: '04' },
    { name: 'Editorial Journal', href: '#journal', number: '05' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-noir-950/98 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Mobile Header Bar */}
      <div className="flex items-center justify-between p-6 border-b border-noir-800">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-acid flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-noir-950" />
          </div>
          <span className="font-display font-black text-lg text-noir-100">
            NOIR<span className="text-acid font-mono">//</span>FORM
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-noir-400 hover:text-acid transition-colors"
          aria-label="Close navigation"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation list */}
      <div className="flex-1 flex flex-col justify-center px-8 py-10 space-y-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={handleLinkClick}
            className="flex items-baseline justify-between py-2 border-b border-noir-850 group"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-acid">{link.number}</span>
              <span className="font-display text-2xl font-bold tracking-tight text-noir-100 group-hover:text-acid transition-colors">
                {link.name}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-noir-600 group-hover:text-acid group-hover:translate-x-1 transition-all" />
          </a>
        ))}
      </div>

      {/* Bottom Cart & Actions */}
      <div className="p-8 border-t border-noir-850 bg-noir-900/60 space-y-4">
        <button
          onClick={() => {
            onClose();
            setIsCartOpen(true);
          }}
          className="w-full py-3.5 px-4 bg-noir-850 border border-noir-700 hover:border-acid flex items-center justify-between font-mono text-xs text-noir-200 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-4 h-4 text-acid" />
            <span>BAG ({totalItems} ITEMS)</span>
          </div>
          <span className="text-acid">OPEN DRAWER</span>
        </button>

        <a href="#collection" onClick={handleLinkClick} className="block w-full">
          <Button variant="acid" fullWidth size="lg">
            Shop The Drop
          </Button>
        </a>

        <div className="flex justify-between items-center text-[10px] font-mono text-noir-500 pt-2">
          <span>DROP 001 // TOKYO • BERLIN</span>
          <span>INR (₹) PRICING</span>
        </div>
      </div>
    </div>
  );
};
