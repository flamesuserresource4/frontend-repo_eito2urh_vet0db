import React from 'react';
import Spline from '@splinetool/react-spline';

function NodeHero() {
  const handleScrollToForm = () => {
    const el = document.getElementById('whitelist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[620px] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Own a Node. Secure the Network. Earn the Rewards.
          </h1>
          <p className="mt-4 md:mt-6 text-white/80 text-base md:text-lg">
            Limited whitelist round for early supporters. Each node acts as a validator and earns daily rewards. 
            Whitelisted users gain first access to presale and staking pools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={handleScrollToForm} className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors">
              Get Whitelisted
            </button>
            <a href="#dashboard" className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 transition-colors">
              Node Holder Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NodeHero;
