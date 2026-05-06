import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Badge } from '../../ui';
import { MapPin, Calendar, Briefcase, Shield, Star, ShieldCheck, GraduationCap, Bot } from 'lucide-react';
import { experienceData } from '../../data';

export default function ExperienceSection() {
  const iconMap = {
    'Briefcase': Briefcase,
    'Star': Star,
    'Shield': Shield,
    'ShieldCheck': ShieldCheck,
    'GraduationCap': GraduationCap,
    'Bot': Bot
  };

  const experiences = experienceData.experiences.map(exp => ({
    ...exp,
    icon: iconMap[exp.icon]
  }));

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {experienceData.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {experienceData.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
                  <div className={`h-1 bg-gradient-to-r ${exp.color}`}></div>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                              {exp.current && (
                                <Badge className="bg-green-100 text-green-800 border-green-200">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <p className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</p>
                          </div>
                          
                          <div className="text-sm text-slate-500 space-y-1">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed">{exp.description}</p>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {exp.achievements.map((achievement, aIndex) => (
                              <div key={aIndex} className="flex items-center gap-2 text-slate-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
