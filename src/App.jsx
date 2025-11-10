import React from 'react';
import NodeHero from './components/NodeHero';
import NodeTiers from './components/NodeTiers';
import NodePricing from './components/NodePricing';
import HowToPurchase from './components/HowToPurchase';
import WhitelistForm from './components/WhitelistForm';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <NodeHero />
      <main>
        <NodeTiers />
        <NodePricing />
        <HowToPurchase />
        <WhitelistForm />
        <section id="dashboard" className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-4xl font-bold">Node Holder Dashboard</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Login or connect your wallet to view your nodes, rewards, and validator metrics. (Integration coming soon.)</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400">Connect Wallet</button>
              <button className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40">Login</button>
            </div>
          </div>
        </section>
        <footer className="py-10 border-t border-white/10 bg-black text-center text-white/60 text-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p>© {new Date().getFullYear()} Oreon AI • Node Sales • Privacy • Terms</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
