import React from 'react';
import { Cpu, FlaskConical, Wallet, Coins } from 'lucide-react';

const items = [
  {
    icon: Coins,
    title: 'Oreon Coin',
    desc: 'The native utility token powering payments, access, staking and governance across the Oreon ecosystem.'
  },
  {
    icon: Cpu,
    title: 'Oreon AI',
    desc: 'A modular AI engine with on-chain verifiability, RWA connectors, and privacy-first inference layers.'
  },
  {
    icon: FlaskConical,
    title: 'Oreon Labs',
    desc: 'R&D studio incubating AI × blockchain primitives, tools, and partnerships for real-world adoption.'
  },
  {
    icon: Wallet,
    title: 'OreonPay',
    desc: 'Fast, borderless settlements for AI services and RWA marketplaces using Oreon Coin.'
  }
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative py-20 bg-gradient-to-b from-black to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">Oreon Ecosystem</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Interconnected products designed to bring transparent, verifiable intelligence to the real world.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:bg-white/10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
