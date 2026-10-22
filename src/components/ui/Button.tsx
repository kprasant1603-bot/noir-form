import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'acid';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-mono font-medium uppercase tracking-widest transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed select-none group relative overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 space-x-2',
    md: 'text-xs px-6 py-3.5 space-x-2.5',
    lg: 'text-sm px-8 py-4 space-x-3',
  };

  const variantStyles = {
    primary: 'bg-acid text-noir-950 font-bold hover:bg-white hover:shadow-acid-sm active:scale-[0.98]',
    acid: 'bg-acid text-noir-950 font-bold hover:bg-white hover:shadow-acid-lg active:scale-[0.98]',
    secondary: 'bg-noir-850 text-noir-100 border border-noir-700 hover:border-acid hover:text-acid active:scale-[0.98]',
    outline: 'bg-transparent text-noir-100 border border-noir-600 hover:border-acid hover:text-acid hover:bg-acid/5 active:scale-[0.98]',
    ghost: 'bg-transparent text-noir-400 hover:text-acid hover:bg-noir-850/50',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};
