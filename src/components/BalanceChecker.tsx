import { useState, type FormEvent } from 'react';

/** Looks up the balance of a public Bitcoin address. The private key is never involved. */
function BalanceChecker() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = address.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setBalance(null);

    try {
      const response = await fetch(`https://blockchain.info/rawaddr/${encodeURIComponent(trimmed)}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = (await response.json()) as { final_balance: number };
      setBalance(data.final_balance);
    } catch {
      setError('No balance found for that address. Check it and try again.');
    } finally {
      setLoading(false);
    }
  };

  const btc = (satoshi: number) => (satoshi / 100_000_000).toFixed(8);

  return (
    <form
      onSubmit={handleSubmit}
      className="card card-border mx-auto mt-12 max-w-xl rounded-box border-base-300 bg-base-100"
    >
      <div className="card-body gap-5 p-8 md:p-10">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-sm font-medium">Bitcoin address</legend>
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <input
              type="text"
              inputMode="text"
              autoComplete="off"
              spellCheck={false}
              placeholder="bc1q… or 1A1z…"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input input-lg w-full min-w-0 rounded-full border-base-300 bg-base-200 px-5 font-mono text-sm"
            />
            <button
              type="submit"
              disabled={loading || !address.trim()}
              className="btn btn-primary btn-lg px-7 sm:shrink-0"
            >
              {loading ? <span className="loading loading-spinner loading-sm" /> : 'Check'}
            </button>
          </div>
        </fieldset>

        {error && (
          <div role="alert" className="alert alert-error alert-soft">
            <span>{error}</span>
          </div>
        )}

        {balance !== null && (
          <div className="stats rounded-box bg-base-200">
            <div className="stat place-items-center">
              <div className="stat-title">Balance</div>
              <div className="stat-value tracking-[-0.03em]">{btc(balance)} BTC</div>
              <div className="stat-desc">{balance.toLocaleString()} satoshi</div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default BalanceChecker;
