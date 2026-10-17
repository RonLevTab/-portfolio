import React from 'react';
import { aboutData } from '../../data';
import { SHELL, SectionIntro, Reveal } from './shared';

export default function AboutSection() {
  return (
    <section id="about" className={`relative scroll-mt-24 py-20 ${SHELL}`}>
      <SectionIntro title={aboutData.title} aside={aboutData.subtitle} />

      <Reveal className="glass-card mt-12 flex flex-col gap-5 p-7 md:p-9">
        {aboutData.description.map((paragraph, index) => (
          <p
            key={index}
            className={`max-w-4xl font-body leading-relaxed ${index === 0 ? 'text-[17px] text-th-heading md:text-[19px]' : 'text-[15px] text-th-body md:text-[16px]'}`}
          >
            {paragraph}
          </p>
        ))}
      </Reveal>
    </section>
  );
}
