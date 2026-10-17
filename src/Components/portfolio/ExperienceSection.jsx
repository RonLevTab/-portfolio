import React from 'react';
import { experienceData } from '../../data';
import { SHELL, SectionIntro, Reveal } from './shared';

/** One glass pane for the whole history; each role is a row with its dates in the margin. */
export default function ExperienceSection() {
  return (
    <section id="experience" className={`relative scroll-mt-24 py-20 ${SHELL}`}>
      <SectionIntro align="center" title={experienceData.title} aside={experienceData.description} />

      <Reveal delay={0.1} className="glass-pane mx-auto mt-12 max-w-5xl overflow-hidden">
        <ol className="divide-y divide-th-heading/[0.08]">
          {experienceData.experiences.map((exp) => (
            <li key={`${exp.title}-${exp.company}`} className="grid gap-3 px-6 py-7 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8 md:px-9 md:py-8">
              <div className="font-body text-[13px] text-th-muted">
                <div className={`font-mono text-[12px] ${exp.current ? 'text-ac-ink' : ''}`}>{exp.period}</div>
                <div className="mt-1">{exp.location}</div>
              </div>
              <div className="min-w-0">
                <h3 className="text-[19px] leading-tight tracking-[-0.02em] text-th-heading md:text-[20px]">
                  {exp.title}
                  <span className="font-normal text-th-body"> · {exp.company}</span>
                </h3>
                <div className="mt-2.5 space-y-1.5">
                  {exp.achievements.map((a) => (
                    <p key={a} className="max-w-2xl font-body text-[14.5px] leading-relaxed text-th-body">
                      {a}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
