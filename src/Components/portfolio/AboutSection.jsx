import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Award, Target } from 'lucide-react';
import { aboutData } from '../../data';
import SectionHeading from './SectionHeading';
import profileImage from '../../assets/images/aboutme.jpeg';

export default function AboutSection() {
  const iconMap = { MapPin, Users, Award, Target };

  return (
    <section id="about" className="py-24 md:py-28 bg-th-page">
      <div className="max-w-6xl mx-auto section-padding">
        <SectionHeading kicker="About" title={aboutData.title} align="left" />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-th-heading">
              {aboutData.subtitle}
            </h3>
            {aboutData.description.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-th-body">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-4">
              {aboutData.highlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-th-line bg-th-surface px-4 py-3"
                  >
                    <span className="icon-tile h-9 w-9">
                      <IconComponent className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-th-body">{highlight.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="glass-panel p-3 max-w-sm w-full">
              <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
                <img
                  src={profileImage}
                  alt={aboutData.profileImage.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  style={{ imageRendering: 'high-quality' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-th-heading/15 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
