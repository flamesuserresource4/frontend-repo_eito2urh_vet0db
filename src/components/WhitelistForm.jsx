import React, { useState } from 'react';

function WhitelistForm() {
  const [form, setForm] = useState({ email: '', wallet: '', tier: 'Lite', agree: false });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setTimeout(() => {
      setStatus('You\'re on the whitelist! We\'ll email next steps.');
    }, 800);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-black" id="whitelist">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-4xl font-bold">Whitelist Registration</h2>
        <p className="mt-3 text-white/70">Secure early access to node sales, presale allocations, and staking pools.</p>
        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
          <div>
            <label className="block text-sm text-white/80">Email</label>
            <input required name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@example.com" className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-cyan-500" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Wallet Address</label>
            <input required name="wallet" value={form.wallet} onChange={handleChange} type="text" placeholder="0x..." className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-cyan-500" />
          </div>
          <div>
            <label className="block text-sm text-white/80">Preferred Tier</label>
            <select name="tier" value={form.tier} onChange={handleChange} className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-cyan-500">
              {['Lite','Standard','Pro','Master'].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <label className="flex items-start gap-3 text-sm text-white/70">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="mt-1" required />
            I agree to the terms and acknowledge that rewards are variable and not guaranteed.
          </label>
          <button type="submit" className="w-full rounded-xl bg-cyan-500 text-black font-semibold py-3 hover:bg-cyan-400">Join Whitelist</button>
          {status && <p className="text-cyan-300 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default WhitelistForm;
