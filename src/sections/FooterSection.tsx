import React from 'react';
import { ArrowUp, Globe, Terminal, Shield } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Drop 001 Collection', href: '#collection' },
    { name: '3D Void Runner Lab', href: '#spotlight' },
    { name: 'Brand Manifesto', href: '#manifesto' },
    { name: 'Materials & Craft', href: '#craft' },
    { name: 'Archival Journal', href: '#journal' },
  ];

  const socialLinks = [
    { name: 'INSTAGRAM', handle: '@noirform.demo' },
    { name: 'DISCORD', handle: 'NOIR//SOCIETY [DEMO]' },
    { name: 'X / TWITTER', handle: '@noirform_lab' },
    { name: 'GITHUB', handle: 'noir-form-archive' },
  ];

  return (
    <footer className="bg-noir-950 border-t border-noir-850 pt-16 pb-12 text-noir-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-noir-850">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-acid flex items-center justify-center">
                <div className="w-3 h-3 bg-noir-950" />
              </div>
              <span className="font-display font-black text-xl text-noir-100 tracking-wider">
                NOIR<span className="text-acid font-mono">//</span>FORM
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-noir-400 max-w-sm font-light leading-relaxed">
              Streetwear engineered for the in-between. Kinetic silhouettes, architectural drape, and functional minimalism.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[10px] text-acid">
              <span className="w-1.5 h-1.5 rounded-full bg-acid animate-ping" />
              <span>STUDIO HQ: NEO-DISTRICT 07 // TOKYO • BERLIN • BENGALURU</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="font-bold text-noir-100 uppercase tracking-widest text-xs block mb-1">
              NAVIGATION
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-acid transition-colors block text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links (Clearly Labeled as Demo Placeholders) */}
          <div className="space-y-3">
            <span className="font-bold text-noir-100 uppercase tracking-widest text-xs block mb-1">
              CHANNELS [DEMO]
            </span>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.name} className="flex items-center justify-between text-xs">
                  <span>{social.name}</span>
                  <span className="text-noir-600 text-[10px]">[DEMO]</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <span className="font-bold text-noir-100 uppercase tracking-widest text-xs block mb-1">
              PROTOCOL
            </span>
            <p className="text-[11px] text-noir-400 leading-relaxed">
              Simulated luxury e-commerce environment built for production demonstration and web performance showcase.
            </p>
            <div className="flex items-center gap-1.5 text-noir-500 text-[10px] pt-1">
              <Shield className="w-3.5 h-3.5 text-acid" />
              <span>ZERO TRACKERS • PRIVACY FIRST</span>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-noir-500">
          <div>
            © {new Date().getFullYear()} NOIR//FORM LABORATORY. ALL FICTIONAL TRADEMARKS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-noir-300 hover:text-acid transition-colors p-2 bg-noir-900 border border-noir-800 hover:border-acid"
            aria-label="Back to top of page"
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
