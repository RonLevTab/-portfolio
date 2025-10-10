import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../ui';
import { MapPin, Users, Award, Target } from 'lucide-react';
import { aboutData } from '../../data';
import profileImage from '../../assets/images/aboutme.jpeg';

export default function AboutSection() {
  const iconMap = {
    MapPin,
    Users,
    Award,
    Target
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {aboutData.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">
                {aboutData.subtitle}
              </h3>
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {aboutData.highlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon];
                return (
                  <div key={index} className="flex items-center gap-3">
                    <IconComponent className={`w-5 h-5 ${highlight.color}`} />
                    <span className="text-slate-600">{highlight.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Profile Image */}
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={profileImage}
                    alt={aboutData.profileImage.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                  {/* Gradient overlay for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}