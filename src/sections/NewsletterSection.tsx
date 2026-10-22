import React, { useState } from 'react';
import { Mail, Check, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }
    if (!validateEmail(email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email format (e.g. name@domain.com).');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setErrorMessage('');
    }, 800);
  };

  return (
    <section className="py-24 bg-noir-950 relative border-t border-noir-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-acid tracking-widest uppercase mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>SUBSCRIBER TERMINAL</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl text-noir-50 tracking-tight uppercase mb-4">
          PRIORITY ALLOCATION.
        </h2>

        <p className="font-sans text-sm sm:text-base text-noir-300 max-w-lg mx-auto font-light leading-relaxed mb-8">
          Register for Drop 002 early access notifications, secret archival releases, and exclusive editorial dispatches.
        </p>

        {status === 'success' ? (
          <div className="p-6 bg-noir-900 border border-acid/60 max-w-md mx-auto text-center space-y-3 animate-in fade-in">
            <div className="w-10 h-10 rounded-full bg-acid/10 border border-acid text-acid flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-noir-50 uppercase tracking-wide">
              DEMO REGISTRATION LOGGED
            </h4>
            <p className="font-mono text-xs text-noir-300 leading-relaxed">
              Email <strong className="text-acid">{email}</strong> recorded in client session memory.
            </p>
            <div className="p-2.5 bg-noir-950 border border-noir-800 text-[10px] font-mono text-noir-400">
              Honest Disclosure: Operating in client-side demonstration mode. No data has been transmitted or stored on external servers.
            </div>
            <button
              onClick={() => {
                setStatus('idle');
                setEmail('');
              }}
              className="text-xs font-mono text-acid hover:underline pt-2"
            >
              Register Another Address
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3" noValidate>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="ENTER YOUR PROTOCOL EMAIL..."
                  aria-label="Email address for priority updates"
                  disabled={status === 'loading'}
                  className={`w-full px-4 py-3.5 bg-noir-900 border text-xs font-mono text-noir-100 placeholder:text-noir-500 focus:outline-none focus:ring-1 transition-all ${
                    status === 'error'
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-noir-700 focus:border-acid focus:ring-acid'
                  }`}
                />
              </div>

              <Button
                type="submit"
                variant="acid"
                size="md"
                disabled={status === 'loading'}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {status === 'loading' ? 'LOGGING...' : 'JOIN'}
              </Button>
            </div>

            {status === 'error' && (
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-red-400 pt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <p className="text-[10px] font-mono text-noir-500 pt-2 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-acid" />
              <span>OFFLINE DEMO HARNESS • ZERO TRACKING • HONEST FRONTEND</span>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
