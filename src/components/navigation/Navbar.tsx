import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

type NavbarProps = {
  onOpenMobileMenu: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'Spotlight', href: '#spotlight' },
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Craftsmanship', href: '#craft' },
    { name: 'Journal', href: '#journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-noir-950/85 backdrop-blur-md border-b border-noir-800/80 py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-acid"
          aria-label="NOIR//FORM Home"
        >
          {/* Architectural geometric logo icon */}
          <div className="w-8 h-8 bg-noir-900 border border-noir-700 flex items-center justify-center relative overflow-hidden group-hover:border-acid transition-colors">
            <div className="w-3.5 h-3.5 bg-acid transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-0 border border-acid/20 pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-black text-lg sm:text-xl tracking-wider text-noir-50 group-hover:text-acid transition-colors">
              NOIR<span className="text-acid font-mono">//</span>FORM
            </span>
            <span className="text-[8px] font-mono tracking-widest text-noir-500 uppercase -mt-1 hidden sm:block">
              WEAR THE UNSEEN
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-widest text-noir-300 hover:text-acid uppercase transition-colors relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-acid transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions: Currency, Cart Indicator, Shop Now CTA, Mobile Menu */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-noir-900 border border-noir-800 text-[10px] font-mono text-noir-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>DROP 001 LIVE</span>
          </div>

          {/* Cart Drawer Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-noir-900/80 border border-noir-700/80 hover:border-acid text-noir-200 hover:text-acid transition-all focus:outline-none focus:ring-1 focus:ring-acid"
            aria-label={`Open Cart (${totalItems} items)`}
          >
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-acid text-noir-950 font-mono font-bold text-[10px] w-5 h-5 flex items-center justify-center rounded-full shadow-acid-sm">
                {totalItems}
              </span>
            )}
          </button>

          {/* Shop Now CTA */}
          <a href="#collection" className="hidden sm:inline-block">
            <Button
              variant="acid"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Shop Drop
            </Button>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2.5 bg-noir-900 border border-noir-700 text-noir-200 hover:text-acid focus:outline-none"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
