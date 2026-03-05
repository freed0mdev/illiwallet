import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import axios from "axios";

const STORE_URL = 'https://antigift.etsy.com/listing/1630826805';

const STEPS = [
  {
    number: '01',
    title: 'Receive Your ILLI Wallet',
    description:
      'Your handcrafted ILLI Wallet coin arrives in secure packaging from our Etsy shop. Inside, you\'ll find the coin with a sealed QR code containing your private key.',
  },
  {
    number: '02',
    title: 'Transfer Bitcoin',
    description:
      'Send Bitcoin from your digital wallet or exchange account to the public address on your coin. Scan the public QR code with any wallet app to easily transfer funds.',
  },
  {
    number: '03',
    title: 'Store Securely',
    description:
      'Keep your ILLI Wallet in a safe place, protected from moisture, fire, and theft. Consider using a safe deposit box or a secure home safe for long-term storage.',
  },
  {
    number: '04',
    title: 'Access Your Funds',
    description:
      'When you want to access your Bitcoin, reveal the private key QR code and sweep it into a Bitcoin wallet that supports this feature. The funds transfer to your new address instantly.',
  },
];

function InstructionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ─── Header ─── */}
      <header className="border-b border-surface-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="ILLI Wallet" className="h-8" />
          </Link>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold px-6 py-2 rounded-full text-xs"
          >
            Shop on Etsy
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="ambient-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-orange text-xs tracking-ultra uppercase font-semibold mb-4">How It Works</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl mx-auto">
            Using Your
            <span className="text-gradient-gold"> ILLI Wallet</span>
          </h1>
          <p className="mt-6 text-lg text-gray max-w-lg mx-auto">
            A simple guide to setting up, securing, and accessing your cold storage crypto wallet.
          </p>
        </div>
      </section>

      <div className="divider-gold mx-auto max-w-xl" />

      {/* ─── Steps ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-6">
            {STEPS.map((step) => (
              <div key={step.number} className="glass-card rounded-2xl p-8 md:p-10 flex gap-6 md:gap-8">
                <div className="step-number w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold mx-auto max-w-xl" />

      {/* ─── Important Notes ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-orange text-xs tracking-ultra uppercase font-semibold mb-4">Important</p>
            <h2 className="text-3xl md:text-4xl font-bold">Security Tips</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-8">
              <div className="w-10 h-10 rounded-lg step-number flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Never Share Your Private Key</h3>
              <p className="text-sm text-gray leading-relaxed">
                Your private key QR code grants full access to your funds. Keep it sealed and hidden at all times.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="w-10 h-10 rounded-lg step-number flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Use Physical Protection</h3>
              <p className="text-sm text-gray leading-relaxed">
                Store in a fireproof safe, safety deposit box, or another secure location to protect against physical damage.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="w-10 h-10 rounded-lg step-number flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Verify Before Sending</h3>
              <p className="text-sm text-gray leading-relaxed">
                Always double-check the public address before transferring funds. Send a small test amount first.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="w-10 h-10 rounded-lg step-number flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Sweep, Don't Import</h3>
              <p className="text-sm text-gray leading-relaxed">
                When accessing funds, use the "sweep" feature in your wallet app. This transfers all funds to a new, secure address.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold mx-auto max-w-xl" />

      {/* ─── Balance Checker ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-xl">
          <BitcoinAddressBalance />
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-surface-border">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/">
              <img src={logo} alt="ILLI Wallet" className="h-8 opacity-60" />
            </Link>
            <nav className="flex gap-8 text-sm text-gray-dark">
              <Link to="/" className="hover:text-orange transition-colors">
                Home
              </Link>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">
                Etsy Shop
              </a>
            </nav>
            <p className="text-sm text-gray-dark">
              &copy; ILLI Wallet {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BitcoinAddressBalance() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getBalance = async () => {
    const trimmed = address.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setBalance(null);

    try {
      const response = await axios.get(`https://blockchain.info/rawaddr/${encodeURIComponent(trimmed)}`);
      setBalance(response.data.final_balance);
    } catch {
      setError('Could not fetch balance. Please check the address and try again.');
    } finally {
      setLoading(false);
    }
  };

  const satoshiToBtc = (satoshi: number) => (satoshi / 100_000_000).toFixed(8);

  return (
    <div className="glass-card rounded-2xl p-8 md:p-10">
      <div className="text-center mb-8">
        <p className="text-orange text-xs tracking-ultra uppercase font-semibold mb-4">Balance Checker</p>
        <h2 className="text-3xl font-bold">Check Your Wallet</h2>
        <p className="mt-2 text-sm text-gray">Enter your Bitcoin public address to check the current balance.</p>
      </div>

      <div className="space-y-4">
        <input
          className="input-dark w-full px-5 py-4 rounded-xl text-sm font-mono"
          type="text"
          placeholder="Enter Bitcoin address (e.g. 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && getBalance()}
        />
        <button
          className="btn-gold w-full py-4 rounded-xl text-xs disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={getBalance}
          disabled={loading || !address.trim()}
        >
          {loading ? 'Checking...' : 'Check Balance'}
        </button>
      </div>

      {error && (
        <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {balance !== null && (
        <div className="mt-6 p-6 rounded-xl border-glow text-center">
          <p className="text-xs text-gray uppercase tracking-widest mb-2">Balance</p>
          <p className="text-3xl font-bold text-gradient-gold">{satoshiToBtc(balance)} BTC</p>
          <p className="text-sm text-gray-dark mt-1">{balance.toLocaleString()} Satoshi</p>
        </div>
      )}
    </div>
  );
}

export default InstructionsPage;
