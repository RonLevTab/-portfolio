import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../../data';
import SectionHeading from './SectionHeading';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-28 bg-th-page">
      <div className="max-w-5xl mx-auto section-padding">
        <SectionHeading
          kicker="Education"
          title={educationData.title}
          description={educationData.description}
        />

        <div className="space-y-6">
          {educationData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="editorial-card p-7 md:p-9"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-44 flex-shrink-0 space-y-3">
                  <span className="icon-tile h-14 w-14">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium border ${
                      edu.status === 'In Progress'
                        ? 'border-ac-pos/25 bg-ac-pos/10 text-ac-pos'
                        : 'border-th-line bg-th-surface-alt text-th-muted'
                    }`}
                  >
                    {edu.status === 'In Progress' && (
                      <span className="h-1.5 w-1.5 rounded-full bg-ac-pos" />
                    )}
                    {edu.status}
                  </span>
                </div>

                <div className="flex-1 space-y-5">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-2xl text-th-heading mb-1">{edu.degree}</h3>
                      <p className="font-display text-sm font-semibold tracking-wide text-th-body">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-sm text-th-muted space-y-1 lg:text-right">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.16em] text-th-muted mb-3">
                      <Award className="h-4 w-4" />
                      Achievements &amp; Activities
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, aIndex) => (
                        <div key={aIndex} className="flex items-start gap-2.5 text-th-body">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-th-heading/50" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {edu.coursework && (
                    <div>
                      <h4 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-th-muted mb-3">
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, cIndex) => (
                          <span key={cIndex} className="tech-tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
