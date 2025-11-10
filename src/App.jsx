import React from 'react';
import HeroSection from './components/HeroSection';
import Ecosystem from './components/Ecosystem';
import Tokenomics from './components/Tokenomics';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroSection />
      <main>
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <h2 className="text-2xl md:text-4xl font-bold">About Oreon AI</h2>
            <p className="mt-4 text-white/80 max-w-3xl">
              Oreon AI fuses cutting-edge machine learning with decentralized infrastructure to deliver verifiable, privacy-first intelligence. Our ecosystem aligns AI services with real-world assets and token utility to unlock new economic primitives.
            </p>
          </div>
        </section>
        <Ecosystem />
        <section id="presale" className="py-16 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Token Pre-Sale</h3>
              <p className="mt-3 text-white/80">Join the whitelist for early access. Be part of the community shaping the future of intelligent, on-chain systems.</p>
              <a href="#" className="mt-6 inline-block rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">Join Whitelist</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-sm text-white/70">Countdown</p>
              <div className="mt-2 grid grid-cols-4 gap-3 text-center">
                {['30','10','45','20'].map((num, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/10">
                    <p className="text-3xl font-extrabold">{num}</p>
                    <p className="text-xs text-white/60">{['Days','Hours','Mins','Secs'][i]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Tokenomics />
        <CTASection />
        <footer className="py-10 border-t border-white/10 bg-black text-center text-white/60 text-sm">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <p>© {new Date().getFullYear()} Oreon AI • All rights reserved • Privacy • Terms • Disclaimer</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
