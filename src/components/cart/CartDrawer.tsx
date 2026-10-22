import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
    formatPrice,
    clearCart,
    addToast,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // Prevent background scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setCheckoutComplete(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 10000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleDemoCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      clearCart();
      addToast(
        'Demo Order Created',
        'Simulated order confirmation received. No payment was charged.',
        'success'
      );
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-noir-950/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-noir-900 border-l border-noir-800 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-noir-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-lg text-noir-50 tracking-wider">
                YOUR BAG
              </span>
              <span className="px-2 py-0.5 bg-noir-800 border border-noir-700 font-mono text-[10px] text-acid">
                {totalItems} {totalItems === 1 ? 'ITEM' : 'ITEMS'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-noir-400 hover:text-acid transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Meter */}
          <div className="px-6 py-3 bg-noir-950/60 border-b border-noir-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-noir-300 mb-1.5">
              <span>
                {remainingForFreeShipping === 0 ? (
                  <span className="text-acid font-bold">QUALIFIED FOR FREE SHIPPING</span>
                ) : (
                  <span>
                    ADD <strong className="text-noir-100">{formatPrice(remainingForFreeShipping)}</strong> FOR FREE DOMESTIC SHIPPING
                  </span>
                )}
              </span>
              <span className="text-noir-500">{Math.round(shippingProgress)}%</span>
            </div>
            <div className="w-full h-1 bg-noir-800 overflow-hidden">
              <div
                className="h-full bg-acid transition-all duration-500"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Checkout Completed Confirmation */}
          {checkoutComplete ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-acid/10 border border-acid flex items-center justify-center text-acid mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <p className="font-mono text-xs text-acid tracking-widest uppercase">
                DEMO TRANSACTION CONFIRMED
              </p>
              <h3 className="font-display font-bold text-2xl text-noir-50">
                DROP 001 RESERVATION
              </h3>
              <p className="text-xs text-noir-400 max-w-xs leading-relaxed">
                Thank you for testing the NOIR//FORM storefront experience. As a demonstration environment, no charges were processed and no physical goods will ship.
              </p>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setCheckoutComplete(false);
                  setIsCartOpen(false);
                }}
              >
                Return to Storefront
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 divide-y divide-noir-800/80">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <div className="w-16 h-16 border border-dashed border-noir-700 flex items-center justify-center text-noir-600 mb-2">
                      <span className="font-mono text-xs">[EMPTY]</span>
                    </div>
                    <p className="font-display font-bold text-lg text-noir-200">
                      Your bag is currently empty.
                    </p>
                    <p className="text-xs text-noir-500 max-w-xs">
                      Explore our debut collection of engineered silhouettes, footwear, and outerwear.
                    </p>
                    <a
                      href="#collection"
                      onClick={() => setIsCartOpen(false)}
                      className="pt-2"
                    >
                      <Button variant="acid" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                        Explore Collection
                      </Button>
                    </a>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={`${item.productId}-${item.colorVariant}-${item.size}`}
                      className="py-4 first:pt-0 last:pb-0 flex gap-4"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-20 h-20 bg-noir-950 border border-noir-800 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-display font-bold text-sm text-noir-100 tracking-wide">
                              {item.name}
                            </h4>
                            <button
                              onClick={() =>
                                removeFromCart(item.productId, item.colorVariant, item.size)
                              }
                              className="text-noir-500 hover:text-red-400 transition-colors p-1"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="font-mono text-[11px] text-noir-400 mt-0.5">
                            {item.colorVariant} • {item.size}
                          </p>
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-noir-700 bg-noir-950">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.colorVariant,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              className="p-1.5 text-noir-400 hover:text-noir-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 font-mono text-xs text-noir-100 font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.colorVariant,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="p-1.5 text-noir-400 hover:text-noir-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="font-mono font-bold text-sm text-acid">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-noir-800 bg-noir-950/90 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-noir-400">
                      <span>SUBTOTAL</span>
                      <span className="text-noir-200">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-noir-400">
                      <span>SHIPPING</span>
                      <span className="text-noir-200">
                        {remainingForFreeShipping === 0 ? 'COMPLIMENTARY' : '₹490'}
                      </span>
                    </div>
                    <div className="border-t border-noir-800 pt-2 flex justify-between font-mono font-bold text-sm">
                      <span className="text-noir-100">ESTIMATED TOTAL</span>
                      <span className="text-acid text-base">
                        {formatPrice(subtotal + (remainingForFreeShipping === 0 ? 0 : 490))}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="acid"
                    fullWidth
                    size="lg"
                    disabled={isCheckingOut}
                    onClick={handleDemoCheckout}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {isCheckingOut ? 'INITIALIZING DEMO...' : 'COMPLETE DEMO ORDER'}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-noir-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-acid" />
                    <span>SANDBOX SIMULATION • NO CHARGES APPLIED</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
