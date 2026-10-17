import React from 'react';
import { educationData } from '../../data';
import { SHELL, SectionIntro, Reveal } from './shared';

export default function EducationSection() {
  return (
    <section id="education" className={`relative scroll-mt-24 py-20 ${SHELL}`}>
      <SectionIntro title={educationData.title} aside={educationData.description} />

      <div className="mt-12 flex flex-col gap-5">
        {educationData.education.map((edu, index) => (
          <Reveal as="article" key={edu.degree} delay={0.08 * index} className="glass-card flex flex-col gap-5 p-6 md:p-8">
            <p className="flex flex-wrap items-center gap-x-2 font-body text-[13px] text-th-muted">
              <span className={`font-mono text-[12px] ${edu.status === 'In Progress' ? 'text-ac-ink' : ''}`}>{edu.period}</span>
              <span aria-hidden="true" className="text-th-faint">
                ·
              </span>
              <span>{edu.status}</span>
            </p>
            <div>
              <h3 className="text-[22px] leading-[1.15] tracking-[-0.03em] text-th-heading md:text-[24px]">{edu.degree}</h3>
              <p className="mt-1.5 font-body text-[15px] text-th-body">
                {edu.institution}
                <span className="text-th-muted"> · {edu.location}</span>
              </p>
            </div>
            <div className="space-y-1.5">
              {edu.achievements.map((a) => (
                <p key={a} className="font-body text-[14.5px] leading-relaxed text-th-body">
                  {a}
                </p>
              ))}
            </div>
            {edu.coursework && (
              <p className="font-body text-[14px] leading-relaxed text-th-muted">
                <span className="font-medium text-th-body">Coursework: </span>
                {edu.coursework.join(', ')}
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
