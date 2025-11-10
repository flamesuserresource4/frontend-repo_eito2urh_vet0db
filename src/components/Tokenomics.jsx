import React from 'react';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">Tokenomics</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Transparent economics to align long-term incentives across builders, users, and partners.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="text-lg font-semibold">Oreon Coin Utility</h3>
            <ul className="mt-4 space-y-3 text-white/80 list-disc list-inside">
              <li>Payments for AI services and APIs</li>
              <li>Staking for priority access and yield</li>
              <li>Governance for roadmap decisions</li>
              <li>Rewards for contributions and data provision</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-semibold text-white">Total Supply</p>
                <p>1,000,000,000 ORE</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-semibold text-white">Pre-Sale</p>
                <p>Q2 2025 — Whitelist live</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="text-lg font-semibold">Allocation Overview</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10">
                <p className="font-semibold">Community & Rewards</p>
                <p className="text-white/80">35%</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10">
                <p className="font-semibold">Pre-Sale & Liquidity</p>
                <p className="text-white/80">25%</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10">
                <p className="font-semibold">Team & Advisors</p>
                <p className="text-white/80">20%</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10">
                <p className="font-semibold">Treasury & R&D</p>
                <p className="text-white/80">20%</p>
              </div>
            </div>
            <p className="mt-6 text-white/70 text-sm">Smart Contract: To be announced • Audit: CertiK (scheduled)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
