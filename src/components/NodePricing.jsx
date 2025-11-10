import React from 'react';

function NodePricing() {
  const rows = [
    { tier: 'Lite', price: 499, roi: '15-20%/mo (est.)', breakEven: '50-65 days', perks: 'Whitelist + Base Governance' },
    { tier: 'Standard', price: 1499, roi: '22-28%/mo (est.)', breakEven: '35-45 days', perks: 'Priority Support + Extra Weight' },
    { tier: 'Pro', price: 3499, roi: '32-40%/mo (est.)', breakEven: '25-35 days', perks: 'High Throughput + Beta Access' },
    { tier: 'Master', price: 7999, roi: '45-55%/mo (est.)', breakEven: '15-25 days', perks: 'Max Rewards + Governance Boost' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-black" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-4xl font-bold">Node Price & ROI</h2>
        <p className="mt-3 text-white/70">Transparent costs and estimated returns based on network assumptions. Actual rewards vary with network performance and validator uptime.</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-white/70 text-sm">
                <th className="px-4">Tier</th>
                <th className="px-4">Price (USD)</th>
                <th className="px-4">Est. ROI</th>
                <th className="px-4">Break-even</th>
                <th className="px-4">Perks</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.tier} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl">
                  <td className="px-4 py-4 font-semibold">{r.tier}</td>
                  <td className="px-4 py-4">${r.price.toLocaleString()}</td>
                  <td className="px-4 py-4 text-cyan-300">{r.roi}</td>
                  <td className="px-4 py-4">{r.breakEven}</td>
                  <td className="px-4 py-4 text-white/80">{r.perks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-white/50">Estimates are illustrative and not financial advice. Rewards depend on network conditions and node performance.</p>
      </div>
    </section>
  );
}

export default NodePricing;
