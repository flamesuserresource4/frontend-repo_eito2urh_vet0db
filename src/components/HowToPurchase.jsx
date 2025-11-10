import React from 'react';

function HowToPurchase() {
  const steps = [
    { n: 1, t: 'Connect Wallet', d: 'Use a supported wallet to authenticate and verify whitelist status.' },
    { n: 2, t: 'Choose Your Tier', d: 'Select Lite, Standard, Pro, or Master based on your goals.' },
    { n: 3, t: 'Complete Payment', d: 'Pay securely in crypto or supported stablecoins during the whitelist round.' },
    { n: 4, t: 'Activate Node', d: 'Provision your validator. You’ll receive setup details and monitoring access.' },
  ];

  return (
    <section className="py-16 bg-black" id="how-to">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-4xl font-bold">How to Purchase a Node</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-cyan-300">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToPurchase;
