import React from 'react';
import { ProductColorVariant } from '../../types';
import { RefreshCw } from 'lucide-react';

type WebGLFallbackProps = {
  variant: ProductColorVariant;
  onReset?: () => void;
  message?: string;
};

export const WebGLFallback: React.FC<WebGLFallbackProps> = ({
  variant,
  onReset,
  message = 'HARDWARE ACCELERATION FALLBACK',
}) => {
  return (
    <div className="relative w-full h-full min-h-[380px] flex flex-col items-center justify-center bg-noir-900 border border-noir-800 p-8 overflow-hidden select-none">
      {/* Background CAD grid */}
      <div className="absolute inset-0 grid-hairline opacity-40 pointer-events-none" />

      {/* Cyber Corner markings */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-acid/80 tracking-widest">
        SYSTEM // RENDER_2D_SCHEMATIC
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-noir-500 tracking-widest">
        {variant.name.toUpperCase()} / {variant.hex}
      </div>

      {/* Vector Technical Blueprint Representation */}
      <div className="relative z-10 w-full max-w-md my-auto flex flex-col items-center">
        <svg
          viewBox="0 0 500 280"
          className="w-full h-auto drop-shadow-2xl transition-all duration-500"
        >
          <defs>
            <linearGradient id="fallbackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant.upperColor} />
              <stop offset="100%" stopColor={variant.soleColor} />
            </linearGradient>
          </defs>

          {/* Glowing Aura */}
          <ellipse cx="250" cy="240" rx="180" ry="20" fill={variant.accentColor} opacity="0.15" />

          {/* Sole and Upper Wireframe */}
          <path
            d="M80,180 C100,175 140,170 190,175 L340,175 C380,175 420,165 440,185 C450,200 430,215 400,220 L100,220 C75,220 65,200 80,180 Z"
            fill="url(#fallbackGrad)"
            stroke={variant.accentColor}
            strokeWidth="2"
          />

          {/* Lug treads */}
          <path
            d="M100,220 L120,235 L140,220 L160,235 L180,220 L200,235 L220,220 L240,235 L260,220 L280,235 L300,220 L320,235 L340,220 L360,235 L380,220"
            fill="none"
            stroke={variant.accentColor}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Upper Body contour */}
          <path
            d="M110,180 C130,150 170,120 230,115 C270,112 300,135 320,145 L360,165 C390,170 410,178 420,182"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
          />

          {/* Collar & Tongue */}
          <path
            d="M180,120 L210,70 C215,60 230,60 235,75 L250,120"
            fill="none"
            stroke={variant.accentColor}
            strokeWidth="2.5"
          />

          {/* Technical Ghillie Laces */}
          <path
            d="M225,120 L265,155 M245,115 L285,150 M265,120 L305,145"
            fill="none"
            stroke={variant.lacesColor}
            strokeWidth="2.5"
          />

          {/* TPU Heel Counter */}
          <path
            d="M95,185 C90,155 105,130 135,120 L170,120"
            fill="none"
            stroke={variant.accentColor}
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Brand Spec Callout */}
          <text
            x="250"
            y="265"
            fontFamily="monospace"
            fontSize="12"
            fill={variant.accentColor}
            textAnchor="middle"
            letterSpacing="3"
          >
            NOIR//FORM — VOID RUNNER [SCHEMATIC]
          </text>
        </svg>

        <div className="mt-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-acid animate-ping" />
          <span className="text-xs font-mono text-noir-400 tracking-wider">
            {message}
          </span>
          {onReset && (
            <button
              onClick={onReset}
              className="ml-4 inline-flex items-center gap-1 text-xs font-mono text-acid hover:underline"
            >
              <RefreshCw className="w-3 h-3" /> Retry Scene
            </button>
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-noir-600">
        <span>PARAMETRIC ARCHITECTURE</span>
        <span>LATERAL AIR DAMPER SYSTEM</span>
      </div>
    </div>
  );
};
