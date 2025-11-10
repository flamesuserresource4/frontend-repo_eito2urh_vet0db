import React from 'react';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Start Building the Future with Oreon AI</h3>
            <p className="mt-3 text-white/70 max-w-2xl">Join the movement to bring verifiable intelligence to the world. Be an early builder, partner, or community member.</p>
          </div>
          <a href="#presale" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">
            <Rocket size={18} /> Join the Whitelist
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
