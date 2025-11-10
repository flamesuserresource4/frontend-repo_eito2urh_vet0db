import React from 'react';
import { Cpu, Rocket, Coins, Wallet } from 'lucide-react';

const tiers = [
  {
    name: 'Lite',
    price: '$499',
    spec: 'Entry validator for enthusiasts',
    daily: '~0.5% est. daily rewards',
    icon: Cpu,
  },
  {
    name: 'Standard',
    price: '$1,499',
    spec: 'Balanced performance & yield',
    daily: '~0.8% est. daily rewards',
    icon: Rocket,
  },
  {
    name: 'Pro',
    price: '$3,499',
    spec: 'High-performance validator',
    daily: '~1.2% est. daily rewards',
    icon: Coins,
  },
  {
    name: 'Master',
    price: '$7,999',
    spec: 'Top-tier throughput & perks',
    daily: '~1.6% est. daily rewards',
    icon: Wallet,
  },
];

function NodeTiers() {
  return (
    <section className="py-16 bg-black" id="tiers">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-4xl font-bold">Node Tiers</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Choose a staking validator that matches your goals. Higher tiers unlock increased bandwidth, priority rewards, and governance weight.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map(({ name, price, spec, daily, icon: Icon }) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
              <p className="mt-4 text-3xl font-extrabold">{price}</p>
              <p className="mt-2 text-white/70">{spec}</p>
              <p className="mt-4 text-cyan-300 text-sm font-medium">{daily}</p>
              <button className="mt-6 w-full rounded-xl bg-cyan-500 text-black font-semibold py-2.5 hover:bg-cyan-400">Purchase</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NodeTiers;
