import React from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-noir-900 border border-noir-700 p-4 shadow-noir-card shadow-2xl flex items-start justify-between gap-3 transform transition-all duration-300 animate-slide-in backdrop-blur-md"
        >
          <div className="flex items-start gap-3">
            {toast.type === 'success' && (
              <CheckCircle2 className="w-4 h-4 text-acid mt-0.5 shrink-0" />
            )}
            {toast.type === 'info' && (
              <Info className="w-4 h-4 text-noir-300 mt-0.5 shrink-0" />
            )}
            {toast.type === 'warning' && (
              <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            )}
            <div>
              <p className="text-xs font-mono font-bold tracking-wider text-noir-100 uppercase">
                {toast.title}
              </p>
              <p className="text-xs text-noir-400 mt-0.5 leading-relaxed">
                {toast.message}
              </p>
            </div>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-noir-500 hover:text-noir-100 transition-colors p-1"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
