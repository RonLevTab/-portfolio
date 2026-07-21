import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, BarChart3, Globe, Settings, Zap } from 'lucide-react';
import { skillsData } from '../../data';
import SectionHeading from './SectionHeading';

export default function SkillsSection() {
  const iconMap = { Code, Brain, BarChart3, Globe, Settings, Zap };

  return (
    <section id="skills" className="py-24 md:py-28 bg-th-surface-alt border-y border-th-line">
      <div className="max-w-6xl mx-auto section-padding">
        <SectionHeading kicker="Skills" title={skillsData.title} description={skillsData.description} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="editorial-card p-7 h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="icon-tile h-11 w-11">
                    <IconComponent className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-xl text-th-heading">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
