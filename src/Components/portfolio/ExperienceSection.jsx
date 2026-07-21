import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, Shield, Star, ShieldCheck, GraduationCap, Bot, Rocket } from 'lucide-react';
import { experienceData } from '../../data';
import SectionHeading from './SectionHeading';

export default function ExperienceSection() {
  const iconMap = { Briefcase, Star, Shield, ShieldCheck, GraduationCap, Bot, Rocket };

  const experiences = experienceData.experiences.map((exp) => ({
    ...exp,
    icon: iconMap[exp.icon],
  }));

  return (
    <section id="experience" className="py-16 md:py-20 bg-th-surface-alt border-y border-th-line">
      <div className="max-w-5xl mx-auto section-padding">
        <SectionHeading
          title={experienceData.title}
          description={experienceData.description}
        />

        <div className="relative">
          {/* Timeline rail */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-th-line hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative flex gap-5"
                >
                  <span className="icon-tile h-14 w-14 flex-shrink-0 relative z-10 bg-th-surface">
                    <IconComponent className="h-6 w-6" />
                  </span>

                  <div className="editorial-card flex-1 p-6 md:p-7">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-serif text-xl text-th-heading">{exp.title}</h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-ac-pos/25 bg-ac-pos/10 px-2.5 py-0.5 text-[11px] font-medium text-ac-pos">
                              <span className="h-1.5 w-1.5 rounded-full bg-ac-pos" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="font-display text-sm font-semibold tracking-wide text-th-body">
                          {exp.company}
                        </p>
                      </div>

                      <div className="text-sm text-th-muted space-y-1 lg:text-right">
                        <div className="flex items-center gap-2 lg:justify-end">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 lg:justify-end">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 leading-relaxed text-th-body">{exp.description}</p>

                    <div className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {exp.achievements.map((achievement, aIndex) => (
                        <div key={aIndex} className="flex items-start gap-2.5 text-sm text-th-body">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-th-heading/50" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
