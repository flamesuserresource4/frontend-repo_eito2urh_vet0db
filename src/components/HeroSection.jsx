import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Coins } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[85vh] grid place-items-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        <p className="text-xs tracking-widest uppercase text-cyan-300/80 mb-4">AI × Blockchain</p>
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-indigo-300">
          Empowering the Future of Intelligence and Decentralized Systems.
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
          Oreon AI unifies advanced machine intelligence with secure on-chain rails to power real-world utility, tokenized value, and open innovation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors"
          >
            <Rocket size={18} /> Explore Oreon AI
          </a>
          <a
            href="#presale"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 backdrop-blur transition-colors"
          >
            <Coins size={18} /> Join the Pre-Sale
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
