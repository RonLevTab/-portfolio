import React from 'react';
import { skillsData } from '../../data';
import { SHELL, SectionIntro, Reveal } from './shared';
import { GlowingEffect } from './GlowingEffect';

/** Six calm cards: a title and one plain line of what is in it. */
export default function SkillsSection() {
  return (
    <section id="skills" className={`relative scroll-mt-24 py-20 ${SHELL}`}>
      <SectionIntro align="center" title={skillsData.title} aside={skillsData.description} />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.categories.map((category, index) => (
          <Reveal key={category.title} delay={0.05 * index} className="glass-card flex flex-col gap-3 p-6 md:p-7">
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} />
            <h3 className="text-[19px] tracking-[-0.02em] text-th-heading">{category.title}</h3>
            <p className="font-body text-[15px] leading-relaxed text-th-body">{category.skills.join(', ')}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
