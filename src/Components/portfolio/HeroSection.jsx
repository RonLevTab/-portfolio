import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { heroData, navigationData } from '../../data';
import { SHELL, PillButton } from './shared';
import portrait from '../../assets/images/portrait.jpg';

/** First screen: name, headline, one line about Ron and two actions, beside his portrait. */
export default function HeroSection() {
  const reduced = useReducedMotion();
  const { title, description, buttons } = heroData;

  const rise = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
          animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
        };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });

  return (
    <section id="hero" data-flow-head className="relative flex min-h-[86svh] flex-col justify-center pb-16 pt-28 md:pt-36">
      <div className={`${SHELL} grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16`}>
        <div>
          <motion.p {...rise(0.1)} className="font-body text-[14px] font-medium text-ac-ink">
            {navigationData.brand}
          </motion.p>
          <h1 className="mt-5 text-[clamp(2.75rem,5.4vw,4.75rem)] leading-[1.02] text-th-heading">
            <motion.span {...rise(0.2)} className="block">
              {title.main}
            </motion.span>
            <motion.span
              {...rise(0.35)}
              className="block font-serif text-[1.1em] font-light tracking-[-0.03em] text-th-heading/85"
            >
              {title.highlight}
            </motion.span>
          </h1>
          <motion.p {...rise(0.5)} className="mt-7 max-w-xl font-body text-[17px] leading-relaxed text-th-body md:text-[18px]">
            {description}
          </motion.p>
          <motion.div {...rise(0.65)} className="mt-9 flex flex-wrap items-center gap-3">
            <PillButton onClick={() => scrollTo(buttons.primary.targetId)}>
              {buttons.primary.text}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </PillButton>
            <PillButton variant="ghost" onClick={() => scrollTo(buttons.secondary.targetId)}>
              {buttons.secondary.text}
            </PillButton>
          </motion.div>
        </div>

        <motion.div
          {...rise(0.3)}
          className="glass-card mx-auto w-full max-w-[340px] p-2.5 sm:max-w-[400px] lg:max-w-[440px] lg:justify-self-end"
        >
          <img
            src={portrait}
            alt={`Portrait of ${navigationData.brand}`}
            width={880}
            height={1100}
            className="block aspect-[4/5] w-full rounded-[16px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
