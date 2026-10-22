import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'acid' | 'dark' | 'outline' | 'pulse';
  className?: string;
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'dark',
  className = '',
}) => {
  const base = 'inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase border';

  const variants = {
    acid: 'bg-acid/10 text-acid border-acid/30',
    dark: 'bg-noir-900/80 text-noir-300 border-noir-700/80',
    outline: 'bg-transparent text-noir-400 border-noir-700',
    pulse: 'bg-noir-900 text-noir-100 border-noir-700',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {variant === 'pulse' && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acid opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-acid"></span>
        </span>
      )}
      {children}
    </span>
  );
};
