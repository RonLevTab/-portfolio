import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { heroData } from '../../data';

export default function HeroSection() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 aurora-frame"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 animated-grid opacity-70" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgb(120 113 108 / 0.10), transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto section-padding text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="kicker mb-8"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Data Science &amp; AI · Portfolio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-5xl md:text-7xl font-normal leading-[1.02] tracking-tight text-th-heading"
        >
          {heroData.title.main}
          <span className="block mt-1 font-italic-serif hero-gradient-text">
            {heroData.title.highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mx-auto mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-th-body"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button onClick={() => scrollTo(heroData.buttons.primary.targetId)} className="btn-primary">
            {heroData.buttons.primary.text}
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <button onClick={() => scrollTo('projects')} className="btn-ghost">
            View projects
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {heroData.stats.map((stat, index) => {
            const isLong = stat.value.length > 6;
            return (
              <div
                key={index}
                className="editorial-card px-4 py-6 flex flex-col items-center justify-center text-center"
              >
                <div
                  className={`font-serif text-th-heading leading-[1.05] ${
                    isLong ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'
                  }`}
                >
                  {stat.value}
                </div>
                <div className="mt-1.5 font-display text-[11px] uppercase tracking-[0.16em] text-th-muted">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-th-muted hover:text-th-heading transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
